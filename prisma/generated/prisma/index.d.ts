
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Map
 * 
 */
export type Map = $Result.DefaultSelection<Prisma.$MapPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model VoteOnComment
 * 
 */
export type VoteOnComment = $Result.DefaultSelection<Prisma.$VoteOnCommentPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Video
 * 
 */
export type Video = $Result.DefaultSelection<Prisma.$VideoPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Flavor
 * 
 */
export type Flavor = $Result.DefaultSelection<Prisma.$FlavorPayload>
/**
 * Model Recipy
 * 
 */
export type Recipy = $Result.DefaultSelection<Prisma.$RecipyPayload>
/**
 * Model VoteOnRecipy
 * 
 */
export type VoteOnRecipy = $Result.DefaultSelection<Prisma.$VoteOnRecipyPayload>
/**
 * Model social
 * 
 */
export type social = $Result.DefaultSelection<Prisma.$socialPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Maps
 * const maps = await prisma.map.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Maps
   * const maps = await prisma.map.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.map`: Exposes CRUD operations for the **Map** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Maps
    * const maps = await prisma.map.findMany()
    * ```
    */
  get map(): Prisma.MapDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.voteOnComment`: Exposes CRUD operations for the **VoteOnComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VoteOnComments
    * const voteOnComments = await prisma.voteOnComment.findMany()
    * ```
    */
  get voteOnComment(): Prisma.VoteOnCommentDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flavor`: Exposes CRUD operations for the **Flavor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flavors
    * const flavors = await prisma.flavor.findMany()
    * ```
    */
  get flavor(): Prisma.FlavorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipy`: Exposes CRUD operations for the **Recipy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipies
    * const recipies = await prisma.recipy.findMany()
    * ```
    */
  get recipy(): Prisma.RecipyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.voteOnRecipy`: Exposes CRUD operations for the **VoteOnRecipy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VoteOnRecipies
    * const voteOnRecipies = await prisma.voteOnRecipy.findMany()
    * ```
    */
  get voteOnRecipy(): Prisma.VoteOnRecipyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.social`: Exposes CRUD operations for the **social** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Socials
    * const socials = await prisma.social.findMany()
    * ```
    */
  get social(): Prisma.socialDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Map: 'Map',
    User: 'User',
    Comment: 'Comment',
    VoteOnComment: 'VoteOnComment',
    Product: 'Product',
    Video: 'Video',
    Category: 'Category',
    Flavor: 'Flavor',
    Recipy: 'Recipy',
    VoteOnRecipy: 'VoteOnRecipy',
    social: 'social'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "map" | "user" | "comment" | "voteOnComment" | "product" | "video" | "category" | "flavor" | "recipy" | "voteOnRecipy" | "social"
      txIsolationLevel: never
    }
    model: {
      Map: {
        payload: Prisma.$MapPayload<ExtArgs>
        fields: Prisma.MapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          findFirst: {
            args: Prisma.MapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          findMany: {
            args: Prisma.MapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>[]
          }
          create: {
            args: Prisma.MapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          createMany: {
            args: Prisma.MapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          update: {
            args: Prisma.MapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          deleteMany: {
            args: Prisma.MapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          aggregate: {
            args: Prisma.MapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMap>
          }
          groupBy: {
            args: Prisma.MapGroupByArgs<ExtArgs>
            result: $Utils.Optional<MapGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MapFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MapAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MapCountArgs<ExtArgs>
            result: $Utils.Optional<MapCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CommentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CommentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      VoteOnComment: {
        payload: Prisma.$VoteOnCommentPayload<ExtArgs>
        fields: Prisma.VoteOnCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoteOnCommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoteOnCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoteOnCommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoteOnCommentPayload>
          }
          findFirst: {
            args: Prisma.VoteOnCommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoteOnCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoteOnCommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoteOnCommentPayload>
          }
          findMany: {
            args: Prisma.VoteOnCommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoteOnCommentPayload>[]
          }
          create: {
            args: Prisma.VoteOnCommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoteOnCommentPayload>
          }
          createMany: {
            args: Prisma.VoteOnCommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VoteOnCommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoteOnCommentPayload>
          }
          update: {
            args: Prisma.VoteOnCommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoteOnCommentPayload>
          }
          deleteMany: {
            args: Prisma.VoteOnCommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoteOnCommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VoteOnCommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoteOnCommentPayload>
          }
          aggregate: {
            args: Prisma.VoteOnCommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoteOnComment>
          }
          groupBy: {
            args: Prisma.VoteOnCommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoteOnCommentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.VoteOnCommentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.VoteOnCommentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.VoteOnCommentCountArgs<ExtArgs>
            result: $Utils.Optional<VoteOnCommentCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProductFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProductAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Video: {
        payload: Prisma.$VideoPayload<ExtArgs>
        fields: Prisma.VideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findFirst: {
            args: Prisma.VideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findMany: {
            args: Prisma.VideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          create: {
            args: Prisma.VideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          createMany: {
            args: Prisma.VideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          update: {
            args: Prisma.VideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          deleteMany: {
            args: Prisma.VideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          aggregate: {
            args: Prisma.VideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideo>
          }
          groupBy: {
            args: Prisma.VideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.VideoFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.VideoAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.VideoCountArgs<ExtArgs>
            result: $Utils.Optional<VideoCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CategoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CategoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Flavor: {
        payload: Prisma.$FlavorPayload<ExtArgs>
        fields: Prisma.FlavorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlavorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlavorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlavorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlavorPayload>
          }
          findFirst: {
            args: Prisma.FlavorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlavorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlavorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlavorPayload>
          }
          findMany: {
            args: Prisma.FlavorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlavorPayload>[]
          }
          create: {
            args: Prisma.FlavorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlavorPayload>
          }
          createMany: {
            args: Prisma.FlavorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FlavorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlavorPayload>
          }
          update: {
            args: Prisma.FlavorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlavorPayload>
          }
          deleteMany: {
            args: Prisma.FlavorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlavorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FlavorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlavorPayload>
          }
          aggregate: {
            args: Prisma.FlavorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlavor>
          }
          groupBy: {
            args: Prisma.FlavorGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlavorGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FlavorFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.FlavorAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.FlavorCountArgs<ExtArgs>
            result: $Utils.Optional<FlavorCountAggregateOutputType> | number
          }
        }
      }
      Recipy: {
        payload: Prisma.$RecipyPayload<ExtArgs>
        fields: Prisma.RecipyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipyPayload>
          }
          findFirst: {
            args: Prisma.RecipyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipyPayload>
          }
          findMany: {
            args: Prisma.RecipyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipyPayload>[]
          }
          create: {
            args: Prisma.RecipyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipyPayload>
          }
          createMany: {
            args: Prisma.RecipyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RecipyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipyPayload>
          }
          update: {
            args: Prisma.RecipyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipyPayload>
          }
          deleteMany: {
            args: Prisma.RecipyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RecipyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipyPayload>
          }
          aggregate: {
            args: Prisma.RecipyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipy>
          }
          groupBy: {
            args: Prisma.RecipyGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipyGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RecipyFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RecipyAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RecipyCountArgs<ExtArgs>
            result: $Utils.Optional<RecipyCountAggregateOutputType> | number
          }
        }
      }
      VoteOnRecipy: {
        payload: Prisma.$VoteOnRecipyPayload<ExtArgs>
        fields: Prisma.VoteOnRecipyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoteOnRecipyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoteOnRecipyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoteOnRecipyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoteOnRecipyPayload>
          }
          findFirst: {
            args: Prisma.VoteOnRecipyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoteOnRecipyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoteOnRecipyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoteOnRecipyPayload>
          }
          findMany: {
            args: Prisma.VoteOnRecipyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoteOnRecipyPayload>[]
          }
          create: {
            args: Prisma.VoteOnRecipyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoteOnRecipyPayload>
          }
          createMany: {
            args: Prisma.VoteOnRecipyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VoteOnRecipyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoteOnRecipyPayload>
          }
          update: {
            args: Prisma.VoteOnRecipyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoteOnRecipyPayload>
          }
          deleteMany: {
            args: Prisma.VoteOnRecipyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoteOnRecipyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VoteOnRecipyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoteOnRecipyPayload>
          }
          aggregate: {
            args: Prisma.VoteOnRecipyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoteOnRecipy>
          }
          groupBy: {
            args: Prisma.VoteOnRecipyGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoteOnRecipyGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.VoteOnRecipyFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.VoteOnRecipyAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.VoteOnRecipyCountArgs<ExtArgs>
            result: $Utils.Optional<VoteOnRecipyCountAggregateOutputType> | number
          }
        }
      }
      social: {
        payload: Prisma.$socialPayload<ExtArgs>
        fields: Prisma.socialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.socialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$socialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.socialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$socialPayload>
          }
          findFirst: {
            args: Prisma.socialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$socialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.socialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$socialPayload>
          }
          findMany: {
            args: Prisma.socialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$socialPayload>[]
          }
          create: {
            args: Prisma.socialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$socialPayload>
          }
          createMany: {
            args: Prisma.socialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.socialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$socialPayload>
          }
          update: {
            args: Prisma.socialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$socialPayload>
          }
          deleteMany: {
            args: Prisma.socialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.socialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.socialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$socialPayload>
          }
          aggregate: {
            args: Prisma.SocialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocial>
          }
          groupBy: {
            args: Prisma.socialGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.socialFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.socialAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.socialCountArgs<ExtArgs>
            result: $Utils.Optional<SocialCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
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
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    map?: MapOmit
    user?: UserOmit
    comment?: CommentOmit
    voteOnComment?: VoteOnCommentOmit
    product?: ProductOmit
    video?: VideoOmit
    category?: CategoryOmit
    flavor?: FlavorOmit
    recipy?: RecipyOmit
    voteOnRecipy?: VoteOnRecipyOmit
    social?: socialOmit
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
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

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
    comments: number
    votesOnComments: number
    votesOnRecipies: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    votesOnComments?: boolean | UserCountOutputTypeCountVotesOnCommentsArgs
    votesOnRecipies?: boolean | UserCountOutputTypeCountVotesOnRecipiesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVotesOnCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteOnCommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVotesOnRecipiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteOnRecipyWhereInput
  }


  /**
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    votes: number
  }

  export type CommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | CommentCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: CommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteOnCommentWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    videos: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videos?: boolean | ProductCountOutputTypeCountVideosArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type FlavorCountOutputType
   */

  export type FlavorCountOutputType = {
    products: number
    recipies: number
  }

  export type FlavorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | FlavorCountOutputTypeCountProductsArgs
    recipies?: boolean | FlavorCountOutputTypeCountRecipiesArgs
  }

  // Custom InputTypes
  /**
   * FlavorCountOutputType without action
   */
  export type FlavorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlavorCountOutputType
     */
    select?: FlavorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FlavorCountOutputType without action
   */
  export type FlavorCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * FlavorCountOutputType without action
   */
  export type FlavorCountOutputTypeCountRecipiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipyWhereInput
  }


  /**
   * Count Type RecipyCountOutputType
   */

  export type RecipyCountOutputType = {
    votes: number
  }

  export type RecipyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | RecipyCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * RecipyCountOutputType without action
   */
  export type RecipyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipyCountOutputType
     */
    select?: RecipyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecipyCountOutputType without action
   */
  export type RecipyCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteOnRecipyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Map
   */

  export type AggregateMap = {
    _count: MapCountAggregateOutputType | null
    _min: MapMinAggregateOutputType | null
    _max: MapMaxAggregateOutputType | null
  }

  export type MapMinAggregateOutputType = {
    id: string | null
    name: string | null
    details: string | null
    img: string | null
    lang: string | null
  }

  export type MapMaxAggregateOutputType = {
    id: string | null
    name: string | null
    details: string | null
    img: string | null
    lang: string | null
  }

  export type MapCountAggregateOutputType = {
    id: number
    name: number
    details: number
    left: number
    top: number
    img: number
    lang: number
    _all: number
  }


  export type MapMinAggregateInputType = {
    id?: true
    name?: true
    details?: true
    img?: true
    lang?: true
  }

  export type MapMaxAggregateInputType = {
    id?: true
    name?: true
    details?: true
    img?: true
    lang?: true
  }

  export type MapCountAggregateInputType = {
    id?: true
    name?: true
    details?: true
    left?: true
    top?: true
    img?: true
    lang?: true
    _all?: true
  }

  export type MapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Map to aggregate.
     */
    where?: MapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maps to fetch.
     */
    orderBy?: MapOrderByWithRelationInput | MapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Maps
    **/
    _count?: true | MapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MapMaxAggregateInputType
  }

  export type GetMapAggregateType<T extends MapAggregateArgs> = {
        [P in keyof T & keyof AggregateMap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMap[P]>
      : GetScalarType<T[P], AggregateMap[P]>
  }




  export type MapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapWhereInput
    orderBy?: MapOrderByWithAggregationInput | MapOrderByWithAggregationInput[]
    by: MapScalarFieldEnum[] | MapScalarFieldEnum
    having?: MapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MapCountAggregateInputType | true
    _min?: MapMinAggregateInputType
    _max?: MapMaxAggregateInputType
  }

  export type MapGroupByOutputType = {
    id: string
    name: string
    details: string
    left: string[]
    top: string[]
    img: string
    lang: string
    _count: MapCountAggregateOutputType | null
    _min: MapMinAggregateOutputType | null
    _max: MapMaxAggregateOutputType | null
  }

  type GetMapGroupByPayload<T extends MapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MapGroupByOutputType[P]>
            : GetScalarType<T[P], MapGroupByOutputType[P]>
        }
      >
    >


  export type MapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    details?: boolean
    left?: boolean
    top?: boolean
    img?: boolean
    lang?: boolean
  }, ExtArgs["result"]["map"]>



  export type MapSelectScalar = {
    id?: boolean
    name?: boolean
    details?: boolean
    left?: boolean
    top?: boolean
    img?: boolean
    lang?: boolean
  }

  export type MapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "details" | "left" | "top" | "img" | "lang", ExtArgs["result"]["map"]>

  export type $MapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Map"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      details: string
      left: string[]
      top: string[]
      img: string
      lang: string
    }, ExtArgs["result"]["map"]>
    composites: {}
  }

  type MapGetPayload<S extends boolean | null | undefined | MapDefaultArgs> = $Result.GetResult<Prisma.$MapPayload, S>

  type MapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MapCountAggregateInputType | true
    }

  export interface MapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Map'], meta: { name: 'Map' } }
    /**
     * Find zero or one Map that matches the filter.
     * @param {MapFindUniqueArgs} args - Arguments to find a Map
     * @example
     * // Get one Map
     * const map = await prisma.map.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MapFindUniqueArgs>(args: SelectSubset<T, MapFindUniqueArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Map that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MapFindUniqueOrThrowArgs} args - Arguments to find a Map
     * @example
     * // Get one Map
     * const map = await prisma.map.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MapFindUniqueOrThrowArgs>(args: SelectSubset<T, MapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Map that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapFindFirstArgs} args - Arguments to find a Map
     * @example
     * // Get one Map
     * const map = await prisma.map.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MapFindFirstArgs>(args?: SelectSubset<T, MapFindFirstArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Map that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapFindFirstOrThrowArgs} args - Arguments to find a Map
     * @example
     * // Get one Map
     * const map = await prisma.map.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MapFindFirstOrThrowArgs>(args?: SelectSubset<T, MapFindFirstOrThrowArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Maps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Maps
     * const maps = await prisma.map.findMany()
     * 
     * // Get first 10 Maps
     * const maps = await prisma.map.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mapWithIdOnly = await prisma.map.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MapFindManyArgs>(args?: SelectSubset<T, MapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Map.
     * @param {MapCreateArgs} args - Arguments to create a Map.
     * @example
     * // Create one Map
     * const Map = await prisma.map.create({
     *   data: {
     *     // ... data to create a Map
     *   }
     * })
     * 
     */
    create<T extends MapCreateArgs>(args: SelectSubset<T, MapCreateArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Maps.
     * @param {MapCreateManyArgs} args - Arguments to create many Maps.
     * @example
     * // Create many Maps
     * const map = await prisma.map.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MapCreateManyArgs>(args?: SelectSubset<T, MapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Map.
     * @param {MapDeleteArgs} args - Arguments to delete one Map.
     * @example
     * // Delete one Map
     * const Map = await prisma.map.delete({
     *   where: {
     *     // ... filter to delete one Map
     *   }
     * })
     * 
     */
    delete<T extends MapDeleteArgs>(args: SelectSubset<T, MapDeleteArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Map.
     * @param {MapUpdateArgs} args - Arguments to update one Map.
     * @example
     * // Update one Map
     * const map = await prisma.map.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MapUpdateArgs>(args: SelectSubset<T, MapUpdateArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Maps.
     * @param {MapDeleteManyArgs} args - Arguments to filter Maps to delete.
     * @example
     * // Delete a few Maps
     * const { count } = await prisma.map.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MapDeleteManyArgs>(args?: SelectSubset<T, MapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Maps
     * const map = await prisma.map.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MapUpdateManyArgs>(args: SelectSubset<T, MapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Map.
     * @param {MapUpsertArgs} args - Arguments to update or create a Map.
     * @example
     * // Update or create a Map
     * const map = await prisma.map.upsert({
     *   create: {
     *     // ... data to create a Map
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Map we want to update
     *   }
     * })
     */
    upsert<T extends MapUpsertArgs>(args: SelectSubset<T, MapUpsertArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Maps that matches the filter.
     * @param {MapFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const map = await prisma.map.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MapFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Map.
     * @param {MapAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const map = await prisma.map.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MapAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Maps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapCountArgs} args - Arguments to filter Maps to count.
     * @example
     * // Count the number of Maps
     * const count = await prisma.map.count({
     *   where: {
     *     // ... the filter for the Maps we want to count
     *   }
     * })
    **/
    count<T extends MapCountArgs>(
      args?: Subset<T, MapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Map.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MapAggregateArgs>(args: Subset<T, MapAggregateArgs>): Prisma.PrismaPromise<GetMapAggregateType<T>>

    /**
     * Group by Map.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapGroupByArgs} args - Group by arguments.
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
      T extends MapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MapGroupByArgs['orderBy'] }
        : { orderBy?: MapGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, MapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Map model
   */
  readonly fields: MapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Map.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Map model
   */
  interface MapFieldRefs {
    readonly id: FieldRef<"Map", 'String'>
    readonly name: FieldRef<"Map", 'String'>
    readonly details: FieldRef<"Map", 'String'>
    readonly left: FieldRef<"Map", 'String[]'>
    readonly top: FieldRef<"Map", 'String[]'>
    readonly img: FieldRef<"Map", 'String'>
    readonly lang: FieldRef<"Map", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Map findUnique
   */
  export type MapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Filter, which Map to fetch.
     */
    where: MapWhereUniqueInput
  }

  /**
   * Map findUniqueOrThrow
   */
  export type MapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Filter, which Map to fetch.
     */
    where: MapWhereUniqueInput
  }

  /**
   * Map findFirst
   */
  export type MapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Filter, which Map to fetch.
     */
    where?: MapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maps to fetch.
     */
    orderBy?: MapOrderByWithRelationInput | MapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maps.
     */
    cursor?: MapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maps.
     */
    distinct?: MapScalarFieldEnum | MapScalarFieldEnum[]
  }

  /**
   * Map findFirstOrThrow
   */
  export type MapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Filter, which Map to fetch.
     */
    where?: MapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maps to fetch.
     */
    orderBy?: MapOrderByWithRelationInput | MapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maps.
     */
    cursor?: MapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maps.
     */
    distinct?: MapScalarFieldEnum | MapScalarFieldEnum[]
  }

  /**
   * Map findMany
   */
  export type MapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Filter, which Maps to fetch.
     */
    where?: MapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maps to fetch.
     */
    orderBy?: MapOrderByWithRelationInput | MapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Maps.
     */
    cursor?: MapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maps.
     */
    skip?: number
    distinct?: MapScalarFieldEnum | MapScalarFieldEnum[]
  }

  /**
   * Map create
   */
  export type MapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * The data needed to create a Map.
     */
    data: XOR<MapCreateInput, MapUncheckedCreateInput>
  }

  /**
   * Map createMany
   */
  export type MapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Maps.
     */
    data: MapCreateManyInput | MapCreateManyInput[]
  }

  /**
   * Map update
   */
  export type MapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * The data needed to update a Map.
     */
    data: XOR<MapUpdateInput, MapUncheckedUpdateInput>
    /**
     * Choose, which Map to update.
     */
    where: MapWhereUniqueInput
  }

  /**
   * Map updateMany
   */
  export type MapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Maps.
     */
    data: XOR<MapUpdateManyMutationInput, MapUncheckedUpdateManyInput>
    /**
     * Filter which Maps to update
     */
    where?: MapWhereInput
    /**
     * Limit how many Maps to update.
     */
    limit?: number
  }

  /**
   * Map upsert
   */
  export type MapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * The filter to search for the Map to update in case it exists.
     */
    where: MapWhereUniqueInput
    /**
     * In case the Map found by the `where` argument doesn't exist, create a new Map with this data.
     */
    create: XOR<MapCreateInput, MapUncheckedCreateInput>
    /**
     * In case the Map was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MapUpdateInput, MapUncheckedUpdateInput>
  }

  /**
   * Map delete
   */
  export type MapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Filter which Map to delete.
     */
    where: MapWhereUniqueInput
  }

  /**
   * Map deleteMany
   */
  export type MapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maps to delete
     */
    where?: MapWhereInput
    /**
     * Limit how many Maps to delete.
     */
    limit?: number
  }

  /**
   * Map findRaw
   */
  export type MapFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Map aggregateRaw
   */
  export type MapAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Map without action
   */
  export type MapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    salt: string | null
    role: string | null
    verified: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    salt: string | null
    role: string | null
    verified: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    salt: number
    role: number
    verified: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    salt?: true
    role?: true
    verified?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    salt?: true
    role?: true
    verified?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    salt?: true
    role?: true
    verified?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    salt: string
    role: string
    verified: boolean
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    salt?: boolean
    role?: boolean
    verified?: boolean
    comments?: boolean | User$commentsArgs<ExtArgs>
    votesOnComments?: boolean | User$votesOnCommentsArgs<ExtArgs>
    votesOnRecipies?: boolean | User$votesOnRecipiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    salt?: boolean
    role?: boolean
    verified?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "salt" | "role" | "verified", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | User$commentsArgs<ExtArgs>
    votesOnComments?: boolean | User$votesOnCommentsArgs<ExtArgs>
    votesOnRecipies?: boolean | User$votesOnRecipiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      comments: Prisma.$CommentPayload<ExtArgs>[]
      votesOnComments: Prisma.$VoteOnCommentPayload<ExtArgs>[]
      votesOnRecipies: Prisma.$VoteOnRecipyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      salt: string
      role: string
      verified: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
      T extends $Utils.Record<'select', any>
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
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    votesOnComments<T extends User$votesOnCommentsArgs<ExtArgs> = {}>(args?: Subset<T, User$votesOnCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoteOnCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    votesOnRecipies<T extends User$votesOnRecipiesArgs<ExtArgs> = {}>(args?: Subset<T, User$votesOnRecipiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoteOnRecipyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly salt: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly verified: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.votesOnComments
   */
  export type User$votesOnCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteOnComment
     */
    select?: VoteOnCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoteOnComment
     */
    omit?: VoteOnCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteOnCommentInclude<ExtArgs> | null
    where?: VoteOnCommentWhereInput
    orderBy?: VoteOnCommentOrderByWithRelationInput | VoteOnCommentOrderByWithRelationInput[]
    cursor?: VoteOnCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteOnCommentScalarFieldEnum | VoteOnCommentScalarFieldEnum[]
  }

  /**
   * User.votesOnRecipies
   */
  export type User$votesOnRecipiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteOnRecipy
     */
    select?: VoteOnRecipySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoteOnRecipy
     */
    omit?: VoteOnRecipyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteOnRecipyInclude<ExtArgs> | null
    where?: VoteOnRecipyWhereInput
    orderBy?: VoteOnRecipyOrderByWithRelationInput | VoteOnRecipyOrderByWithRelationInput[]
    cursor?: VoteOnRecipyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteOnRecipyScalarFieldEnum | VoteOnRecipyScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    text: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    text: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    text: number
    createdAt: number
    userId: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    text?: true
    createdAt?: true
    userId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    text?: true
    createdAt?: true
    userId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    text?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    text: string
    createdAt: Date
    userId: string
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    votes?: boolean | Comment$votesArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>



  export type CommentSelectScalar = {
    id?: boolean
    text?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "createdAt" | "userId", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    votes?: boolean | Comment$votesArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      votes: Prisma.$VoteOnCommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * @param {CommentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const comment = await prisma.comment.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CommentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Comment.
     * @param {CommentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const comment = await prisma.comment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CommentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    votes<T extends Comment$votesArgs<ExtArgs> = {}>(args?: Subset<T, Comment$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoteOnCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly text: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly userId: FieldRef<"Comment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment findRaw
   */
  export type CommentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Comment aggregateRaw
   */
  export type CommentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Comment.votes
   */
  export type Comment$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteOnComment
     */
    select?: VoteOnCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoteOnComment
     */
    omit?: VoteOnCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteOnCommentInclude<ExtArgs> | null
    where?: VoteOnCommentWhereInput
    orderBy?: VoteOnCommentOrderByWithRelationInput | VoteOnCommentOrderByWithRelationInput[]
    cursor?: VoteOnCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteOnCommentScalarFieldEnum | VoteOnCommentScalarFieldEnum[]
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model VoteOnComment
   */

  export type AggregateVoteOnComment = {
    _count: VoteOnCommentCountAggregateOutputType | null
    _min: VoteOnCommentMinAggregateOutputType | null
    _max: VoteOnCommentMaxAggregateOutputType | null
  }

  export type VoteOnCommentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    commentId: string | null
  }

  export type VoteOnCommentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    commentId: string | null
  }

  export type VoteOnCommentCountAggregateOutputType = {
    id: number
    userId: number
    commentId: number
    _all: number
  }


  export type VoteOnCommentMinAggregateInputType = {
    id?: true
    userId?: true
    commentId?: true
  }

  export type VoteOnCommentMaxAggregateInputType = {
    id?: true
    userId?: true
    commentId?: true
  }

  export type VoteOnCommentCountAggregateInputType = {
    id?: true
    userId?: true
    commentId?: true
    _all?: true
  }

  export type VoteOnCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VoteOnComment to aggregate.
     */
    where?: VoteOnCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoteOnComments to fetch.
     */
    orderBy?: VoteOnCommentOrderByWithRelationInput | VoteOnCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoteOnCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoteOnComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoteOnComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VoteOnComments
    **/
    _count?: true | VoteOnCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoteOnCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoteOnCommentMaxAggregateInputType
  }

  export type GetVoteOnCommentAggregateType<T extends VoteOnCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateVoteOnComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoteOnComment[P]>
      : GetScalarType<T[P], AggregateVoteOnComment[P]>
  }




  export type VoteOnCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteOnCommentWhereInput
    orderBy?: VoteOnCommentOrderByWithAggregationInput | VoteOnCommentOrderByWithAggregationInput[]
    by: VoteOnCommentScalarFieldEnum[] | VoteOnCommentScalarFieldEnum
    having?: VoteOnCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoteOnCommentCountAggregateInputType | true
    _min?: VoteOnCommentMinAggregateInputType
    _max?: VoteOnCommentMaxAggregateInputType
  }

  export type VoteOnCommentGroupByOutputType = {
    id: string
    userId: string
    commentId: string
    _count: VoteOnCommentCountAggregateOutputType | null
    _min: VoteOnCommentMinAggregateOutputType | null
    _max: VoteOnCommentMaxAggregateOutputType | null
  }

  type GetVoteOnCommentGroupByPayload<T extends VoteOnCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoteOnCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoteOnCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoteOnCommentGroupByOutputType[P]>
            : GetScalarType<T[P], VoteOnCommentGroupByOutputType[P]>
        }
      >
    >


  export type VoteOnCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    commentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voteOnComment"]>



  export type VoteOnCommentSelectScalar = {
    id?: boolean
    userId?: boolean
    commentId?: boolean
  }

  export type VoteOnCommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "commentId", ExtArgs["result"]["voteOnComment"]>
  export type VoteOnCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }

  export type $VoteOnCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VoteOnComment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      comment: Prisma.$CommentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      commentId: string
    }, ExtArgs["result"]["voteOnComment"]>
    composites: {}
  }

  type VoteOnCommentGetPayload<S extends boolean | null | undefined | VoteOnCommentDefaultArgs> = $Result.GetResult<Prisma.$VoteOnCommentPayload, S>

  type VoteOnCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoteOnCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoteOnCommentCountAggregateInputType | true
    }

  export interface VoteOnCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VoteOnComment'], meta: { name: 'VoteOnComment' } }
    /**
     * Find zero or one VoteOnComment that matches the filter.
     * @param {VoteOnCommentFindUniqueArgs} args - Arguments to find a VoteOnComment
     * @example
     * // Get one VoteOnComment
     * const voteOnComment = await prisma.voteOnComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoteOnCommentFindUniqueArgs>(args: SelectSubset<T, VoteOnCommentFindUniqueArgs<ExtArgs>>): Prisma__VoteOnCommentClient<$Result.GetResult<Prisma.$VoteOnCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VoteOnComment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoteOnCommentFindUniqueOrThrowArgs} args - Arguments to find a VoteOnComment
     * @example
     * // Get one VoteOnComment
     * const voteOnComment = await prisma.voteOnComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoteOnCommentFindUniqueOrThrowArgs>(args: SelectSubset<T, VoteOnCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoteOnCommentClient<$Result.GetResult<Prisma.$VoteOnCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VoteOnComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteOnCommentFindFirstArgs} args - Arguments to find a VoteOnComment
     * @example
     * // Get one VoteOnComment
     * const voteOnComment = await prisma.voteOnComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoteOnCommentFindFirstArgs>(args?: SelectSubset<T, VoteOnCommentFindFirstArgs<ExtArgs>>): Prisma__VoteOnCommentClient<$Result.GetResult<Prisma.$VoteOnCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VoteOnComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteOnCommentFindFirstOrThrowArgs} args - Arguments to find a VoteOnComment
     * @example
     * // Get one VoteOnComment
     * const voteOnComment = await prisma.voteOnComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoteOnCommentFindFirstOrThrowArgs>(args?: SelectSubset<T, VoteOnCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoteOnCommentClient<$Result.GetResult<Prisma.$VoteOnCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VoteOnComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteOnCommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VoteOnComments
     * const voteOnComments = await prisma.voteOnComment.findMany()
     * 
     * // Get first 10 VoteOnComments
     * const voteOnComments = await prisma.voteOnComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voteOnCommentWithIdOnly = await prisma.voteOnComment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoteOnCommentFindManyArgs>(args?: SelectSubset<T, VoteOnCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoteOnCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VoteOnComment.
     * @param {VoteOnCommentCreateArgs} args - Arguments to create a VoteOnComment.
     * @example
     * // Create one VoteOnComment
     * const VoteOnComment = await prisma.voteOnComment.create({
     *   data: {
     *     // ... data to create a VoteOnComment
     *   }
     * })
     * 
     */
    create<T extends VoteOnCommentCreateArgs>(args: SelectSubset<T, VoteOnCommentCreateArgs<ExtArgs>>): Prisma__VoteOnCommentClient<$Result.GetResult<Prisma.$VoteOnCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VoteOnComments.
     * @param {VoteOnCommentCreateManyArgs} args - Arguments to create many VoteOnComments.
     * @example
     * // Create many VoteOnComments
     * const voteOnComment = await prisma.voteOnComment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoteOnCommentCreateManyArgs>(args?: SelectSubset<T, VoteOnCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VoteOnComment.
     * @param {VoteOnCommentDeleteArgs} args - Arguments to delete one VoteOnComment.
     * @example
     * // Delete one VoteOnComment
     * const VoteOnComment = await prisma.voteOnComment.delete({
     *   where: {
     *     // ... filter to delete one VoteOnComment
     *   }
     * })
     * 
     */
    delete<T extends VoteOnCommentDeleteArgs>(args: SelectSubset<T, VoteOnCommentDeleteArgs<ExtArgs>>): Prisma__VoteOnCommentClient<$Result.GetResult<Prisma.$VoteOnCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VoteOnComment.
     * @param {VoteOnCommentUpdateArgs} args - Arguments to update one VoteOnComment.
     * @example
     * // Update one VoteOnComment
     * const voteOnComment = await prisma.voteOnComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoteOnCommentUpdateArgs>(args: SelectSubset<T, VoteOnCommentUpdateArgs<ExtArgs>>): Prisma__VoteOnCommentClient<$Result.GetResult<Prisma.$VoteOnCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VoteOnComments.
     * @param {VoteOnCommentDeleteManyArgs} args - Arguments to filter VoteOnComments to delete.
     * @example
     * // Delete a few VoteOnComments
     * const { count } = await prisma.voteOnComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoteOnCommentDeleteManyArgs>(args?: SelectSubset<T, VoteOnCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VoteOnComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteOnCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VoteOnComments
     * const voteOnComment = await prisma.voteOnComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoteOnCommentUpdateManyArgs>(args: SelectSubset<T, VoteOnCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VoteOnComment.
     * @param {VoteOnCommentUpsertArgs} args - Arguments to update or create a VoteOnComment.
     * @example
     * // Update or create a VoteOnComment
     * const voteOnComment = await prisma.voteOnComment.upsert({
     *   create: {
     *     // ... data to create a VoteOnComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VoteOnComment we want to update
     *   }
     * })
     */
    upsert<T extends VoteOnCommentUpsertArgs>(args: SelectSubset<T, VoteOnCommentUpsertArgs<ExtArgs>>): Prisma__VoteOnCommentClient<$Result.GetResult<Prisma.$VoteOnCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VoteOnComments that matches the filter.
     * @param {VoteOnCommentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const voteOnComment = await prisma.voteOnComment.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: VoteOnCommentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a VoteOnComment.
     * @param {VoteOnCommentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const voteOnComment = await prisma.voteOnComment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: VoteOnCommentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of VoteOnComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteOnCommentCountArgs} args - Arguments to filter VoteOnComments to count.
     * @example
     * // Count the number of VoteOnComments
     * const count = await prisma.voteOnComment.count({
     *   where: {
     *     // ... the filter for the VoteOnComments we want to count
     *   }
     * })
    **/
    count<T extends VoteOnCommentCountArgs>(
      args?: Subset<T, VoteOnCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoteOnCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VoteOnComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteOnCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VoteOnCommentAggregateArgs>(args: Subset<T, VoteOnCommentAggregateArgs>): Prisma.PrismaPromise<GetVoteOnCommentAggregateType<T>>

    /**
     * Group by VoteOnComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteOnCommentGroupByArgs} args - Group by arguments.
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
      T extends VoteOnCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoteOnCommentGroupByArgs['orderBy'] }
        : { orderBy?: VoteOnCommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, VoteOnCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoteOnCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VoteOnComment model
   */
  readonly fields: VoteOnCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VoteOnComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoteOnCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comment<T extends CommentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommentDefaultArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VoteOnComment model
   */
  interface VoteOnCommentFieldRefs {
    readonly id: FieldRef<"VoteOnComment", 'String'>
    readonly userId: FieldRef<"VoteOnComment", 'String'>
    readonly commentId: FieldRef<"VoteOnComment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VoteOnComment findUnique
   */
  export type VoteOnCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteOnComment
     */
    select?: VoteOnCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoteOnComment
     */
    omit?: VoteOnCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteOnCommentInclude<ExtArgs> | null
    /**
     * Filter, which VoteOnComment to fetch.
     */
    where: VoteOnCommentWhereUniqueInput
  }

  /**
   * VoteOnComment findUniqueOrThrow
   */
  export type VoteOnCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteOnComment
     */
    select?: VoteOnCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoteOnComment
     */
    omit?: VoteOnCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteOnCommentInclude<ExtArgs> | null
    /**
     * Filter, which VoteOnComment to fetch.
     */
    where: VoteOnCommentWhereUniqueInput
  }

  /**
   * VoteOnComment findFirst
   */
  export type VoteOnCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteOnComment
     */
    select?: VoteOnCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoteOnComment
     */
    omit?: VoteOnCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteOnCommentInclude<ExtArgs> | null
    /**
     * Filter, which VoteOnComment to fetch.
     */
    where?: VoteOnCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoteOnComments to fetch.
     */
    orderBy?: VoteOnCommentOrderByWithRelationInput | VoteOnCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VoteOnComments.
     */
    cursor?: VoteOnCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoteOnComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoteOnComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VoteOnComments.
     */
    distinct?: VoteOnCommentScalarFieldEnum | VoteOnCommentScalarFieldEnum[]
  }

  /**
   * VoteOnComment findFirstOrThrow
   */
  export type VoteOnCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteOnComment
     */
    select?: VoteOnCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoteOnComment
     */
    omit?: VoteOnCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteOnCommentInclude<ExtArgs> | null
    /**
     * Filter, which VoteOnComment to fetch.
     */
    where?: VoteOnCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoteOnComments to fetch.
     */
    orderBy?: VoteOnCommentOrderByWithRelationInput | VoteOnCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VoteOnComments.
     */
    cursor?: VoteOnCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoteOnComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoteOnComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VoteOnComments.
     */
    distinct?: VoteOnCommentScalarFieldEnum | VoteOnCommentScalarFieldEnum[]
  }

  /**
   * VoteOnComment findMany
   */
  export type VoteOnCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteOnComment
     */
    select?: VoteOnCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoteOnComment
     */
    omit?: VoteOnCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteOnCommentInclude<ExtArgs> | null
    /**
     * Filter, which VoteOnComments to fetch.
     */
    where?: VoteOnCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoteOnComments to fetch.
     */
    orderBy?: VoteOnCommentOrderByWithRelationInput | VoteOnCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VoteOnComments.
     */
    cursor?: VoteOnCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoteOnComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoteOnComments.
     */
    skip?: number
    distinct?: VoteOnCommentScalarFieldEnum | VoteOnCommentScalarFieldEnum[]
  }

  /**
   * VoteOnComment create
   */
  export type VoteOnCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteOnComment
     */
    select?: VoteOnCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoteOnComment
     */
    omit?: VoteOnCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteOnCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a VoteOnComment.
     */
    data: XOR<VoteOnCommentCreateInput, VoteOnCommentUncheckedCreateInput>
  }

  /**
   * VoteOnComment createMany
   */
  export type VoteOnCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VoteOnComments.
     */
    data: VoteOnCommentCreateManyInput | VoteOnCommentCreateManyInput[]
  }

  /**
   * VoteOnComment update
   */
  export type VoteOnCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteOnComment
     */
    select?: VoteOnCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoteOnComment
     */
    omit?: VoteOnCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteOnCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a VoteOnComment.
     */
    data: XOR<VoteOnCommentUpdateInput, VoteOnCommentUncheckedUpdateInput>
    /**
     * Choose, which VoteOnComment to update.
     */
    where: VoteOnCommentWhereUniqueInput
  }

  /**
   * VoteOnComment updateMany
   */
  export type VoteOnCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VoteOnComments.
     */
    data: XOR<VoteOnCommentUpdateManyMutationInput, VoteOnCommentUncheckedUpdateManyInput>
    /**
     * Filter which VoteOnComments to update
     */
    where?: VoteOnCommentWhereInput
    /**
     * Limit how many VoteOnComments to update.
     */
    limit?: number
  }

  /**
   * VoteOnComment upsert
   */
  export type VoteOnCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteOnComment
     */
    select?: VoteOnCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoteOnComment
     */
    omit?: VoteOnCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteOnCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the VoteOnComment to update in case it exists.
     */
    where: VoteOnCommentWhereUniqueInput
    /**
     * In case the VoteOnComment found by the `where` argument doesn't exist, create a new VoteOnComment with this data.
     */
    create: XOR<VoteOnCommentCreateInput, VoteOnCommentUncheckedCreateInput>
    /**
     * In case the VoteOnComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoteOnCommentUpdateInput, VoteOnCommentUncheckedUpdateInput>
  }

  /**
   * VoteOnComment delete
   */
  export type VoteOnCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteOnComment
     */
    select?: VoteOnCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoteOnComment
     */
    omit?: VoteOnCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteOnCommentInclude<ExtArgs> | null
    /**
     * Filter which VoteOnComment to delete.
     */
    where: VoteOnCommentWhereUniqueInput
  }

  /**
   * VoteOnComment deleteMany
   */
  export type VoteOnCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VoteOnComments to delete
     */
    where?: VoteOnCommentWhereInput
    /**
     * Limit how many VoteOnComments to delete.
     */
    limit?: number
  }

  /**
   * VoteOnComment findRaw
   */
  export type VoteOnCommentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * VoteOnComment aggregateRaw
   */
  export type VoteOnCommentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * VoteOnComment without action
   */
  export type VoteOnCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteOnComment
     */
    select?: VoteOnCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoteOnComment
     */
    omit?: VoteOnCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteOnCommentInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    detailes: string | null
    img: string | null
    secondryImg: string | null
    flavorId: string | null
    color: string | null
    p_color: string | null
    categoryId: string | null
    lang: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    detailes: string | null
    img: string | null
    secondryImg: string | null
    flavorId: string | null
    color: string | null
    p_color: string | null
    categoryId: string | null
    lang: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    code: number
    detailes: number
    img: number
    secondryImg: number
    flavorId: number
    color: number
    p_color: number
    categoryId: number
    lang: number
    _all: number
  }


  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    detailes?: true
    img?: true
    secondryImg?: true
    flavorId?: true
    color?: true
    p_color?: true
    categoryId?: true
    lang?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    detailes?: true
    img?: true
    secondryImg?: true
    flavorId?: true
    color?: true
    p_color?: true
    categoryId?: true
    lang?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    detailes?: true
    img?: true
    secondryImg?: true
    flavorId?: true
    color?: true
    p_color?: true
    categoryId?: true
    lang?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    code: string
    detailes: string
    img: string
    secondryImg: string
    flavorId: string
    color: string
    p_color: string
    categoryId: string
    lang: string
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    detailes?: boolean
    img?: boolean
    secondryImg?: boolean
    flavorId?: boolean
    color?: boolean
    p_color?: boolean
    categoryId?: boolean
    lang?: boolean
    flavor?: boolean | FlavorDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    videos?: boolean | Product$videosArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>



  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    detailes?: boolean
    img?: boolean
    secondryImg?: boolean
    flavorId?: boolean
    color?: boolean
    p_color?: boolean
    categoryId?: boolean
    lang?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "detailes" | "img" | "secondryImg" | "flavorId" | "color" | "p_color" | "categoryId" | "lang", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flavor?: boolean | FlavorDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    videos?: boolean | Product$videosArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      flavor: Prisma.$FlavorPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      videos: Prisma.$VideoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      detailes: string
      img: string
      secondryImg: string
      flavorId: string
      color: string
      p_color: string
      categoryId: string
      lang: string
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
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
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * @param {ProductFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const product = await prisma.product.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ProductFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Product.
     * @param {ProductAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const product = await prisma.product.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ProductAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
    >

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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

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
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flavor<T extends FlavorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FlavorDefaultArgs<ExtArgs>>): Prisma__FlavorClient<$Result.GetResult<Prisma.$FlavorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    videos<T extends Product$videosArgs<ExtArgs> = {}>(args?: Subset<T, Product$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly code: FieldRef<"Product", 'String'>
    readonly detailes: FieldRef<"Product", 'String'>
    readonly img: FieldRef<"Product", 'String'>
    readonly secondryImg: FieldRef<"Product", 'String'>
    readonly flavorId: FieldRef<"Product", 'String'>
    readonly color: FieldRef<"Product", 'String'>
    readonly p_color: FieldRef<"Product", 'String'>
    readonly categoryId: FieldRef<"Product", 'String'>
    readonly lang: FieldRef<"Product", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product findRaw
   */
  export type ProductFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Product aggregateRaw
   */
  export type ProductAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Product.videos
   */
  export type Product$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    cursor?: VideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Video
   */

  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoMinAggregateOutputType = {
    id: string | null
    embededLink: string | null
    name: string | null
    productId: string | null
    coverImg: string | null
    lang: string | null
  }

  export type VideoMaxAggregateOutputType = {
    id: string | null
    embededLink: string | null
    name: string | null
    productId: string | null
    coverImg: string | null
    lang: string | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    embededLink: number
    name: number
    productId: number
    coverImg: number
    lang: number
    _all: number
  }


  export type VideoMinAggregateInputType = {
    id?: true
    embededLink?: true
    name?: true
    productId?: true
    coverImg?: true
    lang?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
    embededLink?: true
    name?: true
    productId?: true
    coverImg?: true
    lang?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    embededLink?: true
    name?: true
    productId?: true
    coverImg?: true
    lang?: true
    _all?: true
  }

  export type VideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Video to aggregate.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithAggregationInput | VideoOrderByWithAggregationInput[]
    by: VideoScalarFieldEnum[] | VideoScalarFieldEnum
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }

  export type VideoGroupByOutputType = {
    id: string
    embededLink: string
    name: string
    productId: string
    coverImg: string
    lang: string
    _count: VideoCountAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    embededLink?: boolean
    name?: boolean
    productId?: boolean
    coverImg?: boolean
    lang?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>



  export type VideoSelectScalar = {
    id?: boolean
    embededLink?: boolean
    name?: boolean
    productId?: boolean
    coverImg?: boolean
    lang?: boolean
  }

  export type VideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "embededLink" | "name" | "productId" | "coverImg" | "lang", ExtArgs["result"]["video"]>
  export type VideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $VideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Video"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      embededLink: string
      name: string
      productId: string
      coverImg: string
      lang: string
    }, ExtArgs["result"]["video"]>
    composites: {}
  }

  type VideoGetPayload<S extends boolean | null | undefined | VideoDefaultArgs> = $Result.GetResult<Prisma.$VideoPayload, S>

  type VideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoCountAggregateInputType | true
    }

  export interface VideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Video'], meta: { name: 'Video' } }
    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoFindUniqueArgs>(args: SelectSubset<T, VideoFindUniqueArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Video that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoFindFirstArgs>(args?: SelectSubset<T, VideoFindFirstArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoFindManyArgs>(args?: SelectSubset<T, VideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
     */
    create<T extends VideoCreateArgs>(args: SelectSubset<T, VideoCreateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videos.
     * @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoCreateManyArgs>(args?: SelectSubset<T, VideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
     */
    delete<T extends VideoDeleteArgs>(args: SelectSubset<T, VideoDeleteArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoUpdateArgs>(args: SelectSubset<T, VideoUpdateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoDeleteManyArgs>(args?: SelectSubset<T, VideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoUpdateManyArgs>(args: SelectSubset<T, VideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
     */
    upsert<T extends VideoUpsertArgs>(args: SelectSubset<T, VideoUpsertArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * @param {VideoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const video = await prisma.video.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: VideoFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Video.
     * @param {VideoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const video = await prisma.video.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: VideoAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
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
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Video model
   */
  readonly fields: VideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Video model
   */
  interface VideoFieldRefs {
    readonly id: FieldRef<"Video", 'String'>
    readonly embededLink: FieldRef<"Video", 'String'>
    readonly name: FieldRef<"Video", 'String'>
    readonly productId: FieldRef<"Video", 'String'>
    readonly coverImg: FieldRef<"Video", 'String'>
    readonly lang: FieldRef<"Video", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Video findUnique
   */
  export type VideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findUniqueOrThrow
   */
  export type VideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findFirst
   */
  export type VideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findFirstOrThrow
   */
  export type VideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findMany
   */
  export type VideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video create
   */
  export type VideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to create a Video.
     */
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }

  /**
   * Video createMany
   */
  export type VideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
  }

  /**
   * Video update
   */
  export type VideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to update a Video.
     */
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
  }

  /**
   * Video upsert
   */
  export type VideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The filter to search for the Video to update in case it exists.
     */
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     */
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }

  /**
   * Video delete
   */
  export type VideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter which Video to delete.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to delete
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to delete.
     */
    limit?: number
  }

  /**
   * Video findRaw
   */
  export type VideoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Video aggregateRaw
   */
  export type VideoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Video without action
   */
  export type VideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    detailes: string | null
    img: string | null
    lang: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    detailes: string | null
    img: string | null
    lang: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    code: number
    detailes: number
    img: number
    lang: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    detailes?: true
    img?: true
    lang?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    detailes?: true
    img?: true
    lang?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    detailes?: true
    img?: true
    lang?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    code: string
    detailes: string
    img: string
    lang: string
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    detailes?: boolean
    img?: boolean
    lang?: boolean
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    detailes?: boolean
    img?: boolean
    lang?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "detailes" | "img" | "lang", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      detailes: string
      img: string
      lang: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * @param {CategoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const category = await prisma.category.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CategoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Category.
     * @param {CategoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const category = await prisma.category.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CategoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly code: FieldRef<"Category", 'String'>
    readonly detailes: FieldRef<"Category", 'String'>
    readonly img: FieldRef<"Category", 'String'>
    readonly lang: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category findRaw
   */
  export type CategoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Category aggregateRaw
   */
  export type CategoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Flavor
   */

  export type AggregateFlavor = {
    _count: FlavorCountAggregateOutputType | null
    _min: FlavorMinAggregateOutputType | null
    _max: FlavorMaxAggregateOutputType | null
  }

  export type FlavorMinAggregateOutputType = {
    id: string | null
    name: string | null
    primaryImg: string | null
    lang: string | null
  }

  export type FlavorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    primaryImg: string | null
    lang: string | null
  }

  export type FlavorCountAggregateOutputType = {
    id: number
    name: number
    primaryImg: number
    lang: number
    _all: number
  }


  export type FlavorMinAggregateInputType = {
    id?: true
    name?: true
    primaryImg?: true
    lang?: true
  }

  export type FlavorMaxAggregateInputType = {
    id?: true
    name?: true
    primaryImg?: true
    lang?: true
  }

  export type FlavorCountAggregateInputType = {
    id?: true
    name?: true
    primaryImg?: true
    lang?: true
    _all?: true
  }

  export type FlavorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flavor to aggregate.
     */
    where?: FlavorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flavors to fetch.
     */
    orderBy?: FlavorOrderByWithRelationInput | FlavorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlavorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flavors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flavors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Flavors
    **/
    _count?: true | FlavorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlavorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlavorMaxAggregateInputType
  }

  export type GetFlavorAggregateType<T extends FlavorAggregateArgs> = {
        [P in keyof T & keyof AggregateFlavor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlavor[P]>
      : GetScalarType<T[P], AggregateFlavor[P]>
  }




  export type FlavorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlavorWhereInput
    orderBy?: FlavorOrderByWithAggregationInput | FlavorOrderByWithAggregationInput[]
    by: FlavorScalarFieldEnum[] | FlavorScalarFieldEnum
    having?: FlavorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlavorCountAggregateInputType | true
    _min?: FlavorMinAggregateInputType
    _max?: FlavorMaxAggregateInputType
  }

  export type FlavorGroupByOutputType = {
    id: string
    name: string
    primaryImg: string
    lang: string
    _count: FlavorCountAggregateOutputType | null
    _min: FlavorMinAggregateOutputType | null
    _max: FlavorMaxAggregateOutputType | null
  }

  type GetFlavorGroupByPayload<T extends FlavorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlavorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlavorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlavorGroupByOutputType[P]>
            : GetScalarType<T[P], FlavorGroupByOutputType[P]>
        }
      >
    >


  export type FlavorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    primaryImg?: boolean
    lang?: boolean
    products?: boolean | Flavor$productsArgs<ExtArgs>
    recipies?: boolean | Flavor$recipiesArgs<ExtArgs>
    _count?: boolean | FlavorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flavor"]>



  export type FlavorSelectScalar = {
    id?: boolean
    name?: boolean
    primaryImg?: boolean
    lang?: boolean
  }

  export type FlavorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "primaryImg" | "lang", ExtArgs["result"]["flavor"]>
  export type FlavorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Flavor$productsArgs<ExtArgs>
    recipies?: boolean | Flavor$recipiesArgs<ExtArgs>
    _count?: boolean | FlavorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FlavorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Flavor"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
      recipies: Prisma.$RecipyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      primaryImg: string
      lang: string
    }, ExtArgs["result"]["flavor"]>
    composites: {}
  }

  type FlavorGetPayload<S extends boolean | null | undefined | FlavorDefaultArgs> = $Result.GetResult<Prisma.$FlavorPayload, S>

  type FlavorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlavorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlavorCountAggregateInputType | true
    }

  export interface FlavorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Flavor'], meta: { name: 'Flavor' } }
    /**
     * Find zero or one Flavor that matches the filter.
     * @param {FlavorFindUniqueArgs} args - Arguments to find a Flavor
     * @example
     * // Get one Flavor
     * const flavor = await prisma.flavor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlavorFindUniqueArgs>(args: SelectSubset<T, FlavorFindUniqueArgs<ExtArgs>>): Prisma__FlavorClient<$Result.GetResult<Prisma.$FlavorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flavor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlavorFindUniqueOrThrowArgs} args - Arguments to find a Flavor
     * @example
     * // Get one Flavor
     * const flavor = await prisma.flavor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlavorFindUniqueOrThrowArgs>(args: SelectSubset<T, FlavorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlavorClient<$Result.GetResult<Prisma.$FlavorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flavor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlavorFindFirstArgs} args - Arguments to find a Flavor
     * @example
     * // Get one Flavor
     * const flavor = await prisma.flavor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlavorFindFirstArgs>(args?: SelectSubset<T, FlavorFindFirstArgs<ExtArgs>>): Prisma__FlavorClient<$Result.GetResult<Prisma.$FlavorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flavor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlavorFindFirstOrThrowArgs} args - Arguments to find a Flavor
     * @example
     * // Get one Flavor
     * const flavor = await prisma.flavor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlavorFindFirstOrThrowArgs>(args?: SelectSubset<T, FlavorFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlavorClient<$Result.GetResult<Prisma.$FlavorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flavors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlavorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flavors
     * const flavors = await prisma.flavor.findMany()
     * 
     * // Get first 10 Flavors
     * const flavors = await prisma.flavor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flavorWithIdOnly = await prisma.flavor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlavorFindManyArgs>(args?: SelectSubset<T, FlavorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlavorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flavor.
     * @param {FlavorCreateArgs} args - Arguments to create a Flavor.
     * @example
     * // Create one Flavor
     * const Flavor = await prisma.flavor.create({
     *   data: {
     *     // ... data to create a Flavor
     *   }
     * })
     * 
     */
    create<T extends FlavorCreateArgs>(args: SelectSubset<T, FlavorCreateArgs<ExtArgs>>): Prisma__FlavorClient<$Result.GetResult<Prisma.$FlavorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flavors.
     * @param {FlavorCreateManyArgs} args - Arguments to create many Flavors.
     * @example
     * // Create many Flavors
     * const flavor = await prisma.flavor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlavorCreateManyArgs>(args?: SelectSubset<T, FlavorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Flavor.
     * @param {FlavorDeleteArgs} args - Arguments to delete one Flavor.
     * @example
     * // Delete one Flavor
     * const Flavor = await prisma.flavor.delete({
     *   where: {
     *     // ... filter to delete one Flavor
     *   }
     * })
     * 
     */
    delete<T extends FlavorDeleteArgs>(args: SelectSubset<T, FlavorDeleteArgs<ExtArgs>>): Prisma__FlavorClient<$Result.GetResult<Prisma.$FlavorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flavor.
     * @param {FlavorUpdateArgs} args - Arguments to update one Flavor.
     * @example
     * // Update one Flavor
     * const flavor = await prisma.flavor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlavorUpdateArgs>(args: SelectSubset<T, FlavorUpdateArgs<ExtArgs>>): Prisma__FlavorClient<$Result.GetResult<Prisma.$FlavorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flavors.
     * @param {FlavorDeleteManyArgs} args - Arguments to filter Flavors to delete.
     * @example
     * // Delete a few Flavors
     * const { count } = await prisma.flavor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlavorDeleteManyArgs>(args?: SelectSubset<T, FlavorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flavors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlavorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flavors
     * const flavor = await prisma.flavor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlavorUpdateManyArgs>(args: SelectSubset<T, FlavorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Flavor.
     * @param {FlavorUpsertArgs} args - Arguments to update or create a Flavor.
     * @example
     * // Update or create a Flavor
     * const flavor = await prisma.flavor.upsert({
     *   create: {
     *     // ... data to create a Flavor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flavor we want to update
     *   }
     * })
     */
    upsert<T extends FlavorUpsertArgs>(args: SelectSubset<T, FlavorUpsertArgs<ExtArgs>>): Prisma__FlavorClient<$Result.GetResult<Prisma.$FlavorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flavors that matches the filter.
     * @param {FlavorFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const flavor = await prisma.flavor.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: FlavorFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Flavor.
     * @param {FlavorAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const flavor = await prisma.flavor.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: FlavorAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Flavors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlavorCountArgs} args - Arguments to filter Flavors to count.
     * @example
     * // Count the number of Flavors
     * const count = await prisma.flavor.count({
     *   where: {
     *     // ... the filter for the Flavors we want to count
     *   }
     * })
    **/
    count<T extends FlavorCountArgs>(
      args?: Subset<T, FlavorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlavorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flavor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlavorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlavorAggregateArgs>(args: Subset<T, FlavorAggregateArgs>): Prisma.PrismaPromise<GetFlavorAggregateType<T>>

    /**
     * Group by Flavor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlavorGroupByArgs} args - Group by arguments.
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
      T extends FlavorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlavorGroupByArgs['orderBy'] }
        : { orderBy?: FlavorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, FlavorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlavorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Flavor model
   */
  readonly fields: FlavorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Flavor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlavorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Flavor$productsArgs<ExtArgs> = {}>(args?: Subset<T, Flavor$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recipies<T extends Flavor$recipiesArgs<ExtArgs> = {}>(args?: Subset<T, Flavor$recipiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Flavor model
   */
  interface FlavorFieldRefs {
    readonly id: FieldRef<"Flavor", 'String'>
    readonly name: FieldRef<"Flavor", 'String'>
    readonly primaryImg: FieldRef<"Flavor", 'String'>
    readonly lang: FieldRef<"Flavor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Flavor findUnique
   */
  export type FlavorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flavor
     */
    select?: FlavorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flavor
     */
    omit?: FlavorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlavorInclude<ExtArgs> | null
    /**
     * Filter, which Flavor to fetch.
     */
    where: FlavorWhereUniqueInput
  }

  /**
   * Flavor findUniqueOrThrow
   */
  export type FlavorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flavor
     */
    select?: FlavorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flavor
     */
    omit?: FlavorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlavorInclude<ExtArgs> | null
    /**
     * Filter, which Flavor to fetch.
     */
    where: FlavorWhereUniqueInput
  }

  /**
   * Flavor findFirst
   */
  export type FlavorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flavor
     */
    select?: FlavorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flavor
     */
    omit?: FlavorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlavorInclude<ExtArgs> | null
    /**
     * Filter, which Flavor to fetch.
     */
    where?: FlavorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flavors to fetch.
     */
    orderBy?: FlavorOrderByWithRelationInput | FlavorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flavors.
     */
    cursor?: FlavorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flavors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flavors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flavors.
     */
    distinct?: FlavorScalarFieldEnum | FlavorScalarFieldEnum[]
  }

  /**
   * Flavor findFirstOrThrow
   */
  export type FlavorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flavor
     */
    select?: FlavorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flavor
     */
    omit?: FlavorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlavorInclude<ExtArgs> | null
    /**
     * Filter, which Flavor to fetch.
     */
    where?: FlavorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flavors to fetch.
     */
    orderBy?: FlavorOrderByWithRelationInput | FlavorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flavors.
     */
    cursor?: FlavorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flavors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flavors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flavors.
     */
    distinct?: FlavorScalarFieldEnum | FlavorScalarFieldEnum[]
  }

  /**
   * Flavor findMany
   */
  export type FlavorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flavor
     */
    select?: FlavorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flavor
     */
    omit?: FlavorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlavorInclude<ExtArgs> | null
    /**
     * Filter, which Flavors to fetch.
     */
    where?: FlavorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flavors to fetch.
     */
    orderBy?: FlavorOrderByWithRelationInput | FlavorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Flavors.
     */
    cursor?: FlavorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flavors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flavors.
     */
    skip?: number
    distinct?: FlavorScalarFieldEnum | FlavorScalarFieldEnum[]
  }

  /**
   * Flavor create
   */
  export type FlavorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flavor
     */
    select?: FlavorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flavor
     */
    omit?: FlavorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlavorInclude<ExtArgs> | null
    /**
     * The data needed to create a Flavor.
     */
    data: XOR<FlavorCreateInput, FlavorUncheckedCreateInput>
  }

  /**
   * Flavor createMany
   */
  export type FlavorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Flavors.
     */
    data: FlavorCreateManyInput | FlavorCreateManyInput[]
  }

  /**
   * Flavor update
   */
  export type FlavorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flavor
     */
    select?: FlavorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flavor
     */
    omit?: FlavorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlavorInclude<ExtArgs> | null
    /**
     * The data needed to update a Flavor.
     */
    data: XOR<FlavorUpdateInput, FlavorUncheckedUpdateInput>
    /**
     * Choose, which Flavor to update.
     */
    where: FlavorWhereUniqueInput
  }

  /**
   * Flavor updateMany
   */
  export type FlavorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Flavors.
     */
    data: XOR<FlavorUpdateManyMutationInput, FlavorUncheckedUpdateManyInput>
    /**
     * Filter which Flavors to update
     */
    where?: FlavorWhereInput
    /**
     * Limit how many Flavors to update.
     */
    limit?: number
  }

  /**
   * Flavor upsert
   */
  export type FlavorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flavor
     */
    select?: FlavorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flavor
     */
    omit?: FlavorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlavorInclude<ExtArgs> | null
    /**
     * The filter to search for the Flavor to update in case it exists.
     */
    where: FlavorWhereUniqueInput
    /**
     * In case the Flavor found by the `where` argument doesn't exist, create a new Flavor with this data.
     */
    create: XOR<FlavorCreateInput, FlavorUncheckedCreateInput>
    /**
     * In case the Flavor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlavorUpdateInput, FlavorUncheckedUpdateInput>
  }

  /**
   * Flavor delete
   */
  export type FlavorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flavor
     */
    select?: FlavorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flavor
     */
    omit?: FlavorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlavorInclude<ExtArgs> | null
    /**
     * Filter which Flavor to delete.
     */
    where: FlavorWhereUniqueInput
  }

  /**
   * Flavor deleteMany
   */
  export type FlavorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flavors to delete
     */
    where?: FlavorWhereInput
    /**
     * Limit how many Flavors to delete.
     */
    limit?: number
  }

  /**
   * Flavor findRaw
   */
  export type FlavorFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Flavor aggregateRaw
   */
  export type FlavorAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Flavor.products
   */
  export type Flavor$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Flavor.recipies
   */
  export type Flavor$recipiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipy
     */
    select?: RecipySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipy
     */
    omit?: RecipyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipyInclude<ExtArgs> | null
    where?: RecipyWhereInput
    orderBy?: RecipyOrderByWithRelationInput | RecipyOrderByWithRelationInput[]
    cursor?: RecipyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipyScalarFieldEnum | RecipyScalarFieldEnum[]
  }

  /**
   * Flavor without action
   */
  export type FlavorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flavor
     */
    select?: FlavorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flavor
     */
    omit?: FlavorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlavorInclude<ExtArgs> | null
  }


  /**
   * Model Recipy
   */

  export type AggregateRecipy = {
    _count: RecipyCountAggregateOutputType | null
    _min: RecipyMinAggregateOutputType | null
    _max: RecipyMaxAggregateOutputType | null
  }

  export type RecipyMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    detailes: string | null
    flavorId: string | null
    lang: string | null
  }

  export type RecipyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    detailes: string | null
    flavorId: string | null
    lang: string | null
  }

  export type RecipyCountAggregateOutputType = {
    id: number
    name: number
    code: number
    detailes: number
    flavorId: number
    lang: number
    _all: number
  }


  export type RecipyMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    detailes?: true
    flavorId?: true
    lang?: true
  }

  export type RecipyMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    detailes?: true
    flavorId?: true
    lang?: true
  }

  export type RecipyCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    detailes?: true
    flavorId?: true
    lang?: true
    _all?: true
  }

  export type RecipyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipy to aggregate.
     */
    where?: RecipyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipies to fetch.
     */
    orderBy?: RecipyOrderByWithRelationInput | RecipyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipies
    **/
    _count?: true | RecipyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipyMaxAggregateInputType
  }

  export type GetRecipyAggregateType<T extends RecipyAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipy[P]>
      : GetScalarType<T[P], AggregateRecipy[P]>
  }




  export type RecipyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipyWhereInput
    orderBy?: RecipyOrderByWithAggregationInput | RecipyOrderByWithAggregationInput[]
    by: RecipyScalarFieldEnum[] | RecipyScalarFieldEnum
    having?: RecipyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipyCountAggregateInputType | true
    _min?: RecipyMinAggregateInputType
    _max?: RecipyMaxAggregateInputType
  }

  export type RecipyGroupByOutputType = {
    id: string
    name: string
    code: string
    detailes: string
    flavorId: string
    lang: string
    _count: RecipyCountAggregateOutputType | null
    _min: RecipyMinAggregateOutputType | null
    _max: RecipyMaxAggregateOutputType | null
  }

  type GetRecipyGroupByPayload<T extends RecipyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipyGroupByOutputType[P]>
            : GetScalarType<T[P], RecipyGroupByOutputType[P]>
        }
      >
    >


  export type RecipySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    detailes?: boolean
    flavorId?: boolean
    lang?: boolean
    flavor?: boolean | FlavorDefaultArgs<ExtArgs>
    votes?: boolean | Recipy$votesArgs<ExtArgs>
    _count?: boolean | RecipyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipy"]>



  export type RecipySelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    detailes?: boolean
    flavorId?: boolean
    lang?: boolean
  }

  export type RecipyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "detailes" | "flavorId" | "lang", ExtArgs["result"]["recipy"]>
  export type RecipyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flavor?: boolean | FlavorDefaultArgs<ExtArgs>
    votes?: boolean | Recipy$votesArgs<ExtArgs>
    _count?: boolean | RecipyCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RecipyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recipy"
    objects: {
      flavor: Prisma.$FlavorPayload<ExtArgs>
      votes: Prisma.$VoteOnRecipyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      detailes: string
      flavorId: string
      lang: string
    }, ExtArgs["result"]["recipy"]>
    composites: {}
  }

  type RecipyGetPayload<S extends boolean | null | undefined | RecipyDefaultArgs> = $Result.GetResult<Prisma.$RecipyPayload, S>

  type RecipyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipyCountAggregateInputType | true
    }

  export interface RecipyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recipy'], meta: { name: 'Recipy' } }
    /**
     * Find zero or one Recipy that matches the filter.
     * @param {RecipyFindUniqueArgs} args - Arguments to find a Recipy
     * @example
     * // Get one Recipy
     * const recipy = await prisma.recipy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipyFindUniqueArgs>(args: SelectSubset<T, RecipyFindUniqueArgs<ExtArgs>>): Prisma__RecipyClient<$Result.GetResult<Prisma.$RecipyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recipy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipyFindUniqueOrThrowArgs} args - Arguments to find a Recipy
     * @example
     * // Get one Recipy
     * const recipy = await prisma.recipy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipyFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipyClient<$Result.GetResult<Prisma.$RecipyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipyFindFirstArgs} args - Arguments to find a Recipy
     * @example
     * // Get one Recipy
     * const recipy = await prisma.recipy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipyFindFirstArgs>(args?: SelectSubset<T, RecipyFindFirstArgs<ExtArgs>>): Prisma__RecipyClient<$Result.GetResult<Prisma.$RecipyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipyFindFirstOrThrowArgs} args - Arguments to find a Recipy
     * @example
     * // Get one Recipy
     * const recipy = await prisma.recipy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipyFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipyFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipyClient<$Result.GetResult<Prisma.$RecipyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recipies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipies
     * const recipies = await prisma.recipy.findMany()
     * 
     * // Get first 10 Recipies
     * const recipies = await prisma.recipy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipyWithIdOnly = await prisma.recipy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipyFindManyArgs>(args?: SelectSubset<T, RecipyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recipy.
     * @param {RecipyCreateArgs} args - Arguments to create a Recipy.
     * @example
     * // Create one Recipy
     * const Recipy = await prisma.recipy.create({
     *   data: {
     *     // ... data to create a Recipy
     *   }
     * })
     * 
     */
    create<T extends RecipyCreateArgs>(args: SelectSubset<T, RecipyCreateArgs<ExtArgs>>): Prisma__RecipyClient<$Result.GetResult<Prisma.$RecipyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recipies.
     * @param {RecipyCreateManyArgs} args - Arguments to create many Recipies.
     * @example
     * // Create many Recipies
     * const recipy = await prisma.recipy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipyCreateManyArgs>(args?: SelectSubset<T, RecipyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Recipy.
     * @param {RecipyDeleteArgs} args - Arguments to delete one Recipy.
     * @example
     * // Delete one Recipy
     * const Recipy = await prisma.recipy.delete({
     *   where: {
     *     // ... filter to delete one Recipy
     *   }
     * })
     * 
     */
    delete<T extends RecipyDeleteArgs>(args: SelectSubset<T, RecipyDeleteArgs<ExtArgs>>): Prisma__RecipyClient<$Result.GetResult<Prisma.$RecipyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recipy.
     * @param {RecipyUpdateArgs} args - Arguments to update one Recipy.
     * @example
     * // Update one Recipy
     * const recipy = await prisma.recipy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipyUpdateArgs>(args: SelectSubset<T, RecipyUpdateArgs<ExtArgs>>): Prisma__RecipyClient<$Result.GetResult<Prisma.$RecipyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recipies.
     * @param {RecipyDeleteManyArgs} args - Arguments to filter Recipies to delete.
     * @example
     * // Delete a few Recipies
     * const { count } = await prisma.recipy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipyDeleteManyArgs>(args?: SelectSubset<T, RecipyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipies
     * const recipy = await prisma.recipy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipyUpdateManyArgs>(args: SelectSubset<T, RecipyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Recipy.
     * @param {RecipyUpsertArgs} args - Arguments to update or create a Recipy.
     * @example
     * // Update or create a Recipy
     * const recipy = await prisma.recipy.upsert({
     *   create: {
     *     // ... data to create a Recipy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipy we want to update
     *   }
     * })
     */
    upsert<T extends RecipyUpsertArgs>(args: SelectSubset<T, RecipyUpsertArgs<ExtArgs>>): Prisma__RecipyClient<$Result.GetResult<Prisma.$RecipyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recipies that matches the filter.
     * @param {RecipyFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const recipy = await prisma.recipy.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RecipyFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Recipy.
     * @param {RecipyAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const recipy = await prisma.recipy.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RecipyAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Recipies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipyCountArgs} args - Arguments to filter Recipies to count.
     * @example
     * // Count the number of Recipies
     * const count = await prisma.recipy.count({
     *   where: {
     *     // ... the filter for the Recipies we want to count
     *   }
     * })
    **/
    count<T extends RecipyCountArgs>(
      args?: Subset<T, RecipyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecipyAggregateArgs>(args: Subset<T, RecipyAggregateArgs>): Prisma.PrismaPromise<GetRecipyAggregateType<T>>

    /**
     * Group by Recipy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipyGroupByArgs} args - Group by arguments.
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
      T extends RecipyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipyGroupByArgs['orderBy'] }
        : { orderBy?: RecipyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, RecipyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recipy model
   */
  readonly fields: RecipyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flavor<T extends FlavorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FlavorDefaultArgs<ExtArgs>>): Prisma__FlavorClient<$Result.GetResult<Prisma.$FlavorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    votes<T extends Recipy$votesArgs<ExtArgs> = {}>(args?: Subset<T, Recipy$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoteOnRecipyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Recipy model
   */
  interface RecipyFieldRefs {
    readonly id: FieldRef<"Recipy", 'String'>
    readonly name: FieldRef<"Recipy", 'String'>
    readonly code: FieldRef<"Recipy", 'String'>
    readonly detailes: FieldRef<"Recipy", 'String'>
    readonly flavorId: FieldRef<"Recipy", 'String'>
    readonly lang: FieldRef<"Recipy", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Recipy findUnique
   */
  export type RecipyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipy
     */
    select?: RecipySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipy
     */
    omit?: RecipyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipyInclude<ExtArgs> | null
    /**
     * Filter, which Recipy to fetch.
     */
    where: RecipyWhereUniqueInput
  }

  /**
   * Recipy findUniqueOrThrow
   */
  export type RecipyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipy
     */
    select?: RecipySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipy
     */
    omit?: RecipyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipyInclude<ExtArgs> | null
    /**
     * Filter, which Recipy to fetch.
     */
    where: RecipyWhereUniqueInput
  }

  /**
   * Recipy findFirst
   */
  export type RecipyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipy
     */
    select?: RecipySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipy
     */
    omit?: RecipyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipyInclude<ExtArgs> | null
    /**
     * Filter, which Recipy to fetch.
     */
    where?: RecipyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipies to fetch.
     */
    orderBy?: RecipyOrderByWithRelationInput | RecipyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipies.
     */
    cursor?: RecipyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipies.
     */
    distinct?: RecipyScalarFieldEnum | RecipyScalarFieldEnum[]
  }

  /**
   * Recipy findFirstOrThrow
   */
  export type RecipyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipy
     */
    select?: RecipySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipy
     */
    omit?: RecipyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipyInclude<ExtArgs> | null
    /**
     * Filter, which Recipy to fetch.
     */
    where?: RecipyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipies to fetch.
     */
    orderBy?: RecipyOrderByWithRelationInput | RecipyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipies.
     */
    cursor?: RecipyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipies.
     */
    distinct?: RecipyScalarFieldEnum | RecipyScalarFieldEnum[]
  }

  /**
   * Recipy findMany
   */
  export type RecipyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipy
     */
    select?: RecipySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipy
     */
    omit?: RecipyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipyInclude<ExtArgs> | null
    /**
     * Filter, which Recipies to fetch.
     */
    where?: RecipyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipies to fetch.
     */
    orderBy?: RecipyOrderByWithRelationInput | RecipyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipies.
     */
    cursor?: RecipyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipies.
     */
    skip?: number
    distinct?: RecipyScalarFieldEnum | RecipyScalarFieldEnum[]
  }

  /**
   * Recipy create
   */
  export type RecipyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipy
     */
    select?: RecipySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipy
     */
    omit?: RecipyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipyInclude<ExtArgs> | null
    /**
     * The data needed to create a Recipy.
     */
    data: XOR<RecipyCreateInput, RecipyUncheckedCreateInput>
  }

  /**
   * Recipy createMany
   */
  export type RecipyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recipies.
     */
    data: RecipyCreateManyInput | RecipyCreateManyInput[]
  }

  /**
   * Recipy update
   */
  export type RecipyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipy
     */
    select?: RecipySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipy
     */
    omit?: RecipyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipyInclude<ExtArgs> | null
    /**
     * The data needed to update a Recipy.
     */
    data: XOR<RecipyUpdateInput, RecipyUncheckedUpdateInput>
    /**
     * Choose, which Recipy to update.
     */
    where: RecipyWhereUniqueInput
  }

  /**
   * Recipy updateMany
   */
  export type RecipyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recipies.
     */
    data: XOR<RecipyUpdateManyMutationInput, RecipyUncheckedUpdateManyInput>
    /**
     * Filter which Recipies to update
     */
    where?: RecipyWhereInput
    /**
     * Limit how many Recipies to update.
     */
    limit?: number
  }

  /**
   * Recipy upsert
   */
  export type RecipyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipy
     */
    select?: RecipySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipy
     */
    omit?: RecipyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipyInclude<ExtArgs> | null
    /**
     * The filter to search for the Recipy to update in case it exists.
     */
    where: RecipyWhereUniqueInput
    /**
     * In case the Recipy found by the `where` argument doesn't exist, create a new Recipy with this data.
     */
    create: XOR<RecipyCreateInput, RecipyUncheckedCreateInput>
    /**
     * In case the Recipy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipyUpdateInput, RecipyUncheckedUpdateInput>
  }

  /**
   * Recipy delete
   */
  export type RecipyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipy
     */
    select?: RecipySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipy
     */
    omit?: RecipyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipyInclude<ExtArgs> | null
    /**
     * Filter which Recipy to delete.
     */
    where: RecipyWhereUniqueInput
  }

  /**
   * Recipy deleteMany
   */
  export type RecipyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipies to delete
     */
    where?: RecipyWhereInput
    /**
     * Limit how many Recipies to delete.
     */
    limit?: number
  }

  /**
   * Recipy findRaw
   */
  export type RecipyFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Recipy aggregateRaw
   */
  export type RecipyAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Recipy.votes
   */
  export type Recipy$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteOnRecipy
     */
    select?: VoteOnRecipySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoteOnRecipy
     */
    omit?: VoteOnRecipyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteOnRecipyInclude<ExtArgs> | null
    where?: VoteOnRecipyWhereInput
    orderBy?: VoteOnRecipyOrderByWithRelationInput | VoteOnRecipyOrderByWithRelationInput[]
    cursor?: VoteOnRecipyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteOnRecipyScalarFieldEnum | VoteOnRecipyScalarFieldEnum[]
  }

  /**
   * Recipy without action
   */
  export type RecipyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipy
     */
    select?: RecipySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipy
     */
    omit?: RecipyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipyInclude<ExtArgs> | null
  }


  /**
   * Model VoteOnRecipy
   */

  export type AggregateVoteOnRecipy = {
    _count: VoteOnRecipyCountAggregateOutputType | null
    _min: VoteOnRecipyMinAggregateOutputType | null
    _max: VoteOnRecipyMaxAggregateOutputType | null
  }

  export type VoteOnRecipyMinAggregateOutputType = {
    id: string | null
    userId: string | null
    RecipyId: string | null
  }

  export type VoteOnRecipyMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    RecipyId: string | null
  }

  export type VoteOnRecipyCountAggregateOutputType = {
    id: number
    userId: number
    RecipyId: number
    _all: number
  }


  export type VoteOnRecipyMinAggregateInputType = {
    id?: true
    userId?: true
    RecipyId?: true
  }

  export type VoteOnRecipyMaxAggregateInputType = {
    id?: true
    userId?: true
    RecipyId?: true
  }

  export type VoteOnRecipyCountAggregateInputType = {
    id?: true
    userId?: true
    RecipyId?: true
    _all?: true
  }

  export type VoteOnRecipyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VoteOnRecipy to aggregate.
     */
    where?: VoteOnRecipyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoteOnRecipies to fetch.
     */
    orderBy?: VoteOnRecipyOrderByWithRelationInput | VoteOnRecipyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoteOnRecipyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoteOnRecipies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoteOnRecipies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VoteOnRecipies
    **/
    _count?: true | VoteOnRecipyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoteOnRecipyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoteOnRecipyMaxAggregateInputType
  }

  export type GetVoteOnRecipyAggregateType<T extends VoteOnRecipyAggregateArgs> = {
        [P in keyof T & keyof AggregateVoteOnRecipy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoteOnRecipy[P]>
      : GetScalarType<T[P], AggregateVoteOnRecipy[P]>
  }




  export type VoteOnRecipyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteOnRecipyWhereInput
    orderBy?: VoteOnRecipyOrderByWithAggregationInput | VoteOnRecipyOrderByWithAggregationInput[]
    by: VoteOnRecipyScalarFieldEnum[] | VoteOnRecipyScalarFieldEnum
    having?: VoteOnRecipyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoteOnRecipyCountAggregateInputType | true
    _min?: VoteOnRecipyMinAggregateInputType
    _max?: VoteOnRecipyMaxAggregateInputType
  }

  export type VoteOnRecipyGroupByOutputType = {
    id: string
    userId: string
    RecipyId: string
    _count: VoteOnRecipyCountAggregateOutputType | null
    _min: VoteOnRecipyMinAggregateOutputType | null
    _max: VoteOnRecipyMaxAggregateOutputType | null
  }

  type GetVoteOnRecipyGroupByPayload<T extends VoteOnRecipyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoteOnRecipyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoteOnRecipyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoteOnRecipyGroupByOutputType[P]>
            : GetScalarType<T[P], VoteOnRecipyGroupByOutputType[P]>
        }
      >
    >


  export type VoteOnRecipySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    RecipyId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipy?: boolean | RecipyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voteOnRecipy"]>



  export type VoteOnRecipySelectScalar = {
    id?: boolean
    userId?: boolean
    RecipyId?: boolean
  }

  export type VoteOnRecipyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "RecipyId", ExtArgs["result"]["voteOnRecipy"]>
  export type VoteOnRecipyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipy?: boolean | RecipyDefaultArgs<ExtArgs>
  }

  export type $VoteOnRecipyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VoteOnRecipy"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      recipy: Prisma.$RecipyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      RecipyId: string
    }, ExtArgs["result"]["voteOnRecipy"]>
    composites: {}
  }

  type VoteOnRecipyGetPayload<S extends boolean | null | undefined | VoteOnRecipyDefaultArgs> = $Result.GetResult<Prisma.$VoteOnRecipyPayload, S>

  type VoteOnRecipyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoteOnRecipyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoteOnRecipyCountAggregateInputType | true
    }

  export interface VoteOnRecipyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VoteOnRecipy'], meta: { name: 'VoteOnRecipy' } }
    /**
     * Find zero or one VoteOnRecipy that matches the filter.
     * @param {VoteOnRecipyFindUniqueArgs} args - Arguments to find a VoteOnRecipy
     * @example
     * // Get one VoteOnRecipy
     * const voteOnRecipy = await prisma.voteOnRecipy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoteOnRecipyFindUniqueArgs>(args: SelectSubset<T, VoteOnRecipyFindUniqueArgs<ExtArgs>>): Prisma__VoteOnRecipyClient<$Result.GetResult<Prisma.$VoteOnRecipyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VoteOnRecipy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoteOnRecipyFindUniqueOrThrowArgs} args - Arguments to find a VoteOnRecipy
     * @example
     * // Get one VoteOnRecipy
     * const voteOnRecipy = await prisma.voteOnRecipy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoteOnRecipyFindUniqueOrThrowArgs>(args: SelectSubset<T, VoteOnRecipyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoteOnRecipyClient<$Result.GetResult<Prisma.$VoteOnRecipyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VoteOnRecipy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteOnRecipyFindFirstArgs} args - Arguments to find a VoteOnRecipy
     * @example
     * // Get one VoteOnRecipy
     * const voteOnRecipy = await prisma.voteOnRecipy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoteOnRecipyFindFirstArgs>(args?: SelectSubset<T, VoteOnRecipyFindFirstArgs<ExtArgs>>): Prisma__VoteOnRecipyClient<$Result.GetResult<Prisma.$VoteOnRecipyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VoteOnRecipy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteOnRecipyFindFirstOrThrowArgs} args - Arguments to find a VoteOnRecipy
     * @example
     * // Get one VoteOnRecipy
     * const voteOnRecipy = await prisma.voteOnRecipy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoteOnRecipyFindFirstOrThrowArgs>(args?: SelectSubset<T, VoteOnRecipyFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoteOnRecipyClient<$Result.GetResult<Prisma.$VoteOnRecipyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VoteOnRecipies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteOnRecipyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VoteOnRecipies
     * const voteOnRecipies = await prisma.voteOnRecipy.findMany()
     * 
     * // Get first 10 VoteOnRecipies
     * const voteOnRecipies = await prisma.voteOnRecipy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voteOnRecipyWithIdOnly = await prisma.voteOnRecipy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoteOnRecipyFindManyArgs>(args?: SelectSubset<T, VoteOnRecipyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoteOnRecipyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VoteOnRecipy.
     * @param {VoteOnRecipyCreateArgs} args - Arguments to create a VoteOnRecipy.
     * @example
     * // Create one VoteOnRecipy
     * const VoteOnRecipy = await prisma.voteOnRecipy.create({
     *   data: {
     *     // ... data to create a VoteOnRecipy
     *   }
     * })
     * 
     */
    create<T extends VoteOnRecipyCreateArgs>(args: SelectSubset<T, VoteOnRecipyCreateArgs<ExtArgs>>): Prisma__VoteOnRecipyClient<$Result.GetResult<Prisma.$VoteOnRecipyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VoteOnRecipies.
     * @param {VoteOnRecipyCreateManyArgs} args - Arguments to create many VoteOnRecipies.
     * @example
     * // Create many VoteOnRecipies
     * const voteOnRecipy = await prisma.voteOnRecipy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoteOnRecipyCreateManyArgs>(args?: SelectSubset<T, VoteOnRecipyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VoteOnRecipy.
     * @param {VoteOnRecipyDeleteArgs} args - Arguments to delete one VoteOnRecipy.
     * @example
     * // Delete one VoteOnRecipy
     * const VoteOnRecipy = await prisma.voteOnRecipy.delete({
     *   where: {
     *     // ... filter to delete one VoteOnRecipy
     *   }
     * })
     * 
     */
    delete<T extends VoteOnRecipyDeleteArgs>(args: SelectSubset<T, VoteOnRecipyDeleteArgs<ExtArgs>>): Prisma__VoteOnRecipyClient<$Result.GetResult<Prisma.$VoteOnRecipyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VoteOnRecipy.
     * @param {VoteOnRecipyUpdateArgs} args - Arguments to update one VoteOnRecipy.
     * @example
     * // Update one VoteOnRecipy
     * const voteOnRecipy = await prisma.voteOnRecipy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoteOnRecipyUpdateArgs>(args: SelectSubset<T, VoteOnRecipyUpdateArgs<ExtArgs>>): Prisma__VoteOnRecipyClient<$Result.GetResult<Prisma.$VoteOnRecipyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VoteOnRecipies.
     * @param {VoteOnRecipyDeleteManyArgs} args - Arguments to filter VoteOnRecipies to delete.
     * @example
     * // Delete a few VoteOnRecipies
     * const { count } = await prisma.voteOnRecipy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoteOnRecipyDeleteManyArgs>(args?: SelectSubset<T, VoteOnRecipyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VoteOnRecipies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteOnRecipyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VoteOnRecipies
     * const voteOnRecipy = await prisma.voteOnRecipy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoteOnRecipyUpdateManyArgs>(args: SelectSubset<T, VoteOnRecipyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VoteOnRecipy.
     * @param {VoteOnRecipyUpsertArgs} args - Arguments to update or create a VoteOnRecipy.
     * @example
     * // Update or create a VoteOnRecipy
     * const voteOnRecipy = await prisma.voteOnRecipy.upsert({
     *   create: {
     *     // ... data to create a VoteOnRecipy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VoteOnRecipy we want to update
     *   }
     * })
     */
    upsert<T extends VoteOnRecipyUpsertArgs>(args: SelectSubset<T, VoteOnRecipyUpsertArgs<ExtArgs>>): Prisma__VoteOnRecipyClient<$Result.GetResult<Prisma.$VoteOnRecipyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VoteOnRecipies that matches the filter.
     * @param {VoteOnRecipyFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const voteOnRecipy = await prisma.voteOnRecipy.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: VoteOnRecipyFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a VoteOnRecipy.
     * @param {VoteOnRecipyAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const voteOnRecipy = await prisma.voteOnRecipy.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: VoteOnRecipyAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of VoteOnRecipies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteOnRecipyCountArgs} args - Arguments to filter VoteOnRecipies to count.
     * @example
     * // Count the number of VoteOnRecipies
     * const count = await prisma.voteOnRecipy.count({
     *   where: {
     *     // ... the filter for the VoteOnRecipies we want to count
     *   }
     * })
    **/
    count<T extends VoteOnRecipyCountArgs>(
      args?: Subset<T, VoteOnRecipyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoteOnRecipyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VoteOnRecipy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteOnRecipyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VoteOnRecipyAggregateArgs>(args: Subset<T, VoteOnRecipyAggregateArgs>): Prisma.PrismaPromise<GetVoteOnRecipyAggregateType<T>>

    /**
     * Group by VoteOnRecipy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteOnRecipyGroupByArgs} args - Group by arguments.
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
      T extends VoteOnRecipyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoteOnRecipyGroupByArgs['orderBy'] }
        : { orderBy?: VoteOnRecipyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, VoteOnRecipyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoteOnRecipyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VoteOnRecipy model
   */
  readonly fields: VoteOnRecipyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VoteOnRecipy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoteOnRecipyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipy<T extends RecipyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipyDefaultArgs<ExtArgs>>): Prisma__RecipyClient<$Result.GetResult<Prisma.$RecipyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VoteOnRecipy model
   */
  interface VoteOnRecipyFieldRefs {
    readonly id: FieldRef<"VoteOnRecipy", 'String'>
    readonly userId: FieldRef<"VoteOnRecipy", 'String'>
    readonly RecipyId: FieldRef<"VoteOnRecipy", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VoteOnRecipy findUnique
   */
  export type VoteOnRecipyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteOnRecipy
     */
    select?: VoteOnRecipySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoteOnRecipy
     */
    omit?: VoteOnRecipyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteOnRecipyInclude<ExtArgs> | null
    /**
     * Filter, which VoteOnRecipy to fetch.
     */
    where: VoteOnRecipyWhereUniqueInput
  }

  /**
   * VoteOnRecipy findUniqueOrThrow
   */
  export type VoteOnRecipyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteOnRecipy
     */
    select?: VoteOnRecipySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoteOnRecipy
     */
    omit?: VoteOnRecipyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteOnRecipyInclude<ExtArgs> | null
    /**
     * Filter, which VoteOnRecipy to fetch.
     */
    where: VoteOnRecipyWhereUniqueInput
  }

  /**
   * VoteOnRecipy findFirst
   */
  export type VoteOnRecipyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteOnRecipy
     */
    select?: VoteOnRecipySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoteOnRecipy
     */
    omit?: VoteOnRecipyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteOnRecipyInclude<ExtArgs> | null
    /**
     * Filter, which VoteOnRecipy to fetch.
     */
    where?: VoteOnRecipyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoteOnRecipies to fetch.
     */
    orderBy?: VoteOnRecipyOrderByWithRelationInput | VoteOnRecipyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VoteOnRecipies.
     */
    cursor?: VoteOnRecipyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoteOnRecipies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoteOnRecipies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VoteOnRecipies.
     */
    distinct?: VoteOnRecipyScalarFieldEnum | VoteOnRecipyScalarFieldEnum[]
  }

  /**
   * VoteOnRecipy findFirstOrThrow
   */
  export type VoteOnRecipyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteOnRecipy
     */
    select?: VoteOnRecipySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoteOnRecipy
     */
    omit?: VoteOnRecipyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteOnRecipyInclude<ExtArgs> | null
    /**
     * Filter, which VoteOnRecipy to fetch.
     */
    where?: VoteOnRecipyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoteOnRecipies to fetch.
     */
    orderBy?: VoteOnRecipyOrderByWithRelationInput | VoteOnRecipyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VoteOnRecipies.
     */
    cursor?: VoteOnRecipyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoteOnRecipies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoteOnRecipies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VoteOnRecipies.
     */
    distinct?: VoteOnRecipyScalarFieldEnum | VoteOnRecipyScalarFieldEnum[]
  }

  /**
   * VoteOnRecipy findMany
   */
  export type VoteOnRecipyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteOnRecipy
     */
    select?: VoteOnRecipySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoteOnRecipy
     */
    omit?: VoteOnRecipyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteOnRecipyInclude<ExtArgs> | null
    /**
     * Filter, which VoteOnRecipies to fetch.
     */
    where?: VoteOnRecipyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoteOnRecipies to fetch.
     */
    orderBy?: VoteOnRecipyOrderByWithRelationInput | VoteOnRecipyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VoteOnRecipies.
     */
    cursor?: VoteOnRecipyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoteOnRecipies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoteOnRecipies.
     */
    skip?: number
    distinct?: VoteOnRecipyScalarFieldEnum | VoteOnRecipyScalarFieldEnum[]
  }

  /**
   * VoteOnRecipy create
   */
  export type VoteOnRecipyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteOnRecipy
     */
    select?: VoteOnRecipySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoteOnRecipy
     */
    omit?: VoteOnRecipyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteOnRecipyInclude<ExtArgs> | null
    /**
     * The data needed to create a VoteOnRecipy.
     */
    data: XOR<VoteOnRecipyCreateInput, VoteOnRecipyUncheckedCreateInput>
  }

  /**
   * VoteOnRecipy createMany
   */
  export type VoteOnRecipyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VoteOnRecipies.
     */
    data: VoteOnRecipyCreateManyInput | VoteOnRecipyCreateManyInput[]
  }

  /**
   * VoteOnRecipy update
   */
  export type VoteOnRecipyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteOnRecipy
     */
    select?: VoteOnRecipySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoteOnRecipy
     */
    omit?: VoteOnRecipyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteOnRecipyInclude<ExtArgs> | null
    /**
     * The data needed to update a VoteOnRecipy.
     */
    data: XOR<VoteOnRecipyUpdateInput, VoteOnRecipyUncheckedUpdateInput>
    /**
     * Choose, which VoteOnRecipy to update.
     */
    where: VoteOnRecipyWhereUniqueInput
  }

  /**
   * VoteOnRecipy updateMany
   */
  export type VoteOnRecipyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VoteOnRecipies.
     */
    data: XOR<VoteOnRecipyUpdateManyMutationInput, VoteOnRecipyUncheckedUpdateManyInput>
    /**
     * Filter which VoteOnRecipies to update
     */
    where?: VoteOnRecipyWhereInput
    /**
     * Limit how many VoteOnRecipies to update.
     */
    limit?: number
  }

  /**
   * VoteOnRecipy upsert
   */
  export type VoteOnRecipyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteOnRecipy
     */
    select?: VoteOnRecipySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoteOnRecipy
     */
    omit?: VoteOnRecipyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteOnRecipyInclude<ExtArgs> | null
    /**
     * The filter to search for the VoteOnRecipy to update in case it exists.
     */
    where: VoteOnRecipyWhereUniqueInput
    /**
     * In case the VoteOnRecipy found by the `where` argument doesn't exist, create a new VoteOnRecipy with this data.
     */
    create: XOR<VoteOnRecipyCreateInput, VoteOnRecipyUncheckedCreateInput>
    /**
     * In case the VoteOnRecipy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoteOnRecipyUpdateInput, VoteOnRecipyUncheckedUpdateInput>
  }

  /**
   * VoteOnRecipy delete
   */
  export type VoteOnRecipyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteOnRecipy
     */
    select?: VoteOnRecipySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoteOnRecipy
     */
    omit?: VoteOnRecipyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteOnRecipyInclude<ExtArgs> | null
    /**
     * Filter which VoteOnRecipy to delete.
     */
    where: VoteOnRecipyWhereUniqueInput
  }

  /**
   * VoteOnRecipy deleteMany
   */
  export type VoteOnRecipyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VoteOnRecipies to delete
     */
    where?: VoteOnRecipyWhereInput
    /**
     * Limit how many VoteOnRecipies to delete.
     */
    limit?: number
  }

  /**
   * VoteOnRecipy findRaw
   */
  export type VoteOnRecipyFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * VoteOnRecipy aggregateRaw
   */
  export type VoteOnRecipyAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * VoteOnRecipy without action
   */
  export type VoteOnRecipyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteOnRecipy
     */
    select?: VoteOnRecipySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoteOnRecipy
     */
    omit?: VoteOnRecipyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteOnRecipyInclude<ExtArgs> | null
  }


  /**
   * Model social
   */

  export type AggregateSocial = {
    _count: SocialCountAggregateOutputType | null
    _min: SocialMinAggregateOutputType | null
    _max: SocialMaxAggregateOutputType | null
  }

  export type SocialMinAggregateOutputType = {
    id: string | null
    name: string | null
    channelLink: string | null
    embededlink: string | null
  }

  export type SocialMaxAggregateOutputType = {
    id: string | null
    name: string | null
    channelLink: string | null
    embededlink: string | null
  }

  export type SocialCountAggregateOutputType = {
    id: number
    name: number
    channelLink: number
    embededlink: number
    _all: number
  }


  export type SocialMinAggregateInputType = {
    id?: true
    name?: true
    channelLink?: true
    embededlink?: true
  }

  export type SocialMaxAggregateInputType = {
    id?: true
    name?: true
    channelLink?: true
    embededlink?: true
  }

  export type SocialCountAggregateInputType = {
    id?: true
    name?: true
    channelLink?: true
    embededlink?: true
    _all?: true
  }

  export type SocialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which social to aggregate.
     */
    where?: socialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of socials to fetch.
     */
    orderBy?: socialOrderByWithRelationInput | socialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: socialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` socials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned socials
    **/
    _count?: true | SocialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialMaxAggregateInputType
  }

  export type GetSocialAggregateType<T extends SocialAggregateArgs> = {
        [P in keyof T & keyof AggregateSocial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocial[P]>
      : GetScalarType<T[P], AggregateSocial[P]>
  }




  export type socialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: socialWhereInput
    orderBy?: socialOrderByWithAggregationInput | socialOrderByWithAggregationInput[]
    by: SocialScalarFieldEnum[] | SocialScalarFieldEnum
    having?: socialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialCountAggregateInputType | true
    _min?: SocialMinAggregateInputType
    _max?: SocialMaxAggregateInputType
  }

  export type SocialGroupByOutputType = {
    id: string
    name: string
    channelLink: string
    embededlink: string
    _count: SocialCountAggregateOutputType | null
    _min: SocialMinAggregateOutputType | null
    _max: SocialMaxAggregateOutputType | null
  }

  type GetSocialGroupByPayload<T extends socialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialGroupByOutputType[P]>
            : GetScalarType<T[P], SocialGroupByOutputType[P]>
        }
      >
    >


  export type socialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    channelLink?: boolean
    embededlink?: boolean
  }, ExtArgs["result"]["social"]>



  export type socialSelectScalar = {
    id?: boolean
    name?: boolean
    channelLink?: boolean
    embededlink?: boolean
  }

  export type socialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "channelLink" | "embededlink", ExtArgs["result"]["social"]>

  export type $socialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "social"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      channelLink: string
      embededlink: string
    }, ExtArgs["result"]["social"]>
    composites: {}
  }

  type socialGetPayload<S extends boolean | null | undefined | socialDefaultArgs> = $Result.GetResult<Prisma.$socialPayload, S>

  type socialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<socialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocialCountAggregateInputType | true
    }

  export interface socialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['social'], meta: { name: 'social' } }
    /**
     * Find zero or one Social that matches the filter.
     * @param {socialFindUniqueArgs} args - Arguments to find a Social
     * @example
     * // Get one Social
     * const social = await prisma.social.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends socialFindUniqueArgs>(args: SelectSubset<T, socialFindUniqueArgs<ExtArgs>>): Prisma__socialClient<$Result.GetResult<Prisma.$socialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Social that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {socialFindUniqueOrThrowArgs} args - Arguments to find a Social
     * @example
     * // Get one Social
     * const social = await prisma.social.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends socialFindUniqueOrThrowArgs>(args: SelectSubset<T, socialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__socialClient<$Result.GetResult<Prisma.$socialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Social that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {socialFindFirstArgs} args - Arguments to find a Social
     * @example
     * // Get one Social
     * const social = await prisma.social.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends socialFindFirstArgs>(args?: SelectSubset<T, socialFindFirstArgs<ExtArgs>>): Prisma__socialClient<$Result.GetResult<Prisma.$socialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Social that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {socialFindFirstOrThrowArgs} args - Arguments to find a Social
     * @example
     * // Get one Social
     * const social = await prisma.social.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends socialFindFirstOrThrowArgs>(args?: SelectSubset<T, socialFindFirstOrThrowArgs<ExtArgs>>): Prisma__socialClient<$Result.GetResult<Prisma.$socialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Socials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {socialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Socials
     * const socials = await prisma.social.findMany()
     * 
     * // Get first 10 Socials
     * const socials = await prisma.social.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialWithIdOnly = await prisma.social.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends socialFindManyArgs>(args?: SelectSubset<T, socialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$socialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Social.
     * @param {socialCreateArgs} args - Arguments to create a Social.
     * @example
     * // Create one Social
     * const Social = await prisma.social.create({
     *   data: {
     *     // ... data to create a Social
     *   }
     * })
     * 
     */
    create<T extends socialCreateArgs>(args: SelectSubset<T, socialCreateArgs<ExtArgs>>): Prisma__socialClient<$Result.GetResult<Prisma.$socialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Socials.
     * @param {socialCreateManyArgs} args - Arguments to create many Socials.
     * @example
     * // Create many Socials
     * const social = await prisma.social.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends socialCreateManyArgs>(args?: SelectSubset<T, socialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Social.
     * @param {socialDeleteArgs} args - Arguments to delete one Social.
     * @example
     * // Delete one Social
     * const Social = await prisma.social.delete({
     *   where: {
     *     // ... filter to delete one Social
     *   }
     * })
     * 
     */
    delete<T extends socialDeleteArgs>(args: SelectSubset<T, socialDeleteArgs<ExtArgs>>): Prisma__socialClient<$Result.GetResult<Prisma.$socialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Social.
     * @param {socialUpdateArgs} args - Arguments to update one Social.
     * @example
     * // Update one Social
     * const social = await prisma.social.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends socialUpdateArgs>(args: SelectSubset<T, socialUpdateArgs<ExtArgs>>): Prisma__socialClient<$Result.GetResult<Prisma.$socialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Socials.
     * @param {socialDeleteManyArgs} args - Arguments to filter Socials to delete.
     * @example
     * // Delete a few Socials
     * const { count } = await prisma.social.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends socialDeleteManyArgs>(args?: SelectSubset<T, socialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Socials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {socialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Socials
     * const social = await prisma.social.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends socialUpdateManyArgs>(args: SelectSubset<T, socialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Social.
     * @param {socialUpsertArgs} args - Arguments to update or create a Social.
     * @example
     * // Update or create a Social
     * const social = await prisma.social.upsert({
     *   create: {
     *     // ... data to create a Social
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Social we want to update
     *   }
     * })
     */
    upsert<T extends socialUpsertArgs>(args: SelectSubset<T, socialUpsertArgs<ExtArgs>>): Prisma__socialClient<$Result.GetResult<Prisma.$socialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Socials that matches the filter.
     * @param {socialFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const social = await prisma.social.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: socialFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Social.
     * @param {socialAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const social = await prisma.social.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: socialAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Socials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {socialCountArgs} args - Arguments to filter Socials to count.
     * @example
     * // Count the number of Socials
     * const count = await prisma.social.count({
     *   where: {
     *     // ... the filter for the Socials we want to count
     *   }
     * })
    **/
    count<T extends socialCountArgs>(
      args?: Subset<T, socialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Social.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocialAggregateArgs>(args: Subset<T, SocialAggregateArgs>): Prisma.PrismaPromise<GetSocialAggregateType<T>>

    /**
     * Group by Social.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {socialGroupByArgs} args - Group by arguments.
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
      T extends socialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: socialGroupByArgs['orderBy'] }
        : { orderBy?: socialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, socialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the social model
   */
  readonly fields: socialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for social.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__socialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the social model
   */
  interface socialFieldRefs {
    readonly id: FieldRef<"social", 'String'>
    readonly name: FieldRef<"social", 'String'>
    readonly channelLink: FieldRef<"social", 'String'>
    readonly embededlink: FieldRef<"social", 'String'>
  }
    

  // Custom InputTypes
  /**
   * social findUnique
   */
  export type socialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social
     */
    select?: socialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the social
     */
    omit?: socialOmit<ExtArgs> | null
    /**
     * Filter, which social to fetch.
     */
    where: socialWhereUniqueInput
  }

  /**
   * social findUniqueOrThrow
   */
  export type socialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social
     */
    select?: socialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the social
     */
    omit?: socialOmit<ExtArgs> | null
    /**
     * Filter, which social to fetch.
     */
    where: socialWhereUniqueInput
  }

  /**
   * social findFirst
   */
  export type socialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social
     */
    select?: socialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the social
     */
    omit?: socialOmit<ExtArgs> | null
    /**
     * Filter, which social to fetch.
     */
    where?: socialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of socials to fetch.
     */
    orderBy?: socialOrderByWithRelationInput | socialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for socials.
     */
    cursor?: socialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` socials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of socials.
     */
    distinct?: SocialScalarFieldEnum | SocialScalarFieldEnum[]
  }

  /**
   * social findFirstOrThrow
   */
  export type socialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social
     */
    select?: socialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the social
     */
    omit?: socialOmit<ExtArgs> | null
    /**
     * Filter, which social to fetch.
     */
    where?: socialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of socials to fetch.
     */
    orderBy?: socialOrderByWithRelationInput | socialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for socials.
     */
    cursor?: socialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` socials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of socials.
     */
    distinct?: SocialScalarFieldEnum | SocialScalarFieldEnum[]
  }

  /**
   * social findMany
   */
  export type socialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social
     */
    select?: socialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the social
     */
    omit?: socialOmit<ExtArgs> | null
    /**
     * Filter, which socials to fetch.
     */
    where?: socialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of socials to fetch.
     */
    orderBy?: socialOrderByWithRelationInput | socialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing socials.
     */
    cursor?: socialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` socials.
     */
    skip?: number
    distinct?: SocialScalarFieldEnum | SocialScalarFieldEnum[]
  }

  /**
   * social create
   */
  export type socialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social
     */
    select?: socialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the social
     */
    omit?: socialOmit<ExtArgs> | null
    /**
     * The data needed to create a social.
     */
    data: XOR<socialCreateInput, socialUncheckedCreateInput>
  }

  /**
   * social createMany
   */
  export type socialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many socials.
     */
    data: socialCreateManyInput | socialCreateManyInput[]
  }

  /**
   * social update
   */
  export type socialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social
     */
    select?: socialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the social
     */
    omit?: socialOmit<ExtArgs> | null
    /**
     * The data needed to update a social.
     */
    data: XOR<socialUpdateInput, socialUncheckedUpdateInput>
    /**
     * Choose, which social to update.
     */
    where: socialWhereUniqueInput
  }

  /**
   * social updateMany
   */
  export type socialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update socials.
     */
    data: XOR<socialUpdateManyMutationInput, socialUncheckedUpdateManyInput>
    /**
     * Filter which socials to update
     */
    where?: socialWhereInput
    /**
     * Limit how many socials to update.
     */
    limit?: number
  }

  /**
   * social upsert
   */
  export type socialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social
     */
    select?: socialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the social
     */
    omit?: socialOmit<ExtArgs> | null
    /**
     * The filter to search for the social to update in case it exists.
     */
    where: socialWhereUniqueInput
    /**
     * In case the social found by the `where` argument doesn't exist, create a new social with this data.
     */
    create: XOR<socialCreateInput, socialUncheckedCreateInput>
    /**
     * In case the social was found with the provided `where` argument, update it with this data.
     */
    update: XOR<socialUpdateInput, socialUncheckedUpdateInput>
  }

  /**
   * social delete
   */
  export type socialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social
     */
    select?: socialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the social
     */
    omit?: socialOmit<ExtArgs> | null
    /**
     * Filter which social to delete.
     */
    where: socialWhereUniqueInput
  }

  /**
   * social deleteMany
   */
  export type socialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which socials to delete
     */
    where?: socialWhereInput
    /**
     * Limit how many socials to delete.
     */
    limit?: number
  }

  /**
   * social findRaw
   */
  export type socialFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * social aggregateRaw
   */
  export type socialAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * social without action
   */
  export type socialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social
     */
    select?: socialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the social
     */
    omit?: socialOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const MapScalarFieldEnum: {
    id: 'id',
    name: 'name',
    details: 'details',
    left: 'left',
    top: 'top',
    img: 'img',
    lang: 'lang'
  };

  export type MapScalarFieldEnum = (typeof MapScalarFieldEnum)[keyof typeof MapScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    salt: 'salt',
    role: 'role',
    verified: 'verified'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    text: 'text',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const VoteOnCommentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    commentId: 'commentId'
  };

  export type VoteOnCommentScalarFieldEnum = (typeof VoteOnCommentScalarFieldEnum)[keyof typeof VoteOnCommentScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    detailes: 'detailes',
    img: 'img',
    secondryImg: 'secondryImg',
    flavorId: 'flavorId',
    color: 'color',
    p_color: 'p_color',
    categoryId: 'categoryId',
    lang: 'lang'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const VideoScalarFieldEnum: {
    id: 'id',
    embededLink: 'embededLink',
    name: 'name',
    productId: 'productId',
    coverImg: 'coverImg',
    lang: 'lang'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    detailes: 'detailes',
    img: 'img',
    lang: 'lang'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const FlavorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    primaryImg: 'primaryImg',
    lang: 'lang'
  };

  export type FlavorScalarFieldEnum = (typeof FlavorScalarFieldEnum)[keyof typeof FlavorScalarFieldEnum]


  export const RecipyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    detailes: 'detailes',
    flavorId: 'flavorId',
    lang: 'lang'
  };

  export type RecipyScalarFieldEnum = (typeof RecipyScalarFieldEnum)[keyof typeof RecipyScalarFieldEnum]


  export const VoteOnRecipyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    RecipyId: 'RecipyId'
  };

  export type VoteOnRecipyScalarFieldEnum = (typeof VoteOnRecipyScalarFieldEnum)[keyof typeof VoteOnRecipyScalarFieldEnum]


  export const SocialScalarFieldEnum: {
    id: 'id',
    name: 'name',
    channelLink: 'channelLink',
    embededlink: 'embededlink'
  };

  export type SocialScalarFieldEnum = (typeof SocialScalarFieldEnum)[keyof typeof SocialScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type MapWhereInput = {
    AND?: MapWhereInput | MapWhereInput[]
    OR?: MapWhereInput[]
    NOT?: MapWhereInput | MapWhereInput[]
    id?: StringFilter<"Map"> | string
    name?: StringFilter<"Map"> | string
    details?: StringFilter<"Map"> | string
    left?: StringNullableListFilter<"Map">
    top?: StringNullableListFilter<"Map">
    img?: StringFilter<"Map"> | string
    lang?: StringFilter<"Map"> | string
  }

  export type MapOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    details?: SortOrder
    left?: SortOrder
    top?: SortOrder
    img?: SortOrder
    lang?: SortOrder
  }

  export type MapWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MapWhereInput | MapWhereInput[]
    OR?: MapWhereInput[]
    NOT?: MapWhereInput | MapWhereInput[]
    name?: StringFilter<"Map"> | string
    details?: StringFilter<"Map"> | string
    left?: StringNullableListFilter<"Map">
    top?: StringNullableListFilter<"Map">
    img?: StringFilter<"Map"> | string
    lang?: StringFilter<"Map"> | string
  }, "id">

  export type MapOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    details?: SortOrder
    left?: SortOrder
    top?: SortOrder
    img?: SortOrder
    lang?: SortOrder
    _count?: MapCountOrderByAggregateInput
    _max?: MapMaxOrderByAggregateInput
    _min?: MapMinOrderByAggregateInput
  }

  export type MapScalarWhereWithAggregatesInput = {
    AND?: MapScalarWhereWithAggregatesInput | MapScalarWhereWithAggregatesInput[]
    OR?: MapScalarWhereWithAggregatesInput[]
    NOT?: MapScalarWhereWithAggregatesInput | MapScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Map"> | string
    name?: StringWithAggregatesFilter<"Map"> | string
    details?: StringWithAggregatesFilter<"Map"> | string
    left?: StringNullableListFilter<"Map">
    top?: StringNullableListFilter<"Map">
    img?: StringWithAggregatesFilter<"Map"> | string
    lang?: StringWithAggregatesFilter<"Map"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    salt?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    verified?: BoolFilter<"User"> | boolean
    comments?: CommentListRelationFilter
    votesOnComments?: VoteOnCommentListRelationFilter
    votesOnRecipies?: VoteOnRecipyListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    role?: SortOrder
    verified?: SortOrder
    comments?: CommentOrderByRelationAggregateInput
    votesOnComments?: VoteOnCommentOrderByRelationAggregateInput
    votesOnRecipies?: VoteOnRecipyOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    salt?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    verified?: BoolFilter<"User"> | boolean
    comments?: CommentListRelationFilter
    votesOnComments?: VoteOnCommentListRelationFilter
    votesOnRecipies?: VoteOnRecipyListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    role?: SortOrder
    verified?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    salt?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    verified?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    text?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    userId?: StringFilter<"Comment"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    votes?: VoteOnCommentListRelationFilter
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    votes?: VoteOnCommentOrderByRelationAggregateInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    text?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    userId?: StringFilter<"Comment"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    votes?: VoteOnCommentListRelationFilter
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    text?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    userId?: StringWithAggregatesFilter<"Comment"> | string
  }

  export type VoteOnCommentWhereInput = {
    AND?: VoteOnCommentWhereInput | VoteOnCommentWhereInput[]
    OR?: VoteOnCommentWhereInput[]
    NOT?: VoteOnCommentWhereInput | VoteOnCommentWhereInput[]
    id?: StringFilter<"VoteOnComment"> | string
    userId?: StringFilter<"VoteOnComment"> | string
    commentId?: StringFilter<"VoteOnComment"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comment?: XOR<CommentScalarRelationFilter, CommentWhereInput>
  }

  export type VoteOnCommentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
    user?: UserOrderByWithRelationInput
    comment?: CommentOrderByWithRelationInput
  }

  export type VoteOnCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_commentId?: VoteOnCommentUserIdCommentIdCompoundUniqueInput
    AND?: VoteOnCommentWhereInput | VoteOnCommentWhereInput[]
    OR?: VoteOnCommentWhereInput[]
    NOT?: VoteOnCommentWhereInput | VoteOnCommentWhereInput[]
    userId?: StringFilter<"VoteOnComment"> | string
    commentId?: StringFilter<"VoteOnComment"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comment?: XOR<CommentScalarRelationFilter, CommentWhereInput>
  }, "id" | "userId_commentId">

  export type VoteOnCommentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
    _count?: VoteOnCommentCountOrderByAggregateInput
    _max?: VoteOnCommentMaxOrderByAggregateInput
    _min?: VoteOnCommentMinOrderByAggregateInput
  }

  export type VoteOnCommentScalarWhereWithAggregatesInput = {
    AND?: VoteOnCommentScalarWhereWithAggregatesInput | VoteOnCommentScalarWhereWithAggregatesInput[]
    OR?: VoteOnCommentScalarWhereWithAggregatesInput[]
    NOT?: VoteOnCommentScalarWhereWithAggregatesInput | VoteOnCommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VoteOnComment"> | string
    userId?: StringWithAggregatesFilter<"VoteOnComment"> | string
    commentId?: StringWithAggregatesFilter<"VoteOnComment"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    code?: StringFilter<"Product"> | string
    detailes?: StringFilter<"Product"> | string
    img?: StringFilter<"Product"> | string
    secondryImg?: StringFilter<"Product"> | string
    flavorId?: StringFilter<"Product"> | string
    color?: StringFilter<"Product"> | string
    p_color?: StringFilter<"Product"> | string
    categoryId?: StringFilter<"Product"> | string
    lang?: StringFilter<"Product"> | string
    flavor?: XOR<FlavorScalarRelationFilter, FlavorWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    videos?: VideoListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    detailes?: SortOrder
    img?: SortOrder
    secondryImg?: SortOrder
    flavorId?: SortOrder
    color?: SortOrder
    p_color?: SortOrder
    categoryId?: SortOrder
    lang?: SortOrder
    flavor?: FlavorOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    videos?: VideoOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    code?: StringFilter<"Product"> | string
    detailes?: StringFilter<"Product"> | string
    img?: StringFilter<"Product"> | string
    secondryImg?: StringFilter<"Product"> | string
    flavorId?: StringFilter<"Product"> | string
    color?: StringFilter<"Product"> | string
    p_color?: StringFilter<"Product"> | string
    categoryId?: StringFilter<"Product"> | string
    lang?: StringFilter<"Product"> | string
    flavor?: XOR<FlavorScalarRelationFilter, FlavorWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    videos?: VideoListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    detailes?: SortOrder
    img?: SortOrder
    secondryImg?: SortOrder
    flavorId?: SortOrder
    color?: SortOrder
    p_color?: SortOrder
    categoryId?: SortOrder
    lang?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    code?: StringWithAggregatesFilter<"Product"> | string
    detailes?: StringWithAggregatesFilter<"Product"> | string
    img?: StringWithAggregatesFilter<"Product"> | string
    secondryImg?: StringWithAggregatesFilter<"Product"> | string
    flavorId?: StringWithAggregatesFilter<"Product"> | string
    color?: StringWithAggregatesFilter<"Product"> | string
    p_color?: StringWithAggregatesFilter<"Product"> | string
    categoryId?: StringWithAggregatesFilter<"Product"> | string
    lang?: StringWithAggregatesFilter<"Product"> | string
  }

  export type VideoWhereInput = {
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    id?: StringFilter<"Video"> | string
    embededLink?: StringFilter<"Video"> | string
    name?: StringFilter<"Video"> | string
    productId?: StringFilter<"Video"> | string
    coverImg?: StringFilter<"Video"> | string
    lang?: StringFilter<"Video"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type VideoOrderByWithRelationInput = {
    id?: SortOrder
    embededLink?: SortOrder
    name?: SortOrder
    productId?: SortOrder
    coverImg?: SortOrder
    lang?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type VideoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    embededLink?: string
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    name?: StringFilter<"Video"> | string
    productId?: StringFilter<"Video"> | string
    coverImg?: StringFilter<"Video"> | string
    lang?: StringFilter<"Video"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "embededLink">

  export type VideoOrderByWithAggregationInput = {
    id?: SortOrder
    embededLink?: SortOrder
    name?: SortOrder
    productId?: SortOrder
    coverImg?: SortOrder
    lang?: SortOrder
    _count?: VideoCountOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    OR?: VideoScalarWhereWithAggregatesInput[]
    NOT?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Video"> | string
    embededLink?: StringWithAggregatesFilter<"Video"> | string
    name?: StringWithAggregatesFilter<"Video"> | string
    productId?: StringWithAggregatesFilter<"Video"> | string
    coverImg?: StringWithAggregatesFilter<"Video"> | string
    lang?: StringWithAggregatesFilter<"Video"> | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    code?: StringFilter<"Category"> | string
    detailes?: StringFilter<"Category"> | string
    img?: StringFilter<"Category"> | string
    lang?: StringFilter<"Category"> | string
    products?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    detailes?: SortOrder
    img?: SortOrder
    lang?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    code?: StringFilter<"Category"> | string
    detailes?: StringFilter<"Category"> | string
    img?: StringFilter<"Category"> | string
    lang?: StringFilter<"Category"> | string
    products?: ProductListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    detailes?: SortOrder
    img?: SortOrder
    lang?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    code?: StringWithAggregatesFilter<"Category"> | string
    detailes?: StringWithAggregatesFilter<"Category"> | string
    img?: StringWithAggregatesFilter<"Category"> | string
    lang?: StringWithAggregatesFilter<"Category"> | string
  }

  export type FlavorWhereInput = {
    AND?: FlavorWhereInput | FlavorWhereInput[]
    OR?: FlavorWhereInput[]
    NOT?: FlavorWhereInput | FlavorWhereInput[]
    id?: StringFilter<"Flavor"> | string
    name?: StringFilter<"Flavor"> | string
    primaryImg?: StringFilter<"Flavor"> | string
    lang?: StringFilter<"Flavor"> | string
    products?: ProductListRelationFilter
    recipies?: RecipyListRelationFilter
  }

  export type FlavorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    primaryImg?: SortOrder
    lang?: SortOrder
    products?: ProductOrderByRelationAggregateInput
    recipies?: RecipyOrderByRelationAggregateInput
  }

  export type FlavorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FlavorWhereInput | FlavorWhereInput[]
    OR?: FlavorWhereInput[]
    NOT?: FlavorWhereInput | FlavorWhereInput[]
    name?: StringFilter<"Flavor"> | string
    primaryImg?: StringFilter<"Flavor"> | string
    lang?: StringFilter<"Flavor"> | string
    products?: ProductListRelationFilter
    recipies?: RecipyListRelationFilter
  }, "id">

  export type FlavorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    primaryImg?: SortOrder
    lang?: SortOrder
    _count?: FlavorCountOrderByAggregateInput
    _max?: FlavorMaxOrderByAggregateInput
    _min?: FlavorMinOrderByAggregateInput
  }

  export type FlavorScalarWhereWithAggregatesInput = {
    AND?: FlavorScalarWhereWithAggregatesInput | FlavorScalarWhereWithAggregatesInput[]
    OR?: FlavorScalarWhereWithAggregatesInput[]
    NOT?: FlavorScalarWhereWithAggregatesInput | FlavorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Flavor"> | string
    name?: StringWithAggregatesFilter<"Flavor"> | string
    primaryImg?: StringWithAggregatesFilter<"Flavor"> | string
    lang?: StringWithAggregatesFilter<"Flavor"> | string
  }

  export type RecipyWhereInput = {
    AND?: RecipyWhereInput | RecipyWhereInput[]
    OR?: RecipyWhereInput[]
    NOT?: RecipyWhereInput | RecipyWhereInput[]
    id?: StringFilter<"Recipy"> | string
    name?: StringFilter<"Recipy"> | string
    code?: StringFilter<"Recipy"> | string
    detailes?: StringFilter<"Recipy"> | string
    flavorId?: StringFilter<"Recipy"> | string
    lang?: StringFilter<"Recipy"> | string
    flavor?: XOR<FlavorScalarRelationFilter, FlavorWhereInput>
    votes?: VoteOnRecipyListRelationFilter
  }

  export type RecipyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    detailes?: SortOrder
    flavorId?: SortOrder
    lang?: SortOrder
    flavor?: FlavorOrderByWithRelationInput
    votes?: VoteOnRecipyOrderByRelationAggregateInput
  }

  export type RecipyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecipyWhereInput | RecipyWhereInput[]
    OR?: RecipyWhereInput[]
    NOT?: RecipyWhereInput | RecipyWhereInput[]
    name?: StringFilter<"Recipy"> | string
    code?: StringFilter<"Recipy"> | string
    detailes?: StringFilter<"Recipy"> | string
    flavorId?: StringFilter<"Recipy"> | string
    lang?: StringFilter<"Recipy"> | string
    flavor?: XOR<FlavorScalarRelationFilter, FlavorWhereInput>
    votes?: VoteOnRecipyListRelationFilter
  }, "id">

  export type RecipyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    detailes?: SortOrder
    flavorId?: SortOrder
    lang?: SortOrder
    _count?: RecipyCountOrderByAggregateInput
    _max?: RecipyMaxOrderByAggregateInput
    _min?: RecipyMinOrderByAggregateInput
  }

  export type RecipyScalarWhereWithAggregatesInput = {
    AND?: RecipyScalarWhereWithAggregatesInput | RecipyScalarWhereWithAggregatesInput[]
    OR?: RecipyScalarWhereWithAggregatesInput[]
    NOT?: RecipyScalarWhereWithAggregatesInput | RecipyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Recipy"> | string
    name?: StringWithAggregatesFilter<"Recipy"> | string
    code?: StringWithAggregatesFilter<"Recipy"> | string
    detailes?: StringWithAggregatesFilter<"Recipy"> | string
    flavorId?: StringWithAggregatesFilter<"Recipy"> | string
    lang?: StringWithAggregatesFilter<"Recipy"> | string
  }

  export type VoteOnRecipyWhereInput = {
    AND?: VoteOnRecipyWhereInput | VoteOnRecipyWhereInput[]
    OR?: VoteOnRecipyWhereInput[]
    NOT?: VoteOnRecipyWhereInput | VoteOnRecipyWhereInput[]
    id?: StringFilter<"VoteOnRecipy"> | string
    userId?: StringFilter<"VoteOnRecipy"> | string
    RecipyId?: StringFilter<"VoteOnRecipy"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipy?: XOR<RecipyScalarRelationFilter, RecipyWhereInput>
  }

  export type VoteOnRecipyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    RecipyId?: SortOrder
    user?: UserOrderByWithRelationInput
    recipy?: RecipyOrderByWithRelationInput
  }

  export type VoteOnRecipyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_RecipyId?: VoteOnRecipyUserIdRecipyIdCompoundUniqueInput
    AND?: VoteOnRecipyWhereInput | VoteOnRecipyWhereInput[]
    OR?: VoteOnRecipyWhereInput[]
    NOT?: VoteOnRecipyWhereInput | VoteOnRecipyWhereInput[]
    userId?: StringFilter<"VoteOnRecipy"> | string
    RecipyId?: StringFilter<"VoteOnRecipy"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipy?: XOR<RecipyScalarRelationFilter, RecipyWhereInput>
  }, "id" | "userId_RecipyId">

  export type VoteOnRecipyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    RecipyId?: SortOrder
    _count?: VoteOnRecipyCountOrderByAggregateInput
    _max?: VoteOnRecipyMaxOrderByAggregateInput
    _min?: VoteOnRecipyMinOrderByAggregateInput
  }

  export type VoteOnRecipyScalarWhereWithAggregatesInput = {
    AND?: VoteOnRecipyScalarWhereWithAggregatesInput | VoteOnRecipyScalarWhereWithAggregatesInput[]
    OR?: VoteOnRecipyScalarWhereWithAggregatesInput[]
    NOT?: VoteOnRecipyScalarWhereWithAggregatesInput | VoteOnRecipyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VoteOnRecipy"> | string
    userId?: StringWithAggregatesFilter<"VoteOnRecipy"> | string
    RecipyId?: StringWithAggregatesFilter<"VoteOnRecipy"> | string
  }

  export type socialWhereInput = {
    AND?: socialWhereInput | socialWhereInput[]
    OR?: socialWhereInput[]
    NOT?: socialWhereInput | socialWhereInput[]
    id?: StringFilter<"social"> | string
    name?: StringFilter<"social"> | string
    channelLink?: StringFilter<"social"> | string
    embededlink?: StringFilter<"social"> | string
  }

  export type socialOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    channelLink?: SortOrder
    embededlink?: SortOrder
  }

  export type socialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: socialWhereInput | socialWhereInput[]
    OR?: socialWhereInput[]
    NOT?: socialWhereInput | socialWhereInput[]
    name?: StringFilter<"social"> | string
    channelLink?: StringFilter<"social"> | string
    embededlink?: StringFilter<"social"> | string
  }, "id">

  export type socialOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    channelLink?: SortOrder
    embededlink?: SortOrder
    _count?: socialCountOrderByAggregateInput
    _max?: socialMaxOrderByAggregateInput
    _min?: socialMinOrderByAggregateInput
  }

  export type socialScalarWhereWithAggregatesInput = {
    AND?: socialScalarWhereWithAggregatesInput | socialScalarWhereWithAggregatesInput[]
    OR?: socialScalarWhereWithAggregatesInput[]
    NOT?: socialScalarWhereWithAggregatesInput | socialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"social"> | string
    name?: StringWithAggregatesFilter<"social"> | string
    channelLink?: StringWithAggregatesFilter<"social"> | string
    embededlink?: StringWithAggregatesFilter<"social"> | string
  }

  export type MapCreateInput = {
    id?: string
    name: string
    details: string
    left?: MapCreateleftInput | string[]
    top?: MapCreatetopInput | string[]
    img: string
    lang: string
  }

  export type MapUncheckedCreateInput = {
    id?: string
    name: string
    details: string
    left?: MapCreateleftInput | string[]
    top?: MapCreatetopInput | string[]
    img: string
    lang: string
  }

  export type MapUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    left?: MapUpdateleftInput | string[]
    top?: MapUpdatetopInput | string[]
    img?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
  }

  export type MapUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    left?: MapUpdateleftInput | string[]
    top?: MapUpdatetopInput | string[]
    img?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
  }

  export type MapCreateManyInput = {
    id?: string
    name: string
    details: string
    left?: MapCreateleftInput | string[]
    top?: MapCreatetopInput | string[]
    img: string
    lang: string
  }

  export type MapUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    left?: MapUpdateleftInput | string[]
    top?: MapUpdatetopInput | string[]
    img?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
  }

  export type MapUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    left?: MapUpdateleftInput | string[]
    top?: MapUpdatetopInput | string[]
    img?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    salt: string
    role: string
    verified?: boolean
    comments?: CommentCreateNestedManyWithoutUserInput
    votesOnComments?: VoteOnCommentCreateNestedManyWithoutUserInput
    votesOnRecipies?: VoteOnRecipyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    salt: string
    role: string
    verified?: boolean
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    votesOnComments?: VoteOnCommentUncheckedCreateNestedManyWithoutUserInput
    votesOnRecipies?: VoteOnRecipyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentUpdateManyWithoutUserNestedInput
    votesOnComments?: VoteOnCommentUpdateManyWithoutUserNestedInput
    votesOnRecipies?: VoteOnRecipyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    votesOnComments?: VoteOnCommentUncheckedUpdateManyWithoutUserNestedInput
    votesOnRecipies?: VoteOnRecipyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    salt: string
    role: string
    verified?: boolean
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommentCreateInput = {
    id?: string
    text: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
    votes?: VoteOnCommentCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    text: string
    createdAt?: Date | string
    userId: string
    votes?: VoteOnCommentUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    votes?: VoteOnCommentUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    votes?: VoteOnCommentUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentCreateManyInput = {
    id?: string
    text: string
    createdAt?: Date | string
    userId: string
  }

  export type CommentUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteOnCommentCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutVotesOnCommentsInput
    comment: CommentCreateNestedOneWithoutVotesInput
  }

  export type VoteOnCommentUncheckedCreateInput = {
    id?: string
    userId: string
    commentId: string
  }

  export type VoteOnCommentUpdateInput = {
    user?: UserUpdateOneRequiredWithoutVotesOnCommentsNestedInput
    comment?: CommentUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteOnCommentUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteOnCommentCreateManyInput = {
    id?: string
    userId: string
    commentId: string
  }

  export type VoteOnCommentUpdateManyMutationInput = {

  }

  export type VoteOnCommentUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    code: string
    detailes: string
    img: string
    secondryImg: string
    color: string
    p_color: string
    lang: string
    flavor: FlavorCreateNestedOneWithoutProductsInput
    category: CategoryCreateNestedOneWithoutProductsInput
    videos?: VideoCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    detailes: string
    img: string
    secondryImg: string
    flavorId: string
    color: string
    p_color: string
    categoryId: string
    lang: string
    videos?: VideoUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    detailes?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    secondryImg?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    p_color?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    flavor?: FlavorUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    videos?: VideoUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    detailes?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    secondryImg?: StringFieldUpdateOperationsInput | string
    flavorId?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    p_color?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    videos?: VideoUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    code: string
    detailes: string
    img: string
    secondryImg: string
    flavorId: string
    color: string
    p_color: string
    categoryId: string
    lang: string
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    detailes?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    secondryImg?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    p_color?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    detailes?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    secondryImg?: StringFieldUpdateOperationsInput | string
    flavorId?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    p_color?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
  }

  export type VideoCreateInput = {
    id?: string
    embededLink: string
    name: string
    coverImg: string
    lang: string
    product: ProductCreateNestedOneWithoutVideosInput
  }

  export type VideoUncheckedCreateInput = {
    id?: string
    embededLink: string
    name: string
    productId: string
    coverImg: string
    lang: string
  }

  export type VideoUpdateInput = {
    embededLink?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coverImg?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutVideosNestedInput
  }

  export type VideoUncheckedUpdateInput = {
    embededLink?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    coverImg?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
  }

  export type VideoCreateManyInput = {
    id?: string
    embededLink: string
    name: string
    productId: string
    coverImg: string
    lang: string
  }

  export type VideoUpdateManyMutationInput = {
    embededLink?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coverImg?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
  }

  export type VideoUncheckedUpdateManyInput = {
    embededLink?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    coverImg?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    code: string
    detailes: string
    img: string
    lang: string
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    detailes: string
    img: string
    lang: string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    detailes?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    detailes?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    code: string
    detailes: string
    img: string
    lang: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    detailes?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    detailes?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
  }

  export type FlavorCreateInput = {
    id?: string
    name: string
    primaryImg: string
    lang: string
    products?: ProductCreateNestedManyWithoutFlavorInput
    recipies?: RecipyCreateNestedManyWithoutFlavorInput
  }

  export type FlavorUncheckedCreateInput = {
    id?: string
    name: string
    primaryImg: string
    lang: string
    products?: ProductUncheckedCreateNestedManyWithoutFlavorInput
    recipies?: RecipyUncheckedCreateNestedManyWithoutFlavorInput
  }

  export type FlavorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    primaryImg?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    products?: ProductUpdateManyWithoutFlavorNestedInput
    recipies?: RecipyUpdateManyWithoutFlavorNestedInput
  }

  export type FlavorUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    primaryImg?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutFlavorNestedInput
    recipies?: RecipyUncheckedUpdateManyWithoutFlavorNestedInput
  }

  export type FlavorCreateManyInput = {
    id?: string
    name: string
    primaryImg: string
    lang: string
  }

  export type FlavorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    primaryImg?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
  }

  export type FlavorUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    primaryImg?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
  }

  export type RecipyCreateInput = {
    id?: string
    name: string
    code: string
    detailes: string
    lang: string
    flavor: FlavorCreateNestedOneWithoutRecipiesInput
    votes?: VoteOnRecipyCreateNestedManyWithoutRecipyInput
  }

  export type RecipyUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    detailes: string
    flavorId: string
    lang: string
    votes?: VoteOnRecipyUncheckedCreateNestedManyWithoutRecipyInput
  }

  export type RecipyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    detailes?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    flavor?: FlavorUpdateOneRequiredWithoutRecipiesNestedInput
    votes?: VoteOnRecipyUpdateManyWithoutRecipyNestedInput
  }

  export type RecipyUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    detailes?: StringFieldUpdateOperationsInput | string
    flavorId?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    votes?: VoteOnRecipyUncheckedUpdateManyWithoutRecipyNestedInput
  }

  export type RecipyCreateManyInput = {
    id?: string
    name: string
    code: string
    detailes: string
    flavorId: string
    lang: string
  }

  export type RecipyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    detailes?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
  }

  export type RecipyUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    detailes?: StringFieldUpdateOperationsInput | string
    flavorId?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
  }

  export type VoteOnRecipyCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutVotesOnRecipiesInput
    recipy: RecipyCreateNestedOneWithoutVotesInput
  }

  export type VoteOnRecipyUncheckedCreateInput = {
    id?: string
    userId: string
    RecipyId: string
  }

  export type VoteOnRecipyUpdateInput = {
    user?: UserUpdateOneRequiredWithoutVotesOnRecipiesNestedInput
    recipy?: RecipyUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteOnRecipyUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    RecipyId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteOnRecipyCreateManyInput = {
    id?: string
    userId: string
    RecipyId: string
  }

  export type VoteOnRecipyUpdateManyMutationInput = {

  }

  export type VoteOnRecipyUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    RecipyId?: StringFieldUpdateOperationsInput | string
  }

  export type socialCreateInput = {
    id?: string
    name: string
    channelLink: string
    embededlink: string
  }

  export type socialUncheckedCreateInput = {
    id?: string
    name: string
    channelLink: string
    embededlink: string
  }

  export type socialUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    channelLink?: StringFieldUpdateOperationsInput | string
    embededlink?: StringFieldUpdateOperationsInput | string
  }

  export type socialUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    channelLink?: StringFieldUpdateOperationsInput | string
    embededlink?: StringFieldUpdateOperationsInput | string
  }

  export type socialCreateManyInput = {
    id?: string
    name: string
    channelLink: string
    embededlink: string
  }

  export type socialUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    channelLink?: StringFieldUpdateOperationsInput | string
    embededlink?: StringFieldUpdateOperationsInput | string
  }

  export type socialUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    channelLink?: StringFieldUpdateOperationsInput | string
    embededlink?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type MapCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    details?: SortOrder
    left?: SortOrder
    top?: SortOrder
    img?: SortOrder
    lang?: SortOrder
  }

  export type MapMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    details?: SortOrder
    img?: SortOrder
    lang?: SortOrder
  }

  export type MapMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    details?: SortOrder
    img?: SortOrder
    lang?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type VoteOnCommentListRelationFilter = {
    every?: VoteOnCommentWhereInput
    some?: VoteOnCommentWhereInput
    none?: VoteOnCommentWhereInput
  }

  export type VoteOnRecipyListRelationFilter = {
    every?: VoteOnRecipyWhereInput
    some?: VoteOnRecipyWhereInput
    none?: VoteOnRecipyWhereInput
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VoteOnCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VoteOnRecipyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    role?: SortOrder
    verified?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    role?: SortOrder
    verified?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    role?: SortOrder
    verified?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CommentScalarRelationFilter = {
    is?: CommentWhereInput
    isNot?: CommentWhereInput
  }

  export type VoteOnCommentUserIdCommentIdCompoundUniqueInput = {
    userId: string
    commentId: string
  }

  export type VoteOnCommentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
  }

  export type VoteOnCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
  }

  export type VoteOnCommentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
  }

  export type FlavorScalarRelationFilter = {
    is?: FlavorWhereInput
    isNot?: FlavorWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type VideoListRelationFilter = {
    every?: VideoWhereInput
    some?: VideoWhereInput
    none?: VideoWhereInput
  }

  export type VideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    detailes?: SortOrder
    img?: SortOrder
    secondryImg?: SortOrder
    flavorId?: SortOrder
    color?: SortOrder
    p_color?: SortOrder
    categoryId?: SortOrder
    lang?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    detailes?: SortOrder
    img?: SortOrder
    secondryImg?: SortOrder
    flavorId?: SortOrder
    color?: SortOrder
    p_color?: SortOrder
    categoryId?: SortOrder
    lang?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    detailes?: SortOrder
    img?: SortOrder
    secondryImg?: SortOrder
    flavorId?: SortOrder
    color?: SortOrder
    p_color?: SortOrder
    categoryId?: SortOrder
    lang?: SortOrder
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type VideoCountOrderByAggregateInput = {
    id?: SortOrder
    embededLink?: SortOrder
    name?: SortOrder
    productId?: SortOrder
    coverImg?: SortOrder
    lang?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    id?: SortOrder
    embededLink?: SortOrder
    name?: SortOrder
    productId?: SortOrder
    coverImg?: SortOrder
    lang?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    id?: SortOrder
    embededLink?: SortOrder
    name?: SortOrder
    productId?: SortOrder
    coverImg?: SortOrder
    lang?: SortOrder
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    detailes?: SortOrder
    img?: SortOrder
    lang?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    detailes?: SortOrder
    img?: SortOrder
    lang?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    detailes?: SortOrder
    img?: SortOrder
    lang?: SortOrder
  }

  export type RecipyListRelationFilter = {
    every?: RecipyWhereInput
    some?: RecipyWhereInput
    none?: RecipyWhereInput
  }

  export type RecipyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlavorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    primaryImg?: SortOrder
    lang?: SortOrder
  }

  export type FlavorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    primaryImg?: SortOrder
    lang?: SortOrder
  }

  export type FlavorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    primaryImg?: SortOrder
    lang?: SortOrder
  }

  export type RecipyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    detailes?: SortOrder
    flavorId?: SortOrder
    lang?: SortOrder
  }

  export type RecipyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    detailes?: SortOrder
    flavorId?: SortOrder
    lang?: SortOrder
  }

  export type RecipyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    detailes?: SortOrder
    flavorId?: SortOrder
    lang?: SortOrder
  }

  export type RecipyScalarRelationFilter = {
    is?: RecipyWhereInput
    isNot?: RecipyWhereInput
  }

  export type VoteOnRecipyUserIdRecipyIdCompoundUniqueInput = {
    userId: string
    RecipyId: string
  }

  export type VoteOnRecipyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    RecipyId?: SortOrder
  }

  export type VoteOnRecipyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    RecipyId?: SortOrder
  }

  export type VoteOnRecipyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    RecipyId?: SortOrder
  }

  export type socialCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    channelLink?: SortOrder
    embededlink?: SortOrder
  }

  export type socialMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    channelLink?: SortOrder
    embededlink?: SortOrder
  }

  export type socialMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    channelLink?: SortOrder
    embededlink?: SortOrder
  }

  export type MapCreateleftInput = {
    set: string[]
  }

  export type MapCreatetopInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type MapUpdateleftInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MapUpdatetopInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type VoteOnCommentCreateNestedManyWithoutUserInput = {
    create?: XOR<VoteOnCommentCreateWithoutUserInput, VoteOnCommentUncheckedCreateWithoutUserInput> | VoteOnCommentCreateWithoutUserInput[] | VoteOnCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteOnCommentCreateOrConnectWithoutUserInput | VoteOnCommentCreateOrConnectWithoutUserInput[]
    createMany?: VoteOnCommentCreateManyUserInputEnvelope
    connect?: VoteOnCommentWhereUniqueInput | VoteOnCommentWhereUniqueInput[]
  }

  export type VoteOnRecipyCreateNestedManyWithoutUserInput = {
    create?: XOR<VoteOnRecipyCreateWithoutUserInput, VoteOnRecipyUncheckedCreateWithoutUserInput> | VoteOnRecipyCreateWithoutUserInput[] | VoteOnRecipyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteOnRecipyCreateOrConnectWithoutUserInput | VoteOnRecipyCreateOrConnectWithoutUserInput[]
    createMany?: VoteOnRecipyCreateManyUserInputEnvelope
    connect?: VoteOnRecipyWhereUniqueInput | VoteOnRecipyWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type VoteOnCommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VoteOnCommentCreateWithoutUserInput, VoteOnCommentUncheckedCreateWithoutUserInput> | VoteOnCommentCreateWithoutUserInput[] | VoteOnCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteOnCommentCreateOrConnectWithoutUserInput | VoteOnCommentCreateOrConnectWithoutUserInput[]
    createMany?: VoteOnCommentCreateManyUserInputEnvelope
    connect?: VoteOnCommentWhereUniqueInput | VoteOnCommentWhereUniqueInput[]
  }

  export type VoteOnRecipyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VoteOnRecipyCreateWithoutUserInput, VoteOnRecipyUncheckedCreateWithoutUserInput> | VoteOnRecipyCreateWithoutUserInput[] | VoteOnRecipyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteOnRecipyCreateOrConnectWithoutUserInput | VoteOnRecipyCreateOrConnectWithoutUserInput[]
    createMany?: VoteOnRecipyCreateManyUserInputEnvelope
    connect?: VoteOnRecipyWhereUniqueInput | VoteOnRecipyWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type VoteOnCommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<VoteOnCommentCreateWithoutUserInput, VoteOnCommentUncheckedCreateWithoutUserInput> | VoteOnCommentCreateWithoutUserInput[] | VoteOnCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteOnCommentCreateOrConnectWithoutUserInput | VoteOnCommentCreateOrConnectWithoutUserInput[]
    upsert?: VoteOnCommentUpsertWithWhereUniqueWithoutUserInput | VoteOnCommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VoteOnCommentCreateManyUserInputEnvelope
    set?: VoteOnCommentWhereUniqueInput | VoteOnCommentWhereUniqueInput[]
    disconnect?: VoteOnCommentWhereUniqueInput | VoteOnCommentWhereUniqueInput[]
    delete?: VoteOnCommentWhereUniqueInput | VoteOnCommentWhereUniqueInput[]
    connect?: VoteOnCommentWhereUniqueInput | VoteOnCommentWhereUniqueInput[]
    update?: VoteOnCommentUpdateWithWhereUniqueWithoutUserInput | VoteOnCommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VoteOnCommentUpdateManyWithWhereWithoutUserInput | VoteOnCommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VoteOnCommentScalarWhereInput | VoteOnCommentScalarWhereInput[]
  }

  export type VoteOnRecipyUpdateManyWithoutUserNestedInput = {
    create?: XOR<VoteOnRecipyCreateWithoutUserInput, VoteOnRecipyUncheckedCreateWithoutUserInput> | VoteOnRecipyCreateWithoutUserInput[] | VoteOnRecipyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteOnRecipyCreateOrConnectWithoutUserInput | VoteOnRecipyCreateOrConnectWithoutUserInput[]
    upsert?: VoteOnRecipyUpsertWithWhereUniqueWithoutUserInput | VoteOnRecipyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VoteOnRecipyCreateManyUserInputEnvelope
    set?: VoteOnRecipyWhereUniqueInput | VoteOnRecipyWhereUniqueInput[]
    disconnect?: VoteOnRecipyWhereUniqueInput | VoteOnRecipyWhereUniqueInput[]
    delete?: VoteOnRecipyWhereUniqueInput | VoteOnRecipyWhereUniqueInput[]
    connect?: VoteOnRecipyWhereUniqueInput | VoteOnRecipyWhereUniqueInput[]
    update?: VoteOnRecipyUpdateWithWhereUniqueWithoutUserInput | VoteOnRecipyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VoteOnRecipyUpdateManyWithWhereWithoutUserInput | VoteOnRecipyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VoteOnRecipyScalarWhereInput | VoteOnRecipyScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type VoteOnCommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VoteOnCommentCreateWithoutUserInput, VoteOnCommentUncheckedCreateWithoutUserInput> | VoteOnCommentCreateWithoutUserInput[] | VoteOnCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteOnCommentCreateOrConnectWithoutUserInput | VoteOnCommentCreateOrConnectWithoutUserInput[]
    upsert?: VoteOnCommentUpsertWithWhereUniqueWithoutUserInput | VoteOnCommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VoteOnCommentCreateManyUserInputEnvelope
    set?: VoteOnCommentWhereUniqueInput | VoteOnCommentWhereUniqueInput[]
    disconnect?: VoteOnCommentWhereUniqueInput | VoteOnCommentWhereUniqueInput[]
    delete?: VoteOnCommentWhereUniqueInput | VoteOnCommentWhereUniqueInput[]
    connect?: VoteOnCommentWhereUniqueInput | VoteOnCommentWhereUniqueInput[]
    update?: VoteOnCommentUpdateWithWhereUniqueWithoutUserInput | VoteOnCommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VoteOnCommentUpdateManyWithWhereWithoutUserInput | VoteOnCommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VoteOnCommentScalarWhereInput | VoteOnCommentScalarWhereInput[]
  }

  export type VoteOnRecipyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VoteOnRecipyCreateWithoutUserInput, VoteOnRecipyUncheckedCreateWithoutUserInput> | VoteOnRecipyCreateWithoutUserInput[] | VoteOnRecipyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteOnRecipyCreateOrConnectWithoutUserInput | VoteOnRecipyCreateOrConnectWithoutUserInput[]
    upsert?: VoteOnRecipyUpsertWithWhereUniqueWithoutUserInput | VoteOnRecipyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VoteOnRecipyCreateManyUserInputEnvelope
    set?: VoteOnRecipyWhereUniqueInput | VoteOnRecipyWhereUniqueInput[]
    disconnect?: VoteOnRecipyWhereUniqueInput | VoteOnRecipyWhereUniqueInput[]
    delete?: VoteOnRecipyWhereUniqueInput | VoteOnRecipyWhereUniqueInput[]
    connect?: VoteOnRecipyWhereUniqueInput | VoteOnRecipyWhereUniqueInput[]
    update?: VoteOnRecipyUpdateWithWhereUniqueWithoutUserInput | VoteOnRecipyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VoteOnRecipyUpdateManyWithWhereWithoutUserInput | VoteOnRecipyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VoteOnRecipyScalarWhereInput | VoteOnRecipyScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type VoteOnCommentCreateNestedManyWithoutCommentInput = {
    create?: XOR<VoteOnCommentCreateWithoutCommentInput, VoteOnCommentUncheckedCreateWithoutCommentInput> | VoteOnCommentCreateWithoutCommentInput[] | VoteOnCommentUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: VoteOnCommentCreateOrConnectWithoutCommentInput | VoteOnCommentCreateOrConnectWithoutCommentInput[]
    createMany?: VoteOnCommentCreateManyCommentInputEnvelope
    connect?: VoteOnCommentWhereUniqueInput | VoteOnCommentWhereUniqueInput[]
  }

  export type VoteOnCommentUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<VoteOnCommentCreateWithoutCommentInput, VoteOnCommentUncheckedCreateWithoutCommentInput> | VoteOnCommentCreateWithoutCommentInput[] | VoteOnCommentUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: VoteOnCommentCreateOrConnectWithoutCommentInput | VoteOnCommentCreateOrConnectWithoutCommentInput[]
    createMany?: VoteOnCommentCreateManyCommentInputEnvelope
    connect?: VoteOnCommentWhereUniqueInput | VoteOnCommentWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type VoteOnCommentUpdateManyWithoutCommentNestedInput = {
    create?: XOR<VoteOnCommentCreateWithoutCommentInput, VoteOnCommentUncheckedCreateWithoutCommentInput> | VoteOnCommentCreateWithoutCommentInput[] | VoteOnCommentUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: VoteOnCommentCreateOrConnectWithoutCommentInput | VoteOnCommentCreateOrConnectWithoutCommentInput[]
    upsert?: VoteOnCommentUpsertWithWhereUniqueWithoutCommentInput | VoteOnCommentUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: VoteOnCommentCreateManyCommentInputEnvelope
    set?: VoteOnCommentWhereUniqueInput | VoteOnCommentWhereUniqueInput[]
    disconnect?: VoteOnCommentWhereUniqueInput | VoteOnCommentWhereUniqueInput[]
    delete?: VoteOnCommentWhereUniqueInput | VoteOnCommentWhereUniqueInput[]
    connect?: VoteOnCommentWhereUniqueInput | VoteOnCommentWhereUniqueInput[]
    update?: VoteOnCommentUpdateWithWhereUniqueWithoutCommentInput | VoteOnCommentUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: VoteOnCommentUpdateManyWithWhereWithoutCommentInput | VoteOnCommentUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: VoteOnCommentScalarWhereInput | VoteOnCommentScalarWhereInput[]
  }

  export type VoteOnCommentUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: XOR<VoteOnCommentCreateWithoutCommentInput, VoteOnCommentUncheckedCreateWithoutCommentInput> | VoteOnCommentCreateWithoutCommentInput[] | VoteOnCommentUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: VoteOnCommentCreateOrConnectWithoutCommentInput | VoteOnCommentCreateOrConnectWithoutCommentInput[]
    upsert?: VoteOnCommentUpsertWithWhereUniqueWithoutCommentInput | VoteOnCommentUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: VoteOnCommentCreateManyCommentInputEnvelope
    set?: VoteOnCommentWhereUniqueInput | VoteOnCommentWhereUniqueInput[]
    disconnect?: VoteOnCommentWhereUniqueInput | VoteOnCommentWhereUniqueInput[]
    delete?: VoteOnCommentWhereUniqueInput | VoteOnCommentWhereUniqueInput[]
    connect?: VoteOnCommentWhereUniqueInput | VoteOnCommentWhereUniqueInput[]
    update?: VoteOnCommentUpdateWithWhereUniqueWithoutCommentInput | VoteOnCommentUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: VoteOnCommentUpdateManyWithWhereWithoutCommentInput | VoteOnCommentUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: VoteOnCommentScalarWhereInput | VoteOnCommentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVotesOnCommentsInput = {
    create?: XOR<UserCreateWithoutVotesOnCommentsInput, UserUncheckedCreateWithoutVotesOnCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVotesOnCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutVotesInput = {
    create?: XOR<CommentCreateWithoutVotesInput, CommentUncheckedCreateWithoutVotesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutVotesInput
    connect?: CommentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutVotesOnCommentsNestedInput = {
    create?: XOR<UserCreateWithoutVotesOnCommentsInput, UserUncheckedCreateWithoutVotesOnCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVotesOnCommentsInput
    upsert?: UserUpsertWithoutVotesOnCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVotesOnCommentsInput, UserUpdateWithoutVotesOnCommentsInput>, UserUncheckedUpdateWithoutVotesOnCommentsInput>
  }

  export type CommentUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<CommentCreateWithoutVotesInput, CommentUncheckedCreateWithoutVotesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutVotesInput
    upsert?: CommentUpsertWithoutVotesInput
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutVotesInput, CommentUpdateWithoutVotesInput>, CommentUncheckedUpdateWithoutVotesInput>
  }

  export type FlavorCreateNestedOneWithoutProductsInput = {
    create?: XOR<FlavorCreateWithoutProductsInput, FlavorUncheckedCreateWithoutProductsInput>
    connectOrCreate?: FlavorCreateOrConnectWithoutProductsInput
    connect?: FlavorWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type VideoCreateNestedManyWithoutProductInput = {
    create?: XOR<VideoCreateWithoutProductInput, VideoUncheckedCreateWithoutProductInput> | VideoCreateWithoutProductInput[] | VideoUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutProductInput | VideoCreateOrConnectWithoutProductInput[]
    createMany?: VideoCreateManyProductInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type VideoUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<VideoCreateWithoutProductInput, VideoUncheckedCreateWithoutProductInput> | VideoCreateWithoutProductInput[] | VideoUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutProductInput | VideoCreateOrConnectWithoutProductInput[]
    createMany?: VideoCreateManyProductInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type FlavorUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<FlavorCreateWithoutProductsInput, FlavorUncheckedCreateWithoutProductsInput>
    connectOrCreate?: FlavorCreateOrConnectWithoutProductsInput
    upsert?: FlavorUpsertWithoutProductsInput
    connect?: FlavorWhereUniqueInput
    update?: XOR<XOR<FlavorUpdateToOneWithWhereWithoutProductsInput, FlavorUpdateWithoutProductsInput>, FlavorUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type VideoUpdateManyWithoutProductNestedInput = {
    create?: XOR<VideoCreateWithoutProductInput, VideoUncheckedCreateWithoutProductInput> | VideoCreateWithoutProductInput[] | VideoUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutProductInput | VideoCreateOrConnectWithoutProductInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutProductInput | VideoUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: VideoCreateManyProductInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutProductInput | VideoUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutProductInput | VideoUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type VideoUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<VideoCreateWithoutProductInput, VideoUncheckedCreateWithoutProductInput> | VideoCreateWithoutProductInput[] | VideoUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutProductInput | VideoCreateOrConnectWithoutProductInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutProductInput | VideoUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: VideoCreateManyProductInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutProductInput | VideoUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutProductInput | VideoUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutVideosInput = {
    create?: XOR<ProductCreateWithoutVideosInput, ProductUncheckedCreateWithoutVideosInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVideosInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutVideosNestedInput = {
    create?: XOR<ProductCreateWithoutVideosInput, ProductUncheckedCreateWithoutVideosInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVideosInput
    upsert?: ProductUpsertWithoutVideosInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutVideosInput, ProductUpdateWithoutVideosInput>, ProductUncheckedUpdateWithoutVideosInput>
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutFlavorInput = {
    create?: XOR<ProductCreateWithoutFlavorInput, ProductUncheckedCreateWithoutFlavorInput> | ProductCreateWithoutFlavorInput[] | ProductUncheckedCreateWithoutFlavorInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutFlavorInput | ProductCreateOrConnectWithoutFlavorInput[]
    createMany?: ProductCreateManyFlavorInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type RecipyCreateNestedManyWithoutFlavorInput = {
    create?: XOR<RecipyCreateWithoutFlavorInput, RecipyUncheckedCreateWithoutFlavorInput> | RecipyCreateWithoutFlavorInput[] | RecipyUncheckedCreateWithoutFlavorInput[]
    connectOrCreate?: RecipyCreateOrConnectWithoutFlavorInput | RecipyCreateOrConnectWithoutFlavorInput[]
    createMany?: RecipyCreateManyFlavorInputEnvelope
    connect?: RecipyWhereUniqueInput | RecipyWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutFlavorInput = {
    create?: XOR<ProductCreateWithoutFlavorInput, ProductUncheckedCreateWithoutFlavorInput> | ProductCreateWithoutFlavorInput[] | ProductUncheckedCreateWithoutFlavorInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutFlavorInput | ProductCreateOrConnectWithoutFlavorInput[]
    createMany?: ProductCreateManyFlavorInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type RecipyUncheckedCreateNestedManyWithoutFlavorInput = {
    create?: XOR<RecipyCreateWithoutFlavorInput, RecipyUncheckedCreateWithoutFlavorInput> | RecipyCreateWithoutFlavorInput[] | RecipyUncheckedCreateWithoutFlavorInput[]
    connectOrCreate?: RecipyCreateOrConnectWithoutFlavorInput | RecipyCreateOrConnectWithoutFlavorInput[]
    createMany?: RecipyCreateManyFlavorInputEnvelope
    connect?: RecipyWhereUniqueInput | RecipyWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutFlavorNestedInput = {
    create?: XOR<ProductCreateWithoutFlavorInput, ProductUncheckedCreateWithoutFlavorInput> | ProductCreateWithoutFlavorInput[] | ProductUncheckedCreateWithoutFlavorInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutFlavorInput | ProductCreateOrConnectWithoutFlavorInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutFlavorInput | ProductUpsertWithWhereUniqueWithoutFlavorInput[]
    createMany?: ProductCreateManyFlavorInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutFlavorInput | ProductUpdateWithWhereUniqueWithoutFlavorInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutFlavorInput | ProductUpdateManyWithWhereWithoutFlavorInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type RecipyUpdateManyWithoutFlavorNestedInput = {
    create?: XOR<RecipyCreateWithoutFlavorInput, RecipyUncheckedCreateWithoutFlavorInput> | RecipyCreateWithoutFlavorInput[] | RecipyUncheckedCreateWithoutFlavorInput[]
    connectOrCreate?: RecipyCreateOrConnectWithoutFlavorInput | RecipyCreateOrConnectWithoutFlavorInput[]
    upsert?: RecipyUpsertWithWhereUniqueWithoutFlavorInput | RecipyUpsertWithWhereUniqueWithoutFlavorInput[]
    createMany?: RecipyCreateManyFlavorInputEnvelope
    set?: RecipyWhereUniqueInput | RecipyWhereUniqueInput[]
    disconnect?: RecipyWhereUniqueInput | RecipyWhereUniqueInput[]
    delete?: RecipyWhereUniqueInput | RecipyWhereUniqueInput[]
    connect?: RecipyWhereUniqueInput | RecipyWhereUniqueInput[]
    update?: RecipyUpdateWithWhereUniqueWithoutFlavorInput | RecipyUpdateWithWhereUniqueWithoutFlavorInput[]
    updateMany?: RecipyUpdateManyWithWhereWithoutFlavorInput | RecipyUpdateManyWithWhereWithoutFlavorInput[]
    deleteMany?: RecipyScalarWhereInput | RecipyScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutFlavorNestedInput = {
    create?: XOR<ProductCreateWithoutFlavorInput, ProductUncheckedCreateWithoutFlavorInput> | ProductCreateWithoutFlavorInput[] | ProductUncheckedCreateWithoutFlavorInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutFlavorInput | ProductCreateOrConnectWithoutFlavorInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutFlavorInput | ProductUpsertWithWhereUniqueWithoutFlavorInput[]
    createMany?: ProductCreateManyFlavorInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutFlavorInput | ProductUpdateWithWhereUniqueWithoutFlavorInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutFlavorInput | ProductUpdateManyWithWhereWithoutFlavorInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type RecipyUncheckedUpdateManyWithoutFlavorNestedInput = {
    create?: XOR<RecipyCreateWithoutFlavorInput, RecipyUncheckedCreateWithoutFlavorInput> | RecipyCreateWithoutFlavorInput[] | RecipyUncheckedCreateWithoutFlavorInput[]
    connectOrCreate?: RecipyCreateOrConnectWithoutFlavorInput | RecipyCreateOrConnectWithoutFlavorInput[]
    upsert?: RecipyUpsertWithWhereUniqueWithoutFlavorInput | RecipyUpsertWithWhereUniqueWithoutFlavorInput[]
    createMany?: RecipyCreateManyFlavorInputEnvelope
    set?: RecipyWhereUniqueInput | RecipyWhereUniqueInput[]
    disconnect?: RecipyWhereUniqueInput | RecipyWhereUniqueInput[]
    delete?: RecipyWhereUniqueInput | RecipyWhereUniqueInput[]
    connect?: RecipyWhereUniqueInput | RecipyWhereUniqueInput[]
    update?: RecipyUpdateWithWhereUniqueWithoutFlavorInput | RecipyUpdateWithWhereUniqueWithoutFlavorInput[]
    updateMany?: RecipyUpdateManyWithWhereWithoutFlavorInput | RecipyUpdateManyWithWhereWithoutFlavorInput[]
    deleteMany?: RecipyScalarWhereInput | RecipyScalarWhereInput[]
  }

  export type FlavorCreateNestedOneWithoutRecipiesInput = {
    create?: XOR<FlavorCreateWithoutRecipiesInput, FlavorUncheckedCreateWithoutRecipiesInput>
    connectOrCreate?: FlavorCreateOrConnectWithoutRecipiesInput
    connect?: FlavorWhereUniqueInput
  }

  export type VoteOnRecipyCreateNestedManyWithoutRecipyInput = {
    create?: XOR<VoteOnRecipyCreateWithoutRecipyInput, VoteOnRecipyUncheckedCreateWithoutRecipyInput> | VoteOnRecipyCreateWithoutRecipyInput[] | VoteOnRecipyUncheckedCreateWithoutRecipyInput[]
    connectOrCreate?: VoteOnRecipyCreateOrConnectWithoutRecipyInput | VoteOnRecipyCreateOrConnectWithoutRecipyInput[]
    createMany?: VoteOnRecipyCreateManyRecipyInputEnvelope
    connect?: VoteOnRecipyWhereUniqueInput | VoteOnRecipyWhereUniqueInput[]
  }

  export type VoteOnRecipyUncheckedCreateNestedManyWithoutRecipyInput = {
    create?: XOR<VoteOnRecipyCreateWithoutRecipyInput, VoteOnRecipyUncheckedCreateWithoutRecipyInput> | VoteOnRecipyCreateWithoutRecipyInput[] | VoteOnRecipyUncheckedCreateWithoutRecipyInput[]
    connectOrCreate?: VoteOnRecipyCreateOrConnectWithoutRecipyInput | VoteOnRecipyCreateOrConnectWithoutRecipyInput[]
    createMany?: VoteOnRecipyCreateManyRecipyInputEnvelope
    connect?: VoteOnRecipyWhereUniqueInput | VoteOnRecipyWhereUniqueInput[]
  }

  export type FlavorUpdateOneRequiredWithoutRecipiesNestedInput = {
    create?: XOR<FlavorCreateWithoutRecipiesInput, FlavorUncheckedCreateWithoutRecipiesInput>
    connectOrCreate?: FlavorCreateOrConnectWithoutRecipiesInput
    upsert?: FlavorUpsertWithoutRecipiesInput
    connect?: FlavorWhereUniqueInput
    update?: XOR<XOR<FlavorUpdateToOneWithWhereWithoutRecipiesInput, FlavorUpdateWithoutRecipiesInput>, FlavorUncheckedUpdateWithoutRecipiesInput>
  }

  export type VoteOnRecipyUpdateManyWithoutRecipyNestedInput = {
    create?: XOR<VoteOnRecipyCreateWithoutRecipyInput, VoteOnRecipyUncheckedCreateWithoutRecipyInput> | VoteOnRecipyCreateWithoutRecipyInput[] | VoteOnRecipyUncheckedCreateWithoutRecipyInput[]
    connectOrCreate?: VoteOnRecipyCreateOrConnectWithoutRecipyInput | VoteOnRecipyCreateOrConnectWithoutRecipyInput[]
    upsert?: VoteOnRecipyUpsertWithWhereUniqueWithoutRecipyInput | VoteOnRecipyUpsertWithWhereUniqueWithoutRecipyInput[]
    createMany?: VoteOnRecipyCreateManyRecipyInputEnvelope
    set?: VoteOnRecipyWhereUniqueInput | VoteOnRecipyWhereUniqueInput[]
    disconnect?: VoteOnRecipyWhereUniqueInput | VoteOnRecipyWhereUniqueInput[]
    delete?: VoteOnRecipyWhereUniqueInput | VoteOnRecipyWhereUniqueInput[]
    connect?: VoteOnRecipyWhereUniqueInput | VoteOnRecipyWhereUniqueInput[]
    update?: VoteOnRecipyUpdateWithWhereUniqueWithoutRecipyInput | VoteOnRecipyUpdateWithWhereUniqueWithoutRecipyInput[]
    updateMany?: VoteOnRecipyUpdateManyWithWhereWithoutRecipyInput | VoteOnRecipyUpdateManyWithWhereWithoutRecipyInput[]
    deleteMany?: VoteOnRecipyScalarWhereInput | VoteOnRecipyScalarWhereInput[]
  }

  export type VoteOnRecipyUncheckedUpdateManyWithoutRecipyNestedInput = {
    create?: XOR<VoteOnRecipyCreateWithoutRecipyInput, VoteOnRecipyUncheckedCreateWithoutRecipyInput> | VoteOnRecipyCreateWithoutRecipyInput[] | VoteOnRecipyUncheckedCreateWithoutRecipyInput[]
    connectOrCreate?: VoteOnRecipyCreateOrConnectWithoutRecipyInput | VoteOnRecipyCreateOrConnectWithoutRecipyInput[]
    upsert?: VoteOnRecipyUpsertWithWhereUniqueWithoutRecipyInput | VoteOnRecipyUpsertWithWhereUniqueWithoutRecipyInput[]
    createMany?: VoteOnRecipyCreateManyRecipyInputEnvelope
    set?: VoteOnRecipyWhereUniqueInput | VoteOnRecipyWhereUniqueInput[]
    disconnect?: VoteOnRecipyWhereUniqueInput | VoteOnRecipyWhereUniqueInput[]
    delete?: VoteOnRecipyWhereUniqueInput | VoteOnRecipyWhereUniqueInput[]
    connect?: VoteOnRecipyWhereUniqueInput | VoteOnRecipyWhereUniqueInput[]
    update?: VoteOnRecipyUpdateWithWhereUniqueWithoutRecipyInput | VoteOnRecipyUpdateWithWhereUniqueWithoutRecipyInput[]
    updateMany?: VoteOnRecipyUpdateManyWithWhereWithoutRecipyInput | VoteOnRecipyUpdateManyWithWhereWithoutRecipyInput[]
    deleteMany?: VoteOnRecipyScalarWhereInput | VoteOnRecipyScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVotesOnRecipiesInput = {
    create?: XOR<UserCreateWithoutVotesOnRecipiesInput, UserUncheckedCreateWithoutVotesOnRecipiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVotesOnRecipiesInput
    connect?: UserWhereUniqueInput
  }

  export type RecipyCreateNestedOneWithoutVotesInput = {
    create?: XOR<RecipyCreateWithoutVotesInput, RecipyUncheckedCreateWithoutVotesInput>
    connectOrCreate?: RecipyCreateOrConnectWithoutVotesInput
    connect?: RecipyWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutVotesOnRecipiesNestedInput = {
    create?: XOR<UserCreateWithoutVotesOnRecipiesInput, UserUncheckedCreateWithoutVotesOnRecipiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVotesOnRecipiesInput
    upsert?: UserUpsertWithoutVotesOnRecipiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVotesOnRecipiesInput, UserUpdateWithoutVotesOnRecipiesInput>, UserUncheckedUpdateWithoutVotesOnRecipiesInput>
  }

  export type RecipyUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<RecipyCreateWithoutVotesInput, RecipyUncheckedCreateWithoutVotesInput>
    connectOrCreate?: RecipyCreateOrConnectWithoutVotesInput
    upsert?: RecipyUpsertWithoutVotesInput
    connect?: RecipyWhereUniqueInput
    update?: XOR<XOR<RecipyUpdateToOneWithWhereWithoutVotesInput, RecipyUpdateWithoutVotesInput>, RecipyUncheckedUpdateWithoutVotesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CommentCreateWithoutUserInput = {
    id?: string
    text: string
    createdAt?: Date | string
    votes?: VoteOnCommentCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: string
    text: string
    createdAt?: Date | string
    votes?: VoteOnCommentUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
  }

  export type VoteOnCommentCreateWithoutUserInput = {
    id?: string
    comment: CommentCreateNestedOneWithoutVotesInput
  }

  export type VoteOnCommentUncheckedCreateWithoutUserInput = {
    id?: string
    commentId: string
  }

  export type VoteOnCommentCreateOrConnectWithoutUserInput = {
    where: VoteOnCommentWhereUniqueInput
    create: XOR<VoteOnCommentCreateWithoutUserInput, VoteOnCommentUncheckedCreateWithoutUserInput>
  }

  export type VoteOnCommentCreateManyUserInputEnvelope = {
    data: VoteOnCommentCreateManyUserInput | VoteOnCommentCreateManyUserInput[]
  }

  export type VoteOnRecipyCreateWithoutUserInput = {
    id?: string
    recipy: RecipyCreateNestedOneWithoutVotesInput
  }

  export type VoteOnRecipyUncheckedCreateWithoutUserInput = {
    id?: string
    RecipyId: string
  }

  export type VoteOnRecipyCreateOrConnectWithoutUserInput = {
    where: VoteOnRecipyWhereUniqueInput
    create: XOR<VoteOnRecipyCreateWithoutUserInput, VoteOnRecipyUncheckedCreateWithoutUserInput>
  }

  export type VoteOnRecipyCreateManyUserInputEnvelope = {
    data: VoteOnRecipyCreateManyUserInput | VoteOnRecipyCreateManyUserInput[]
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    text?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    userId?: StringFilter<"Comment"> | string
  }

  export type VoteOnCommentUpsertWithWhereUniqueWithoutUserInput = {
    where: VoteOnCommentWhereUniqueInput
    update: XOR<VoteOnCommentUpdateWithoutUserInput, VoteOnCommentUncheckedUpdateWithoutUserInput>
    create: XOR<VoteOnCommentCreateWithoutUserInput, VoteOnCommentUncheckedCreateWithoutUserInput>
  }

  export type VoteOnCommentUpdateWithWhereUniqueWithoutUserInput = {
    where: VoteOnCommentWhereUniqueInput
    data: XOR<VoteOnCommentUpdateWithoutUserInput, VoteOnCommentUncheckedUpdateWithoutUserInput>
  }

  export type VoteOnCommentUpdateManyWithWhereWithoutUserInput = {
    where: VoteOnCommentScalarWhereInput
    data: XOR<VoteOnCommentUpdateManyMutationInput, VoteOnCommentUncheckedUpdateManyWithoutUserInput>
  }

  export type VoteOnCommentScalarWhereInput = {
    AND?: VoteOnCommentScalarWhereInput | VoteOnCommentScalarWhereInput[]
    OR?: VoteOnCommentScalarWhereInput[]
    NOT?: VoteOnCommentScalarWhereInput | VoteOnCommentScalarWhereInput[]
    id?: StringFilter<"VoteOnComment"> | string
    userId?: StringFilter<"VoteOnComment"> | string
    commentId?: StringFilter<"VoteOnComment"> | string
  }

  export type VoteOnRecipyUpsertWithWhereUniqueWithoutUserInput = {
    where: VoteOnRecipyWhereUniqueInput
    update: XOR<VoteOnRecipyUpdateWithoutUserInput, VoteOnRecipyUncheckedUpdateWithoutUserInput>
    create: XOR<VoteOnRecipyCreateWithoutUserInput, VoteOnRecipyUncheckedCreateWithoutUserInput>
  }

  export type VoteOnRecipyUpdateWithWhereUniqueWithoutUserInput = {
    where: VoteOnRecipyWhereUniqueInput
    data: XOR<VoteOnRecipyUpdateWithoutUserInput, VoteOnRecipyUncheckedUpdateWithoutUserInput>
  }

  export type VoteOnRecipyUpdateManyWithWhereWithoutUserInput = {
    where: VoteOnRecipyScalarWhereInput
    data: XOR<VoteOnRecipyUpdateManyMutationInput, VoteOnRecipyUncheckedUpdateManyWithoutUserInput>
  }

  export type VoteOnRecipyScalarWhereInput = {
    AND?: VoteOnRecipyScalarWhereInput | VoteOnRecipyScalarWhereInput[]
    OR?: VoteOnRecipyScalarWhereInput[]
    NOT?: VoteOnRecipyScalarWhereInput | VoteOnRecipyScalarWhereInput[]
    id?: StringFilter<"VoteOnRecipy"> | string
    userId?: StringFilter<"VoteOnRecipy"> | string
    RecipyId?: StringFilter<"VoteOnRecipy"> | string
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    name: string
    email: string
    password: string
    salt: string
    role: string
    verified?: boolean
    votesOnComments?: VoteOnCommentCreateNestedManyWithoutUserInput
    votesOnRecipies?: VoteOnRecipyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    name: string
    email: string
    password: string
    salt: string
    role: string
    verified?: boolean
    votesOnComments?: VoteOnCommentUncheckedCreateNestedManyWithoutUserInput
    votesOnRecipies?: VoteOnRecipyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type VoteOnCommentCreateWithoutCommentInput = {
    id?: string
    user: UserCreateNestedOneWithoutVotesOnCommentsInput
  }

  export type VoteOnCommentUncheckedCreateWithoutCommentInput = {
    id?: string
    userId: string
  }

  export type VoteOnCommentCreateOrConnectWithoutCommentInput = {
    where: VoteOnCommentWhereUniqueInput
    create: XOR<VoteOnCommentCreateWithoutCommentInput, VoteOnCommentUncheckedCreateWithoutCommentInput>
  }

  export type VoteOnCommentCreateManyCommentInputEnvelope = {
    data: VoteOnCommentCreateManyCommentInput | VoteOnCommentCreateManyCommentInput[]
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    votesOnComments?: VoteOnCommentUpdateManyWithoutUserNestedInput
    votesOnRecipies?: VoteOnRecipyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    votesOnComments?: VoteOnCommentUncheckedUpdateManyWithoutUserNestedInput
    votesOnRecipies?: VoteOnRecipyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VoteOnCommentUpsertWithWhereUniqueWithoutCommentInput = {
    where: VoteOnCommentWhereUniqueInput
    update: XOR<VoteOnCommentUpdateWithoutCommentInput, VoteOnCommentUncheckedUpdateWithoutCommentInput>
    create: XOR<VoteOnCommentCreateWithoutCommentInput, VoteOnCommentUncheckedCreateWithoutCommentInput>
  }

  export type VoteOnCommentUpdateWithWhereUniqueWithoutCommentInput = {
    where: VoteOnCommentWhereUniqueInput
    data: XOR<VoteOnCommentUpdateWithoutCommentInput, VoteOnCommentUncheckedUpdateWithoutCommentInput>
  }

  export type VoteOnCommentUpdateManyWithWhereWithoutCommentInput = {
    where: VoteOnCommentScalarWhereInput
    data: XOR<VoteOnCommentUpdateManyMutationInput, VoteOnCommentUncheckedUpdateManyWithoutCommentInput>
  }

  export type UserCreateWithoutVotesOnCommentsInput = {
    id?: string
    name: string
    email: string
    password: string
    salt: string
    role: string
    verified?: boolean
    comments?: CommentCreateNestedManyWithoutUserInput
    votesOnRecipies?: VoteOnRecipyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVotesOnCommentsInput = {
    id?: string
    name: string
    email: string
    password: string
    salt: string
    role: string
    verified?: boolean
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    votesOnRecipies?: VoteOnRecipyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVotesOnCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVotesOnCommentsInput, UserUncheckedCreateWithoutVotesOnCommentsInput>
  }

  export type CommentCreateWithoutVotesInput = {
    id?: string
    text: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutVotesInput = {
    id?: string
    text: string
    createdAt?: Date | string
    userId: string
  }

  export type CommentCreateOrConnectWithoutVotesInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutVotesInput, CommentUncheckedCreateWithoutVotesInput>
  }

  export type UserUpsertWithoutVotesOnCommentsInput = {
    update: XOR<UserUpdateWithoutVotesOnCommentsInput, UserUncheckedUpdateWithoutVotesOnCommentsInput>
    create: XOR<UserCreateWithoutVotesOnCommentsInput, UserUncheckedCreateWithoutVotesOnCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVotesOnCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVotesOnCommentsInput, UserUncheckedUpdateWithoutVotesOnCommentsInput>
  }

  export type UserUpdateWithoutVotesOnCommentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentUpdateManyWithoutUserNestedInput
    votesOnRecipies?: VoteOnRecipyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVotesOnCommentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    votesOnRecipies?: VoteOnRecipyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentUpsertWithoutVotesInput = {
    update: XOR<CommentUpdateWithoutVotesInput, CommentUncheckedUpdateWithoutVotesInput>
    create: XOR<CommentCreateWithoutVotesInput, CommentUncheckedCreateWithoutVotesInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutVotesInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutVotesInput, CommentUncheckedUpdateWithoutVotesInput>
  }

  export type CommentUpdateWithoutVotesInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutVotesInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type FlavorCreateWithoutProductsInput = {
    id?: string
    name: string
    primaryImg: string
    lang: string
    recipies?: RecipyCreateNestedManyWithoutFlavorInput
  }

  export type FlavorUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    primaryImg: string
    lang: string
    recipies?: RecipyUncheckedCreateNestedManyWithoutFlavorInput
  }

  export type FlavorCreateOrConnectWithoutProductsInput = {
    where: FlavorWhereUniqueInput
    create: XOR<FlavorCreateWithoutProductsInput, FlavorUncheckedCreateWithoutProductsInput>
  }

  export type CategoryCreateWithoutProductsInput = {
    id?: string
    name: string
    code: string
    detailes: string
    img: string
    lang: string
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    code: string
    detailes: string
    img: string
    lang: string
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type VideoCreateWithoutProductInput = {
    id?: string
    embededLink: string
    name: string
    coverImg: string
    lang: string
  }

  export type VideoUncheckedCreateWithoutProductInput = {
    id?: string
    embededLink: string
    name: string
    coverImg: string
    lang: string
  }

  export type VideoCreateOrConnectWithoutProductInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutProductInput, VideoUncheckedCreateWithoutProductInput>
  }

  export type VideoCreateManyProductInputEnvelope = {
    data: VideoCreateManyProductInput | VideoCreateManyProductInput[]
  }

  export type FlavorUpsertWithoutProductsInput = {
    update: XOR<FlavorUpdateWithoutProductsInput, FlavorUncheckedUpdateWithoutProductsInput>
    create: XOR<FlavorCreateWithoutProductsInput, FlavorUncheckedCreateWithoutProductsInput>
    where?: FlavorWhereInput
  }

  export type FlavorUpdateToOneWithWhereWithoutProductsInput = {
    where?: FlavorWhereInput
    data: XOR<FlavorUpdateWithoutProductsInput, FlavorUncheckedUpdateWithoutProductsInput>
  }

  export type FlavorUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    primaryImg?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    recipies?: RecipyUpdateManyWithoutFlavorNestedInput
  }

  export type FlavorUncheckedUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    primaryImg?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    recipies?: RecipyUncheckedUpdateManyWithoutFlavorNestedInput
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    detailes?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    detailes?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
  }

  export type VideoUpsertWithWhereUniqueWithoutProductInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutProductInput, VideoUncheckedUpdateWithoutProductInput>
    create: XOR<VideoCreateWithoutProductInput, VideoUncheckedCreateWithoutProductInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutProductInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutProductInput, VideoUncheckedUpdateWithoutProductInput>
  }

  export type VideoUpdateManyWithWhereWithoutProductInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutProductInput>
  }

  export type VideoScalarWhereInput = {
    AND?: VideoScalarWhereInput | VideoScalarWhereInput[]
    OR?: VideoScalarWhereInput[]
    NOT?: VideoScalarWhereInput | VideoScalarWhereInput[]
    id?: StringFilter<"Video"> | string
    embededLink?: StringFilter<"Video"> | string
    name?: StringFilter<"Video"> | string
    productId?: StringFilter<"Video"> | string
    coverImg?: StringFilter<"Video"> | string
    lang?: StringFilter<"Video"> | string
  }

  export type ProductCreateWithoutVideosInput = {
    id?: string
    name: string
    code: string
    detailes: string
    img: string
    secondryImg: string
    color: string
    p_color: string
    lang: string
    flavor: FlavorCreateNestedOneWithoutProductsInput
    category: CategoryCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutVideosInput = {
    id?: string
    name: string
    code: string
    detailes: string
    img: string
    secondryImg: string
    flavorId: string
    color: string
    p_color: string
    categoryId: string
    lang: string
  }

  export type ProductCreateOrConnectWithoutVideosInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutVideosInput, ProductUncheckedCreateWithoutVideosInput>
  }

  export type ProductUpsertWithoutVideosInput = {
    update: XOR<ProductUpdateWithoutVideosInput, ProductUncheckedUpdateWithoutVideosInput>
    create: XOR<ProductCreateWithoutVideosInput, ProductUncheckedCreateWithoutVideosInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutVideosInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutVideosInput, ProductUncheckedUpdateWithoutVideosInput>
  }

  export type ProductUpdateWithoutVideosInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    detailes?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    secondryImg?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    p_color?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    flavor?: FlavorUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutVideosInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    detailes?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    secondryImg?: StringFieldUpdateOperationsInput | string
    flavorId?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    p_color?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateWithoutCategoryInput = {
    id?: string
    name: string
    code: string
    detailes: string
    img: string
    secondryImg: string
    color: string
    p_color: string
    lang: string
    flavor: FlavorCreateNestedOneWithoutProductsInput
    videos?: VideoCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    code: string
    detailes: string
    img: string
    secondryImg: string
    flavorId: string
    color: string
    p_color: string
    lang: string
    videos?: VideoUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    code?: StringFilter<"Product"> | string
    detailes?: StringFilter<"Product"> | string
    img?: StringFilter<"Product"> | string
    secondryImg?: StringFilter<"Product"> | string
    flavorId?: StringFilter<"Product"> | string
    color?: StringFilter<"Product"> | string
    p_color?: StringFilter<"Product"> | string
    categoryId?: StringFilter<"Product"> | string
    lang?: StringFilter<"Product"> | string
  }

  export type ProductCreateWithoutFlavorInput = {
    id?: string
    name: string
    code: string
    detailes: string
    img: string
    secondryImg: string
    color: string
    p_color: string
    lang: string
    category: CategoryCreateNestedOneWithoutProductsInput
    videos?: VideoCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutFlavorInput = {
    id?: string
    name: string
    code: string
    detailes: string
    img: string
    secondryImg: string
    color: string
    p_color: string
    categoryId: string
    lang: string
    videos?: VideoUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutFlavorInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutFlavorInput, ProductUncheckedCreateWithoutFlavorInput>
  }

  export type ProductCreateManyFlavorInputEnvelope = {
    data: ProductCreateManyFlavorInput | ProductCreateManyFlavorInput[]
  }

  export type RecipyCreateWithoutFlavorInput = {
    id?: string
    name: string
    code: string
    detailes: string
    lang: string
    votes?: VoteOnRecipyCreateNestedManyWithoutRecipyInput
  }

  export type RecipyUncheckedCreateWithoutFlavorInput = {
    id?: string
    name: string
    code: string
    detailes: string
    lang: string
    votes?: VoteOnRecipyUncheckedCreateNestedManyWithoutRecipyInput
  }

  export type RecipyCreateOrConnectWithoutFlavorInput = {
    where: RecipyWhereUniqueInput
    create: XOR<RecipyCreateWithoutFlavorInput, RecipyUncheckedCreateWithoutFlavorInput>
  }

  export type RecipyCreateManyFlavorInputEnvelope = {
    data: RecipyCreateManyFlavorInput | RecipyCreateManyFlavorInput[]
  }

  export type ProductUpsertWithWhereUniqueWithoutFlavorInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutFlavorInput, ProductUncheckedUpdateWithoutFlavorInput>
    create: XOR<ProductCreateWithoutFlavorInput, ProductUncheckedCreateWithoutFlavorInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutFlavorInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutFlavorInput, ProductUncheckedUpdateWithoutFlavorInput>
  }

  export type ProductUpdateManyWithWhereWithoutFlavorInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutFlavorInput>
  }

  export type RecipyUpsertWithWhereUniqueWithoutFlavorInput = {
    where: RecipyWhereUniqueInput
    update: XOR<RecipyUpdateWithoutFlavorInput, RecipyUncheckedUpdateWithoutFlavorInput>
    create: XOR<RecipyCreateWithoutFlavorInput, RecipyUncheckedCreateWithoutFlavorInput>
  }

  export type RecipyUpdateWithWhereUniqueWithoutFlavorInput = {
    where: RecipyWhereUniqueInput
    data: XOR<RecipyUpdateWithoutFlavorInput, RecipyUncheckedUpdateWithoutFlavorInput>
  }

  export type RecipyUpdateManyWithWhereWithoutFlavorInput = {
    where: RecipyScalarWhereInput
    data: XOR<RecipyUpdateManyMutationInput, RecipyUncheckedUpdateManyWithoutFlavorInput>
  }

  export type RecipyScalarWhereInput = {
    AND?: RecipyScalarWhereInput | RecipyScalarWhereInput[]
    OR?: RecipyScalarWhereInput[]
    NOT?: RecipyScalarWhereInput | RecipyScalarWhereInput[]
    id?: StringFilter<"Recipy"> | string
    name?: StringFilter<"Recipy"> | string
    code?: StringFilter<"Recipy"> | string
    detailes?: StringFilter<"Recipy"> | string
    flavorId?: StringFilter<"Recipy"> | string
    lang?: StringFilter<"Recipy"> | string
  }

  export type FlavorCreateWithoutRecipiesInput = {
    id?: string
    name: string
    primaryImg: string
    lang: string
    products?: ProductCreateNestedManyWithoutFlavorInput
  }

  export type FlavorUncheckedCreateWithoutRecipiesInput = {
    id?: string
    name: string
    primaryImg: string
    lang: string
    products?: ProductUncheckedCreateNestedManyWithoutFlavorInput
  }

  export type FlavorCreateOrConnectWithoutRecipiesInput = {
    where: FlavorWhereUniqueInput
    create: XOR<FlavorCreateWithoutRecipiesInput, FlavorUncheckedCreateWithoutRecipiesInput>
  }

  export type VoteOnRecipyCreateWithoutRecipyInput = {
    id?: string
    user: UserCreateNestedOneWithoutVotesOnRecipiesInput
  }

  export type VoteOnRecipyUncheckedCreateWithoutRecipyInput = {
    id?: string
    userId: string
  }

  export type VoteOnRecipyCreateOrConnectWithoutRecipyInput = {
    where: VoteOnRecipyWhereUniqueInput
    create: XOR<VoteOnRecipyCreateWithoutRecipyInput, VoteOnRecipyUncheckedCreateWithoutRecipyInput>
  }

  export type VoteOnRecipyCreateManyRecipyInputEnvelope = {
    data: VoteOnRecipyCreateManyRecipyInput | VoteOnRecipyCreateManyRecipyInput[]
  }

  export type FlavorUpsertWithoutRecipiesInput = {
    update: XOR<FlavorUpdateWithoutRecipiesInput, FlavorUncheckedUpdateWithoutRecipiesInput>
    create: XOR<FlavorCreateWithoutRecipiesInput, FlavorUncheckedCreateWithoutRecipiesInput>
    where?: FlavorWhereInput
  }

  export type FlavorUpdateToOneWithWhereWithoutRecipiesInput = {
    where?: FlavorWhereInput
    data: XOR<FlavorUpdateWithoutRecipiesInput, FlavorUncheckedUpdateWithoutRecipiesInput>
  }

  export type FlavorUpdateWithoutRecipiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    primaryImg?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    products?: ProductUpdateManyWithoutFlavorNestedInput
  }

  export type FlavorUncheckedUpdateWithoutRecipiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    primaryImg?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutFlavorNestedInput
  }

  export type VoteOnRecipyUpsertWithWhereUniqueWithoutRecipyInput = {
    where: VoteOnRecipyWhereUniqueInput
    update: XOR<VoteOnRecipyUpdateWithoutRecipyInput, VoteOnRecipyUncheckedUpdateWithoutRecipyInput>
    create: XOR<VoteOnRecipyCreateWithoutRecipyInput, VoteOnRecipyUncheckedCreateWithoutRecipyInput>
  }

  export type VoteOnRecipyUpdateWithWhereUniqueWithoutRecipyInput = {
    where: VoteOnRecipyWhereUniqueInput
    data: XOR<VoteOnRecipyUpdateWithoutRecipyInput, VoteOnRecipyUncheckedUpdateWithoutRecipyInput>
  }

  export type VoteOnRecipyUpdateManyWithWhereWithoutRecipyInput = {
    where: VoteOnRecipyScalarWhereInput
    data: XOR<VoteOnRecipyUpdateManyMutationInput, VoteOnRecipyUncheckedUpdateManyWithoutRecipyInput>
  }

  export type UserCreateWithoutVotesOnRecipiesInput = {
    id?: string
    name: string
    email: string
    password: string
    salt: string
    role: string
    verified?: boolean
    comments?: CommentCreateNestedManyWithoutUserInput
    votesOnComments?: VoteOnCommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVotesOnRecipiesInput = {
    id?: string
    name: string
    email: string
    password: string
    salt: string
    role: string
    verified?: boolean
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    votesOnComments?: VoteOnCommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVotesOnRecipiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVotesOnRecipiesInput, UserUncheckedCreateWithoutVotesOnRecipiesInput>
  }

  export type RecipyCreateWithoutVotesInput = {
    id?: string
    name: string
    code: string
    detailes: string
    lang: string
    flavor: FlavorCreateNestedOneWithoutRecipiesInput
  }

  export type RecipyUncheckedCreateWithoutVotesInput = {
    id?: string
    name: string
    code: string
    detailes: string
    flavorId: string
    lang: string
  }

  export type RecipyCreateOrConnectWithoutVotesInput = {
    where: RecipyWhereUniqueInput
    create: XOR<RecipyCreateWithoutVotesInput, RecipyUncheckedCreateWithoutVotesInput>
  }

  export type UserUpsertWithoutVotesOnRecipiesInput = {
    update: XOR<UserUpdateWithoutVotesOnRecipiesInput, UserUncheckedUpdateWithoutVotesOnRecipiesInput>
    create: XOR<UserCreateWithoutVotesOnRecipiesInput, UserUncheckedCreateWithoutVotesOnRecipiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVotesOnRecipiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVotesOnRecipiesInput, UserUncheckedUpdateWithoutVotesOnRecipiesInput>
  }

  export type UserUpdateWithoutVotesOnRecipiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentUpdateManyWithoutUserNestedInput
    votesOnComments?: VoteOnCommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVotesOnRecipiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    votesOnComments?: VoteOnCommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RecipyUpsertWithoutVotesInput = {
    update: XOR<RecipyUpdateWithoutVotesInput, RecipyUncheckedUpdateWithoutVotesInput>
    create: XOR<RecipyCreateWithoutVotesInput, RecipyUncheckedCreateWithoutVotesInput>
    where?: RecipyWhereInput
  }

  export type RecipyUpdateToOneWithWhereWithoutVotesInput = {
    where?: RecipyWhereInput
    data: XOR<RecipyUpdateWithoutVotesInput, RecipyUncheckedUpdateWithoutVotesInput>
  }

  export type RecipyUpdateWithoutVotesInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    detailes?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    flavor?: FlavorUpdateOneRequiredWithoutRecipiesNestedInput
  }

  export type RecipyUncheckedUpdateWithoutVotesInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    detailes?: StringFieldUpdateOperationsInput | string
    flavorId?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateManyUserInput = {
    id?: string
    text: string
    createdAt?: Date | string
  }

  export type VoteOnCommentCreateManyUserInput = {
    id?: string
    commentId: string
  }

  export type VoteOnRecipyCreateManyUserInput = {
    id?: string
    RecipyId: string
  }

  export type CommentUpdateWithoutUserInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteOnCommentUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteOnCommentUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteOnCommentUpdateWithoutUserInput = {
    comment?: CommentUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteOnCommentUncheckedUpdateWithoutUserInput = {
    commentId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteOnCommentUncheckedUpdateManyWithoutUserInput = {
    commentId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteOnRecipyUpdateWithoutUserInput = {
    recipy?: RecipyUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteOnRecipyUncheckedUpdateWithoutUserInput = {
    RecipyId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteOnRecipyUncheckedUpdateManyWithoutUserInput = {
    RecipyId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteOnCommentCreateManyCommentInput = {
    id?: string
    userId: string
  }

  export type VoteOnCommentUpdateWithoutCommentInput = {
    user?: UserUpdateOneRequiredWithoutVotesOnCommentsNestedInput
  }

  export type VoteOnCommentUncheckedUpdateWithoutCommentInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteOnCommentUncheckedUpdateManyWithoutCommentInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type VideoCreateManyProductInput = {
    id?: string
    embededLink: string
    name: string
    coverImg: string
    lang: string
  }

  export type VideoUpdateWithoutProductInput = {
    embededLink?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coverImg?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
  }

  export type VideoUncheckedUpdateWithoutProductInput = {
    embededLink?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coverImg?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
  }

  export type VideoUncheckedUpdateManyWithoutProductInput = {
    embededLink?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coverImg?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateManyCategoryInput = {
    id?: string
    name: string
    code: string
    detailes: string
    img: string
    secondryImg: string
    flavorId: string
    color: string
    p_color: string
    lang: string
  }

  export type ProductUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    detailes?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    secondryImg?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    p_color?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    flavor?: FlavorUpdateOneRequiredWithoutProductsNestedInput
    videos?: VideoUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    detailes?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    secondryImg?: StringFieldUpdateOperationsInput | string
    flavorId?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    p_color?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    videos?: VideoUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    detailes?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    secondryImg?: StringFieldUpdateOperationsInput | string
    flavorId?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    p_color?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateManyFlavorInput = {
    id?: string
    name: string
    code: string
    detailes: string
    img: string
    secondryImg: string
    color: string
    p_color: string
    categoryId: string
    lang: string
  }

  export type RecipyCreateManyFlavorInput = {
    id?: string
    name: string
    code: string
    detailes: string
    lang: string
  }

  export type ProductUpdateWithoutFlavorInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    detailes?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    secondryImg?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    p_color?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    videos?: VideoUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutFlavorInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    detailes?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    secondryImg?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    p_color?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    videos?: VideoUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutFlavorInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    detailes?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    secondryImg?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    p_color?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
  }

  export type RecipyUpdateWithoutFlavorInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    detailes?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    votes?: VoteOnRecipyUpdateManyWithoutRecipyNestedInput
  }

  export type RecipyUncheckedUpdateWithoutFlavorInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    detailes?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    votes?: VoteOnRecipyUncheckedUpdateManyWithoutRecipyNestedInput
  }

  export type RecipyUncheckedUpdateManyWithoutFlavorInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    detailes?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
  }

  export type VoteOnRecipyCreateManyRecipyInput = {
    id?: string
    userId: string
  }

  export type VoteOnRecipyUpdateWithoutRecipyInput = {
    user?: UserUpdateOneRequiredWithoutVotesOnRecipiesNestedInput
  }

  export type VoteOnRecipyUncheckedUpdateWithoutRecipyInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteOnRecipyUncheckedUpdateManyWithoutRecipyInput = {
    userId?: StringFieldUpdateOperationsInput | string
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