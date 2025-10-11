/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model Product
 *
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>;
/**
 * Model Inventory
 *
 */
export type Inventory = $Result.DefaultSelection<Prisma.$InventoryPayload>;
/**
 * Model PriceHistory
 *
 */
export type PriceHistory =
  $Result.DefaultSelection<Prisma.$PriceHistoryPayload>;
/**
 * Model SalesDaily
 *
 */
export type SalesDaily = $Result.DefaultSelection<Prisma.$SalesDailyPayload>;
/**
 * Model ElasticityEstimate
 *
 */
export type ElasticityEstimate =
  $Result.DefaultSelection<Prisma.$ElasticityEstimatePayload>;
/**
 * Model Competitor
 *
 */
export type Competitor = $Result.DefaultSelection<Prisma.$CompetitorPayload>;
/**
 * Model CompetitorPrice
 *
 */
export type CompetitorPrice =
  $Result.DefaultSelection<Prisma.$CompetitorPricePayload>;
/**
 * Model MarkdownEvaluation
 *
 */
export type MarkdownEvaluation =
  $Result.DefaultSelection<Prisma.$MarkdownEvaluationPayload>;
/**
 * Model MarkdownActionLog
 *
 */
export type MarkdownActionLog =
  $Result.DefaultSelection<Prisma.$MarkdownActionLogPayload>;
/**
 * Model ActionOutcome
 *
 */
export type ActionOutcome =
  $Result.DefaultSelection<Prisma.$ActionOutcomePayload>;
/**
 * Model Setting
 *
 */
export type Setting = $Result.DefaultSelection<Prisma.$SettingPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const ProductStatus: {
    active: 'active';
    discontinued: 'discontinued';
  };

  export type ProductStatus =
    (typeof ProductStatus)[keyof typeof ProductStatus];
}

export type ProductStatus = $Enums.ProductStatus;

export const ProductStatus: typeof $Enums.ProductStatus;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **Inventory** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Inventories
   * const inventories = await prisma.inventory.findMany()
   * ```
   */
  get inventory(): Prisma.InventoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.priceHistory`: Exposes CRUD operations for the **PriceHistory** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more PriceHistories
   * const priceHistories = await prisma.priceHistory.findMany()
   * ```
   */
  get priceHistory(): Prisma.PriceHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salesDaily`: Exposes CRUD operations for the **SalesDaily** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more SalesDailies
   * const salesDailies = await prisma.salesDaily.findMany()
   * ```
   */
  get salesDaily(): Prisma.SalesDailyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.elasticityEstimate`: Exposes CRUD operations for the **ElasticityEstimate** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ElasticityEstimates
   * const elasticityEstimates = await prisma.elasticityEstimate.findMany()
   * ```
   */
  get elasticityEstimate(): Prisma.ElasticityEstimateDelegate<
    ExtArgs,
    ClientOptions
  >;

  /**
   * `prisma.competitor`: Exposes CRUD operations for the **Competitor** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Competitors
   * const competitors = await prisma.competitor.findMany()
   * ```
   */
  get competitor(): Prisma.CompetitorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.competitorPrice`: Exposes CRUD operations for the **CompetitorPrice** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more CompetitorPrices
   * const competitorPrices = await prisma.competitorPrice.findMany()
   * ```
   */
  get competitorPrice(): Prisma.CompetitorPriceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.markdownEvaluation`: Exposes CRUD operations for the **MarkdownEvaluation** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more MarkdownEvaluations
   * const markdownEvaluations = await prisma.markdownEvaluation.findMany()
   * ```
   */
  get markdownEvaluation(): Prisma.MarkdownEvaluationDelegate<
    ExtArgs,
    ClientOptions
  >;

  /**
   * `prisma.markdownActionLog`: Exposes CRUD operations for the **MarkdownActionLog** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more MarkdownActionLogs
   * const markdownActionLogs = await prisma.markdownActionLog.findMany()
   * ```
   */
  get markdownActionLog(): Prisma.MarkdownActionLogDelegate<
    ExtArgs,
    ClientOptions
  >;

  /**
   * `prisma.actionOutcome`: Exposes CRUD operations for the **ActionOutcome** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ActionOutcomes
   * const actionOutcomes = await prisma.actionOutcome.findMany()
   * ```
   */
  get actionOutcome(): Prisma.ActionOutcomeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.setting`: Exposes CRUD operations for the **Setting** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Settings
   * const settings = await prisma.setting.findMany()
   * ```
   */
  get setting(): Prisma.SettingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.17.0
   * Query Engine version: c0aafc03b8ef6cdced8654b9a817999e02457d6a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the repositories)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the repositories)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    Product: 'Product';
    Inventory: 'Inventory';
    PriceHistory: 'PriceHistory';
    SalesDaily: 'SalesDaily';
    ElasticityEstimate: 'ElasticityEstimate';
    Competitor: 'Competitor';
    CompetitorPrice: 'CompetitorPrice';
    MarkdownEvaluation: 'MarkdownEvaluation';
    MarkdownActionLog: 'MarkdownActionLog';
    ActionOutcome: 'ActionOutcome';
    Setting: 'Setting';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | 'product'
        | 'inventory'
        | 'priceHistory'
        | 'salesDaily'
        | 'elasticityEstimate'
        | 'competitor'
        | 'competitorPrice'
        | 'markdownEvaluation'
        | 'markdownActionLog'
        | 'actionOutcome'
        | 'setting';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>;
        fields: Prisma.ProductFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[];
          };
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[];
          };
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[];
          };
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProduct>;
          };
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProductGroupByOutputType>[];
          };
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>;
            result: $Utils.Optional<ProductCountAggregateOutputType> | number;
          };
        };
      };
      Inventory: {
        payload: Prisma.$InventoryPayload<ExtArgs>;
        fields: Prisma.InventoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.InventoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.InventoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>;
          };
          findFirst: {
            args: Prisma.InventoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.InventoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>;
          };
          findMany: {
            args: Prisma.InventoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[];
          };
          create: {
            args: Prisma.InventoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>;
          };
          createMany: {
            args: Prisma.InventoryCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.InventoryCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[];
          };
          delete: {
            args: Prisma.InventoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>;
          };
          update: {
            args: Prisma.InventoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>;
          };
          deleteMany: {
            args: Prisma.InventoryDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.InventoryUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.InventoryUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[];
          };
          upsert: {
            args: Prisma.InventoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>;
          };
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateInventory>;
          };
          groupBy: {
            args: Prisma.InventoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<InventoryGroupByOutputType>[];
          };
          count: {
            args: Prisma.InventoryCountArgs<ExtArgs>;
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number;
          };
        };
      };
      PriceHistory: {
        payload: Prisma.$PriceHistoryPayload<ExtArgs>;
        fields: Prisma.PriceHistoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PriceHistoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PriceHistoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>;
          };
          findFirst: {
            args: Prisma.PriceHistoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PriceHistoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>;
          };
          findMany: {
            args: Prisma.PriceHistoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>[];
          };
          create: {
            args: Prisma.PriceHistoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>;
          };
          createMany: {
            args: Prisma.PriceHistoryCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PriceHistoryCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>[];
          };
          delete: {
            args: Prisma.PriceHistoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>;
          };
          update: {
            args: Prisma.PriceHistoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>;
          };
          deleteMany: {
            args: Prisma.PriceHistoryDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PriceHistoryUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.PriceHistoryUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>[];
          };
          upsert: {
            args: Prisma.PriceHistoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>;
          };
          aggregate: {
            args: Prisma.PriceHistoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePriceHistory>;
          };
          groupBy: {
            args: Prisma.PriceHistoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PriceHistoryGroupByOutputType>[];
          };
          count: {
            args: Prisma.PriceHistoryCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<PriceHistoryCountAggregateOutputType>
              | number;
          };
        };
      };
      SalesDaily: {
        payload: Prisma.$SalesDailyPayload<ExtArgs>;
        fields: Prisma.SalesDailyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.SalesDailyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SalesDailyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.SalesDailyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SalesDailyPayload>;
          };
          findFirst: {
            args: Prisma.SalesDailyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SalesDailyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.SalesDailyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SalesDailyPayload>;
          };
          findMany: {
            args: Prisma.SalesDailyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SalesDailyPayload>[];
          };
          create: {
            args: Prisma.SalesDailyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SalesDailyPayload>;
          };
          createMany: {
            args: Prisma.SalesDailyCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.SalesDailyCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SalesDailyPayload>[];
          };
          delete: {
            args: Prisma.SalesDailyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SalesDailyPayload>;
          };
          update: {
            args: Prisma.SalesDailyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SalesDailyPayload>;
          };
          deleteMany: {
            args: Prisma.SalesDailyDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.SalesDailyUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.SalesDailyUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SalesDailyPayload>[];
          };
          upsert: {
            args: Prisma.SalesDailyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SalesDailyPayload>;
          };
          aggregate: {
            args: Prisma.SalesDailyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSalesDaily>;
          };
          groupBy: {
            args: Prisma.SalesDailyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SalesDailyGroupByOutputType>[];
          };
          count: {
            args: Prisma.SalesDailyCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<SalesDailyCountAggregateOutputType>
              | number;
          };
        };
      };
      ElasticityEstimate: {
        payload: Prisma.$ElasticityEstimatePayload<ExtArgs>;
        fields: Prisma.ElasticityEstimateFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ElasticityEstimateFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ElasticityEstimatePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ElasticityEstimateFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ElasticityEstimatePayload>;
          };
          findFirst: {
            args: Prisma.ElasticityEstimateFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ElasticityEstimatePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ElasticityEstimateFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ElasticityEstimatePayload>;
          };
          findMany: {
            args: Prisma.ElasticityEstimateFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ElasticityEstimatePayload>[];
          };
          create: {
            args: Prisma.ElasticityEstimateCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ElasticityEstimatePayload>;
          };
          createMany: {
            args: Prisma.ElasticityEstimateCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ElasticityEstimateCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ElasticityEstimatePayload>[];
          };
          delete: {
            args: Prisma.ElasticityEstimateDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ElasticityEstimatePayload>;
          };
          update: {
            args: Prisma.ElasticityEstimateUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ElasticityEstimatePayload>;
          };
          deleteMany: {
            args: Prisma.ElasticityEstimateDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ElasticityEstimateUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ElasticityEstimateUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ElasticityEstimatePayload>[];
          };
          upsert: {
            args: Prisma.ElasticityEstimateUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ElasticityEstimatePayload>;
          };
          aggregate: {
            args: Prisma.ElasticityEstimateAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateElasticityEstimate>;
          };
          groupBy: {
            args: Prisma.ElasticityEstimateGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ElasticityEstimateGroupByOutputType>[];
          };
          count: {
            args: Prisma.ElasticityEstimateCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<ElasticityEstimateCountAggregateOutputType>
              | number;
          };
        };
      };
      Competitor: {
        payload: Prisma.$CompetitorPayload<ExtArgs>;
        fields: Prisma.CompetitorFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CompetitorFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CompetitorFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>;
          };
          findFirst: {
            args: Prisma.CompetitorFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CompetitorFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>;
          };
          findMany: {
            args: Prisma.CompetitorFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>[];
          };
          create: {
            args: Prisma.CompetitorCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>;
          };
          createMany: {
            args: Prisma.CompetitorCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CompetitorCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>[];
          };
          delete: {
            args: Prisma.CompetitorDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>;
          };
          update: {
            args: Prisma.CompetitorUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>;
          };
          deleteMany: {
            args: Prisma.CompetitorDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CompetitorUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CompetitorUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>[];
          };
          upsert: {
            args: Prisma.CompetitorUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>;
          };
          aggregate: {
            args: Prisma.CompetitorAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompetitor>;
          };
          groupBy: {
            args: Prisma.CompetitorGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompetitorGroupByOutputType>[];
          };
          count: {
            args: Prisma.CompetitorCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<CompetitorCountAggregateOutputType>
              | number;
          };
        };
      };
      CompetitorPrice: {
        payload: Prisma.$CompetitorPricePayload<ExtArgs>;
        fields: Prisma.CompetitorPriceFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CompetitorPriceFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompetitorPricePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CompetitorPriceFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompetitorPricePayload>;
          };
          findFirst: {
            args: Prisma.CompetitorPriceFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompetitorPricePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CompetitorPriceFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompetitorPricePayload>;
          };
          findMany: {
            args: Prisma.CompetitorPriceFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompetitorPricePayload>[];
          };
          create: {
            args: Prisma.CompetitorPriceCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompetitorPricePayload>;
          };
          createMany: {
            args: Prisma.CompetitorPriceCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CompetitorPriceCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompetitorPricePayload>[];
          };
          delete: {
            args: Prisma.CompetitorPriceDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompetitorPricePayload>;
          };
          update: {
            args: Prisma.CompetitorPriceUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompetitorPricePayload>;
          };
          deleteMany: {
            args: Prisma.CompetitorPriceDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CompetitorPriceUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CompetitorPriceUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompetitorPricePayload>[];
          };
          upsert: {
            args: Prisma.CompetitorPriceUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompetitorPricePayload>;
          };
          aggregate: {
            args: Prisma.CompetitorPriceAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompetitorPrice>;
          };
          groupBy: {
            args: Prisma.CompetitorPriceGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompetitorPriceGroupByOutputType>[];
          };
          count: {
            args: Prisma.CompetitorPriceCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<CompetitorPriceCountAggregateOutputType>
              | number;
          };
        };
      };
      MarkdownEvaluation: {
        payload: Prisma.$MarkdownEvaluationPayload<ExtArgs>;
        fields: Prisma.MarkdownEvaluationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.MarkdownEvaluationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MarkdownEvaluationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.MarkdownEvaluationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MarkdownEvaluationPayload>;
          };
          findFirst: {
            args: Prisma.MarkdownEvaluationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MarkdownEvaluationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.MarkdownEvaluationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MarkdownEvaluationPayload>;
          };
          findMany: {
            args: Prisma.MarkdownEvaluationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MarkdownEvaluationPayload>[];
          };
          create: {
            args: Prisma.MarkdownEvaluationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MarkdownEvaluationPayload>;
          };
          createMany: {
            args: Prisma.MarkdownEvaluationCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.MarkdownEvaluationCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MarkdownEvaluationPayload>[];
          };
          delete: {
            args: Prisma.MarkdownEvaluationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MarkdownEvaluationPayload>;
          };
          update: {
            args: Prisma.MarkdownEvaluationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MarkdownEvaluationPayload>;
          };
          deleteMany: {
            args: Prisma.MarkdownEvaluationDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.MarkdownEvaluationUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.MarkdownEvaluationUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MarkdownEvaluationPayload>[];
          };
          upsert: {
            args: Prisma.MarkdownEvaluationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MarkdownEvaluationPayload>;
          };
          aggregate: {
            args: Prisma.MarkdownEvaluationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMarkdownEvaluation>;
          };
          groupBy: {
            args: Prisma.MarkdownEvaluationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MarkdownEvaluationGroupByOutputType>[];
          };
          count: {
            args: Prisma.MarkdownEvaluationCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<MarkdownEvaluationCountAggregateOutputType>
              | number;
          };
        };
      };
      MarkdownActionLog: {
        payload: Prisma.$MarkdownActionLogPayload<ExtArgs>;
        fields: Prisma.MarkdownActionLogFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.MarkdownActionLogFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MarkdownActionLogPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.MarkdownActionLogFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MarkdownActionLogPayload>;
          };
          findFirst: {
            args: Prisma.MarkdownActionLogFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MarkdownActionLogPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.MarkdownActionLogFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MarkdownActionLogPayload>;
          };
          findMany: {
            args: Prisma.MarkdownActionLogFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MarkdownActionLogPayload>[];
          };
          create: {
            args: Prisma.MarkdownActionLogCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MarkdownActionLogPayload>;
          };
          createMany: {
            args: Prisma.MarkdownActionLogCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.MarkdownActionLogCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MarkdownActionLogPayload>[];
          };
          delete: {
            args: Prisma.MarkdownActionLogDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MarkdownActionLogPayload>;
          };
          update: {
            args: Prisma.MarkdownActionLogUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MarkdownActionLogPayload>;
          };
          deleteMany: {
            args: Prisma.MarkdownActionLogDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.MarkdownActionLogUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.MarkdownActionLogUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MarkdownActionLogPayload>[];
          };
          upsert: {
            args: Prisma.MarkdownActionLogUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MarkdownActionLogPayload>;
          };
          aggregate: {
            args: Prisma.MarkdownActionLogAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMarkdownActionLog>;
          };
          groupBy: {
            args: Prisma.MarkdownActionLogGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MarkdownActionLogGroupByOutputType>[];
          };
          count: {
            args: Prisma.MarkdownActionLogCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<MarkdownActionLogCountAggregateOutputType>
              | number;
          };
        };
      };
      ActionOutcome: {
        payload: Prisma.$ActionOutcomePayload<ExtArgs>;
        fields: Prisma.ActionOutcomeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ActionOutcomeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActionOutcomePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ActionOutcomeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActionOutcomePayload>;
          };
          findFirst: {
            args: Prisma.ActionOutcomeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActionOutcomePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ActionOutcomeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActionOutcomePayload>;
          };
          findMany: {
            args: Prisma.ActionOutcomeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActionOutcomePayload>[];
          };
          create: {
            args: Prisma.ActionOutcomeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActionOutcomePayload>;
          };
          createMany: {
            args: Prisma.ActionOutcomeCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ActionOutcomeCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActionOutcomePayload>[];
          };
          delete: {
            args: Prisma.ActionOutcomeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActionOutcomePayload>;
          };
          update: {
            args: Prisma.ActionOutcomeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActionOutcomePayload>;
          };
          deleteMany: {
            args: Prisma.ActionOutcomeDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ActionOutcomeUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ActionOutcomeUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActionOutcomePayload>[];
          };
          upsert: {
            args: Prisma.ActionOutcomeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ActionOutcomePayload>;
          };
          aggregate: {
            args: Prisma.ActionOutcomeAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateActionOutcome>;
          };
          groupBy: {
            args: Prisma.ActionOutcomeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ActionOutcomeGroupByOutputType>[];
          };
          count: {
            args: Prisma.ActionOutcomeCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<ActionOutcomeCountAggregateOutputType>
              | number;
          };
        };
      };
      Setting: {
        payload: Prisma.$SettingPayload<ExtArgs>;
        fields: Prisma.SettingFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.SettingFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.SettingFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>;
          };
          findFirst: {
            args: Prisma.SettingFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.SettingFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>;
          };
          findMany: {
            args: Prisma.SettingFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[];
          };
          create: {
            args: Prisma.SettingCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>;
          };
          createMany: {
            args: Prisma.SettingCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.SettingCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[];
          };
          delete: {
            args: Prisma.SettingDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>;
          };
          update: {
            args: Prisma.SettingUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>;
          };
          deleteMany: {
            args: Prisma.SettingDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.SettingUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.SettingUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[];
          };
          upsert: {
            args: Prisma.SettingUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>;
          };
          aggregate: {
            args: Prisma.SettingAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSetting>;
          };
          groupBy: {
            args: Prisma.SettingGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SettingGroupByOutputType>[];
          };
          count: {
            args: Prisma.SettingCountArgs<ExtArgs>;
            result: $Utils.Optional<SettingCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null;
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    product?: ProductOmit;
    inventory?: InventoryOmit;
    priceHistory?: PriceHistoryOmit;
    salesDaily?: SalesDailyOmit;
    elasticityEstimate?: ElasticityEstimateOmit;
    competitor?: CompetitorOmit;
    competitorPrice?: CompetitorPriceOmit;
    markdownEvaluation?: MarkdownEvaluationOmit;
    markdownActionLog?: MarkdownActionLogOmit;
    actionOutcome?: ActionOutcomeOmit;
    setting?: SettingOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    inventories: number;
    priceHistories: number;
    sales: number;
    competitorPrices: number;
    markdownEvaluations: number;
    markdownActions: number;
  };

  export type ProductCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    inventories?: boolean | ProductCountOutputTypeCountInventoriesArgs;
    priceHistories?: boolean | ProductCountOutputTypeCountPriceHistoriesArgs;
    sales?: boolean | ProductCountOutputTypeCountSalesArgs;
    competitorPrices?:
      | boolean
      | ProductCountOutputTypeCountCompetitorPricesArgs;
    markdownEvaluations?:
      | boolean
      | ProductCountOutputTypeCountMarkdownEvaluationsArgs;
    markdownActions?: boolean | ProductCountOutputTypeCountMarkdownActionsArgs;
  };

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountInventoriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: InventoryWhereInput;
  };

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountPriceHistoriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PriceHistoryWhereInput;
  };

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountSalesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SalesDailyWhereInput;
  };

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCompetitorPricesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CompetitorPriceWhereInput;
  };

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountMarkdownEvaluationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MarkdownEvaluationWhereInput;
  };

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountMarkdownActionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MarkdownActionLogWhereInput;
  };

  /**
   * Count Type CompetitorCountOutputType
   */

  export type CompetitorCountOutputType = {
    prices: number;
  };

  export type CompetitorCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    prices?: boolean | CompetitorCountOutputTypeCountPricesArgs;
  };

  // Custom InputTypes
  /**
   * CompetitorCountOutputType without action
   */
  export type CompetitorCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CompetitorCountOutputType
     */
    select?: CompetitorCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompetitorCountOutputType without action
   */
  export type CompetitorCountOutputTypeCountPricesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CompetitorPriceWhereInput;
  };

  /**
   * Count Type MarkdownActionLogCountOutputType
   */

  export type MarkdownActionLogCountOutputType = {
    outcomes: number;
  };

  export type MarkdownActionLogCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    outcomes?: boolean | MarkdownActionLogCountOutputTypeCountOutcomesArgs;
  };

  // Custom InputTypes
  /**
   * MarkdownActionLogCountOutputType without action
   */
  export type MarkdownActionLogCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MarkdownActionLogCountOutputType
     */
    select?: MarkdownActionLogCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * MarkdownActionLogCountOutputType without action
   */
  export type MarkdownActionLogCountOutputTypeCountOutcomesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ActionOutcomeWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
  };

  export type ProductAvgAggregateOutputType = {
    id: number | null;
    unitCost: Decimal | null;
    basePrice: Decimal | null;
    currentPrice: Decimal | null;
    holdingCostPerUnitPerDay: Decimal | null;
  };

  export type ProductSumAggregateOutputType = {
    id: bigint | null;
    unitCost: Decimal | null;
    basePrice: Decimal | null;
    currentPrice: Decimal | null;
    holdingCostPerUnitPerDay: Decimal | null;
  };

  export type ProductMinAggregateOutputType = {
    id: bigint | null;
    sku: string | null;
    name: string | null;
    category: string | null;
    brand: string | null;
    unitCost: Decimal | null;
    basePrice: Decimal | null;
    currentPrice: Decimal | null;
    holdingCostPerUnitPerDay: Decimal | null;
    clearanceEndDate: Date | null;
    status: $Enums.ProductStatus | null;
    createdAt: Date | null;
  };

  export type ProductMaxAggregateOutputType = {
    id: bigint | null;
    sku: string | null;
    name: string | null;
    category: string | null;
    brand: string | null;
    unitCost: Decimal | null;
    basePrice: Decimal | null;
    currentPrice: Decimal | null;
    holdingCostPerUnitPerDay: Decimal | null;
    clearanceEndDate: Date | null;
    status: $Enums.ProductStatus | null;
    createdAt: Date | null;
  };

  export type ProductCountAggregateOutputType = {
    id: number;
    sku: number;
    name: number;
    category: number;
    brand: number;
    unitCost: number;
    basePrice: number;
    currentPrice: number;
    holdingCostPerUnitPerDay: number;
    clearanceEndDate: number;
    status: number;
    createdAt: number;
    _all: number;
  };

  export type ProductAvgAggregateInputType = {
    id?: true;
    unitCost?: true;
    basePrice?: true;
    currentPrice?: true;
    holdingCostPerUnitPerDay?: true;
  };

  export type ProductSumAggregateInputType = {
    id?: true;
    unitCost?: true;
    basePrice?: true;
    currentPrice?: true;
    holdingCostPerUnitPerDay?: true;
  };

  export type ProductMinAggregateInputType = {
    id?: true;
    sku?: true;
    name?: true;
    category?: true;
    brand?: true;
    unitCost?: true;
    basePrice?: true;
    currentPrice?: true;
    holdingCostPerUnitPerDay?: true;
    clearanceEndDate?: true;
    status?: true;
    createdAt?: true;
  };

  export type ProductMaxAggregateInputType = {
    id?: true;
    sku?: true;
    name?: true;
    category?: true;
    brand?: true;
    unitCost?: true;
    basePrice?: true;
    currentPrice?: true;
    holdingCostPerUnitPerDay?: true;
    clearanceEndDate?: true;
    status?: true;
    createdAt?: true;
  };

  export type ProductCountAggregateInputType = {
    id?: true;
    sku?: true;
    name?: true;
    category?: true;
    brand?: true;
    unitCost?: true;
    basePrice?: true;
    currentPrice?: true;
    holdingCostPerUnitPerDay?: true;
    clearanceEndDate?: true;
    status?: true;
    createdAt?: true;
    _all?: true;
  };

  export type ProductAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?:
      | ProductOrderByWithRelationInput
      | ProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Products
     **/
    _count?: true | ProductCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ProductAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ProductSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProductMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProductMaxAggregateInputType;
  };

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
    [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>;
  };

  export type ProductGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProductWhereInput;
    orderBy?:
      | ProductOrderByWithAggregationInput
      | ProductOrderByWithAggregationInput[];
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum;
    having?: ProductScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductCountAggregateInputType | true;
    _avg?: ProductAvgAggregateInputType;
    _sum?: ProductSumAggregateInputType;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
  };

  export type ProductGroupByOutputType = {
    id: bigint;
    sku: string;
    name: string;
    category: string | null;
    brand: string | null;
    unitCost: Decimal;
    basePrice: Decimal;
    currentPrice: Decimal;
    holdingCostPerUnitPerDay: Decimal;
    clearanceEndDate: Date;
    status: $Enums.ProductStatus;
    createdAt: Date;
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
  };

  type GetProductGroupByPayload<T extends ProductGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ProductGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ProductGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>;
        }
      >
    >;

  export type ProductSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      sku?: boolean;
      name?: boolean;
      category?: boolean;
      brand?: boolean;
      unitCost?: boolean;
      basePrice?: boolean;
      currentPrice?: boolean;
      holdingCostPerUnitPerDay?: boolean;
      clearanceEndDate?: boolean;
      status?: boolean;
      createdAt?: boolean;
      inventories?: boolean | Product$inventoriesArgs<ExtArgs>;
      priceHistories?: boolean | Product$priceHistoriesArgs<ExtArgs>;
      sales?: boolean | Product$salesArgs<ExtArgs>;
      elasticityEstimate?: boolean | Product$elasticityEstimateArgs<ExtArgs>;
      competitorPrices?: boolean | Product$competitorPricesArgs<ExtArgs>;
      markdownEvaluations?: boolean | Product$markdownEvaluationsArgs<ExtArgs>;
      markdownActions?: boolean | Product$markdownActionsArgs<ExtArgs>;
      _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['product']
  >;

  export type ProductSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      sku?: boolean;
      name?: boolean;
      category?: boolean;
      brand?: boolean;
      unitCost?: boolean;
      basePrice?: boolean;
      currentPrice?: boolean;
      holdingCostPerUnitPerDay?: boolean;
      clearanceEndDate?: boolean;
      status?: boolean;
      createdAt?: boolean;
    },
    ExtArgs['result']['product']
  >;

  export type ProductSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      sku?: boolean;
      name?: boolean;
      category?: boolean;
      brand?: boolean;
      unitCost?: boolean;
      basePrice?: boolean;
      currentPrice?: boolean;
      holdingCostPerUnitPerDay?: boolean;
      clearanceEndDate?: boolean;
      status?: boolean;
      createdAt?: boolean;
    },
    ExtArgs['result']['product']
  >;

  export type ProductSelectScalar = {
    id?: boolean;
    sku?: boolean;
    name?: boolean;
    category?: boolean;
    brand?: boolean;
    unitCost?: boolean;
    basePrice?: boolean;
    currentPrice?: boolean;
    holdingCostPerUnitPerDay?: boolean;
    clearanceEndDate?: boolean;
    status?: boolean;
    createdAt?: boolean;
  };

  export type ProductOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'sku'
    | 'name'
    | 'category'
    | 'brand'
    | 'unitCost'
    | 'basePrice'
    | 'currentPrice'
    | 'holdingCostPerUnitPerDay'
    | 'clearanceEndDate'
    | 'status'
    | 'createdAt',
    ExtArgs['result']['product']
  >;
  export type ProductInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    inventories?: boolean | Product$inventoriesArgs<ExtArgs>;
    priceHistories?: boolean | Product$priceHistoriesArgs<ExtArgs>;
    sales?: boolean | Product$salesArgs<ExtArgs>;
    elasticityEstimate?: boolean | Product$elasticityEstimateArgs<ExtArgs>;
    competitorPrices?: boolean | Product$competitorPricesArgs<ExtArgs>;
    markdownEvaluations?: boolean | Product$markdownEvaluationsArgs<ExtArgs>;
    markdownActions?: boolean | Product$markdownActionsArgs<ExtArgs>;
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type ProductIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type ProductIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $ProductPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Product';
    objects: {
      inventories: Prisma.$InventoryPayload<ExtArgs>[];
      priceHistories: Prisma.$PriceHistoryPayload<ExtArgs>[];
      sales: Prisma.$SalesDailyPayload<ExtArgs>[];
      elasticityEstimate: Prisma.$ElasticityEstimatePayload<ExtArgs> | null;
      competitorPrices: Prisma.$CompetitorPricePayload<ExtArgs>[];
      markdownEvaluations: Prisma.$MarkdownEvaluationPayload<ExtArgs>[];
      markdownActions: Prisma.$MarkdownActionLogPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: bigint;
        sku: string;
        name: string;
        category: string | null;
        brand: string | null;
        unitCost: Prisma.Decimal;
        basePrice: Prisma.Decimal;
        currentPrice: Prisma.Decimal;
        holdingCostPerUnitPerDay: Prisma.Decimal;
        clearanceEndDate: Date;
        status: $Enums.ProductStatus;
        createdAt: Date;
      },
      ExtArgs['result']['product']
    >;
    composites: {};
  };

  type ProductGetPayload<
    S extends boolean | null | undefined | ProductDefaultArgs,
  > = $Result.GetResult<Prisma.$ProductPayload, S>;

  type ProductCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductCountAggregateInputType | true;
  };

  export interface ProductDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Product'];
      meta: { name: 'Product' };
    };
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(
      args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(
      args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     *
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProductFindManyArgs>(
      args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     *
     */
    create<T extends ProductCreateArgs>(
      args: SelectSubset<T, ProductCreateArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProductCreateManyArgs>(
      args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     *
     */
    delete<T extends ProductDeleteArgs>(
      args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProductUpdateArgs>(
      args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProductDeleteManyArgs>(
      args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProductUpdateManyArgs>(
      args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(
      args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
     **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ProductAggregateArgs>(
      args: Subset<T, ProductAggregateArgs>,
    ): Prisma.PrismaPromise<GetProductAggregateType<T>>;

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetProductGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Product model
     */
    readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    inventories<T extends Product$inventoriesArgs<ExtArgs> = {}>(
      args?: Subset<T, Product$inventoriesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$InventoryPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    priceHistories<T extends Product$priceHistoriesArgs<ExtArgs> = {}>(
      args?: Subset<T, Product$priceHistoriesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PriceHistoryPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    sales<T extends Product$salesArgs<ExtArgs> = {}>(
      args?: Subset<T, Product$salesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$SalesDailyPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    elasticityEstimate<T extends Product$elasticityEstimateArgs<ExtArgs> = {}>(
      args?: Subset<T, Product$elasticityEstimateArgs<ExtArgs>>,
    ): Prisma__ElasticityEstimateClient<
      $Result.GetResult<
        Prisma.$ElasticityEstimatePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    competitorPrices<T extends Product$competitorPricesArgs<ExtArgs> = {}>(
      args?: Subset<T, Product$competitorPricesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CompetitorPricePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    markdownEvaluations<
      T extends Product$markdownEvaluationsArgs<ExtArgs> = {},
    >(
      args?: Subset<T, Product$markdownEvaluationsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$MarkdownEvaluationPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    markdownActions<T extends Product$markdownActionsArgs<ExtArgs> = {}>(
      args?: Subset<T, Product$markdownActionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$MarkdownActionLogPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<'Product', 'BigInt'>;
    readonly sku: FieldRef<'Product', 'String'>;
    readonly name: FieldRef<'Product', 'String'>;
    readonly category: FieldRef<'Product', 'String'>;
    readonly brand: FieldRef<'Product', 'String'>;
    readonly unitCost: FieldRef<'Product', 'Decimal'>;
    readonly basePrice: FieldRef<'Product', 'Decimal'>;
    readonly currentPrice: FieldRef<'Product', 'Decimal'>;
    readonly holdingCostPerUnitPerDay: FieldRef<'Product', 'Decimal'>;
    readonly clearanceEndDate: FieldRef<'Product', 'DateTime'>;
    readonly status: FieldRef<'Product', 'ProductStatus'>;
    readonly createdAt: FieldRef<'Product', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput;
  };

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput;
  };

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?:
      | ProductOrderByWithRelationInput
      | ProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
  };

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?:
      | ProductOrderByWithRelationInput
      | ProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
  };

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?:
      | ProductOrderByWithRelationInput
      | ProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
  };

  /**
   * Product create
   */
  export type ProductCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>;
  };

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Product update
   */
  export type ProductUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>;
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput;
  };

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>;
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput;
    /**
     * Limit how many Products to update.
     */
    limit?: number;
  };

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>;
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput;
    /**
     * Limit how many Products to update.
     */
    limit?: number;
  };

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput;
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>;
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>;
  };

  /**
   * Product delete
   */
  export type ProductDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput;
  };

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput;
    /**
     * Limit how many Products to delete.
     */
    limit?: number;
  };

  /**
   * Product.inventories
   */
  export type Product$inventoriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null;
    where?: InventoryWhereInput;
    orderBy?:
      | InventoryOrderByWithRelationInput
      | InventoryOrderByWithRelationInput[];
    cursor?: InventoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * Product.priceHistories
   */
  export type Product$priceHistoriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null;
    where?: PriceHistoryWhereInput;
    orderBy?:
      | PriceHistoryOrderByWithRelationInput
      | PriceHistoryOrderByWithRelationInput[];
    cursor?: PriceHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PriceHistoryScalarFieldEnum | PriceHistoryScalarFieldEnum[];
  };

  /**
   * Product.sales
   */
  export type Product$salesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SalesDaily
     */
    select?: SalesDailySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SalesDaily
     */
    omit?: SalesDailyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesDailyInclude<ExtArgs> | null;
    where?: SalesDailyWhereInput;
    orderBy?:
      | SalesDailyOrderByWithRelationInput
      | SalesDailyOrderByWithRelationInput[];
    cursor?: SalesDailyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SalesDailyScalarFieldEnum | SalesDailyScalarFieldEnum[];
  };

  /**
   * Product.elasticityEstimate
   */
  export type Product$elasticityEstimateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ElasticityEstimate
     */
    select?: ElasticityEstimateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ElasticityEstimate
     */
    omit?: ElasticityEstimateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElasticityEstimateInclude<ExtArgs> | null;
    where?: ElasticityEstimateWhereInput;
  };

  /**
   * Product.competitorPrices
   */
  export type Product$competitorPricesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CompetitorPrice
     */
    select?: CompetitorPriceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CompetitorPrice
     */
    omit?: CompetitorPriceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorPriceInclude<ExtArgs> | null;
    where?: CompetitorPriceWhereInput;
    orderBy?:
      | CompetitorPriceOrderByWithRelationInput
      | CompetitorPriceOrderByWithRelationInput[];
    cursor?: CompetitorPriceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | CompetitorPriceScalarFieldEnum
      | CompetitorPriceScalarFieldEnum[];
  };

  /**
   * Product.markdownEvaluations
   */
  export type Product$markdownEvaluationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MarkdownEvaluation
     */
    select?: MarkdownEvaluationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarkdownEvaluation
     */
    omit?: MarkdownEvaluationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownEvaluationInclude<ExtArgs> | null;
    where?: MarkdownEvaluationWhereInput;
    orderBy?:
      | MarkdownEvaluationOrderByWithRelationInput
      | MarkdownEvaluationOrderByWithRelationInput[];
    cursor?: MarkdownEvaluationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | MarkdownEvaluationScalarFieldEnum
      | MarkdownEvaluationScalarFieldEnum[];
  };

  /**
   * Product.markdownActions
   */
  export type Product$markdownActionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MarkdownActionLog
     */
    select?: MarkdownActionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarkdownActionLog
     */
    omit?: MarkdownActionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownActionLogInclude<ExtArgs> | null;
    where?: MarkdownActionLogWhereInput;
    orderBy?:
      | MarkdownActionLogOrderByWithRelationInput
      | MarkdownActionLogOrderByWithRelationInput[];
    cursor?: MarkdownActionLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | MarkdownActionLogScalarFieldEnum
      | MarkdownActionLogScalarFieldEnum[];
  };

  /**
   * Product without action
   */
  export type ProductDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
  };

  /**
   * Model Inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null;
    _avg: InventoryAvgAggregateOutputType | null;
    _sum: InventorySumAggregateOutputType | null;
    _min: InventoryMinAggregateOutputType | null;
    _max: InventoryMaxAggregateOutputType | null;
  };

  export type InventoryAvgAggregateOutputType = {
    productId: number | null;
    stockOnHand: number | null;
    reserved: number | null;
  };

  export type InventorySumAggregateOutputType = {
    productId: bigint | null;
    stockOnHand: number | null;
    reserved: number | null;
  };

  export type InventoryMinAggregateOutputType = {
    productId: bigint | null;
    location: string | null;
    stockOnHand: number | null;
    reserved: number | null;
  };

  export type InventoryMaxAggregateOutputType = {
    productId: bigint | null;
    location: string | null;
    stockOnHand: number | null;
    reserved: number | null;
  };

  export type InventoryCountAggregateOutputType = {
    productId: number;
    location: number;
    stockOnHand: number;
    reserved: number;
    _all: number;
  };

  export type InventoryAvgAggregateInputType = {
    productId?: true;
    stockOnHand?: true;
    reserved?: true;
  };

  export type InventorySumAggregateInputType = {
    productId?: true;
    stockOnHand?: true;
    reserved?: true;
  };

  export type InventoryMinAggregateInputType = {
    productId?: true;
    location?: true;
    stockOnHand?: true;
    reserved?: true;
  };

  export type InventoryMaxAggregateInputType = {
    productId?: true;
    location?: true;
    stockOnHand?: true;
    reserved?: true;
  };

  export type InventoryCountAggregateInputType = {
    productId?: true;
    location?: true;
    stockOnHand?: true;
    reserved?: true;
    _all?: true;
  };

  export type InventoryAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Inventory to aggregate.
     */
    where?: InventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Inventories to fetch.
     */
    orderBy?:
      | InventoryOrderByWithRelationInput
      | InventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: InventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Inventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Inventories
     **/
    _count?: true | InventoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: InventoryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: InventorySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: InventoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: InventoryMaxAggregateInputType;
  };

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
    [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>;
  };

  export type InventoryGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: InventoryWhereInput;
    orderBy?:
      | InventoryOrderByWithAggregationInput
      | InventoryOrderByWithAggregationInput[];
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum;
    having?: InventoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InventoryCountAggregateInputType | true;
    _avg?: InventoryAvgAggregateInputType;
    _sum?: InventorySumAggregateInputType;
    _min?: InventoryMinAggregateInputType;
    _max?: InventoryMaxAggregateInputType;
  };

  export type InventoryGroupByOutputType = {
    productId: bigint;
    location: string;
    stockOnHand: number;
    reserved: number;
    _count: InventoryCountAggregateOutputType | null;
    _avg: InventoryAvgAggregateOutputType | null;
    _sum: InventorySumAggregateOutputType | null;
    _min: InventoryMinAggregateOutputType | null;
    _max: InventoryMaxAggregateOutputType | null;
  };

  type GetInventoryGroupByPayload<T extends InventoryGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<InventoryGroupByOutputType, T['by']> & {
          [P in keyof T & keyof InventoryGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>;
        }
      >
    >;

  export type InventorySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      productId?: boolean;
      location?: boolean;
      stockOnHand?: boolean;
      reserved?: boolean;
      product?: boolean | ProductDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['inventory']
  >;

  export type InventorySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      productId?: boolean;
      location?: boolean;
      stockOnHand?: boolean;
      reserved?: boolean;
      product?: boolean | ProductDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['inventory']
  >;

  export type InventorySelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      productId?: boolean;
      location?: boolean;
      stockOnHand?: boolean;
      reserved?: boolean;
      product?: boolean | ProductDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['inventory']
  >;

  export type InventorySelectScalar = {
    productId?: boolean;
    location?: boolean;
    stockOnHand?: boolean;
    reserved?: boolean;
  };

  export type InventoryOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'productId' | 'location' | 'stockOnHand' | 'reserved',
    ExtArgs['result']['inventory']
  >;
  export type InventoryInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    product?: boolean | ProductDefaultArgs<ExtArgs>;
  };
  export type InventoryIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    product?: boolean | ProductDefaultArgs<ExtArgs>;
  };
  export type InventoryIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    product?: boolean | ProductDefaultArgs<ExtArgs>;
  };

  export type $InventoryPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Inventory';
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        productId: bigint;
        location: string;
        stockOnHand: number;
        reserved: number;
      },
      ExtArgs['result']['inventory']
    >;
    composites: {};
  };

  type InventoryGetPayload<
    S extends boolean | null | undefined | InventoryDefaultArgs,
  > = $Result.GetResult<Prisma.$InventoryPayload, S>;

  type InventoryCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    InventoryFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: InventoryCountAggregateInputType | true;
  };

  export interface InventoryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Inventory'];
      meta: { name: 'Inventory' };
    };
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {InventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryFindUniqueArgs>(
      args: SelectSubset<T, InventoryFindUniqueArgs<ExtArgs>>,
    ): Prisma__InventoryClient<
      $Result.GetResult<
        Prisma.$InventoryPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Inventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryFindUniqueOrThrowArgs>(
      args: SelectSubset<T, InventoryFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__InventoryClient<
      $Result.GetResult<
        Prisma.$InventoryPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryFindFirstArgs>(
      args?: SelectSubset<T, InventoryFindFirstArgs<ExtArgs>>,
    ): Prisma__InventoryClient<
      $Result.GetResult<
        Prisma.$InventoryPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, InventoryFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__InventoryClient<
      $Result.GetResult<
        Prisma.$InventoryPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     *
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     *
     * // Only select the `productId`
     * const inventoryWithProductIdOnly = await prisma.inventory.findMany({ select: { productId: true } })
     *
     */
    findMany<T extends InventoryFindManyArgs>(
      args?: SelectSubset<T, InventoryFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$InventoryPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Inventory.
     * @param {InventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     *
     */
    create<T extends InventoryCreateArgs>(
      args: SelectSubset<T, InventoryCreateArgs<ExtArgs>>,
    ): Prisma__InventoryClient<
      $Result.GetResult<
        Prisma.$InventoryPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Inventories.
     * @param {InventoryCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends InventoryCreateManyArgs>(
      args?: SelectSubset<T, InventoryCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Inventories and returns the data saved in the database.
     * @param {InventoryCreateManyAndReturnArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Inventories and only return the `productId`
     * const inventoryWithProductIdOnly = await prisma.inventory.createManyAndReturn({
     *   select: { productId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends InventoryCreateManyAndReturnArgs>(
      args?: SelectSubset<T, InventoryCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$InventoryPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Inventory.
     * @param {InventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     *
     */
    delete<T extends InventoryDeleteArgs>(
      args: SelectSubset<T, InventoryDeleteArgs<ExtArgs>>,
    ): Prisma__InventoryClient<
      $Result.GetResult<
        Prisma.$InventoryPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Inventory.
     * @param {InventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends InventoryUpdateArgs>(
      args: SelectSubset<T, InventoryUpdateArgs<ExtArgs>>,
    ): Prisma__InventoryClient<
      $Result.GetResult<
        Prisma.$InventoryPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Inventories.
     * @param {InventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends InventoryDeleteManyArgs>(
      args?: SelectSubset<T, InventoryDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends InventoryUpdateManyArgs>(
      args: SelectSubset<T, InventoryUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Inventories and returns the data updated in the database.
     * @param {InventoryUpdateManyAndReturnArgs} args - Arguments to update many Inventories.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Inventories and only return the `productId`
     * const inventoryWithProductIdOnly = await prisma.inventory.updateManyAndReturn({
     *   select: { productId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends InventoryUpdateManyAndReturnArgs>(
      args: SelectSubset<T, InventoryUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$InventoryPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Inventory.
     * @param {InventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     */
    upsert<T extends InventoryUpsertArgs>(
      args: SelectSubset<T, InventoryUpsertArgs<ExtArgs>>,
    ): Prisma__InventoryClient<
      $Result.GetResult<
        Prisma.$InventoryPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
     **/
    count<T extends InventoryCountArgs>(
      args?: Subset<T, InventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends InventoryAggregateArgs>(
      args: Subset<T, InventoryAggregateArgs>,
    ): Prisma.PrismaPromise<GetInventoryAggregateType<T>>;

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends InventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryGroupByArgs['orderBy'] }
        : { orderBy?: InventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, InventoryGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetInventoryGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Inventory model
     */
    readonly fields: InventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProductDefaultArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      | $Result.GetResult<
          Prisma.$ProductPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Inventory model
   */
  interface InventoryFieldRefs {
    readonly productId: FieldRef<'Inventory', 'BigInt'>;
    readonly location: FieldRef<'Inventory', 'String'>;
    readonly stockOnHand: FieldRef<'Inventory', 'Int'>;
    readonly reserved: FieldRef<'Inventory', 'Int'>;
  }

  // Custom InputTypes
  /**
   * Inventory findUnique
   */
  export type InventoryFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null;
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput;
  };

  /**
   * Inventory findUniqueOrThrow
   */
  export type InventoryFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null;
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput;
  };

  /**
   * Inventory findFirst
   */
  export type InventoryFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null;
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Inventories to fetch.
     */
    orderBy?:
      | InventoryOrderByWithRelationInput
      | InventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Inventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * Inventory findFirstOrThrow
   */
  export type InventoryFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null;
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Inventories to fetch.
     */
    orderBy?:
      | InventoryOrderByWithRelationInput
      | InventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Inventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * Inventory findMany
   */
  export type InventoryFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null;
    /**
     * Filter, which Inventories to fetch.
     */
    where?: InventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Inventories to fetch.
     */
    orderBy?:
      | InventoryOrderByWithRelationInput
      | InventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Inventories.
     */
    cursor?: InventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Inventories.
     */
    skip?: number;
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * Inventory create
   */
  export type InventoryCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a Inventory.
     */
    data: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>;
  };

  /**
   * Inventory createMany
   */
  export type InventoryCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Inventory createManyAndReturn
   */
  export type InventoryCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null;
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Inventory update
   */
  export type InventoryUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a Inventory.
     */
    data: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>;
    /**
     * Choose, which Inventory to update.
     */
    where: InventoryWhereUniqueInput;
  };

  /**
   * Inventory updateMany
   */
  export type InventoryUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Inventories.
     */
    data: XOR<
      InventoryUpdateManyMutationInput,
      InventoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput;
    /**
     * Limit how many Inventories to update.
     */
    limit?: number;
  };

  /**
   * Inventory updateManyAndReturn
   */
  export type InventoryUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null;
    /**
     * The data used to update Inventories.
     */
    data: XOR<
      InventoryUpdateManyMutationInput,
      InventoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput;
    /**
     * Limit how many Inventories to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Inventory upsert
   */
  export type InventoryUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the Inventory to update in case it exists.
     */
    where: InventoryWhereUniqueInput;
    /**
     * In case the Inventory found by the `where` argument doesn't exist, create a new Inventory with this data.
     */
    create: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>;
    /**
     * In case the Inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>;
  };

  /**
   * Inventory delete
   */
  export type InventoryDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null;
    /**
     * Filter which Inventory to delete.
     */
    where: InventoryWhereUniqueInput;
  };

  /**
   * Inventory deleteMany
   */
  export type InventoryDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Inventories to delete
     */
    where?: InventoryWhereInput;
    /**
     * Limit how many Inventories to delete.
     */
    limit?: number;
  };

  /**
   * Inventory without action
   */
  export type InventoryDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null;
  };

  /**
   * Model PriceHistory
   */

  export type AggregatePriceHistory = {
    _count: PriceHistoryCountAggregateOutputType | null;
    _avg: PriceHistoryAvgAggregateOutputType | null;
    _sum: PriceHistorySumAggregateOutputType | null;
    _min: PriceHistoryMinAggregateOutputType | null;
    _max: PriceHistoryMaxAggregateOutputType | null;
  };

  export type PriceHistoryAvgAggregateOutputType = {
    id: number | null;
    productId: number | null;
    price: Decimal | null;
    markdownPct: Decimal | null;
  };

  export type PriceHistorySumAggregateOutputType = {
    id: bigint | null;
    productId: bigint | null;
    price: Decimal | null;
    markdownPct: Decimal | null;
  };

  export type PriceHistoryMinAggregateOutputType = {
    id: bigint | null;
    productId: bigint | null;
    price: Decimal | null;
    markdownPct: Decimal | null;
    startedAt: Date | null;
    endedAt: Date | null;
  };

  export type PriceHistoryMaxAggregateOutputType = {
    id: bigint | null;
    productId: bigint | null;
    price: Decimal | null;
    markdownPct: Decimal | null;
    startedAt: Date | null;
    endedAt: Date | null;
  };

  export type PriceHistoryCountAggregateOutputType = {
    id: number;
    productId: number;
    price: number;
    markdownPct: number;
    startedAt: number;
    endedAt: number;
    _all: number;
  };

  export type PriceHistoryAvgAggregateInputType = {
    id?: true;
    productId?: true;
    price?: true;
    markdownPct?: true;
  };

  export type PriceHistorySumAggregateInputType = {
    id?: true;
    productId?: true;
    price?: true;
    markdownPct?: true;
  };

  export type PriceHistoryMinAggregateInputType = {
    id?: true;
    productId?: true;
    price?: true;
    markdownPct?: true;
    startedAt?: true;
    endedAt?: true;
  };

  export type PriceHistoryMaxAggregateInputType = {
    id?: true;
    productId?: true;
    price?: true;
    markdownPct?: true;
    startedAt?: true;
    endedAt?: true;
  };

  export type PriceHistoryCountAggregateInputType = {
    id?: true;
    productId?: true;
    price?: true;
    markdownPct?: true;
    startedAt?: true;
    endedAt?: true;
    _all?: true;
  };

  export type PriceHistoryAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which PriceHistory to aggregate.
     */
    where?: PriceHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PriceHistories to fetch.
     */
    orderBy?:
      | PriceHistoryOrderByWithRelationInput
      | PriceHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PriceHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PriceHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PriceHistories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PriceHistories
     **/
    _count?: true | PriceHistoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PriceHistoryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PriceHistorySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PriceHistoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PriceHistoryMaxAggregateInputType;
  };

  export type GetPriceHistoryAggregateType<
    T extends PriceHistoryAggregateArgs,
  > = {
    [P in keyof T & keyof AggregatePriceHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePriceHistory[P]>
      : GetScalarType<T[P], AggregatePriceHistory[P]>;
  };

  export type PriceHistoryGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PriceHistoryWhereInput;
    orderBy?:
      | PriceHistoryOrderByWithAggregationInput
      | PriceHistoryOrderByWithAggregationInput[];
    by: PriceHistoryScalarFieldEnum[] | PriceHistoryScalarFieldEnum;
    having?: PriceHistoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PriceHistoryCountAggregateInputType | true;
    _avg?: PriceHistoryAvgAggregateInputType;
    _sum?: PriceHistorySumAggregateInputType;
    _min?: PriceHistoryMinAggregateInputType;
    _max?: PriceHistoryMaxAggregateInputType;
  };

  export type PriceHistoryGroupByOutputType = {
    id: bigint;
    productId: bigint;
    price: Decimal;
    markdownPct: Decimal;
    startedAt: Date;
    endedAt: Date | null;
    _count: PriceHistoryCountAggregateOutputType | null;
    _avg: PriceHistoryAvgAggregateOutputType | null;
    _sum: PriceHistorySumAggregateOutputType | null;
    _min: PriceHistoryMinAggregateOutputType | null;
    _max: PriceHistoryMaxAggregateOutputType | null;
  };

  type GetPriceHistoryGroupByPayload<T extends PriceHistoryGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<PriceHistoryGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof PriceHistoryGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], PriceHistoryGroupByOutputType[P]>;
        }
      >
    >;

  export type PriceHistorySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      productId?: boolean;
      price?: boolean;
      markdownPct?: boolean;
      startedAt?: boolean;
      endedAt?: boolean;
      product?: boolean | ProductDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['priceHistory']
  >;

  export type PriceHistorySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      productId?: boolean;
      price?: boolean;
      markdownPct?: boolean;
      startedAt?: boolean;
      endedAt?: boolean;
      product?: boolean | ProductDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['priceHistory']
  >;

  export type PriceHistorySelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      productId?: boolean;
      price?: boolean;
      markdownPct?: boolean;
      startedAt?: boolean;
      endedAt?: boolean;
      product?: boolean | ProductDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['priceHistory']
  >;

  export type PriceHistorySelectScalar = {
    id?: boolean;
    productId?: boolean;
    price?: boolean;
    markdownPct?: boolean;
    startedAt?: boolean;
    endedAt?: boolean;
  };

  export type PriceHistoryOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'productId' | 'price' | 'markdownPct' | 'startedAt' | 'endedAt',
    ExtArgs['result']['priceHistory']
  >;
  export type PriceHistoryInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    product?: boolean | ProductDefaultArgs<ExtArgs>;
  };
  export type PriceHistoryIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    product?: boolean | ProductDefaultArgs<ExtArgs>;
  };
  export type PriceHistoryIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    product?: boolean | ProductDefaultArgs<ExtArgs>;
  };

  export type $PriceHistoryPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'PriceHistory';
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: bigint;
        productId: bigint;
        price: Prisma.Decimal;
        markdownPct: Prisma.Decimal;
        startedAt: Date;
        endedAt: Date | null;
      },
      ExtArgs['result']['priceHistory']
    >;
    composites: {};
  };

  type PriceHistoryGetPayload<
    S extends boolean | null | undefined | PriceHistoryDefaultArgs,
  > = $Result.GetResult<Prisma.$PriceHistoryPayload, S>;

  type PriceHistoryCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    PriceHistoryFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: PriceHistoryCountAggregateInputType | true;
  };

  export interface PriceHistoryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['PriceHistory'];
      meta: { name: 'PriceHistory' };
    };
    /**
     * Find zero or one PriceHistory that matches the filter.
     * @param {PriceHistoryFindUniqueArgs} args - Arguments to find a PriceHistory
     * @example
     * // Get one PriceHistory
     * const priceHistory = await prisma.priceHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceHistoryFindUniqueArgs>(
      args: SelectSubset<T, PriceHistoryFindUniqueArgs<ExtArgs>>,
    ): Prisma__PriceHistoryClient<
      $Result.GetResult<
        Prisma.$PriceHistoryPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one PriceHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PriceHistoryFindUniqueOrThrowArgs} args - Arguments to find a PriceHistory
     * @example
     * // Get one PriceHistory
     * const priceHistory = await prisma.priceHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceHistoryFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PriceHistoryFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__PriceHistoryClient<
      $Result.GetResult<
        Prisma.$PriceHistoryPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first PriceHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryFindFirstArgs} args - Arguments to find a PriceHistory
     * @example
     * // Get one PriceHistory
     * const priceHistory = await prisma.priceHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceHistoryFindFirstArgs>(
      args?: SelectSubset<T, PriceHistoryFindFirstArgs<ExtArgs>>,
    ): Prisma__PriceHistoryClient<
      $Result.GetResult<
        Prisma.$PriceHistoryPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first PriceHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryFindFirstOrThrowArgs} args - Arguments to find a PriceHistory
     * @example
     * // Get one PriceHistory
     * const priceHistory = await prisma.priceHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceHistoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PriceHistoryFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__PriceHistoryClient<
      $Result.GetResult<
        Prisma.$PriceHistoryPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more PriceHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PriceHistories
     * const priceHistories = await prisma.priceHistory.findMany()
     *
     * // Get first 10 PriceHistories
     * const priceHistories = await prisma.priceHistory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const priceHistoryWithIdOnly = await prisma.priceHistory.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PriceHistoryFindManyArgs>(
      args?: SelectSubset<T, PriceHistoryFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PriceHistoryPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a PriceHistory.
     * @param {PriceHistoryCreateArgs} args - Arguments to create a PriceHistory.
     * @example
     * // Create one PriceHistory
     * const PriceHistory = await prisma.priceHistory.create({
     *   data: {
     *     // ... data to create a PriceHistory
     *   }
     * })
     *
     */
    create<T extends PriceHistoryCreateArgs>(
      args: SelectSubset<T, PriceHistoryCreateArgs<ExtArgs>>,
    ): Prisma__PriceHistoryClient<
      $Result.GetResult<
        Prisma.$PriceHistoryPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many PriceHistories.
     * @param {PriceHistoryCreateManyArgs} args - Arguments to create many PriceHistories.
     * @example
     * // Create many PriceHistories
     * const priceHistory = await prisma.priceHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PriceHistoryCreateManyArgs>(
      args?: SelectSubset<T, PriceHistoryCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many PriceHistories and returns the data saved in the database.
     * @param {PriceHistoryCreateManyAndReturnArgs} args - Arguments to create many PriceHistories.
     * @example
     * // Create many PriceHistories
     * const priceHistory = await prisma.priceHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PriceHistories and only return the `id`
     * const priceHistoryWithIdOnly = await prisma.priceHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PriceHistoryCreateManyAndReturnArgs>(
      args?: SelectSubset<T, PriceHistoryCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PriceHistoryPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a PriceHistory.
     * @param {PriceHistoryDeleteArgs} args - Arguments to delete one PriceHistory.
     * @example
     * // Delete one PriceHistory
     * const PriceHistory = await prisma.priceHistory.delete({
     *   where: {
     *     // ... filter to delete one PriceHistory
     *   }
     * })
     *
     */
    delete<T extends PriceHistoryDeleteArgs>(
      args: SelectSubset<T, PriceHistoryDeleteArgs<ExtArgs>>,
    ): Prisma__PriceHistoryClient<
      $Result.GetResult<
        Prisma.$PriceHistoryPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one PriceHistory.
     * @param {PriceHistoryUpdateArgs} args - Arguments to update one PriceHistory.
     * @example
     * // Update one PriceHistory
     * const priceHistory = await prisma.priceHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PriceHistoryUpdateArgs>(
      args: SelectSubset<T, PriceHistoryUpdateArgs<ExtArgs>>,
    ): Prisma__PriceHistoryClient<
      $Result.GetResult<
        Prisma.$PriceHistoryPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more PriceHistories.
     * @param {PriceHistoryDeleteManyArgs} args - Arguments to filter PriceHistories to delete.
     * @example
     * // Delete a few PriceHistories
     * const { count } = await prisma.priceHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PriceHistoryDeleteManyArgs>(
      args?: SelectSubset<T, PriceHistoryDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more PriceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PriceHistories
     * const priceHistory = await prisma.priceHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PriceHistoryUpdateManyArgs>(
      args: SelectSubset<T, PriceHistoryUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more PriceHistories and returns the data updated in the database.
     * @param {PriceHistoryUpdateManyAndReturnArgs} args - Arguments to update many PriceHistories.
     * @example
     * // Update many PriceHistories
     * const priceHistory = await prisma.priceHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PriceHistories and only return the `id`
     * const priceHistoryWithIdOnly = await prisma.priceHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PriceHistoryUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PriceHistoryUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PriceHistoryPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one PriceHistory.
     * @param {PriceHistoryUpsertArgs} args - Arguments to update or create a PriceHistory.
     * @example
     * // Update or create a PriceHistory
     * const priceHistory = await prisma.priceHistory.upsert({
     *   create: {
     *     // ... data to create a PriceHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PriceHistory we want to update
     *   }
     * })
     */
    upsert<T extends PriceHistoryUpsertArgs>(
      args: SelectSubset<T, PriceHistoryUpsertArgs<ExtArgs>>,
    ): Prisma__PriceHistoryClient<
      $Result.GetResult<
        Prisma.$PriceHistoryPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of PriceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryCountArgs} args - Arguments to filter PriceHistories to count.
     * @example
     * // Count the number of PriceHistories
     * const count = await prisma.priceHistory.count({
     *   where: {
     *     // ... the filter for the PriceHistories we want to count
     *   }
     * })
     **/
    count<T extends PriceHistoryCountArgs>(
      args?: Subset<T, PriceHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceHistoryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a PriceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PriceHistoryAggregateArgs>(
      args: Subset<T, PriceHistoryAggregateArgs>,
    ): Prisma.PrismaPromise<GetPriceHistoryAggregateType<T>>;

    /**
     * Group by PriceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends PriceHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceHistoryGroupByArgs['orderBy'] }
        : { orderBy?: PriceHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, PriceHistoryGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetPriceHistoryGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PriceHistory model
     */
    readonly fields: PriceHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PriceHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceHistoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProductDefaultArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      | $Result.GetResult<
          Prisma.$ProductPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the PriceHistory model
   */
  interface PriceHistoryFieldRefs {
    readonly id: FieldRef<'PriceHistory', 'BigInt'>;
    readonly productId: FieldRef<'PriceHistory', 'BigInt'>;
    readonly price: FieldRef<'PriceHistory', 'Decimal'>;
    readonly markdownPct: FieldRef<'PriceHistory', 'Decimal'>;
    readonly startedAt: FieldRef<'PriceHistory', 'DateTime'>;
    readonly endedAt: FieldRef<'PriceHistory', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * PriceHistory findUnique
   */
  export type PriceHistoryFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which PriceHistory to fetch.
     */
    where: PriceHistoryWhereUniqueInput;
  };

  /**
   * PriceHistory findUniqueOrThrow
   */
  export type PriceHistoryFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which PriceHistory to fetch.
     */
    where: PriceHistoryWhereUniqueInput;
  };

  /**
   * PriceHistory findFirst
   */
  export type PriceHistoryFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which PriceHistory to fetch.
     */
    where?: PriceHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PriceHistories to fetch.
     */
    orderBy?:
      | PriceHistoryOrderByWithRelationInput
      | PriceHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PriceHistories.
     */
    cursor?: PriceHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PriceHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PriceHistories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PriceHistories.
     */
    distinct?: PriceHistoryScalarFieldEnum | PriceHistoryScalarFieldEnum[];
  };

  /**
   * PriceHistory findFirstOrThrow
   */
  export type PriceHistoryFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which PriceHistory to fetch.
     */
    where?: PriceHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PriceHistories to fetch.
     */
    orderBy?:
      | PriceHistoryOrderByWithRelationInput
      | PriceHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PriceHistories.
     */
    cursor?: PriceHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PriceHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PriceHistories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PriceHistories.
     */
    distinct?: PriceHistoryScalarFieldEnum | PriceHistoryScalarFieldEnum[];
  };

  /**
   * PriceHistory findMany
   */
  export type PriceHistoryFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which PriceHistories to fetch.
     */
    where?: PriceHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PriceHistories to fetch.
     */
    orderBy?:
      | PriceHistoryOrderByWithRelationInput
      | PriceHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PriceHistories.
     */
    cursor?: PriceHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PriceHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PriceHistories.
     */
    skip?: number;
    distinct?: PriceHistoryScalarFieldEnum | PriceHistoryScalarFieldEnum[];
  };

  /**
   * PriceHistory create
   */
  export type PriceHistoryCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a PriceHistory.
     */
    data: XOR<PriceHistoryCreateInput, PriceHistoryUncheckedCreateInput>;
  };

  /**
   * PriceHistory createMany
   */
  export type PriceHistoryCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many PriceHistories.
     */
    data: PriceHistoryCreateManyInput | PriceHistoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * PriceHistory createManyAndReturn
   */
  export type PriceHistoryCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null;
    /**
     * The data used to create many PriceHistories.
     */
    data: PriceHistoryCreateManyInput | PriceHistoryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * PriceHistory update
   */
  export type PriceHistoryUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a PriceHistory.
     */
    data: XOR<PriceHistoryUpdateInput, PriceHistoryUncheckedUpdateInput>;
    /**
     * Choose, which PriceHistory to update.
     */
    where: PriceHistoryWhereUniqueInput;
  };

  /**
   * PriceHistory updateMany
   */
  export type PriceHistoryUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update PriceHistories.
     */
    data: XOR<
      PriceHistoryUpdateManyMutationInput,
      PriceHistoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which PriceHistories to update
     */
    where?: PriceHistoryWhereInput;
    /**
     * Limit how many PriceHistories to update.
     */
    limit?: number;
  };

  /**
   * PriceHistory updateManyAndReturn
   */
  export type PriceHistoryUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null;
    /**
     * The data used to update PriceHistories.
     */
    data: XOR<
      PriceHistoryUpdateManyMutationInput,
      PriceHistoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which PriceHistories to update
     */
    where?: PriceHistoryWhereInput;
    /**
     * Limit how many PriceHistories to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * PriceHistory upsert
   */
  export type PriceHistoryUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the PriceHistory to update in case it exists.
     */
    where: PriceHistoryWhereUniqueInput;
    /**
     * In case the PriceHistory found by the `where` argument doesn't exist, create a new PriceHistory with this data.
     */
    create: XOR<PriceHistoryCreateInput, PriceHistoryUncheckedCreateInput>;
    /**
     * In case the PriceHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceHistoryUpdateInput, PriceHistoryUncheckedUpdateInput>;
  };

  /**
   * PriceHistory delete
   */
  export type PriceHistoryDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null;
    /**
     * Filter which PriceHistory to delete.
     */
    where: PriceHistoryWhereUniqueInput;
  };

  /**
   * PriceHistory deleteMany
   */
  export type PriceHistoryDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which PriceHistories to delete
     */
    where?: PriceHistoryWhereInput;
    /**
     * Limit how many PriceHistories to delete.
     */
    limit?: number;
  };

  /**
   * PriceHistory without action
   */
  export type PriceHistoryDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null;
  };

  /**
   * Model SalesDaily
   */

  export type AggregateSalesDaily = {
    _count: SalesDailyCountAggregateOutputType | null;
    _avg: SalesDailyAvgAggregateOutputType | null;
    _sum: SalesDailySumAggregateOutputType | null;
    _min: SalesDailyMinAggregateOutputType | null;
    _max: SalesDailyMaxAggregateOutputType | null;
  };

  export type SalesDailyAvgAggregateOutputType = {
    productId: number | null;
    unitsSold: number | null;
    avgUnitPrice: Decimal | null;
  };

  export type SalesDailySumAggregateOutputType = {
    productId: bigint | null;
    unitsSold: number | null;
    avgUnitPrice: Decimal | null;
  };

  export type SalesDailyMinAggregateOutputType = {
    productId: bigint | null;
    saleDate: Date | null;
    unitsSold: number | null;
    avgUnitPrice: Decimal | null;
    promoFlag: boolean | null;
  };

  export type SalesDailyMaxAggregateOutputType = {
    productId: bigint | null;
    saleDate: Date | null;
    unitsSold: number | null;
    avgUnitPrice: Decimal | null;
    promoFlag: boolean | null;
  };

  export type SalesDailyCountAggregateOutputType = {
    productId: number;
    saleDate: number;
    unitsSold: number;
    avgUnitPrice: number;
    promoFlag: number;
    _all: number;
  };

  export type SalesDailyAvgAggregateInputType = {
    productId?: true;
    unitsSold?: true;
    avgUnitPrice?: true;
  };

  export type SalesDailySumAggregateInputType = {
    productId?: true;
    unitsSold?: true;
    avgUnitPrice?: true;
  };

  export type SalesDailyMinAggregateInputType = {
    productId?: true;
    saleDate?: true;
    unitsSold?: true;
    avgUnitPrice?: true;
    promoFlag?: true;
  };

  export type SalesDailyMaxAggregateInputType = {
    productId?: true;
    saleDate?: true;
    unitsSold?: true;
    avgUnitPrice?: true;
    promoFlag?: true;
  };

  export type SalesDailyCountAggregateInputType = {
    productId?: true;
    saleDate?: true;
    unitsSold?: true;
    avgUnitPrice?: true;
    promoFlag?: true;
    _all?: true;
  };

  export type SalesDailyAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which SalesDaily to aggregate.
     */
    where?: SalesDailyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SalesDailies to fetch.
     */
    orderBy?:
      | SalesDailyOrderByWithRelationInput
      | SalesDailyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: SalesDailyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SalesDailies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SalesDailies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SalesDailies
     **/
    _count?: true | SalesDailyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: SalesDailyAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: SalesDailySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SalesDailyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SalesDailyMaxAggregateInputType;
  };

  export type GetSalesDailyAggregateType<T extends SalesDailyAggregateArgs> = {
    [P in keyof T & keyof AggregateSalesDaily]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalesDaily[P]>
      : GetScalarType<T[P], AggregateSalesDaily[P]>;
  };

  export type SalesDailyGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SalesDailyWhereInput;
    orderBy?:
      | SalesDailyOrderByWithAggregationInput
      | SalesDailyOrderByWithAggregationInput[];
    by: SalesDailyScalarFieldEnum[] | SalesDailyScalarFieldEnum;
    having?: SalesDailyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SalesDailyCountAggregateInputType | true;
    _avg?: SalesDailyAvgAggregateInputType;
    _sum?: SalesDailySumAggregateInputType;
    _min?: SalesDailyMinAggregateInputType;
    _max?: SalesDailyMaxAggregateInputType;
  };

  export type SalesDailyGroupByOutputType = {
    productId: bigint;
    saleDate: Date;
    unitsSold: number;
    avgUnitPrice: Decimal;
    promoFlag: boolean;
    _count: SalesDailyCountAggregateOutputType | null;
    _avg: SalesDailyAvgAggregateOutputType | null;
    _sum: SalesDailySumAggregateOutputType | null;
    _min: SalesDailyMinAggregateOutputType | null;
    _max: SalesDailyMaxAggregateOutputType | null;
  };

  type GetSalesDailyGroupByPayload<T extends SalesDailyGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<SalesDailyGroupByOutputType, T['by']> & {
          [P in keyof T & keyof SalesDailyGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesDailyGroupByOutputType[P]>
            : GetScalarType<T[P], SalesDailyGroupByOutputType[P]>;
        }
      >
    >;

  export type SalesDailySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      productId?: boolean;
      saleDate?: boolean;
      unitsSold?: boolean;
      avgUnitPrice?: boolean;
      promoFlag?: boolean;
      product?: boolean | ProductDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['salesDaily']
  >;

  export type SalesDailySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      productId?: boolean;
      saleDate?: boolean;
      unitsSold?: boolean;
      avgUnitPrice?: boolean;
      promoFlag?: boolean;
      product?: boolean | ProductDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['salesDaily']
  >;

  export type SalesDailySelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      productId?: boolean;
      saleDate?: boolean;
      unitsSold?: boolean;
      avgUnitPrice?: boolean;
      promoFlag?: boolean;
      product?: boolean | ProductDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['salesDaily']
  >;

  export type SalesDailySelectScalar = {
    productId?: boolean;
    saleDate?: boolean;
    unitsSold?: boolean;
    avgUnitPrice?: boolean;
    promoFlag?: boolean;
  };

  export type SalesDailyOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'productId' | 'saleDate' | 'unitsSold' | 'avgUnitPrice' | 'promoFlag',
    ExtArgs['result']['salesDaily']
  >;
  export type SalesDailyInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    product?: boolean | ProductDefaultArgs<ExtArgs>;
  };
  export type SalesDailyIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    product?: boolean | ProductDefaultArgs<ExtArgs>;
  };
  export type SalesDailyIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    product?: boolean | ProductDefaultArgs<ExtArgs>;
  };

  export type $SalesDailyPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'SalesDaily';
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        productId: bigint;
        saleDate: Date;
        unitsSold: number;
        avgUnitPrice: Prisma.Decimal;
        promoFlag: boolean;
      },
      ExtArgs['result']['salesDaily']
    >;
    composites: {};
  };

  type SalesDailyGetPayload<
    S extends boolean | null | undefined | SalesDailyDefaultArgs,
  > = $Result.GetResult<Prisma.$SalesDailyPayload, S>;

  type SalesDailyCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    SalesDailyFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: SalesDailyCountAggregateInputType | true;
  };

  export interface SalesDailyDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['SalesDaily'];
      meta: { name: 'SalesDaily' };
    };
    /**
     * Find zero or one SalesDaily that matches the filter.
     * @param {SalesDailyFindUniqueArgs} args - Arguments to find a SalesDaily
     * @example
     * // Get one SalesDaily
     * const salesDaily = await prisma.salesDaily.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesDailyFindUniqueArgs>(
      args: SelectSubset<T, SalesDailyFindUniqueArgs<ExtArgs>>,
    ): Prisma__SalesDailyClient<
      $Result.GetResult<
        Prisma.$SalesDailyPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one SalesDaily that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalesDailyFindUniqueOrThrowArgs} args - Arguments to find a SalesDaily
     * @example
     * // Get one SalesDaily
     * const salesDaily = await prisma.salesDaily.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesDailyFindUniqueOrThrowArgs>(
      args: SelectSubset<T, SalesDailyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__SalesDailyClient<
      $Result.GetResult<
        Prisma.$SalesDailyPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first SalesDaily that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesDailyFindFirstArgs} args - Arguments to find a SalesDaily
     * @example
     * // Get one SalesDaily
     * const salesDaily = await prisma.salesDaily.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesDailyFindFirstArgs>(
      args?: SelectSubset<T, SalesDailyFindFirstArgs<ExtArgs>>,
    ): Prisma__SalesDailyClient<
      $Result.GetResult<
        Prisma.$SalesDailyPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first SalesDaily that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesDailyFindFirstOrThrowArgs} args - Arguments to find a SalesDaily
     * @example
     * // Get one SalesDaily
     * const salesDaily = await prisma.salesDaily.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesDailyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SalesDailyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__SalesDailyClient<
      $Result.GetResult<
        Prisma.$SalesDailyPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more SalesDailies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesDailyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalesDailies
     * const salesDailies = await prisma.salesDaily.findMany()
     *
     * // Get first 10 SalesDailies
     * const salesDailies = await prisma.salesDaily.findMany({ take: 10 })
     *
     * // Only select the `productId`
     * const salesDailyWithProductIdOnly = await prisma.salesDaily.findMany({ select: { productId: true } })
     *
     */
    findMany<T extends SalesDailyFindManyArgs>(
      args?: SelectSubset<T, SalesDailyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SalesDailyPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a SalesDaily.
     * @param {SalesDailyCreateArgs} args - Arguments to create a SalesDaily.
     * @example
     * // Create one SalesDaily
     * const SalesDaily = await prisma.salesDaily.create({
     *   data: {
     *     // ... data to create a SalesDaily
     *   }
     * })
     *
     */
    create<T extends SalesDailyCreateArgs>(
      args: SelectSubset<T, SalesDailyCreateArgs<ExtArgs>>,
    ): Prisma__SalesDailyClient<
      $Result.GetResult<
        Prisma.$SalesDailyPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many SalesDailies.
     * @param {SalesDailyCreateManyArgs} args - Arguments to create many SalesDailies.
     * @example
     * // Create many SalesDailies
     * const salesDaily = await prisma.salesDaily.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SalesDailyCreateManyArgs>(
      args?: SelectSubset<T, SalesDailyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many SalesDailies and returns the data saved in the database.
     * @param {SalesDailyCreateManyAndReturnArgs} args - Arguments to create many SalesDailies.
     * @example
     * // Create many SalesDailies
     * const salesDaily = await prisma.salesDaily.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SalesDailies and only return the `productId`
     * const salesDailyWithProductIdOnly = await prisma.salesDaily.createManyAndReturn({
     *   select: { productId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SalesDailyCreateManyAndReturnArgs>(
      args?: SelectSubset<T, SalesDailyCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SalesDailyPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a SalesDaily.
     * @param {SalesDailyDeleteArgs} args - Arguments to delete one SalesDaily.
     * @example
     * // Delete one SalesDaily
     * const SalesDaily = await prisma.salesDaily.delete({
     *   where: {
     *     // ... filter to delete one SalesDaily
     *   }
     * })
     *
     */
    delete<T extends SalesDailyDeleteArgs>(
      args: SelectSubset<T, SalesDailyDeleteArgs<ExtArgs>>,
    ): Prisma__SalesDailyClient<
      $Result.GetResult<
        Prisma.$SalesDailyPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one SalesDaily.
     * @param {SalesDailyUpdateArgs} args - Arguments to update one SalesDaily.
     * @example
     * // Update one SalesDaily
     * const salesDaily = await prisma.salesDaily.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SalesDailyUpdateArgs>(
      args: SelectSubset<T, SalesDailyUpdateArgs<ExtArgs>>,
    ): Prisma__SalesDailyClient<
      $Result.GetResult<
        Prisma.$SalesDailyPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more SalesDailies.
     * @param {SalesDailyDeleteManyArgs} args - Arguments to filter SalesDailies to delete.
     * @example
     * // Delete a few SalesDailies
     * const { count } = await prisma.salesDaily.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SalesDailyDeleteManyArgs>(
      args?: SelectSubset<T, SalesDailyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more SalesDailies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesDailyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalesDailies
     * const salesDaily = await prisma.salesDaily.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SalesDailyUpdateManyArgs>(
      args: SelectSubset<T, SalesDailyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more SalesDailies and returns the data updated in the database.
     * @param {SalesDailyUpdateManyAndReturnArgs} args - Arguments to update many SalesDailies.
     * @example
     * // Update many SalesDailies
     * const salesDaily = await prisma.salesDaily.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SalesDailies and only return the `productId`
     * const salesDailyWithProductIdOnly = await prisma.salesDaily.updateManyAndReturn({
     *   select: { productId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends SalesDailyUpdateManyAndReturnArgs>(
      args: SelectSubset<T, SalesDailyUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SalesDailyPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one SalesDaily.
     * @param {SalesDailyUpsertArgs} args - Arguments to update or create a SalesDaily.
     * @example
     * // Update or create a SalesDaily
     * const salesDaily = await prisma.salesDaily.upsert({
     *   create: {
     *     // ... data to create a SalesDaily
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalesDaily we want to update
     *   }
     * })
     */
    upsert<T extends SalesDailyUpsertArgs>(
      args: SelectSubset<T, SalesDailyUpsertArgs<ExtArgs>>,
    ): Prisma__SalesDailyClient<
      $Result.GetResult<
        Prisma.$SalesDailyPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of SalesDailies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesDailyCountArgs} args - Arguments to filter SalesDailies to count.
     * @example
     * // Count the number of SalesDailies
     * const count = await prisma.salesDaily.count({
     *   where: {
     *     // ... the filter for the SalesDailies we want to count
     *   }
     * })
     **/
    count<T extends SalesDailyCountArgs>(
      args?: Subset<T, SalesDailyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesDailyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a SalesDaily.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesDailyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SalesDailyAggregateArgs>(
      args: Subset<T, SalesDailyAggregateArgs>,
    ): Prisma.PrismaPromise<GetSalesDailyAggregateType<T>>;

    /**
     * Group by SalesDaily.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesDailyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends SalesDailyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesDailyGroupByArgs['orderBy'] }
        : { orderBy?: SalesDailyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, SalesDailyGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetSalesDailyGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SalesDaily model
     */
    readonly fields: SalesDailyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalesDaily.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesDailyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProductDefaultArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      | $Result.GetResult<
          Prisma.$ProductPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the SalesDaily model
   */
  interface SalesDailyFieldRefs {
    readonly productId: FieldRef<'SalesDaily', 'BigInt'>;
    readonly saleDate: FieldRef<'SalesDaily', 'DateTime'>;
    readonly unitsSold: FieldRef<'SalesDaily', 'Int'>;
    readonly avgUnitPrice: FieldRef<'SalesDaily', 'Decimal'>;
    readonly promoFlag: FieldRef<'SalesDaily', 'Boolean'>;
  }

  // Custom InputTypes
  /**
   * SalesDaily findUnique
   */
  export type SalesDailyFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SalesDaily
     */
    select?: SalesDailySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SalesDaily
     */
    omit?: SalesDailyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesDailyInclude<ExtArgs> | null;
    /**
     * Filter, which SalesDaily to fetch.
     */
    where: SalesDailyWhereUniqueInput;
  };

  /**
   * SalesDaily findUniqueOrThrow
   */
  export type SalesDailyFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SalesDaily
     */
    select?: SalesDailySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SalesDaily
     */
    omit?: SalesDailyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesDailyInclude<ExtArgs> | null;
    /**
     * Filter, which SalesDaily to fetch.
     */
    where: SalesDailyWhereUniqueInput;
  };

  /**
   * SalesDaily findFirst
   */
  export type SalesDailyFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SalesDaily
     */
    select?: SalesDailySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SalesDaily
     */
    omit?: SalesDailyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesDailyInclude<ExtArgs> | null;
    /**
     * Filter, which SalesDaily to fetch.
     */
    where?: SalesDailyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SalesDailies to fetch.
     */
    orderBy?:
      | SalesDailyOrderByWithRelationInput
      | SalesDailyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SalesDailies.
     */
    cursor?: SalesDailyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SalesDailies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SalesDailies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SalesDailies.
     */
    distinct?: SalesDailyScalarFieldEnum | SalesDailyScalarFieldEnum[];
  };

  /**
   * SalesDaily findFirstOrThrow
   */
  export type SalesDailyFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SalesDaily
     */
    select?: SalesDailySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SalesDaily
     */
    omit?: SalesDailyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesDailyInclude<ExtArgs> | null;
    /**
     * Filter, which SalesDaily to fetch.
     */
    where?: SalesDailyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SalesDailies to fetch.
     */
    orderBy?:
      | SalesDailyOrderByWithRelationInput
      | SalesDailyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SalesDailies.
     */
    cursor?: SalesDailyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SalesDailies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SalesDailies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SalesDailies.
     */
    distinct?: SalesDailyScalarFieldEnum | SalesDailyScalarFieldEnum[];
  };

  /**
   * SalesDaily findMany
   */
  export type SalesDailyFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SalesDaily
     */
    select?: SalesDailySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SalesDaily
     */
    omit?: SalesDailyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesDailyInclude<ExtArgs> | null;
    /**
     * Filter, which SalesDailies to fetch.
     */
    where?: SalesDailyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SalesDailies to fetch.
     */
    orderBy?:
      | SalesDailyOrderByWithRelationInput
      | SalesDailyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SalesDailies.
     */
    cursor?: SalesDailyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SalesDailies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SalesDailies.
     */
    skip?: number;
    distinct?: SalesDailyScalarFieldEnum | SalesDailyScalarFieldEnum[];
  };

  /**
   * SalesDaily create
   */
  export type SalesDailyCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SalesDaily
     */
    select?: SalesDailySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SalesDaily
     */
    omit?: SalesDailyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesDailyInclude<ExtArgs> | null;
    /**
     * The data needed to create a SalesDaily.
     */
    data: XOR<SalesDailyCreateInput, SalesDailyUncheckedCreateInput>;
  };

  /**
   * SalesDaily createMany
   */
  export type SalesDailyCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many SalesDailies.
     */
    data: SalesDailyCreateManyInput | SalesDailyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * SalesDaily createManyAndReturn
   */
  export type SalesDailyCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SalesDaily
     */
    select?: SalesDailySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SalesDaily
     */
    omit?: SalesDailyOmit<ExtArgs> | null;
    /**
     * The data used to create many SalesDailies.
     */
    data: SalesDailyCreateManyInput | SalesDailyCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesDailyIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * SalesDaily update
   */
  export type SalesDailyUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SalesDaily
     */
    select?: SalesDailySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SalesDaily
     */
    omit?: SalesDailyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesDailyInclude<ExtArgs> | null;
    /**
     * The data needed to update a SalesDaily.
     */
    data: XOR<SalesDailyUpdateInput, SalesDailyUncheckedUpdateInput>;
    /**
     * Choose, which SalesDaily to update.
     */
    where: SalesDailyWhereUniqueInput;
  };

  /**
   * SalesDaily updateMany
   */
  export type SalesDailyUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update SalesDailies.
     */
    data: XOR<
      SalesDailyUpdateManyMutationInput,
      SalesDailyUncheckedUpdateManyInput
    >;
    /**
     * Filter which SalesDailies to update
     */
    where?: SalesDailyWhereInput;
    /**
     * Limit how many SalesDailies to update.
     */
    limit?: number;
  };

  /**
   * SalesDaily updateManyAndReturn
   */
  export type SalesDailyUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SalesDaily
     */
    select?: SalesDailySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SalesDaily
     */
    omit?: SalesDailyOmit<ExtArgs> | null;
    /**
     * The data used to update SalesDailies.
     */
    data: XOR<
      SalesDailyUpdateManyMutationInput,
      SalesDailyUncheckedUpdateManyInput
    >;
    /**
     * Filter which SalesDailies to update
     */
    where?: SalesDailyWhereInput;
    /**
     * Limit how many SalesDailies to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesDailyIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * SalesDaily upsert
   */
  export type SalesDailyUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SalesDaily
     */
    select?: SalesDailySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SalesDaily
     */
    omit?: SalesDailyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesDailyInclude<ExtArgs> | null;
    /**
     * The filter to search for the SalesDaily to update in case it exists.
     */
    where: SalesDailyWhereUniqueInput;
    /**
     * In case the SalesDaily found by the `where` argument doesn't exist, create a new SalesDaily with this data.
     */
    create: XOR<SalesDailyCreateInput, SalesDailyUncheckedCreateInput>;
    /**
     * In case the SalesDaily was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesDailyUpdateInput, SalesDailyUncheckedUpdateInput>;
  };

  /**
   * SalesDaily delete
   */
  export type SalesDailyDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SalesDaily
     */
    select?: SalesDailySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SalesDaily
     */
    omit?: SalesDailyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesDailyInclude<ExtArgs> | null;
    /**
     * Filter which SalesDaily to delete.
     */
    where: SalesDailyWhereUniqueInput;
  };

  /**
   * SalesDaily deleteMany
   */
  export type SalesDailyDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which SalesDailies to delete
     */
    where?: SalesDailyWhereInput;
    /**
     * Limit how many SalesDailies to delete.
     */
    limit?: number;
  };

  /**
   * SalesDaily without action
   */
  export type SalesDailyDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SalesDaily
     */
    select?: SalesDailySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SalesDaily
     */
    omit?: SalesDailyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesDailyInclude<ExtArgs> | null;
  };

  /**
   * Model ElasticityEstimate
   */

  export type AggregateElasticityEstimate = {
    _count: ElasticityEstimateCountAggregateOutputType | null;
    _avg: ElasticityEstimateAvgAggregateOutputType | null;
    _sum: ElasticityEstimateSumAggregateOutputType | null;
    _min: ElasticityEstimateMinAggregateOutputType | null;
    _max: ElasticityEstimateMaxAggregateOutputType | null;
  };

  export type ElasticityEstimateAvgAggregateOutputType = {
    productId: number | null;
    elasticity: Decimal | null;
    sampleSize: number | null;
    confidence: Decimal | null;
  };

  export type ElasticityEstimateSumAggregateOutputType = {
    productId: bigint | null;
    elasticity: Decimal | null;
    sampleSize: number | null;
    confidence: Decimal | null;
  };

  export type ElasticityEstimateMinAggregateOutputType = {
    productId: bigint | null;
    elasticity: Decimal | null;
    method: string | null;
    sampleSize: number | null;
    confidence: Decimal | null;
    lastUpdated: Date | null;
  };

  export type ElasticityEstimateMaxAggregateOutputType = {
    productId: bigint | null;
    elasticity: Decimal | null;
    method: string | null;
    sampleSize: number | null;
    confidence: Decimal | null;
    lastUpdated: Date | null;
  };

  export type ElasticityEstimateCountAggregateOutputType = {
    productId: number;
    elasticity: number;
    method: number;
    sampleSize: number;
    confidence: number;
    lastUpdated: number;
    _all: number;
  };

  export type ElasticityEstimateAvgAggregateInputType = {
    productId?: true;
    elasticity?: true;
    sampleSize?: true;
    confidence?: true;
  };

  export type ElasticityEstimateSumAggregateInputType = {
    productId?: true;
    elasticity?: true;
    sampleSize?: true;
    confidence?: true;
  };

  export type ElasticityEstimateMinAggregateInputType = {
    productId?: true;
    elasticity?: true;
    method?: true;
    sampleSize?: true;
    confidence?: true;
    lastUpdated?: true;
  };

  export type ElasticityEstimateMaxAggregateInputType = {
    productId?: true;
    elasticity?: true;
    method?: true;
    sampleSize?: true;
    confidence?: true;
    lastUpdated?: true;
  };

  export type ElasticityEstimateCountAggregateInputType = {
    productId?: true;
    elasticity?: true;
    method?: true;
    sampleSize?: true;
    confidence?: true;
    lastUpdated?: true;
    _all?: true;
  };

  export type ElasticityEstimateAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ElasticityEstimate to aggregate.
     */
    where?: ElasticityEstimateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ElasticityEstimates to fetch.
     */
    orderBy?:
      | ElasticityEstimateOrderByWithRelationInput
      | ElasticityEstimateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ElasticityEstimateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ElasticityEstimates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ElasticityEstimates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ElasticityEstimates
     **/
    _count?: true | ElasticityEstimateCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ElasticityEstimateAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ElasticityEstimateSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ElasticityEstimateMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ElasticityEstimateMaxAggregateInputType;
  };

  export type GetElasticityEstimateAggregateType<
    T extends ElasticityEstimateAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateElasticityEstimate]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateElasticityEstimate[P]>
      : GetScalarType<T[P], AggregateElasticityEstimate[P]>;
  };

  export type ElasticityEstimateGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ElasticityEstimateWhereInput;
    orderBy?:
      | ElasticityEstimateOrderByWithAggregationInput
      | ElasticityEstimateOrderByWithAggregationInput[];
    by: ElasticityEstimateScalarFieldEnum[] | ElasticityEstimateScalarFieldEnum;
    having?: ElasticityEstimateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ElasticityEstimateCountAggregateInputType | true;
    _avg?: ElasticityEstimateAvgAggregateInputType;
    _sum?: ElasticityEstimateSumAggregateInputType;
    _min?: ElasticityEstimateMinAggregateInputType;
    _max?: ElasticityEstimateMaxAggregateInputType;
  };

  export type ElasticityEstimateGroupByOutputType = {
    productId: bigint;
    elasticity: Decimal;
    method: string;
    sampleSize: number | null;
    confidence: Decimal | null;
    lastUpdated: Date;
    _count: ElasticityEstimateCountAggregateOutputType | null;
    _avg: ElasticityEstimateAvgAggregateOutputType | null;
    _sum: ElasticityEstimateSumAggregateOutputType | null;
    _min: ElasticityEstimateMinAggregateOutputType | null;
    _max: ElasticityEstimateMaxAggregateOutputType | null;
  };

  type GetElasticityEstimateGroupByPayload<
    T extends ElasticityEstimateGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ElasticityEstimateGroupByOutputType, T['by']> & {
        [P in keyof T &
          keyof ElasticityEstimateGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ElasticityEstimateGroupByOutputType[P]>
          : GetScalarType<T[P], ElasticityEstimateGroupByOutputType[P]>;
      }
    >
  >;

  export type ElasticityEstimateSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      productId?: boolean;
      elasticity?: boolean;
      method?: boolean;
      sampleSize?: boolean;
      confidence?: boolean;
      lastUpdated?: boolean;
      product?: boolean | ProductDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['elasticityEstimate']
  >;

  export type ElasticityEstimateSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      productId?: boolean;
      elasticity?: boolean;
      method?: boolean;
      sampleSize?: boolean;
      confidence?: boolean;
      lastUpdated?: boolean;
      product?: boolean | ProductDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['elasticityEstimate']
  >;

  export type ElasticityEstimateSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      productId?: boolean;
      elasticity?: boolean;
      method?: boolean;
      sampleSize?: boolean;
      confidence?: boolean;
      lastUpdated?: boolean;
      product?: boolean | ProductDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['elasticityEstimate']
  >;

  export type ElasticityEstimateSelectScalar = {
    productId?: boolean;
    elasticity?: boolean;
    method?: boolean;
    sampleSize?: boolean;
    confidence?: boolean;
    lastUpdated?: boolean;
  };

  export type ElasticityEstimateOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'productId'
    | 'elasticity'
    | 'method'
    | 'sampleSize'
    | 'confidence'
    | 'lastUpdated',
    ExtArgs['result']['elasticityEstimate']
  >;
  export type ElasticityEstimateInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    product?: boolean | ProductDefaultArgs<ExtArgs>;
  };
  export type ElasticityEstimateIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    product?: boolean | ProductDefaultArgs<ExtArgs>;
  };
  export type ElasticityEstimateIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    product?: boolean | ProductDefaultArgs<ExtArgs>;
  };

  export type $ElasticityEstimatePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'ElasticityEstimate';
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        productId: bigint;
        elasticity: Prisma.Decimal;
        method: string;
        sampleSize: number | null;
        confidence: Prisma.Decimal | null;
        lastUpdated: Date;
      },
      ExtArgs['result']['elasticityEstimate']
    >;
    composites: {};
  };

  type ElasticityEstimateGetPayload<
    S extends boolean | null | undefined | ElasticityEstimateDefaultArgs,
  > = $Result.GetResult<Prisma.$ElasticityEstimatePayload, S>;

  type ElasticityEstimateCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    ElasticityEstimateFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: ElasticityEstimateCountAggregateInputType | true;
  };

  export interface ElasticityEstimateDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['ElasticityEstimate'];
      meta: { name: 'ElasticityEstimate' };
    };
    /**
     * Find zero or one ElasticityEstimate that matches the filter.
     * @param {ElasticityEstimateFindUniqueArgs} args - Arguments to find a ElasticityEstimate
     * @example
     * // Get one ElasticityEstimate
     * const elasticityEstimate = await prisma.elasticityEstimate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ElasticityEstimateFindUniqueArgs>(
      args: SelectSubset<T, ElasticityEstimateFindUniqueArgs<ExtArgs>>,
    ): Prisma__ElasticityEstimateClient<
      $Result.GetResult<
        Prisma.$ElasticityEstimatePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one ElasticityEstimate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ElasticityEstimateFindUniqueOrThrowArgs} args - Arguments to find a ElasticityEstimate
     * @example
     * // Get one ElasticityEstimate
     * const elasticityEstimate = await prisma.elasticityEstimate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ElasticityEstimateFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ElasticityEstimateFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ElasticityEstimateClient<
      $Result.GetResult<
        Prisma.$ElasticityEstimatePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ElasticityEstimate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElasticityEstimateFindFirstArgs} args - Arguments to find a ElasticityEstimate
     * @example
     * // Get one ElasticityEstimate
     * const elasticityEstimate = await prisma.elasticityEstimate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ElasticityEstimateFindFirstArgs>(
      args?: SelectSubset<T, ElasticityEstimateFindFirstArgs<ExtArgs>>,
    ): Prisma__ElasticityEstimateClient<
      $Result.GetResult<
        Prisma.$ElasticityEstimatePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ElasticityEstimate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElasticityEstimateFindFirstOrThrowArgs} args - Arguments to find a ElasticityEstimate
     * @example
     * // Get one ElasticityEstimate
     * const elasticityEstimate = await prisma.elasticityEstimate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ElasticityEstimateFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ElasticityEstimateFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ElasticityEstimateClient<
      $Result.GetResult<
        Prisma.$ElasticityEstimatePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more ElasticityEstimates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElasticityEstimateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ElasticityEstimates
     * const elasticityEstimates = await prisma.elasticityEstimate.findMany()
     *
     * // Get first 10 ElasticityEstimates
     * const elasticityEstimates = await prisma.elasticityEstimate.findMany({ take: 10 })
     *
     * // Only select the `productId`
     * const elasticityEstimateWithProductIdOnly = await prisma.elasticityEstimate.findMany({ select: { productId: true } })
     *
     */
    findMany<T extends ElasticityEstimateFindManyArgs>(
      args?: SelectSubset<T, ElasticityEstimateFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ElasticityEstimatePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a ElasticityEstimate.
     * @param {ElasticityEstimateCreateArgs} args - Arguments to create a ElasticityEstimate.
     * @example
     * // Create one ElasticityEstimate
     * const ElasticityEstimate = await prisma.elasticityEstimate.create({
     *   data: {
     *     // ... data to create a ElasticityEstimate
     *   }
     * })
     *
     */
    create<T extends ElasticityEstimateCreateArgs>(
      args: SelectSubset<T, ElasticityEstimateCreateArgs<ExtArgs>>,
    ): Prisma__ElasticityEstimateClient<
      $Result.GetResult<
        Prisma.$ElasticityEstimatePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many ElasticityEstimates.
     * @param {ElasticityEstimateCreateManyArgs} args - Arguments to create many ElasticityEstimates.
     * @example
     * // Create many ElasticityEstimates
     * const elasticityEstimate = await prisma.elasticityEstimate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ElasticityEstimateCreateManyArgs>(
      args?: SelectSubset<T, ElasticityEstimateCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many ElasticityEstimates and returns the data saved in the database.
     * @param {ElasticityEstimateCreateManyAndReturnArgs} args - Arguments to create many ElasticityEstimates.
     * @example
     * // Create many ElasticityEstimates
     * const elasticityEstimate = await prisma.elasticityEstimate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ElasticityEstimates and only return the `productId`
     * const elasticityEstimateWithProductIdOnly = await prisma.elasticityEstimate.createManyAndReturn({
     *   select: { productId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ElasticityEstimateCreateManyAndReturnArgs>(
      args?: SelectSubset<
        T,
        ElasticityEstimateCreateManyAndReturnArgs<ExtArgs>
      >,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ElasticityEstimatePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a ElasticityEstimate.
     * @param {ElasticityEstimateDeleteArgs} args - Arguments to delete one ElasticityEstimate.
     * @example
     * // Delete one ElasticityEstimate
     * const ElasticityEstimate = await prisma.elasticityEstimate.delete({
     *   where: {
     *     // ... filter to delete one ElasticityEstimate
     *   }
     * })
     *
     */
    delete<T extends ElasticityEstimateDeleteArgs>(
      args: SelectSubset<T, ElasticityEstimateDeleteArgs<ExtArgs>>,
    ): Prisma__ElasticityEstimateClient<
      $Result.GetResult<
        Prisma.$ElasticityEstimatePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one ElasticityEstimate.
     * @param {ElasticityEstimateUpdateArgs} args - Arguments to update one ElasticityEstimate.
     * @example
     * // Update one ElasticityEstimate
     * const elasticityEstimate = await prisma.elasticityEstimate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ElasticityEstimateUpdateArgs>(
      args: SelectSubset<T, ElasticityEstimateUpdateArgs<ExtArgs>>,
    ): Prisma__ElasticityEstimateClient<
      $Result.GetResult<
        Prisma.$ElasticityEstimatePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more ElasticityEstimates.
     * @param {ElasticityEstimateDeleteManyArgs} args - Arguments to filter ElasticityEstimates to delete.
     * @example
     * // Delete a few ElasticityEstimates
     * const { count } = await prisma.elasticityEstimate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ElasticityEstimateDeleteManyArgs>(
      args?: SelectSubset<T, ElasticityEstimateDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ElasticityEstimates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElasticityEstimateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ElasticityEstimates
     * const elasticityEstimate = await prisma.elasticityEstimate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ElasticityEstimateUpdateManyArgs>(
      args: SelectSubset<T, ElasticityEstimateUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ElasticityEstimates and returns the data updated in the database.
     * @param {ElasticityEstimateUpdateManyAndReturnArgs} args - Arguments to update many ElasticityEstimates.
     * @example
     * // Update many ElasticityEstimates
     * const elasticityEstimate = await prisma.elasticityEstimate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ElasticityEstimates and only return the `productId`
     * const elasticityEstimateWithProductIdOnly = await prisma.elasticityEstimate.updateManyAndReturn({
     *   select: { productId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ElasticityEstimateUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ElasticityEstimateUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ElasticityEstimatePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one ElasticityEstimate.
     * @param {ElasticityEstimateUpsertArgs} args - Arguments to update or create a ElasticityEstimate.
     * @example
     * // Update or create a ElasticityEstimate
     * const elasticityEstimate = await prisma.elasticityEstimate.upsert({
     *   create: {
     *     // ... data to create a ElasticityEstimate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ElasticityEstimate we want to update
     *   }
     * })
     */
    upsert<T extends ElasticityEstimateUpsertArgs>(
      args: SelectSubset<T, ElasticityEstimateUpsertArgs<ExtArgs>>,
    ): Prisma__ElasticityEstimateClient<
      $Result.GetResult<
        Prisma.$ElasticityEstimatePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of ElasticityEstimates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElasticityEstimateCountArgs} args - Arguments to filter ElasticityEstimates to count.
     * @example
     * // Count the number of ElasticityEstimates
     * const count = await prisma.elasticityEstimate.count({
     *   where: {
     *     // ... the filter for the ElasticityEstimates we want to count
     *   }
     * })
     **/
    count<T extends ElasticityEstimateCountArgs>(
      args?: Subset<T, ElasticityEstimateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<
              T['select'],
              ElasticityEstimateCountAggregateOutputType
            >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ElasticityEstimate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElasticityEstimateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ElasticityEstimateAggregateArgs>(
      args: Subset<T, ElasticityEstimateAggregateArgs>,
    ): Prisma.PrismaPromise<GetElasticityEstimateAggregateType<T>>;

    /**
     * Group by ElasticityEstimate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElasticityEstimateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ElasticityEstimateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ElasticityEstimateGroupByArgs['orderBy'] }
        : { orderBy?: ElasticityEstimateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ElasticityEstimateGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetElasticityEstimateGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ElasticityEstimate model
     */
    readonly fields: ElasticityEstimateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ElasticityEstimate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ElasticityEstimateClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProductDefaultArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      | $Result.GetResult<
          Prisma.$ProductPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ElasticityEstimate model
   */
  interface ElasticityEstimateFieldRefs {
    readonly productId: FieldRef<'ElasticityEstimate', 'BigInt'>;
    readonly elasticity: FieldRef<'ElasticityEstimate', 'Decimal'>;
    readonly method: FieldRef<'ElasticityEstimate', 'String'>;
    readonly sampleSize: FieldRef<'ElasticityEstimate', 'Int'>;
    readonly confidence: FieldRef<'ElasticityEstimate', 'Decimal'>;
    readonly lastUpdated: FieldRef<'ElasticityEstimate', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * ElasticityEstimate findUnique
   */
  export type ElasticityEstimateFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ElasticityEstimate
     */
    select?: ElasticityEstimateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ElasticityEstimate
     */
    omit?: ElasticityEstimateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElasticityEstimateInclude<ExtArgs> | null;
    /**
     * Filter, which ElasticityEstimate to fetch.
     */
    where: ElasticityEstimateWhereUniqueInput;
  };

  /**
   * ElasticityEstimate findUniqueOrThrow
   */
  export type ElasticityEstimateFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ElasticityEstimate
     */
    select?: ElasticityEstimateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ElasticityEstimate
     */
    omit?: ElasticityEstimateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElasticityEstimateInclude<ExtArgs> | null;
    /**
     * Filter, which ElasticityEstimate to fetch.
     */
    where: ElasticityEstimateWhereUniqueInput;
  };

  /**
   * ElasticityEstimate findFirst
   */
  export type ElasticityEstimateFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ElasticityEstimate
     */
    select?: ElasticityEstimateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ElasticityEstimate
     */
    omit?: ElasticityEstimateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElasticityEstimateInclude<ExtArgs> | null;
    /**
     * Filter, which ElasticityEstimate to fetch.
     */
    where?: ElasticityEstimateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ElasticityEstimates to fetch.
     */
    orderBy?:
      | ElasticityEstimateOrderByWithRelationInput
      | ElasticityEstimateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ElasticityEstimates.
     */
    cursor?: ElasticityEstimateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ElasticityEstimates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ElasticityEstimates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ElasticityEstimates.
     */
    distinct?:
      | ElasticityEstimateScalarFieldEnum
      | ElasticityEstimateScalarFieldEnum[];
  };

  /**
   * ElasticityEstimate findFirstOrThrow
   */
  export type ElasticityEstimateFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ElasticityEstimate
     */
    select?: ElasticityEstimateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ElasticityEstimate
     */
    omit?: ElasticityEstimateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElasticityEstimateInclude<ExtArgs> | null;
    /**
     * Filter, which ElasticityEstimate to fetch.
     */
    where?: ElasticityEstimateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ElasticityEstimates to fetch.
     */
    orderBy?:
      | ElasticityEstimateOrderByWithRelationInput
      | ElasticityEstimateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ElasticityEstimates.
     */
    cursor?: ElasticityEstimateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ElasticityEstimates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ElasticityEstimates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ElasticityEstimates.
     */
    distinct?:
      | ElasticityEstimateScalarFieldEnum
      | ElasticityEstimateScalarFieldEnum[];
  };

  /**
   * ElasticityEstimate findMany
   */
  export type ElasticityEstimateFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ElasticityEstimate
     */
    select?: ElasticityEstimateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ElasticityEstimate
     */
    omit?: ElasticityEstimateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElasticityEstimateInclude<ExtArgs> | null;
    /**
     * Filter, which ElasticityEstimates to fetch.
     */
    where?: ElasticityEstimateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ElasticityEstimates to fetch.
     */
    orderBy?:
      | ElasticityEstimateOrderByWithRelationInput
      | ElasticityEstimateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ElasticityEstimates.
     */
    cursor?: ElasticityEstimateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ElasticityEstimates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ElasticityEstimates.
     */
    skip?: number;
    distinct?:
      | ElasticityEstimateScalarFieldEnum
      | ElasticityEstimateScalarFieldEnum[];
  };

  /**
   * ElasticityEstimate create
   */
  export type ElasticityEstimateCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ElasticityEstimate
     */
    select?: ElasticityEstimateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ElasticityEstimate
     */
    omit?: ElasticityEstimateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElasticityEstimateInclude<ExtArgs> | null;
    /**
     * The data needed to create a ElasticityEstimate.
     */
    data: XOR<
      ElasticityEstimateCreateInput,
      ElasticityEstimateUncheckedCreateInput
    >;
  };

  /**
   * ElasticityEstimate createMany
   */
  export type ElasticityEstimateCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ElasticityEstimates.
     */
    data:
      | ElasticityEstimateCreateManyInput
      | ElasticityEstimateCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ElasticityEstimate createManyAndReturn
   */
  export type ElasticityEstimateCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ElasticityEstimate
     */
    select?: ElasticityEstimateSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ElasticityEstimate
     */
    omit?: ElasticityEstimateOmit<ExtArgs> | null;
    /**
     * The data used to create many ElasticityEstimates.
     */
    data:
      | ElasticityEstimateCreateManyInput
      | ElasticityEstimateCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElasticityEstimateIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ElasticityEstimate update
   */
  export type ElasticityEstimateUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ElasticityEstimate
     */
    select?: ElasticityEstimateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ElasticityEstimate
     */
    omit?: ElasticityEstimateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElasticityEstimateInclude<ExtArgs> | null;
    /**
     * The data needed to update a ElasticityEstimate.
     */
    data: XOR<
      ElasticityEstimateUpdateInput,
      ElasticityEstimateUncheckedUpdateInput
    >;
    /**
     * Choose, which ElasticityEstimate to update.
     */
    where: ElasticityEstimateWhereUniqueInput;
  };

  /**
   * ElasticityEstimate updateMany
   */
  export type ElasticityEstimateUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ElasticityEstimates.
     */
    data: XOR<
      ElasticityEstimateUpdateManyMutationInput,
      ElasticityEstimateUncheckedUpdateManyInput
    >;
    /**
     * Filter which ElasticityEstimates to update
     */
    where?: ElasticityEstimateWhereInput;
    /**
     * Limit how many ElasticityEstimates to update.
     */
    limit?: number;
  };

  /**
   * ElasticityEstimate updateManyAndReturn
   */
  export type ElasticityEstimateUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ElasticityEstimate
     */
    select?: ElasticityEstimateSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ElasticityEstimate
     */
    omit?: ElasticityEstimateOmit<ExtArgs> | null;
    /**
     * The data used to update ElasticityEstimates.
     */
    data: XOR<
      ElasticityEstimateUpdateManyMutationInput,
      ElasticityEstimateUncheckedUpdateManyInput
    >;
    /**
     * Filter which ElasticityEstimates to update
     */
    where?: ElasticityEstimateWhereInput;
    /**
     * Limit how many ElasticityEstimates to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElasticityEstimateIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ElasticityEstimate upsert
   */
  export type ElasticityEstimateUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ElasticityEstimate
     */
    select?: ElasticityEstimateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ElasticityEstimate
     */
    omit?: ElasticityEstimateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElasticityEstimateInclude<ExtArgs> | null;
    /**
     * The filter to search for the ElasticityEstimate to update in case it exists.
     */
    where: ElasticityEstimateWhereUniqueInput;
    /**
     * In case the ElasticityEstimate found by the `where` argument doesn't exist, create a new ElasticityEstimate with this data.
     */
    create: XOR<
      ElasticityEstimateCreateInput,
      ElasticityEstimateUncheckedCreateInput
    >;
    /**
     * In case the ElasticityEstimate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      ElasticityEstimateUpdateInput,
      ElasticityEstimateUncheckedUpdateInput
    >;
  };

  /**
   * ElasticityEstimate delete
   */
  export type ElasticityEstimateDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ElasticityEstimate
     */
    select?: ElasticityEstimateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ElasticityEstimate
     */
    omit?: ElasticityEstimateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElasticityEstimateInclude<ExtArgs> | null;
    /**
     * Filter which ElasticityEstimate to delete.
     */
    where: ElasticityEstimateWhereUniqueInput;
  };

  /**
   * ElasticityEstimate deleteMany
   */
  export type ElasticityEstimateDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ElasticityEstimates to delete
     */
    where?: ElasticityEstimateWhereInput;
    /**
     * Limit how many ElasticityEstimates to delete.
     */
    limit?: number;
  };

  /**
   * ElasticityEstimate without action
   */
  export type ElasticityEstimateDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ElasticityEstimate
     */
    select?: ElasticityEstimateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ElasticityEstimate
     */
    omit?: ElasticityEstimateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElasticityEstimateInclude<ExtArgs> | null;
  };

  /**
   * Model Competitor
   */

  export type AggregateCompetitor = {
    _count: CompetitorCountAggregateOutputType | null;
    _avg: CompetitorAvgAggregateOutputType | null;
    _sum: CompetitorSumAggregateOutputType | null;
    _min: CompetitorMinAggregateOutputType | null;
    _max: CompetitorMaxAggregateOutputType | null;
  };

  export type CompetitorAvgAggregateOutputType = {
    id: number | null;
  };

  export type CompetitorSumAggregateOutputType = {
    id: bigint | null;
  };

  export type CompetitorMinAggregateOutputType = {
    id: bigint | null;
    name: string | null;
    url: string | null;
  };

  export type CompetitorMaxAggregateOutputType = {
    id: bigint | null;
    name: string | null;
    url: string | null;
  };

  export type CompetitorCountAggregateOutputType = {
    id: number;
    name: number;
    url: number;
    _all: number;
  };

  export type CompetitorAvgAggregateInputType = {
    id?: true;
  };

  export type CompetitorSumAggregateInputType = {
    id?: true;
  };

  export type CompetitorMinAggregateInputType = {
    id?: true;
    name?: true;
    url?: true;
  };

  export type CompetitorMaxAggregateInputType = {
    id?: true;
    name?: true;
    url?: true;
  };

  export type CompetitorCountAggregateInputType = {
    id?: true;
    name?: true;
    url?: true;
    _all?: true;
  };

  export type CompetitorAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Competitor to aggregate.
     */
    where?: CompetitorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Competitors to fetch.
     */
    orderBy?:
      | CompetitorOrderByWithRelationInput
      | CompetitorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CompetitorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Competitors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Competitors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Competitors
     **/
    _count?: true | CompetitorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CompetitorAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CompetitorSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompetitorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompetitorMaxAggregateInputType;
  };

  export type GetCompetitorAggregateType<T extends CompetitorAggregateArgs> = {
    [P in keyof T & keyof AggregateCompetitor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetitor[P]>
      : GetScalarType<T[P], AggregateCompetitor[P]>;
  };

  export type CompetitorGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CompetitorWhereInput;
    orderBy?:
      | CompetitorOrderByWithAggregationInput
      | CompetitorOrderByWithAggregationInput[];
    by: CompetitorScalarFieldEnum[] | CompetitorScalarFieldEnum;
    having?: CompetitorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompetitorCountAggregateInputType | true;
    _avg?: CompetitorAvgAggregateInputType;
    _sum?: CompetitorSumAggregateInputType;
    _min?: CompetitorMinAggregateInputType;
    _max?: CompetitorMaxAggregateInputType;
  };

  export type CompetitorGroupByOutputType = {
    id: bigint;
    name: string;
    url: string | null;
    _count: CompetitorCountAggregateOutputType | null;
    _avg: CompetitorAvgAggregateOutputType | null;
    _sum: CompetitorSumAggregateOutputType | null;
    _min: CompetitorMinAggregateOutputType | null;
    _max: CompetitorMaxAggregateOutputType | null;
  };

  type GetCompetitorGroupByPayload<T extends CompetitorGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CompetitorGroupByOutputType, T['by']> & {
          [P in keyof T & keyof CompetitorGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompetitorGroupByOutputType[P]>
            : GetScalarType<T[P], CompetitorGroupByOutputType[P]>;
        }
      >
    >;

  export type CompetitorSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      url?: boolean;
      prices?: boolean | Competitor$pricesArgs<ExtArgs>;
      _count?: boolean | CompetitorCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['competitor']
  >;

  export type CompetitorSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      url?: boolean;
    },
    ExtArgs['result']['competitor']
  >;

  export type CompetitorSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      url?: boolean;
    },
    ExtArgs['result']['competitor']
  >;

  export type CompetitorSelectScalar = {
    id?: boolean;
    name?: boolean;
    url?: boolean;
  };

  export type CompetitorOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'name' | 'url',
    ExtArgs['result']['competitor']
  >;
  export type CompetitorInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    prices?: boolean | Competitor$pricesArgs<ExtArgs>;
    _count?: boolean | CompetitorCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type CompetitorIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type CompetitorIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $CompetitorPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Competitor';
    objects: {
      prices: Prisma.$CompetitorPricePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: bigint;
        name: string;
        url: string | null;
      },
      ExtArgs['result']['competitor']
    >;
    composites: {};
  };

  type CompetitorGetPayload<
    S extends boolean | null | undefined | CompetitorDefaultArgs,
  > = $Result.GetResult<Prisma.$CompetitorPayload, S>;

  type CompetitorCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    CompetitorFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: CompetitorCountAggregateInputType | true;
  };

  export interface CompetitorDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Competitor'];
      meta: { name: 'Competitor' };
    };
    /**
     * Find zero or one Competitor that matches the filter.
     * @param {CompetitorFindUniqueArgs} args - Arguments to find a Competitor
     * @example
     * // Get one Competitor
     * const competitor = await prisma.competitor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompetitorFindUniqueArgs>(
      args: SelectSubset<T, CompetitorFindUniqueArgs<ExtArgs>>,
    ): Prisma__CompetitorClient<
      $Result.GetResult<
        Prisma.$CompetitorPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Competitor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompetitorFindUniqueOrThrowArgs} args - Arguments to find a Competitor
     * @example
     * // Get one Competitor
     * const competitor = await prisma.competitor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompetitorFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CompetitorFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CompetitorClient<
      $Result.GetResult<
        Prisma.$CompetitorPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Competitor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorFindFirstArgs} args - Arguments to find a Competitor
     * @example
     * // Get one Competitor
     * const competitor = await prisma.competitor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompetitorFindFirstArgs>(
      args?: SelectSubset<T, CompetitorFindFirstArgs<ExtArgs>>,
    ): Prisma__CompetitorClient<
      $Result.GetResult<
        Prisma.$CompetitorPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Competitor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorFindFirstOrThrowArgs} args - Arguments to find a Competitor
     * @example
     * // Get one Competitor
     * const competitor = await prisma.competitor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompetitorFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CompetitorFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CompetitorClient<
      $Result.GetResult<
        Prisma.$CompetitorPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Competitors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Competitors
     * const competitors = await prisma.competitor.findMany()
     *
     * // Get first 10 Competitors
     * const competitors = await prisma.competitor.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const competitorWithIdOnly = await prisma.competitor.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CompetitorFindManyArgs>(
      args?: SelectSubset<T, CompetitorFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CompetitorPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Competitor.
     * @param {CompetitorCreateArgs} args - Arguments to create a Competitor.
     * @example
     * // Create one Competitor
     * const Competitor = await prisma.competitor.create({
     *   data: {
     *     // ... data to create a Competitor
     *   }
     * })
     *
     */
    create<T extends CompetitorCreateArgs>(
      args: SelectSubset<T, CompetitorCreateArgs<ExtArgs>>,
    ): Prisma__CompetitorClient<
      $Result.GetResult<
        Prisma.$CompetitorPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Competitors.
     * @param {CompetitorCreateManyArgs} args - Arguments to create many Competitors.
     * @example
     * // Create many Competitors
     * const competitor = await prisma.competitor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CompetitorCreateManyArgs>(
      args?: SelectSubset<T, CompetitorCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Competitors and returns the data saved in the database.
     * @param {CompetitorCreateManyAndReturnArgs} args - Arguments to create many Competitors.
     * @example
     * // Create many Competitors
     * const competitor = await prisma.competitor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Competitors and only return the `id`
     * const competitorWithIdOnly = await prisma.competitor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CompetitorCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CompetitorCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CompetitorPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Competitor.
     * @param {CompetitorDeleteArgs} args - Arguments to delete one Competitor.
     * @example
     * // Delete one Competitor
     * const Competitor = await prisma.competitor.delete({
     *   where: {
     *     // ... filter to delete one Competitor
     *   }
     * })
     *
     */
    delete<T extends CompetitorDeleteArgs>(
      args: SelectSubset<T, CompetitorDeleteArgs<ExtArgs>>,
    ): Prisma__CompetitorClient<
      $Result.GetResult<
        Prisma.$CompetitorPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Competitor.
     * @param {CompetitorUpdateArgs} args - Arguments to update one Competitor.
     * @example
     * // Update one Competitor
     * const competitor = await prisma.competitor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CompetitorUpdateArgs>(
      args: SelectSubset<T, CompetitorUpdateArgs<ExtArgs>>,
    ): Prisma__CompetitorClient<
      $Result.GetResult<
        Prisma.$CompetitorPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Competitors.
     * @param {CompetitorDeleteManyArgs} args - Arguments to filter Competitors to delete.
     * @example
     * // Delete a few Competitors
     * const { count } = await prisma.competitor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CompetitorDeleteManyArgs>(
      args?: SelectSubset<T, CompetitorDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Competitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Competitors
     * const competitor = await prisma.competitor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CompetitorUpdateManyArgs>(
      args: SelectSubset<T, CompetitorUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Competitors and returns the data updated in the database.
     * @param {CompetitorUpdateManyAndReturnArgs} args - Arguments to update many Competitors.
     * @example
     * // Update many Competitors
     * const competitor = await prisma.competitor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Competitors and only return the `id`
     * const competitorWithIdOnly = await prisma.competitor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CompetitorUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CompetitorUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CompetitorPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Competitor.
     * @param {CompetitorUpsertArgs} args - Arguments to update or create a Competitor.
     * @example
     * // Update or create a Competitor
     * const competitor = await prisma.competitor.upsert({
     *   create: {
     *     // ... data to create a Competitor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Competitor we want to update
     *   }
     * })
     */
    upsert<T extends CompetitorUpsertArgs>(
      args: SelectSubset<T, CompetitorUpsertArgs<ExtArgs>>,
    ): Prisma__CompetitorClient<
      $Result.GetResult<
        Prisma.$CompetitorPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Competitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorCountArgs} args - Arguments to filter Competitors to count.
     * @example
     * // Count the number of Competitors
     * const count = await prisma.competitor.count({
     *   where: {
     *     // ... the filter for the Competitors we want to count
     *   }
     * })
     **/
    count<T extends CompetitorCountArgs>(
      args?: Subset<T, CompetitorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompetitorCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Competitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CompetitorAggregateArgs>(
      args: Subset<T, CompetitorAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompetitorAggregateType<T>>;

    /**
     * Group by Competitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends CompetitorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompetitorGroupByArgs['orderBy'] }
        : { orderBy?: CompetitorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CompetitorGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetCompetitorGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Competitor model
     */
    readonly fields: CompetitorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Competitor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompetitorClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    prices<T extends Competitor$pricesArgs<ExtArgs> = {}>(
      args?: Subset<T, Competitor$pricesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CompetitorPricePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Competitor model
   */
  interface CompetitorFieldRefs {
    readonly id: FieldRef<'Competitor', 'BigInt'>;
    readonly name: FieldRef<'Competitor', 'String'>;
    readonly url: FieldRef<'Competitor', 'String'>;
  }

  // Custom InputTypes
  /**
   * Competitor findUnique
   */
  export type CompetitorFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null;
    /**
     * Filter, which Competitor to fetch.
     */
    where: CompetitorWhereUniqueInput;
  };

  /**
   * Competitor findUniqueOrThrow
   */
  export type CompetitorFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null;
    /**
     * Filter, which Competitor to fetch.
     */
    where: CompetitorWhereUniqueInput;
  };

  /**
   * Competitor findFirst
   */
  export type CompetitorFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null;
    /**
     * Filter, which Competitor to fetch.
     */
    where?: CompetitorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Competitors to fetch.
     */
    orderBy?:
      | CompetitorOrderByWithRelationInput
      | CompetitorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Competitors.
     */
    cursor?: CompetitorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Competitors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Competitors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Competitors.
     */
    distinct?: CompetitorScalarFieldEnum | CompetitorScalarFieldEnum[];
  };

  /**
   * Competitor findFirstOrThrow
   */
  export type CompetitorFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null;
    /**
     * Filter, which Competitor to fetch.
     */
    where?: CompetitorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Competitors to fetch.
     */
    orderBy?:
      | CompetitorOrderByWithRelationInput
      | CompetitorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Competitors.
     */
    cursor?: CompetitorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Competitors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Competitors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Competitors.
     */
    distinct?: CompetitorScalarFieldEnum | CompetitorScalarFieldEnum[];
  };

  /**
   * Competitor findMany
   */
  export type CompetitorFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null;
    /**
     * Filter, which Competitors to fetch.
     */
    where?: CompetitorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Competitors to fetch.
     */
    orderBy?:
      | CompetitorOrderByWithRelationInput
      | CompetitorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Competitors.
     */
    cursor?: CompetitorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Competitors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Competitors.
     */
    skip?: number;
    distinct?: CompetitorScalarFieldEnum | CompetitorScalarFieldEnum[];
  };

  /**
   * Competitor create
   */
  export type CompetitorCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null;
    /**
     * The data needed to create a Competitor.
     */
    data: XOR<CompetitorCreateInput, CompetitorUncheckedCreateInput>;
  };

  /**
   * Competitor createMany
   */
  export type CompetitorCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Competitors.
     */
    data: CompetitorCreateManyInput | CompetitorCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Competitor createManyAndReturn
   */
  export type CompetitorCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null;
    /**
     * The data used to create many Competitors.
     */
    data: CompetitorCreateManyInput | CompetitorCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Competitor update
   */
  export type CompetitorUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null;
    /**
     * The data needed to update a Competitor.
     */
    data: XOR<CompetitorUpdateInput, CompetitorUncheckedUpdateInput>;
    /**
     * Choose, which Competitor to update.
     */
    where: CompetitorWhereUniqueInput;
  };

  /**
   * Competitor updateMany
   */
  export type CompetitorUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Competitors.
     */
    data: XOR<
      CompetitorUpdateManyMutationInput,
      CompetitorUncheckedUpdateManyInput
    >;
    /**
     * Filter which Competitors to update
     */
    where?: CompetitorWhereInput;
    /**
     * Limit how many Competitors to update.
     */
    limit?: number;
  };

  /**
   * Competitor updateManyAndReturn
   */
  export type CompetitorUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null;
    /**
     * The data used to update Competitors.
     */
    data: XOR<
      CompetitorUpdateManyMutationInput,
      CompetitorUncheckedUpdateManyInput
    >;
    /**
     * Filter which Competitors to update
     */
    where?: CompetitorWhereInput;
    /**
     * Limit how many Competitors to update.
     */
    limit?: number;
  };

  /**
   * Competitor upsert
   */
  export type CompetitorUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null;
    /**
     * The filter to search for the Competitor to update in case it exists.
     */
    where: CompetitorWhereUniqueInput;
    /**
     * In case the Competitor found by the `where` argument doesn't exist, create a new Competitor with this data.
     */
    create: XOR<CompetitorCreateInput, CompetitorUncheckedCreateInput>;
    /**
     * In case the Competitor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompetitorUpdateInput, CompetitorUncheckedUpdateInput>;
  };

  /**
   * Competitor delete
   */
  export type CompetitorDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null;
    /**
     * Filter which Competitor to delete.
     */
    where: CompetitorWhereUniqueInput;
  };

  /**
   * Competitor deleteMany
   */
  export type CompetitorDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Competitors to delete
     */
    where?: CompetitorWhereInput;
    /**
     * Limit how many Competitors to delete.
     */
    limit?: number;
  };

  /**
   * Competitor.prices
   */
  export type Competitor$pricesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CompetitorPrice
     */
    select?: CompetitorPriceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CompetitorPrice
     */
    omit?: CompetitorPriceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorPriceInclude<ExtArgs> | null;
    where?: CompetitorPriceWhereInput;
    orderBy?:
      | CompetitorPriceOrderByWithRelationInput
      | CompetitorPriceOrderByWithRelationInput[];
    cursor?: CompetitorPriceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | CompetitorPriceScalarFieldEnum
      | CompetitorPriceScalarFieldEnum[];
  };

  /**
   * Competitor without action
   */
  export type CompetitorDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null;
  };

  /**
   * Model CompetitorPrice
   */

  export type AggregateCompetitorPrice = {
    _count: CompetitorPriceCountAggregateOutputType | null;
    _avg: CompetitorPriceAvgAggregateOutputType | null;
    _sum: CompetitorPriceSumAggregateOutputType | null;
    _min: CompetitorPriceMinAggregateOutputType | null;
    _max: CompetitorPriceMaxAggregateOutputType | null;
  };

  export type CompetitorPriceAvgAggregateOutputType = {
    competitorId: number | null;
    productId: number | null;
    price: Decimal | null;
  };

  export type CompetitorPriceSumAggregateOutputType = {
    competitorId: bigint | null;
    productId: bigint | null;
    price: Decimal | null;
  };

  export type CompetitorPriceMinAggregateOutputType = {
    competitorId: bigint | null;
    productId: bigint | null;
    priceDate: Date | null;
    price: Decimal | null;
  };

  export type CompetitorPriceMaxAggregateOutputType = {
    competitorId: bigint | null;
    productId: bigint | null;
    priceDate: Date | null;
    price: Decimal | null;
  };

  export type CompetitorPriceCountAggregateOutputType = {
    competitorId: number;
    productId: number;
    priceDate: number;
    price: number;
    _all: number;
  };

  export type CompetitorPriceAvgAggregateInputType = {
    competitorId?: true;
    productId?: true;
    price?: true;
  };

  export type CompetitorPriceSumAggregateInputType = {
    competitorId?: true;
    productId?: true;
    price?: true;
  };

  export type CompetitorPriceMinAggregateInputType = {
    competitorId?: true;
    productId?: true;
    priceDate?: true;
    price?: true;
  };

  export type CompetitorPriceMaxAggregateInputType = {
    competitorId?: true;
    productId?: true;
    priceDate?: true;
    price?: true;
  };

  export type CompetitorPriceCountAggregateInputType = {
    competitorId?: true;
    productId?: true;
    priceDate?: true;
    price?: true;
    _all?: true;
  };

  export type CompetitorPriceAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CompetitorPrice to aggregate.
     */
    where?: CompetitorPriceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CompetitorPrices to fetch.
     */
    orderBy?:
      | CompetitorPriceOrderByWithRelationInput
      | CompetitorPriceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CompetitorPriceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CompetitorPrices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CompetitorPrices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CompetitorPrices
     **/
    _count?: true | CompetitorPriceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CompetitorPriceAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CompetitorPriceSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompetitorPriceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompetitorPriceMaxAggregateInputType;
  };

  export type GetCompetitorPriceAggregateType<
    T extends CompetitorPriceAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateCompetitorPrice]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetitorPrice[P]>
      : GetScalarType<T[P], AggregateCompetitorPrice[P]>;
  };

  export type CompetitorPriceGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CompetitorPriceWhereInput;
    orderBy?:
      | CompetitorPriceOrderByWithAggregationInput
      | CompetitorPriceOrderByWithAggregationInput[];
    by: CompetitorPriceScalarFieldEnum[] | CompetitorPriceScalarFieldEnum;
    having?: CompetitorPriceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompetitorPriceCountAggregateInputType | true;
    _avg?: CompetitorPriceAvgAggregateInputType;
    _sum?: CompetitorPriceSumAggregateInputType;
    _min?: CompetitorPriceMinAggregateInputType;
    _max?: CompetitorPriceMaxAggregateInputType;
  };

  export type CompetitorPriceGroupByOutputType = {
    competitorId: bigint;
    productId: bigint;
    priceDate: Date;
    price: Decimal;
    _count: CompetitorPriceCountAggregateOutputType | null;
    _avg: CompetitorPriceAvgAggregateOutputType | null;
    _sum: CompetitorPriceSumAggregateOutputType | null;
    _min: CompetitorPriceMinAggregateOutputType | null;
    _max: CompetitorPriceMaxAggregateOutputType | null;
  };

  type GetCompetitorPriceGroupByPayload<T extends CompetitorPriceGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CompetitorPriceGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof CompetitorPriceGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompetitorPriceGroupByOutputType[P]>
            : GetScalarType<T[P], CompetitorPriceGroupByOutputType[P]>;
        }
      >
    >;

  export type CompetitorPriceSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      competitorId?: boolean;
      productId?: boolean;
      priceDate?: boolean;
      price?: boolean;
      competitor?: boolean | CompetitorDefaultArgs<ExtArgs>;
      product?: boolean | ProductDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['competitorPrice']
  >;

  export type CompetitorPriceSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      competitorId?: boolean;
      productId?: boolean;
      priceDate?: boolean;
      price?: boolean;
      competitor?: boolean | CompetitorDefaultArgs<ExtArgs>;
      product?: boolean | ProductDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['competitorPrice']
  >;

  export type CompetitorPriceSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      competitorId?: boolean;
      productId?: boolean;
      priceDate?: boolean;
      price?: boolean;
      competitor?: boolean | CompetitorDefaultArgs<ExtArgs>;
      product?: boolean | ProductDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['competitorPrice']
  >;

  export type CompetitorPriceSelectScalar = {
    competitorId?: boolean;
    productId?: boolean;
    priceDate?: boolean;
    price?: boolean;
  };

  export type CompetitorPriceOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'competitorId' | 'productId' | 'priceDate' | 'price',
    ExtArgs['result']['competitorPrice']
  >;
  export type CompetitorPriceInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    competitor?: boolean | CompetitorDefaultArgs<ExtArgs>;
    product?: boolean | ProductDefaultArgs<ExtArgs>;
  };
  export type CompetitorPriceIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    competitor?: boolean | CompetitorDefaultArgs<ExtArgs>;
    product?: boolean | ProductDefaultArgs<ExtArgs>;
  };
  export type CompetitorPriceIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    competitor?: boolean | CompetitorDefaultArgs<ExtArgs>;
    product?: boolean | ProductDefaultArgs<ExtArgs>;
  };

  export type $CompetitorPricePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'CompetitorPrice';
    objects: {
      competitor: Prisma.$CompetitorPayload<ExtArgs>;
      product: Prisma.$ProductPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        competitorId: bigint;
        productId: bigint;
        priceDate: Date;
        price: Prisma.Decimal;
      },
      ExtArgs['result']['competitorPrice']
    >;
    composites: {};
  };

  type CompetitorPriceGetPayload<
    S extends boolean | null | undefined | CompetitorPriceDefaultArgs,
  > = $Result.GetResult<Prisma.$CompetitorPricePayload, S>;

  type CompetitorPriceCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    CompetitorPriceFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: CompetitorPriceCountAggregateInputType | true;
  };

  export interface CompetitorPriceDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['CompetitorPrice'];
      meta: { name: 'CompetitorPrice' };
    };
    /**
     * Find zero or one CompetitorPrice that matches the filter.
     * @param {CompetitorPriceFindUniqueArgs} args - Arguments to find a CompetitorPrice
     * @example
     * // Get one CompetitorPrice
     * const competitorPrice = await prisma.competitorPrice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompetitorPriceFindUniqueArgs>(
      args: SelectSubset<T, CompetitorPriceFindUniqueArgs<ExtArgs>>,
    ): Prisma__CompetitorPriceClient<
      $Result.GetResult<
        Prisma.$CompetitorPricePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one CompetitorPrice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompetitorPriceFindUniqueOrThrowArgs} args - Arguments to find a CompetitorPrice
     * @example
     * // Get one CompetitorPrice
     * const competitorPrice = await prisma.competitorPrice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompetitorPriceFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CompetitorPriceFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CompetitorPriceClient<
      $Result.GetResult<
        Prisma.$CompetitorPricePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first CompetitorPrice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorPriceFindFirstArgs} args - Arguments to find a CompetitorPrice
     * @example
     * // Get one CompetitorPrice
     * const competitorPrice = await prisma.competitorPrice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompetitorPriceFindFirstArgs>(
      args?: SelectSubset<T, CompetitorPriceFindFirstArgs<ExtArgs>>,
    ): Prisma__CompetitorPriceClient<
      $Result.GetResult<
        Prisma.$CompetitorPricePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first CompetitorPrice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorPriceFindFirstOrThrowArgs} args - Arguments to find a CompetitorPrice
     * @example
     * // Get one CompetitorPrice
     * const competitorPrice = await prisma.competitorPrice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompetitorPriceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CompetitorPriceFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CompetitorPriceClient<
      $Result.GetResult<
        Prisma.$CompetitorPricePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more CompetitorPrices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorPriceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompetitorPrices
     * const competitorPrices = await prisma.competitorPrice.findMany()
     *
     * // Get first 10 CompetitorPrices
     * const competitorPrices = await prisma.competitorPrice.findMany({ take: 10 })
     *
     * // Only select the `competitorId`
     * const competitorPriceWithCompetitorIdOnly = await prisma.competitorPrice.findMany({ select: { competitorId: true } })
     *
     */
    findMany<T extends CompetitorPriceFindManyArgs>(
      args?: SelectSubset<T, CompetitorPriceFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CompetitorPricePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a CompetitorPrice.
     * @param {CompetitorPriceCreateArgs} args - Arguments to create a CompetitorPrice.
     * @example
     * // Create one CompetitorPrice
     * const CompetitorPrice = await prisma.competitorPrice.create({
     *   data: {
     *     // ... data to create a CompetitorPrice
     *   }
     * })
     *
     */
    create<T extends CompetitorPriceCreateArgs>(
      args: SelectSubset<T, CompetitorPriceCreateArgs<ExtArgs>>,
    ): Prisma__CompetitorPriceClient<
      $Result.GetResult<
        Prisma.$CompetitorPricePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many CompetitorPrices.
     * @param {CompetitorPriceCreateManyArgs} args - Arguments to create many CompetitorPrices.
     * @example
     * // Create many CompetitorPrices
     * const competitorPrice = await prisma.competitorPrice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CompetitorPriceCreateManyArgs>(
      args?: SelectSubset<T, CompetitorPriceCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many CompetitorPrices and returns the data saved in the database.
     * @param {CompetitorPriceCreateManyAndReturnArgs} args - Arguments to create many CompetitorPrices.
     * @example
     * // Create many CompetitorPrices
     * const competitorPrice = await prisma.competitorPrice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CompetitorPrices and only return the `competitorId`
     * const competitorPriceWithCompetitorIdOnly = await prisma.competitorPrice.createManyAndReturn({
     *   select: { competitorId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CompetitorPriceCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CompetitorPriceCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CompetitorPricePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a CompetitorPrice.
     * @param {CompetitorPriceDeleteArgs} args - Arguments to delete one CompetitorPrice.
     * @example
     * // Delete one CompetitorPrice
     * const CompetitorPrice = await prisma.competitorPrice.delete({
     *   where: {
     *     // ... filter to delete one CompetitorPrice
     *   }
     * })
     *
     */
    delete<T extends CompetitorPriceDeleteArgs>(
      args: SelectSubset<T, CompetitorPriceDeleteArgs<ExtArgs>>,
    ): Prisma__CompetitorPriceClient<
      $Result.GetResult<
        Prisma.$CompetitorPricePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one CompetitorPrice.
     * @param {CompetitorPriceUpdateArgs} args - Arguments to update one CompetitorPrice.
     * @example
     * // Update one CompetitorPrice
     * const competitorPrice = await prisma.competitorPrice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CompetitorPriceUpdateArgs>(
      args: SelectSubset<T, CompetitorPriceUpdateArgs<ExtArgs>>,
    ): Prisma__CompetitorPriceClient<
      $Result.GetResult<
        Prisma.$CompetitorPricePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more CompetitorPrices.
     * @param {CompetitorPriceDeleteManyArgs} args - Arguments to filter CompetitorPrices to delete.
     * @example
     * // Delete a few CompetitorPrices
     * const { count } = await prisma.competitorPrice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CompetitorPriceDeleteManyArgs>(
      args?: SelectSubset<T, CompetitorPriceDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CompetitorPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorPriceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompetitorPrices
     * const competitorPrice = await prisma.competitorPrice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CompetitorPriceUpdateManyArgs>(
      args: SelectSubset<T, CompetitorPriceUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CompetitorPrices and returns the data updated in the database.
     * @param {CompetitorPriceUpdateManyAndReturnArgs} args - Arguments to update many CompetitorPrices.
     * @example
     * // Update many CompetitorPrices
     * const competitorPrice = await prisma.competitorPrice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CompetitorPrices and only return the `competitorId`
     * const competitorPriceWithCompetitorIdOnly = await prisma.competitorPrice.updateManyAndReturn({
     *   select: { competitorId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CompetitorPriceUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CompetitorPriceUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CompetitorPricePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one CompetitorPrice.
     * @param {CompetitorPriceUpsertArgs} args - Arguments to update or create a CompetitorPrice.
     * @example
     * // Update or create a CompetitorPrice
     * const competitorPrice = await prisma.competitorPrice.upsert({
     *   create: {
     *     // ... data to create a CompetitorPrice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompetitorPrice we want to update
     *   }
     * })
     */
    upsert<T extends CompetitorPriceUpsertArgs>(
      args: SelectSubset<T, CompetitorPriceUpsertArgs<ExtArgs>>,
    ): Prisma__CompetitorPriceClient<
      $Result.GetResult<
        Prisma.$CompetitorPricePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of CompetitorPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorPriceCountArgs} args - Arguments to filter CompetitorPrices to count.
     * @example
     * // Count the number of CompetitorPrices
     * const count = await prisma.competitorPrice.count({
     *   where: {
     *     // ... the filter for the CompetitorPrices we want to count
     *   }
     * })
     **/
    count<T extends CompetitorPriceCountArgs>(
      args?: Subset<T, CompetitorPriceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompetitorPriceCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a CompetitorPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorPriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CompetitorPriceAggregateArgs>(
      args: Subset<T, CompetitorPriceAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompetitorPriceAggregateType<T>>;

    /**
     * Group by CompetitorPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorPriceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends CompetitorPriceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompetitorPriceGroupByArgs['orderBy'] }
        : { orderBy?: CompetitorPriceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CompetitorPriceGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetCompetitorPriceGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CompetitorPrice model
     */
    readonly fields: CompetitorPriceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompetitorPrice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompetitorPriceClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    competitor<T extends CompetitorDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CompetitorDefaultArgs<ExtArgs>>,
    ): Prisma__CompetitorClient<
      | $Result.GetResult<
          Prisma.$CompetitorPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProductDefaultArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      | $Result.GetResult<
          Prisma.$ProductPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the CompetitorPrice model
   */
  interface CompetitorPriceFieldRefs {
    readonly competitorId: FieldRef<'CompetitorPrice', 'BigInt'>;
    readonly productId: FieldRef<'CompetitorPrice', 'BigInt'>;
    readonly priceDate: FieldRef<'CompetitorPrice', 'DateTime'>;
    readonly price: FieldRef<'CompetitorPrice', 'Decimal'>;
  }

  // Custom InputTypes
  /**
   * CompetitorPrice findUnique
   */
  export type CompetitorPriceFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CompetitorPrice
     */
    select?: CompetitorPriceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CompetitorPrice
     */
    omit?: CompetitorPriceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorPriceInclude<ExtArgs> | null;
    /**
     * Filter, which CompetitorPrice to fetch.
     */
    where: CompetitorPriceWhereUniqueInput;
  };

  /**
   * CompetitorPrice findUniqueOrThrow
   */
  export type CompetitorPriceFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CompetitorPrice
     */
    select?: CompetitorPriceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CompetitorPrice
     */
    omit?: CompetitorPriceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorPriceInclude<ExtArgs> | null;
    /**
     * Filter, which CompetitorPrice to fetch.
     */
    where: CompetitorPriceWhereUniqueInput;
  };

  /**
   * CompetitorPrice findFirst
   */
  export type CompetitorPriceFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CompetitorPrice
     */
    select?: CompetitorPriceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CompetitorPrice
     */
    omit?: CompetitorPriceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorPriceInclude<ExtArgs> | null;
    /**
     * Filter, which CompetitorPrice to fetch.
     */
    where?: CompetitorPriceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CompetitorPrices to fetch.
     */
    orderBy?:
      | CompetitorPriceOrderByWithRelationInput
      | CompetitorPriceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CompetitorPrices.
     */
    cursor?: CompetitorPriceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CompetitorPrices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CompetitorPrices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CompetitorPrices.
     */
    distinct?:
      | CompetitorPriceScalarFieldEnum
      | CompetitorPriceScalarFieldEnum[];
  };

  /**
   * CompetitorPrice findFirstOrThrow
   */
  export type CompetitorPriceFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CompetitorPrice
     */
    select?: CompetitorPriceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CompetitorPrice
     */
    omit?: CompetitorPriceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorPriceInclude<ExtArgs> | null;
    /**
     * Filter, which CompetitorPrice to fetch.
     */
    where?: CompetitorPriceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CompetitorPrices to fetch.
     */
    orderBy?:
      | CompetitorPriceOrderByWithRelationInput
      | CompetitorPriceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CompetitorPrices.
     */
    cursor?: CompetitorPriceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CompetitorPrices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CompetitorPrices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CompetitorPrices.
     */
    distinct?:
      | CompetitorPriceScalarFieldEnum
      | CompetitorPriceScalarFieldEnum[];
  };

  /**
   * CompetitorPrice findMany
   */
  export type CompetitorPriceFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CompetitorPrice
     */
    select?: CompetitorPriceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CompetitorPrice
     */
    omit?: CompetitorPriceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorPriceInclude<ExtArgs> | null;
    /**
     * Filter, which CompetitorPrices to fetch.
     */
    where?: CompetitorPriceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CompetitorPrices to fetch.
     */
    orderBy?:
      | CompetitorPriceOrderByWithRelationInput
      | CompetitorPriceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CompetitorPrices.
     */
    cursor?: CompetitorPriceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CompetitorPrices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CompetitorPrices.
     */
    skip?: number;
    distinct?:
      | CompetitorPriceScalarFieldEnum
      | CompetitorPriceScalarFieldEnum[];
  };

  /**
   * CompetitorPrice create
   */
  export type CompetitorPriceCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CompetitorPrice
     */
    select?: CompetitorPriceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CompetitorPrice
     */
    omit?: CompetitorPriceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorPriceInclude<ExtArgs> | null;
    /**
     * The data needed to create a CompetitorPrice.
     */
    data: XOR<CompetitorPriceCreateInput, CompetitorPriceUncheckedCreateInput>;
  };

  /**
   * CompetitorPrice createMany
   */
  export type CompetitorPriceCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many CompetitorPrices.
     */
    data: CompetitorPriceCreateManyInput | CompetitorPriceCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * CompetitorPrice createManyAndReturn
   */
  export type CompetitorPriceCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CompetitorPrice
     */
    select?: CompetitorPriceSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CompetitorPrice
     */
    omit?: CompetitorPriceOmit<ExtArgs> | null;
    /**
     * The data used to create many CompetitorPrices.
     */
    data: CompetitorPriceCreateManyInput | CompetitorPriceCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorPriceIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * CompetitorPrice update
   */
  export type CompetitorPriceUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CompetitorPrice
     */
    select?: CompetitorPriceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CompetitorPrice
     */
    omit?: CompetitorPriceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorPriceInclude<ExtArgs> | null;
    /**
     * The data needed to update a CompetitorPrice.
     */
    data: XOR<CompetitorPriceUpdateInput, CompetitorPriceUncheckedUpdateInput>;
    /**
     * Choose, which CompetitorPrice to update.
     */
    where: CompetitorPriceWhereUniqueInput;
  };

  /**
   * CompetitorPrice updateMany
   */
  export type CompetitorPriceUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update CompetitorPrices.
     */
    data: XOR<
      CompetitorPriceUpdateManyMutationInput,
      CompetitorPriceUncheckedUpdateManyInput
    >;
    /**
     * Filter which CompetitorPrices to update
     */
    where?: CompetitorPriceWhereInput;
    /**
     * Limit how many CompetitorPrices to update.
     */
    limit?: number;
  };

  /**
   * CompetitorPrice updateManyAndReturn
   */
  export type CompetitorPriceUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CompetitorPrice
     */
    select?: CompetitorPriceSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CompetitorPrice
     */
    omit?: CompetitorPriceOmit<ExtArgs> | null;
    /**
     * The data used to update CompetitorPrices.
     */
    data: XOR<
      CompetitorPriceUpdateManyMutationInput,
      CompetitorPriceUncheckedUpdateManyInput
    >;
    /**
     * Filter which CompetitorPrices to update
     */
    where?: CompetitorPriceWhereInput;
    /**
     * Limit how many CompetitorPrices to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorPriceIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * CompetitorPrice upsert
   */
  export type CompetitorPriceUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CompetitorPrice
     */
    select?: CompetitorPriceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CompetitorPrice
     */
    omit?: CompetitorPriceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorPriceInclude<ExtArgs> | null;
    /**
     * The filter to search for the CompetitorPrice to update in case it exists.
     */
    where: CompetitorPriceWhereUniqueInput;
    /**
     * In case the CompetitorPrice found by the `where` argument doesn't exist, create a new CompetitorPrice with this data.
     */
    create: XOR<
      CompetitorPriceCreateInput,
      CompetitorPriceUncheckedCreateInput
    >;
    /**
     * In case the CompetitorPrice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      CompetitorPriceUpdateInput,
      CompetitorPriceUncheckedUpdateInput
    >;
  };

  /**
   * CompetitorPrice delete
   */
  export type CompetitorPriceDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CompetitorPrice
     */
    select?: CompetitorPriceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CompetitorPrice
     */
    omit?: CompetitorPriceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorPriceInclude<ExtArgs> | null;
    /**
     * Filter which CompetitorPrice to delete.
     */
    where: CompetitorPriceWhereUniqueInput;
  };

  /**
   * CompetitorPrice deleteMany
   */
  export type CompetitorPriceDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CompetitorPrices to delete
     */
    where?: CompetitorPriceWhereInput;
    /**
     * Limit how many CompetitorPrices to delete.
     */
    limit?: number;
  };

  /**
   * CompetitorPrice without action
   */
  export type CompetitorPriceDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CompetitorPrice
     */
    select?: CompetitorPriceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CompetitorPrice
     */
    omit?: CompetitorPriceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorPriceInclude<ExtArgs> | null;
  };

  /**
   * Model MarkdownEvaluation
   */

  export type AggregateMarkdownEvaluation = {
    _count: MarkdownEvaluationCountAggregateOutputType | null;
    _avg: MarkdownEvaluationAvgAggregateOutputType | null;
    _sum: MarkdownEvaluationSumAggregateOutputType | null;
    _min: MarkdownEvaluationMinAggregateOutputType | null;
    _max: MarkdownEvaluationMaxAggregateOutputType | null;
  };

  export type MarkdownEvaluationAvgAggregateOutputType = {
    id: number | null;
    productId: number | null;
    baselinePrice: Decimal | null;
    baselineExpectedUnits: number | null;
    baselineExpectedProfit: Decimal | null;
    markdownPct: Decimal | null;
    candidatePrice: Decimal | null;
    expectedUnits: number | null;
    expectedProfit: Decimal | null;
    expectedDaysToSell: number | null;
    expectedUnsoldUnits: number | null;
  };

  export type MarkdownEvaluationSumAggregateOutputType = {
    id: bigint | null;
    productId: bigint | null;
    baselinePrice: Decimal | null;
    baselineExpectedUnits: number | null;
    baselineExpectedProfit: Decimal | null;
    markdownPct: Decimal | null;
    candidatePrice: Decimal | null;
    expectedUnits: number | null;
    expectedProfit: Decimal | null;
    expectedDaysToSell: number | null;
    expectedUnsoldUnits: number | null;
  };

  export type MarkdownEvaluationMinAggregateOutputType = {
    id: bigint | null;
    productId: bigint | null;
    evaluatedAt: Date | null;
    baselinePrice: Decimal | null;
    baselineExpectedUnits: number | null;
    baselineExpectedProfit: Decimal | null;
    markdownPct: Decimal | null;
    candidatePrice: Decimal | null;
    expectedUnits: number | null;
    expectedProfit: Decimal | null;
    expectedDaysToSell: number | null;
    expectedUnsoldUnits: number | null;
    isOptimal: boolean | null;
  };

  export type MarkdownEvaluationMaxAggregateOutputType = {
    id: bigint | null;
    productId: bigint | null;
    evaluatedAt: Date | null;
    baselinePrice: Decimal | null;
    baselineExpectedUnits: number | null;
    baselineExpectedProfit: Decimal | null;
    markdownPct: Decimal | null;
    candidatePrice: Decimal | null;
    expectedUnits: number | null;
    expectedProfit: Decimal | null;
    expectedDaysToSell: number | null;
    expectedUnsoldUnits: number | null;
    isOptimal: boolean | null;
  };

  export type MarkdownEvaluationCountAggregateOutputType = {
    id: number;
    productId: number;
    evaluatedAt: number;
    baselinePrice: number;
    baselineExpectedUnits: number;
    baselineExpectedProfit: number;
    markdownPct: number;
    candidatePrice: number;
    expectedUnits: number;
    expectedProfit: number;
    expectedDaysToSell: number;
    expectedUnsoldUnits: number;
    isOptimal: number;
    _all: number;
  };

  export type MarkdownEvaluationAvgAggregateInputType = {
    id?: true;
    productId?: true;
    baselinePrice?: true;
    baselineExpectedUnits?: true;
    baselineExpectedProfit?: true;
    markdownPct?: true;
    candidatePrice?: true;
    expectedUnits?: true;
    expectedProfit?: true;
    expectedDaysToSell?: true;
    expectedUnsoldUnits?: true;
  };

  export type MarkdownEvaluationSumAggregateInputType = {
    id?: true;
    productId?: true;
    baselinePrice?: true;
    baselineExpectedUnits?: true;
    baselineExpectedProfit?: true;
    markdownPct?: true;
    candidatePrice?: true;
    expectedUnits?: true;
    expectedProfit?: true;
    expectedDaysToSell?: true;
    expectedUnsoldUnits?: true;
  };

  export type MarkdownEvaluationMinAggregateInputType = {
    id?: true;
    productId?: true;
    evaluatedAt?: true;
    baselinePrice?: true;
    baselineExpectedUnits?: true;
    baselineExpectedProfit?: true;
    markdownPct?: true;
    candidatePrice?: true;
    expectedUnits?: true;
    expectedProfit?: true;
    expectedDaysToSell?: true;
    expectedUnsoldUnits?: true;
    isOptimal?: true;
  };

  export type MarkdownEvaluationMaxAggregateInputType = {
    id?: true;
    productId?: true;
    evaluatedAt?: true;
    baselinePrice?: true;
    baselineExpectedUnits?: true;
    baselineExpectedProfit?: true;
    markdownPct?: true;
    candidatePrice?: true;
    expectedUnits?: true;
    expectedProfit?: true;
    expectedDaysToSell?: true;
    expectedUnsoldUnits?: true;
    isOptimal?: true;
  };

  export type MarkdownEvaluationCountAggregateInputType = {
    id?: true;
    productId?: true;
    evaluatedAt?: true;
    baselinePrice?: true;
    baselineExpectedUnits?: true;
    baselineExpectedProfit?: true;
    markdownPct?: true;
    candidatePrice?: true;
    expectedUnits?: true;
    expectedProfit?: true;
    expectedDaysToSell?: true;
    expectedUnsoldUnits?: true;
    isOptimal?: true;
    _all?: true;
  };

  export type MarkdownEvaluationAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which MarkdownEvaluation to aggregate.
     */
    where?: MarkdownEvaluationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MarkdownEvaluations to fetch.
     */
    orderBy?:
      | MarkdownEvaluationOrderByWithRelationInput
      | MarkdownEvaluationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: MarkdownEvaluationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MarkdownEvaluations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MarkdownEvaluations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MarkdownEvaluations
     **/
    _count?: true | MarkdownEvaluationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: MarkdownEvaluationAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: MarkdownEvaluationSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MarkdownEvaluationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MarkdownEvaluationMaxAggregateInputType;
  };

  export type GetMarkdownEvaluationAggregateType<
    T extends MarkdownEvaluationAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateMarkdownEvaluation]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarkdownEvaluation[P]>
      : GetScalarType<T[P], AggregateMarkdownEvaluation[P]>;
  };

  export type MarkdownEvaluationGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MarkdownEvaluationWhereInput;
    orderBy?:
      | MarkdownEvaluationOrderByWithAggregationInput
      | MarkdownEvaluationOrderByWithAggregationInput[];
    by: MarkdownEvaluationScalarFieldEnum[] | MarkdownEvaluationScalarFieldEnum;
    having?: MarkdownEvaluationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MarkdownEvaluationCountAggregateInputType | true;
    _avg?: MarkdownEvaluationAvgAggregateInputType;
    _sum?: MarkdownEvaluationSumAggregateInputType;
    _min?: MarkdownEvaluationMinAggregateInputType;
    _max?: MarkdownEvaluationMaxAggregateInputType;
  };

  export type MarkdownEvaluationGroupByOutputType = {
    id: bigint;
    productId: bigint;
    evaluatedAt: Date;
    baselinePrice: Decimal;
    baselineExpectedUnits: number;
    baselineExpectedProfit: Decimal;
    markdownPct: Decimal;
    candidatePrice: Decimal;
    expectedUnits: number;
    expectedProfit: Decimal;
    expectedDaysToSell: number | null;
    expectedUnsoldUnits: number | null;
    isOptimal: boolean;
    _count: MarkdownEvaluationCountAggregateOutputType | null;
    _avg: MarkdownEvaluationAvgAggregateOutputType | null;
    _sum: MarkdownEvaluationSumAggregateOutputType | null;
    _min: MarkdownEvaluationMinAggregateOutputType | null;
    _max: MarkdownEvaluationMaxAggregateOutputType | null;
  };

  type GetMarkdownEvaluationGroupByPayload<
    T extends MarkdownEvaluationGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarkdownEvaluationGroupByOutputType, T['by']> & {
        [P in keyof T &
          keyof MarkdownEvaluationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], MarkdownEvaluationGroupByOutputType[P]>
          : GetScalarType<T[P], MarkdownEvaluationGroupByOutputType[P]>;
      }
    >
  >;

  export type MarkdownEvaluationSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      productId?: boolean;
      evaluatedAt?: boolean;
      baselinePrice?: boolean;
      baselineExpectedUnits?: boolean;
      baselineExpectedProfit?: boolean;
      markdownPct?: boolean;
      candidatePrice?: boolean;
      expectedUnits?: boolean;
      expectedProfit?: boolean;
      expectedDaysToSell?: boolean;
      expectedUnsoldUnits?: boolean;
      isOptimal?: boolean;
      product?: boolean | ProductDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['markdownEvaluation']
  >;

  export type MarkdownEvaluationSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      productId?: boolean;
      evaluatedAt?: boolean;
      baselinePrice?: boolean;
      baselineExpectedUnits?: boolean;
      baselineExpectedProfit?: boolean;
      markdownPct?: boolean;
      candidatePrice?: boolean;
      expectedUnits?: boolean;
      expectedProfit?: boolean;
      expectedDaysToSell?: boolean;
      expectedUnsoldUnits?: boolean;
      isOptimal?: boolean;
      product?: boolean | ProductDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['markdownEvaluation']
  >;

  export type MarkdownEvaluationSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      productId?: boolean;
      evaluatedAt?: boolean;
      baselinePrice?: boolean;
      baselineExpectedUnits?: boolean;
      baselineExpectedProfit?: boolean;
      markdownPct?: boolean;
      candidatePrice?: boolean;
      expectedUnits?: boolean;
      expectedProfit?: boolean;
      expectedDaysToSell?: boolean;
      expectedUnsoldUnits?: boolean;
      isOptimal?: boolean;
      product?: boolean | ProductDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['markdownEvaluation']
  >;

  export type MarkdownEvaluationSelectScalar = {
    id?: boolean;
    productId?: boolean;
    evaluatedAt?: boolean;
    baselinePrice?: boolean;
    baselineExpectedUnits?: boolean;
    baselineExpectedProfit?: boolean;
    markdownPct?: boolean;
    candidatePrice?: boolean;
    expectedUnits?: boolean;
    expectedProfit?: boolean;
    expectedDaysToSell?: boolean;
    expectedUnsoldUnits?: boolean;
    isOptimal?: boolean;
  };

  export type MarkdownEvaluationOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'productId'
    | 'evaluatedAt'
    | 'baselinePrice'
    | 'baselineExpectedUnits'
    | 'baselineExpectedProfit'
    | 'markdownPct'
    | 'candidatePrice'
    | 'expectedUnits'
    | 'expectedProfit'
    | 'expectedDaysToSell'
    | 'expectedUnsoldUnits'
    | 'isOptimal',
    ExtArgs['result']['markdownEvaluation']
  >;
  export type MarkdownEvaluationInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    product?: boolean | ProductDefaultArgs<ExtArgs>;
  };
  export type MarkdownEvaluationIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    product?: boolean | ProductDefaultArgs<ExtArgs>;
  };
  export type MarkdownEvaluationIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    product?: boolean | ProductDefaultArgs<ExtArgs>;
  };

  export type $MarkdownEvaluationPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'MarkdownEvaluation';
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: bigint;
        productId: bigint;
        evaluatedAt: Date;
        baselinePrice: Prisma.Decimal;
        baselineExpectedUnits: number;
        baselineExpectedProfit: Prisma.Decimal;
        markdownPct: Prisma.Decimal;
        candidatePrice: Prisma.Decimal;
        expectedUnits: number;
        expectedProfit: Prisma.Decimal;
        expectedDaysToSell: number | null;
        expectedUnsoldUnits: number | null;
        isOptimal: boolean;
      },
      ExtArgs['result']['markdownEvaluation']
    >;
    composites: {};
  };

  type MarkdownEvaluationGetPayload<
    S extends boolean | null | undefined | MarkdownEvaluationDefaultArgs,
  > = $Result.GetResult<Prisma.$MarkdownEvaluationPayload, S>;

  type MarkdownEvaluationCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    MarkdownEvaluationFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: MarkdownEvaluationCountAggregateInputType | true;
  };

  export interface MarkdownEvaluationDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['MarkdownEvaluation'];
      meta: { name: 'MarkdownEvaluation' };
    };
    /**
     * Find zero or one MarkdownEvaluation that matches the filter.
     * @param {MarkdownEvaluationFindUniqueArgs} args - Arguments to find a MarkdownEvaluation
     * @example
     * // Get one MarkdownEvaluation
     * const markdownEvaluation = await prisma.markdownEvaluation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarkdownEvaluationFindUniqueArgs>(
      args: SelectSubset<T, MarkdownEvaluationFindUniqueArgs<ExtArgs>>,
    ): Prisma__MarkdownEvaluationClient<
      $Result.GetResult<
        Prisma.$MarkdownEvaluationPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one MarkdownEvaluation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarkdownEvaluationFindUniqueOrThrowArgs} args - Arguments to find a MarkdownEvaluation
     * @example
     * // Get one MarkdownEvaluation
     * const markdownEvaluation = await prisma.markdownEvaluation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarkdownEvaluationFindUniqueOrThrowArgs>(
      args: SelectSubset<T, MarkdownEvaluationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__MarkdownEvaluationClient<
      $Result.GetResult<
        Prisma.$MarkdownEvaluationPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first MarkdownEvaluation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkdownEvaluationFindFirstArgs} args - Arguments to find a MarkdownEvaluation
     * @example
     * // Get one MarkdownEvaluation
     * const markdownEvaluation = await prisma.markdownEvaluation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarkdownEvaluationFindFirstArgs>(
      args?: SelectSubset<T, MarkdownEvaluationFindFirstArgs<ExtArgs>>,
    ): Prisma__MarkdownEvaluationClient<
      $Result.GetResult<
        Prisma.$MarkdownEvaluationPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first MarkdownEvaluation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkdownEvaluationFindFirstOrThrowArgs} args - Arguments to find a MarkdownEvaluation
     * @example
     * // Get one MarkdownEvaluation
     * const markdownEvaluation = await prisma.markdownEvaluation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarkdownEvaluationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MarkdownEvaluationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__MarkdownEvaluationClient<
      $Result.GetResult<
        Prisma.$MarkdownEvaluationPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more MarkdownEvaluations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkdownEvaluationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarkdownEvaluations
     * const markdownEvaluations = await prisma.markdownEvaluation.findMany()
     *
     * // Get first 10 MarkdownEvaluations
     * const markdownEvaluations = await prisma.markdownEvaluation.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const markdownEvaluationWithIdOnly = await prisma.markdownEvaluation.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MarkdownEvaluationFindManyArgs>(
      args?: SelectSubset<T, MarkdownEvaluationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MarkdownEvaluationPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a MarkdownEvaluation.
     * @param {MarkdownEvaluationCreateArgs} args - Arguments to create a MarkdownEvaluation.
     * @example
     * // Create one MarkdownEvaluation
     * const MarkdownEvaluation = await prisma.markdownEvaluation.create({
     *   data: {
     *     // ... data to create a MarkdownEvaluation
     *   }
     * })
     *
     */
    create<T extends MarkdownEvaluationCreateArgs>(
      args: SelectSubset<T, MarkdownEvaluationCreateArgs<ExtArgs>>,
    ): Prisma__MarkdownEvaluationClient<
      $Result.GetResult<
        Prisma.$MarkdownEvaluationPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many MarkdownEvaluations.
     * @param {MarkdownEvaluationCreateManyArgs} args - Arguments to create many MarkdownEvaluations.
     * @example
     * // Create many MarkdownEvaluations
     * const markdownEvaluation = await prisma.markdownEvaluation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MarkdownEvaluationCreateManyArgs>(
      args?: SelectSubset<T, MarkdownEvaluationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many MarkdownEvaluations and returns the data saved in the database.
     * @param {MarkdownEvaluationCreateManyAndReturnArgs} args - Arguments to create many MarkdownEvaluations.
     * @example
     * // Create many MarkdownEvaluations
     * const markdownEvaluation = await prisma.markdownEvaluation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many MarkdownEvaluations and only return the `id`
     * const markdownEvaluationWithIdOnly = await prisma.markdownEvaluation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MarkdownEvaluationCreateManyAndReturnArgs>(
      args?: SelectSubset<
        T,
        MarkdownEvaluationCreateManyAndReturnArgs<ExtArgs>
      >,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MarkdownEvaluationPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a MarkdownEvaluation.
     * @param {MarkdownEvaluationDeleteArgs} args - Arguments to delete one MarkdownEvaluation.
     * @example
     * // Delete one MarkdownEvaluation
     * const MarkdownEvaluation = await prisma.markdownEvaluation.delete({
     *   where: {
     *     // ... filter to delete one MarkdownEvaluation
     *   }
     * })
     *
     */
    delete<T extends MarkdownEvaluationDeleteArgs>(
      args: SelectSubset<T, MarkdownEvaluationDeleteArgs<ExtArgs>>,
    ): Prisma__MarkdownEvaluationClient<
      $Result.GetResult<
        Prisma.$MarkdownEvaluationPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one MarkdownEvaluation.
     * @param {MarkdownEvaluationUpdateArgs} args - Arguments to update one MarkdownEvaluation.
     * @example
     * // Update one MarkdownEvaluation
     * const markdownEvaluation = await prisma.markdownEvaluation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MarkdownEvaluationUpdateArgs>(
      args: SelectSubset<T, MarkdownEvaluationUpdateArgs<ExtArgs>>,
    ): Prisma__MarkdownEvaluationClient<
      $Result.GetResult<
        Prisma.$MarkdownEvaluationPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more MarkdownEvaluations.
     * @param {MarkdownEvaluationDeleteManyArgs} args - Arguments to filter MarkdownEvaluations to delete.
     * @example
     * // Delete a few MarkdownEvaluations
     * const { count } = await prisma.markdownEvaluation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MarkdownEvaluationDeleteManyArgs>(
      args?: SelectSubset<T, MarkdownEvaluationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more MarkdownEvaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkdownEvaluationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarkdownEvaluations
     * const markdownEvaluation = await prisma.markdownEvaluation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MarkdownEvaluationUpdateManyArgs>(
      args: SelectSubset<T, MarkdownEvaluationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more MarkdownEvaluations and returns the data updated in the database.
     * @param {MarkdownEvaluationUpdateManyAndReturnArgs} args - Arguments to update many MarkdownEvaluations.
     * @example
     * // Update many MarkdownEvaluations
     * const markdownEvaluation = await prisma.markdownEvaluation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more MarkdownEvaluations and only return the `id`
     * const markdownEvaluationWithIdOnly = await prisma.markdownEvaluation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends MarkdownEvaluationUpdateManyAndReturnArgs>(
      args: SelectSubset<T, MarkdownEvaluationUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MarkdownEvaluationPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one MarkdownEvaluation.
     * @param {MarkdownEvaluationUpsertArgs} args - Arguments to update or create a MarkdownEvaluation.
     * @example
     * // Update or create a MarkdownEvaluation
     * const markdownEvaluation = await prisma.markdownEvaluation.upsert({
     *   create: {
     *     // ... data to create a MarkdownEvaluation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarkdownEvaluation we want to update
     *   }
     * })
     */
    upsert<T extends MarkdownEvaluationUpsertArgs>(
      args: SelectSubset<T, MarkdownEvaluationUpsertArgs<ExtArgs>>,
    ): Prisma__MarkdownEvaluationClient<
      $Result.GetResult<
        Prisma.$MarkdownEvaluationPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of MarkdownEvaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkdownEvaluationCountArgs} args - Arguments to filter MarkdownEvaluations to count.
     * @example
     * // Count the number of MarkdownEvaluations
     * const count = await prisma.markdownEvaluation.count({
     *   where: {
     *     // ... the filter for the MarkdownEvaluations we want to count
     *   }
     * })
     **/
    count<T extends MarkdownEvaluationCountArgs>(
      args?: Subset<T, MarkdownEvaluationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<
              T['select'],
              MarkdownEvaluationCountAggregateOutputType
            >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a MarkdownEvaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkdownEvaluationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends MarkdownEvaluationAggregateArgs>(
      args: Subset<T, MarkdownEvaluationAggregateArgs>,
    ): Prisma.PrismaPromise<GetMarkdownEvaluationAggregateType<T>>;

    /**
     * Group by MarkdownEvaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkdownEvaluationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends MarkdownEvaluationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarkdownEvaluationGroupByArgs['orderBy'] }
        : { orderBy?: MarkdownEvaluationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, MarkdownEvaluationGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetMarkdownEvaluationGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MarkdownEvaluation model
     */
    readonly fields: MarkdownEvaluationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarkdownEvaluation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarkdownEvaluationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProductDefaultArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      | $Result.GetResult<
          Prisma.$ProductPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the MarkdownEvaluation model
   */
  interface MarkdownEvaluationFieldRefs {
    readonly id: FieldRef<'MarkdownEvaluation', 'BigInt'>;
    readonly productId: FieldRef<'MarkdownEvaluation', 'BigInt'>;
    readonly evaluatedAt: FieldRef<'MarkdownEvaluation', 'DateTime'>;
    readonly baselinePrice: FieldRef<'MarkdownEvaluation', 'Decimal'>;
    readonly baselineExpectedUnits: FieldRef<'MarkdownEvaluation', 'Int'>;
    readonly baselineExpectedProfit: FieldRef<'MarkdownEvaluation', 'Decimal'>;
    readonly markdownPct: FieldRef<'MarkdownEvaluation', 'Decimal'>;
    readonly candidatePrice: FieldRef<'MarkdownEvaluation', 'Decimal'>;
    readonly expectedUnits: FieldRef<'MarkdownEvaluation', 'Int'>;
    readonly expectedProfit: FieldRef<'MarkdownEvaluation', 'Decimal'>;
    readonly expectedDaysToSell: FieldRef<'MarkdownEvaluation', 'Int'>;
    readonly expectedUnsoldUnits: FieldRef<'MarkdownEvaluation', 'Int'>;
    readonly isOptimal: FieldRef<'MarkdownEvaluation', 'Boolean'>;
  }

  // Custom InputTypes
  /**
   * MarkdownEvaluation findUnique
   */
  export type MarkdownEvaluationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MarkdownEvaluation
     */
    select?: MarkdownEvaluationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarkdownEvaluation
     */
    omit?: MarkdownEvaluationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownEvaluationInclude<ExtArgs> | null;
    /**
     * Filter, which MarkdownEvaluation to fetch.
     */
    where: MarkdownEvaluationWhereUniqueInput;
  };

  /**
   * MarkdownEvaluation findUniqueOrThrow
   */
  export type MarkdownEvaluationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MarkdownEvaluation
     */
    select?: MarkdownEvaluationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarkdownEvaluation
     */
    omit?: MarkdownEvaluationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownEvaluationInclude<ExtArgs> | null;
    /**
     * Filter, which MarkdownEvaluation to fetch.
     */
    where: MarkdownEvaluationWhereUniqueInput;
  };

  /**
   * MarkdownEvaluation findFirst
   */
  export type MarkdownEvaluationFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MarkdownEvaluation
     */
    select?: MarkdownEvaluationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarkdownEvaluation
     */
    omit?: MarkdownEvaluationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownEvaluationInclude<ExtArgs> | null;
    /**
     * Filter, which MarkdownEvaluation to fetch.
     */
    where?: MarkdownEvaluationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MarkdownEvaluations to fetch.
     */
    orderBy?:
      | MarkdownEvaluationOrderByWithRelationInput
      | MarkdownEvaluationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MarkdownEvaluations.
     */
    cursor?: MarkdownEvaluationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MarkdownEvaluations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MarkdownEvaluations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MarkdownEvaluations.
     */
    distinct?:
      | MarkdownEvaluationScalarFieldEnum
      | MarkdownEvaluationScalarFieldEnum[];
  };

  /**
   * MarkdownEvaluation findFirstOrThrow
   */
  export type MarkdownEvaluationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MarkdownEvaluation
     */
    select?: MarkdownEvaluationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarkdownEvaluation
     */
    omit?: MarkdownEvaluationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownEvaluationInclude<ExtArgs> | null;
    /**
     * Filter, which MarkdownEvaluation to fetch.
     */
    where?: MarkdownEvaluationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MarkdownEvaluations to fetch.
     */
    orderBy?:
      | MarkdownEvaluationOrderByWithRelationInput
      | MarkdownEvaluationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MarkdownEvaluations.
     */
    cursor?: MarkdownEvaluationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MarkdownEvaluations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MarkdownEvaluations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MarkdownEvaluations.
     */
    distinct?:
      | MarkdownEvaluationScalarFieldEnum
      | MarkdownEvaluationScalarFieldEnum[];
  };

  /**
   * MarkdownEvaluation findMany
   */
  export type MarkdownEvaluationFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MarkdownEvaluation
     */
    select?: MarkdownEvaluationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarkdownEvaluation
     */
    omit?: MarkdownEvaluationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownEvaluationInclude<ExtArgs> | null;
    /**
     * Filter, which MarkdownEvaluations to fetch.
     */
    where?: MarkdownEvaluationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MarkdownEvaluations to fetch.
     */
    orderBy?:
      | MarkdownEvaluationOrderByWithRelationInput
      | MarkdownEvaluationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MarkdownEvaluations.
     */
    cursor?: MarkdownEvaluationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MarkdownEvaluations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MarkdownEvaluations.
     */
    skip?: number;
    distinct?:
      | MarkdownEvaluationScalarFieldEnum
      | MarkdownEvaluationScalarFieldEnum[];
  };

  /**
   * MarkdownEvaluation create
   */
  export type MarkdownEvaluationCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MarkdownEvaluation
     */
    select?: MarkdownEvaluationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarkdownEvaluation
     */
    omit?: MarkdownEvaluationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownEvaluationInclude<ExtArgs> | null;
    /**
     * The data needed to create a MarkdownEvaluation.
     */
    data: XOR<
      MarkdownEvaluationCreateInput,
      MarkdownEvaluationUncheckedCreateInput
    >;
  };

  /**
   * MarkdownEvaluation createMany
   */
  export type MarkdownEvaluationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many MarkdownEvaluations.
     */
    data:
      | MarkdownEvaluationCreateManyInput
      | MarkdownEvaluationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * MarkdownEvaluation createManyAndReturn
   */
  export type MarkdownEvaluationCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MarkdownEvaluation
     */
    select?: MarkdownEvaluationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MarkdownEvaluation
     */
    omit?: MarkdownEvaluationOmit<ExtArgs> | null;
    /**
     * The data used to create many MarkdownEvaluations.
     */
    data:
      | MarkdownEvaluationCreateManyInput
      | MarkdownEvaluationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownEvaluationIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * MarkdownEvaluation update
   */
  export type MarkdownEvaluationUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MarkdownEvaluation
     */
    select?: MarkdownEvaluationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarkdownEvaluation
     */
    omit?: MarkdownEvaluationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownEvaluationInclude<ExtArgs> | null;
    /**
     * The data needed to update a MarkdownEvaluation.
     */
    data: XOR<
      MarkdownEvaluationUpdateInput,
      MarkdownEvaluationUncheckedUpdateInput
    >;
    /**
     * Choose, which MarkdownEvaluation to update.
     */
    where: MarkdownEvaluationWhereUniqueInput;
  };

  /**
   * MarkdownEvaluation updateMany
   */
  export type MarkdownEvaluationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update MarkdownEvaluations.
     */
    data: XOR<
      MarkdownEvaluationUpdateManyMutationInput,
      MarkdownEvaluationUncheckedUpdateManyInput
    >;
    /**
     * Filter which MarkdownEvaluations to update
     */
    where?: MarkdownEvaluationWhereInput;
    /**
     * Limit how many MarkdownEvaluations to update.
     */
    limit?: number;
  };

  /**
   * MarkdownEvaluation updateManyAndReturn
   */
  export type MarkdownEvaluationUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MarkdownEvaluation
     */
    select?: MarkdownEvaluationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MarkdownEvaluation
     */
    omit?: MarkdownEvaluationOmit<ExtArgs> | null;
    /**
     * The data used to update MarkdownEvaluations.
     */
    data: XOR<
      MarkdownEvaluationUpdateManyMutationInput,
      MarkdownEvaluationUncheckedUpdateManyInput
    >;
    /**
     * Filter which MarkdownEvaluations to update
     */
    where?: MarkdownEvaluationWhereInput;
    /**
     * Limit how many MarkdownEvaluations to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownEvaluationIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * MarkdownEvaluation upsert
   */
  export type MarkdownEvaluationUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MarkdownEvaluation
     */
    select?: MarkdownEvaluationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarkdownEvaluation
     */
    omit?: MarkdownEvaluationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownEvaluationInclude<ExtArgs> | null;
    /**
     * The filter to search for the MarkdownEvaluation to update in case it exists.
     */
    where: MarkdownEvaluationWhereUniqueInput;
    /**
     * In case the MarkdownEvaluation found by the `where` argument doesn't exist, create a new MarkdownEvaluation with this data.
     */
    create: XOR<
      MarkdownEvaluationCreateInput,
      MarkdownEvaluationUncheckedCreateInput
    >;
    /**
     * In case the MarkdownEvaluation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      MarkdownEvaluationUpdateInput,
      MarkdownEvaluationUncheckedUpdateInput
    >;
  };

  /**
   * MarkdownEvaluation delete
   */
  export type MarkdownEvaluationDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MarkdownEvaluation
     */
    select?: MarkdownEvaluationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarkdownEvaluation
     */
    omit?: MarkdownEvaluationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownEvaluationInclude<ExtArgs> | null;
    /**
     * Filter which MarkdownEvaluation to delete.
     */
    where: MarkdownEvaluationWhereUniqueInput;
  };

  /**
   * MarkdownEvaluation deleteMany
   */
  export type MarkdownEvaluationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which MarkdownEvaluations to delete
     */
    where?: MarkdownEvaluationWhereInput;
    /**
     * Limit how many MarkdownEvaluations to delete.
     */
    limit?: number;
  };

  /**
   * MarkdownEvaluation without action
   */
  export type MarkdownEvaluationDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MarkdownEvaluation
     */
    select?: MarkdownEvaluationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarkdownEvaluation
     */
    omit?: MarkdownEvaluationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownEvaluationInclude<ExtArgs> | null;
  };

  /**
   * Model MarkdownActionLog
   */

  export type AggregateMarkdownActionLog = {
    _count: MarkdownActionLogCountAggregateOutputType | null;
    _avg: MarkdownActionLogAvgAggregateOutputType | null;
    _sum: MarkdownActionLogSumAggregateOutputType | null;
    _min: MarkdownActionLogMinAggregateOutputType | null;
    _max: MarkdownActionLogMaxAggregateOutputType | null;
  };

  export type MarkdownActionLogAvgAggregateOutputType = {
    id: number | null;
    productId: number | null;
    beforePrice: Decimal | null;
    afterPrice: Decimal | null;
    stockAtAction: number | null;
    expectedProfit: Decimal | null;
    baselineProfit: Decimal | null;
    deltaExpectedProfit: Decimal | null;
  };

  export type MarkdownActionLogSumAggregateOutputType = {
    id: bigint | null;
    productId: bigint | null;
    beforePrice: Decimal | null;
    afterPrice: Decimal | null;
    stockAtAction: number | null;
    expectedProfit: Decimal | null;
    baselineProfit: Decimal | null;
    deltaExpectedProfit: Decimal | null;
  };

  export type MarkdownActionLogMinAggregateOutputType = {
    id: bigint | null;
    productId: bigint | null;
    executedAt: Date | null;
    beforePrice: Decimal | null;
    afterPrice: Decimal | null;
    stockAtAction: number | null;
    expectedProfit: Decimal | null;
    baselineProfit: Decimal | null;
    deltaExpectedProfit: Decimal | null;
    notes: string | null;
  };

  export type MarkdownActionLogMaxAggregateOutputType = {
    id: bigint | null;
    productId: bigint | null;
    executedAt: Date | null;
    beforePrice: Decimal | null;
    afterPrice: Decimal | null;
    stockAtAction: number | null;
    expectedProfit: Decimal | null;
    baselineProfit: Decimal | null;
    deltaExpectedProfit: Decimal | null;
    notes: string | null;
  };

  export type MarkdownActionLogCountAggregateOutputType = {
    id: number;
    productId: number;
    executedAt: number;
    beforePrice: number;
    afterPrice: number;
    stockAtAction: number;
    expectedProfit: number;
    baselineProfit: number;
    deltaExpectedProfit: number;
    notes: number;
    _all: number;
  };

  export type MarkdownActionLogAvgAggregateInputType = {
    id?: true;
    productId?: true;
    beforePrice?: true;
    afterPrice?: true;
    stockAtAction?: true;
    expectedProfit?: true;
    baselineProfit?: true;
    deltaExpectedProfit?: true;
  };

  export type MarkdownActionLogSumAggregateInputType = {
    id?: true;
    productId?: true;
    beforePrice?: true;
    afterPrice?: true;
    stockAtAction?: true;
    expectedProfit?: true;
    baselineProfit?: true;
    deltaExpectedProfit?: true;
  };

  export type MarkdownActionLogMinAggregateInputType = {
    id?: true;
    productId?: true;
    executedAt?: true;
    beforePrice?: true;
    afterPrice?: true;
    stockAtAction?: true;
    expectedProfit?: true;
    baselineProfit?: true;
    deltaExpectedProfit?: true;
    notes?: true;
  };

  export type MarkdownActionLogMaxAggregateInputType = {
    id?: true;
    productId?: true;
    executedAt?: true;
    beforePrice?: true;
    afterPrice?: true;
    stockAtAction?: true;
    expectedProfit?: true;
    baselineProfit?: true;
    deltaExpectedProfit?: true;
    notes?: true;
  };

  export type MarkdownActionLogCountAggregateInputType = {
    id?: true;
    productId?: true;
    executedAt?: true;
    beforePrice?: true;
    afterPrice?: true;
    stockAtAction?: true;
    expectedProfit?: true;
    baselineProfit?: true;
    deltaExpectedProfit?: true;
    notes?: true;
    _all?: true;
  };

  export type MarkdownActionLogAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which MarkdownActionLog to aggregate.
     */
    where?: MarkdownActionLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MarkdownActionLogs to fetch.
     */
    orderBy?:
      | MarkdownActionLogOrderByWithRelationInput
      | MarkdownActionLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: MarkdownActionLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MarkdownActionLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MarkdownActionLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MarkdownActionLogs
     **/
    _count?: true | MarkdownActionLogCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: MarkdownActionLogAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: MarkdownActionLogSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MarkdownActionLogMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MarkdownActionLogMaxAggregateInputType;
  };

  export type GetMarkdownActionLogAggregateType<
    T extends MarkdownActionLogAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateMarkdownActionLog]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarkdownActionLog[P]>
      : GetScalarType<T[P], AggregateMarkdownActionLog[P]>;
  };

  export type MarkdownActionLogGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MarkdownActionLogWhereInput;
    orderBy?:
      | MarkdownActionLogOrderByWithAggregationInput
      | MarkdownActionLogOrderByWithAggregationInput[];
    by: MarkdownActionLogScalarFieldEnum[] | MarkdownActionLogScalarFieldEnum;
    having?: MarkdownActionLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MarkdownActionLogCountAggregateInputType | true;
    _avg?: MarkdownActionLogAvgAggregateInputType;
    _sum?: MarkdownActionLogSumAggregateInputType;
    _min?: MarkdownActionLogMinAggregateInputType;
    _max?: MarkdownActionLogMaxAggregateInputType;
  };

  export type MarkdownActionLogGroupByOutputType = {
    id: bigint;
    productId: bigint;
    executedAt: Date;
    beforePrice: Decimal;
    afterPrice: Decimal;
    stockAtAction: number;
    expectedProfit: Decimal;
    baselineProfit: Decimal;
    deltaExpectedProfit: Decimal;
    notes: string | null;
    _count: MarkdownActionLogCountAggregateOutputType | null;
    _avg: MarkdownActionLogAvgAggregateOutputType | null;
    _sum: MarkdownActionLogSumAggregateOutputType | null;
    _min: MarkdownActionLogMinAggregateOutputType | null;
    _max: MarkdownActionLogMaxAggregateOutputType | null;
  };

  type GetMarkdownActionLogGroupByPayload<
    T extends MarkdownActionLogGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarkdownActionLogGroupByOutputType, T['by']> & {
        [P in keyof T &
          keyof MarkdownActionLogGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], MarkdownActionLogGroupByOutputType[P]>
          : GetScalarType<T[P], MarkdownActionLogGroupByOutputType[P]>;
      }
    >
  >;

  export type MarkdownActionLogSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      productId?: boolean;
      executedAt?: boolean;
      beforePrice?: boolean;
      afterPrice?: boolean;
      stockAtAction?: boolean;
      expectedProfit?: boolean;
      baselineProfit?: boolean;
      deltaExpectedProfit?: boolean;
      notes?: boolean;
      product?: boolean | ProductDefaultArgs<ExtArgs>;
      outcomes?: boolean | MarkdownActionLog$outcomesArgs<ExtArgs>;
      _count?: boolean | MarkdownActionLogCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['markdownActionLog']
  >;

  export type MarkdownActionLogSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      productId?: boolean;
      executedAt?: boolean;
      beforePrice?: boolean;
      afterPrice?: boolean;
      stockAtAction?: boolean;
      expectedProfit?: boolean;
      baselineProfit?: boolean;
      deltaExpectedProfit?: boolean;
      notes?: boolean;
      product?: boolean | ProductDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['markdownActionLog']
  >;

  export type MarkdownActionLogSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      productId?: boolean;
      executedAt?: boolean;
      beforePrice?: boolean;
      afterPrice?: boolean;
      stockAtAction?: boolean;
      expectedProfit?: boolean;
      baselineProfit?: boolean;
      deltaExpectedProfit?: boolean;
      notes?: boolean;
      product?: boolean | ProductDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['markdownActionLog']
  >;

  export type MarkdownActionLogSelectScalar = {
    id?: boolean;
    productId?: boolean;
    executedAt?: boolean;
    beforePrice?: boolean;
    afterPrice?: boolean;
    stockAtAction?: boolean;
    expectedProfit?: boolean;
    baselineProfit?: boolean;
    deltaExpectedProfit?: boolean;
    notes?: boolean;
  };

  export type MarkdownActionLogOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'productId'
    | 'executedAt'
    | 'beforePrice'
    | 'afterPrice'
    | 'stockAtAction'
    | 'expectedProfit'
    | 'baselineProfit'
    | 'deltaExpectedProfit'
    | 'notes',
    ExtArgs['result']['markdownActionLog']
  >;
  export type MarkdownActionLogInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    product?: boolean | ProductDefaultArgs<ExtArgs>;
    outcomes?: boolean | MarkdownActionLog$outcomesArgs<ExtArgs>;
    _count?: boolean | MarkdownActionLogCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type MarkdownActionLogIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    product?: boolean | ProductDefaultArgs<ExtArgs>;
  };
  export type MarkdownActionLogIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    product?: boolean | ProductDefaultArgs<ExtArgs>;
  };

  export type $MarkdownActionLogPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'MarkdownActionLog';
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>;
      outcomes: Prisma.$ActionOutcomePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: bigint;
        productId: bigint;
        executedAt: Date;
        beforePrice: Prisma.Decimal;
        afterPrice: Prisma.Decimal;
        stockAtAction: number;
        expectedProfit: Prisma.Decimal;
        baselineProfit: Prisma.Decimal;
        deltaExpectedProfit: Prisma.Decimal;
        notes: string | null;
      },
      ExtArgs['result']['markdownActionLog']
    >;
    composites: {};
  };

  type MarkdownActionLogGetPayload<
    S extends boolean | null | undefined | MarkdownActionLogDefaultArgs,
  > = $Result.GetResult<Prisma.$MarkdownActionLogPayload, S>;

  type MarkdownActionLogCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    MarkdownActionLogFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: MarkdownActionLogCountAggregateInputType | true;
  };

  export interface MarkdownActionLogDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['MarkdownActionLog'];
      meta: { name: 'MarkdownActionLog' };
    };
    /**
     * Find zero or one MarkdownActionLog that matches the filter.
     * @param {MarkdownActionLogFindUniqueArgs} args - Arguments to find a MarkdownActionLog
     * @example
     * // Get one MarkdownActionLog
     * const markdownActionLog = await prisma.markdownActionLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarkdownActionLogFindUniqueArgs>(
      args: SelectSubset<T, MarkdownActionLogFindUniqueArgs<ExtArgs>>,
    ): Prisma__MarkdownActionLogClient<
      $Result.GetResult<
        Prisma.$MarkdownActionLogPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one MarkdownActionLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarkdownActionLogFindUniqueOrThrowArgs} args - Arguments to find a MarkdownActionLog
     * @example
     * // Get one MarkdownActionLog
     * const markdownActionLog = await prisma.markdownActionLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarkdownActionLogFindUniqueOrThrowArgs>(
      args: SelectSubset<T, MarkdownActionLogFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__MarkdownActionLogClient<
      $Result.GetResult<
        Prisma.$MarkdownActionLogPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first MarkdownActionLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkdownActionLogFindFirstArgs} args - Arguments to find a MarkdownActionLog
     * @example
     * // Get one MarkdownActionLog
     * const markdownActionLog = await prisma.markdownActionLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarkdownActionLogFindFirstArgs>(
      args?: SelectSubset<T, MarkdownActionLogFindFirstArgs<ExtArgs>>,
    ): Prisma__MarkdownActionLogClient<
      $Result.GetResult<
        Prisma.$MarkdownActionLogPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first MarkdownActionLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkdownActionLogFindFirstOrThrowArgs} args - Arguments to find a MarkdownActionLog
     * @example
     * // Get one MarkdownActionLog
     * const markdownActionLog = await prisma.markdownActionLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarkdownActionLogFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MarkdownActionLogFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__MarkdownActionLogClient<
      $Result.GetResult<
        Prisma.$MarkdownActionLogPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more MarkdownActionLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkdownActionLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarkdownActionLogs
     * const markdownActionLogs = await prisma.markdownActionLog.findMany()
     *
     * // Get first 10 MarkdownActionLogs
     * const markdownActionLogs = await prisma.markdownActionLog.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const markdownActionLogWithIdOnly = await prisma.markdownActionLog.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MarkdownActionLogFindManyArgs>(
      args?: SelectSubset<T, MarkdownActionLogFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MarkdownActionLogPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a MarkdownActionLog.
     * @param {MarkdownActionLogCreateArgs} args - Arguments to create a MarkdownActionLog.
     * @example
     * // Create one MarkdownActionLog
     * const MarkdownActionLog = await prisma.markdownActionLog.create({
     *   data: {
     *     // ... data to create a MarkdownActionLog
     *   }
     * })
     *
     */
    create<T extends MarkdownActionLogCreateArgs>(
      args: SelectSubset<T, MarkdownActionLogCreateArgs<ExtArgs>>,
    ): Prisma__MarkdownActionLogClient<
      $Result.GetResult<
        Prisma.$MarkdownActionLogPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many MarkdownActionLogs.
     * @param {MarkdownActionLogCreateManyArgs} args - Arguments to create many MarkdownActionLogs.
     * @example
     * // Create many MarkdownActionLogs
     * const markdownActionLog = await prisma.markdownActionLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MarkdownActionLogCreateManyArgs>(
      args?: SelectSubset<T, MarkdownActionLogCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many MarkdownActionLogs and returns the data saved in the database.
     * @param {MarkdownActionLogCreateManyAndReturnArgs} args - Arguments to create many MarkdownActionLogs.
     * @example
     * // Create many MarkdownActionLogs
     * const markdownActionLog = await prisma.markdownActionLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many MarkdownActionLogs and only return the `id`
     * const markdownActionLogWithIdOnly = await prisma.markdownActionLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MarkdownActionLogCreateManyAndReturnArgs>(
      args?: SelectSubset<T, MarkdownActionLogCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MarkdownActionLogPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a MarkdownActionLog.
     * @param {MarkdownActionLogDeleteArgs} args - Arguments to delete one MarkdownActionLog.
     * @example
     * // Delete one MarkdownActionLog
     * const MarkdownActionLog = await prisma.markdownActionLog.delete({
     *   where: {
     *     // ... filter to delete one MarkdownActionLog
     *   }
     * })
     *
     */
    delete<T extends MarkdownActionLogDeleteArgs>(
      args: SelectSubset<T, MarkdownActionLogDeleteArgs<ExtArgs>>,
    ): Prisma__MarkdownActionLogClient<
      $Result.GetResult<
        Prisma.$MarkdownActionLogPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one MarkdownActionLog.
     * @param {MarkdownActionLogUpdateArgs} args - Arguments to update one MarkdownActionLog.
     * @example
     * // Update one MarkdownActionLog
     * const markdownActionLog = await prisma.markdownActionLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MarkdownActionLogUpdateArgs>(
      args: SelectSubset<T, MarkdownActionLogUpdateArgs<ExtArgs>>,
    ): Prisma__MarkdownActionLogClient<
      $Result.GetResult<
        Prisma.$MarkdownActionLogPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more MarkdownActionLogs.
     * @param {MarkdownActionLogDeleteManyArgs} args - Arguments to filter MarkdownActionLogs to delete.
     * @example
     * // Delete a few MarkdownActionLogs
     * const { count } = await prisma.markdownActionLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MarkdownActionLogDeleteManyArgs>(
      args?: SelectSubset<T, MarkdownActionLogDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more MarkdownActionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkdownActionLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarkdownActionLogs
     * const markdownActionLog = await prisma.markdownActionLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MarkdownActionLogUpdateManyArgs>(
      args: SelectSubset<T, MarkdownActionLogUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more MarkdownActionLogs and returns the data updated in the database.
     * @param {MarkdownActionLogUpdateManyAndReturnArgs} args - Arguments to update many MarkdownActionLogs.
     * @example
     * // Update many MarkdownActionLogs
     * const markdownActionLog = await prisma.markdownActionLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more MarkdownActionLogs and only return the `id`
     * const markdownActionLogWithIdOnly = await prisma.markdownActionLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends MarkdownActionLogUpdateManyAndReturnArgs>(
      args: SelectSubset<T, MarkdownActionLogUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MarkdownActionLogPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one MarkdownActionLog.
     * @param {MarkdownActionLogUpsertArgs} args - Arguments to update or create a MarkdownActionLog.
     * @example
     * // Update or create a MarkdownActionLog
     * const markdownActionLog = await prisma.markdownActionLog.upsert({
     *   create: {
     *     // ... data to create a MarkdownActionLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarkdownActionLog we want to update
     *   }
     * })
     */
    upsert<T extends MarkdownActionLogUpsertArgs>(
      args: SelectSubset<T, MarkdownActionLogUpsertArgs<ExtArgs>>,
    ): Prisma__MarkdownActionLogClient<
      $Result.GetResult<
        Prisma.$MarkdownActionLogPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of MarkdownActionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkdownActionLogCountArgs} args - Arguments to filter MarkdownActionLogs to count.
     * @example
     * // Count the number of MarkdownActionLogs
     * const count = await prisma.markdownActionLog.count({
     *   where: {
     *     // ... the filter for the MarkdownActionLogs we want to count
     *   }
     * })
     **/
    count<T extends MarkdownActionLogCountArgs>(
      args?: Subset<T, MarkdownActionLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<
              T['select'],
              MarkdownActionLogCountAggregateOutputType
            >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a MarkdownActionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkdownActionLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends MarkdownActionLogAggregateArgs>(
      args: Subset<T, MarkdownActionLogAggregateArgs>,
    ): Prisma.PrismaPromise<GetMarkdownActionLogAggregateType<T>>;

    /**
     * Group by MarkdownActionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkdownActionLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends MarkdownActionLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarkdownActionLogGroupByArgs['orderBy'] }
        : { orderBy?: MarkdownActionLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, MarkdownActionLogGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetMarkdownActionLogGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MarkdownActionLog model
     */
    readonly fields: MarkdownActionLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarkdownActionLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarkdownActionLogClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProductDefaultArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      | $Result.GetResult<
          Prisma.$ProductPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    outcomes<T extends MarkdownActionLog$outcomesArgs<ExtArgs> = {}>(
      args?: Subset<T, MarkdownActionLog$outcomesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ActionOutcomePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the MarkdownActionLog model
   */
  interface MarkdownActionLogFieldRefs {
    readonly id: FieldRef<'MarkdownActionLog', 'BigInt'>;
    readonly productId: FieldRef<'MarkdownActionLog', 'BigInt'>;
    readonly executedAt: FieldRef<'MarkdownActionLog', 'DateTime'>;
    readonly beforePrice: FieldRef<'MarkdownActionLog', 'Decimal'>;
    readonly afterPrice: FieldRef<'MarkdownActionLog', 'Decimal'>;
    readonly stockAtAction: FieldRef<'MarkdownActionLog', 'Int'>;
    readonly expectedProfit: FieldRef<'MarkdownActionLog', 'Decimal'>;
    readonly baselineProfit: FieldRef<'MarkdownActionLog', 'Decimal'>;
    readonly deltaExpectedProfit: FieldRef<'MarkdownActionLog', 'Decimal'>;
    readonly notes: FieldRef<'MarkdownActionLog', 'String'>;
  }

  // Custom InputTypes
  /**
   * MarkdownActionLog findUnique
   */
  export type MarkdownActionLogFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MarkdownActionLog
     */
    select?: MarkdownActionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarkdownActionLog
     */
    omit?: MarkdownActionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownActionLogInclude<ExtArgs> | null;
    /**
     * Filter, which MarkdownActionLog to fetch.
     */
    where: MarkdownActionLogWhereUniqueInput;
  };

  /**
   * MarkdownActionLog findUniqueOrThrow
   */
  export type MarkdownActionLogFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MarkdownActionLog
     */
    select?: MarkdownActionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarkdownActionLog
     */
    omit?: MarkdownActionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownActionLogInclude<ExtArgs> | null;
    /**
     * Filter, which MarkdownActionLog to fetch.
     */
    where: MarkdownActionLogWhereUniqueInput;
  };

  /**
   * MarkdownActionLog findFirst
   */
  export type MarkdownActionLogFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MarkdownActionLog
     */
    select?: MarkdownActionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarkdownActionLog
     */
    omit?: MarkdownActionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownActionLogInclude<ExtArgs> | null;
    /**
     * Filter, which MarkdownActionLog to fetch.
     */
    where?: MarkdownActionLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MarkdownActionLogs to fetch.
     */
    orderBy?:
      | MarkdownActionLogOrderByWithRelationInput
      | MarkdownActionLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MarkdownActionLogs.
     */
    cursor?: MarkdownActionLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MarkdownActionLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MarkdownActionLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MarkdownActionLogs.
     */
    distinct?:
      | MarkdownActionLogScalarFieldEnum
      | MarkdownActionLogScalarFieldEnum[];
  };

  /**
   * MarkdownActionLog findFirstOrThrow
   */
  export type MarkdownActionLogFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MarkdownActionLog
     */
    select?: MarkdownActionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarkdownActionLog
     */
    omit?: MarkdownActionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownActionLogInclude<ExtArgs> | null;
    /**
     * Filter, which MarkdownActionLog to fetch.
     */
    where?: MarkdownActionLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MarkdownActionLogs to fetch.
     */
    orderBy?:
      | MarkdownActionLogOrderByWithRelationInput
      | MarkdownActionLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MarkdownActionLogs.
     */
    cursor?: MarkdownActionLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MarkdownActionLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MarkdownActionLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MarkdownActionLogs.
     */
    distinct?:
      | MarkdownActionLogScalarFieldEnum
      | MarkdownActionLogScalarFieldEnum[];
  };

  /**
   * MarkdownActionLog findMany
   */
  export type MarkdownActionLogFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MarkdownActionLog
     */
    select?: MarkdownActionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarkdownActionLog
     */
    omit?: MarkdownActionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownActionLogInclude<ExtArgs> | null;
    /**
     * Filter, which MarkdownActionLogs to fetch.
     */
    where?: MarkdownActionLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MarkdownActionLogs to fetch.
     */
    orderBy?:
      | MarkdownActionLogOrderByWithRelationInput
      | MarkdownActionLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MarkdownActionLogs.
     */
    cursor?: MarkdownActionLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MarkdownActionLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MarkdownActionLogs.
     */
    skip?: number;
    distinct?:
      | MarkdownActionLogScalarFieldEnum
      | MarkdownActionLogScalarFieldEnum[];
  };

  /**
   * MarkdownActionLog create
   */
  export type MarkdownActionLogCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MarkdownActionLog
     */
    select?: MarkdownActionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarkdownActionLog
     */
    omit?: MarkdownActionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownActionLogInclude<ExtArgs> | null;
    /**
     * The data needed to create a MarkdownActionLog.
     */
    data: XOR<
      MarkdownActionLogCreateInput,
      MarkdownActionLogUncheckedCreateInput
    >;
  };

  /**
   * MarkdownActionLog createMany
   */
  export type MarkdownActionLogCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many MarkdownActionLogs.
     */
    data: MarkdownActionLogCreateManyInput | MarkdownActionLogCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * MarkdownActionLog createManyAndReturn
   */
  export type MarkdownActionLogCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MarkdownActionLog
     */
    select?: MarkdownActionLogSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MarkdownActionLog
     */
    omit?: MarkdownActionLogOmit<ExtArgs> | null;
    /**
     * The data used to create many MarkdownActionLogs.
     */
    data: MarkdownActionLogCreateManyInput | MarkdownActionLogCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownActionLogIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * MarkdownActionLog update
   */
  export type MarkdownActionLogUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MarkdownActionLog
     */
    select?: MarkdownActionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarkdownActionLog
     */
    omit?: MarkdownActionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownActionLogInclude<ExtArgs> | null;
    /**
     * The data needed to update a MarkdownActionLog.
     */
    data: XOR<
      MarkdownActionLogUpdateInput,
      MarkdownActionLogUncheckedUpdateInput
    >;
    /**
     * Choose, which MarkdownActionLog to update.
     */
    where: MarkdownActionLogWhereUniqueInput;
  };

  /**
   * MarkdownActionLog updateMany
   */
  export type MarkdownActionLogUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update MarkdownActionLogs.
     */
    data: XOR<
      MarkdownActionLogUpdateManyMutationInput,
      MarkdownActionLogUncheckedUpdateManyInput
    >;
    /**
     * Filter which MarkdownActionLogs to update
     */
    where?: MarkdownActionLogWhereInput;
    /**
     * Limit how many MarkdownActionLogs to update.
     */
    limit?: number;
  };

  /**
   * MarkdownActionLog updateManyAndReturn
   */
  export type MarkdownActionLogUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MarkdownActionLog
     */
    select?: MarkdownActionLogSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MarkdownActionLog
     */
    omit?: MarkdownActionLogOmit<ExtArgs> | null;
    /**
     * The data used to update MarkdownActionLogs.
     */
    data: XOR<
      MarkdownActionLogUpdateManyMutationInput,
      MarkdownActionLogUncheckedUpdateManyInput
    >;
    /**
     * Filter which MarkdownActionLogs to update
     */
    where?: MarkdownActionLogWhereInput;
    /**
     * Limit how many MarkdownActionLogs to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownActionLogIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * MarkdownActionLog upsert
   */
  export type MarkdownActionLogUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MarkdownActionLog
     */
    select?: MarkdownActionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarkdownActionLog
     */
    omit?: MarkdownActionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownActionLogInclude<ExtArgs> | null;
    /**
     * The filter to search for the MarkdownActionLog to update in case it exists.
     */
    where: MarkdownActionLogWhereUniqueInput;
    /**
     * In case the MarkdownActionLog found by the `where` argument doesn't exist, create a new MarkdownActionLog with this data.
     */
    create: XOR<
      MarkdownActionLogCreateInput,
      MarkdownActionLogUncheckedCreateInput
    >;
    /**
     * In case the MarkdownActionLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      MarkdownActionLogUpdateInput,
      MarkdownActionLogUncheckedUpdateInput
    >;
  };

  /**
   * MarkdownActionLog delete
   */
  export type MarkdownActionLogDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MarkdownActionLog
     */
    select?: MarkdownActionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarkdownActionLog
     */
    omit?: MarkdownActionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownActionLogInclude<ExtArgs> | null;
    /**
     * Filter which MarkdownActionLog to delete.
     */
    where: MarkdownActionLogWhereUniqueInput;
  };

  /**
   * MarkdownActionLog deleteMany
   */
  export type MarkdownActionLogDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which MarkdownActionLogs to delete
     */
    where?: MarkdownActionLogWhereInput;
    /**
     * Limit how many MarkdownActionLogs to delete.
     */
    limit?: number;
  };

  /**
   * MarkdownActionLog.outcomes
   */
  export type MarkdownActionLog$outcomesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ActionOutcome
     */
    select?: ActionOutcomeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ActionOutcome
     */
    omit?: ActionOutcomeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionOutcomeInclude<ExtArgs> | null;
    where?: ActionOutcomeWhereInput;
    orderBy?:
      | ActionOutcomeOrderByWithRelationInput
      | ActionOutcomeOrderByWithRelationInput[];
    cursor?: ActionOutcomeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ActionOutcomeScalarFieldEnum | ActionOutcomeScalarFieldEnum[];
  };

  /**
   * MarkdownActionLog without action
   */
  export type MarkdownActionLogDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MarkdownActionLog
     */
    select?: MarkdownActionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MarkdownActionLog
     */
    omit?: MarkdownActionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownActionLogInclude<ExtArgs> | null;
  };

  /**
   * Model ActionOutcome
   */

  export type AggregateActionOutcome = {
    _count: ActionOutcomeCountAggregateOutputType | null;
    _avg: ActionOutcomeAvgAggregateOutputType | null;
    _sum: ActionOutcomeSumAggregateOutputType | null;
    _min: ActionOutcomeMinAggregateOutputType | null;
    _max: ActionOutcomeMaxAggregateOutputType | null;
  };

  export type ActionOutcomeAvgAggregateOutputType = {
    actionId: number | null;
    actualUnitsSold: number | null;
    actualProfit: Decimal | null;
  };

  export type ActionOutcomeSumAggregateOutputType = {
    actionId: bigint | null;
    actualUnitsSold: number | null;
    actualProfit: Decimal | null;
  };

  export type ActionOutcomeMinAggregateOutputType = {
    actionId: bigint | null;
    windowStart: Date | null;
    windowEnd: Date | null;
    actualUnitsSold: number | null;
    actualProfit: Decimal | null;
  };

  export type ActionOutcomeMaxAggregateOutputType = {
    actionId: bigint | null;
    windowStart: Date | null;
    windowEnd: Date | null;
    actualUnitsSold: number | null;
    actualProfit: Decimal | null;
  };

  export type ActionOutcomeCountAggregateOutputType = {
    actionId: number;
    windowStart: number;
    windowEnd: number;
    actualUnitsSold: number;
    actualProfit: number;
    _all: number;
  };

  export type ActionOutcomeAvgAggregateInputType = {
    actionId?: true;
    actualUnitsSold?: true;
    actualProfit?: true;
  };

  export type ActionOutcomeSumAggregateInputType = {
    actionId?: true;
    actualUnitsSold?: true;
    actualProfit?: true;
  };

  export type ActionOutcomeMinAggregateInputType = {
    actionId?: true;
    windowStart?: true;
    windowEnd?: true;
    actualUnitsSold?: true;
    actualProfit?: true;
  };

  export type ActionOutcomeMaxAggregateInputType = {
    actionId?: true;
    windowStart?: true;
    windowEnd?: true;
    actualUnitsSold?: true;
    actualProfit?: true;
  };

  export type ActionOutcomeCountAggregateInputType = {
    actionId?: true;
    windowStart?: true;
    windowEnd?: true;
    actualUnitsSold?: true;
    actualProfit?: true;
    _all?: true;
  };

  export type ActionOutcomeAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ActionOutcome to aggregate.
     */
    where?: ActionOutcomeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ActionOutcomes to fetch.
     */
    orderBy?:
      | ActionOutcomeOrderByWithRelationInput
      | ActionOutcomeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ActionOutcomeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ActionOutcomes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ActionOutcomes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ActionOutcomes
     **/
    _count?: true | ActionOutcomeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ActionOutcomeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ActionOutcomeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ActionOutcomeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ActionOutcomeMaxAggregateInputType;
  };

  export type GetActionOutcomeAggregateType<
    T extends ActionOutcomeAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateActionOutcome]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActionOutcome[P]>
      : GetScalarType<T[P], AggregateActionOutcome[P]>;
  };

  export type ActionOutcomeGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ActionOutcomeWhereInput;
    orderBy?:
      | ActionOutcomeOrderByWithAggregationInput
      | ActionOutcomeOrderByWithAggregationInput[];
    by: ActionOutcomeScalarFieldEnum[] | ActionOutcomeScalarFieldEnum;
    having?: ActionOutcomeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ActionOutcomeCountAggregateInputType | true;
    _avg?: ActionOutcomeAvgAggregateInputType;
    _sum?: ActionOutcomeSumAggregateInputType;
    _min?: ActionOutcomeMinAggregateInputType;
    _max?: ActionOutcomeMaxAggregateInputType;
  };

  export type ActionOutcomeGroupByOutputType = {
    actionId: bigint;
    windowStart: Date;
    windowEnd: Date;
    actualUnitsSold: number;
    actualProfit: Decimal;
    _count: ActionOutcomeCountAggregateOutputType | null;
    _avg: ActionOutcomeAvgAggregateOutputType | null;
    _sum: ActionOutcomeSumAggregateOutputType | null;
    _min: ActionOutcomeMinAggregateOutputType | null;
    _max: ActionOutcomeMaxAggregateOutputType | null;
  };

  type GetActionOutcomeGroupByPayload<T extends ActionOutcomeGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ActionOutcomeGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof ActionOutcomeGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionOutcomeGroupByOutputType[P]>
            : GetScalarType<T[P], ActionOutcomeGroupByOutputType[P]>;
        }
      >
    >;

  export type ActionOutcomeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      actionId?: boolean;
      windowStart?: boolean;
      windowEnd?: boolean;
      actualUnitsSold?: boolean;
      actualProfit?: boolean;
      action?: boolean | MarkdownActionLogDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['actionOutcome']
  >;

  export type ActionOutcomeSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      actionId?: boolean;
      windowStart?: boolean;
      windowEnd?: boolean;
      actualUnitsSold?: boolean;
      actualProfit?: boolean;
      action?: boolean | MarkdownActionLogDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['actionOutcome']
  >;

  export type ActionOutcomeSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      actionId?: boolean;
      windowStart?: boolean;
      windowEnd?: boolean;
      actualUnitsSold?: boolean;
      actualProfit?: boolean;
      action?: boolean | MarkdownActionLogDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['actionOutcome']
  >;

  export type ActionOutcomeSelectScalar = {
    actionId?: boolean;
    windowStart?: boolean;
    windowEnd?: boolean;
    actualUnitsSold?: boolean;
    actualProfit?: boolean;
  };

  export type ActionOutcomeOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'actionId'
    | 'windowStart'
    | 'windowEnd'
    | 'actualUnitsSold'
    | 'actualProfit',
    ExtArgs['result']['actionOutcome']
  >;
  export type ActionOutcomeInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    action?: boolean | MarkdownActionLogDefaultArgs<ExtArgs>;
  };
  export type ActionOutcomeIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    action?: boolean | MarkdownActionLogDefaultArgs<ExtArgs>;
  };
  export type ActionOutcomeIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    action?: boolean | MarkdownActionLogDefaultArgs<ExtArgs>;
  };

  export type $ActionOutcomePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'ActionOutcome';
    objects: {
      action: Prisma.$MarkdownActionLogPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        actionId: bigint;
        windowStart: Date;
        windowEnd: Date;
        actualUnitsSold: number;
        actualProfit: Prisma.Decimal;
      },
      ExtArgs['result']['actionOutcome']
    >;
    composites: {};
  };

  type ActionOutcomeGetPayload<
    S extends boolean | null | undefined | ActionOutcomeDefaultArgs,
  > = $Result.GetResult<Prisma.$ActionOutcomePayload, S>;

  type ActionOutcomeCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    ActionOutcomeFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: ActionOutcomeCountAggregateInputType | true;
  };

  export interface ActionOutcomeDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['ActionOutcome'];
      meta: { name: 'ActionOutcome' };
    };
    /**
     * Find zero or one ActionOutcome that matches the filter.
     * @param {ActionOutcomeFindUniqueArgs} args - Arguments to find a ActionOutcome
     * @example
     * // Get one ActionOutcome
     * const actionOutcome = await prisma.actionOutcome.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActionOutcomeFindUniqueArgs>(
      args: SelectSubset<T, ActionOutcomeFindUniqueArgs<ExtArgs>>,
    ): Prisma__ActionOutcomeClient<
      $Result.GetResult<
        Prisma.$ActionOutcomePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one ActionOutcome that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActionOutcomeFindUniqueOrThrowArgs} args - Arguments to find a ActionOutcome
     * @example
     * // Get one ActionOutcome
     * const actionOutcome = await prisma.actionOutcome.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActionOutcomeFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ActionOutcomeFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ActionOutcomeClient<
      $Result.GetResult<
        Prisma.$ActionOutcomePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ActionOutcome that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionOutcomeFindFirstArgs} args - Arguments to find a ActionOutcome
     * @example
     * // Get one ActionOutcome
     * const actionOutcome = await prisma.actionOutcome.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActionOutcomeFindFirstArgs>(
      args?: SelectSubset<T, ActionOutcomeFindFirstArgs<ExtArgs>>,
    ): Prisma__ActionOutcomeClient<
      $Result.GetResult<
        Prisma.$ActionOutcomePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ActionOutcome that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionOutcomeFindFirstOrThrowArgs} args - Arguments to find a ActionOutcome
     * @example
     * // Get one ActionOutcome
     * const actionOutcome = await prisma.actionOutcome.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActionOutcomeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ActionOutcomeFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ActionOutcomeClient<
      $Result.GetResult<
        Prisma.$ActionOutcomePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more ActionOutcomes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionOutcomeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActionOutcomes
     * const actionOutcomes = await prisma.actionOutcome.findMany()
     *
     * // Get first 10 ActionOutcomes
     * const actionOutcomes = await prisma.actionOutcome.findMany({ take: 10 })
     *
     * // Only select the `actionId`
     * const actionOutcomeWithActionIdOnly = await prisma.actionOutcome.findMany({ select: { actionId: true } })
     *
     */
    findMany<T extends ActionOutcomeFindManyArgs>(
      args?: SelectSubset<T, ActionOutcomeFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ActionOutcomePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a ActionOutcome.
     * @param {ActionOutcomeCreateArgs} args - Arguments to create a ActionOutcome.
     * @example
     * // Create one ActionOutcome
     * const ActionOutcome = await prisma.actionOutcome.create({
     *   data: {
     *     // ... data to create a ActionOutcome
     *   }
     * })
     *
     */
    create<T extends ActionOutcomeCreateArgs>(
      args: SelectSubset<T, ActionOutcomeCreateArgs<ExtArgs>>,
    ): Prisma__ActionOutcomeClient<
      $Result.GetResult<
        Prisma.$ActionOutcomePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many ActionOutcomes.
     * @param {ActionOutcomeCreateManyArgs} args - Arguments to create many ActionOutcomes.
     * @example
     * // Create many ActionOutcomes
     * const actionOutcome = await prisma.actionOutcome.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ActionOutcomeCreateManyArgs>(
      args?: SelectSubset<T, ActionOutcomeCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many ActionOutcomes and returns the data saved in the database.
     * @param {ActionOutcomeCreateManyAndReturnArgs} args - Arguments to create many ActionOutcomes.
     * @example
     * // Create many ActionOutcomes
     * const actionOutcome = await prisma.actionOutcome.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ActionOutcomes and only return the `actionId`
     * const actionOutcomeWithActionIdOnly = await prisma.actionOutcome.createManyAndReturn({
     *   select: { actionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ActionOutcomeCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ActionOutcomeCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ActionOutcomePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a ActionOutcome.
     * @param {ActionOutcomeDeleteArgs} args - Arguments to delete one ActionOutcome.
     * @example
     * // Delete one ActionOutcome
     * const ActionOutcome = await prisma.actionOutcome.delete({
     *   where: {
     *     // ... filter to delete one ActionOutcome
     *   }
     * })
     *
     */
    delete<T extends ActionOutcomeDeleteArgs>(
      args: SelectSubset<T, ActionOutcomeDeleteArgs<ExtArgs>>,
    ): Prisma__ActionOutcomeClient<
      $Result.GetResult<
        Prisma.$ActionOutcomePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one ActionOutcome.
     * @param {ActionOutcomeUpdateArgs} args - Arguments to update one ActionOutcome.
     * @example
     * // Update one ActionOutcome
     * const actionOutcome = await prisma.actionOutcome.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ActionOutcomeUpdateArgs>(
      args: SelectSubset<T, ActionOutcomeUpdateArgs<ExtArgs>>,
    ): Prisma__ActionOutcomeClient<
      $Result.GetResult<
        Prisma.$ActionOutcomePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more ActionOutcomes.
     * @param {ActionOutcomeDeleteManyArgs} args - Arguments to filter ActionOutcomes to delete.
     * @example
     * // Delete a few ActionOutcomes
     * const { count } = await prisma.actionOutcome.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ActionOutcomeDeleteManyArgs>(
      args?: SelectSubset<T, ActionOutcomeDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ActionOutcomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionOutcomeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActionOutcomes
     * const actionOutcome = await prisma.actionOutcome.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ActionOutcomeUpdateManyArgs>(
      args: SelectSubset<T, ActionOutcomeUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ActionOutcomes and returns the data updated in the database.
     * @param {ActionOutcomeUpdateManyAndReturnArgs} args - Arguments to update many ActionOutcomes.
     * @example
     * // Update many ActionOutcomes
     * const actionOutcome = await prisma.actionOutcome.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ActionOutcomes and only return the `actionId`
     * const actionOutcomeWithActionIdOnly = await prisma.actionOutcome.updateManyAndReturn({
     *   select: { actionId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ActionOutcomeUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ActionOutcomeUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ActionOutcomePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one ActionOutcome.
     * @param {ActionOutcomeUpsertArgs} args - Arguments to update or create a ActionOutcome.
     * @example
     * // Update or create a ActionOutcome
     * const actionOutcome = await prisma.actionOutcome.upsert({
     *   create: {
     *     // ... data to create a ActionOutcome
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActionOutcome we want to update
     *   }
     * })
     */
    upsert<T extends ActionOutcomeUpsertArgs>(
      args: SelectSubset<T, ActionOutcomeUpsertArgs<ExtArgs>>,
    ): Prisma__ActionOutcomeClient<
      $Result.GetResult<
        Prisma.$ActionOutcomePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of ActionOutcomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionOutcomeCountArgs} args - Arguments to filter ActionOutcomes to count.
     * @example
     * // Count the number of ActionOutcomes
     * const count = await prisma.actionOutcome.count({
     *   where: {
     *     // ... the filter for the ActionOutcomes we want to count
     *   }
     * })
     **/
    count<T extends ActionOutcomeCountArgs>(
      args?: Subset<T, ActionOutcomeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActionOutcomeCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ActionOutcome.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionOutcomeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ActionOutcomeAggregateArgs>(
      args: Subset<T, ActionOutcomeAggregateArgs>,
    ): Prisma.PrismaPromise<GetActionOutcomeAggregateType<T>>;

    /**
     * Group by ActionOutcome.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionOutcomeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ActionOutcomeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActionOutcomeGroupByArgs['orderBy'] }
        : { orderBy?: ActionOutcomeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ActionOutcomeGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetActionOutcomeGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ActionOutcome model
     */
    readonly fields: ActionOutcomeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActionOutcome.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActionOutcomeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    action<T extends MarkdownActionLogDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, MarkdownActionLogDefaultArgs<ExtArgs>>,
    ): Prisma__MarkdownActionLogClient<
      | $Result.GetResult<
          Prisma.$MarkdownActionLogPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ActionOutcome model
   */
  interface ActionOutcomeFieldRefs {
    readonly actionId: FieldRef<'ActionOutcome', 'BigInt'>;
    readonly windowStart: FieldRef<'ActionOutcome', 'DateTime'>;
    readonly windowEnd: FieldRef<'ActionOutcome', 'DateTime'>;
    readonly actualUnitsSold: FieldRef<'ActionOutcome', 'Int'>;
    readonly actualProfit: FieldRef<'ActionOutcome', 'Decimal'>;
  }

  // Custom InputTypes
  /**
   * ActionOutcome findUnique
   */
  export type ActionOutcomeFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ActionOutcome
     */
    select?: ActionOutcomeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ActionOutcome
     */
    omit?: ActionOutcomeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionOutcomeInclude<ExtArgs> | null;
    /**
     * Filter, which ActionOutcome to fetch.
     */
    where: ActionOutcomeWhereUniqueInput;
  };

  /**
   * ActionOutcome findUniqueOrThrow
   */
  export type ActionOutcomeFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ActionOutcome
     */
    select?: ActionOutcomeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ActionOutcome
     */
    omit?: ActionOutcomeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionOutcomeInclude<ExtArgs> | null;
    /**
     * Filter, which ActionOutcome to fetch.
     */
    where: ActionOutcomeWhereUniqueInput;
  };

  /**
   * ActionOutcome findFirst
   */
  export type ActionOutcomeFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ActionOutcome
     */
    select?: ActionOutcomeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ActionOutcome
     */
    omit?: ActionOutcomeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionOutcomeInclude<ExtArgs> | null;
    /**
     * Filter, which ActionOutcome to fetch.
     */
    where?: ActionOutcomeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ActionOutcomes to fetch.
     */
    orderBy?:
      | ActionOutcomeOrderByWithRelationInput
      | ActionOutcomeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ActionOutcomes.
     */
    cursor?: ActionOutcomeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ActionOutcomes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ActionOutcomes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ActionOutcomes.
     */
    distinct?: ActionOutcomeScalarFieldEnum | ActionOutcomeScalarFieldEnum[];
  };

  /**
   * ActionOutcome findFirstOrThrow
   */
  export type ActionOutcomeFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ActionOutcome
     */
    select?: ActionOutcomeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ActionOutcome
     */
    omit?: ActionOutcomeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionOutcomeInclude<ExtArgs> | null;
    /**
     * Filter, which ActionOutcome to fetch.
     */
    where?: ActionOutcomeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ActionOutcomes to fetch.
     */
    orderBy?:
      | ActionOutcomeOrderByWithRelationInput
      | ActionOutcomeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ActionOutcomes.
     */
    cursor?: ActionOutcomeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ActionOutcomes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ActionOutcomes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ActionOutcomes.
     */
    distinct?: ActionOutcomeScalarFieldEnum | ActionOutcomeScalarFieldEnum[];
  };

  /**
   * ActionOutcome findMany
   */
  export type ActionOutcomeFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ActionOutcome
     */
    select?: ActionOutcomeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ActionOutcome
     */
    omit?: ActionOutcomeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionOutcomeInclude<ExtArgs> | null;
    /**
     * Filter, which ActionOutcomes to fetch.
     */
    where?: ActionOutcomeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ActionOutcomes to fetch.
     */
    orderBy?:
      | ActionOutcomeOrderByWithRelationInput
      | ActionOutcomeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ActionOutcomes.
     */
    cursor?: ActionOutcomeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ActionOutcomes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ActionOutcomes.
     */
    skip?: number;
    distinct?: ActionOutcomeScalarFieldEnum | ActionOutcomeScalarFieldEnum[];
  };

  /**
   * ActionOutcome create
   */
  export type ActionOutcomeCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ActionOutcome
     */
    select?: ActionOutcomeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ActionOutcome
     */
    omit?: ActionOutcomeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionOutcomeInclude<ExtArgs> | null;
    /**
     * The data needed to create a ActionOutcome.
     */
    data: XOR<ActionOutcomeCreateInput, ActionOutcomeUncheckedCreateInput>;
  };

  /**
   * ActionOutcome createMany
   */
  export type ActionOutcomeCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ActionOutcomes.
     */
    data: ActionOutcomeCreateManyInput | ActionOutcomeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ActionOutcome createManyAndReturn
   */
  export type ActionOutcomeCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ActionOutcome
     */
    select?: ActionOutcomeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ActionOutcome
     */
    omit?: ActionOutcomeOmit<ExtArgs> | null;
    /**
     * The data used to create many ActionOutcomes.
     */
    data: ActionOutcomeCreateManyInput | ActionOutcomeCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionOutcomeIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ActionOutcome update
   */
  export type ActionOutcomeUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ActionOutcome
     */
    select?: ActionOutcomeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ActionOutcome
     */
    omit?: ActionOutcomeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionOutcomeInclude<ExtArgs> | null;
    /**
     * The data needed to update a ActionOutcome.
     */
    data: XOR<ActionOutcomeUpdateInput, ActionOutcomeUncheckedUpdateInput>;
    /**
     * Choose, which ActionOutcome to update.
     */
    where: ActionOutcomeWhereUniqueInput;
  };

  /**
   * ActionOutcome updateMany
   */
  export type ActionOutcomeUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ActionOutcomes.
     */
    data: XOR<
      ActionOutcomeUpdateManyMutationInput,
      ActionOutcomeUncheckedUpdateManyInput
    >;
    /**
     * Filter which ActionOutcomes to update
     */
    where?: ActionOutcomeWhereInput;
    /**
     * Limit how many ActionOutcomes to update.
     */
    limit?: number;
  };

  /**
   * ActionOutcome updateManyAndReturn
   */
  export type ActionOutcomeUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ActionOutcome
     */
    select?: ActionOutcomeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ActionOutcome
     */
    omit?: ActionOutcomeOmit<ExtArgs> | null;
    /**
     * The data used to update ActionOutcomes.
     */
    data: XOR<
      ActionOutcomeUpdateManyMutationInput,
      ActionOutcomeUncheckedUpdateManyInput
    >;
    /**
     * Filter which ActionOutcomes to update
     */
    where?: ActionOutcomeWhereInput;
    /**
     * Limit how many ActionOutcomes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionOutcomeIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ActionOutcome upsert
   */
  export type ActionOutcomeUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ActionOutcome
     */
    select?: ActionOutcomeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ActionOutcome
     */
    omit?: ActionOutcomeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionOutcomeInclude<ExtArgs> | null;
    /**
     * The filter to search for the ActionOutcome to update in case it exists.
     */
    where: ActionOutcomeWhereUniqueInput;
    /**
     * In case the ActionOutcome found by the `where` argument doesn't exist, create a new ActionOutcome with this data.
     */
    create: XOR<ActionOutcomeCreateInput, ActionOutcomeUncheckedCreateInput>;
    /**
     * In case the ActionOutcome was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActionOutcomeUpdateInput, ActionOutcomeUncheckedUpdateInput>;
  };

  /**
   * ActionOutcome delete
   */
  export type ActionOutcomeDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ActionOutcome
     */
    select?: ActionOutcomeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ActionOutcome
     */
    omit?: ActionOutcomeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionOutcomeInclude<ExtArgs> | null;
    /**
     * Filter which ActionOutcome to delete.
     */
    where: ActionOutcomeWhereUniqueInput;
  };

  /**
   * ActionOutcome deleteMany
   */
  export type ActionOutcomeDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ActionOutcomes to delete
     */
    where?: ActionOutcomeWhereInput;
    /**
     * Limit how many ActionOutcomes to delete.
     */
    limit?: number;
  };

  /**
   * ActionOutcome without action
   */
  export type ActionOutcomeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ActionOutcome
     */
    select?: ActionOutcomeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ActionOutcome
     */
    omit?: ActionOutcomeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionOutcomeInclude<ExtArgs> | null;
  };

  /**
   * Model Setting
   */

  export type AggregateSetting = {
    _count: SettingCountAggregateOutputType | null;
    _min: SettingMinAggregateOutputType | null;
    _max: SettingMaxAggregateOutputType | null;
  };

  export type SettingMinAggregateOutputType = {
    key: string | null;
    updatedAt: Date | null;
  };

  export type SettingMaxAggregateOutputType = {
    key: string | null;
    updatedAt: Date | null;
  };

  export type SettingCountAggregateOutputType = {
    key: number;
    value: number;
    updatedAt: number;
    _all: number;
  };

  export type SettingMinAggregateInputType = {
    key?: true;
    updatedAt?: true;
  };

  export type SettingMaxAggregateInputType = {
    key?: true;
    updatedAt?: true;
  };

  export type SettingCountAggregateInputType = {
    key?: true;
    value?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type SettingAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Setting to aggregate.
     */
    where?: SettingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Settings to fetch.
     */
    orderBy?:
      | SettingOrderByWithRelationInput
      | SettingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: SettingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Settings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Settings
     **/
    _count?: true | SettingCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SettingMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SettingMaxAggregateInputType;
  };

  export type GetSettingAggregateType<T extends SettingAggregateArgs> = {
    [P in keyof T & keyof AggregateSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetting[P]>
      : GetScalarType<T[P], AggregateSetting[P]>;
  };

  export type SettingGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SettingWhereInput;
    orderBy?:
      | SettingOrderByWithAggregationInput
      | SettingOrderByWithAggregationInput[];
    by: SettingScalarFieldEnum[] | SettingScalarFieldEnum;
    having?: SettingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SettingCountAggregateInputType | true;
    _min?: SettingMinAggregateInputType;
    _max?: SettingMaxAggregateInputType;
  };

  export type SettingGroupByOutputType = {
    key: string;
    value: JsonValue;
    updatedAt: Date;
    _count: SettingCountAggregateOutputType | null;
    _min: SettingMinAggregateOutputType | null;
    _max: SettingMaxAggregateOutputType | null;
  };

  type GetSettingGroupByPayload<T extends SettingGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<SettingGroupByOutputType, T['by']> & {
          [P in keyof T & keyof SettingGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingGroupByOutputType[P]>
            : GetScalarType<T[P], SettingGroupByOutputType[P]>;
        }
      >
    >;

  export type SettingSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      key?: boolean;
      value?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['setting']
  >;

  export type SettingSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      key?: boolean;
      value?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['setting']
  >;

  export type SettingSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      key?: boolean;
      value?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['setting']
  >;

  export type SettingSelectScalar = {
    key?: boolean;
    value?: boolean;
    updatedAt?: boolean;
  };

  export type SettingOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'key' | 'value' | 'updatedAt',
    ExtArgs['result']['setting']
  >;

  export type $SettingPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Setting';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        key: string;
        value: Prisma.JsonValue;
        updatedAt: Date;
      },
      ExtArgs['result']['setting']
    >;
    composites: {};
  };

  type SettingGetPayload<
    S extends boolean | null | undefined | SettingDefaultArgs,
  > = $Result.GetResult<Prisma.$SettingPayload, S>;

  type SettingCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<SettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SettingCountAggregateInputType | true;
  };

  export interface SettingDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Setting'];
      meta: { name: 'Setting' };
    };
    /**
     * Find zero or one Setting that matches the filter.
     * @param {SettingFindUniqueArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingFindUniqueArgs>(
      args: SelectSubset<T, SettingFindUniqueArgs<ExtArgs>>,
    ): Prisma__SettingClient<
      $Result.GetResult<
        Prisma.$SettingPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Setting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingFindUniqueOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingFindUniqueOrThrowArgs>(
      args: SelectSubset<T, SettingFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__SettingClient<
      $Result.GetResult<
        Prisma.$SettingPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Setting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingFindFirstArgs>(
      args?: SelectSubset<T, SettingFindFirstArgs<ExtArgs>>,
    ): Prisma__SettingClient<
      $Result.GetResult<
        Prisma.$SettingPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Setting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SettingFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__SettingClient<
      $Result.GetResult<
        Prisma.$SettingPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.setting.findMany()
     *
     * // Get first 10 Settings
     * const settings = await prisma.setting.findMany({ take: 10 })
     *
     * // Only select the `key`
     * const settingWithKeyOnly = await prisma.setting.findMany({ select: { key: true } })
     *
     */
    findMany<T extends SettingFindManyArgs>(
      args?: SelectSubset<T, SettingFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SettingPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Setting.
     * @param {SettingCreateArgs} args - Arguments to create a Setting.
     * @example
     * // Create one Setting
     * const Setting = await prisma.setting.create({
     *   data: {
     *     // ... data to create a Setting
     *   }
     * })
     *
     */
    create<T extends SettingCreateArgs>(
      args: SelectSubset<T, SettingCreateArgs<ExtArgs>>,
    ): Prisma__SettingClient<
      $Result.GetResult<
        Prisma.$SettingPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Settings.
     * @param {SettingCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SettingCreateManyArgs>(
      args?: SelectSubset<T, SettingCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Settings and only return the `key`
     * const settingWithKeyOnly = await prisma.setting.createManyAndReturn({
     *   select: { key: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SettingCreateManyAndReturnArgs>(
      args?: SelectSubset<T, SettingCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SettingPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Setting.
     * @param {SettingDeleteArgs} args - Arguments to delete one Setting.
     * @example
     * // Delete one Setting
     * const Setting = await prisma.setting.delete({
     *   where: {
     *     // ... filter to delete one Setting
     *   }
     * })
     *
     */
    delete<T extends SettingDeleteArgs>(
      args: SelectSubset<T, SettingDeleteArgs<ExtArgs>>,
    ): Prisma__SettingClient<
      $Result.GetResult<
        Prisma.$SettingPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Setting.
     * @param {SettingUpdateArgs} args - Arguments to update one Setting.
     * @example
     * // Update one Setting
     * const setting = await prisma.setting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SettingUpdateArgs>(
      args: SelectSubset<T, SettingUpdateArgs<ExtArgs>>,
    ): Prisma__SettingClient<
      $Result.GetResult<
        Prisma.$SettingPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Settings.
     * @param {SettingDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.setting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SettingDeleteManyArgs>(
      args?: SelectSubset<T, SettingDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SettingUpdateManyArgs>(
      args: SelectSubset<T, SettingUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {SettingUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Settings and only return the `key`
     * const settingWithKeyOnly = await prisma.setting.updateManyAndReturn({
     *   select: { key: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends SettingUpdateManyAndReturnArgs>(
      args: SelectSubset<T, SettingUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SettingPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Setting.
     * @param {SettingUpsertArgs} args - Arguments to update or create a Setting.
     * @example
     * // Update or create a Setting
     * const setting = await prisma.setting.upsert({
     *   create: {
     *     // ... data to create a Setting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setting we want to update
     *   }
     * })
     */
    upsert<T extends SettingUpsertArgs>(
      args: SelectSubset<T, SettingUpsertArgs<ExtArgs>>,
    ): Prisma__SettingClient<
      $Result.GetResult<
        Prisma.$SettingPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.setting.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
     **/
    count<T extends SettingCountArgs>(
      args?: Subset<T, SettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SettingAggregateArgs>(
      args: Subset<T, SettingAggregateArgs>,
    ): Prisma.PrismaPromise<GetSettingAggregateType<T>>;

    /**
     * Group by Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends SettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingGroupByArgs['orderBy'] }
        : { orderBy?: SettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, SettingGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetSettingGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Setting model
     */
    readonly fields: SettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Setting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Setting model
   */
  interface SettingFieldRefs {
    readonly key: FieldRef<'Setting', 'String'>;
    readonly value: FieldRef<'Setting', 'Json'>;
    readonly updatedAt: FieldRef<'Setting', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Setting findUnique
   */
  export type SettingFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null;
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput;
  };

  /**
   * Setting findUniqueOrThrow
   */
  export type SettingFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null;
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput;
  };

  /**
   * Setting findFirst
   */
  export type SettingFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null;
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Settings to fetch.
     */
    orderBy?:
      | SettingOrderByWithRelationInput
      | SettingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Settings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[];
  };

  /**
   * Setting findFirstOrThrow
   */
  export type SettingFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null;
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Settings to fetch.
     */
    orderBy?:
      | SettingOrderByWithRelationInput
      | SettingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Settings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[];
  };

  /**
   * Setting findMany
   */
  export type SettingFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null;
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Settings to fetch.
     */
    orderBy?:
      | SettingOrderByWithRelationInput
      | SettingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Settings.
     */
    cursor?: SettingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Settings.
     */
    skip?: number;
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[];
  };

  /**
   * Setting create
   */
  export type SettingCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null;
    /**
     * The data needed to create a Setting.
     */
    data: XOR<SettingCreateInput, SettingUncheckedCreateInput>;
  };

  /**
   * Setting createMany
   */
  export type SettingCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Setting createManyAndReturn
   */
  export type SettingCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null;
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Setting update
   */
  export type SettingUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null;
    /**
     * The data needed to update a Setting.
     */
    data: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>;
    /**
     * Choose, which Setting to update.
     */
    where: SettingWhereUniqueInput;
  };

  /**
   * Setting updateMany
   */
  export type SettingUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>;
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput;
    /**
     * Limit how many Settings to update.
     */
    limit?: number;
  };

  /**
   * Setting updateManyAndReturn
   */
  export type SettingUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null;
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>;
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput;
    /**
     * Limit how many Settings to update.
     */
    limit?: number;
  };

  /**
   * Setting upsert
   */
  export type SettingUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null;
    /**
     * The filter to search for the Setting to update in case it exists.
     */
    where: SettingWhereUniqueInput;
    /**
     * In case the Setting found by the `where` argument doesn't exist, create a new Setting with this data.
     */
    create: XOR<SettingCreateInput, SettingUncheckedCreateInput>;
    /**
     * In case the Setting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>;
  };

  /**
   * Setting delete
   */
  export type SettingDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null;
    /**
     * Filter which Setting to delete.
     */
    where: SettingWhereUniqueInput;
  };

  /**
   * Setting deleteMany
   */
  export type SettingDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingWhereInput;
    /**
     * Limit how many Settings to delete.
     */
    limit?: number;
  };

  /**
   * Setting without action
   */
  export type SettingDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const ProductScalarFieldEnum: {
    id: 'id';
    sku: 'sku';
    name: 'name';
    category: 'category';
    brand: 'brand';
    unitCost: 'unitCost';
    basePrice: 'basePrice';
    currentPrice: 'currentPrice';
    holdingCostPerUnitPerDay: 'holdingCostPerUnitPerDay';
    clearanceEndDate: 'clearanceEndDate';
    status: 'status';
    createdAt: 'createdAt';
  };

  export type ProductScalarFieldEnum =
    (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];

  export const InventoryScalarFieldEnum: {
    productId: 'productId';
    location: 'location';
    stockOnHand: 'stockOnHand';
    reserved: 'reserved';
  };

  export type InventoryScalarFieldEnum =
    (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum];

  export const PriceHistoryScalarFieldEnum: {
    id: 'id';
    productId: 'productId';
    price: 'price';
    markdownPct: 'markdownPct';
    startedAt: 'startedAt';
    endedAt: 'endedAt';
  };

  export type PriceHistoryScalarFieldEnum =
    (typeof PriceHistoryScalarFieldEnum)[keyof typeof PriceHistoryScalarFieldEnum];

  export const SalesDailyScalarFieldEnum: {
    productId: 'productId';
    saleDate: 'saleDate';
    unitsSold: 'unitsSold';
    avgUnitPrice: 'avgUnitPrice';
    promoFlag: 'promoFlag';
  };

  export type SalesDailyScalarFieldEnum =
    (typeof SalesDailyScalarFieldEnum)[keyof typeof SalesDailyScalarFieldEnum];

  export const ElasticityEstimateScalarFieldEnum: {
    productId: 'productId';
    elasticity: 'elasticity';
    method: 'method';
    sampleSize: 'sampleSize';
    confidence: 'confidence';
    lastUpdated: 'lastUpdated';
  };

  export type ElasticityEstimateScalarFieldEnum =
    (typeof ElasticityEstimateScalarFieldEnum)[keyof typeof ElasticityEstimateScalarFieldEnum];

  export const CompetitorScalarFieldEnum: {
    id: 'id';
    name: 'name';
    url: 'url';
  };

  export type CompetitorScalarFieldEnum =
    (typeof CompetitorScalarFieldEnum)[keyof typeof CompetitorScalarFieldEnum];

  export const CompetitorPriceScalarFieldEnum: {
    competitorId: 'competitorId';
    productId: 'productId';
    priceDate: 'priceDate';
    price: 'price';
  };

  export type CompetitorPriceScalarFieldEnum =
    (typeof CompetitorPriceScalarFieldEnum)[keyof typeof CompetitorPriceScalarFieldEnum];

  export const MarkdownEvaluationScalarFieldEnum: {
    id: 'id';
    productId: 'productId';
    evaluatedAt: 'evaluatedAt';
    baselinePrice: 'baselinePrice';
    baselineExpectedUnits: 'baselineExpectedUnits';
    baselineExpectedProfit: 'baselineExpectedProfit';
    markdownPct: 'markdownPct';
    candidatePrice: 'candidatePrice';
    expectedUnits: 'expectedUnits';
    expectedProfit: 'expectedProfit';
    expectedDaysToSell: 'expectedDaysToSell';
    expectedUnsoldUnits: 'expectedUnsoldUnits';
    isOptimal: 'isOptimal';
  };

  export type MarkdownEvaluationScalarFieldEnum =
    (typeof MarkdownEvaluationScalarFieldEnum)[keyof typeof MarkdownEvaluationScalarFieldEnum];

  export const MarkdownActionLogScalarFieldEnum: {
    id: 'id';
    productId: 'productId';
    executedAt: 'executedAt';
    beforePrice: 'beforePrice';
    afterPrice: 'afterPrice';
    stockAtAction: 'stockAtAction';
    expectedProfit: 'expectedProfit';
    baselineProfit: 'baselineProfit';
    deltaExpectedProfit: 'deltaExpectedProfit';
    notes: 'notes';
  };

  export type MarkdownActionLogScalarFieldEnum =
    (typeof MarkdownActionLogScalarFieldEnum)[keyof typeof MarkdownActionLogScalarFieldEnum];

  export const ActionOutcomeScalarFieldEnum: {
    actionId: 'actionId';
    windowStart: 'windowStart';
    windowEnd: 'windowEnd';
    actualUnitsSold: 'actualUnitsSold';
    actualProfit: 'actualProfit';
  };

  export type ActionOutcomeScalarFieldEnum =
    (typeof ActionOutcomeScalarFieldEnum)[keyof typeof ActionOutcomeScalarFieldEnum];

  export const SettingScalarFieldEnum: {
    key: 'key';
    value: 'value';
    updatedAt: 'updatedAt';
  };

  export type SettingScalarFieldEnum =
    (typeof SettingScalarFieldEnum)[keyof typeof SettingScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull;
  };

  export type JsonNullValueInput =
    (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  export const JsonNullValueFilter: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
    AnyNull: typeof AnyNull;
  };

  export type JsonNullValueFilter =
    (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'BigInt'
  >;

  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'BigInt[]'
  >;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Decimal'
  >;

  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Decimal[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'ProductStatus'
   */
  export type EnumProductStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'ProductStatus'
  >;

  /**
   * Reference to a field of type 'ProductStatus[]'
   */
  export type ListEnumProductStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'ProductStatus[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >;

  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Json'
  >;

  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'QueryMode'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Deep Input Types
   */

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[];
    OR?: ProductWhereInput[];
    NOT?: ProductWhereInput | ProductWhereInput[];
    id?: BigIntFilter<'Product'> | bigint | number;
    sku?: StringFilter<'Product'> | string;
    name?: StringFilter<'Product'> | string;
    category?: StringNullableFilter<'Product'> | string | null;
    brand?: StringNullableFilter<'Product'> | string | null;
    unitCost?:
      | DecimalFilter<'Product'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    basePrice?:
      | DecimalFilter<'Product'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currentPrice?:
      | DecimalFilter<'Product'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    holdingCostPerUnitPerDay?:
      | DecimalFilter<'Product'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    clearanceEndDate?: DateTimeFilter<'Product'> | Date | string;
    status?: EnumProductStatusFilter<'Product'> | $Enums.ProductStatus;
    createdAt?: DateTimeFilter<'Product'> | Date | string;
    inventories?: InventoryListRelationFilter;
    priceHistories?: PriceHistoryListRelationFilter;
    sales?: SalesDailyListRelationFilter;
    elasticityEstimate?: XOR<
      ElasticityEstimateNullableScalarRelationFilter,
      ElasticityEstimateWhereInput
    > | null;
    competitorPrices?: CompetitorPriceListRelationFilter;
    markdownEvaluations?: MarkdownEvaluationListRelationFilter;
    markdownActions?: MarkdownActionLogListRelationFilter;
  };

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder;
    sku?: SortOrder;
    name?: SortOrder;
    category?: SortOrderInput | SortOrder;
    brand?: SortOrderInput | SortOrder;
    unitCost?: SortOrder;
    basePrice?: SortOrder;
    currentPrice?: SortOrder;
    holdingCostPerUnitPerDay?: SortOrder;
    clearanceEndDate?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    inventories?: InventoryOrderByRelationAggregateInput;
    priceHistories?: PriceHistoryOrderByRelationAggregateInput;
    sales?: SalesDailyOrderByRelationAggregateInput;
    elasticityEstimate?: ElasticityEstimateOrderByWithRelationInput;
    competitorPrices?: CompetitorPriceOrderByRelationAggregateInput;
    markdownEvaluations?: MarkdownEvaluationOrderByRelationAggregateInput;
    markdownActions?: MarkdownActionLogOrderByRelationAggregateInput;
  };

  export type ProductWhereUniqueInput = Prisma.AtLeast<
    {
      id?: bigint | number;
      sku?: string;
      AND?: ProductWhereInput | ProductWhereInput[];
      OR?: ProductWhereInput[];
      NOT?: ProductWhereInput | ProductWhereInput[];
      name?: StringFilter<'Product'> | string;
      category?: StringNullableFilter<'Product'> | string | null;
      brand?: StringNullableFilter<'Product'> | string | null;
      unitCost?:
        | DecimalFilter<'Product'>
        | Decimal
        | DecimalJsLike
        | number
        | string;
      basePrice?:
        | DecimalFilter<'Product'>
        | Decimal
        | DecimalJsLike
        | number
        | string;
      currentPrice?:
        | DecimalFilter<'Product'>
        | Decimal
        | DecimalJsLike
        | number
        | string;
      holdingCostPerUnitPerDay?:
        | DecimalFilter<'Product'>
        | Decimal
        | DecimalJsLike
        | number
        | string;
      clearanceEndDate?: DateTimeFilter<'Product'> | Date | string;
      status?: EnumProductStatusFilter<'Product'> | $Enums.ProductStatus;
      createdAt?: DateTimeFilter<'Product'> | Date | string;
      inventories?: InventoryListRelationFilter;
      priceHistories?: PriceHistoryListRelationFilter;
      sales?: SalesDailyListRelationFilter;
      elasticityEstimate?: XOR<
        ElasticityEstimateNullableScalarRelationFilter,
        ElasticityEstimateWhereInput
      > | null;
      competitorPrices?: CompetitorPriceListRelationFilter;
      markdownEvaluations?: MarkdownEvaluationListRelationFilter;
      markdownActions?: MarkdownActionLogListRelationFilter;
    },
    'id' | 'sku'
  >;

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder;
    sku?: SortOrder;
    name?: SortOrder;
    category?: SortOrderInput | SortOrder;
    brand?: SortOrderInput | SortOrder;
    unitCost?: SortOrder;
    basePrice?: SortOrder;
    currentPrice?: SortOrder;
    holdingCostPerUnitPerDay?: SortOrder;
    clearanceEndDate?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    _count?: ProductCountOrderByAggregateInput;
    _avg?: ProductAvgOrderByAggregateInput;
    _max?: ProductMaxOrderByAggregateInput;
    _min?: ProductMinOrderByAggregateInput;
    _sum?: ProductSumOrderByAggregateInput;
  };

  export type ProductScalarWhereWithAggregatesInput = {
    AND?:
      | ProductScalarWhereWithAggregatesInput
      | ProductScalarWhereWithAggregatesInput[];
    OR?: ProductScalarWhereWithAggregatesInput[];
    NOT?:
      | ProductScalarWhereWithAggregatesInput
      | ProductScalarWhereWithAggregatesInput[];
    id?: BigIntWithAggregatesFilter<'Product'> | bigint | number;
    sku?: StringWithAggregatesFilter<'Product'> | string;
    name?: StringWithAggregatesFilter<'Product'> | string;
    category?: StringNullableWithAggregatesFilter<'Product'> | string | null;
    brand?: StringNullableWithAggregatesFilter<'Product'> | string | null;
    unitCost?:
      | DecimalWithAggregatesFilter<'Product'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    basePrice?:
      | DecimalWithAggregatesFilter<'Product'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currentPrice?:
      | DecimalWithAggregatesFilter<'Product'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    holdingCostPerUnitPerDay?:
      | DecimalWithAggregatesFilter<'Product'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    clearanceEndDate?: DateTimeWithAggregatesFilter<'Product'> | Date | string;
    status?:
      | EnumProductStatusWithAggregatesFilter<'Product'>
      | $Enums.ProductStatus;
    createdAt?: DateTimeWithAggregatesFilter<'Product'> | Date | string;
  };

  export type InventoryWhereInput = {
    AND?: InventoryWhereInput | InventoryWhereInput[];
    OR?: InventoryWhereInput[];
    NOT?: InventoryWhereInput | InventoryWhereInput[];
    productId?: BigIntFilter<'Inventory'> | bigint | number;
    location?: StringFilter<'Inventory'> | string;
    stockOnHand?: IntFilter<'Inventory'> | number;
    reserved?: IntFilter<'Inventory'> | number;
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>;
  };

  export type InventoryOrderByWithRelationInput = {
    productId?: SortOrder;
    location?: SortOrder;
    stockOnHand?: SortOrder;
    reserved?: SortOrder;
    product?: ProductOrderByWithRelationInput;
  };

  export type InventoryWhereUniqueInput = Prisma.AtLeast<
    {
      productId_location?: InventoryProductIdLocationCompoundUniqueInput;
      AND?: InventoryWhereInput | InventoryWhereInput[];
      OR?: InventoryWhereInput[];
      NOT?: InventoryWhereInput | InventoryWhereInput[];
      productId?: BigIntFilter<'Inventory'> | bigint | number;
      location?: StringFilter<'Inventory'> | string;
      stockOnHand?: IntFilter<'Inventory'> | number;
      reserved?: IntFilter<'Inventory'> | number;
      product?: XOR<ProductScalarRelationFilter, ProductWhereInput>;
    },
    'productId_location'
  >;

  export type InventoryOrderByWithAggregationInput = {
    productId?: SortOrder;
    location?: SortOrder;
    stockOnHand?: SortOrder;
    reserved?: SortOrder;
    _count?: InventoryCountOrderByAggregateInput;
    _avg?: InventoryAvgOrderByAggregateInput;
    _max?: InventoryMaxOrderByAggregateInput;
    _min?: InventoryMinOrderByAggregateInput;
    _sum?: InventorySumOrderByAggregateInput;
  };

  export type InventoryScalarWhereWithAggregatesInput = {
    AND?:
      | InventoryScalarWhereWithAggregatesInput
      | InventoryScalarWhereWithAggregatesInput[];
    OR?: InventoryScalarWhereWithAggregatesInput[];
    NOT?:
      | InventoryScalarWhereWithAggregatesInput
      | InventoryScalarWhereWithAggregatesInput[];
    productId?: BigIntWithAggregatesFilter<'Inventory'> | bigint | number;
    location?: StringWithAggregatesFilter<'Inventory'> | string;
    stockOnHand?: IntWithAggregatesFilter<'Inventory'> | number;
    reserved?: IntWithAggregatesFilter<'Inventory'> | number;
  };

  export type PriceHistoryWhereInput = {
    AND?: PriceHistoryWhereInput | PriceHistoryWhereInput[];
    OR?: PriceHistoryWhereInput[];
    NOT?: PriceHistoryWhereInput | PriceHistoryWhereInput[];
    id?: BigIntFilter<'PriceHistory'> | bigint | number;
    productId?: BigIntFilter<'PriceHistory'> | bigint | number;
    price?:
      | DecimalFilter<'PriceHistory'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    markdownPct?:
      | DecimalFilter<'PriceHistory'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    startedAt?: DateTimeFilter<'PriceHistory'> | Date | string;
    endedAt?: DateTimeNullableFilter<'PriceHistory'> | Date | string | null;
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>;
  };

  export type PriceHistoryOrderByWithRelationInput = {
    id?: SortOrder;
    productId?: SortOrder;
    price?: SortOrder;
    markdownPct?: SortOrder;
    startedAt?: SortOrder;
    endedAt?: SortOrderInput | SortOrder;
    product?: ProductOrderByWithRelationInput;
  };

  export type PriceHistoryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: bigint | number;
      AND?: PriceHistoryWhereInput | PriceHistoryWhereInput[];
      OR?: PriceHistoryWhereInput[];
      NOT?: PriceHistoryWhereInput | PriceHistoryWhereInput[];
      productId?: BigIntFilter<'PriceHistory'> | bigint | number;
      price?:
        | DecimalFilter<'PriceHistory'>
        | Decimal
        | DecimalJsLike
        | number
        | string;
      markdownPct?:
        | DecimalFilter<'PriceHistory'>
        | Decimal
        | DecimalJsLike
        | number
        | string;
      startedAt?: DateTimeFilter<'PriceHistory'> | Date | string;
      endedAt?: DateTimeNullableFilter<'PriceHistory'> | Date | string | null;
      product?: XOR<ProductScalarRelationFilter, ProductWhereInput>;
    },
    'id'
  >;

  export type PriceHistoryOrderByWithAggregationInput = {
    id?: SortOrder;
    productId?: SortOrder;
    price?: SortOrder;
    markdownPct?: SortOrder;
    startedAt?: SortOrder;
    endedAt?: SortOrderInput | SortOrder;
    _count?: PriceHistoryCountOrderByAggregateInput;
    _avg?: PriceHistoryAvgOrderByAggregateInput;
    _max?: PriceHistoryMaxOrderByAggregateInput;
    _min?: PriceHistoryMinOrderByAggregateInput;
    _sum?: PriceHistorySumOrderByAggregateInput;
  };

  export type PriceHistoryScalarWhereWithAggregatesInput = {
    AND?:
      | PriceHistoryScalarWhereWithAggregatesInput
      | PriceHistoryScalarWhereWithAggregatesInput[];
    OR?: PriceHistoryScalarWhereWithAggregatesInput[];
    NOT?:
      | PriceHistoryScalarWhereWithAggregatesInput
      | PriceHistoryScalarWhereWithAggregatesInput[];
    id?: BigIntWithAggregatesFilter<'PriceHistory'> | bigint | number;
    productId?: BigIntWithAggregatesFilter<'PriceHistory'> | bigint | number;
    price?:
      | DecimalWithAggregatesFilter<'PriceHistory'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    markdownPct?:
      | DecimalWithAggregatesFilter<'PriceHistory'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    startedAt?: DateTimeWithAggregatesFilter<'PriceHistory'> | Date | string;
    endedAt?:
      | DateTimeNullableWithAggregatesFilter<'PriceHistory'>
      | Date
      | string
      | null;
  };

  export type SalesDailyWhereInput = {
    AND?: SalesDailyWhereInput | SalesDailyWhereInput[];
    OR?: SalesDailyWhereInput[];
    NOT?: SalesDailyWhereInput | SalesDailyWhereInput[];
    productId?: BigIntFilter<'SalesDaily'> | bigint | number;
    saleDate?: DateTimeFilter<'SalesDaily'> | Date | string;
    unitsSold?: IntFilter<'SalesDaily'> | number;
    avgUnitPrice?:
      | DecimalFilter<'SalesDaily'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    promoFlag?: BoolFilter<'SalesDaily'> | boolean;
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>;
  };

  export type SalesDailyOrderByWithRelationInput = {
    productId?: SortOrder;
    saleDate?: SortOrder;
    unitsSold?: SortOrder;
    avgUnitPrice?: SortOrder;
    promoFlag?: SortOrder;
    product?: ProductOrderByWithRelationInput;
  };

  export type SalesDailyWhereUniqueInput = Prisma.AtLeast<
    {
      productId_saleDate?: SalesDailyProductIdSaleDateCompoundUniqueInput;
      AND?: SalesDailyWhereInput | SalesDailyWhereInput[];
      OR?: SalesDailyWhereInput[];
      NOT?: SalesDailyWhereInput | SalesDailyWhereInput[];
      productId?: BigIntFilter<'SalesDaily'> | bigint | number;
      saleDate?: DateTimeFilter<'SalesDaily'> | Date | string;
      unitsSold?: IntFilter<'SalesDaily'> | number;
      avgUnitPrice?:
        | DecimalFilter<'SalesDaily'>
        | Decimal
        | DecimalJsLike
        | number
        | string;
      promoFlag?: BoolFilter<'SalesDaily'> | boolean;
      product?: XOR<ProductScalarRelationFilter, ProductWhereInput>;
    },
    'productId_saleDate'
  >;

  export type SalesDailyOrderByWithAggregationInput = {
    productId?: SortOrder;
    saleDate?: SortOrder;
    unitsSold?: SortOrder;
    avgUnitPrice?: SortOrder;
    promoFlag?: SortOrder;
    _count?: SalesDailyCountOrderByAggregateInput;
    _avg?: SalesDailyAvgOrderByAggregateInput;
    _max?: SalesDailyMaxOrderByAggregateInput;
    _min?: SalesDailyMinOrderByAggregateInput;
    _sum?: SalesDailySumOrderByAggregateInput;
  };

  export type SalesDailyScalarWhereWithAggregatesInput = {
    AND?:
      | SalesDailyScalarWhereWithAggregatesInput
      | SalesDailyScalarWhereWithAggregatesInput[];
    OR?: SalesDailyScalarWhereWithAggregatesInput[];
    NOT?:
      | SalesDailyScalarWhereWithAggregatesInput
      | SalesDailyScalarWhereWithAggregatesInput[];
    productId?: BigIntWithAggregatesFilter<'SalesDaily'> | bigint | number;
    saleDate?: DateTimeWithAggregatesFilter<'SalesDaily'> | Date | string;
    unitsSold?: IntWithAggregatesFilter<'SalesDaily'> | number;
    avgUnitPrice?:
      | DecimalWithAggregatesFilter<'SalesDaily'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    promoFlag?: BoolWithAggregatesFilter<'SalesDaily'> | boolean;
  };

  export type ElasticityEstimateWhereInput = {
    AND?: ElasticityEstimateWhereInput | ElasticityEstimateWhereInput[];
    OR?: ElasticityEstimateWhereInput[];
    NOT?: ElasticityEstimateWhereInput | ElasticityEstimateWhereInput[];
    productId?: BigIntFilter<'ElasticityEstimate'> | bigint | number;
    elasticity?:
      | DecimalFilter<'ElasticityEstimate'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    method?: StringFilter<'ElasticityEstimate'> | string;
    sampleSize?: IntNullableFilter<'ElasticityEstimate'> | number | null;
    confidence?:
      | DecimalNullableFilter<'ElasticityEstimate'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    lastUpdated?: DateTimeFilter<'ElasticityEstimate'> | Date | string;
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>;
  };

  export type ElasticityEstimateOrderByWithRelationInput = {
    productId?: SortOrder;
    elasticity?: SortOrder;
    method?: SortOrder;
    sampleSize?: SortOrderInput | SortOrder;
    confidence?: SortOrderInput | SortOrder;
    lastUpdated?: SortOrder;
    product?: ProductOrderByWithRelationInput;
  };

  export type ElasticityEstimateWhereUniqueInput = Prisma.AtLeast<
    {
      productId?: bigint | number;
      AND?: ElasticityEstimateWhereInput | ElasticityEstimateWhereInput[];
      OR?: ElasticityEstimateWhereInput[];
      NOT?: ElasticityEstimateWhereInput | ElasticityEstimateWhereInput[];
      elasticity?:
        | DecimalFilter<'ElasticityEstimate'>
        | Decimal
        | DecimalJsLike
        | number
        | string;
      method?: StringFilter<'ElasticityEstimate'> | string;
      sampleSize?: IntNullableFilter<'ElasticityEstimate'> | number | null;
      confidence?:
        | DecimalNullableFilter<'ElasticityEstimate'>
        | Decimal
        | DecimalJsLike
        | number
        | string
        | null;
      lastUpdated?: DateTimeFilter<'ElasticityEstimate'> | Date | string;
      product?: XOR<ProductScalarRelationFilter, ProductWhereInput>;
    },
    'productId'
  >;

  export type ElasticityEstimateOrderByWithAggregationInput = {
    productId?: SortOrder;
    elasticity?: SortOrder;
    method?: SortOrder;
    sampleSize?: SortOrderInput | SortOrder;
    confidence?: SortOrderInput | SortOrder;
    lastUpdated?: SortOrder;
    _count?: ElasticityEstimateCountOrderByAggregateInput;
    _avg?: ElasticityEstimateAvgOrderByAggregateInput;
    _max?: ElasticityEstimateMaxOrderByAggregateInput;
    _min?: ElasticityEstimateMinOrderByAggregateInput;
    _sum?: ElasticityEstimateSumOrderByAggregateInput;
  };

  export type ElasticityEstimateScalarWhereWithAggregatesInput = {
    AND?:
      | ElasticityEstimateScalarWhereWithAggregatesInput
      | ElasticityEstimateScalarWhereWithAggregatesInput[];
    OR?: ElasticityEstimateScalarWhereWithAggregatesInput[];
    NOT?:
      | ElasticityEstimateScalarWhereWithAggregatesInput
      | ElasticityEstimateScalarWhereWithAggregatesInput[];
    productId?:
      | BigIntWithAggregatesFilter<'ElasticityEstimate'>
      | bigint
      | number;
    elasticity?:
      | DecimalWithAggregatesFilter<'ElasticityEstimate'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    method?: StringWithAggregatesFilter<'ElasticityEstimate'> | string;
    sampleSize?:
      | IntNullableWithAggregatesFilter<'ElasticityEstimate'>
      | number
      | null;
    confidence?:
      | DecimalNullableWithAggregatesFilter<'ElasticityEstimate'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    lastUpdated?:
      | DateTimeWithAggregatesFilter<'ElasticityEstimate'>
      | Date
      | string;
  };

  export type CompetitorWhereInput = {
    AND?: CompetitorWhereInput | CompetitorWhereInput[];
    OR?: CompetitorWhereInput[];
    NOT?: CompetitorWhereInput | CompetitorWhereInput[];
    id?: BigIntFilter<'Competitor'> | bigint | number;
    name?: StringFilter<'Competitor'> | string;
    url?: StringNullableFilter<'Competitor'> | string | null;
    prices?: CompetitorPriceListRelationFilter;
  };

  export type CompetitorOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    url?: SortOrderInput | SortOrder;
    prices?: CompetitorPriceOrderByRelationAggregateInput;
  };

  export type CompetitorWhereUniqueInput = Prisma.AtLeast<
    {
      id?: bigint | number;
      name?: string;
      AND?: CompetitorWhereInput | CompetitorWhereInput[];
      OR?: CompetitorWhereInput[];
      NOT?: CompetitorWhereInput | CompetitorWhereInput[];
      url?: StringNullableFilter<'Competitor'> | string | null;
      prices?: CompetitorPriceListRelationFilter;
    },
    'id' | 'name'
  >;

  export type CompetitorOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    url?: SortOrderInput | SortOrder;
    _count?: CompetitorCountOrderByAggregateInput;
    _avg?: CompetitorAvgOrderByAggregateInput;
    _max?: CompetitorMaxOrderByAggregateInput;
    _min?: CompetitorMinOrderByAggregateInput;
    _sum?: CompetitorSumOrderByAggregateInput;
  };

  export type CompetitorScalarWhereWithAggregatesInput = {
    AND?:
      | CompetitorScalarWhereWithAggregatesInput
      | CompetitorScalarWhereWithAggregatesInput[];
    OR?: CompetitorScalarWhereWithAggregatesInput[];
    NOT?:
      | CompetitorScalarWhereWithAggregatesInput
      | CompetitorScalarWhereWithAggregatesInput[];
    id?: BigIntWithAggregatesFilter<'Competitor'> | bigint | number;
    name?: StringWithAggregatesFilter<'Competitor'> | string;
    url?: StringNullableWithAggregatesFilter<'Competitor'> | string | null;
  };

  export type CompetitorPriceWhereInput = {
    AND?: CompetitorPriceWhereInput | CompetitorPriceWhereInput[];
    OR?: CompetitorPriceWhereInput[];
    NOT?: CompetitorPriceWhereInput | CompetitorPriceWhereInput[];
    competitorId?: BigIntFilter<'CompetitorPrice'> | bigint | number;
    productId?: BigIntFilter<'CompetitorPrice'> | bigint | number;
    priceDate?: DateTimeFilter<'CompetitorPrice'> | Date | string;
    price?:
      | DecimalFilter<'CompetitorPrice'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    competitor?: XOR<CompetitorScalarRelationFilter, CompetitorWhereInput>;
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>;
  };

  export type CompetitorPriceOrderByWithRelationInput = {
    competitorId?: SortOrder;
    productId?: SortOrder;
    priceDate?: SortOrder;
    price?: SortOrder;
    competitor?: CompetitorOrderByWithRelationInput;
    product?: ProductOrderByWithRelationInput;
  };

  export type CompetitorPriceWhereUniqueInput = Prisma.AtLeast<
    {
      competitorId_productId_priceDate?: CompetitorPriceCompetitorIdProductIdPriceDateCompoundUniqueInput;
      AND?: CompetitorPriceWhereInput | CompetitorPriceWhereInput[];
      OR?: CompetitorPriceWhereInput[];
      NOT?: CompetitorPriceWhereInput | CompetitorPriceWhereInput[];
      competitorId?: BigIntFilter<'CompetitorPrice'> | bigint | number;
      productId?: BigIntFilter<'CompetitorPrice'> | bigint | number;
      priceDate?: DateTimeFilter<'CompetitorPrice'> | Date | string;
      price?:
        | DecimalFilter<'CompetitorPrice'>
        | Decimal
        | DecimalJsLike
        | number
        | string;
      competitor?: XOR<CompetitorScalarRelationFilter, CompetitorWhereInput>;
      product?: XOR<ProductScalarRelationFilter, ProductWhereInput>;
    },
    'competitorId_productId_priceDate'
  >;

  export type CompetitorPriceOrderByWithAggregationInput = {
    competitorId?: SortOrder;
    productId?: SortOrder;
    priceDate?: SortOrder;
    price?: SortOrder;
    _count?: CompetitorPriceCountOrderByAggregateInput;
    _avg?: CompetitorPriceAvgOrderByAggregateInput;
    _max?: CompetitorPriceMaxOrderByAggregateInput;
    _min?: CompetitorPriceMinOrderByAggregateInput;
    _sum?: CompetitorPriceSumOrderByAggregateInput;
  };

  export type CompetitorPriceScalarWhereWithAggregatesInput = {
    AND?:
      | CompetitorPriceScalarWhereWithAggregatesInput
      | CompetitorPriceScalarWhereWithAggregatesInput[];
    OR?: CompetitorPriceScalarWhereWithAggregatesInput[];
    NOT?:
      | CompetitorPriceScalarWhereWithAggregatesInput
      | CompetitorPriceScalarWhereWithAggregatesInput[];
    competitorId?:
      | BigIntWithAggregatesFilter<'CompetitorPrice'>
      | bigint
      | number;
    productId?: BigIntWithAggregatesFilter<'CompetitorPrice'> | bigint | number;
    priceDate?: DateTimeWithAggregatesFilter<'CompetitorPrice'> | Date | string;
    price?:
      | DecimalWithAggregatesFilter<'CompetitorPrice'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type MarkdownEvaluationWhereInput = {
    AND?: MarkdownEvaluationWhereInput | MarkdownEvaluationWhereInput[];
    OR?: MarkdownEvaluationWhereInput[];
    NOT?: MarkdownEvaluationWhereInput | MarkdownEvaluationWhereInput[];
    id?: BigIntFilter<'MarkdownEvaluation'> | bigint | number;
    productId?: BigIntFilter<'MarkdownEvaluation'> | bigint | number;
    evaluatedAt?: DateTimeFilter<'MarkdownEvaluation'> | Date | string;
    baselinePrice?:
      | DecimalFilter<'MarkdownEvaluation'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    baselineExpectedUnits?: IntFilter<'MarkdownEvaluation'> | number;
    baselineExpectedProfit?:
      | DecimalFilter<'MarkdownEvaluation'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    markdownPct?:
      | DecimalFilter<'MarkdownEvaluation'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    candidatePrice?:
      | DecimalFilter<'MarkdownEvaluation'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    expectedUnits?: IntFilter<'MarkdownEvaluation'> | number;
    expectedProfit?:
      | DecimalFilter<'MarkdownEvaluation'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    expectedDaysToSell?:
      | IntNullableFilter<'MarkdownEvaluation'>
      | number
      | null;
    expectedUnsoldUnits?:
      | IntNullableFilter<'MarkdownEvaluation'>
      | number
      | null;
    isOptimal?: BoolFilter<'MarkdownEvaluation'> | boolean;
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>;
  };

  export type MarkdownEvaluationOrderByWithRelationInput = {
    id?: SortOrder;
    productId?: SortOrder;
    evaluatedAt?: SortOrder;
    baselinePrice?: SortOrder;
    baselineExpectedUnits?: SortOrder;
    baselineExpectedProfit?: SortOrder;
    markdownPct?: SortOrder;
    candidatePrice?: SortOrder;
    expectedUnits?: SortOrder;
    expectedProfit?: SortOrder;
    expectedDaysToSell?: SortOrderInput | SortOrder;
    expectedUnsoldUnits?: SortOrderInput | SortOrder;
    isOptimal?: SortOrder;
    product?: ProductOrderByWithRelationInput;
  };

  export type MarkdownEvaluationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: bigint | number;
      AND?: MarkdownEvaluationWhereInput | MarkdownEvaluationWhereInput[];
      OR?: MarkdownEvaluationWhereInput[];
      NOT?: MarkdownEvaluationWhereInput | MarkdownEvaluationWhereInput[];
      productId?: BigIntFilter<'MarkdownEvaluation'> | bigint | number;
      evaluatedAt?: DateTimeFilter<'MarkdownEvaluation'> | Date | string;
      baselinePrice?:
        | DecimalFilter<'MarkdownEvaluation'>
        | Decimal
        | DecimalJsLike
        | number
        | string;
      baselineExpectedUnits?: IntFilter<'MarkdownEvaluation'> | number;
      baselineExpectedProfit?:
        | DecimalFilter<'MarkdownEvaluation'>
        | Decimal
        | DecimalJsLike
        | number
        | string;
      markdownPct?:
        | DecimalFilter<'MarkdownEvaluation'>
        | Decimal
        | DecimalJsLike
        | number
        | string;
      candidatePrice?:
        | DecimalFilter<'MarkdownEvaluation'>
        | Decimal
        | DecimalJsLike
        | number
        | string;
      expectedUnits?: IntFilter<'MarkdownEvaluation'> | number;
      expectedProfit?:
        | DecimalFilter<'MarkdownEvaluation'>
        | Decimal
        | DecimalJsLike
        | number
        | string;
      expectedDaysToSell?:
        | IntNullableFilter<'MarkdownEvaluation'>
        | number
        | null;
      expectedUnsoldUnits?:
        | IntNullableFilter<'MarkdownEvaluation'>
        | number
        | null;
      isOptimal?: BoolFilter<'MarkdownEvaluation'> | boolean;
      product?: XOR<ProductScalarRelationFilter, ProductWhereInput>;
    },
    'id'
  >;

  export type MarkdownEvaluationOrderByWithAggregationInput = {
    id?: SortOrder;
    productId?: SortOrder;
    evaluatedAt?: SortOrder;
    baselinePrice?: SortOrder;
    baselineExpectedUnits?: SortOrder;
    baselineExpectedProfit?: SortOrder;
    markdownPct?: SortOrder;
    candidatePrice?: SortOrder;
    expectedUnits?: SortOrder;
    expectedProfit?: SortOrder;
    expectedDaysToSell?: SortOrderInput | SortOrder;
    expectedUnsoldUnits?: SortOrderInput | SortOrder;
    isOptimal?: SortOrder;
    _count?: MarkdownEvaluationCountOrderByAggregateInput;
    _avg?: MarkdownEvaluationAvgOrderByAggregateInput;
    _max?: MarkdownEvaluationMaxOrderByAggregateInput;
    _min?: MarkdownEvaluationMinOrderByAggregateInput;
    _sum?: MarkdownEvaluationSumOrderByAggregateInput;
  };

  export type MarkdownEvaluationScalarWhereWithAggregatesInput = {
    AND?:
      | MarkdownEvaluationScalarWhereWithAggregatesInput
      | MarkdownEvaluationScalarWhereWithAggregatesInput[];
    OR?: MarkdownEvaluationScalarWhereWithAggregatesInput[];
    NOT?:
      | MarkdownEvaluationScalarWhereWithAggregatesInput
      | MarkdownEvaluationScalarWhereWithAggregatesInput[];
    id?: BigIntWithAggregatesFilter<'MarkdownEvaluation'> | bigint | number;
    productId?:
      | BigIntWithAggregatesFilter<'MarkdownEvaluation'>
      | bigint
      | number;
    evaluatedAt?:
      | DateTimeWithAggregatesFilter<'MarkdownEvaluation'>
      | Date
      | string;
    baselinePrice?:
      | DecimalWithAggregatesFilter<'MarkdownEvaluation'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    baselineExpectedUnits?:
      | IntWithAggregatesFilter<'MarkdownEvaluation'>
      | number;
    baselineExpectedProfit?:
      | DecimalWithAggregatesFilter<'MarkdownEvaluation'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    markdownPct?:
      | DecimalWithAggregatesFilter<'MarkdownEvaluation'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    candidatePrice?:
      | DecimalWithAggregatesFilter<'MarkdownEvaluation'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    expectedUnits?: IntWithAggregatesFilter<'MarkdownEvaluation'> | number;
    expectedProfit?:
      | DecimalWithAggregatesFilter<'MarkdownEvaluation'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    expectedDaysToSell?:
      | IntNullableWithAggregatesFilter<'MarkdownEvaluation'>
      | number
      | null;
    expectedUnsoldUnits?:
      | IntNullableWithAggregatesFilter<'MarkdownEvaluation'>
      | number
      | null;
    isOptimal?: BoolWithAggregatesFilter<'MarkdownEvaluation'> | boolean;
  };

  export type MarkdownActionLogWhereInput = {
    AND?: MarkdownActionLogWhereInput | MarkdownActionLogWhereInput[];
    OR?: MarkdownActionLogWhereInput[];
    NOT?: MarkdownActionLogWhereInput | MarkdownActionLogWhereInput[];
    id?: BigIntFilter<'MarkdownActionLog'> | bigint | number;
    productId?: BigIntFilter<'MarkdownActionLog'> | bigint | number;
    executedAt?: DateTimeFilter<'MarkdownActionLog'> | Date | string;
    beforePrice?:
      | DecimalFilter<'MarkdownActionLog'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    afterPrice?:
      | DecimalFilter<'MarkdownActionLog'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    stockAtAction?: IntFilter<'MarkdownActionLog'> | number;
    expectedProfit?:
      | DecimalFilter<'MarkdownActionLog'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    baselineProfit?:
      | DecimalFilter<'MarkdownActionLog'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    deltaExpectedProfit?:
      | DecimalFilter<'MarkdownActionLog'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    notes?: StringNullableFilter<'MarkdownActionLog'> | string | null;
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>;
    outcomes?: ActionOutcomeListRelationFilter;
  };

  export type MarkdownActionLogOrderByWithRelationInput = {
    id?: SortOrder;
    productId?: SortOrder;
    executedAt?: SortOrder;
    beforePrice?: SortOrder;
    afterPrice?: SortOrder;
    stockAtAction?: SortOrder;
    expectedProfit?: SortOrder;
    baselineProfit?: SortOrder;
    deltaExpectedProfit?: SortOrder;
    notes?: SortOrderInput | SortOrder;
    product?: ProductOrderByWithRelationInput;
    outcomes?: ActionOutcomeOrderByRelationAggregateInput;
  };

  export type MarkdownActionLogWhereUniqueInput = Prisma.AtLeast<
    {
      id?: bigint | number;
      AND?: MarkdownActionLogWhereInput | MarkdownActionLogWhereInput[];
      OR?: MarkdownActionLogWhereInput[];
      NOT?: MarkdownActionLogWhereInput | MarkdownActionLogWhereInput[];
      productId?: BigIntFilter<'MarkdownActionLog'> | bigint | number;
      executedAt?: DateTimeFilter<'MarkdownActionLog'> | Date | string;
      beforePrice?:
        | DecimalFilter<'MarkdownActionLog'>
        | Decimal
        | DecimalJsLike
        | number
        | string;
      afterPrice?:
        | DecimalFilter<'MarkdownActionLog'>
        | Decimal
        | DecimalJsLike
        | number
        | string;
      stockAtAction?: IntFilter<'MarkdownActionLog'> | number;
      expectedProfit?:
        | DecimalFilter<'MarkdownActionLog'>
        | Decimal
        | DecimalJsLike
        | number
        | string;
      baselineProfit?:
        | DecimalFilter<'MarkdownActionLog'>
        | Decimal
        | DecimalJsLike
        | number
        | string;
      deltaExpectedProfit?:
        | DecimalFilter<'MarkdownActionLog'>
        | Decimal
        | DecimalJsLike
        | number
        | string;
      notes?: StringNullableFilter<'MarkdownActionLog'> | string | null;
      product?: XOR<ProductScalarRelationFilter, ProductWhereInput>;
      outcomes?: ActionOutcomeListRelationFilter;
    },
    'id'
  >;

  export type MarkdownActionLogOrderByWithAggregationInput = {
    id?: SortOrder;
    productId?: SortOrder;
    executedAt?: SortOrder;
    beforePrice?: SortOrder;
    afterPrice?: SortOrder;
    stockAtAction?: SortOrder;
    expectedProfit?: SortOrder;
    baselineProfit?: SortOrder;
    deltaExpectedProfit?: SortOrder;
    notes?: SortOrderInput | SortOrder;
    _count?: MarkdownActionLogCountOrderByAggregateInput;
    _avg?: MarkdownActionLogAvgOrderByAggregateInput;
    _max?: MarkdownActionLogMaxOrderByAggregateInput;
    _min?: MarkdownActionLogMinOrderByAggregateInput;
    _sum?: MarkdownActionLogSumOrderByAggregateInput;
  };

  export type MarkdownActionLogScalarWhereWithAggregatesInput = {
    AND?:
      | MarkdownActionLogScalarWhereWithAggregatesInput
      | MarkdownActionLogScalarWhereWithAggregatesInput[];
    OR?: MarkdownActionLogScalarWhereWithAggregatesInput[];
    NOT?:
      | MarkdownActionLogScalarWhereWithAggregatesInput
      | MarkdownActionLogScalarWhereWithAggregatesInput[];
    id?: BigIntWithAggregatesFilter<'MarkdownActionLog'> | bigint | number;
    productId?:
      | BigIntWithAggregatesFilter<'MarkdownActionLog'>
      | bigint
      | number;
    executedAt?:
      | DateTimeWithAggregatesFilter<'MarkdownActionLog'>
      | Date
      | string;
    beforePrice?:
      | DecimalWithAggregatesFilter<'MarkdownActionLog'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    afterPrice?:
      | DecimalWithAggregatesFilter<'MarkdownActionLog'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    stockAtAction?: IntWithAggregatesFilter<'MarkdownActionLog'> | number;
    expectedProfit?:
      | DecimalWithAggregatesFilter<'MarkdownActionLog'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    baselineProfit?:
      | DecimalWithAggregatesFilter<'MarkdownActionLog'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    deltaExpectedProfit?:
      | DecimalWithAggregatesFilter<'MarkdownActionLog'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    notes?:
      | StringNullableWithAggregatesFilter<'MarkdownActionLog'>
      | string
      | null;
  };

  export type ActionOutcomeWhereInput = {
    AND?: ActionOutcomeWhereInput | ActionOutcomeWhereInput[];
    OR?: ActionOutcomeWhereInput[];
    NOT?: ActionOutcomeWhereInput | ActionOutcomeWhereInput[];
    actionId?: BigIntFilter<'ActionOutcome'> | bigint | number;
    windowStart?: DateTimeFilter<'ActionOutcome'> | Date | string;
    windowEnd?: DateTimeFilter<'ActionOutcome'> | Date | string;
    actualUnitsSold?: IntFilter<'ActionOutcome'> | number;
    actualProfit?:
      | DecimalFilter<'ActionOutcome'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    action?: XOR<
      MarkdownActionLogScalarRelationFilter,
      MarkdownActionLogWhereInput
    >;
  };

  export type ActionOutcomeOrderByWithRelationInput = {
    actionId?: SortOrder;
    windowStart?: SortOrder;
    windowEnd?: SortOrder;
    actualUnitsSold?: SortOrder;
    actualProfit?: SortOrder;
    action?: MarkdownActionLogOrderByWithRelationInput;
  };

  export type ActionOutcomeWhereUniqueInput = Prisma.AtLeast<
    {
      actionId_windowStart_windowEnd?: ActionOutcomeActionIdWindowStartWindowEndCompoundUniqueInput;
      AND?: ActionOutcomeWhereInput | ActionOutcomeWhereInput[];
      OR?: ActionOutcomeWhereInput[];
      NOT?: ActionOutcomeWhereInput | ActionOutcomeWhereInput[];
      actionId?: BigIntFilter<'ActionOutcome'> | bigint | number;
      windowStart?: DateTimeFilter<'ActionOutcome'> | Date | string;
      windowEnd?: DateTimeFilter<'ActionOutcome'> | Date | string;
      actualUnitsSold?: IntFilter<'ActionOutcome'> | number;
      actualProfit?:
        | DecimalFilter<'ActionOutcome'>
        | Decimal
        | DecimalJsLike
        | number
        | string;
      action?: XOR<
        MarkdownActionLogScalarRelationFilter,
        MarkdownActionLogWhereInput
      >;
    },
    'actionId_windowStart_windowEnd'
  >;

  export type ActionOutcomeOrderByWithAggregationInput = {
    actionId?: SortOrder;
    windowStart?: SortOrder;
    windowEnd?: SortOrder;
    actualUnitsSold?: SortOrder;
    actualProfit?: SortOrder;
    _count?: ActionOutcomeCountOrderByAggregateInput;
    _avg?: ActionOutcomeAvgOrderByAggregateInput;
    _max?: ActionOutcomeMaxOrderByAggregateInput;
    _min?: ActionOutcomeMinOrderByAggregateInput;
    _sum?: ActionOutcomeSumOrderByAggregateInput;
  };

  export type ActionOutcomeScalarWhereWithAggregatesInput = {
    AND?:
      | ActionOutcomeScalarWhereWithAggregatesInput
      | ActionOutcomeScalarWhereWithAggregatesInput[];
    OR?: ActionOutcomeScalarWhereWithAggregatesInput[];
    NOT?:
      | ActionOutcomeScalarWhereWithAggregatesInput
      | ActionOutcomeScalarWhereWithAggregatesInput[];
    actionId?: BigIntWithAggregatesFilter<'ActionOutcome'> | bigint | number;
    windowStart?: DateTimeWithAggregatesFilter<'ActionOutcome'> | Date | string;
    windowEnd?: DateTimeWithAggregatesFilter<'ActionOutcome'> | Date | string;
    actualUnitsSold?: IntWithAggregatesFilter<'ActionOutcome'> | number;
    actualProfit?:
      | DecimalWithAggregatesFilter<'ActionOutcome'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type SettingWhereInput = {
    AND?: SettingWhereInput | SettingWhereInput[];
    OR?: SettingWhereInput[];
    NOT?: SettingWhereInput | SettingWhereInput[];
    key?: StringFilter<'Setting'> | string;
    value?: JsonFilter<'Setting'>;
    updatedAt?: DateTimeFilter<'Setting'> | Date | string;
  };

  export type SettingOrderByWithRelationInput = {
    key?: SortOrder;
    value?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type SettingWhereUniqueInput = Prisma.AtLeast<
    {
      key?: string;
      AND?: SettingWhereInput | SettingWhereInput[];
      OR?: SettingWhereInput[];
      NOT?: SettingWhereInput | SettingWhereInput[];
      value?: JsonFilter<'Setting'>;
      updatedAt?: DateTimeFilter<'Setting'> | Date | string;
    },
    'key'
  >;

  export type SettingOrderByWithAggregationInput = {
    key?: SortOrder;
    value?: SortOrder;
    updatedAt?: SortOrder;
    _count?: SettingCountOrderByAggregateInput;
    _max?: SettingMaxOrderByAggregateInput;
    _min?: SettingMinOrderByAggregateInput;
  };

  export type SettingScalarWhereWithAggregatesInput = {
    AND?:
      | SettingScalarWhereWithAggregatesInput
      | SettingScalarWhereWithAggregatesInput[];
    OR?: SettingScalarWhereWithAggregatesInput[];
    NOT?:
      | SettingScalarWhereWithAggregatesInput
      | SettingScalarWhereWithAggregatesInput[];
    key?: StringWithAggregatesFilter<'Setting'> | string;
    value?: JsonWithAggregatesFilter<'Setting'>;
    updatedAt?: DateTimeWithAggregatesFilter<'Setting'> | Date | string;
  };

  export type ProductCreateInput = {
    id?: bigint | number;
    sku: string;
    name: string;
    category?: string | null;
    brand?: string | null;
    unitCost: Decimal | DecimalJsLike | number | string;
    basePrice: Decimal | DecimalJsLike | number | string;
    currentPrice: Decimal | DecimalJsLike | number | string;
    holdingCostPerUnitPerDay?: Decimal | DecimalJsLike | number | string;
    clearanceEndDate: Date | string;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    inventories?: InventoryCreateNestedManyWithoutProductInput;
    priceHistories?: PriceHistoryCreateNestedManyWithoutProductInput;
    sales?: SalesDailyCreateNestedManyWithoutProductInput;
    elasticityEstimate?: ElasticityEstimateCreateNestedOneWithoutProductInput;
    competitorPrices?: CompetitorPriceCreateNestedManyWithoutProductInput;
    markdownEvaluations?: MarkdownEvaluationCreateNestedManyWithoutProductInput;
    markdownActions?: MarkdownActionLogCreateNestedManyWithoutProductInput;
  };

  export type ProductUncheckedCreateInput = {
    id?: bigint | number;
    sku: string;
    name: string;
    category?: string | null;
    brand?: string | null;
    unitCost: Decimal | DecimalJsLike | number | string;
    basePrice: Decimal | DecimalJsLike | number | string;
    currentPrice: Decimal | DecimalJsLike | number | string;
    holdingCostPerUnitPerDay?: Decimal | DecimalJsLike | number | string;
    clearanceEndDate: Date | string;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    inventories?: InventoryUncheckedCreateNestedManyWithoutProductInput;
    priceHistories?: PriceHistoryUncheckedCreateNestedManyWithoutProductInput;
    sales?: SalesDailyUncheckedCreateNestedManyWithoutProductInput;
    elasticityEstimate?: ElasticityEstimateUncheckedCreateNestedOneWithoutProductInput;
    competitorPrices?: CompetitorPriceUncheckedCreateNestedManyWithoutProductInput;
    markdownEvaluations?: MarkdownEvaluationUncheckedCreateNestedManyWithoutProductInput;
    markdownActions?: MarkdownActionLogUncheckedCreateNestedManyWithoutProductInput;
  };

  export type ProductUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    sku?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    category?: NullableStringFieldUpdateOperationsInput | string | null;
    brand?: NullableStringFieldUpdateOperationsInput | string | null;
    unitCost?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    basePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currentPrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    holdingCostPerUnitPerDay?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    clearanceEndDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventories?: InventoryUpdateManyWithoutProductNestedInput;
    priceHistories?: PriceHistoryUpdateManyWithoutProductNestedInput;
    sales?: SalesDailyUpdateManyWithoutProductNestedInput;
    elasticityEstimate?: ElasticityEstimateUpdateOneWithoutProductNestedInput;
    competitorPrices?: CompetitorPriceUpdateManyWithoutProductNestedInput;
    markdownEvaluations?: MarkdownEvaluationUpdateManyWithoutProductNestedInput;
    markdownActions?: MarkdownActionLogUpdateManyWithoutProductNestedInput;
  };

  export type ProductUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    sku?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    category?: NullableStringFieldUpdateOperationsInput | string | null;
    brand?: NullableStringFieldUpdateOperationsInput | string | null;
    unitCost?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    basePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currentPrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    holdingCostPerUnitPerDay?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    clearanceEndDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventories?: InventoryUncheckedUpdateManyWithoutProductNestedInput;
    priceHistories?: PriceHistoryUncheckedUpdateManyWithoutProductNestedInput;
    sales?: SalesDailyUncheckedUpdateManyWithoutProductNestedInput;
    elasticityEstimate?: ElasticityEstimateUncheckedUpdateOneWithoutProductNestedInput;
    competitorPrices?: CompetitorPriceUncheckedUpdateManyWithoutProductNestedInput;
    markdownEvaluations?: MarkdownEvaluationUncheckedUpdateManyWithoutProductNestedInput;
    markdownActions?: MarkdownActionLogUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type ProductCreateManyInput = {
    id?: bigint | number;
    sku: string;
    name: string;
    category?: string | null;
    brand?: string | null;
    unitCost: Decimal | DecimalJsLike | number | string;
    basePrice: Decimal | DecimalJsLike | number | string;
    currentPrice: Decimal | DecimalJsLike | number | string;
    holdingCostPerUnitPerDay?: Decimal | DecimalJsLike | number | string;
    clearanceEndDate: Date | string;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
  };

  export type ProductUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    sku?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    category?: NullableStringFieldUpdateOperationsInput | string | null;
    brand?: NullableStringFieldUpdateOperationsInput | string | null;
    unitCost?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    basePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currentPrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    holdingCostPerUnitPerDay?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    clearanceEndDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProductUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    sku?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    category?: NullableStringFieldUpdateOperationsInput | string | null;
    brand?: NullableStringFieldUpdateOperationsInput | string | null;
    unitCost?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    basePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currentPrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    holdingCostPerUnitPerDay?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    clearanceEndDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type InventoryCreateInput = {
    location?: string;
    stockOnHand: number;
    reserved?: number;
    product: ProductCreateNestedOneWithoutInventoriesInput;
  };

  export type InventoryUncheckedCreateInput = {
    productId: bigint | number;
    location?: string;
    stockOnHand: number;
    reserved?: number;
  };

  export type InventoryUpdateInput = {
    location?: StringFieldUpdateOperationsInput | string;
    stockOnHand?: IntFieldUpdateOperationsInput | number;
    reserved?: IntFieldUpdateOperationsInput | number;
    product?: ProductUpdateOneRequiredWithoutInventoriesNestedInput;
  };

  export type InventoryUncheckedUpdateInput = {
    productId?: BigIntFieldUpdateOperationsInput | bigint | number;
    location?: StringFieldUpdateOperationsInput | string;
    stockOnHand?: IntFieldUpdateOperationsInput | number;
    reserved?: IntFieldUpdateOperationsInput | number;
  };

  export type InventoryCreateManyInput = {
    productId: bigint | number;
    location?: string;
    stockOnHand: number;
    reserved?: number;
  };

  export type InventoryUpdateManyMutationInput = {
    location?: StringFieldUpdateOperationsInput | string;
    stockOnHand?: IntFieldUpdateOperationsInput | number;
    reserved?: IntFieldUpdateOperationsInput | number;
  };

  export type InventoryUncheckedUpdateManyInput = {
    productId?: BigIntFieldUpdateOperationsInput | bigint | number;
    location?: StringFieldUpdateOperationsInput | string;
    stockOnHand?: IntFieldUpdateOperationsInput | number;
    reserved?: IntFieldUpdateOperationsInput | number;
  };

  export type PriceHistoryCreateInput = {
    id?: bigint | number;
    price: Decimal | DecimalJsLike | number | string;
    markdownPct?: Decimal | DecimalJsLike | number | string;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
    product: ProductCreateNestedOneWithoutPriceHistoriesInput;
  };

  export type PriceHistoryUncheckedCreateInput = {
    id?: bigint | number;
    productId: bigint | number;
    price: Decimal | DecimalJsLike | number | string;
    markdownPct?: Decimal | DecimalJsLike | number | string;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
  };

  export type PriceHistoryUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    markdownPct?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    product?: ProductUpdateOneRequiredWithoutPriceHistoriesNestedInput;
  };

  export type PriceHistoryUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    productId?: BigIntFieldUpdateOperationsInput | bigint | number;
    price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    markdownPct?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type PriceHistoryCreateManyInput = {
    id?: bigint | number;
    productId: bigint | number;
    price: Decimal | DecimalJsLike | number | string;
    markdownPct?: Decimal | DecimalJsLike | number | string;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
  };

  export type PriceHistoryUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    markdownPct?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type PriceHistoryUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    productId?: BigIntFieldUpdateOperationsInput | bigint | number;
    price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    markdownPct?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type SalesDailyCreateInput = {
    saleDate: Date | string;
    unitsSold: number;
    avgUnitPrice: Decimal | DecimalJsLike | number | string;
    promoFlag?: boolean;
    product: ProductCreateNestedOneWithoutSalesInput;
  };

  export type SalesDailyUncheckedCreateInput = {
    productId: bigint | number;
    saleDate: Date | string;
    unitsSold: number;
    avgUnitPrice: Decimal | DecimalJsLike | number | string;
    promoFlag?: boolean;
  };

  export type SalesDailyUpdateInput = {
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    unitsSold?: IntFieldUpdateOperationsInput | number;
    avgUnitPrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    promoFlag?: BoolFieldUpdateOperationsInput | boolean;
    product?: ProductUpdateOneRequiredWithoutSalesNestedInput;
  };

  export type SalesDailyUncheckedUpdateInput = {
    productId?: BigIntFieldUpdateOperationsInput | bigint | number;
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    unitsSold?: IntFieldUpdateOperationsInput | number;
    avgUnitPrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    promoFlag?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type SalesDailyCreateManyInput = {
    productId: bigint | number;
    saleDate: Date | string;
    unitsSold: number;
    avgUnitPrice: Decimal | DecimalJsLike | number | string;
    promoFlag?: boolean;
  };

  export type SalesDailyUpdateManyMutationInput = {
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    unitsSold?: IntFieldUpdateOperationsInput | number;
    avgUnitPrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    promoFlag?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type SalesDailyUncheckedUpdateManyInput = {
    productId?: BigIntFieldUpdateOperationsInput | bigint | number;
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    unitsSold?: IntFieldUpdateOperationsInput | number;
    avgUnitPrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    promoFlag?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type ElasticityEstimateCreateInput = {
    elasticity: Decimal | DecimalJsLike | number | string;
    method: string;
    sampleSize?: number | null;
    confidence?: Decimal | DecimalJsLike | number | string | null;
    lastUpdated?: Date | string;
    product: ProductCreateNestedOneWithoutElasticityEstimateInput;
  };

  export type ElasticityEstimateUncheckedCreateInput = {
    productId: bigint | number;
    elasticity: Decimal | DecimalJsLike | number | string;
    method: string;
    sampleSize?: number | null;
    confidence?: Decimal | DecimalJsLike | number | string | null;
    lastUpdated?: Date | string;
  };

  export type ElasticityEstimateUpdateInput = {
    elasticity?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    method?: StringFieldUpdateOperationsInput | string;
    sampleSize?: NullableIntFieldUpdateOperationsInput | number | null;
    confidence?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
    product?: ProductUpdateOneRequiredWithoutElasticityEstimateNestedInput;
  };

  export type ElasticityEstimateUncheckedUpdateInput = {
    productId?: BigIntFieldUpdateOperationsInput | bigint | number;
    elasticity?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    method?: StringFieldUpdateOperationsInput | string;
    sampleSize?: NullableIntFieldUpdateOperationsInput | number | null;
    confidence?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ElasticityEstimateCreateManyInput = {
    productId: bigint | number;
    elasticity: Decimal | DecimalJsLike | number | string;
    method: string;
    sampleSize?: number | null;
    confidence?: Decimal | DecimalJsLike | number | string | null;
    lastUpdated?: Date | string;
  };

  export type ElasticityEstimateUpdateManyMutationInput = {
    elasticity?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    method?: StringFieldUpdateOperationsInput | string;
    sampleSize?: NullableIntFieldUpdateOperationsInput | number | null;
    confidence?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ElasticityEstimateUncheckedUpdateManyInput = {
    productId?: BigIntFieldUpdateOperationsInput | bigint | number;
    elasticity?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    method?: StringFieldUpdateOperationsInput | string;
    sampleSize?: NullableIntFieldUpdateOperationsInput | number | null;
    confidence?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CompetitorCreateInput = {
    id?: bigint | number;
    name: string;
    url?: string | null;
    prices?: CompetitorPriceCreateNestedManyWithoutCompetitorInput;
  };

  export type CompetitorUncheckedCreateInput = {
    id?: bigint | number;
    name: string;
    url?: string | null;
    prices?: CompetitorPriceUncheckedCreateNestedManyWithoutCompetitorInput;
  };

  export type CompetitorUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    name?: StringFieldUpdateOperationsInput | string;
    url?: NullableStringFieldUpdateOperationsInput | string | null;
    prices?: CompetitorPriceUpdateManyWithoutCompetitorNestedInput;
  };

  export type CompetitorUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    name?: StringFieldUpdateOperationsInput | string;
    url?: NullableStringFieldUpdateOperationsInput | string | null;
    prices?: CompetitorPriceUncheckedUpdateManyWithoutCompetitorNestedInput;
  };

  export type CompetitorCreateManyInput = {
    id?: bigint | number;
    name: string;
    url?: string | null;
  };

  export type CompetitorUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    name?: StringFieldUpdateOperationsInput | string;
    url?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type CompetitorUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    name?: StringFieldUpdateOperationsInput | string;
    url?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type CompetitorPriceCreateInput = {
    priceDate: Date | string;
    price: Decimal | DecimalJsLike | number | string;
    competitor: CompetitorCreateNestedOneWithoutPricesInput;
    product: ProductCreateNestedOneWithoutCompetitorPricesInput;
  };

  export type CompetitorPriceUncheckedCreateInput = {
    competitorId: bigint | number;
    productId: bigint | number;
    priceDate: Date | string;
    price: Decimal | DecimalJsLike | number | string;
  };

  export type CompetitorPriceUpdateInput = {
    priceDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    competitor?: CompetitorUpdateOneRequiredWithoutPricesNestedInput;
    product?: ProductUpdateOneRequiredWithoutCompetitorPricesNestedInput;
  };

  export type CompetitorPriceUncheckedUpdateInput = {
    competitorId?: BigIntFieldUpdateOperationsInput | bigint | number;
    productId?: BigIntFieldUpdateOperationsInput | bigint | number;
    priceDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type CompetitorPriceCreateManyInput = {
    competitorId: bigint | number;
    productId: bigint | number;
    priceDate: Date | string;
    price: Decimal | DecimalJsLike | number | string;
  };

  export type CompetitorPriceUpdateManyMutationInput = {
    priceDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type CompetitorPriceUncheckedUpdateManyInput = {
    competitorId?: BigIntFieldUpdateOperationsInput | bigint | number;
    productId?: BigIntFieldUpdateOperationsInput | bigint | number;
    priceDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type MarkdownEvaluationCreateInput = {
    id?: bigint | number;
    evaluatedAt?: Date | string;
    baselinePrice: Decimal | DecimalJsLike | number | string;
    baselineExpectedUnits: number;
    baselineExpectedProfit: Decimal | DecimalJsLike | number | string;
    markdownPct: Decimal | DecimalJsLike | number | string;
    candidatePrice: Decimal | DecimalJsLike | number | string;
    expectedUnits: number;
    expectedProfit: Decimal | DecimalJsLike | number | string;
    expectedDaysToSell?: number | null;
    expectedUnsoldUnits?: number | null;
    isOptimal?: boolean;
    product: ProductCreateNestedOneWithoutMarkdownEvaluationsInput;
  };

  export type MarkdownEvaluationUncheckedCreateInput = {
    id?: bigint | number;
    productId: bigint | number;
    evaluatedAt?: Date | string;
    baselinePrice: Decimal | DecimalJsLike | number | string;
    baselineExpectedUnits: number;
    baselineExpectedProfit: Decimal | DecimalJsLike | number | string;
    markdownPct: Decimal | DecimalJsLike | number | string;
    candidatePrice: Decimal | DecimalJsLike | number | string;
    expectedUnits: number;
    expectedProfit: Decimal | DecimalJsLike | number | string;
    expectedDaysToSell?: number | null;
    expectedUnsoldUnits?: number | null;
    isOptimal?: boolean;
  };

  export type MarkdownEvaluationUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    evaluatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    baselinePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    baselineExpectedUnits?: IntFieldUpdateOperationsInput | number;
    baselineExpectedProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    markdownPct?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    candidatePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    expectedUnits?: IntFieldUpdateOperationsInput | number;
    expectedProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    expectedDaysToSell?: NullableIntFieldUpdateOperationsInput | number | null;
    expectedUnsoldUnits?: NullableIntFieldUpdateOperationsInput | number | null;
    isOptimal?: BoolFieldUpdateOperationsInput | boolean;
    product?: ProductUpdateOneRequiredWithoutMarkdownEvaluationsNestedInput;
  };

  export type MarkdownEvaluationUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    productId?: BigIntFieldUpdateOperationsInput | bigint | number;
    evaluatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    baselinePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    baselineExpectedUnits?: IntFieldUpdateOperationsInput | number;
    baselineExpectedProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    markdownPct?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    candidatePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    expectedUnits?: IntFieldUpdateOperationsInput | number;
    expectedProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    expectedDaysToSell?: NullableIntFieldUpdateOperationsInput | number | null;
    expectedUnsoldUnits?: NullableIntFieldUpdateOperationsInput | number | null;
    isOptimal?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type MarkdownEvaluationCreateManyInput = {
    id?: bigint | number;
    productId: bigint | number;
    evaluatedAt?: Date | string;
    baselinePrice: Decimal | DecimalJsLike | number | string;
    baselineExpectedUnits: number;
    baselineExpectedProfit: Decimal | DecimalJsLike | number | string;
    markdownPct: Decimal | DecimalJsLike | number | string;
    candidatePrice: Decimal | DecimalJsLike | number | string;
    expectedUnits: number;
    expectedProfit: Decimal | DecimalJsLike | number | string;
    expectedDaysToSell?: number | null;
    expectedUnsoldUnits?: number | null;
    isOptimal?: boolean;
  };

  export type MarkdownEvaluationUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    evaluatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    baselinePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    baselineExpectedUnits?: IntFieldUpdateOperationsInput | number;
    baselineExpectedProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    markdownPct?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    candidatePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    expectedUnits?: IntFieldUpdateOperationsInput | number;
    expectedProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    expectedDaysToSell?: NullableIntFieldUpdateOperationsInput | number | null;
    expectedUnsoldUnits?: NullableIntFieldUpdateOperationsInput | number | null;
    isOptimal?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type MarkdownEvaluationUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    productId?: BigIntFieldUpdateOperationsInput | bigint | number;
    evaluatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    baselinePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    baselineExpectedUnits?: IntFieldUpdateOperationsInput | number;
    baselineExpectedProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    markdownPct?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    candidatePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    expectedUnits?: IntFieldUpdateOperationsInput | number;
    expectedProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    expectedDaysToSell?: NullableIntFieldUpdateOperationsInput | number | null;
    expectedUnsoldUnits?: NullableIntFieldUpdateOperationsInput | number | null;
    isOptimal?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type MarkdownActionLogCreateInput = {
    id?: bigint | number;
    executedAt?: Date | string;
    beforePrice: Decimal | DecimalJsLike | number | string;
    afterPrice: Decimal | DecimalJsLike | number | string;
    stockAtAction: number;
    expectedProfit: Decimal | DecimalJsLike | number | string;
    baselineProfit: Decimal | DecimalJsLike | number | string;
    deltaExpectedProfit: Decimal | DecimalJsLike | number | string;
    notes?: string | null;
    product: ProductCreateNestedOneWithoutMarkdownActionsInput;
    outcomes?: ActionOutcomeCreateNestedManyWithoutActionInput;
  };

  export type MarkdownActionLogUncheckedCreateInput = {
    id?: bigint | number;
    productId: bigint | number;
    executedAt?: Date | string;
    beforePrice: Decimal | DecimalJsLike | number | string;
    afterPrice: Decimal | DecimalJsLike | number | string;
    stockAtAction: number;
    expectedProfit: Decimal | DecimalJsLike | number | string;
    baselineProfit: Decimal | DecimalJsLike | number | string;
    deltaExpectedProfit: Decimal | DecimalJsLike | number | string;
    notes?: string | null;
    outcomes?: ActionOutcomeUncheckedCreateNestedManyWithoutActionInput;
  };

  export type MarkdownActionLogUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    beforePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    afterPrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    stockAtAction?: IntFieldUpdateOperationsInput | number;
    expectedProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    baselineProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    deltaExpectedProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    product?: ProductUpdateOneRequiredWithoutMarkdownActionsNestedInput;
    outcomes?: ActionOutcomeUpdateManyWithoutActionNestedInput;
  };

  export type MarkdownActionLogUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    productId?: BigIntFieldUpdateOperationsInput | bigint | number;
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    beforePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    afterPrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    stockAtAction?: IntFieldUpdateOperationsInput | number;
    expectedProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    baselineProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    deltaExpectedProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    outcomes?: ActionOutcomeUncheckedUpdateManyWithoutActionNestedInput;
  };

  export type MarkdownActionLogCreateManyInput = {
    id?: bigint | number;
    productId: bigint | number;
    executedAt?: Date | string;
    beforePrice: Decimal | DecimalJsLike | number | string;
    afterPrice: Decimal | DecimalJsLike | number | string;
    stockAtAction: number;
    expectedProfit: Decimal | DecimalJsLike | number | string;
    baselineProfit: Decimal | DecimalJsLike | number | string;
    deltaExpectedProfit: Decimal | DecimalJsLike | number | string;
    notes?: string | null;
  };

  export type MarkdownActionLogUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    beforePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    afterPrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    stockAtAction?: IntFieldUpdateOperationsInput | number;
    expectedProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    baselineProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    deltaExpectedProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type MarkdownActionLogUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    productId?: BigIntFieldUpdateOperationsInput | bigint | number;
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    beforePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    afterPrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    stockAtAction?: IntFieldUpdateOperationsInput | number;
    expectedProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    baselineProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    deltaExpectedProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type ActionOutcomeCreateInput = {
    windowStart: Date | string;
    windowEnd: Date | string;
    actualUnitsSold: number;
    actualProfit: Decimal | DecimalJsLike | number | string;
    action: MarkdownActionLogCreateNestedOneWithoutOutcomesInput;
  };

  export type ActionOutcomeUncheckedCreateInput = {
    actionId: bigint | number;
    windowStart: Date | string;
    windowEnd: Date | string;
    actualUnitsSold: number;
    actualProfit: Decimal | DecimalJsLike | number | string;
  };

  export type ActionOutcomeUpdateInput = {
    windowStart?: DateTimeFieldUpdateOperationsInput | Date | string;
    windowEnd?: DateTimeFieldUpdateOperationsInput | Date | string;
    actualUnitsSold?: IntFieldUpdateOperationsInput | number;
    actualProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    action?: MarkdownActionLogUpdateOneRequiredWithoutOutcomesNestedInput;
  };

  export type ActionOutcomeUncheckedUpdateInput = {
    actionId?: BigIntFieldUpdateOperationsInput | bigint | number;
    windowStart?: DateTimeFieldUpdateOperationsInput | Date | string;
    windowEnd?: DateTimeFieldUpdateOperationsInput | Date | string;
    actualUnitsSold?: IntFieldUpdateOperationsInput | number;
    actualProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type ActionOutcomeCreateManyInput = {
    actionId: bigint | number;
    windowStart: Date | string;
    windowEnd: Date | string;
    actualUnitsSold: number;
    actualProfit: Decimal | DecimalJsLike | number | string;
  };

  export type ActionOutcomeUpdateManyMutationInput = {
    windowStart?: DateTimeFieldUpdateOperationsInput | Date | string;
    windowEnd?: DateTimeFieldUpdateOperationsInput | Date | string;
    actualUnitsSold?: IntFieldUpdateOperationsInput | number;
    actualProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type ActionOutcomeUncheckedUpdateManyInput = {
    actionId?: BigIntFieldUpdateOperationsInput | bigint | number;
    windowStart?: DateTimeFieldUpdateOperationsInput | Date | string;
    windowEnd?: DateTimeFieldUpdateOperationsInput | Date | string;
    actualUnitsSold?: IntFieldUpdateOperationsInput | number;
    actualProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type SettingCreateInput = {
    key: string;
    value: JsonNullValueInput | InputJsonValue;
    updatedAt?: Date | string;
  };

  export type SettingUncheckedCreateInput = {
    key: string;
    value: JsonNullValueInput | InputJsonValue;
    updatedAt?: Date | string;
  };

  export type SettingUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string;
    value?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SettingUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string;
    value?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SettingCreateManyInput = {
    key: string;
    value: JsonNullValueInput | InputJsonValue;
    updatedAt?: Date | string;
  };

  export type SettingUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string;
    value?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SettingUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string;
    value?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>;
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>;
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DecimalFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type EnumProductStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.ProductStatus
      | EnumProductStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ProductStatus[]
      | ListEnumProductStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ProductStatus[]
      | ListEnumProductStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumProductStatusFilter<$PrismaModel> | $Enums.ProductStatus;
  };

  export type InventoryListRelationFilter = {
    every?: InventoryWhereInput;
    some?: InventoryWhereInput;
    none?: InventoryWhereInput;
  };

  export type PriceHistoryListRelationFilter = {
    every?: PriceHistoryWhereInput;
    some?: PriceHistoryWhereInput;
    none?: PriceHistoryWhereInput;
  };

  export type SalesDailyListRelationFilter = {
    every?: SalesDailyWhereInput;
    some?: SalesDailyWhereInput;
    none?: SalesDailyWhereInput;
  };

  export type ElasticityEstimateNullableScalarRelationFilter = {
    is?: ElasticityEstimateWhereInput | null;
    isNot?: ElasticityEstimateWhereInput | null;
  };

  export type CompetitorPriceListRelationFilter = {
    every?: CompetitorPriceWhereInput;
    some?: CompetitorPriceWhereInput;
    none?: CompetitorPriceWhereInput;
  };

  export type MarkdownEvaluationListRelationFilter = {
    every?: MarkdownEvaluationWhereInput;
    some?: MarkdownEvaluationWhereInput;
    none?: MarkdownEvaluationWhereInput;
  };

  export type MarkdownActionLogListRelationFilter = {
    every?: MarkdownActionLogWhereInput;
    some?: MarkdownActionLogWhereInput;
    none?: MarkdownActionLogWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type InventoryOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type PriceHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type SalesDailyOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CompetitorPriceOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type MarkdownEvaluationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type MarkdownActionLogOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder;
    sku?: SortOrder;
    name?: SortOrder;
    category?: SortOrder;
    brand?: SortOrder;
    unitCost?: SortOrder;
    basePrice?: SortOrder;
    currentPrice?: SortOrder;
    holdingCostPerUnitPerDay?: SortOrder;
    clearanceEndDate?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder;
    unitCost?: SortOrder;
    basePrice?: SortOrder;
    currentPrice?: SortOrder;
    holdingCostPerUnitPerDay?: SortOrder;
  };

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder;
    sku?: SortOrder;
    name?: SortOrder;
    category?: SortOrder;
    brand?: SortOrder;
    unitCost?: SortOrder;
    basePrice?: SortOrder;
    currentPrice?: SortOrder;
    holdingCostPerUnitPerDay?: SortOrder;
    clearanceEndDate?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder;
    sku?: SortOrder;
    name?: SortOrder;
    category?: SortOrder;
    brand?: SortOrder;
    unitCost?: SortOrder;
    basePrice?: SortOrder;
    currentPrice?: SortOrder;
    holdingCostPerUnitPerDay?: SortOrder;
    clearanceEndDate?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder;
    unitCost?: SortOrder;
    basePrice?: SortOrder;
    currentPrice?: SortOrder;
    holdingCostPerUnitPerDay?: SortOrder;
  };

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>;
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>;
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedBigIntFilter<$PrismaModel>;
    _min?: NestedBigIntFilter<$PrismaModel>;
    _max?: NestedBigIntFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalWithAggregatesFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedDecimalFilter<$PrismaModel>;
    _sum?: NestedDecimalFilter<$PrismaModel>;
    _min?: NestedDecimalFilter<$PrismaModel>;
    _max?: NestedDecimalFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type EnumProductStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.ProductStatus
      | EnumProductStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ProductStatus[]
      | ListEnumProductStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ProductStatus[]
      | ListEnumProductStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumProductStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.ProductStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumProductStatusFilter<$PrismaModel>;
    _max?: NestedEnumProductStatusFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput;
    isNot?: ProductWhereInput;
  };

  export type InventoryProductIdLocationCompoundUniqueInput = {
    productId: bigint | number;
    location: string;
  };

  export type InventoryCountOrderByAggregateInput = {
    productId?: SortOrder;
    location?: SortOrder;
    stockOnHand?: SortOrder;
    reserved?: SortOrder;
  };

  export type InventoryAvgOrderByAggregateInput = {
    productId?: SortOrder;
    stockOnHand?: SortOrder;
    reserved?: SortOrder;
  };

  export type InventoryMaxOrderByAggregateInput = {
    productId?: SortOrder;
    location?: SortOrder;
    stockOnHand?: SortOrder;
    reserved?: SortOrder;
  };

  export type InventoryMinOrderByAggregateInput = {
    productId?: SortOrder;
    location?: SortOrder;
    stockOnHand?: SortOrder;
    reserved?: SortOrder;
  };

  export type InventorySumOrderByAggregateInput = {
    productId?: SortOrder;
    stockOnHand?: SortOrder;
    reserved?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type PriceHistoryCountOrderByAggregateInput = {
    id?: SortOrder;
    productId?: SortOrder;
    price?: SortOrder;
    markdownPct?: SortOrder;
    startedAt?: SortOrder;
    endedAt?: SortOrder;
  };

  export type PriceHistoryAvgOrderByAggregateInput = {
    id?: SortOrder;
    productId?: SortOrder;
    price?: SortOrder;
    markdownPct?: SortOrder;
  };

  export type PriceHistoryMaxOrderByAggregateInput = {
    id?: SortOrder;
    productId?: SortOrder;
    price?: SortOrder;
    markdownPct?: SortOrder;
    startedAt?: SortOrder;
    endedAt?: SortOrder;
  };

  export type PriceHistoryMinOrderByAggregateInput = {
    id?: SortOrder;
    productId?: SortOrder;
    price?: SortOrder;
    markdownPct?: SortOrder;
    startedAt?: SortOrder;
    endedAt?: SortOrder;
  };

  export type PriceHistorySumOrderByAggregateInput = {
    id?: SortOrder;
    productId?: SortOrder;
    price?: SortOrder;
    markdownPct?: SortOrder;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type SalesDailyProductIdSaleDateCompoundUniqueInput = {
    productId: bigint | number;
    saleDate: Date | string;
  };

  export type SalesDailyCountOrderByAggregateInput = {
    productId?: SortOrder;
    saleDate?: SortOrder;
    unitsSold?: SortOrder;
    avgUnitPrice?: SortOrder;
    promoFlag?: SortOrder;
  };

  export type SalesDailyAvgOrderByAggregateInput = {
    productId?: SortOrder;
    unitsSold?: SortOrder;
    avgUnitPrice?: SortOrder;
  };

  export type SalesDailyMaxOrderByAggregateInput = {
    productId?: SortOrder;
    saleDate?: SortOrder;
    unitsSold?: SortOrder;
    avgUnitPrice?: SortOrder;
    promoFlag?: SortOrder;
  };

  export type SalesDailyMinOrderByAggregateInput = {
    productId?: SortOrder;
    saleDate?: SortOrder;
    unitsSold?: SortOrder;
    avgUnitPrice?: SortOrder;
    promoFlag?: SortOrder;
  };

  export type SalesDailySumOrderByAggregateInput = {
    productId?: SortOrder;
    unitsSold?: SortOrder;
    avgUnitPrice?: SortOrder;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
      | null;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalNullableFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
  };

  export type ElasticityEstimateCountOrderByAggregateInput = {
    productId?: SortOrder;
    elasticity?: SortOrder;
    method?: SortOrder;
    sampleSize?: SortOrder;
    confidence?: SortOrder;
    lastUpdated?: SortOrder;
  };

  export type ElasticityEstimateAvgOrderByAggregateInput = {
    productId?: SortOrder;
    elasticity?: SortOrder;
    sampleSize?: SortOrder;
    confidence?: SortOrder;
  };

  export type ElasticityEstimateMaxOrderByAggregateInput = {
    productId?: SortOrder;
    elasticity?: SortOrder;
    method?: SortOrder;
    sampleSize?: SortOrder;
    confidence?: SortOrder;
    lastUpdated?: SortOrder;
  };

  export type ElasticityEstimateMinOrderByAggregateInput = {
    productId?: SortOrder;
    elasticity?: SortOrder;
    method?: SortOrder;
    sampleSize?: SortOrder;
    confidence?: SortOrder;
    lastUpdated?: SortOrder;
  };

  export type ElasticityEstimateSumOrderByAggregateInput = {
    productId?: SortOrder;
    elasticity?: SortOrder;
    sampleSize?: SortOrder;
    confidence?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
      | null;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalNullableWithAggregatesFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: NestedDecimalNullableFilter<$PrismaModel>;
    _min?: NestedDecimalNullableFilter<$PrismaModel>;
    _max?: NestedDecimalNullableFilter<$PrismaModel>;
  };

  export type CompetitorCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    url?: SortOrder;
  };

  export type CompetitorAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type CompetitorMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    url?: SortOrder;
  };

  export type CompetitorMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    url?: SortOrder;
  };

  export type CompetitorSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type CompetitorScalarRelationFilter = {
    is?: CompetitorWhereInput;
    isNot?: CompetitorWhereInput;
  };

  export type CompetitorPriceCompetitorIdProductIdPriceDateCompoundUniqueInput =
    {
      competitorId: bigint | number;
      productId: bigint | number;
      priceDate: Date | string;
    };

  export type CompetitorPriceCountOrderByAggregateInput = {
    competitorId?: SortOrder;
    productId?: SortOrder;
    priceDate?: SortOrder;
    price?: SortOrder;
  };

  export type CompetitorPriceAvgOrderByAggregateInput = {
    competitorId?: SortOrder;
    productId?: SortOrder;
    price?: SortOrder;
  };

  export type CompetitorPriceMaxOrderByAggregateInput = {
    competitorId?: SortOrder;
    productId?: SortOrder;
    priceDate?: SortOrder;
    price?: SortOrder;
  };

  export type CompetitorPriceMinOrderByAggregateInput = {
    competitorId?: SortOrder;
    productId?: SortOrder;
    priceDate?: SortOrder;
    price?: SortOrder;
  };

  export type CompetitorPriceSumOrderByAggregateInput = {
    competitorId?: SortOrder;
    productId?: SortOrder;
    price?: SortOrder;
  };

  export type MarkdownEvaluationCountOrderByAggregateInput = {
    id?: SortOrder;
    productId?: SortOrder;
    evaluatedAt?: SortOrder;
    baselinePrice?: SortOrder;
    baselineExpectedUnits?: SortOrder;
    baselineExpectedProfit?: SortOrder;
    markdownPct?: SortOrder;
    candidatePrice?: SortOrder;
    expectedUnits?: SortOrder;
    expectedProfit?: SortOrder;
    expectedDaysToSell?: SortOrder;
    expectedUnsoldUnits?: SortOrder;
    isOptimal?: SortOrder;
  };

  export type MarkdownEvaluationAvgOrderByAggregateInput = {
    id?: SortOrder;
    productId?: SortOrder;
    baselinePrice?: SortOrder;
    baselineExpectedUnits?: SortOrder;
    baselineExpectedProfit?: SortOrder;
    markdownPct?: SortOrder;
    candidatePrice?: SortOrder;
    expectedUnits?: SortOrder;
    expectedProfit?: SortOrder;
    expectedDaysToSell?: SortOrder;
    expectedUnsoldUnits?: SortOrder;
  };

  export type MarkdownEvaluationMaxOrderByAggregateInput = {
    id?: SortOrder;
    productId?: SortOrder;
    evaluatedAt?: SortOrder;
    baselinePrice?: SortOrder;
    baselineExpectedUnits?: SortOrder;
    baselineExpectedProfit?: SortOrder;
    markdownPct?: SortOrder;
    candidatePrice?: SortOrder;
    expectedUnits?: SortOrder;
    expectedProfit?: SortOrder;
    expectedDaysToSell?: SortOrder;
    expectedUnsoldUnits?: SortOrder;
    isOptimal?: SortOrder;
  };

  export type MarkdownEvaluationMinOrderByAggregateInput = {
    id?: SortOrder;
    productId?: SortOrder;
    evaluatedAt?: SortOrder;
    baselinePrice?: SortOrder;
    baselineExpectedUnits?: SortOrder;
    baselineExpectedProfit?: SortOrder;
    markdownPct?: SortOrder;
    candidatePrice?: SortOrder;
    expectedUnits?: SortOrder;
    expectedProfit?: SortOrder;
    expectedDaysToSell?: SortOrder;
    expectedUnsoldUnits?: SortOrder;
    isOptimal?: SortOrder;
  };

  export type MarkdownEvaluationSumOrderByAggregateInput = {
    id?: SortOrder;
    productId?: SortOrder;
    baselinePrice?: SortOrder;
    baselineExpectedUnits?: SortOrder;
    baselineExpectedProfit?: SortOrder;
    markdownPct?: SortOrder;
    candidatePrice?: SortOrder;
    expectedUnits?: SortOrder;
    expectedProfit?: SortOrder;
    expectedDaysToSell?: SortOrder;
    expectedUnsoldUnits?: SortOrder;
  };

  export type ActionOutcomeListRelationFilter = {
    every?: ActionOutcomeWhereInput;
    some?: ActionOutcomeWhereInput;
    none?: ActionOutcomeWhereInput;
  };

  export type ActionOutcomeOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type MarkdownActionLogCountOrderByAggregateInput = {
    id?: SortOrder;
    productId?: SortOrder;
    executedAt?: SortOrder;
    beforePrice?: SortOrder;
    afterPrice?: SortOrder;
    stockAtAction?: SortOrder;
    expectedProfit?: SortOrder;
    baselineProfit?: SortOrder;
    deltaExpectedProfit?: SortOrder;
    notes?: SortOrder;
  };

  export type MarkdownActionLogAvgOrderByAggregateInput = {
    id?: SortOrder;
    productId?: SortOrder;
    beforePrice?: SortOrder;
    afterPrice?: SortOrder;
    stockAtAction?: SortOrder;
    expectedProfit?: SortOrder;
    baselineProfit?: SortOrder;
    deltaExpectedProfit?: SortOrder;
  };

  export type MarkdownActionLogMaxOrderByAggregateInput = {
    id?: SortOrder;
    productId?: SortOrder;
    executedAt?: SortOrder;
    beforePrice?: SortOrder;
    afterPrice?: SortOrder;
    stockAtAction?: SortOrder;
    expectedProfit?: SortOrder;
    baselineProfit?: SortOrder;
    deltaExpectedProfit?: SortOrder;
    notes?: SortOrder;
  };

  export type MarkdownActionLogMinOrderByAggregateInput = {
    id?: SortOrder;
    productId?: SortOrder;
    executedAt?: SortOrder;
    beforePrice?: SortOrder;
    afterPrice?: SortOrder;
    stockAtAction?: SortOrder;
    expectedProfit?: SortOrder;
    baselineProfit?: SortOrder;
    deltaExpectedProfit?: SortOrder;
    notes?: SortOrder;
  };

  export type MarkdownActionLogSumOrderByAggregateInput = {
    id?: SortOrder;
    productId?: SortOrder;
    beforePrice?: SortOrder;
    afterPrice?: SortOrder;
    stockAtAction?: SortOrder;
    expectedProfit?: SortOrder;
    baselineProfit?: SortOrder;
    deltaExpectedProfit?: SortOrder;
  };

  export type MarkdownActionLogScalarRelationFilter = {
    is?: MarkdownActionLogWhereInput;
    isNot?: MarkdownActionLogWhereInput;
  };

  export type ActionOutcomeActionIdWindowStartWindowEndCompoundUniqueInput = {
    actionId: bigint | number;
    windowStart: Date | string;
    windowEnd: Date | string;
  };

  export type ActionOutcomeCountOrderByAggregateInput = {
    actionId?: SortOrder;
    windowStart?: SortOrder;
    windowEnd?: SortOrder;
    actualUnitsSold?: SortOrder;
    actualProfit?: SortOrder;
  };

  export type ActionOutcomeAvgOrderByAggregateInput = {
    actionId?: SortOrder;
    actualUnitsSold?: SortOrder;
    actualProfit?: SortOrder;
  };

  export type ActionOutcomeMaxOrderByAggregateInput = {
    actionId?: SortOrder;
    windowStart?: SortOrder;
    windowEnd?: SortOrder;
    actualUnitsSold?: SortOrder;
    actualProfit?: SortOrder;
  };

  export type ActionOutcomeMinOrderByAggregateInput = {
    actionId?: SortOrder;
    windowStart?: SortOrder;
    windowEnd?: SortOrder;
    actualUnitsSold?: SortOrder;
    actualProfit?: SortOrder;
  };

  export type ActionOutcomeSumOrderByAggregateInput = {
    actionId?: SortOrder;
    actualUnitsSold?: SortOrder;
    actualProfit?: SortOrder;
  };
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>
        >,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>;

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type SettingCountOrderByAggregateInput = {
    key?: SortOrder;
    value?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type SettingMaxOrderByAggregateInput = {
    key?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type SettingMinOrderByAggregateInput = {
    key?: SortOrder;
    updatedAt?: SortOrder;
  };
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonWithAggregatesFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>,
            'path'
          >
        >,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>
      >;

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedJsonFilter<$PrismaModel>;
    _max?: NestedJsonFilter<$PrismaModel>;
  };

  export type InventoryCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<
          InventoryCreateWithoutProductInput,
          InventoryUncheckedCreateWithoutProductInput
        >
      | InventoryCreateWithoutProductInput[]
      | InventoryUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | InventoryCreateOrConnectWithoutProductInput
      | InventoryCreateOrConnectWithoutProductInput[];
    createMany?: InventoryCreateManyProductInputEnvelope;
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[];
  };

  export type PriceHistoryCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<
          PriceHistoryCreateWithoutProductInput,
          PriceHistoryUncheckedCreateWithoutProductInput
        >
      | PriceHistoryCreateWithoutProductInput[]
      | PriceHistoryUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | PriceHistoryCreateOrConnectWithoutProductInput
      | PriceHistoryCreateOrConnectWithoutProductInput[];
    createMany?: PriceHistoryCreateManyProductInputEnvelope;
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[];
  };

  export type SalesDailyCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<
          SalesDailyCreateWithoutProductInput,
          SalesDailyUncheckedCreateWithoutProductInput
        >
      | SalesDailyCreateWithoutProductInput[]
      | SalesDailyUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | SalesDailyCreateOrConnectWithoutProductInput
      | SalesDailyCreateOrConnectWithoutProductInput[];
    createMany?: SalesDailyCreateManyProductInputEnvelope;
    connect?: SalesDailyWhereUniqueInput | SalesDailyWhereUniqueInput[];
  };

  export type ElasticityEstimateCreateNestedOneWithoutProductInput = {
    create?: XOR<
      ElasticityEstimateCreateWithoutProductInput,
      ElasticityEstimateUncheckedCreateWithoutProductInput
    >;
    connectOrCreate?: ElasticityEstimateCreateOrConnectWithoutProductInput;
    connect?: ElasticityEstimateWhereUniqueInput;
  };

  export type CompetitorPriceCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<
          CompetitorPriceCreateWithoutProductInput,
          CompetitorPriceUncheckedCreateWithoutProductInput
        >
      | CompetitorPriceCreateWithoutProductInput[]
      | CompetitorPriceUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | CompetitorPriceCreateOrConnectWithoutProductInput
      | CompetitorPriceCreateOrConnectWithoutProductInput[];
    createMany?: CompetitorPriceCreateManyProductInputEnvelope;
    connect?:
      | CompetitorPriceWhereUniqueInput
      | CompetitorPriceWhereUniqueInput[];
  };

  export type MarkdownEvaluationCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<
          MarkdownEvaluationCreateWithoutProductInput,
          MarkdownEvaluationUncheckedCreateWithoutProductInput
        >
      | MarkdownEvaluationCreateWithoutProductInput[]
      | MarkdownEvaluationUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | MarkdownEvaluationCreateOrConnectWithoutProductInput
      | MarkdownEvaluationCreateOrConnectWithoutProductInput[];
    createMany?: MarkdownEvaluationCreateManyProductInputEnvelope;
    connect?:
      | MarkdownEvaluationWhereUniqueInput
      | MarkdownEvaluationWhereUniqueInput[];
  };

  export type MarkdownActionLogCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<
          MarkdownActionLogCreateWithoutProductInput,
          MarkdownActionLogUncheckedCreateWithoutProductInput
        >
      | MarkdownActionLogCreateWithoutProductInput[]
      | MarkdownActionLogUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | MarkdownActionLogCreateOrConnectWithoutProductInput
      | MarkdownActionLogCreateOrConnectWithoutProductInput[];
    createMany?: MarkdownActionLogCreateManyProductInputEnvelope;
    connect?:
      | MarkdownActionLogWhereUniqueInput
      | MarkdownActionLogWhereUniqueInput[];
  };

  export type InventoryUncheckedCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<
          InventoryCreateWithoutProductInput,
          InventoryUncheckedCreateWithoutProductInput
        >
      | InventoryCreateWithoutProductInput[]
      | InventoryUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | InventoryCreateOrConnectWithoutProductInput
      | InventoryCreateOrConnectWithoutProductInput[];
    createMany?: InventoryCreateManyProductInputEnvelope;
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[];
  };

  export type PriceHistoryUncheckedCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<
          PriceHistoryCreateWithoutProductInput,
          PriceHistoryUncheckedCreateWithoutProductInput
        >
      | PriceHistoryCreateWithoutProductInput[]
      | PriceHistoryUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | PriceHistoryCreateOrConnectWithoutProductInput
      | PriceHistoryCreateOrConnectWithoutProductInput[];
    createMany?: PriceHistoryCreateManyProductInputEnvelope;
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[];
  };

  export type SalesDailyUncheckedCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<
          SalesDailyCreateWithoutProductInput,
          SalesDailyUncheckedCreateWithoutProductInput
        >
      | SalesDailyCreateWithoutProductInput[]
      | SalesDailyUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | SalesDailyCreateOrConnectWithoutProductInput
      | SalesDailyCreateOrConnectWithoutProductInput[];
    createMany?: SalesDailyCreateManyProductInputEnvelope;
    connect?: SalesDailyWhereUniqueInput | SalesDailyWhereUniqueInput[];
  };

  export type ElasticityEstimateUncheckedCreateNestedOneWithoutProductInput = {
    create?: XOR<
      ElasticityEstimateCreateWithoutProductInput,
      ElasticityEstimateUncheckedCreateWithoutProductInput
    >;
    connectOrCreate?: ElasticityEstimateCreateOrConnectWithoutProductInput;
    connect?: ElasticityEstimateWhereUniqueInput;
  };

  export type CompetitorPriceUncheckedCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<
          CompetitorPriceCreateWithoutProductInput,
          CompetitorPriceUncheckedCreateWithoutProductInput
        >
      | CompetitorPriceCreateWithoutProductInput[]
      | CompetitorPriceUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | CompetitorPriceCreateOrConnectWithoutProductInput
      | CompetitorPriceCreateOrConnectWithoutProductInput[];
    createMany?: CompetitorPriceCreateManyProductInputEnvelope;
    connect?:
      | CompetitorPriceWhereUniqueInput
      | CompetitorPriceWhereUniqueInput[];
  };

  export type MarkdownEvaluationUncheckedCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<
          MarkdownEvaluationCreateWithoutProductInput,
          MarkdownEvaluationUncheckedCreateWithoutProductInput
        >
      | MarkdownEvaluationCreateWithoutProductInput[]
      | MarkdownEvaluationUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | MarkdownEvaluationCreateOrConnectWithoutProductInput
      | MarkdownEvaluationCreateOrConnectWithoutProductInput[];
    createMany?: MarkdownEvaluationCreateManyProductInputEnvelope;
    connect?:
      | MarkdownEvaluationWhereUniqueInput
      | MarkdownEvaluationWhereUniqueInput[];
  };

  export type MarkdownActionLogUncheckedCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<
          MarkdownActionLogCreateWithoutProductInput,
          MarkdownActionLogUncheckedCreateWithoutProductInput
        >
      | MarkdownActionLogCreateWithoutProductInput[]
      | MarkdownActionLogUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | MarkdownActionLogCreateOrConnectWithoutProductInput
      | MarkdownActionLogCreateOrConnectWithoutProductInput[];
    createMany?: MarkdownActionLogCreateManyProductInputEnvelope;
    connect?:
      | MarkdownActionLogWhereUniqueInput
      | MarkdownActionLogWhereUniqueInput[];
  };

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string;
    increment?: Decimal | DecimalJsLike | number | string;
    decrement?: Decimal | DecimalJsLike | number | string;
    multiply?: Decimal | DecimalJsLike | number | string;
    divide?: Decimal | DecimalJsLike | number | string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type EnumProductStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProductStatus;
  };

  export type InventoryUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<
          InventoryCreateWithoutProductInput,
          InventoryUncheckedCreateWithoutProductInput
        >
      | InventoryCreateWithoutProductInput[]
      | InventoryUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | InventoryCreateOrConnectWithoutProductInput
      | InventoryCreateOrConnectWithoutProductInput[];
    upsert?:
      | InventoryUpsertWithWhereUniqueWithoutProductInput
      | InventoryUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: InventoryCreateManyProductInputEnvelope;
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[];
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[];
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[];
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[];
    update?:
      | InventoryUpdateWithWhereUniqueWithoutProductInput
      | InventoryUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?:
      | InventoryUpdateManyWithWhereWithoutProductInput
      | InventoryUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[];
  };

  export type PriceHistoryUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<
          PriceHistoryCreateWithoutProductInput,
          PriceHistoryUncheckedCreateWithoutProductInput
        >
      | PriceHistoryCreateWithoutProductInput[]
      | PriceHistoryUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | PriceHistoryCreateOrConnectWithoutProductInput
      | PriceHistoryCreateOrConnectWithoutProductInput[];
    upsert?:
      | PriceHistoryUpsertWithWhereUniqueWithoutProductInput
      | PriceHistoryUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: PriceHistoryCreateManyProductInputEnvelope;
    set?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[];
    disconnect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[];
    delete?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[];
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[];
    update?:
      | PriceHistoryUpdateWithWhereUniqueWithoutProductInput
      | PriceHistoryUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?:
      | PriceHistoryUpdateManyWithWhereWithoutProductInput
      | PriceHistoryUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[];
  };

  export type SalesDailyUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<
          SalesDailyCreateWithoutProductInput,
          SalesDailyUncheckedCreateWithoutProductInput
        >
      | SalesDailyCreateWithoutProductInput[]
      | SalesDailyUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | SalesDailyCreateOrConnectWithoutProductInput
      | SalesDailyCreateOrConnectWithoutProductInput[];
    upsert?:
      | SalesDailyUpsertWithWhereUniqueWithoutProductInput
      | SalesDailyUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: SalesDailyCreateManyProductInputEnvelope;
    set?: SalesDailyWhereUniqueInput | SalesDailyWhereUniqueInput[];
    disconnect?: SalesDailyWhereUniqueInput | SalesDailyWhereUniqueInput[];
    delete?: SalesDailyWhereUniqueInput | SalesDailyWhereUniqueInput[];
    connect?: SalesDailyWhereUniqueInput | SalesDailyWhereUniqueInput[];
    update?:
      | SalesDailyUpdateWithWhereUniqueWithoutProductInput
      | SalesDailyUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?:
      | SalesDailyUpdateManyWithWhereWithoutProductInput
      | SalesDailyUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: SalesDailyScalarWhereInput | SalesDailyScalarWhereInput[];
  };

  export type ElasticityEstimateUpdateOneWithoutProductNestedInput = {
    create?: XOR<
      ElasticityEstimateCreateWithoutProductInput,
      ElasticityEstimateUncheckedCreateWithoutProductInput
    >;
    connectOrCreate?: ElasticityEstimateCreateOrConnectWithoutProductInput;
    upsert?: ElasticityEstimateUpsertWithoutProductInput;
    disconnect?: ElasticityEstimateWhereInput | boolean;
    delete?: ElasticityEstimateWhereInput | boolean;
    connect?: ElasticityEstimateWhereUniqueInput;
    update?: XOR<
      XOR<
        ElasticityEstimateUpdateToOneWithWhereWithoutProductInput,
        ElasticityEstimateUpdateWithoutProductInput
      >,
      ElasticityEstimateUncheckedUpdateWithoutProductInput
    >;
  };

  export type CompetitorPriceUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<
          CompetitorPriceCreateWithoutProductInput,
          CompetitorPriceUncheckedCreateWithoutProductInput
        >
      | CompetitorPriceCreateWithoutProductInput[]
      | CompetitorPriceUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | CompetitorPriceCreateOrConnectWithoutProductInput
      | CompetitorPriceCreateOrConnectWithoutProductInput[];
    upsert?:
      | CompetitorPriceUpsertWithWhereUniqueWithoutProductInput
      | CompetitorPriceUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: CompetitorPriceCreateManyProductInputEnvelope;
    set?: CompetitorPriceWhereUniqueInput | CompetitorPriceWhereUniqueInput[];
    disconnect?:
      | CompetitorPriceWhereUniqueInput
      | CompetitorPriceWhereUniqueInput[];
    delete?:
      | CompetitorPriceWhereUniqueInput
      | CompetitorPriceWhereUniqueInput[];
    connect?:
      | CompetitorPriceWhereUniqueInput
      | CompetitorPriceWhereUniqueInput[];
    update?:
      | CompetitorPriceUpdateWithWhereUniqueWithoutProductInput
      | CompetitorPriceUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?:
      | CompetitorPriceUpdateManyWithWhereWithoutProductInput
      | CompetitorPriceUpdateManyWithWhereWithoutProductInput[];
    deleteMany?:
      | CompetitorPriceScalarWhereInput
      | CompetitorPriceScalarWhereInput[];
  };

  export type MarkdownEvaluationUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<
          MarkdownEvaluationCreateWithoutProductInput,
          MarkdownEvaluationUncheckedCreateWithoutProductInput
        >
      | MarkdownEvaluationCreateWithoutProductInput[]
      | MarkdownEvaluationUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | MarkdownEvaluationCreateOrConnectWithoutProductInput
      | MarkdownEvaluationCreateOrConnectWithoutProductInput[];
    upsert?:
      | MarkdownEvaluationUpsertWithWhereUniqueWithoutProductInput
      | MarkdownEvaluationUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: MarkdownEvaluationCreateManyProductInputEnvelope;
    set?:
      | MarkdownEvaluationWhereUniqueInput
      | MarkdownEvaluationWhereUniqueInput[];
    disconnect?:
      | MarkdownEvaluationWhereUniqueInput
      | MarkdownEvaluationWhereUniqueInput[];
    delete?:
      | MarkdownEvaluationWhereUniqueInput
      | MarkdownEvaluationWhereUniqueInput[];
    connect?:
      | MarkdownEvaluationWhereUniqueInput
      | MarkdownEvaluationWhereUniqueInput[];
    update?:
      | MarkdownEvaluationUpdateWithWhereUniqueWithoutProductInput
      | MarkdownEvaluationUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?:
      | MarkdownEvaluationUpdateManyWithWhereWithoutProductInput
      | MarkdownEvaluationUpdateManyWithWhereWithoutProductInput[];
    deleteMany?:
      | MarkdownEvaluationScalarWhereInput
      | MarkdownEvaluationScalarWhereInput[];
  };

  export type MarkdownActionLogUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<
          MarkdownActionLogCreateWithoutProductInput,
          MarkdownActionLogUncheckedCreateWithoutProductInput
        >
      | MarkdownActionLogCreateWithoutProductInput[]
      | MarkdownActionLogUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | MarkdownActionLogCreateOrConnectWithoutProductInput
      | MarkdownActionLogCreateOrConnectWithoutProductInput[];
    upsert?:
      | MarkdownActionLogUpsertWithWhereUniqueWithoutProductInput
      | MarkdownActionLogUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: MarkdownActionLogCreateManyProductInputEnvelope;
    set?:
      | MarkdownActionLogWhereUniqueInput
      | MarkdownActionLogWhereUniqueInput[];
    disconnect?:
      | MarkdownActionLogWhereUniqueInput
      | MarkdownActionLogWhereUniqueInput[];
    delete?:
      | MarkdownActionLogWhereUniqueInput
      | MarkdownActionLogWhereUniqueInput[];
    connect?:
      | MarkdownActionLogWhereUniqueInput
      | MarkdownActionLogWhereUniqueInput[];
    update?:
      | MarkdownActionLogUpdateWithWhereUniqueWithoutProductInput
      | MarkdownActionLogUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?:
      | MarkdownActionLogUpdateManyWithWhereWithoutProductInput
      | MarkdownActionLogUpdateManyWithWhereWithoutProductInput[];
    deleteMany?:
      | MarkdownActionLogScalarWhereInput
      | MarkdownActionLogScalarWhereInput[];
  };

  export type InventoryUncheckedUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<
          InventoryCreateWithoutProductInput,
          InventoryUncheckedCreateWithoutProductInput
        >
      | InventoryCreateWithoutProductInput[]
      | InventoryUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | InventoryCreateOrConnectWithoutProductInput
      | InventoryCreateOrConnectWithoutProductInput[];
    upsert?:
      | InventoryUpsertWithWhereUniqueWithoutProductInput
      | InventoryUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: InventoryCreateManyProductInputEnvelope;
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[];
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[];
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[];
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[];
    update?:
      | InventoryUpdateWithWhereUniqueWithoutProductInput
      | InventoryUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?:
      | InventoryUpdateManyWithWhereWithoutProductInput
      | InventoryUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[];
  };

  export type PriceHistoryUncheckedUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<
          PriceHistoryCreateWithoutProductInput,
          PriceHistoryUncheckedCreateWithoutProductInput
        >
      | PriceHistoryCreateWithoutProductInput[]
      | PriceHistoryUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | PriceHistoryCreateOrConnectWithoutProductInput
      | PriceHistoryCreateOrConnectWithoutProductInput[];
    upsert?:
      | PriceHistoryUpsertWithWhereUniqueWithoutProductInput
      | PriceHistoryUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: PriceHistoryCreateManyProductInputEnvelope;
    set?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[];
    disconnect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[];
    delete?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[];
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[];
    update?:
      | PriceHistoryUpdateWithWhereUniqueWithoutProductInput
      | PriceHistoryUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?:
      | PriceHistoryUpdateManyWithWhereWithoutProductInput
      | PriceHistoryUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[];
  };

  export type SalesDailyUncheckedUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<
          SalesDailyCreateWithoutProductInput,
          SalesDailyUncheckedCreateWithoutProductInput
        >
      | SalesDailyCreateWithoutProductInput[]
      | SalesDailyUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | SalesDailyCreateOrConnectWithoutProductInput
      | SalesDailyCreateOrConnectWithoutProductInput[];
    upsert?:
      | SalesDailyUpsertWithWhereUniqueWithoutProductInput
      | SalesDailyUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: SalesDailyCreateManyProductInputEnvelope;
    set?: SalesDailyWhereUniqueInput | SalesDailyWhereUniqueInput[];
    disconnect?: SalesDailyWhereUniqueInput | SalesDailyWhereUniqueInput[];
    delete?: SalesDailyWhereUniqueInput | SalesDailyWhereUniqueInput[];
    connect?: SalesDailyWhereUniqueInput | SalesDailyWhereUniqueInput[];
    update?:
      | SalesDailyUpdateWithWhereUniqueWithoutProductInput
      | SalesDailyUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?:
      | SalesDailyUpdateManyWithWhereWithoutProductInput
      | SalesDailyUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: SalesDailyScalarWhereInput | SalesDailyScalarWhereInput[];
  };

  export type ElasticityEstimateUncheckedUpdateOneWithoutProductNestedInput = {
    create?: XOR<
      ElasticityEstimateCreateWithoutProductInput,
      ElasticityEstimateUncheckedCreateWithoutProductInput
    >;
    connectOrCreate?: ElasticityEstimateCreateOrConnectWithoutProductInput;
    upsert?: ElasticityEstimateUpsertWithoutProductInput;
    disconnect?: ElasticityEstimateWhereInput | boolean;
    delete?: ElasticityEstimateWhereInput | boolean;
    connect?: ElasticityEstimateWhereUniqueInput;
    update?: XOR<
      XOR<
        ElasticityEstimateUpdateToOneWithWhereWithoutProductInput,
        ElasticityEstimateUpdateWithoutProductInput
      >,
      ElasticityEstimateUncheckedUpdateWithoutProductInput
    >;
  };

  export type CompetitorPriceUncheckedUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<
          CompetitorPriceCreateWithoutProductInput,
          CompetitorPriceUncheckedCreateWithoutProductInput
        >
      | CompetitorPriceCreateWithoutProductInput[]
      | CompetitorPriceUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | CompetitorPriceCreateOrConnectWithoutProductInput
      | CompetitorPriceCreateOrConnectWithoutProductInput[];
    upsert?:
      | CompetitorPriceUpsertWithWhereUniqueWithoutProductInput
      | CompetitorPriceUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: CompetitorPriceCreateManyProductInputEnvelope;
    set?: CompetitorPriceWhereUniqueInput | CompetitorPriceWhereUniqueInput[];
    disconnect?:
      | CompetitorPriceWhereUniqueInput
      | CompetitorPriceWhereUniqueInput[];
    delete?:
      | CompetitorPriceWhereUniqueInput
      | CompetitorPriceWhereUniqueInput[];
    connect?:
      | CompetitorPriceWhereUniqueInput
      | CompetitorPriceWhereUniqueInput[];
    update?:
      | CompetitorPriceUpdateWithWhereUniqueWithoutProductInput
      | CompetitorPriceUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?:
      | CompetitorPriceUpdateManyWithWhereWithoutProductInput
      | CompetitorPriceUpdateManyWithWhereWithoutProductInput[];
    deleteMany?:
      | CompetitorPriceScalarWhereInput
      | CompetitorPriceScalarWhereInput[];
  };

  export type MarkdownEvaluationUncheckedUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<
          MarkdownEvaluationCreateWithoutProductInput,
          MarkdownEvaluationUncheckedCreateWithoutProductInput
        >
      | MarkdownEvaluationCreateWithoutProductInput[]
      | MarkdownEvaluationUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | MarkdownEvaluationCreateOrConnectWithoutProductInput
      | MarkdownEvaluationCreateOrConnectWithoutProductInput[];
    upsert?:
      | MarkdownEvaluationUpsertWithWhereUniqueWithoutProductInput
      | MarkdownEvaluationUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: MarkdownEvaluationCreateManyProductInputEnvelope;
    set?:
      | MarkdownEvaluationWhereUniqueInput
      | MarkdownEvaluationWhereUniqueInput[];
    disconnect?:
      | MarkdownEvaluationWhereUniqueInput
      | MarkdownEvaluationWhereUniqueInput[];
    delete?:
      | MarkdownEvaluationWhereUniqueInput
      | MarkdownEvaluationWhereUniqueInput[];
    connect?:
      | MarkdownEvaluationWhereUniqueInput
      | MarkdownEvaluationWhereUniqueInput[];
    update?:
      | MarkdownEvaluationUpdateWithWhereUniqueWithoutProductInput
      | MarkdownEvaluationUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?:
      | MarkdownEvaluationUpdateManyWithWhereWithoutProductInput
      | MarkdownEvaluationUpdateManyWithWhereWithoutProductInput[];
    deleteMany?:
      | MarkdownEvaluationScalarWhereInput
      | MarkdownEvaluationScalarWhereInput[];
  };

  export type MarkdownActionLogUncheckedUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<
          MarkdownActionLogCreateWithoutProductInput,
          MarkdownActionLogUncheckedCreateWithoutProductInput
        >
      | MarkdownActionLogCreateWithoutProductInput[]
      | MarkdownActionLogUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | MarkdownActionLogCreateOrConnectWithoutProductInput
      | MarkdownActionLogCreateOrConnectWithoutProductInput[];
    upsert?:
      | MarkdownActionLogUpsertWithWhereUniqueWithoutProductInput
      | MarkdownActionLogUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: MarkdownActionLogCreateManyProductInputEnvelope;
    set?:
      | MarkdownActionLogWhereUniqueInput
      | MarkdownActionLogWhereUniqueInput[];
    disconnect?:
      | MarkdownActionLogWhereUniqueInput
      | MarkdownActionLogWhereUniqueInput[];
    delete?:
      | MarkdownActionLogWhereUniqueInput
      | MarkdownActionLogWhereUniqueInput[];
    connect?:
      | MarkdownActionLogWhereUniqueInput
      | MarkdownActionLogWhereUniqueInput[];
    update?:
      | MarkdownActionLogUpdateWithWhereUniqueWithoutProductInput
      | MarkdownActionLogUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?:
      | MarkdownActionLogUpdateManyWithWhereWithoutProductInput
      | MarkdownActionLogUpdateManyWithWhereWithoutProductInput[];
    deleteMany?:
      | MarkdownActionLogScalarWhereInput
      | MarkdownActionLogScalarWhereInput[];
  };

  export type ProductCreateNestedOneWithoutInventoriesInput = {
    create?: XOR<
      ProductCreateWithoutInventoriesInput,
      ProductUncheckedCreateWithoutInventoriesInput
    >;
    connectOrCreate?: ProductCreateOrConnectWithoutInventoriesInput;
    connect?: ProductWhereUniqueInput;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type ProductUpdateOneRequiredWithoutInventoriesNestedInput = {
    create?: XOR<
      ProductCreateWithoutInventoriesInput,
      ProductUncheckedCreateWithoutInventoriesInput
    >;
    connectOrCreate?: ProductCreateOrConnectWithoutInventoriesInput;
    upsert?: ProductUpsertWithoutInventoriesInput;
    connect?: ProductWhereUniqueInput;
    update?: XOR<
      XOR<
        ProductUpdateToOneWithWhereWithoutInventoriesInput,
        ProductUpdateWithoutInventoriesInput
      >,
      ProductUncheckedUpdateWithoutInventoriesInput
    >;
  };

  export type ProductCreateNestedOneWithoutPriceHistoriesInput = {
    create?: XOR<
      ProductCreateWithoutPriceHistoriesInput,
      ProductUncheckedCreateWithoutPriceHistoriesInput
    >;
    connectOrCreate?: ProductCreateOrConnectWithoutPriceHistoriesInput;
    connect?: ProductWhereUniqueInput;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type ProductUpdateOneRequiredWithoutPriceHistoriesNestedInput = {
    create?: XOR<
      ProductCreateWithoutPriceHistoriesInput,
      ProductUncheckedCreateWithoutPriceHistoriesInput
    >;
    connectOrCreate?: ProductCreateOrConnectWithoutPriceHistoriesInput;
    upsert?: ProductUpsertWithoutPriceHistoriesInput;
    connect?: ProductWhereUniqueInput;
    update?: XOR<
      XOR<
        ProductUpdateToOneWithWhereWithoutPriceHistoriesInput,
        ProductUpdateWithoutPriceHistoriesInput
      >,
      ProductUncheckedUpdateWithoutPriceHistoriesInput
    >;
  };

  export type ProductCreateNestedOneWithoutSalesInput = {
    create?: XOR<
      ProductCreateWithoutSalesInput,
      ProductUncheckedCreateWithoutSalesInput
    >;
    connectOrCreate?: ProductCreateOrConnectWithoutSalesInput;
    connect?: ProductWhereUniqueInput;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type ProductUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<
      ProductCreateWithoutSalesInput,
      ProductUncheckedCreateWithoutSalesInput
    >;
    connectOrCreate?: ProductCreateOrConnectWithoutSalesInput;
    upsert?: ProductUpsertWithoutSalesInput;
    connect?: ProductWhereUniqueInput;
    update?: XOR<
      XOR<
        ProductUpdateToOneWithWhereWithoutSalesInput,
        ProductUpdateWithoutSalesInput
      >,
      ProductUncheckedUpdateWithoutSalesInput
    >;
  };

  export type ProductCreateNestedOneWithoutElasticityEstimateInput = {
    create?: XOR<
      ProductCreateWithoutElasticityEstimateInput,
      ProductUncheckedCreateWithoutElasticityEstimateInput
    >;
    connectOrCreate?: ProductCreateOrConnectWithoutElasticityEstimateInput;
    connect?: ProductWhereUniqueInput;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null;
    increment?: Decimal | DecimalJsLike | number | string;
    decrement?: Decimal | DecimalJsLike | number | string;
    multiply?: Decimal | DecimalJsLike | number | string;
    divide?: Decimal | DecimalJsLike | number | string;
  };

  export type ProductUpdateOneRequiredWithoutElasticityEstimateNestedInput = {
    create?: XOR<
      ProductCreateWithoutElasticityEstimateInput,
      ProductUncheckedCreateWithoutElasticityEstimateInput
    >;
    connectOrCreate?: ProductCreateOrConnectWithoutElasticityEstimateInput;
    upsert?: ProductUpsertWithoutElasticityEstimateInput;
    connect?: ProductWhereUniqueInput;
    update?: XOR<
      XOR<
        ProductUpdateToOneWithWhereWithoutElasticityEstimateInput,
        ProductUpdateWithoutElasticityEstimateInput
      >,
      ProductUncheckedUpdateWithoutElasticityEstimateInput
    >;
  };

  export type CompetitorPriceCreateNestedManyWithoutCompetitorInput = {
    create?:
      | XOR<
          CompetitorPriceCreateWithoutCompetitorInput,
          CompetitorPriceUncheckedCreateWithoutCompetitorInput
        >
      | CompetitorPriceCreateWithoutCompetitorInput[]
      | CompetitorPriceUncheckedCreateWithoutCompetitorInput[];
    connectOrCreate?:
      | CompetitorPriceCreateOrConnectWithoutCompetitorInput
      | CompetitorPriceCreateOrConnectWithoutCompetitorInput[];
    createMany?: CompetitorPriceCreateManyCompetitorInputEnvelope;
    connect?:
      | CompetitorPriceWhereUniqueInput
      | CompetitorPriceWhereUniqueInput[];
  };

  export type CompetitorPriceUncheckedCreateNestedManyWithoutCompetitorInput = {
    create?:
      | XOR<
          CompetitorPriceCreateWithoutCompetitorInput,
          CompetitorPriceUncheckedCreateWithoutCompetitorInput
        >
      | CompetitorPriceCreateWithoutCompetitorInput[]
      | CompetitorPriceUncheckedCreateWithoutCompetitorInput[];
    connectOrCreate?:
      | CompetitorPriceCreateOrConnectWithoutCompetitorInput
      | CompetitorPriceCreateOrConnectWithoutCompetitorInput[];
    createMany?: CompetitorPriceCreateManyCompetitorInputEnvelope;
    connect?:
      | CompetitorPriceWhereUniqueInput
      | CompetitorPriceWhereUniqueInput[];
  };

  export type CompetitorPriceUpdateManyWithoutCompetitorNestedInput = {
    create?:
      | XOR<
          CompetitorPriceCreateWithoutCompetitorInput,
          CompetitorPriceUncheckedCreateWithoutCompetitorInput
        >
      | CompetitorPriceCreateWithoutCompetitorInput[]
      | CompetitorPriceUncheckedCreateWithoutCompetitorInput[];
    connectOrCreate?:
      | CompetitorPriceCreateOrConnectWithoutCompetitorInput
      | CompetitorPriceCreateOrConnectWithoutCompetitorInput[];
    upsert?:
      | CompetitorPriceUpsertWithWhereUniqueWithoutCompetitorInput
      | CompetitorPriceUpsertWithWhereUniqueWithoutCompetitorInput[];
    createMany?: CompetitorPriceCreateManyCompetitorInputEnvelope;
    set?: CompetitorPriceWhereUniqueInput | CompetitorPriceWhereUniqueInput[];
    disconnect?:
      | CompetitorPriceWhereUniqueInput
      | CompetitorPriceWhereUniqueInput[];
    delete?:
      | CompetitorPriceWhereUniqueInput
      | CompetitorPriceWhereUniqueInput[];
    connect?:
      | CompetitorPriceWhereUniqueInput
      | CompetitorPriceWhereUniqueInput[];
    update?:
      | CompetitorPriceUpdateWithWhereUniqueWithoutCompetitorInput
      | CompetitorPriceUpdateWithWhereUniqueWithoutCompetitorInput[];
    updateMany?:
      | CompetitorPriceUpdateManyWithWhereWithoutCompetitorInput
      | CompetitorPriceUpdateManyWithWhereWithoutCompetitorInput[];
    deleteMany?:
      | CompetitorPriceScalarWhereInput
      | CompetitorPriceScalarWhereInput[];
  };

  export type CompetitorPriceUncheckedUpdateManyWithoutCompetitorNestedInput = {
    create?:
      | XOR<
          CompetitorPriceCreateWithoutCompetitorInput,
          CompetitorPriceUncheckedCreateWithoutCompetitorInput
        >
      | CompetitorPriceCreateWithoutCompetitorInput[]
      | CompetitorPriceUncheckedCreateWithoutCompetitorInput[];
    connectOrCreate?:
      | CompetitorPriceCreateOrConnectWithoutCompetitorInput
      | CompetitorPriceCreateOrConnectWithoutCompetitorInput[];
    upsert?:
      | CompetitorPriceUpsertWithWhereUniqueWithoutCompetitorInput
      | CompetitorPriceUpsertWithWhereUniqueWithoutCompetitorInput[];
    createMany?: CompetitorPriceCreateManyCompetitorInputEnvelope;
    set?: CompetitorPriceWhereUniqueInput | CompetitorPriceWhereUniqueInput[];
    disconnect?:
      | CompetitorPriceWhereUniqueInput
      | CompetitorPriceWhereUniqueInput[];
    delete?:
      | CompetitorPriceWhereUniqueInput
      | CompetitorPriceWhereUniqueInput[];
    connect?:
      | CompetitorPriceWhereUniqueInput
      | CompetitorPriceWhereUniqueInput[];
    update?:
      | CompetitorPriceUpdateWithWhereUniqueWithoutCompetitorInput
      | CompetitorPriceUpdateWithWhereUniqueWithoutCompetitorInput[];
    updateMany?:
      | CompetitorPriceUpdateManyWithWhereWithoutCompetitorInput
      | CompetitorPriceUpdateManyWithWhereWithoutCompetitorInput[];
    deleteMany?:
      | CompetitorPriceScalarWhereInput
      | CompetitorPriceScalarWhereInput[];
  };

  export type CompetitorCreateNestedOneWithoutPricesInput = {
    create?: XOR<
      CompetitorCreateWithoutPricesInput,
      CompetitorUncheckedCreateWithoutPricesInput
    >;
    connectOrCreate?: CompetitorCreateOrConnectWithoutPricesInput;
    connect?: CompetitorWhereUniqueInput;
  };

  export type ProductCreateNestedOneWithoutCompetitorPricesInput = {
    create?: XOR<
      ProductCreateWithoutCompetitorPricesInput,
      ProductUncheckedCreateWithoutCompetitorPricesInput
    >;
    connectOrCreate?: ProductCreateOrConnectWithoutCompetitorPricesInput;
    connect?: ProductWhereUniqueInput;
  };

  export type CompetitorUpdateOneRequiredWithoutPricesNestedInput = {
    create?: XOR<
      CompetitorCreateWithoutPricesInput,
      CompetitorUncheckedCreateWithoutPricesInput
    >;
    connectOrCreate?: CompetitorCreateOrConnectWithoutPricesInput;
    upsert?: CompetitorUpsertWithoutPricesInput;
    connect?: CompetitorWhereUniqueInput;
    update?: XOR<
      XOR<
        CompetitorUpdateToOneWithWhereWithoutPricesInput,
        CompetitorUpdateWithoutPricesInput
      >,
      CompetitorUncheckedUpdateWithoutPricesInput
    >;
  };

  export type ProductUpdateOneRequiredWithoutCompetitorPricesNestedInput = {
    create?: XOR<
      ProductCreateWithoutCompetitorPricesInput,
      ProductUncheckedCreateWithoutCompetitorPricesInput
    >;
    connectOrCreate?: ProductCreateOrConnectWithoutCompetitorPricesInput;
    upsert?: ProductUpsertWithoutCompetitorPricesInput;
    connect?: ProductWhereUniqueInput;
    update?: XOR<
      XOR<
        ProductUpdateToOneWithWhereWithoutCompetitorPricesInput,
        ProductUpdateWithoutCompetitorPricesInput
      >,
      ProductUncheckedUpdateWithoutCompetitorPricesInput
    >;
  };

  export type ProductCreateNestedOneWithoutMarkdownEvaluationsInput = {
    create?: XOR<
      ProductCreateWithoutMarkdownEvaluationsInput,
      ProductUncheckedCreateWithoutMarkdownEvaluationsInput
    >;
    connectOrCreate?: ProductCreateOrConnectWithoutMarkdownEvaluationsInput;
    connect?: ProductWhereUniqueInput;
  };

  export type ProductUpdateOneRequiredWithoutMarkdownEvaluationsNestedInput = {
    create?: XOR<
      ProductCreateWithoutMarkdownEvaluationsInput,
      ProductUncheckedCreateWithoutMarkdownEvaluationsInput
    >;
    connectOrCreate?: ProductCreateOrConnectWithoutMarkdownEvaluationsInput;
    upsert?: ProductUpsertWithoutMarkdownEvaluationsInput;
    connect?: ProductWhereUniqueInput;
    update?: XOR<
      XOR<
        ProductUpdateToOneWithWhereWithoutMarkdownEvaluationsInput,
        ProductUpdateWithoutMarkdownEvaluationsInput
      >,
      ProductUncheckedUpdateWithoutMarkdownEvaluationsInput
    >;
  };

  export type ProductCreateNestedOneWithoutMarkdownActionsInput = {
    create?: XOR<
      ProductCreateWithoutMarkdownActionsInput,
      ProductUncheckedCreateWithoutMarkdownActionsInput
    >;
    connectOrCreate?: ProductCreateOrConnectWithoutMarkdownActionsInput;
    connect?: ProductWhereUniqueInput;
  };

  export type ActionOutcomeCreateNestedManyWithoutActionInput = {
    create?:
      | XOR<
          ActionOutcomeCreateWithoutActionInput,
          ActionOutcomeUncheckedCreateWithoutActionInput
        >
      | ActionOutcomeCreateWithoutActionInput[]
      | ActionOutcomeUncheckedCreateWithoutActionInput[];
    connectOrCreate?:
      | ActionOutcomeCreateOrConnectWithoutActionInput
      | ActionOutcomeCreateOrConnectWithoutActionInput[];
    createMany?: ActionOutcomeCreateManyActionInputEnvelope;
    connect?: ActionOutcomeWhereUniqueInput | ActionOutcomeWhereUniqueInput[];
  };

  export type ActionOutcomeUncheckedCreateNestedManyWithoutActionInput = {
    create?:
      | XOR<
          ActionOutcomeCreateWithoutActionInput,
          ActionOutcomeUncheckedCreateWithoutActionInput
        >
      | ActionOutcomeCreateWithoutActionInput[]
      | ActionOutcomeUncheckedCreateWithoutActionInput[];
    connectOrCreate?:
      | ActionOutcomeCreateOrConnectWithoutActionInput
      | ActionOutcomeCreateOrConnectWithoutActionInput[];
    createMany?: ActionOutcomeCreateManyActionInputEnvelope;
    connect?: ActionOutcomeWhereUniqueInput | ActionOutcomeWhereUniqueInput[];
  };

  export type ProductUpdateOneRequiredWithoutMarkdownActionsNestedInput = {
    create?: XOR<
      ProductCreateWithoutMarkdownActionsInput,
      ProductUncheckedCreateWithoutMarkdownActionsInput
    >;
    connectOrCreate?: ProductCreateOrConnectWithoutMarkdownActionsInput;
    upsert?: ProductUpsertWithoutMarkdownActionsInput;
    connect?: ProductWhereUniqueInput;
    update?: XOR<
      XOR<
        ProductUpdateToOneWithWhereWithoutMarkdownActionsInput,
        ProductUpdateWithoutMarkdownActionsInput
      >,
      ProductUncheckedUpdateWithoutMarkdownActionsInput
    >;
  };

  export type ActionOutcomeUpdateManyWithoutActionNestedInput = {
    create?:
      | XOR<
          ActionOutcomeCreateWithoutActionInput,
          ActionOutcomeUncheckedCreateWithoutActionInput
        >
      | ActionOutcomeCreateWithoutActionInput[]
      | ActionOutcomeUncheckedCreateWithoutActionInput[];
    connectOrCreate?:
      | ActionOutcomeCreateOrConnectWithoutActionInput
      | ActionOutcomeCreateOrConnectWithoutActionInput[];
    upsert?:
      | ActionOutcomeUpsertWithWhereUniqueWithoutActionInput
      | ActionOutcomeUpsertWithWhereUniqueWithoutActionInput[];
    createMany?: ActionOutcomeCreateManyActionInputEnvelope;
    set?: ActionOutcomeWhereUniqueInput | ActionOutcomeWhereUniqueInput[];
    disconnect?:
      | ActionOutcomeWhereUniqueInput
      | ActionOutcomeWhereUniqueInput[];
    delete?: ActionOutcomeWhereUniqueInput | ActionOutcomeWhereUniqueInput[];
    connect?: ActionOutcomeWhereUniqueInput | ActionOutcomeWhereUniqueInput[];
    update?:
      | ActionOutcomeUpdateWithWhereUniqueWithoutActionInput
      | ActionOutcomeUpdateWithWhereUniqueWithoutActionInput[];
    updateMany?:
      | ActionOutcomeUpdateManyWithWhereWithoutActionInput
      | ActionOutcomeUpdateManyWithWhereWithoutActionInput[];
    deleteMany?:
      | ActionOutcomeScalarWhereInput
      | ActionOutcomeScalarWhereInput[];
  };

  export type ActionOutcomeUncheckedUpdateManyWithoutActionNestedInput = {
    create?:
      | XOR<
          ActionOutcomeCreateWithoutActionInput,
          ActionOutcomeUncheckedCreateWithoutActionInput
        >
      | ActionOutcomeCreateWithoutActionInput[]
      | ActionOutcomeUncheckedCreateWithoutActionInput[];
    connectOrCreate?:
      | ActionOutcomeCreateOrConnectWithoutActionInput
      | ActionOutcomeCreateOrConnectWithoutActionInput[];
    upsert?:
      | ActionOutcomeUpsertWithWhereUniqueWithoutActionInput
      | ActionOutcomeUpsertWithWhereUniqueWithoutActionInput[];
    createMany?: ActionOutcomeCreateManyActionInputEnvelope;
    set?: ActionOutcomeWhereUniqueInput | ActionOutcomeWhereUniqueInput[];
    disconnect?:
      | ActionOutcomeWhereUniqueInput
      | ActionOutcomeWhereUniqueInput[];
    delete?: ActionOutcomeWhereUniqueInput | ActionOutcomeWhereUniqueInput[];
    connect?: ActionOutcomeWhereUniqueInput | ActionOutcomeWhereUniqueInput[];
    update?:
      | ActionOutcomeUpdateWithWhereUniqueWithoutActionInput
      | ActionOutcomeUpdateWithWhereUniqueWithoutActionInput[];
    updateMany?:
      | ActionOutcomeUpdateManyWithWhereWithoutActionInput
      | ActionOutcomeUpdateManyWithWhereWithoutActionInput[];
    deleteMany?:
      | ActionOutcomeScalarWhereInput
      | ActionOutcomeScalarWhereInput[];
  };

  export type MarkdownActionLogCreateNestedOneWithoutOutcomesInput = {
    create?: XOR<
      MarkdownActionLogCreateWithoutOutcomesInput,
      MarkdownActionLogUncheckedCreateWithoutOutcomesInput
    >;
    connectOrCreate?: MarkdownActionLogCreateOrConnectWithoutOutcomesInput;
    connect?: MarkdownActionLogWhereUniqueInput;
  };

  export type MarkdownActionLogUpdateOneRequiredWithoutOutcomesNestedInput = {
    create?: XOR<
      MarkdownActionLogCreateWithoutOutcomesInput,
      MarkdownActionLogUncheckedCreateWithoutOutcomesInput
    >;
    connectOrCreate?: MarkdownActionLogCreateOrConnectWithoutOutcomesInput;
    upsert?: MarkdownActionLogUpsertWithoutOutcomesInput;
    connect?: MarkdownActionLogWhereUniqueInput;
    update?: XOR<
      XOR<
        MarkdownActionLogUpdateToOneWithWhereWithoutOutcomesInput,
        MarkdownActionLogUpdateWithoutOutcomesInput
      >,
      MarkdownActionLogUncheckedUpdateWithoutOutcomesInput
    >;
  };

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>;
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>;
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedEnumProductStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.ProductStatus
      | EnumProductStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ProductStatus[]
      | ListEnumProductStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ProductStatus[]
      | ListEnumProductStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumProductStatusFilter<$PrismaModel> | $Enums.ProductStatus;
  };

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>;
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>;
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedBigIntFilter<$PrismaModel>;
    _min?: NestedBigIntFilter<$PrismaModel>;
    _max?: NestedBigIntFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalWithAggregatesFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedDecimalFilter<$PrismaModel>;
    _sum?: NestedDecimalFilter<$PrismaModel>;
    _min?: NestedDecimalFilter<$PrismaModel>;
    _max?: NestedDecimalFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedEnumProductStatusWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.ProductStatus
      | EnumProductStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ProductStatus[]
      | ListEnumProductStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ProductStatus[]
      | ListEnumProductStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumProductStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.ProductStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumProductStatusFilter<$PrismaModel>;
    _max?: NestedEnumProductStatusFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
      notIn?:
        | Date[]
        | string[]
        | ListDateTimeFieldRefInput<$PrismaModel>
        | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
      | null;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalNullableFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>
        | null;
      in?:
        | Decimal[]
        | DecimalJsLike[]
        | number[]
        | string[]
        | ListDecimalFieldRefInput<$PrismaModel>
        | null;
      notIn?:
        | Decimal[]
        | DecimalJsLike[]
        | number[]
        | string[]
        | ListDecimalFieldRefInput<$PrismaModel>
        | null;
      lt?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>;
      lte?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>;
      gt?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>;
      gte?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>;
      not?:
        | NestedDecimalNullableWithAggregatesFilter<$PrismaModel>
        | Decimal
        | DecimalJsLike
        | number
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _avg?: NestedDecimalNullableFilter<$PrismaModel>;
      _sum?: NestedDecimalNullableFilter<$PrismaModel>;
      _min?: NestedDecimalNullableFilter<$PrismaModel>;
      _max?: NestedDecimalNullableFilter<$PrismaModel>;
    };
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<NestedJsonFilterBase<$PrismaModel>>,
          Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>
        >,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>;

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type InventoryCreateWithoutProductInput = {
    location?: string;
    stockOnHand: number;
    reserved?: number;
  };

  export type InventoryUncheckedCreateWithoutProductInput = {
    location?: string;
    stockOnHand: number;
    reserved?: number;
  };

  export type InventoryCreateOrConnectWithoutProductInput = {
    where: InventoryWhereUniqueInput;
    create: XOR<
      InventoryCreateWithoutProductInput,
      InventoryUncheckedCreateWithoutProductInput
    >;
  };

  export type InventoryCreateManyProductInputEnvelope = {
    data: InventoryCreateManyProductInput | InventoryCreateManyProductInput[];
    skipDuplicates?: boolean;
  };

  export type PriceHistoryCreateWithoutProductInput = {
    id?: bigint | number;
    price: Decimal | DecimalJsLike | number | string;
    markdownPct?: Decimal | DecimalJsLike | number | string;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
  };

  export type PriceHistoryUncheckedCreateWithoutProductInput = {
    id?: bigint | number;
    price: Decimal | DecimalJsLike | number | string;
    markdownPct?: Decimal | DecimalJsLike | number | string;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
  };

  export type PriceHistoryCreateOrConnectWithoutProductInput = {
    where: PriceHistoryWhereUniqueInput;
    create: XOR<
      PriceHistoryCreateWithoutProductInput,
      PriceHistoryUncheckedCreateWithoutProductInput
    >;
  };

  export type PriceHistoryCreateManyProductInputEnvelope = {
    data:
      | PriceHistoryCreateManyProductInput
      | PriceHistoryCreateManyProductInput[];
    skipDuplicates?: boolean;
  };

  export type SalesDailyCreateWithoutProductInput = {
    saleDate: Date | string;
    unitsSold: number;
    avgUnitPrice: Decimal | DecimalJsLike | number | string;
    promoFlag?: boolean;
  };

  export type SalesDailyUncheckedCreateWithoutProductInput = {
    saleDate: Date | string;
    unitsSold: number;
    avgUnitPrice: Decimal | DecimalJsLike | number | string;
    promoFlag?: boolean;
  };

  export type SalesDailyCreateOrConnectWithoutProductInput = {
    where: SalesDailyWhereUniqueInput;
    create: XOR<
      SalesDailyCreateWithoutProductInput,
      SalesDailyUncheckedCreateWithoutProductInput
    >;
  };

  export type SalesDailyCreateManyProductInputEnvelope = {
    data: SalesDailyCreateManyProductInput | SalesDailyCreateManyProductInput[];
    skipDuplicates?: boolean;
  };

  export type ElasticityEstimateCreateWithoutProductInput = {
    elasticity: Decimal | DecimalJsLike | number | string;
    method: string;
    sampleSize?: number | null;
    confidence?: Decimal | DecimalJsLike | number | string | null;
    lastUpdated?: Date | string;
  };

  export type ElasticityEstimateUncheckedCreateWithoutProductInput = {
    elasticity: Decimal | DecimalJsLike | number | string;
    method: string;
    sampleSize?: number | null;
    confidence?: Decimal | DecimalJsLike | number | string | null;
    lastUpdated?: Date | string;
  };

  export type ElasticityEstimateCreateOrConnectWithoutProductInput = {
    where: ElasticityEstimateWhereUniqueInput;
    create: XOR<
      ElasticityEstimateCreateWithoutProductInput,
      ElasticityEstimateUncheckedCreateWithoutProductInput
    >;
  };

  export type CompetitorPriceCreateWithoutProductInput = {
    priceDate: Date | string;
    price: Decimal | DecimalJsLike | number | string;
    competitor: CompetitorCreateNestedOneWithoutPricesInput;
  };

  export type CompetitorPriceUncheckedCreateWithoutProductInput = {
    competitorId: bigint | number;
    priceDate: Date | string;
    price: Decimal | DecimalJsLike | number | string;
  };

  export type CompetitorPriceCreateOrConnectWithoutProductInput = {
    where: CompetitorPriceWhereUniqueInput;
    create: XOR<
      CompetitorPriceCreateWithoutProductInput,
      CompetitorPriceUncheckedCreateWithoutProductInput
    >;
  };

  export type CompetitorPriceCreateManyProductInputEnvelope = {
    data:
      | CompetitorPriceCreateManyProductInput
      | CompetitorPriceCreateManyProductInput[];
    skipDuplicates?: boolean;
  };

  export type MarkdownEvaluationCreateWithoutProductInput = {
    id?: bigint | number;
    evaluatedAt?: Date | string;
    baselinePrice: Decimal | DecimalJsLike | number | string;
    baselineExpectedUnits: number;
    baselineExpectedProfit: Decimal | DecimalJsLike | number | string;
    markdownPct: Decimal | DecimalJsLike | number | string;
    candidatePrice: Decimal | DecimalJsLike | number | string;
    expectedUnits: number;
    expectedProfit: Decimal | DecimalJsLike | number | string;
    expectedDaysToSell?: number | null;
    expectedUnsoldUnits?: number | null;
    isOptimal?: boolean;
  };

  export type MarkdownEvaluationUncheckedCreateWithoutProductInput = {
    id?: bigint | number;
    evaluatedAt?: Date | string;
    baselinePrice: Decimal | DecimalJsLike | number | string;
    baselineExpectedUnits: number;
    baselineExpectedProfit: Decimal | DecimalJsLike | number | string;
    markdownPct: Decimal | DecimalJsLike | number | string;
    candidatePrice: Decimal | DecimalJsLike | number | string;
    expectedUnits: number;
    expectedProfit: Decimal | DecimalJsLike | number | string;
    expectedDaysToSell?: number | null;
    expectedUnsoldUnits?: number | null;
    isOptimal?: boolean;
  };

  export type MarkdownEvaluationCreateOrConnectWithoutProductInput = {
    where: MarkdownEvaluationWhereUniqueInput;
    create: XOR<
      MarkdownEvaluationCreateWithoutProductInput,
      MarkdownEvaluationUncheckedCreateWithoutProductInput
    >;
  };

  export type MarkdownEvaluationCreateManyProductInputEnvelope = {
    data:
      | MarkdownEvaluationCreateManyProductInput
      | MarkdownEvaluationCreateManyProductInput[];
    skipDuplicates?: boolean;
  };

  export type MarkdownActionLogCreateWithoutProductInput = {
    id?: bigint | number;
    executedAt?: Date | string;
    beforePrice: Decimal | DecimalJsLike | number | string;
    afterPrice: Decimal | DecimalJsLike | number | string;
    stockAtAction: number;
    expectedProfit: Decimal | DecimalJsLike | number | string;
    baselineProfit: Decimal | DecimalJsLike | number | string;
    deltaExpectedProfit: Decimal | DecimalJsLike | number | string;
    notes?: string | null;
    outcomes?: ActionOutcomeCreateNestedManyWithoutActionInput;
  };

  export type MarkdownActionLogUncheckedCreateWithoutProductInput = {
    id?: bigint | number;
    executedAt?: Date | string;
    beforePrice: Decimal | DecimalJsLike | number | string;
    afterPrice: Decimal | DecimalJsLike | number | string;
    stockAtAction: number;
    expectedProfit: Decimal | DecimalJsLike | number | string;
    baselineProfit: Decimal | DecimalJsLike | number | string;
    deltaExpectedProfit: Decimal | DecimalJsLike | number | string;
    notes?: string | null;
    outcomes?: ActionOutcomeUncheckedCreateNestedManyWithoutActionInput;
  };

  export type MarkdownActionLogCreateOrConnectWithoutProductInput = {
    where: MarkdownActionLogWhereUniqueInput;
    create: XOR<
      MarkdownActionLogCreateWithoutProductInput,
      MarkdownActionLogUncheckedCreateWithoutProductInput
    >;
  };

  export type MarkdownActionLogCreateManyProductInputEnvelope = {
    data:
      | MarkdownActionLogCreateManyProductInput
      | MarkdownActionLogCreateManyProductInput[];
    skipDuplicates?: boolean;
  };

  export type InventoryUpsertWithWhereUniqueWithoutProductInput = {
    where: InventoryWhereUniqueInput;
    update: XOR<
      InventoryUpdateWithoutProductInput,
      InventoryUncheckedUpdateWithoutProductInput
    >;
    create: XOR<
      InventoryCreateWithoutProductInput,
      InventoryUncheckedCreateWithoutProductInput
    >;
  };

  export type InventoryUpdateWithWhereUniqueWithoutProductInput = {
    where: InventoryWhereUniqueInput;
    data: XOR<
      InventoryUpdateWithoutProductInput,
      InventoryUncheckedUpdateWithoutProductInput
    >;
  };

  export type InventoryUpdateManyWithWhereWithoutProductInput = {
    where: InventoryScalarWhereInput;
    data: XOR<
      InventoryUpdateManyMutationInput,
      InventoryUncheckedUpdateManyWithoutProductInput
    >;
  };

  export type InventoryScalarWhereInput = {
    AND?: InventoryScalarWhereInput | InventoryScalarWhereInput[];
    OR?: InventoryScalarWhereInput[];
    NOT?: InventoryScalarWhereInput | InventoryScalarWhereInput[];
    productId?: BigIntFilter<'Inventory'> | bigint | number;
    location?: StringFilter<'Inventory'> | string;
    stockOnHand?: IntFilter<'Inventory'> | number;
    reserved?: IntFilter<'Inventory'> | number;
  };

  export type PriceHistoryUpsertWithWhereUniqueWithoutProductInput = {
    where: PriceHistoryWhereUniqueInput;
    update: XOR<
      PriceHistoryUpdateWithoutProductInput,
      PriceHistoryUncheckedUpdateWithoutProductInput
    >;
    create: XOR<
      PriceHistoryCreateWithoutProductInput,
      PriceHistoryUncheckedCreateWithoutProductInput
    >;
  };

  export type PriceHistoryUpdateWithWhereUniqueWithoutProductInput = {
    where: PriceHistoryWhereUniqueInput;
    data: XOR<
      PriceHistoryUpdateWithoutProductInput,
      PriceHistoryUncheckedUpdateWithoutProductInput
    >;
  };

  export type PriceHistoryUpdateManyWithWhereWithoutProductInput = {
    where: PriceHistoryScalarWhereInput;
    data: XOR<
      PriceHistoryUpdateManyMutationInput,
      PriceHistoryUncheckedUpdateManyWithoutProductInput
    >;
  };

  export type PriceHistoryScalarWhereInput = {
    AND?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[];
    OR?: PriceHistoryScalarWhereInput[];
    NOT?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[];
    id?: BigIntFilter<'PriceHistory'> | bigint | number;
    productId?: BigIntFilter<'PriceHistory'> | bigint | number;
    price?:
      | DecimalFilter<'PriceHistory'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    markdownPct?:
      | DecimalFilter<'PriceHistory'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    startedAt?: DateTimeFilter<'PriceHistory'> | Date | string;
    endedAt?: DateTimeNullableFilter<'PriceHistory'> | Date | string | null;
  };

  export type SalesDailyUpsertWithWhereUniqueWithoutProductInput = {
    where: SalesDailyWhereUniqueInput;
    update: XOR<
      SalesDailyUpdateWithoutProductInput,
      SalesDailyUncheckedUpdateWithoutProductInput
    >;
    create: XOR<
      SalesDailyCreateWithoutProductInput,
      SalesDailyUncheckedCreateWithoutProductInput
    >;
  };

  export type SalesDailyUpdateWithWhereUniqueWithoutProductInput = {
    where: SalesDailyWhereUniqueInput;
    data: XOR<
      SalesDailyUpdateWithoutProductInput,
      SalesDailyUncheckedUpdateWithoutProductInput
    >;
  };

  export type SalesDailyUpdateManyWithWhereWithoutProductInput = {
    where: SalesDailyScalarWhereInput;
    data: XOR<
      SalesDailyUpdateManyMutationInput,
      SalesDailyUncheckedUpdateManyWithoutProductInput
    >;
  };

  export type SalesDailyScalarWhereInput = {
    AND?: SalesDailyScalarWhereInput | SalesDailyScalarWhereInput[];
    OR?: SalesDailyScalarWhereInput[];
    NOT?: SalesDailyScalarWhereInput | SalesDailyScalarWhereInput[];
    productId?: BigIntFilter<'SalesDaily'> | bigint | number;
    saleDate?: DateTimeFilter<'SalesDaily'> | Date | string;
    unitsSold?: IntFilter<'SalesDaily'> | number;
    avgUnitPrice?:
      | DecimalFilter<'SalesDaily'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    promoFlag?: BoolFilter<'SalesDaily'> | boolean;
  };

  export type ElasticityEstimateUpsertWithoutProductInput = {
    update: XOR<
      ElasticityEstimateUpdateWithoutProductInput,
      ElasticityEstimateUncheckedUpdateWithoutProductInput
    >;
    create: XOR<
      ElasticityEstimateCreateWithoutProductInput,
      ElasticityEstimateUncheckedCreateWithoutProductInput
    >;
    where?: ElasticityEstimateWhereInput;
  };

  export type ElasticityEstimateUpdateToOneWithWhereWithoutProductInput = {
    where?: ElasticityEstimateWhereInput;
    data: XOR<
      ElasticityEstimateUpdateWithoutProductInput,
      ElasticityEstimateUncheckedUpdateWithoutProductInput
    >;
  };

  export type ElasticityEstimateUpdateWithoutProductInput = {
    elasticity?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    method?: StringFieldUpdateOperationsInput | string;
    sampleSize?: NullableIntFieldUpdateOperationsInput | number | null;
    confidence?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ElasticityEstimateUncheckedUpdateWithoutProductInput = {
    elasticity?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    method?: StringFieldUpdateOperationsInput | string;
    sampleSize?: NullableIntFieldUpdateOperationsInput | number | null;
    confidence?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CompetitorPriceUpsertWithWhereUniqueWithoutProductInput = {
    where: CompetitorPriceWhereUniqueInput;
    update: XOR<
      CompetitorPriceUpdateWithoutProductInput,
      CompetitorPriceUncheckedUpdateWithoutProductInput
    >;
    create: XOR<
      CompetitorPriceCreateWithoutProductInput,
      CompetitorPriceUncheckedCreateWithoutProductInput
    >;
  };

  export type CompetitorPriceUpdateWithWhereUniqueWithoutProductInput = {
    where: CompetitorPriceWhereUniqueInput;
    data: XOR<
      CompetitorPriceUpdateWithoutProductInput,
      CompetitorPriceUncheckedUpdateWithoutProductInput
    >;
  };

  export type CompetitorPriceUpdateManyWithWhereWithoutProductInput = {
    where: CompetitorPriceScalarWhereInput;
    data: XOR<
      CompetitorPriceUpdateManyMutationInput,
      CompetitorPriceUncheckedUpdateManyWithoutProductInput
    >;
  };

  export type CompetitorPriceScalarWhereInput = {
    AND?: CompetitorPriceScalarWhereInput | CompetitorPriceScalarWhereInput[];
    OR?: CompetitorPriceScalarWhereInput[];
    NOT?: CompetitorPriceScalarWhereInput | CompetitorPriceScalarWhereInput[];
    competitorId?: BigIntFilter<'CompetitorPrice'> | bigint | number;
    productId?: BigIntFilter<'CompetitorPrice'> | bigint | number;
    priceDate?: DateTimeFilter<'CompetitorPrice'> | Date | string;
    price?:
      | DecimalFilter<'CompetitorPrice'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type MarkdownEvaluationUpsertWithWhereUniqueWithoutProductInput = {
    where: MarkdownEvaluationWhereUniqueInput;
    update: XOR<
      MarkdownEvaluationUpdateWithoutProductInput,
      MarkdownEvaluationUncheckedUpdateWithoutProductInput
    >;
    create: XOR<
      MarkdownEvaluationCreateWithoutProductInput,
      MarkdownEvaluationUncheckedCreateWithoutProductInput
    >;
  };

  export type MarkdownEvaluationUpdateWithWhereUniqueWithoutProductInput = {
    where: MarkdownEvaluationWhereUniqueInput;
    data: XOR<
      MarkdownEvaluationUpdateWithoutProductInput,
      MarkdownEvaluationUncheckedUpdateWithoutProductInput
    >;
  };

  export type MarkdownEvaluationUpdateManyWithWhereWithoutProductInput = {
    where: MarkdownEvaluationScalarWhereInput;
    data: XOR<
      MarkdownEvaluationUpdateManyMutationInput,
      MarkdownEvaluationUncheckedUpdateManyWithoutProductInput
    >;
  };

  export type MarkdownEvaluationScalarWhereInput = {
    AND?:
      | MarkdownEvaluationScalarWhereInput
      | MarkdownEvaluationScalarWhereInput[];
    OR?: MarkdownEvaluationScalarWhereInput[];
    NOT?:
      | MarkdownEvaluationScalarWhereInput
      | MarkdownEvaluationScalarWhereInput[];
    id?: BigIntFilter<'MarkdownEvaluation'> | bigint | number;
    productId?: BigIntFilter<'MarkdownEvaluation'> | bigint | number;
    evaluatedAt?: DateTimeFilter<'MarkdownEvaluation'> | Date | string;
    baselinePrice?:
      | DecimalFilter<'MarkdownEvaluation'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    baselineExpectedUnits?: IntFilter<'MarkdownEvaluation'> | number;
    baselineExpectedProfit?:
      | DecimalFilter<'MarkdownEvaluation'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    markdownPct?:
      | DecimalFilter<'MarkdownEvaluation'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    candidatePrice?:
      | DecimalFilter<'MarkdownEvaluation'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    expectedUnits?: IntFilter<'MarkdownEvaluation'> | number;
    expectedProfit?:
      | DecimalFilter<'MarkdownEvaluation'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    expectedDaysToSell?:
      | IntNullableFilter<'MarkdownEvaluation'>
      | number
      | null;
    expectedUnsoldUnits?:
      | IntNullableFilter<'MarkdownEvaluation'>
      | number
      | null;
    isOptimal?: BoolFilter<'MarkdownEvaluation'> | boolean;
  };

  export type MarkdownActionLogUpsertWithWhereUniqueWithoutProductInput = {
    where: MarkdownActionLogWhereUniqueInput;
    update: XOR<
      MarkdownActionLogUpdateWithoutProductInput,
      MarkdownActionLogUncheckedUpdateWithoutProductInput
    >;
    create: XOR<
      MarkdownActionLogCreateWithoutProductInput,
      MarkdownActionLogUncheckedCreateWithoutProductInput
    >;
  };

  export type MarkdownActionLogUpdateWithWhereUniqueWithoutProductInput = {
    where: MarkdownActionLogWhereUniqueInput;
    data: XOR<
      MarkdownActionLogUpdateWithoutProductInput,
      MarkdownActionLogUncheckedUpdateWithoutProductInput
    >;
  };

  export type MarkdownActionLogUpdateManyWithWhereWithoutProductInput = {
    where: MarkdownActionLogScalarWhereInput;
    data: XOR<
      MarkdownActionLogUpdateManyMutationInput,
      MarkdownActionLogUncheckedUpdateManyWithoutProductInput
    >;
  };

  export type MarkdownActionLogScalarWhereInput = {
    AND?:
      | MarkdownActionLogScalarWhereInput
      | MarkdownActionLogScalarWhereInput[];
    OR?: MarkdownActionLogScalarWhereInput[];
    NOT?:
      | MarkdownActionLogScalarWhereInput
      | MarkdownActionLogScalarWhereInput[];
    id?: BigIntFilter<'MarkdownActionLog'> | bigint | number;
    productId?: BigIntFilter<'MarkdownActionLog'> | bigint | number;
    executedAt?: DateTimeFilter<'MarkdownActionLog'> | Date | string;
    beforePrice?:
      | DecimalFilter<'MarkdownActionLog'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    afterPrice?:
      | DecimalFilter<'MarkdownActionLog'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    stockAtAction?: IntFilter<'MarkdownActionLog'> | number;
    expectedProfit?:
      | DecimalFilter<'MarkdownActionLog'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    baselineProfit?:
      | DecimalFilter<'MarkdownActionLog'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    deltaExpectedProfit?:
      | DecimalFilter<'MarkdownActionLog'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    notes?: StringNullableFilter<'MarkdownActionLog'> | string | null;
  };

  export type ProductCreateWithoutInventoriesInput = {
    id?: bigint | number;
    sku: string;
    name: string;
    category?: string | null;
    brand?: string | null;
    unitCost: Decimal | DecimalJsLike | number | string;
    basePrice: Decimal | DecimalJsLike | number | string;
    currentPrice: Decimal | DecimalJsLike | number | string;
    holdingCostPerUnitPerDay?: Decimal | DecimalJsLike | number | string;
    clearanceEndDate: Date | string;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    priceHistories?: PriceHistoryCreateNestedManyWithoutProductInput;
    sales?: SalesDailyCreateNestedManyWithoutProductInput;
    elasticityEstimate?: ElasticityEstimateCreateNestedOneWithoutProductInput;
    competitorPrices?: CompetitorPriceCreateNestedManyWithoutProductInput;
    markdownEvaluations?: MarkdownEvaluationCreateNestedManyWithoutProductInput;
    markdownActions?: MarkdownActionLogCreateNestedManyWithoutProductInput;
  };

  export type ProductUncheckedCreateWithoutInventoriesInput = {
    id?: bigint | number;
    sku: string;
    name: string;
    category?: string | null;
    brand?: string | null;
    unitCost: Decimal | DecimalJsLike | number | string;
    basePrice: Decimal | DecimalJsLike | number | string;
    currentPrice: Decimal | DecimalJsLike | number | string;
    holdingCostPerUnitPerDay?: Decimal | DecimalJsLike | number | string;
    clearanceEndDate: Date | string;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    priceHistories?: PriceHistoryUncheckedCreateNestedManyWithoutProductInput;
    sales?: SalesDailyUncheckedCreateNestedManyWithoutProductInput;
    elasticityEstimate?: ElasticityEstimateUncheckedCreateNestedOneWithoutProductInput;
    competitorPrices?: CompetitorPriceUncheckedCreateNestedManyWithoutProductInput;
    markdownEvaluations?: MarkdownEvaluationUncheckedCreateNestedManyWithoutProductInput;
    markdownActions?: MarkdownActionLogUncheckedCreateNestedManyWithoutProductInput;
  };

  export type ProductCreateOrConnectWithoutInventoriesInput = {
    where: ProductWhereUniqueInput;
    create: XOR<
      ProductCreateWithoutInventoriesInput,
      ProductUncheckedCreateWithoutInventoriesInput
    >;
  };

  export type ProductUpsertWithoutInventoriesInput = {
    update: XOR<
      ProductUpdateWithoutInventoriesInput,
      ProductUncheckedUpdateWithoutInventoriesInput
    >;
    create: XOR<
      ProductCreateWithoutInventoriesInput,
      ProductUncheckedCreateWithoutInventoriesInput
    >;
    where?: ProductWhereInput;
  };

  export type ProductUpdateToOneWithWhereWithoutInventoriesInput = {
    where?: ProductWhereInput;
    data: XOR<
      ProductUpdateWithoutInventoriesInput,
      ProductUncheckedUpdateWithoutInventoriesInput
    >;
  };

  export type ProductUpdateWithoutInventoriesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    sku?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    category?: NullableStringFieldUpdateOperationsInput | string | null;
    brand?: NullableStringFieldUpdateOperationsInput | string | null;
    unitCost?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    basePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currentPrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    holdingCostPerUnitPerDay?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    clearanceEndDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    priceHistories?: PriceHistoryUpdateManyWithoutProductNestedInput;
    sales?: SalesDailyUpdateManyWithoutProductNestedInput;
    elasticityEstimate?: ElasticityEstimateUpdateOneWithoutProductNestedInput;
    competitorPrices?: CompetitorPriceUpdateManyWithoutProductNestedInput;
    markdownEvaluations?: MarkdownEvaluationUpdateManyWithoutProductNestedInput;
    markdownActions?: MarkdownActionLogUpdateManyWithoutProductNestedInput;
  };

  export type ProductUncheckedUpdateWithoutInventoriesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    sku?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    category?: NullableStringFieldUpdateOperationsInput | string | null;
    brand?: NullableStringFieldUpdateOperationsInput | string | null;
    unitCost?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    basePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currentPrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    holdingCostPerUnitPerDay?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    clearanceEndDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    priceHistories?: PriceHistoryUncheckedUpdateManyWithoutProductNestedInput;
    sales?: SalesDailyUncheckedUpdateManyWithoutProductNestedInput;
    elasticityEstimate?: ElasticityEstimateUncheckedUpdateOneWithoutProductNestedInput;
    competitorPrices?: CompetitorPriceUncheckedUpdateManyWithoutProductNestedInput;
    markdownEvaluations?: MarkdownEvaluationUncheckedUpdateManyWithoutProductNestedInput;
    markdownActions?: MarkdownActionLogUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type ProductCreateWithoutPriceHistoriesInput = {
    id?: bigint | number;
    sku: string;
    name: string;
    category?: string | null;
    brand?: string | null;
    unitCost: Decimal | DecimalJsLike | number | string;
    basePrice: Decimal | DecimalJsLike | number | string;
    currentPrice: Decimal | DecimalJsLike | number | string;
    holdingCostPerUnitPerDay?: Decimal | DecimalJsLike | number | string;
    clearanceEndDate: Date | string;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    inventories?: InventoryCreateNestedManyWithoutProductInput;
    sales?: SalesDailyCreateNestedManyWithoutProductInput;
    elasticityEstimate?: ElasticityEstimateCreateNestedOneWithoutProductInput;
    competitorPrices?: CompetitorPriceCreateNestedManyWithoutProductInput;
    markdownEvaluations?: MarkdownEvaluationCreateNestedManyWithoutProductInput;
    markdownActions?: MarkdownActionLogCreateNestedManyWithoutProductInput;
  };

  export type ProductUncheckedCreateWithoutPriceHistoriesInput = {
    id?: bigint | number;
    sku: string;
    name: string;
    category?: string | null;
    brand?: string | null;
    unitCost: Decimal | DecimalJsLike | number | string;
    basePrice: Decimal | DecimalJsLike | number | string;
    currentPrice: Decimal | DecimalJsLike | number | string;
    holdingCostPerUnitPerDay?: Decimal | DecimalJsLike | number | string;
    clearanceEndDate: Date | string;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    inventories?: InventoryUncheckedCreateNestedManyWithoutProductInput;
    sales?: SalesDailyUncheckedCreateNestedManyWithoutProductInput;
    elasticityEstimate?: ElasticityEstimateUncheckedCreateNestedOneWithoutProductInput;
    competitorPrices?: CompetitorPriceUncheckedCreateNestedManyWithoutProductInput;
    markdownEvaluations?: MarkdownEvaluationUncheckedCreateNestedManyWithoutProductInput;
    markdownActions?: MarkdownActionLogUncheckedCreateNestedManyWithoutProductInput;
  };

  export type ProductCreateOrConnectWithoutPriceHistoriesInput = {
    where: ProductWhereUniqueInput;
    create: XOR<
      ProductCreateWithoutPriceHistoriesInput,
      ProductUncheckedCreateWithoutPriceHistoriesInput
    >;
  };

  export type ProductUpsertWithoutPriceHistoriesInput = {
    update: XOR<
      ProductUpdateWithoutPriceHistoriesInput,
      ProductUncheckedUpdateWithoutPriceHistoriesInput
    >;
    create: XOR<
      ProductCreateWithoutPriceHistoriesInput,
      ProductUncheckedCreateWithoutPriceHistoriesInput
    >;
    where?: ProductWhereInput;
  };

  export type ProductUpdateToOneWithWhereWithoutPriceHistoriesInput = {
    where?: ProductWhereInput;
    data: XOR<
      ProductUpdateWithoutPriceHistoriesInput,
      ProductUncheckedUpdateWithoutPriceHistoriesInput
    >;
  };

  export type ProductUpdateWithoutPriceHistoriesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    sku?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    category?: NullableStringFieldUpdateOperationsInput | string | null;
    brand?: NullableStringFieldUpdateOperationsInput | string | null;
    unitCost?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    basePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currentPrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    holdingCostPerUnitPerDay?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    clearanceEndDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventories?: InventoryUpdateManyWithoutProductNestedInput;
    sales?: SalesDailyUpdateManyWithoutProductNestedInput;
    elasticityEstimate?: ElasticityEstimateUpdateOneWithoutProductNestedInput;
    competitorPrices?: CompetitorPriceUpdateManyWithoutProductNestedInput;
    markdownEvaluations?: MarkdownEvaluationUpdateManyWithoutProductNestedInput;
    markdownActions?: MarkdownActionLogUpdateManyWithoutProductNestedInput;
  };

  export type ProductUncheckedUpdateWithoutPriceHistoriesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    sku?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    category?: NullableStringFieldUpdateOperationsInput | string | null;
    brand?: NullableStringFieldUpdateOperationsInput | string | null;
    unitCost?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    basePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currentPrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    holdingCostPerUnitPerDay?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    clearanceEndDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventories?: InventoryUncheckedUpdateManyWithoutProductNestedInput;
    sales?: SalesDailyUncheckedUpdateManyWithoutProductNestedInput;
    elasticityEstimate?: ElasticityEstimateUncheckedUpdateOneWithoutProductNestedInput;
    competitorPrices?: CompetitorPriceUncheckedUpdateManyWithoutProductNestedInput;
    markdownEvaluations?: MarkdownEvaluationUncheckedUpdateManyWithoutProductNestedInput;
    markdownActions?: MarkdownActionLogUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type ProductCreateWithoutSalesInput = {
    id?: bigint | number;
    sku: string;
    name: string;
    category?: string | null;
    brand?: string | null;
    unitCost: Decimal | DecimalJsLike | number | string;
    basePrice: Decimal | DecimalJsLike | number | string;
    currentPrice: Decimal | DecimalJsLike | number | string;
    holdingCostPerUnitPerDay?: Decimal | DecimalJsLike | number | string;
    clearanceEndDate: Date | string;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    inventories?: InventoryCreateNestedManyWithoutProductInput;
    priceHistories?: PriceHistoryCreateNestedManyWithoutProductInput;
    elasticityEstimate?: ElasticityEstimateCreateNestedOneWithoutProductInput;
    competitorPrices?: CompetitorPriceCreateNestedManyWithoutProductInput;
    markdownEvaluations?: MarkdownEvaluationCreateNestedManyWithoutProductInput;
    markdownActions?: MarkdownActionLogCreateNestedManyWithoutProductInput;
  };

  export type ProductUncheckedCreateWithoutSalesInput = {
    id?: bigint | number;
    sku: string;
    name: string;
    category?: string | null;
    brand?: string | null;
    unitCost: Decimal | DecimalJsLike | number | string;
    basePrice: Decimal | DecimalJsLike | number | string;
    currentPrice: Decimal | DecimalJsLike | number | string;
    holdingCostPerUnitPerDay?: Decimal | DecimalJsLike | number | string;
    clearanceEndDate: Date | string;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    inventories?: InventoryUncheckedCreateNestedManyWithoutProductInput;
    priceHistories?: PriceHistoryUncheckedCreateNestedManyWithoutProductInput;
    elasticityEstimate?: ElasticityEstimateUncheckedCreateNestedOneWithoutProductInput;
    competitorPrices?: CompetitorPriceUncheckedCreateNestedManyWithoutProductInput;
    markdownEvaluations?: MarkdownEvaluationUncheckedCreateNestedManyWithoutProductInput;
    markdownActions?: MarkdownActionLogUncheckedCreateNestedManyWithoutProductInput;
  };

  export type ProductCreateOrConnectWithoutSalesInput = {
    where: ProductWhereUniqueInput;
    create: XOR<
      ProductCreateWithoutSalesInput,
      ProductUncheckedCreateWithoutSalesInput
    >;
  };

  export type ProductUpsertWithoutSalesInput = {
    update: XOR<
      ProductUpdateWithoutSalesInput,
      ProductUncheckedUpdateWithoutSalesInput
    >;
    create: XOR<
      ProductCreateWithoutSalesInput,
      ProductUncheckedCreateWithoutSalesInput
    >;
    where?: ProductWhereInput;
  };

  export type ProductUpdateToOneWithWhereWithoutSalesInput = {
    where?: ProductWhereInput;
    data: XOR<
      ProductUpdateWithoutSalesInput,
      ProductUncheckedUpdateWithoutSalesInput
    >;
  };

  export type ProductUpdateWithoutSalesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    sku?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    category?: NullableStringFieldUpdateOperationsInput | string | null;
    brand?: NullableStringFieldUpdateOperationsInput | string | null;
    unitCost?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    basePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currentPrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    holdingCostPerUnitPerDay?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    clearanceEndDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventories?: InventoryUpdateManyWithoutProductNestedInput;
    priceHistories?: PriceHistoryUpdateManyWithoutProductNestedInput;
    elasticityEstimate?: ElasticityEstimateUpdateOneWithoutProductNestedInput;
    competitorPrices?: CompetitorPriceUpdateManyWithoutProductNestedInput;
    markdownEvaluations?: MarkdownEvaluationUpdateManyWithoutProductNestedInput;
    markdownActions?: MarkdownActionLogUpdateManyWithoutProductNestedInput;
  };

  export type ProductUncheckedUpdateWithoutSalesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    sku?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    category?: NullableStringFieldUpdateOperationsInput | string | null;
    brand?: NullableStringFieldUpdateOperationsInput | string | null;
    unitCost?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    basePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currentPrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    holdingCostPerUnitPerDay?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    clearanceEndDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventories?: InventoryUncheckedUpdateManyWithoutProductNestedInput;
    priceHistories?: PriceHistoryUncheckedUpdateManyWithoutProductNestedInput;
    elasticityEstimate?: ElasticityEstimateUncheckedUpdateOneWithoutProductNestedInput;
    competitorPrices?: CompetitorPriceUncheckedUpdateManyWithoutProductNestedInput;
    markdownEvaluations?: MarkdownEvaluationUncheckedUpdateManyWithoutProductNestedInput;
    markdownActions?: MarkdownActionLogUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type ProductCreateWithoutElasticityEstimateInput = {
    id?: bigint | number;
    sku: string;
    name: string;
    category?: string | null;
    brand?: string | null;
    unitCost: Decimal | DecimalJsLike | number | string;
    basePrice: Decimal | DecimalJsLike | number | string;
    currentPrice: Decimal | DecimalJsLike | number | string;
    holdingCostPerUnitPerDay?: Decimal | DecimalJsLike | number | string;
    clearanceEndDate: Date | string;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    inventories?: InventoryCreateNestedManyWithoutProductInput;
    priceHistories?: PriceHistoryCreateNestedManyWithoutProductInput;
    sales?: SalesDailyCreateNestedManyWithoutProductInput;
    competitorPrices?: CompetitorPriceCreateNestedManyWithoutProductInput;
    markdownEvaluations?: MarkdownEvaluationCreateNestedManyWithoutProductInput;
    markdownActions?: MarkdownActionLogCreateNestedManyWithoutProductInput;
  };

  export type ProductUncheckedCreateWithoutElasticityEstimateInput = {
    id?: bigint | number;
    sku: string;
    name: string;
    category?: string | null;
    brand?: string | null;
    unitCost: Decimal | DecimalJsLike | number | string;
    basePrice: Decimal | DecimalJsLike | number | string;
    currentPrice: Decimal | DecimalJsLike | number | string;
    holdingCostPerUnitPerDay?: Decimal | DecimalJsLike | number | string;
    clearanceEndDate: Date | string;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    inventories?: InventoryUncheckedCreateNestedManyWithoutProductInput;
    priceHistories?: PriceHistoryUncheckedCreateNestedManyWithoutProductInput;
    sales?: SalesDailyUncheckedCreateNestedManyWithoutProductInput;
    competitorPrices?: CompetitorPriceUncheckedCreateNestedManyWithoutProductInput;
    markdownEvaluations?: MarkdownEvaluationUncheckedCreateNestedManyWithoutProductInput;
    markdownActions?: MarkdownActionLogUncheckedCreateNestedManyWithoutProductInput;
  };

  export type ProductCreateOrConnectWithoutElasticityEstimateInput = {
    where: ProductWhereUniqueInput;
    create: XOR<
      ProductCreateWithoutElasticityEstimateInput,
      ProductUncheckedCreateWithoutElasticityEstimateInput
    >;
  };

  export type ProductUpsertWithoutElasticityEstimateInput = {
    update: XOR<
      ProductUpdateWithoutElasticityEstimateInput,
      ProductUncheckedUpdateWithoutElasticityEstimateInput
    >;
    create: XOR<
      ProductCreateWithoutElasticityEstimateInput,
      ProductUncheckedCreateWithoutElasticityEstimateInput
    >;
    where?: ProductWhereInput;
  };

  export type ProductUpdateToOneWithWhereWithoutElasticityEstimateInput = {
    where?: ProductWhereInput;
    data: XOR<
      ProductUpdateWithoutElasticityEstimateInput,
      ProductUncheckedUpdateWithoutElasticityEstimateInput
    >;
  };

  export type ProductUpdateWithoutElasticityEstimateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    sku?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    category?: NullableStringFieldUpdateOperationsInput | string | null;
    brand?: NullableStringFieldUpdateOperationsInput | string | null;
    unitCost?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    basePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currentPrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    holdingCostPerUnitPerDay?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    clearanceEndDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventories?: InventoryUpdateManyWithoutProductNestedInput;
    priceHistories?: PriceHistoryUpdateManyWithoutProductNestedInput;
    sales?: SalesDailyUpdateManyWithoutProductNestedInput;
    competitorPrices?: CompetitorPriceUpdateManyWithoutProductNestedInput;
    markdownEvaluations?: MarkdownEvaluationUpdateManyWithoutProductNestedInput;
    markdownActions?: MarkdownActionLogUpdateManyWithoutProductNestedInput;
  };

  export type ProductUncheckedUpdateWithoutElasticityEstimateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    sku?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    category?: NullableStringFieldUpdateOperationsInput | string | null;
    brand?: NullableStringFieldUpdateOperationsInput | string | null;
    unitCost?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    basePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currentPrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    holdingCostPerUnitPerDay?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    clearanceEndDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventories?: InventoryUncheckedUpdateManyWithoutProductNestedInput;
    priceHistories?: PriceHistoryUncheckedUpdateManyWithoutProductNestedInput;
    sales?: SalesDailyUncheckedUpdateManyWithoutProductNestedInput;
    competitorPrices?: CompetitorPriceUncheckedUpdateManyWithoutProductNestedInput;
    markdownEvaluations?: MarkdownEvaluationUncheckedUpdateManyWithoutProductNestedInput;
    markdownActions?: MarkdownActionLogUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type CompetitorPriceCreateWithoutCompetitorInput = {
    priceDate: Date | string;
    price: Decimal | DecimalJsLike | number | string;
    product: ProductCreateNestedOneWithoutCompetitorPricesInput;
  };

  export type CompetitorPriceUncheckedCreateWithoutCompetitorInput = {
    productId: bigint | number;
    priceDate: Date | string;
    price: Decimal | DecimalJsLike | number | string;
  };

  export type CompetitorPriceCreateOrConnectWithoutCompetitorInput = {
    where: CompetitorPriceWhereUniqueInput;
    create: XOR<
      CompetitorPriceCreateWithoutCompetitorInput,
      CompetitorPriceUncheckedCreateWithoutCompetitorInput
    >;
  };

  export type CompetitorPriceCreateManyCompetitorInputEnvelope = {
    data:
      | CompetitorPriceCreateManyCompetitorInput
      | CompetitorPriceCreateManyCompetitorInput[];
    skipDuplicates?: boolean;
  };

  export type CompetitorPriceUpsertWithWhereUniqueWithoutCompetitorInput = {
    where: CompetitorPriceWhereUniqueInput;
    update: XOR<
      CompetitorPriceUpdateWithoutCompetitorInput,
      CompetitorPriceUncheckedUpdateWithoutCompetitorInput
    >;
    create: XOR<
      CompetitorPriceCreateWithoutCompetitorInput,
      CompetitorPriceUncheckedCreateWithoutCompetitorInput
    >;
  };

  export type CompetitorPriceUpdateWithWhereUniqueWithoutCompetitorInput = {
    where: CompetitorPriceWhereUniqueInput;
    data: XOR<
      CompetitorPriceUpdateWithoutCompetitorInput,
      CompetitorPriceUncheckedUpdateWithoutCompetitorInput
    >;
  };

  export type CompetitorPriceUpdateManyWithWhereWithoutCompetitorInput = {
    where: CompetitorPriceScalarWhereInput;
    data: XOR<
      CompetitorPriceUpdateManyMutationInput,
      CompetitorPriceUncheckedUpdateManyWithoutCompetitorInput
    >;
  };

  export type CompetitorCreateWithoutPricesInput = {
    id?: bigint | number;
    name: string;
    url?: string | null;
  };

  export type CompetitorUncheckedCreateWithoutPricesInput = {
    id?: bigint | number;
    name: string;
    url?: string | null;
  };

  export type CompetitorCreateOrConnectWithoutPricesInput = {
    where: CompetitorWhereUniqueInput;
    create: XOR<
      CompetitorCreateWithoutPricesInput,
      CompetitorUncheckedCreateWithoutPricesInput
    >;
  };

  export type ProductCreateWithoutCompetitorPricesInput = {
    id?: bigint | number;
    sku: string;
    name: string;
    category?: string | null;
    brand?: string | null;
    unitCost: Decimal | DecimalJsLike | number | string;
    basePrice: Decimal | DecimalJsLike | number | string;
    currentPrice: Decimal | DecimalJsLike | number | string;
    holdingCostPerUnitPerDay?: Decimal | DecimalJsLike | number | string;
    clearanceEndDate: Date | string;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    inventories?: InventoryCreateNestedManyWithoutProductInput;
    priceHistories?: PriceHistoryCreateNestedManyWithoutProductInput;
    sales?: SalesDailyCreateNestedManyWithoutProductInput;
    elasticityEstimate?: ElasticityEstimateCreateNestedOneWithoutProductInput;
    markdownEvaluations?: MarkdownEvaluationCreateNestedManyWithoutProductInput;
    markdownActions?: MarkdownActionLogCreateNestedManyWithoutProductInput;
  };

  export type ProductUncheckedCreateWithoutCompetitorPricesInput = {
    id?: bigint | number;
    sku: string;
    name: string;
    category?: string | null;
    brand?: string | null;
    unitCost: Decimal | DecimalJsLike | number | string;
    basePrice: Decimal | DecimalJsLike | number | string;
    currentPrice: Decimal | DecimalJsLike | number | string;
    holdingCostPerUnitPerDay?: Decimal | DecimalJsLike | number | string;
    clearanceEndDate: Date | string;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    inventories?: InventoryUncheckedCreateNestedManyWithoutProductInput;
    priceHistories?: PriceHistoryUncheckedCreateNestedManyWithoutProductInput;
    sales?: SalesDailyUncheckedCreateNestedManyWithoutProductInput;
    elasticityEstimate?: ElasticityEstimateUncheckedCreateNestedOneWithoutProductInput;
    markdownEvaluations?: MarkdownEvaluationUncheckedCreateNestedManyWithoutProductInput;
    markdownActions?: MarkdownActionLogUncheckedCreateNestedManyWithoutProductInput;
  };

  export type ProductCreateOrConnectWithoutCompetitorPricesInput = {
    where: ProductWhereUniqueInput;
    create: XOR<
      ProductCreateWithoutCompetitorPricesInput,
      ProductUncheckedCreateWithoutCompetitorPricesInput
    >;
  };

  export type CompetitorUpsertWithoutPricesInput = {
    update: XOR<
      CompetitorUpdateWithoutPricesInput,
      CompetitorUncheckedUpdateWithoutPricesInput
    >;
    create: XOR<
      CompetitorCreateWithoutPricesInput,
      CompetitorUncheckedCreateWithoutPricesInput
    >;
    where?: CompetitorWhereInput;
  };

  export type CompetitorUpdateToOneWithWhereWithoutPricesInput = {
    where?: CompetitorWhereInput;
    data: XOR<
      CompetitorUpdateWithoutPricesInput,
      CompetitorUncheckedUpdateWithoutPricesInput
    >;
  };

  export type CompetitorUpdateWithoutPricesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    name?: StringFieldUpdateOperationsInput | string;
    url?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type CompetitorUncheckedUpdateWithoutPricesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    name?: StringFieldUpdateOperationsInput | string;
    url?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type ProductUpsertWithoutCompetitorPricesInput = {
    update: XOR<
      ProductUpdateWithoutCompetitorPricesInput,
      ProductUncheckedUpdateWithoutCompetitorPricesInput
    >;
    create: XOR<
      ProductCreateWithoutCompetitorPricesInput,
      ProductUncheckedCreateWithoutCompetitorPricesInput
    >;
    where?: ProductWhereInput;
  };

  export type ProductUpdateToOneWithWhereWithoutCompetitorPricesInput = {
    where?: ProductWhereInput;
    data: XOR<
      ProductUpdateWithoutCompetitorPricesInput,
      ProductUncheckedUpdateWithoutCompetitorPricesInput
    >;
  };

  export type ProductUpdateWithoutCompetitorPricesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    sku?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    category?: NullableStringFieldUpdateOperationsInput | string | null;
    brand?: NullableStringFieldUpdateOperationsInput | string | null;
    unitCost?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    basePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currentPrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    holdingCostPerUnitPerDay?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    clearanceEndDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventories?: InventoryUpdateManyWithoutProductNestedInput;
    priceHistories?: PriceHistoryUpdateManyWithoutProductNestedInput;
    sales?: SalesDailyUpdateManyWithoutProductNestedInput;
    elasticityEstimate?: ElasticityEstimateUpdateOneWithoutProductNestedInput;
    markdownEvaluations?: MarkdownEvaluationUpdateManyWithoutProductNestedInput;
    markdownActions?: MarkdownActionLogUpdateManyWithoutProductNestedInput;
  };

  export type ProductUncheckedUpdateWithoutCompetitorPricesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    sku?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    category?: NullableStringFieldUpdateOperationsInput | string | null;
    brand?: NullableStringFieldUpdateOperationsInput | string | null;
    unitCost?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    basePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currentPrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    holdingCostPerUnitPerDay?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    clearanceEndDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventories?: InventoryUncheckedUpdateManyWithoutProductNestedInput;
    priceHistories?: PriceHistoryUncheckedUpdateManyWithoutProductNestedInput;
    sales?: SalesDailyUncheckedUpdateManyWithoutProductNestedInput;
    elasticityEstimate?: ElasticityEstimateUncheckedUpdateOneWithoutProductNestedInput;
    markdownEvaluations?: MarkdownEvaluationUncheckedUpdateManyWithoutProductNestedInput;
    markdownActions?: MarkdownActionLogUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type ProductCreateWithoutMarkdownEvaluationsInput = {
    id?: bigint | number;
    sku: string;
    name: string;
    category?: string | null;
    brand?: string | null;
    unitCost: Decimal | DecimalJsLike | number | string;
    basePrice: Decimal | DecimalJsLike | number | string;
    currentPrice: Decimal | DecimalJsLike | number | string;
    holdingCostPerUnitPerDay?: Decimal | DecimalJsLike | number | string;
    clearanceEndDate: Date | string;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    inventories?: InventoryCreateNestedManyWithoutProductInput;
    priceHistories?: PriceHistoryCreateNestedManyWithoutProductInput;
    sales?: SalesDailyCreateNestedManyWithoutProductInput;
    elasticityEstimate?: ElasticityEstimateCreateNestedOneWithoutProductInput;
    competitorPrices?: CompetitorPriceCreateNestedManyWithoutProductInput;
    markdownActions?: MarkdownActionLogCreateNestedManyWithoutProductInput;
  };

  export type ProductUncheckedCreateWithoutMarkdownEvaluationsInput = {
    id?: bigint | number;
    sku: string;
    name: string;
    category?: string | null;
    brand?: string | null;
    unitCost: Decimal | DecimalJsLike | number | string;
    basePrice: Decimal | DecimalJsLike | number | string;
    currentPrice: Decimal | DecimalJsLike | number | string;
    holdingCostPerUnitPerDay?: Decimal | DecimalJsLike | number | string;
    clearanceEndDate: Date | string;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    inventories?: InventoryUncheckedCreateNestedManyWithoutProductInput;
    priceHistories?: PriceHistoryUncheckedCreateNestedManyWithoutProductInput;
    sales?: SalesDailyUncheckedCreateNestedManyWithoutProductInput;
    elasticityEstimate?: ElasticityEstimateUncheckedCreateNestedOneWithoutProductInput;
    competitorPrices?: CompetitorPriceUncheckedCreateNestedManyWithoutProductInput;
    markdownActions?: MarkdownActionLogUncheckedCreateNestedManyWithoutProductInput;
  };

  export type ProductCreateOrConnectWithoutMarkdownEvaluationsInput = {
    where: ProductWhereUniqueInput;
    create: XOR<
      ProductCreateWithoutMarkdownEvaluationsInput,
      ProductUncheckedCreateWithoutMarkdownEvaluationsInput
    >;
  };

  export type ProductUpsertWithoutMarkdownEvaluationsInput = {
    update: XOR<
      ProductUpdateWithoutMarkdownEvaluationsInput,
      ProductUncheckedUpdateWithoutMarkdownEvaluationsInput
    >;
    create: XOR<
      ProductCreateWithoutMarkdownEvaluationsInput,
      ProductUncheckedCreateWithoutMarkdownEvaluationsInput
    >;
    where?: ProductWhereInput;
  };

  export type ProductUpdateToOneWithWhereWithoutMarkdownEvaluationsInput = {
    where?: ProductWhereInput;
    data: XOR<
      ProductUpdateWithoutMarkdownEvaluationsInput,
      ProductUncheckedUpdateWithoutMarkdownEvaluationsInput
    >;
  };

  export type ProductUpdateWithoutMarkdownEvaluationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    sku?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    category?: NullableStringFieldUpdateOperationsInput | string | null;
    brand?: NullableStringFieldUpdateOperationsInput | string | null;
    unitCost?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    basePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currentPrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    holdingCostPerUnitPerDay?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    clearanceEndDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventories?: InventoryUpdateManyWithoutProductNestedInput;
    priceHistories?: PriceHistoryUpdateManyWithoutProductNestedInput;
    sales?: SalesDailyUpdateManyWithoutProductNestedInput;
    elasticityEstimate?: ElasticityEstimateUpdateOneWithoutProductNestedInput;
    competitorPrices?: CompetitorPriceUpdateManyWithoutProductNestedInput;
    markdownActions?: MarkdownActionLogUpdateManyWithoutProductNestedInput;
  };

  export type ProductUncheckedUpdateWithoutMarkdownEvaluationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    sku?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    category?: NullableStringFieldUpdateOperationsInput | string | null;
    brand?: NullableStringFieldUpdateOperationsInput | string | null;
    unitCost?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    basePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currentPrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    holdingCostPerUnitPerDay?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    clearanceEndDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventories?: InventoryUncheckedUpdateManyWithoutProductNestedInput;
    priceHistories?: PriceHistoryUncheckedUpdateManyWithoutProductNestedInput;
    sales?: SalesDailyUncheckedUpdateManyWithoutProductNestedInput;
    elasticityEstimate?: ElasticityEstimateUncheckedUpdateOneWithoutProductNestedInput;
    competitorPrices?: CompetitorPriceUncheckedUpdateManyWithoutProductNestedInput;
    markdownActions?: MarkdownActionLogUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type ProductCreateWithoutMarkdownActionsInput = {
    id?: bigint | number;
    sku: string;
    name: string;
    category?: string | null;
    brand?: string | null;
    unitCost: Decimal | DecimalJsLike | number | string;
    basePrice: Decimal | DecimalJsLike | number | string;
    currentPrice: Decimal | DecimalJsLike | number | string;
    holdingCostPerUnitPerDay?: Decimal | DecimalJsLike | number | string;
    clearanceEndDate: Date | string;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    inventories?: InventoryCreateNestedManyWithoutProductInput;
    priceHistories?: PriceHistoryCreateNestedManyWithoutProductInput;
    sales?: SalesDailyCreateNestedManyWithoutProductInput;
    elasticityEstimate?: ElasticityEstimateCreateNestedOneWithoutProductInput;
    competitorPrices?: CompetitorPriceCreateNestedManyWithoutProductInput;
    markdownEvaluations?: MarkdownEvaluationCreateNestedManyWithoutProductInput;
  };

  export type ProductUncheckedCreateWithoutMarkdownActionsInput = {
    id?: bigint | number;
    sku: string;
    name: string;
    category?: string | null;
    brand?: string | null;
    unitCost: Decimal | DecimalJsLike | number | string;
    basePrice: Decimal | DecimalJsLike | number | string;
    currentPrice: Decimal | DecimalJsLike | number | string;
    holdingCostPerUnitPerDay?: Decimal | DecimalJsLike | number | string;
    clearanceEndDate: Date | string;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    inventories?: InventoryUncheckedCreateNestedManyWithoutProductInput;
    priceHistories?: PriceHistoryUncheckedCreateNestedManyWithoutProductInput;
    sales?: SalesDailyUncheckedCreateNestedManyWithoutProductInput;
    elasticityEstimate?: ElasticityEstimateUncheckedCreateNestedOneWithoutProductInput;
    competitorPrices?: CompetitorPriceUncheckedCreateNestedManyWithoutProductInput;
    markdownEvaluations?: MarkdownEvaluationUncheckedCreateNestedManyWithoutProductInput;
  };

  export type ProductCreateOrConnectWithoutMarkdownActionsInput = {
    where: ProductWhereUniqueInput;
    create: XOR<
      ProductCreateWithoutMarkdownActionsInput,
      ProductUncheckedCreateWithoutMarkdownActionsInput
    >;
  };

  export type ActionOutcomeCreateWithoutActionInput = {
    windowStart: Date | string;
    windowEnd: Date | string;
    actualUnitsSold: number;
    actualProfit: Decimal | DecimalJsLike | number | string;
  };

  export type ActionOutcomeUncheckedCreateWithoutActionInput = {
    windowStart: Date | string;
    windowEnd: Date | string;
    actualUnitsSold: number;
    actualProfit: Decimal | DecimalJsLike | number | string;
  };

  export type ActionOutcomeCreateOrConnectWithoutActionInput = {
    where: ActionOutcomeWhereUniqueInput;
    create: XOR<
      ActionOutcomeCreateWithoutActionInput,
      ActionOutcomeUncheckedCreateWithoutActionInput
    >;
  };

  export type ActionOutcomeCreateManyActionInputEnvelope = {
    data:
      | ActionOutcomeCreateManyActionInput
      | ActionOutcomeCreateManyActionInput[];
    skipDuplicates?: boolean;
  };

  export type ProductUpsertWithoutMarkdownActionsInput = {
    update: XOR<
      ProductUpdateWithoutMarkdownActionsInput,
      ProductUncheckedUpdateWithoutMarkdownActionsInput
    >;
    create: XOR<
      ProductCreateWithoutMarkdownActionsInput,
      ProductUncheckedCreateWithoutMarkdownActionsInput
    >;
    where?: ProductWhereInput;
  };

  export type ProductUpdateToOneWithWhereWithoutMarkdownActionsInput = {
    where?: ProductWhereInput;
    data: XOR<
      ProductUpdateWithoutMarkdownActionsInput,
      ProductUncheckedUpdateWithoutMarkdownActionsInput
    >;
  };

  export type ProductUpdateWithoutMarkdownActionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    sku?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    category?: NullableStringFieldUpdateOperationsInput | string | null;
    brand?: NullableStringFieldUpdateOperationsInput | string | null;
    unitCost?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    basePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currentPrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    holdingCostPerUnitPerDay?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    clearanceEndDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventories?: InventoryUpdateManyWithoutProductNestedInput;
    priceHistories?: PriceHistoryUpdateManyWithoutProductNestedInput;
    sales?: SalesDailyUpdateManyWithoutProductNestedInput;
    elasticityEstimate?: ElasticityEstimateUpdateOneWithoutProductNestedInput;
    competitorPrices?: CompetitorPriceUpdateManyWithoutProductNestedInput;
    markdownEvaluations?: MarkdownEvaluationUpdateManyWithoutProductNestedInput;
  };

  export type ProductUncheckedUpdateWithoutMarkdownActionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    sku?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    category?: NullableStringFieldUpdateOperationsInput | string | null;
    brand?: NullableStringFieldUpdateOperationsInput | string | null;
    unitCost?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    basePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currentPrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    holdingCostPerUnitPerDay?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    clearanceEndDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventories?: InventoryUncheckedUpdateManyWithoutProductNestedInput;
    priceHistories?: PriceHistoryUncheckedUpdateManyWithoutProductNestedInput;
    sales?: SalesDailyUncheckedUpdateManyWithoutProductNestedInput;
    elasticityEstimate?: ElasticityEstimateUncheckedUpdateOneWithoutProductNestedInput;
    competitorPrices?: CompetitorPriceUncheckedUpdateManyWithoutProductNestedInput;
    markdownEvaluations?: MarkdownEvaluationUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type ActionOutcomeUpsertWithWhereUniqueWithoutActionInput = {
    where: ActionOutcomeWhereUniqueInput;
    update: XOR<
      ActionOutcomeUpdateWithoutActionInput,
      ActionOutcomeUncheckedUpdateWithoutActionInput
    >;
    create: XOR<
      ActionOutcomeCreateWithoutActionInput,
      ActionOutcomeUncheckedCreateWithoutActionInput
    >;
  };

  export type ActionOutcomeUpdateWithWhereUniqueWithoutActionInput = {
    where: ActionOutcomeWhereUniqueInput;
    data: XOR<
      ActionOutcomeUpdateWithoutActionInput,
      ActionOutcomeUncheckedUpdateWithoutActionInput
    >;
  };

  export type ActionOutcomeUpdateManyWithWhereWithoutActionInput = {
    where: ActionOutcomeScalarWhereInput;
    data: XOR<
      ActionOutcomeUpdateManyMutationInput,
      ActionOutcomeUncheckedUpdateManyWithoutActionInput
    >;
  };

  export type ActionOutcomeScalarWhereInput = {
    AND?: ActionOutcomeScalarWhereInput | ActionOutcomeScalarWhereInput[];
    OR?: ActionOutcomeScalarWhereInput[];
    NOT?: ActionOutcomeScalarWhereInput | ActionOutcomeScalarWhereInput[];
    actionId?: BigIntFilter<'ActionOutcome'> | bigint | number;
    windowStart?: DateTimeFilter<'ActionOutcome'> | Date | string;
    windowEnd?: DateTimeFilter<'ActionOutcome'> | Date | string;
    actualUnitsSold?: IntFilter<'ActionOutcome'> | number;
    actualProfit?:
      | DecimalFilter<'ActionOutcome'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type MarkdownActionLogCreateWithoutOutcomesInput = {
    id?: bigint | number;
    executedAt?: Date | string;
    beforePrice: Decimal | DecimalJsLike | number | string;
    afterPrice: Decimal | DecimalJsLike | number | string;
    stockAtAction: number;
    expectedProfit: Decimal | DecimalJsLike | number | string;
    baselineProfit: Decimal | DecimalJsLike | number | string;
    deltaExpectedProfit: Decimal | DecimalJsLike | number | string;
    notes?: string | null;
    product: ProductCreateNestedOneWithoutMarkdownActionsInput;
  };

  export type MarkdownActionLogUncheckedCreateWithoutOutcomesInput = {
    id?: bigint | number;
    productId: bigint | number;
    executedAt?: Date | string;
    beforePrice: Decimal | DecimalJsLike | number | string;
    afterPrice: Decimal | DecimalJsLike | number | string;
    stockAtAction: number;
    expectedProfit: Decimal | DecimalJsLike | number | string;
    baselineProfit: Decimal | DecimalJsLike | number | string;
    deltaExpectedProfit: Decimal | DecimalJsLike | number | string;
    notes?: string | null;
  };

  export type MarkdownActionLogCreateOrConnectWithoutOutcomesInput = {
    where: MarkdownActionLogWhereUniqueInput;
    create: XOR<
      MarkdownActionLogCreateWithoutOutcomesInput,
      MarkdownActionLogUncheckedCreateWithoutOutcomesInput
    >;
  };

  export type MarkdownActionLogUpsertWithoutOutcomesInput = {
    update: XOR<
      MarkdownActionLogUpdateWithoutOutcomesInput,
      MarkdownActionLogUncheckedUpdateWithoutOutcomesInput
    >;
    create: XOR<
      MarkdownActionLogCreateWithoutOutcomesInput,
      MarkdownActionLogUncheckedCreateWithoutOutcomesInput
    >;
    where?: MarkdownActionLogWhereInput;
  };

  export type MarkdownActionLogUpdateToOneWithWhereWithoutOutcomesInput = {
    where?: MarkdownActionLogWhereInput;
    data: XOR<
      MarkdownActionLogUpdateWithoutOutcomesInput,
      MarkdownActionLogUncheckedUpdateWithoutOutcomesInput
    >;
  };

  export type MarkdownActionLogUpdateWithoutOutcomesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    beforePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    afterPrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    stockAtAction?: IntFieldUpdateOperationsInput | number;
    expectedProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    baselineProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    deltaExpectedProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    product?: ProductUpdateOneRequiredWithoutMarkdownActionsNestedInput;
  };

  export type MarkdownActionLogUncheckedUpdateWithoutOutcomesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    productId?: BigIntFieldUpdateOperationsInput | bigint | number;
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    beforePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    afterPrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    stockAtAction?: IntFieldUpdateOperationsInput | number;
    expectedProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    baselineProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    deltaExpectedProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type InventoryCreateManyProductInput = {
    location?: string;
    stockOnHand: number;
    reserved?: number;
  };

  export type PriceHistoryCreateManyProductInput = {
    id?: bigint | number;
    price: Decimal | DecimalJsLike | number | string;
    markdownPct?: Decimal | DecimalJsLike | number | string;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
  };

  export type SalesDailyCreateManyProductInput = {
    saleDate: Date | string;
    unitsSold: number;
    avgUnitPrice: Decimal | DecimalJsLike | number | string;
    promoFlag?: boolean;
  };

  export type CompetitorPriceCreateManyProductInput = {
    competitorId: bigint | number;
    priceDate: Date | string;
    price: Decimal | DecimalJsLike | number | string;
  };

  export type MarkdownEvaluationCreateManyProductInput = {
    id?: bigint | number;
    evaluatedAt?: Date | string;
    baselinePrice: Decimal | DecimalJsLike | number | string;
    baselineExpectedUnits: number;
    baselineExpectedProfit: Decimal | DecimalJsLike | number | string;
    markdownPct: Decimal | DecimalJsLike | number | string;
    candidatePrice: Decimal | DecimalJsLike | number | string;
    expectedUnits: number;
    expectedProfit: Decimal | DecimalJsLike | number | string;
    expectedDaysToSell?: number | null;
    expectedUnsoldUnits?: number | null;
    isOptimal?: boolean;
  };

  export type MarkdownActionLogCreateManyProductInput = {
    id?: bigint | number;
    executedAt?: Date | string;
    beforePrice: Decimal | DecimalJsLike | number | string;
    afterPrice: Decimal | DecimalJsLike | number | string;
    stockAtAction: number;
    expectedProfit: Decimal | DecimalJsLike | number | string;
    baselineProfit: Decimal | DecimalJsLike | number | string;
    deltaExpectedProfit: Decimal | DecimalJsLike | number | string;
    notes?: string | null;
  };

  export type InventoryUpdateWithoutProductInput = {
    location?: StringFieldUpdateOperationsInput | string;
    stockOnHand?: IntFieldUpdateOperationsInput | number;
    reserved?: IntFieldUpdateOperationsInput | number;
  };

  export type InventoryUncheckedUpdateWithoutProductInput = {
    location?: StringFieldUpdateOperationsInput | string;
    stockOnHand?: IntFieldUpdateOperationsInput | number;
    reserved?: IntFieldUpdateOperationsInput | number;
  };

  export type InventoryUncheckedUpdateManyWithoutProductInput = {
    location?: StringFieldUpdateOperationsInput | string;
    stockOnHand?: IntFieldUpdateOperationsInput | number;
    reserved?: IntFieldUpdateOperationsInput | number;
  };

  export type PriceHistoryUpdateWithoutProductInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    markdownPct?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type PriceHistoryUncheckedUpdateWithoutProductInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    markdownPct?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type PriceHistoryUncheckedUpdateManyWithoutProductInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    markdownPct?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type SalesDailyUpdateWithoutProductInput = {
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    unitsSold?: IntFieldUpdateOperationsInput | number;
    avgUnitPrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    promoFlag?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type SalesDailyUncheckedUpdateWithoutProductInput = {
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    unitsSold?: IntFieldUpdateOperationsInput | number;
    avgUnitPrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    promoFlag?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type SalesDailyUncheckedUpdateManyWithoutProductInput = {
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    unitsSold?: IntFieldUpdateOperationsInput | number;
    avgUnitPrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    promoFlag?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type CompetitorPriceUpdateWithoutProductInput = {
    priceDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    competitor?: CompetitorUpdateOneRequiredWithoutPricesNestedInput;
  };

  export type CompetitorPriceUncheckedUpdateWithoutProductInput = {
    competitorId?: BigIntFieldUpdateOperationsInput | bigint | number;
    priceDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type CompetitorPriceUncheckedUpdateManyWithoutProductInput = {
    competitorId?: BigIntFieldUpdateOperationsInput | bigint | number;
    priceDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type MarkdownEvaluationUpdateWithoutProductInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    evaluatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    baselinePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    baselineExpectedUnits?: IntFieldUpdateOperationsInput | number;
    baselineExpectedProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    markdownPct?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    candidatePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    expectedUnits?: IntFieldUpdateOperationsInput | number;
    expectedProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    expectedDaysToSell?: NullableIntFieldUpdateOperationsInput | number | null;
    expectedUnsoldUnits?: NullableIntFieldUpdateOperationsInput | number | null;
    isOptimal?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type MarkdownEvaluationUncheckedUpdateWithoutProductInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    evaluatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    baselinePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    baselineExpectedUnits?: IntFieldUpdateOperationsInput | number;
    baselineExpectedProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    markdownPct?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    candidatePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    expectedUnits?: IntFieldUpdateOperationsInput | number;
    expectedProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    expectedDaysToSell?: NullableIntFieldUpdateOperationsInput | number | null;
    expectedUnsoldUnits?: NullableIntFieldUpdateOperationsInput | number | null;
    isOptimal?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type MarkdownEvaluationUncheckedUpdateManyWithoutProductInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    evaluatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    baselinePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    baselineExpectedUnits?: IntFieldUpdateOperationsInput | number;
    baselineExpectedProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    markdownPct?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    candidatePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    expectedUnits?: IntFieldUpdateOperationsInput | number;
    expectedProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    expectedDaysToSell?: NullableIntFieldUpdateOperationsInput | number | null;
    expectedUnsoldUnits?: NullableIntFieldUpdateOperationsInput | number | null;
    isOptimal?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type MarkdownActionLogUpdateWithoutProductInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    beforePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    afterPrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    stockAtAction?: IntFieldUpdateOperationsInput | number;
    expectedProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    baselineProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    deltaExpectedProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    outcomes?: ActionOutcomeUpdateManyWithoutActionNestedInput;
  };

  export type MarkdownActionLogUncheckedUpdateWithoutProductInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    beforePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    afterPrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    stockAtAction?: IntFieldUpdateOperationsInput | number;
    expectedProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    baselineProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    deltaExpectedProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    outcomes?: ActionOutcomeUncheckedUpdateManyWithoutActionNestedInput;
  };

  export type MarkdownActionLogUncheckedUpdateManyWithoutProductInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    beforePrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    afterPrice?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    stockAtAction?: IntFieldUpdateOperationsInput | number;
    expectedProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    baselineProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    deltaExpectedProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type CompetitorPriceCreateManyCompetitorInput = {
    productId: bigint | number;
    priceDate: Date | string;
    price: Decimal | DecimalJsLike | number | string;
  };

  export type CompetitorPriceUpdateWithoutCompetitorInput = {
    priceDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    product?: ProductUpdateOneRequiredWithoutCompetitorPricesNestedInput;
  };

  export type CompetitorPriceUncheckedUpdateWithoutCompetitorInput = {
    productId?: BigIntFieldUpdateOperationsInput | bigint | number;
    priceDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type CompetitorPriceUncheckedUpdateManyWithoutCompetitorInput = {
    productId?: BigIntFieldUpdateOperationsInput | bigint | number;
    priceDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type ActionOutcomeCreateManyActionInput = {
    windowStart: Date | string;
    windowEnd: Date | string;
    actualUnitsSold: number;
    actualProfit: Decimal | DecimalJsLike | number | string;
  };

  export type ActionOutcomeUpdateWithoutActionInput = {
    windowStart?: DateTimeFieldUpdateOperationsInput | Date | string;
    windowEnd?: DateTimeFieldUpdateOperationsInput | Date | string;
    actualUnitsSold?: IntFieldUpdateOperationsInput | number;
    actualProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type ActionOutcomeUncheckedUpdateWithoutActionInput = {
    windowStart?: DateTimeFieldUpdateOperationsInput | Date | string;
    windowEnd?: DateTimeFieldUpdateOperationsInput | Date | string;
    actualUnitsSold?: IntFieldUpdateOperationsInput | number;
    actualProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type ActionOutcomeUncheckedUpdateManyWithoutActionInput = {
    windowStart?: DateTimeFieldUpdateOperationsInput | Date | string;
    windowEnd?: DateTimeFieldUpdateOperationsInput | Date | string;
    actualUnitsSold?: IntFieldUpdateOperationsInput | number;
    actualProfit?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
