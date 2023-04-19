
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = {
  id: number
  userId: string
  email: string
  password: string
}

/**
 * Model Watchlist
 * 
 */
export type Watchlist = {
  id: number
  itemId: string
  itemName: string
  itemImage: string
  itemUrl: string
  itemProvider: string
  itemPrice: number
  itemPreviousPrice: number
  itemHighestPrice: number
  itemLowestPrice: number
  userId: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Prices
 * 
 */
export type Prices = {
  id: number
  price: number
  watchlistId: string | null
  created_at: Date
  updated_at: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.watchlist`: Exposes CRUD operations for the **Watchlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Watchlists
    * const watchlists = await prisma.watchlist.findMany()
    * ```
    */
  get watchlist(): Prisma.WatchlistDelegate<GlobalReject>;

  /**
   * `prisma.prices`: Exposes CRUD operations for the **Prices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prices
    * const prices = await prisma.prices.findMany()
    * ```
    */
  get prices(): Prisma.PricesDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.12.0
   * Query Engine version: 659ef412370fa3b41cd7bf6e94587c1dfb7f67e7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Watchlist: 'Watchlist',
    Prices: 'Prices'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    Watchlist: number
  }

  export type UserCountOutputTypeSelect = {
    Watchlist?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type WatchlistCountOutputType
   */


  export type WatchlistCountOutputType = {
    newPrices: number
  }

  export type WatchlistCountOutputTypeSelect = {
    newPrices?: boolean
  }

  export type WatchlistCountOutputTypeGetPayload<S extends boolean | null | undefined | WatchlistCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? WatchlistCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (WatchlistCountOutputTypeArgs)
    ? WatchlistCountOutputType 
    : S extends { select: any } & (WatchlistCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof WatchlistCountOutputType ? WatchlistCountOutputType[P] : never
  } 
      : WatchlistCountOutputType




  // Custom InputTypes

  /**
   * WatchlistCountOutputType without action
   */
  export type WatchlistCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the WatchlistCountOutputType
     */
    select?: WatchlistCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    userId: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userId: number
    email: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    userId?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userId?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userId?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    userId: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    userId?: boolean
    email?: boolean
    password?: boolean
    Watchlist?: boolean | User$WatchlistArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    Watchlist?: boolean | User$WatchlistArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Watchlist' ? Array < WatchlistGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Watchlist' ? Array < WatchlistGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Watchlist<T extends User$WatchlistArgs= {}>(args?: Subset<T, User$WatchlistArgs>): Prisma.PrismaPromise<Array<WatchlistGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.Watchlist
   */
  export type User$WatchlistArgs = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WatchlistInclude | null
    where?: WatchlistWhereInput
    orderBy?: Enumerable<WatchlistOrderByWithRelationInput>
    cursor?: WatchlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<WatchlistScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model Watchlist
   */


  export type AggregateWatchlist = {
    _count: WatchlistCountAggregateOutputType | null
    _avg: WatchlistAvgAggregateOutputType | null
    _sum: WatchlistSumAggregateOutputType | null
    _min: WatchlistMinAggregateOutputType | null
    _max: WatchlistMaxAggregateOutputType | null
  }

  export type WatchlistAvgAggregateOutputType = {
    id: number | null
    itemPrice: number | null
    itemPreviousPrice: number | null
    itemHighestPrice: number | null
    itemLowestPrice: number | null
  }

  export type WatchlistSumAggregateOutputType = {
    id: number | null
    itemPrice: number | null
    itemPreviousPrice: number | null
    itemHighestPrice: number | null
    itemLowestPrice: number | null
  }

  export type WatchlistMinAggregateOutputType = {
    id: number | null
    itemId: string | null
    itemName: string | null
    itemImage: string | null
    itemUrl: string | null
    itemProvider: string | null
    itemPrice: number | null
    itemPreviousPrice: number | null
    itemHighestPrice: number | null
    itemLowestPrice: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WatchlistMaxAggregateOutputType = {
    id: number | null
    itemId: string | null
    itemName: string | null
    itemImage: string | null
    itemUrl: string | null
    itemProvider: string | null
    itemPrice: number | null
    itemPreviousPrice: number | null
    itemHighestPrice: number | null
    itemLowestPrice: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WatchlistCountAggregateOutputType = {
    id: number
    itemId: number
    itemName: number
    itemImage: number
    itemUrl: number
    itemProvider: number
    itemPrice: number
    itemPreviousPrice: number
    itemHighestPrice: number
    itemLowestPrice: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WatchlistAvgAggregateInputType = {
    id?: true
    itemPrice?: true
    itemPreviousPrice?: true
    itemHighestPrice?: true
    itemLowestPrice?: true
  }

  export type WatchlistSumAggregateInputType = {
    id?: true
    itemPrice?: true
    itemPreviousPrice?: true
    itemHighestPrice?: true
    itemLowestPrice?: true
  }

  export type WatchlistMinAggregateInputType = {
    id?: true
    itemId?: true
    itemName?: true
    itemImage?: true
    itemUrl?: true
    itemProvider?: true
    itemPrice?: true
    itemPreviousPrice?: true
    itemHighestPrice?: true
    itemLowestPrice?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WatchlistMaxAggregateInputType = {
    id?: true
    itemId?: true
    itemName?: true
    itemImage?: true
    itemUrl?: true
    itemProvider?: true
    itemPrice?: true
    itemPreviousPrice?: true
    itemHighestPrice?: true
    itemLowestPrice?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WatchlistCountAggregateInputType = {
    id?: true
    itemId?: true
    itemName?: true
    itemImage?: true
    itemUrl?: true
    itemProvider?: true
    itemPrice?: true
    itemPreviousPrice?: true
    itemHighestPrice?: true
    itemLowestPrice?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WatchlistAggregateArgs = {
    /**
     * Filter which Watchlist to aggregate.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: Enumerable<WatchlistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Watchlists
    **/
    _count?: true | WatchlistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WatchlistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WatchlistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WatchlistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WatchlistMaxAggregateInputType
  }

  export type GetWatchlistAggregateType<T extends WatchlistAggregateArgs> = {
        [P in keyof T & keyof AggregateWatchlist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatchlist[P]>
      : GetScalarType<T[P], AggregateWatchlist[P]>
  }




  export type WatchlistGroupByArgs = {
    where?: WatchlistWhereInput
    orderBy?: Enumerable<WatchlistOrderByWithAggregationInput>
    by: WatchlistScalarFieldEnum[]
    having?: WatchlistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WatchlistCountAggregateInputType | true
    _avg?: WatchlistAvgAggregateInputType
    _sum?: WatchlistSumAggregateInputType
    _min?: WatchlistMinAggregateInputType
    _max?: WatchlistMaxAggregateInputType
  }


  export type WatchlistGroupByOutputType = {
    id: number
    itemId: string
    itemName: string
    itemImage: string
    itemUrl: string
    itemProvider: string
    itemPrice: number
    itemPreviousPrice: number
    itemHighestPrice: number
    itemLowestPrice: number
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: WatchlistCountAggregateOutputType | null
    _avg: WatchlistAvgAggregateOutputType | null
    _sum: WatchlistSumAggregateOutputType | null
    _min: WatchlistMinAggregateOutputType | null
    _max: WatchlistMaxAggregateOutputType | null
  }

  type GetWatchlistGroupByPayload<T extends WatchlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<WatchlistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WatchlistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WatchlistGroupByOutputType[P]>
            : GetScalarType<T[P], WatchlistGroupByOutputType[P]>
        }
      >
    >


  export type WatchlistSelect = {
    id?: boolean
    itemId?: boolean
    itemName?: boolean
    itemImage?: boolean
    itemUrl?: boolean
    itemProvider?: boolean
    itemPrice?: boolean
    itemPreviousPrice?: boolean
    itemHighestPrice?: boolean
    itemLowestPrice?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    newPrices?: boolean | Watchlist$newPricesArgs
    user?: boolean | UserArgs
    _count?: boolean | WatchlistCountOutputTypeArgs
  }


  export type WatchlistInclude = {
    newPrices?: boolean | Watchlist$newPricesArgs
    user?: boolean | UserArgs
    _count?: boolean | WatchlistCountOutputTypeArgs
  }

  export type WatchlistGetPayload<S extends boolean | null | undefined | WatchlistArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Watchlist :
    S extends undefined ? never :
    S extends { include: any } & (WatchlistArgs | WatchlistFindManyArgs)
    ? Watchlist  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'newPrices' ? Array < PricesGetPayload<S['include'][P]>>  :
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends '_count' ? WatchlistCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (WatchlistArgs | WatchlistFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'newPrices' ? Array < PricesGetPayload<S['select'][P]>>  :
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends '_count' ? WatchlistCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Watchlist ? Watchlist[P] : never
  } 
      : Watchlist


  type WatchlistCountArgs = 
    Omit<WatchlistFindManyArgs, 'select' | 'include'> & {
      select?: WatchlistCountAggregateInputType | true
    }

  export interface WatchlistDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Watchlist that matches the filter.
     * @param {WatchlistFindUniqueArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WatchlistFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WatchlistFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Watchlist'> extends True ? Prisma__WatchlistClient<WatchlistGetPayload<T>> : Prisma__WatchlistClient<WatchlistGetPayload<T> | null, null>

    /**
     * Find one Watchlist that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WatchlistFindUniqueOrThrowArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WatchlistFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, WatchlistFindUniqueOrThrowArgs>
    ): Prisma__WatchlistClient<WatchlistGetPayload<T>>

    /**
     * Find the first Watchlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistFindFirstArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WatchlistFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WatchlistFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Watchlist'> extends True ? Prisma__WatchlistClient<WatchlistGetPayload<T>> : Prisma__WatchlistClient<WatchlistGetPayload<T> | null, null>

    /**
     * Find the first Watchlist that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistFindFirstOrThrowArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WatchlistFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WatchlistFindFirstOrThrowArgs>
    ): Prisma__WatchlistClient<WatchlistGetPayload<T>>

    /**
     * Find zero or more Watchlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Watchlists
     * const watchlists = await prisma.watchlist.findMany()
     * 
     * // Get first 10 Watchlists
     * const watchlists = await prisma.watchlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const watchlistWithIdOnly = await prisma.watchlist.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WatchlistFindManyArgs>(
      args?: SelectSubset<T, WatchlistFindManyArgs>
    ): Prisma.PrismaPromise<Array<WatchlistGetPayload<T>>>

    /**
     * Create a Watchlist.
     * @param {WatchlistCreateArgs} args - Arguments to create a Watchlist.
     * @example
     * // Create one Watchlist
     * const Watchlist = await prisma.watchlist.create({
     *   data: {
     *     // ... data to create a Watchlist
     *   }
     * })
     * 
    **/
    create<T extends WatchlistCreateArgs>(
      args: SelectSubset<T, WatchlistCreateArgs>
    ): Prisma__WatchlistClient<WatchlistGetPayload<T>>

    /**
     * Create many Watchlists.
     *     @param {WatchlistCreateManyArgs} args - Arguments to create many Watchlists.
     *     @example
     *     // Create many Watchlists
     *     const watchlist = await prisma.watchlist.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WatchlistCreateManyArgs>(
      args?: SelectSubset<T, WatchlistCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Watchlist.
     * @param {WatchlistDeleteArgs} args - Arguments to delete one Watchlist.
     * @example
     * // Delete one Watchlist
     * const Watchlist = await prisma.watchlist.delete({
     *   where: {
     *     // ... filter to delete one Watchlist
     *   }
     * })
     * 
    **/
    delete<T extends WatchlistDeleteArgs>(
      args: SelectSubset<T, WatchlistDeleteArgs>
    ): Prisma__WatchlistClient<WatchlistGetPayload<T>>

    /**
     * Update one Watchlist.
     * @param {WatchlistUpdateArgs} args - Arguments to update one Watchlist.
     * @example
     * // Update one Watchlist
     * const watchlist = await prisma.watchlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WatchlistUpdateArgs>(
      args: SelectSubset<T, WatchlistUpdateArgs>
    ): Prisma__WatchlistClient<WatchlistGetPayload<T>>

    /**
     * Delete zero or more Watchlists.
     * @param {WatchlistDeleteManyArgs} args - Arguments to filter Watchlists to delete.
     * @example
     * // Delete a few Watchlists
     * const { count } = await prisma.watchlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WatchlistDeleteManyArgs>(
      args?: SelectSubset<T, WatchlistDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Watchlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Watchlists
     * const watchlist = await prisma.watchlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WatchlistUpdateManyArgs>(
      args: SelectSubset<T, WatchlistUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Watchlist.
     * @param {WatchlistUpsertArgs} args - Arguments to update or create a Watchlist.
     * @example
     * // Update or create a Watchlist
     * const watchlist = await prisma.watchlist.upsert({
     *   create: {
     *     // ... data to create a Watchlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Watchlist we want to update
     *   }
     * })
    **/
    upsert<T extends WatchlistUpsertArgs>(
      args: SelectSubset<T, WatchlistUpsertArgs>
    ): Prisma__WatchlistClient<WatchlistGetPayload<T>>

    /**
     * Count the number of Watchlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistCountArgs} args - Arguments to filter Watchlists to count.
     * @example
     * // Count the number of Watchlists
     * const count = await prisma.watchlist.count({
     *   where: {
     *     // ... the filter for the Watchlists we want to count
     *   }
     * })
    **/
    count<T extends WatchlistCountArgs>(
      args?: Subset<T, WatchlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WatchlistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Watchlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WatchlistAggregateArgs>(args: Subset<T, WatchlistAggregateArgs>): Prisma.PrismaPromise<GetWatchlistAggregateType<T>>

    /**
     * Group by Watchlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistGroupByArgs} args - Group by arguments.
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
      T extends WatchlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WatchlistGroupByArgs['orderBy'] }
        : { orderBy?: WatchlistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WatchlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatchlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Watchlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WatchlistClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    newPrices<T extends Watchlist$newPricesArgs= {}>(args?: Subset<T, Watchlist$newPricesArgs>): Prisma.PrismaPromise<Array<PricesGetPayload<T>>| Null>;

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Watchlist base type for findUnique actions
   */
  export type WatchlistFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WatchlistInclude | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where: WatchlistWhereUniqueInput
  }

  /**
   * Watchlist findUnique
   */
  export interface WatchlistFindUniqueArgs extends WatchlistFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Watchlist findUniqueOrThrow
   */
  export type WatchlistFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WatchlistInclude | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where: WatchlistWhereUniqueInput
  }


  /**
   * Watchlist base type for findFirst actions
   */
  export type WatchlistFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WatchlistInclude | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: Enumerable<WatchlistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Watchlists.
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Watchlists.
     */
    distinct?: Enumerable<WatchlistScalarFieldEnum>
  }

  /**
   * Watchlist findFirst
   */
  export interface WatchlistFindFirstArgs extends WatchlistFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Watchlist findFirstOrThrow
   */
  export type WatchlistFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WatchlistInclude | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: Enumerable<WatchlistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Watchlists.
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Watchlists.
     */
    distinct?: Enumerable<WatchlistScalarFieldEnum>
  }


  /**
   * Watchlist findMany
   */
  export type WatchlistFindManyArgs = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WatchlistInclude | null
    /**
     * Filter, which Watchlists to fetch.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: Enumerable<WatchlistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Watchlists.
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    distinct?: Enumerable<WatchlistScalarFieldEnum>
  }


  /**
   * Watchlist create
   */
  export type WatchlistCreateArgs = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WatchlistInclude | null
    /**
     * The data needed to create a Watchlist.
     */
    data: XOR<WatchlistCreateInput, WatchlistUncheckedCreateInput>
  }


  /**
   * Watchlist createMany
   */
  export type WatchlistCreateManyArgs = {
    /**
     * The data used to create many Watchlists.
     */
    data: Enumerable<WatchlistCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Watchlist update
   */
  export type WatchlistUpdateArgs = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WatchlistInclude | null
    /**
     * The data needed to update a Watchlist.
     */
    data: XOR<WatchlistUpdateInput, WatchlistUncheckedUpdateInput>
    /**
     * Choose, which Watchlist to update.
     */
    where: WatchlistWhereUniqueInput
  }


  /**
   * Watchlist updateMany
   */
  export type WatchlistUpdateManyArgs = {
    /**
     * The data used to update Watchlists.
     */
    data: XOR<WatchlistUpdateManyMutationInput, WatchlistUncheckedUpdateManyInput>
    /**
     * Filter which Watchlists to update
     */
    where?: WatchlistWhereInput
  }


  /**
   * Watchlist upsert
   */
  export type WatchlistUpsertArgs = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WatchlistInclude | null
    /**
     * The filter to search for the Watchlist to update in case it exists.
     */
    where: WatchlistWhereUniqueInput
    /**
     * In case the Watchlist found by the `where` argument doesn't exist, create a new Watchlist with this data.
     */
    create: XOR<WatchlistCreateInput, WatchlistUncheckedCreateInput>
    /**
     * In case the Watchlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WatchlistUpdateInput, WatchlistUncheckedUpdateInput>
  }


  /**
   * Watchlist delete
   */
  export type WatchlistDeleteArgs = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WatchlistInclude | null
    /**
     * Filter which Watchlist to delete.
     */
    where: WatchlistWhereUniqueInput
  }


  /**
   * Watchlist deleteMany
   */
  export type WatchlistDeleteManyArgs = {
    /**
     * Filter which Watchlists to delete
     */
    where?: WatchlistWhereInput
  }


  /**
   * Watchlist.newPrices
   */
  export type Watchlist$newPricesArgs = {
    /**
     * Select specific fields to fetch from the Prices
     */
    select?: PricesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PricesInclude | null
    where?: PricesWhereInput
    orderBy?: Enumerable<PricesOrderByWithRelationInput>
    cursor?: PricesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PricesScalarFieldEnum>
  }


  /**
   * Watchlist without action
   */
  export type WatchlistArgs = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WatchlistInclude | null
  }



  /**
   * Model Prices
   */


  export type AggregatePrices = {
    _count: PricesCountAggregateOutputType | null
    _avg: PricesAvgAggregateOutputType | null
    _sum: PricesSumAggregateOutputType | null
    _min: PricesMinAggregateOutputType | null
    _max: PricesMaxAggregateOutputType | null
  }

  export type PricesAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type PricesSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type PricesMinAggregateOutputType = {
    id: number | null
    price: number | null
    watchlistId: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PricesMaxAggregateOutputType = {
    id: number | null
    price: number | null
    watchlistId: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PricesCountAggregateOutputType = {
    id: number
    price: number
    watchlistId: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PricesAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type PricesSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type PricesMinAggregateInputType = {
    id?: true
    price?: true
    watchlistId?: true
    created_at?: true
    updated_at?: true
  }

  export type PricesMaxAggregateInputType = {
    id?: true
    price?: true
    watchlistId?: true
    created_at?: true
    updated_at?: true
  }

  export type PricesCountAggregateInputType = {
    id?: true
    price?: true
    watchlistId?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PricesAggregateArgs = {
    /**
     * Filter which Prices to aggregate.
     */
    where?: PricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: Enumerable<PricesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prices
    **/
    _count?: true | PricesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PricesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PricesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PricesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PricesMaxAggregateInputType
  }

  export type GetPricesAggregateType<T extends PricesAggregateArgs> = {
        [P in keyof T & keyof AggregatePrices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrices[P]>
      : GetScalarType<T[P], AggregatePrices[P]>
  }




  export type PricesGroupByArgs = {
    where?: PricesWhereInput
    orderBy?: Enumerable<PricesOrderByWithAggregationInput>
    by: PricesScalarFieldEnum[]
    having?: PricesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PricesCountAggregateInputType | true
    _avg?: PricesAvgAggregateInputType
    _sum?: PricesSumAggregateInputType
    _min?: PricesMinAggregateInputType
    _max?: PricesMaxAggregateInputType
  }


  export type PricesGroupByOutputType = {
    id: number
    price: number
    watchlistId: string | null
    created_at: Date
    updated_at: Date
    _count: PricesCountAggregateOutputType | null
    _avg: PricesAvgAggregateOutputType | null
    _sum: PricesSumAggregateOutputType | null
    _min: PricesMinAggregateOutputType | null
    _max: PricesMaxAggregateOutputType | null
  }

  type GetPricesGroupByPayload<T extends PricesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PricesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PricesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PricesGroupByOutputType[P]>
            : GetScalarType<T[P], PricesGroupByOutputType[P]>
        }
      >
    >


  export type PricesSelect = {
    id?: boolean
    price?: boolean
    watchlistId?: boolean
    created_at?: boolean
    updated_at?: boolean
    Watchlist?: boolean | WatchlistArgs
  }


  export type PricesInclude = {
    Watchlist?: boolean | WatchlistArgs
  }

  export type PricesGetPayload<S extends boolean | null | undefined | PricesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Prices :
    S extends undefined ? never :
    S extends { include: any } & (PricesArgs | PricesFindManyArgs)
    ? Prices  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Watchlist' ? WatchlistGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (PricesArgs | PricesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Watchlist' ? WatchlistGetPayload<S['select'][P]> | null :  P extends keyof Prices ? Prices[P] : never
  } 
      : Prices


  type PricesCountArgs = 
    Omit<PricesFindManyArgs, 'select' | 'include'> & {
      select?: PricesCountAggregateInputType | true
    }

  export interface PricesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Prices that matches the filter.
     * @param {PricesFindUniqueArgs} args - Arguments to find a Prices
     * @example
     * // Get one Prices
     * const prices = await prisma.prices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PricesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PricesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Prices'> extends True ? Prisma__PricesClient<PricesGetPayload<T>> : Prisma__PricesClient<PricesGetPayload<T> | null, null>

    /**
     * Find one Prices that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PricesFindUniqueOrThrowArgs} args - Arguments to find a Prices
     * @example
     * // Get one Prices
     * const prices = await prisma.prices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PricesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PricesFindUniqueOrThrowArgs>
    ): Prisma__PricesClient<PricesGetPayload<T>>

    /**
     * Find the first Prices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricesFindFirstArgs} args - Arguments to find a Prices
     * @example
     * // Get one Prices
     * const prices = await prisma.prices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PricesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PricesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Prices'> extends True ? Prisma__PricesClient<PricesGetPayload<T>> : Prisma__PricesClient<PricesGetPayload<T> | null, null>

    /**
     * Find the first Prices that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricesFindFirstOrThrowArgs} args - Arguments to find a Prices
     * @example
     * // Get one Prices
     * const prices = await prisma.prices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PricesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PricesFindFirstOrThrowArgs>
    ): Prisma__PricesClient<PricesGetPayload<T>>

    /**
     * Find zero or more Prices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prices
     * const prices = await prisma.prices.findMany()
     * 
     * // Get first 10 Prices
     * const prices = await prisma.prices.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pricesWithIdOnly = await prisma.prices.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PricesFindManyArgs>(
      args?: SelectSubset<T, PricesFindManyArgs>
    ): Prisma.PrismaPromise<Array<PricesGetPayload<T>>>

    /**
     * Create a Prices.
     * @param {PricesCreateArgs} args - Arguments to create a Prices.
     * @example
     * // Create one Prices
     * const Prices = await prisma.prices.create({
     *   data: {
     *     // ... data to create a Prices
     *   }
     * })
     * 
    **/
    create<T extends PricesCreateArgs>(
      args: SelectSubset<T, PricesCreateArgs>
    ): Prisma__PricesClient<PricesGetPayload<T>>

    /**
     * Create many Prices.
     *     @param {PricesCreateManyArgs} args - Arguments to create many Prices.
     *     @example
     *     // Create many Prices
     *     const prices = await prisma.prices.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PricesCreateManyArgs>(
      args?: SelectSubset<T, PricesCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Prices.
     * @param {PricesDeleteArgs} args - Arguments to delete one Prices.
     * @example
     * // Delete one Prices
     * const Prices = await prisma.prices.delete({
     *   where: {
     *     // ... filter to delete one Prices
     *   }
     * })
     * 
    **/
    delete<T extends PricesDeleteArgs>(
      args: SelectSubset<T, PricesDeleteArgs>
    ): Prisma__PricesClient<PricesGetPayload<T>>

    /**
     * Update one Prices.
     * @param {PricesUpdateArgs} args - Arguments to update one Prices.
     * @example
     * // Update one Prices
     * const prices = await prisma.prices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PricesUpdateArgs>(
      args: SelectSubset<T, PricesUpdateArgs>
    ): Prisma__PricesClient<PricesGetPayload<T>>

    /**
     * Delete zero or more Prices.
     * @param {PricesDeleteManyArgs} args - Arguments to filter Prices to delete.
     * @example
     * // Delete a few Prices
     * const { count } = await prisma.prices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PricesDeleteManyArgs>(
      args?: SelectSubset<T, PricesDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prices
     * const prices = await prisma.prices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PricesUpdateManyArgs>(
      args: SelectSubset<T, PricesUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Prices.
     * @param {PricesUpsertArgs} args - Arguments to update or create a Prices.
     * @example
     * // Update or create a Prices
     * const prices = await prisma.prices.upsert({
     *   create: {
     *     // ... data to create a Prices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prices we want to update
     *   }
     * })
    **/
    upsert<T extends PricesUpsertArgs>(
      args: SelectSubset<T, PricesUpsertArgs>
    ): Prisma__PricesClient<PricesGetPayload<T>>

    /**
     * Count the number of Prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricesCountArgs} args - Arguments to filter Prices to count.
     * @example
     * // Count the number of Prices
     * const count = await prisma.prices.count({
     *   where: {
     *     // ... the filter for the Prices we want to count
     *   }
     * })
    **/
    count<T extends PricesCountArgs>(
      args?: Subset<T, PricesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PricesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PricesAggregateArgs>(args: Subset<T, PricesAggregateArgs>): Prisma.PrismaPromise<GetPricesAggregateType<T>>

    /**
     * Group by Prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricesGroupByArgs} args - Group by arguments.
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
      T extends PricesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PricesGroupByArgs['orderBy'] }
        : { orderBy?: PricesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PricesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPricesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Prices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PricesClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Watchlist<T extends WatchlistArgs= {}>(args?: Subset<T, WatchlistArgs>): Prisma__WatchlistClient<WatchlistGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Prices base type for findUnique actions
   */
  export type PricesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Prices
     */
    select?: PricesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PricesInclude | null
    /**
     * Filter, which Prices to fetch.
     */
    where: PricesWhereUniqueInput
  }

  /**
   * Prices findUnique
   */
  export interface PricesFindUniqueArgs extends PricesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Prices findUniqueOrThrow
   */
  export type PricesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Prices
     */
    select?: PricesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PricesInclude | null
    /**
     * Filter, which Prices to fetch.
     */
    where: PricesWhereUniqueInput
  }


  /**
   * Prices base type for findFirst actions
   */
  export type PricesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Prices
     */
    select?: PricesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PricesInclude | null
    /**
     * Filter, which Prices to fetch.
     */
    where?: PricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: Enumerable<PricesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prices.
     */
    cursor?: PricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prices.
     */
    distinct?: Enumerable<PricesScalarFieldEnum>
  }

  /**
   * Prices findFirst
   */
  export interface PricesFindFirstArgs extends PricesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Prices findFirstOrThrow
   */
  export type PricesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Prices
     */
    select?: PricesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PricesInclude | null
    /**
     * Filter, which Prices to fetch.
     */
    where?: PricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: Enumerable<PricesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prices.
     */
    cursor?: PricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prices.
     */
    distinct?: Enumerable<PricesScalarFieldEnum>
  }


  /**
   * Prices findMany
   */
  export type PricesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Prices
     */
    select?: PricesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PricesInclude | null
    /**
     * Filter, which Prices to fetch.
     */
    where?: PricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: Enumerable<PricesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prices.
     */
    cursor?: PricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    distinct?: Enumerable<PricesScalarFieldEnum>
  }


  /**
   * Prices create
   */
  export type PricesCreateArgs = {
    /**
     * Select specific fields to fetch from the Prices
     */
    select?: PricesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PricesInclude | null
    /**
     * The data needed to create a Prices.
     */
    data: XOR<PricesCreateInput, PricesUncheckedCreateInput>
  }


  /**
   * Prices createMany
   */
  export type PricesCreateManyArgs = {
    /**
     * The data used to create many Prices.
     */
    data: Enumerable<PricesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Prices update
   */
  export type PricesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Prices
     */
    select?: PricesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PricesInclude | null
    /**
     * The data needed to update a Prices.
     */
    data: XOR<PricesUpdateInput, PricesUncheckedUpdateInput>
    /**
     * Choose, which Prices to update.
     */
    where: PricesWhereUniqueInput
  }


  /**
   * Prices updateMany
   */
  export type PricesUpdateManyArgs = {
    /**
     * The data used to update Prices.
     */
    data: XOR<PricesUpdateManyMutationInput, PricesUncheckedUpdateManyInput>
    /**
     * Filter which Prices to update
     */
    where?: PricesWhereInput
  }


  /**
   * Prices upsert
   */
  export type PricesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Prices
     */
    select?: PricesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PricesInclude | null
    /**
     * The filter to search for the Prices to update in case it exists.
     */
    where: PricesWhereUniqueInput
    /**
     * In case the Prices found by the `where` argument doesn't exist, create a new Prices with this data.
     */
    create: XOR<PricesCreateInput, PricesUncheckedCreateInput>
    /**
     * In case the Prices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PricesUpdateInput, PricesUncheckedUpdateInput>
  }


  /**
   * Prices delete
   */
  export type PricesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Prices
     */
    select?: PricesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PricesInclude | null
    /**
     * Filter which Prices to delete.
     */
    where: PricesWhereUniqueInput
  }


  /**
   * Prices deleteMany
   */
  export type PricesDeleteManyArgs = {
    /**
     * Filter which Prices to delete
     */
    where?: PricesWhereInput
  }


  /**
   * Prices without action
   */
  export type PricesArgs = {
    /**
     * Select specific fields to fetch from the Prices
     */
    select?: PricesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PricesInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const PricesScalarFieldEnum: {
    id: 'id',
    price: 'price',
    watchlistId: 'watchlistId',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PricesScalarFieldEnum = (typeof PricesScalarFieldEnum)[keyof typeof PricesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WatchlistScalarFieldEnum: {
    id: 'id',
    itemId: 'itemId',
    itemName: 'itemName',
    itemImage: 'itemImage',
    itemUrl: 'itemUrl',
    itemProvider: 'itemProvider',
    itemPrice: 'itemPrice',
    itemPreviousPrice: 'itemPreviousPrice',
    itemHighestPrice: 'itemHighestPrice',
    itemLowestPrice: 'itemLowestPrice',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WatchlistScalarFieldEnum = (typeof WatchlistScalarFieldEnum)[keyof typeof WatchlistScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    userId?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    Watchlist?: WatchlistListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    Watchlist?: WatchlistOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    userId?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
  }

  export type WatchlistWhereInput = {
    AND?: Enumerable<WatchlistWhereInput>
    OR?: Enumerable<WatchlistWhereInput>
    NOT?: Enumerable<WatchlistWhereInput>
    id?: IntFilter | number
    itemId?: StringFilter | string
    itemName?: StringFilter | string
    itemImage?: StringFilter | string
    itemUrl?: StringFilter | string
    itemProvider?: StringFilter | string
    itemPrice?: IntFilter | number
    itemPreviousPrice?: IntFilter | number
    itemHighestPrice?: IntFilter | number
    itemLowestPrice?: IntFilter | number
    userId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    newPrices?: PricesListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type WatchlistOrderByWithRelationInput = {
    id?: SortOrder
    itemId?: SortOrder
    itemName?: SortOrder
    itemImage?: SortOrder
    itemUrl?: SortOrder
    itemProvider?: SortOrder
    itemPrice?: SortOrder
    itemPreviousPrice?: SortOrder
    itemHighestPrice?: SortOrder
    itemLowestPrice?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    newPrices?: PricesOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type WatchlistWhereUniqueInput = {
    id?: number
    itemId?: string
  }

  export type WatchlistOrderByWithAggregationInput = {
    id?: SortOrder
    itemId?: SortOrder
    itemName?: SortOrder
    itemImage?: SortOrder
    itemUrl?: SortOrder
    itemProvider?: SortOrder
    itemPrice?: SortOrder
    itemPreviousPrice?: SortOrder
    itemHighestPrice?: SortOrder
    itemLowestPrice?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WatchlistCountOrderByAggregateInput
    _avg?: WatchlistAvgOrderByAggregateInput
    _max?: WatchlistMaxOrderByAggregateInput
    _min?: WatchlistMinOrderByAggregateInput
    _sum?: WatchlistSumOrderByAggregateInput
  }

  export type WatchlistScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WatchlistScalarWhereWithAggregatesInput>
    OR?: Enumerable<WatchlistScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WatchlistScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    itemId?: StringWithAggregatesFilter | string
    itemName?: StringWithAggregatesFilter | string
    itemImage?: StringWithAggregatesFilter | string
    itemUrl?: StringWithAggregatesFilter | string
    itemProvider?: StringWithAggregatesFilter | string
    itemPrice?: IntWithAggregatesFilter | number
    itemPreviousPrice?: IntWithAggregatesFilter | number
    itemHighestPrice?: IntWithAggregatesFilter | number
    itemLowestPrice?: IntWithAggregatesFilter | number
    userId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PricesWhereInput = {
    AND?: Enumerable<PricesWhereInput>
    OR?: Enumerable<PricesWhereInput>
    NOT?: Enumerable<PricesWhereInput>
    id?: IntFilter | number
    price?: IntFilter | number
    watchlistId?: StringNullableFilter | string | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    Watchlist?: XOR<WatchlistRelationFilter, WatchlistWhereInput> | null
  }

  export type PricesOrderByWithRelationInput = {
    id?: SortOrder
    price?: SortOrder
    watchlistId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    Watchlist?: WatchlistOrderByWithRelationInput
  }

  export type PricesWhereUniqueInput = {
    id?: number
  }

  export type PricesOrderByWithAggregationInput = {
    id?: SortOrder
    price?: SortOrder
    watchlistId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PricesCountOrderByAggregateInput
    _avg?: PricesAvgOrderByAggregateInput
    _max?: PricesMaxOrderByAggregateInput
    _min?: PricesMinOrderByAggregateInput
    _sum?: PricesSumOrderByAggregateInput
  }

  export type PricesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PricesScalarWhereWithAggregatesInput>
    OR?: Enumerable<PricesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PricesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    price?: IntWithAggregatesFilter | number
    watchlistId?: StringNullableWithAggregatesFilter | string | null
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    userId: string
    email: string
    password: string
    Watchlist?: WatchlistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    userId: string
    email: string
    password: string
    Watchlist?: WatchlistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Watchlist?: WatchlistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Watchlist?: WatchlistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    userId: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type WatchlistCreateInput = {
    itemId: string
    itemName: string
    itemImage: string
    itemUrl: string
    itemProvider: string
    itemPrice: number
    itemPreviousPrice: number
    itemHighestPrice: number
    itemLowestPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    newPrices?: PricesCreateNestedManyWithoutWatchlistInput
    user: UserCreateNestedOneWithoutWatchlistInput
  }

  export type WatchlistUncheckedCreateInput = {
    id?: number
    itemId: string
    itemName: string
    itemImage: string
    itemUrl: string
    itemProvider: string
    itemPrice: number
    itemPreviousPrice: number
    itemHighestPrice: number
    itemLowestPrice: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    newPrices?: PricesUncheckedCreateNestedManyWithoutWatchlistInput
  }

  export type WatchlistUpdateInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    itemImage?: StringFieldUpdateOperationsInput | string
    itemUrl?: StringFieldUpdateOperationsInput | string
    itemProvider?: StringFieldUpdateOperationsInput | string
    itemPrice?: IntFieldUpdateOperationsInput | number
    itemPreviousPrice?: IntFieldUpdateOperationsInput | number
    itemHighestPrice?: IntFieldUpdateOperationsInput | number
    itemLowestPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newPrices?: PricesUpdateManyWithoutWatchlistNestedInput
    user?: UserUpdateOneRequiredWithoutWatchlistNestedInput
  }

  export type WatchlistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    itemImage?: StringFieldUpdateOperationsInput | string
    itemUrl?: StringFieldUpdateOperationsInput | string
    itemProvider?: StringFieldUpdateOperationsInput | string
    itemPrice?: IntFieldUpdateOperationsInput | number
    itemPreviousPrice?: IntFieldUpdateOperationsInput | number
    itemHighestPrice?: IntFieldUpdateOperationsInput | number
    itemLowestPrice?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newPrices?: PricesUncheckedUpdateManyWithoutWatchlistNestedInput
  }

  export type WatchlistCreateManyInput = {
    id?: number
    itemId: string
    itemName: string
    itemImage: string
    itemUrl: string
    itemProvider: string
    itemPrice: number
    itemPreviousPrice: number
    itemHighestPrice: number
    itemLowestPrice: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchlistUpdateManyMutationInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    itemImage?: StringFieldUpdateOperationsInput | string
    itemUrl?: StringFieldUpdateOperationsInput | string
    itemProvider?: StringFieldUpdateOperationsInput | string
    itemPrice?: IntFieldUpdateOperationsInput | number
    itemPreviousPrice?: IntFieldUpdateOperationsInput | number
    itemHighestPrice?: IntFieldUpdateOperationsInput | number
    itemLowestPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    itemImage?: StringFieldUpdateOperationsInput | string
    itemUrl?: StringFieldUpdateOperationsInput | string
    itemProvider?: StringFieldUpdateOperationsInput | string
    itemPrice?: IntFieldUpdateOperationsInput | number
    itemPreviousPrice?: IntFieldUpdateOperationsInput | number
    itemHighestPrice?: IntFieldUpdateOperationsInput | number
    itemLowestPrice?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricesCreateInput = {
    price: number
    created_at?: Date | string
    updated_at?: Date | string
    Watchlist?: WatchlistCreateNestedOneWithoutNewPricesInput
  }

  export type PricesUncheckedCreateInput = {
    id?: number
    price: number
    watchlistId?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PricesUpdateInput = {
    price?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Watchlist?: WatchlistUpdateOneWithoutNewPricesNestedInput
  }

  export type PricesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    watchlistId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricesCreateManyInput = {
    id?: number
    price: number
    watchlistId?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PricesUpdateManyMutationInput = {
    price?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    watchlistId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type WatchlistListRelationFilter = {
    every?: WatchlistWhereInput
    some?: WatchlistWhereInput
    none?: WatchlistWhereInput
  }

  export type WatchlistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type PricesListRelationFilter = {
    every?: PricesWhereInput
    some?: PricesWhereInput
    none?: PricesWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PricesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WatchlistCountOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    itemName?: SortOrder
    itemImage?: SortOrder
    itemUrl?: SortOrder
    itemProvider?: SortOrder
    itemPrice?: SortOrder
    itemPreviousPrice?: SortOrder
    itemHighestPrice?: SortOrder
    itemLowestPrice?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WatchlistAvgOrderByAggregateInput = {
    id?: SortOrder
    itemPrice?: SortOrder
    itemPreviousPrice?: SortOrder
    itemHighestPrice?: SortOrder
    itemLowestPrice?: SortOrder
  }

  export type WatchlistMaxOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    itemName?: SortOrder
    itemImage?: SortOrder
    itemUrl?: SortOrder
    itemProvider?: SortOrder
    itemPrice?: SortOrder
    itemPreviousPrice?: SortOrder
    itemHighestPrice?: SortOrder
    itemLowestPrice?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WatchlistMinOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    itemName?: SortOrder
    itemImage?: SortOrder
    itemUrl?: SortOrder
    itemProvider?: SortOrder
    itemPrice?: SortOrder
    itemPreviousPrice?: SortOrder
    itemHighestPrice?: SortOrder
    itemLowestPrice?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WatchlistSumOrderByAggregateInput = {
    id?: SortOrder
    itemPrice?: SortOrder
    itemPreviousPrice?: SortOrder
    itemHighestPrice?: SortOrder
    itemLowestPrice?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type WatchlistRelationFilter = {
    is?: WatchlistWhereInput | null
    isNot?: WatchlistWhereInput | null
  }

  export type PricesCountOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    watchlistId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PricesAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type PricesMaxOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    watchlistId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PricesMinOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    watchlistId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PricesSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type WatchlistCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<WatchlistCreateWithoutUserInput>, Enumerable<WatchlistUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<WatchlistCreateOrConnectWithoutUserInput>
    createMany?: WatchlistCreateManyUserInputEnvelope
    connect?: Enumerable<WatchlistWhereUniqueInput>
  }

  export type WatchlistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<WatchlistCreateWithoutUserInput>, Enumerable<WatchlistUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<WatchlistCreateOrConnectWithoutUserInput>
    createMany?: WatchlistCreateManyUserInputEnvelope
    connect?: Enumerable<WatchlistWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type WatchlistUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<WatchlistCreateWithoutUserInput>, Enumerable<WatchlistUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<WatchlistCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<WatchlistUpsertWithWhereUniqueWithoutUserInput>
    createMany?: WatchlistCreateManyUserInputEnvelope
    set?: Enumerable<WatchlistWhereUniqueInput>
    disconnect?: Enumerable<WatchlistWhereUniqueInput>
    delete?: Enumerable<WatchlistWhereUniqueInput>
    connect?: Enumerable<WatchlistWhereUniqueInput>
    update?: Enumerable<WatchlistUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<WatchlistUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<WatchlistScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WatchlistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<WatchlistCreateWithoutUserInput>, Enumerable<WatchlistUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<WatchlistCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<WatchlistUpsertWithWhereUniqueWithoutUserInput>
    createMany?: WatchlistCreateManyUserInputEnvelope
    set?: Enumerable<WatchlistWhereUniqueInput>
    disconnect?: Enumerable<WatchlistWhereUniqueInput>
    delete?: Enumerable<WatchlistWhereUniqueInput>
    connect?: Enumerable<WatchlistWhereUniqueInput>
    update?: Enumerable<WatchlistUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<WatchlistUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<WatchlistScalarWhereInput>
  }

  export type PricesCreateNestedManyWithoutWatchlistInput = {
    create?: XOR<Enumerable<PricesCreateWithoutWatchlistInput>, Enumerable<PricesUncheckedCreateWithoutWatchlistInput>>
    connectOrCreate?: Enumerable<PricesCreateOrConnectWithoutWatchlistInput>
    createMany?: PricesCreateManyWatchlistInputEnvelope
    connect?: Enumerable<PricesWhereUniqueInput>
  }

  export type UserCreateNestedOneWithoutWatchlistInput = {
    create?: XOR<UserCreateWithoutWatchlistInput, UserUncheckedCreateWithoutWatchlistInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchlistInput
    connect?: UserWhereUniqueInput
  }

  export type PricesUncheckedCreateNestedManyWithoutWatchlistInput = {
    create?: XOR<Enumerable<PricesCreateWithoutWatchlistInput>, Enumerable<PricesUncheckedCreateWithoutWatchlistInput>>
    connectOrCreate?: Enumerable<PricesCreateOrConnectWithoutWatchlistInput>
    createMany?: PricesCreateManyWatchlistInputEnvelope
    connect?: Enumerable<PricesWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PricesUpdateManyWithoutWatchlistNestedInput = {
    create?: XOR<Enumerable<PricesCreateWithoutWatchlistInput>, Enumerable<PricesUncheckedCreateWithoutWatchlistInput>>
    connectOrCreate?: Enumerable<PricesCreateOrConnectWithoutWatchlistInput>
    upsert?: Enumerable<PricesUpsertWithWhereUniqueWithoutWatchlistInput>
    createMany?: PricesCreateManyWatchlistInputEnvelope
    set?: Enumerable<PricesWhereUniqueInput>
    disconnect?: Enumerable<PricesWhereUniqueInput>
    delete?: Enumerable<PricesWhereUniqueInput>
    connect?: Enumerable<PricesWhereUniqueInput>
    update?: Enumerable<PricesUpdateWithWhereUniqueWithoutWatchlistInput>
    updateMany?: Enumerable<PricesUpdateManyWithWhereWithoutWatchlistInput>
    deleteMany?: Enumerable<PricesScalarWhereInput>
  }

  export type UserUpdateOneRequiredWithoutWatchlistNestedInput = {
    create?: XOR<UserCreateWithoutWatchlistInput, UserUncheckedCreateWithoutWatchlistInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchlistInput
    upsert?: UserUpsertWithoutWatchlistInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutWatchlistInput, UserUncheckedUpdateWithoutWatchlistInput>
  }

  export type PricesUncheckedUpdateManyWithoutWatchlistNestedInput = {
    create?: XOR<Enumerable<PricesCreateWithoutWatchlistInput>, Enumerable<PricesUncheckedCreateWithoutWatchlistInput>>
    connectOrCreate?: Enumerable<PricesCreateOrConnectWithoutWatchlistInput>
    upsert?: Enumerable<PricesUpsertWithWhereUniqueWithoutWatchlistInput>
    createMany?: PricesCreateManyWatchlistInputEnvelope
    set?: Enumerable<PricesWhereUniqueInput>
    disconnect?: Enumerable<PricesWhereUniqueInput>
    delete?: Enumerable<PricesWhereUniqueInput>
    connect?: Enumerable<PricesWhereUniqueInput>
    update?: Enumerable<PricesUpdateWithWhereUniqueWithoutWatchlistInput>
    updateMany?: Enumerable<PricesUpdateManyWithWhereWithoutWatchlistInput>
    deleteMany?: Enumerable<PricesScalarWhereInput>
  }

  export type WatchlistCreateNestedOneWithoutNewPricesInput = {
    create?: XOR<WatchlistCreateWithoutNewPricesInput, WatchlistUncheckedCreateWithoutNewPricesInput>
    connectOrCreate?: WatchlistCreateOrConnectWithoutNewPricesInput
    connect?: WatchlistWhereUniqueInput
  }

  export type WatchlistUpdateOneWithoutNewPricesNestedInput = {
    create?: XOR<WatchlistCreateWithoutNewPricesInput, WatchlistUncheckedCreateWithoutNewPricesInput>
    connectOrCreate?: WatchlistCreateOrConnectWithoutNewPricesInput
    upsert?: WatchlistUpsertWithoutNewPricesInput
    disconnect?: boolean
    delete?: boolean
    connect?: WatchlistWhereUniqueInput
    update?: XOR<WatchlistUpdateWithoutNewPricesInput, WatchlistUncheckedUpdateWithoutNewPricesInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type WatchlistCreateWithoutUserInput = {
    itemId: string
    itemName: string
    itemImage: string
    itemUrl: string
    itemProvider: string
    itemPrice: number
    itemPreviousPrice: number
    itemHighestPrice: number
    itemLowestPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    newPrices?: PricesCreateNestedManyWithoutWatchlistInput
  }

  export type WatchlistUncheckedCreateWithoutUserInput = {
    id?: number
    itemId: string
    itemName: string
    itemImage: string
    itemUrl: string
    itemProvider: string
    itemPrice: number
    itemPreviousPrice: number
    itemHighestPrice: number
    itemLowestPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    newPrices?: PricesUncheckedCreateNestedManyWithoutWatchlistInput
  }

  export type WatchlistCreateOrConnectWithoutUserInput = {
    where: WatchlistWhereUniqueInput
    create: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput>
  }

  export type WatchlistCreateManyUserInputEnvelope = {
    data: Enumerable<WatchlistCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type WatchlistUpsertWithWhereUniqueWithoutUserInput = {
    where: WatchlistWhereUniqueInput
    update: XOR<WatchlistUpdateWithoutUserInput, WatchlistUncheckedUpdateWithoutUserInput>
    create: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput>
  }

  export type WatchlistUpdateWithWhereUniqueWithoutUserInput = {
    where: WatchlistWhereUniqueInput
    data: XOR<WatchlistUpdateWithoutUserInput, WatchlistUncheckedUpdateWithoutUserInput>
  }

  export type WatchlistUpdateManyWithWhereWithoutUserInput = {
    where: WatchlistScalarWhereInput
    data: XOR<WatchlistUpdateManyMutationInput, WatchlistUncheckedUpdateManyWithoutWatchlistInput>
  }

  export type WatchlistScalarWhereInput = {
    AND?: Enumerable<WatchlistScalarWhereInput>
    OR?: Enumerable<WatchlistScalarWhereInput>
    NOT?: Enumerable<WatchlistScalarWhereInput>
    id?: IntFilter | number
    itemId?: StringFilter | string
    itemName?: StringFilter | string
    itemImage?: StringFilter | string
    itemUrl?: StringFilter | string
    itemProvider?: StringFilter | string
    itemPrice?: IntFilter | number
    itemPreviousPrice?: IntFilter | number
    itemHighestPrice?: IntFilter | number
    itemLowestPrice?: IntFilter | number
    userId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type PricesCreateWithoutWatchlistInput = {
    price: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PricesUncheckedCreateWithoutWatchlistInput = {
    id?: number
    price: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PricesCreateOrConnectWithoutWatchlistInput = {
    where: PricesWhereUniqueInput
    create: XOR<PricesCreateWithoutWatchlistInput, PricesUncheckedCreateWithoutWatchlistInput>
  }

  export type PricesCreateManyWatchlistInputEnvelope = {
    data: Enumerable<PricesCreateManyWatchlistInput>
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutWatchlistInput = {
    userId: string
    email: string
    password: string
  }

  export type UserUncheckedCreateWithoutWatchlistInput = {
    id?: number
    userId: string
    email: string
    password: string
  }

  export type UserCreateOrConnectWithoutWatchlistInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWatchlistInput, UserUncheckedCreateWithoutWatchlistInput>
  }

  export type PricesUpsertWithWhereUniqueWithoutWatchlistInput = {
    where: PricesWhereUniqueInput
    update: XOR<PricesUpdateWithoutWatchlistInput, PricesUncheckedUpdateWithoutWatchlistInput>
    create: XOR<PricesCreateWithoutWatchlistInput, PricesUncheckedCreateWithoutWatchlistInput>
  }

  export type PricesUpdateWithWhereUniqueWithoutWatchlistInput = {
    where: PricesWhereUniqueInput
    data: XOR<PricesUpdateWithoutWatchlistInput, PricesUncheckedUpdateWithoutWatchlistInput>
  }

  export type PricesUpdateManyWithWhereWithoutWatchlistInput = {
    where: PricesScalarWhereInput
    data: XOR<PricesUpdateManyMutationInput, PricesUncheckedUpdateManyWithoutNewPricesInput>
  }

  export type PricesScalarWhereInput = {
    AND?: Enumerable<PricesScalarWhereInput>
    OR?: Enumerable<PricesScalarWhereInput>
    NOT?: Enumerable<PricesScalarWhereInput>
    id?: IntFilter | number
    price?: IntFilter | number
    watchlistId?: StringNullableFilter | string | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type UserUpsertWithoutWatchlistInput = {
    update: XOR<UserUpdateWithoutWatchlistInput, UserUncheckedUpdateWithoutWatchlistInput>
    create: XOR<UserCreateWithoutWatchlistInput, UserUncheckedCreateWithoutWatchlistInput>
  }

  export type UserUpdateWithoutWatchlistInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutWatchlistInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type WatchlistCreateWithoutNewPricesInput = {
    itemId: string
    itemName: string
    itemImage: string
    itemUrl: string
    itemProvider: string
    itemPrice: number
    itemPreviousPrice: number
    itemHighestPrice: number
    itemLowestPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWatchlistInput
  }

  export type WatchlistUncheckedCreateWithoutNewPricesInput = {
    id?: number
    itemId: string
    itemName: string
    itemImage: string
    itemUrl: string
    itemProvider: string
    itemPrice: number
    itemPreviousPrice: number
    itemHighestPrice: number
    itemLowestPrice: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchlistCreateOrConnectWithoutNewPricesInput = {
    where: WatchlistWhereUniqueInput
    create: XOR<WatchlistCreateWithoutNewPricesInput, WatchlistUncheckedCreateWithoutNewPricesInput>
  }

  export type WatchlistUpsertWithoutNewPricesInput = {
    update: XOR<WatchlistUpdateWithoutNewPricesInput, WatchlistUncheckedUpdateWithoutNewPricesInput>
    create: XOR<WatchlistCreateWithoutNewPricesInput, WatchlistUncheckedCreateWithoutNewPricesInput>
  }

  export type WatchlistUpdateWithoutNewPricesInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    itemImage?: StringFieldUpdateOperationsInput | string
    itemUrl?: StringFieldUpdateOperationsInput | string
    itemProvider?: StringFieldUpdateOperationsInput | string
    itemPrice?: IntFieldUpdateOperationsInput | number
    itemPreviousPrice?: IntFieldUpdateOperationsInput | number
    itemHighestPrice?: IntFieldUpdateOperationsInput | number
    itemLowestPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWatchlistNestedInput
  }

  export type WatchlistUncheckedUpdateWithoutNewPricesInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    itemImage?: StringFieldUpdateOperationsInput | string
    itemUrl?: StringFieldUpdateOperationsInput | string
    itemProvider?: StringFieldUpdateOperationsInput | string
    itemPrice?: IntFieldUpdateOperationsInput | number
    itemPreviousPrice?: IntFieldUpdateOperationsInput | number
    itemHighestPrice?: IntFieldUpdateOperationsInput | number
    itemLowestPrice?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistCreateManyUserInput = {
    id?: number
    itemId: string
    itemName: string
    itemImage: string
    itemUrl: string
    itemProvider: string
    itemPrice: number
    itemPreviousPrice: number
    itemHighestPrice: number
    itemLowestPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchlistUpdateWithoutUserInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    itemImage?: StringFieldUpdateOperationsInput | string
    itemUrl?: StringFieldUpdateOperationsInput | string
    itemProvider?: StringFieldUpdateOperationsInput | string
    itemPrice?: IntFieldUpdateOperationsInput | number
    itemPreviousPrice?: IntFieldUpdateOperationsInput | number
    itemHighestPrice?: IntFieldUpdateOperationsInput | number
    itemLowestPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newPrices?: PricesUpdateManyWithoutWatchlistNestedInput
  }

  export type WatchlistUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    itemImage?: StringFieldUpdateOperationsInput | string
    itemUrl?: StringFieldUpdateOperationsInput | string
    itemProvider?: StringFieldUpdateOperationsInput | string
    itemPrice?: IntFieldUpdateOperationsInput | number
    itemPreviousPrice?: IntFieldUpdateOperationsInput | number
    itemHighestPrice?: IntFieldUpdateOperationsInput | number
    itemLowestPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newPrices?: PricesUncheckedUpdateManyWithoutWatchlistNestedInput
  }

  export type WatchlistUncheckedUpdateManyWithoutWatchlistInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    itemImage?: StringFieldUpdateOperationsInput | string
    itemUrl?: StringFieldUpdateOperationsInput | string
    itemProvider?: StringFieldUpdateOperationsInput | string
    itemPrice?: IntFieldUpdateOperationsInput | number
    itemPreviousPrice?: IntFieldUpdateOperationsInput | number
    itemHighestPrice?: IntFieldUpdateOperationsInput | number
    itemLowestPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricesCreateManyWatchlistInput = {
    id?: number
    price: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PricesUpdateWithoutWatchlistInput = {
    price?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricesUncheckedUpdateWithoutWatchlistInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricesUncheckedUpdateManyWithoutNewPricesInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}