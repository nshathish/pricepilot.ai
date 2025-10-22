from sqlmodel import SQLModel, inspect
from typing import Dict, List, Any
from collections import defaultdict

from app.db.sessions import engine


def validate_schema_detailed():
    """
    Comprehensive schema comparison between SQLModel definitions and actual database
    Returns detailed differences including columns, types, constraints, etc.
    """
    inspector = inspect(engine)
    differences = []

    # Get expected and actual tables
    expected_tables = set(SQLModel.metadata.tables.keys())
    actual_tables = set(inspector.get_table_names())

    # Table-level differences
    missing_tables = expected_tables - actual_tables
    extra_tables = actual_tables - expected_tables

    for table in missing_tables:
        differences.append({
            'level': 'table',
            'type': 'missing_table',
            'table': table,
            'message': f"Table '{table}' is defined in SQLModel but missing in database"
        })

    for table in extra_tables:
        differences.append({
            'level': 'table',
            'type': 'extra_table',
            'table': table,
            'message': f"Table '{table}' exists in database but not in SQLModel"
        })

    # Column-level comparison for common tables
    common_tables = expected_tables & actual_tables
    for table_name in common_tables:
        table_diffs = compare_table_schema(table_name, inspector)
        differences.extend(table_diffs)

    return {
        'synchronized': len(differences) == 0,
        'differences': differences,
        'summary': {
            'total_differences': len(differences),
            'missing_tables': len(missing_tables),
            'extra_tables': len(extra_tables),
            'column_differences': len([d for d in differences if d['level'] == 'column'])
        }
    }


def compare_table_schema(table_name: str, inspector) -> List[Dict[str, Any]]:
    """Compare detailed table schema between SQLModel and actual database"""
    differences = []
    expected_table = SQLModel.metadata.tables[table_name]

    # Get columns from both sources
    expected_columns = {col.name: col for col in expected_table.columns}
    actual_columns = {col['name']: col for col in inspector.get_columns(table_name)}

    all_column_names = set(expected_columns.keys()) | set(actual_columns.keys())

    for col_name in all_column_names:
        if col_name in expected_columns and col_name not in actual_columns:
            differences.append({
                'level': 'column',
                'type': 'missing_column',
                'table': table_name,
                'column': col_name,
                'message': f"Column '{col_name}' missing in database"
            })
            continue

        if col_name in actual_columns and col_name not in expected_columns:
            differences.append({
                'level': 'column',
                'type': 'extra_column',
                'table': table_name,
                'column': col_name,
                'message': f"Extra column '{col_name}' in database (not in SQLModel)"
            })
            continue

        # Both exist - compare properties
        exp_col = expected_columns[col_name]
        act_col = actual_columns[col_name]

        # Compare data types
        exp_type = str(exp_col.type).lower()
        act_type = str(act_col['type']).lower()

        # Normalize type names for comparison
        exp_type_norm = normalize_type(exp_type)
        act_type_norm = normalize_type(act_type)

        if exp_type_norm != act_type_norm:
            differences.append({
                'level': 'column',
                'type': 'type_mismatch',
                'table': table_name,
                'column': col_name,
                'message': f"Type mismatch: SQLModel has {exp_type}, DB has {act_type}",
                'details': {
                    'expected_type': exp_type,
                    'actual_type': act_type
                }
            })

        # Compare nullable constraint
        if exp_col.nullable != act_col['nullable']:
            differences.append({
                'level': 'column',
                'type': 'nullable_mismatch',
                'table': table_name,
                'column': col_name,
                'message': f"Nullable mismatch: SQLModel has {exp_col.nullable}, DB has {act_col['nullable']}",
                'details': {
                    'expected_nullable': exp_col.nullable,
                    'actual_nullable': act_col['nullable']
                }
            })

        # Compare default values
        exp_default = get_column_default(exp_col)
        act_default = act_col.get('default')

        if exp_default != act_default:
            differences.append({
                'level': 'column',
                'type': 'default_mismatch',
                'table': table_name,
                'column': col_name,
                'message': f"Default value mismatch",
                'details': {
                    'expected_default': exp_default,
                    'actual_default': act_default
                }
            })

    # Compare primary keys
    exp_pk = {col.name for col in expected_table.primary_key}
    act_pk = set(inspector.get_pk_constraint(table_name)['constrained_columns'])

    if exp_pk != act_pk:
        differences.append({
            'level': 'constraint',
            'type': 'primary_key_mismatch',
            'table': table_name,
            'message': f"Primary key mismatch: SQLModel has {exp_pk}, DB has {act_pk}",
            'details': {
                'expected_primary_key': list(exp_pk),
                'actual_primary_key': list(act_pk)
            }
        })

    # Compare indexes (simplified)
    exp_indexes = {idx.name for idx in expected_table.indexes}
    act_indexes = {idx['name'] for idx in inspector.get_indexes(table_name)}

    if exp_indexes != act_indexes:
        differences.append({
            'level': 'index',
            'type': 'index_mismatch',
            'table': table_name,
            'message': f"Index mismatch: SQLModel has {exp_indexes}, DB has {act_indexes}",
            'details': {
                'expected_indexes': list(exp_indexes),
                'actual_indexes': list(act_indexes)
            }
        })

    return differences


def normalize_type(type_str: str) -> str:
    """Normalize type names for comparison"""
    type_str = type_str.lower()

    # Handle PostgreSQL specific types
    type_mappings = {
        'varchar': 'string',
        'text': 'string',
        'int4': 'integer',
        'int8': 'biginteger',
        'bool': 'boolean',
        'timestamp with time zone': 'timestamp',
        'timestamptz': 'timestamp',
    }

    for old, new in type_mappings.items():
        if old in type_str:
            type_str = type_str.replace(old, new)

    return type_str


def get_column_default(column):
    """Extract default value from column"""
    if column.default is None:
        return None

    if hasattr(column.default, 'arg'):
        return column.default.arg

    return str(column.default)


def print_detailed_schema_report():
    """Print a comprehensive schema difference report grouped by table"""
    result = validate_schema_detailed()

    print("🔍 Detailed Schema Compliance Report")
    print("=" * 60)

    if result['synchronized']:
        print("✅ Perfect match! Database schema is fully synchronized with SQLModels")
        return True

    # Group differences by table
    by_table = defaultdict(list)
    table_level_issues = []

    for diff in result['differences']:
        if diff['level'] == 'table':
            table_level_issues.append(diff)
        else:
            by_table[diff['table']].append(diff)

    # Print table-level issues first
    if table_level_issues:
        print("\n📊 TABLE-LEVEL ISSUES:")
        for diff in table_level_issues:
            print(f"   🔴 {diff['message']}")

    # Print table-by-table issues
    if by_table:
        print("\n📊 TABLE-SPECIFIC ISSUES:")
        for table_name in sorted(by_table.keys()):
            print(f"\n   📋 TABLE: {table_name}")

            # Group issues by type within this table
            by_type = defaultdict(list)
            for diff in by_table[table_name]:
                by_type[diff['type']].append(diff)

            # Print each issue type
            for issue_type, items in by_type.items():
                print(f"      ⚠️  {issue_type.upper().replace('_', ' ')}:")
                for item in items:
                    if 'column' in item:
                        print(f"         • {item['column']}: {item['message']}")
                    else:
                        print(f"         • {item['message']}")

                    # Show details if available
                    if 'details' in item:
                        for key, value in item['details'].items():
                            print(f"           {key}: {value}")

    # Summary
    summary = result['summary']
    print(f"\n📈 SUMMARY:")
    print(f"   Total differences: {summary['total_differences']}")
    print(f"   Missing tables: {summary['missing_tables']}")
    print(f"   Extra tables: {summary['extra_tables']}")
    print(f"   Column/constraint differences: {summary['column_differences']}")

    return False


def validate_schema():
    """Original simple validation (backwards compatibility)"""
    result = validate_schema_detailed()
    return {
        'synchronized': result['synchronized'],
        'missing_tables': [d for d in result['differences'] if d['type'] == 'missing_table'],
        'extra_tables': [d for d in result['differences'] if d['type'] == 'extra_table'],
    }
