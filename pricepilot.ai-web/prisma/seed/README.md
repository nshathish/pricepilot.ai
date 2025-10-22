# Seed Files Organization

This directory contains modular seed files for the Dynamic Markdown Manager database.

## Structure

```
seed/
├── utils.ts          # Shared utilities (D, rand, date helpers)
├── channels.ts       # Marketing channels data
├── settings.ts       # System configuration settings
├── products.ts       # Product catalog
├── inventory.ts      # Stock levels and locations
├── campaigns.ts      # Marketing campaigns and channel assignments
├── competitors.ts    # Competitor data and pricing history
├── sales.ts          # Historical sales data (30 days)
└── price-history.ts  # Product pricing history and markdowns
```

## Usage

Run the main seed file:
```bash
npx tsx seed.ts
```

## Benefits

- **Modular**: Each domain has its own file
- **Maintainable**: Easy to update individual sections
- **Testable**: Can test or run individual seeders
- **Readable**: Smaller, focused files are easier to understand
- **Reusable**: Individual seeders can be used in different contexts

## Dependencies

Each seeder handles its own dependencies and returns data needed by other seeders. The main seed.ts file orchestrates the correct order:

1. Settings (no dependencies)
2. Channels (no dependencies)
3. Products (no dependencies)
4. Inventory (needs products)
5. Campaigns (needs channels)
6. Competitors (needs products)
7. Sales (needs products + channels)
8. Price History (needs products)