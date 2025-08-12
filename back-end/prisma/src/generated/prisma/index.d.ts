
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
 * Model usuario
 * 
 */
export type usuario = $Result.DefaultSelection<Prisma.$usuarioPayload>
/**
 * Model bibliotecas
 * 
 */
export type bibliotecas = $Result.DefaultSelection<Prisma.$bibliotecasPayload>
/**
 * Model libro
 * 
 */
export type libro = $Result.DefaultSelection<Prisma.$libroPayload>
/**
 * Model autor
 * 
 */
export type autor = $Result.DefaultSelection<Prisma.$autorPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const rol: {
  Administrador: 'Administrador'
};

export type rol = (typeof rol)[keyof typeof rol]

}

export type rol = $Enums.rol

export const rol: typeof $Enums.rol

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.usuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bibliotecas`: Exposes CRUD operations for the **bibliotecas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bibliotecas
    * const bibliotecas = await prisma.bibliotecas.findMany()
    * ```
    */
  get bibliotecas(): Prisma.bibliotecasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.libro`: Exposes CRUD operations for the **libro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Libros
    * const libros = await prisma.libro.findMany()
    * ```
    */
  get libro(): Prisma.libroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.autor`: Exposes CRUD operations for the **autor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Autors
    * const autors = await prisma.autor.findMany()
    * ```
    */
  get autor(): Prisma.autorDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
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
    usuario: 'usuario',
    bibliotecas: 'bibliotecas',
    libro: 'libro',
    autor: 'autor'
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
      modelProps: "usuario" | "bibliotecas" | "libro" | "autor"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      usuario: {
        payload: Prisma.$usuarioPayload<ExtArgs>
        fields: Prisma.usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findFirst: {
            args: Prisma.usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findMany: {
            args: Prisma.usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          create: {
            args: Prisma.usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          createMany: {
            args: Prisma.usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          update: {
            args: Prisma.usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          deleteMany: {
            args: Prisma.usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      bibliotecas: {
        payload: Prisma.$bibliotecasPayload<ExtArgs>
        fields: Prisma.bibliotecasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bibliotecasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bibliotecasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bibliotecasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bibliotecasPayload>
          }
          findFirst: {
            args: Prisma.bibliotecasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bibliotecasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bibliotecasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bibliotecasPayload>
          }
          findMany: {
            args: Prisma.bibliotecasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bibliotecasPayload>[]
          }
          create: {
            args: Prisma.bibliotecasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bibliotecasPayload>
          }
          createMany: {
            args: Prisma.bibliotecasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.bibliotecasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bibliotecasPayload>
          }
          update: {
            args: Prisma.bibliotecasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bibliotecasPayload>
          }
          deleteMany: {
            args: Prisma.bibliotecasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bibliotecasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.bibliotecasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bibliotecasPayload>
          }
          aggregate: {
            args: Prisma.BibliotecasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBibliotecas>
          }
          groupBy: {
            args: Prisma.bibliotecasGroupByArgs<ExtArgs>
            result: $Utils.Optional<BibliotecasGroupByOutputType>[]
          }
          count: {
            args: Prisma.bibliotecasCountArgs<ExtArgs>
            result: $Utils.Optional<BibliotecasCountAggregateOutputType> | number
          }
        }
      }
      libro: {
        payload: Prisma.$libroPayload<ExtArgs>
        fields: Prisma.libroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.libroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$libroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.libroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$libroPayload>
          }
          findFirst: {
            args: Prisma.libroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$libroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.libroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$libroPayload>
          }
          findMany: {
            args: Prisma.libroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$libroPayload>[]
          }
          create: {
            args: Prisma.libroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$libroPayload>
          }
          createMany: {
            args: Prisma.libroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.libroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$libroPayload>
          }
          update: {
            args: Prisma.libroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$libroPayload>
          }
          deleteMany: {
            args: Prisma.libroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.libroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.libroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$libroPayload>
          }
          aggregate: {
            args: Prisma.LibroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLibro>
          }
          groupBy: {
            args: Prisma.libroGroupByArgs<ExtArgs>
            result: $Utils.Optional<LibroGroupByOutputType>[]
          }
          count: {
            args: Prisma.libroCountArgs<ExtArgs>
            result: $Utils.Optional<LibroCountAggregateOutputType> | number
          }
        }
      }
      autor: {
        payload: Prisma.$autorPayload<ExtArgs>
        fields: Prisma.autorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.autorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$autorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.autorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$autorPayload>
          }
          findFirst: {
            args: Prisma.autorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$autorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.autorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$autorPayload>
          }
          findMany: {
            args: Prisma.autorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$autorPayload>[]
          }
          create: {
            args: Prisma.autorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$autorPayload>
          }
          createMany: {
            args: Prisma.autorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.autorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$autorPayload>
          }
          update: {
            args: Prisma.autorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$autorPayload>
          }
          deleteMany: {
            args: Prisma.autorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.autorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.autorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$autorPayload>
          }
          aggregate: {
            args: Prisma.AutorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAutor>
          }
          groupBy: {
            args: Prisma.autorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AutorGroupByOutputType>[]
          }
          count: {
            args: Prisma.autorCountArgs<ExtArgs>
            result: $Utils.Optional<AutorCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
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
    usuario?: usuarioOmit
    bibliotecas?: bibliotecasOmit
    libro?: libroOmit
    autor?: autorOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type BibliotecasCountOutputType
   */

  export type BibliotecasCountOutputType = {
    libros: number
  }

  export type BibliotecasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    libros?: boolean | BibliotecasCountOutputTypeCountLibrosArgs
  }

  // Custom InputTypes
  /**
   * BibliotecasCountOutputType without action
   */
  export type BibliotecasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BibliotecasCountOutputType
     */
    select?: BibliotecasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BibliotecasCountOutputType without action
   */
  export type BibliotecasCountOutputTypeCountLibrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: libroWhereInput
  }


  /**
   * Count Type LibroCountOutputType
   */

  export type LibroCountOutputType = {
    autores: number
    sede: number
  }

  export type LibroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autores?: boolean | LibroCountOutputTypeCountAutoresArgs
    sede?: boolean | LibroCountOutputTypeCountSedeArgs
  }

  // Custom InputTypes
  /**
   * LibroCountOutputType without action
   */
  export type LibroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibroCountOutputType
     */
    select?: LibroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LibroCountOutputType without action
   */
  export type LibroCountOutputTypeCountAutoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: autorWhereInput
  }

  /**
   * LibroCountOutputType without action
   */
  export type LibroCountOutputTypeCountSedeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bibliotecasWhereInput
  }


  /**
   * Count Type AutorCountOutputType
   */

  export type AutorCountOutputType = {
    libros: number
  }

  export type AutorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    libros?: boolean | AutorCountOutputTypeCountLibrosArgs
  }

  // Custom InputTypes
  /**
   * AutorCountOutputType without action
   */
  export type AutorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutorCountOutputType
     */
    select?: AutorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AutorCountOutputType without action
   */
  export type AutorCountOutputTypeCountLibrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: libroWhereInput
  }


  /**
   * Models
   */

  /**
   * Model usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    correo: string | null
    contraseña: string | null
    rol: $Enums.rol | null
    fecha: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    correo: string | null
    contraseña: string | null
    rol: $Enums.rol | null
    fecha: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    correo: number
    contraseña: number
    rol: number
    fecha: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    correo?: true
    contraseña?: true
    rol?: true
    fecha?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    correo?: true
    contraseña?: true
    rol?: true
    fecha?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    correo?: true
    contraseña?: true
    rol?: true
    fecha?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario to aggregate.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithAggregationInput | usuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    correo: string
    contraseña: string
    rol: $Enums.rol
    fecha: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    correo?: boolean
    contraseña?: boolean
    rol?: boolean
    fecha?: boolean
  }, ExtArgs["result"]["usuario"]>



  export type usuarioSelectScalar = {
    id?: boolean
    correo?: boolean
    contraseña?: boolean
    rol?: boolean
    fecha?: boolean
  }

  export type usuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "correo" | "contraseña" | "rol" | "fecha", ExtArgs["result"]["usuario"]>

  export type $usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      correo: string
      contraseña: string
      rol: $Enums.rol
      fecha: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type usuarioGetPayload<S extends boolean | null | undefined | usuarioDefaultArgs> = $Result.GetResult<Prisma.$usuarioPayload, S>

  type usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario'], meta: { name: 'usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {usuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuarioFindUniqueArgs>(args: SelectSubset<T, usuarioFindUniqueArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuarioFindFirstArgs>(args?: SelectSubset<T, usuarioFindFirstArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuarioFindManyArgs>(args?: SelectSubset<T, usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {usuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends usuarioCreateArgs>(args: SelectSubset<T, usuarioCreateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuarioCreateManyArgs>(args?: SelectSubset<T, usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {usuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends usuarioDeleteArgs>(args: SelectSubset<T, usuarioDeleteArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {usuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuarioUpdateArgs>(args: SelectSubset<T, usuarioUpdateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuarioDeleteManyArgs>(args?: SelectSubset<T, usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuarioUpdateManyArgs>(args: SelectSubset<T, usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {usuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends usuarioUpsertArgs>(args: SelectSubset<T, usuarioUpsertArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuarioCountArgs>(
      args?: Subset<T, usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioGroupByArgs} args - Group by arguments.
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
      T extends usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarioGroupByArgs['orderBy'] }
        : { orderBy?: usuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario model
   */
  readonly fields: usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the usuario model
   */
  interface usuarioFieldRefs {
    readonly id: FieldRef<"usuario", 'Int'>
    readonly correo: FieldRef<"usuario", 'String'>
    readonly contraseña: FieldRef<"usuario", 'String'>
    readonly rol: FieldRef<"usuario", 'rol'>
    readonly fecha: FieldRef<"usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * usuario findUnique
   */
  export type usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findUniqueOrThrow
   */
  export type usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findFirst
   */
  export type usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findFirstOrThrow
   */
  export type usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findMany
   */
  export type usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario create
   */
  export type usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * The data needed to create a usuario.
     */
    data: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
  }

  /**
   * usuario createMany
   */
  export type usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario update
   */
  export type usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * The data needed to update a usuario.
     */
    data: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
    /**
     * Choose, which usuario to update.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario updateMany
   */
  export type usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuario upsert
   */
  export type usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * The filter to search for the usuario to update in case it exists.
     */
    where: usuarioWhereUniqueInput
    /**
     * In case the usuario found by the `where` argument doesn't exist, create a new usuario with this data.
     */
    create: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
    /**
     * In case the usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
  }

  /**
   * usuario delete
   */
  export type usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Filter which usuario to delete.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario deleteMany
   */
  export type usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuario without action
   */
  export type usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
  }


  /**
   * Model bibliotecas
   */

  export type AggregateBibliotecas = {
    _count: BibliotecasCountAggregateOutputType | null
    _avg: BibliotecasAvgAggregateOutputType | null
    _sum: BibliotecasSumAggregateOutputType | null
    _min: BibliotecasMinAggregateOutputType | null
    _max: BibliotecasMaxAggregateOutputType | null
  }

  export type BibliotecasAvgAggregateOutputType = {
    id: number | null
  }

  export type BibliotecasSumAggregateOutputType = {
    id: number | null
  }

  export type BibliotecasMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    ubicacion: string | null
  }

  export type BibliotecasMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    ubicacion: string | null
  }

  export type BibliotecasCountAggregateOutputType = {
    id: number
    nombre: number
    ubicacion: number
    _all: number
  }


  export type BibliotecasAvgAggregateInputType = {
    id?: true
  }

  export type BibliotecasSumAggregateInputType = {
    id?: true
  }

  export type BibliotecasMinAggregateInputType = {
    id?: true
    nombre?: true
    ubicacion?: true
  }

  export type BibliotecasMaxAggregateInputType = {
    id?: true
    nombre?: true
    ubicacion?: true
  }

  export type BibliotecasCountAggregateInputType = {
    id?: true
    nombre?: true
    ubicacion?: true
    _all?: true
  }

  export type BibliotecasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bibliotecas to aggregate.
     */
    where?: bibliotecasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bibliotecas to fetch.
     */
    orderBy?: bibliotecasOrderByWithRelationInput | bibliotecasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bibliotecasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bibliotecas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bibliotecas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bibliotecas
    **/
    _count?: true | BibliotecasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BibliotecasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BibliotecasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BibliotecasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BibliotecasMaxAggregateInputType
  }

  export type GetBibliotecasAggregateType<T extends BibliotecasAggregateArgs> = {
        [P in keyof T & keyof AggregateBibliotecas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBibliotecas[P]>
      : GetScalarType<T[P], AggregateBibliotecas[P]>
  }




  export type bibliotecasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bibliotecasWhereInput
    orderBy?: bibliotecasOrderByWithAggregationInput | bibliotecasOrderByWithAggregationInput[]
    by: BibliotecasScalarFieldEnum[] | BibliotecasScalarFieldEnum
    having?: bibliotecasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BibliotecasCountAggregateInputType | true
    _avg?: BibliotecasAvgAggregateInputType
    _sum?: BibliotecasSumAggregateInputType
    _min?: BibliotecasMinAggregateInputType
    _max?: BibliotecasMaxAggregateInputType
  }

  export type BibliotecasGroupByOutputType = {
    id: number
    nombre: string
    ubicacion: string
    _count: BibliotecasCountAggregateOutputType | null
    _avg: BibliotecasAvgAggregateOutputType | null
    _sum: BibliotecasSumAggregateOutputType | null
    _min: BibliotecasMinAggregateOutputType | null
    _max: BibliotecasMaxAggregateOutputType | null
  }

  type GetBibliotecasGroupByPayload<T extends bibliotecasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BibliotecasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BibliotecasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BibliotecasGroupByOutputType[P]>
            : GetScalarType<T[P], BibliotecasGroupByOutputType[P]>
        }
      >
    >


  export type bibliotecasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    ubicacion?: boolean
    libros?: boolean | bibliotecas$librosArgs<ExtArgs>
    _count?: boolean | BibliotecasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bibliotecas"]>



  export type bibliotecasSelectScalar = {
    id?: boolean
    nombre?: boolean
    ubicacion?: boolean
  }

  export type bibliotecasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "ubicacion", ExtArgs["result"]["bibliotecas"]>
  export type bibliotecasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    libros?: boolean | bibliotecas$librosArgs<ExtArgs>
    _count?: boolean | BibliotecasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $bibliotecasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bibliotecas"
    objects: {
      libros: Prisma.$libroPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      ubicacion: string
    }, ExtArgs["result"]["bibliotecas"]>
    composites: {}
  }

  type bibliotecasGetPayload<S extends boolean | null | undefined | bibliotecasDefaultArgs> = $Result.GetResult<Prisma.$bibliotecasPayload, S>

  type bibliotecasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bibliotecasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BibliotecasCountAggregateInputType | true
    }

  export interface bibliotecasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bibliotecas'], meta: { name: 'bibliotecas' } }
    /**
     * Find zero or one Bibliotecas that matches the filter.
     * @param {bibliotecasFindUniqueArgs} args - Arguments to find a Bibliotecas
     * @example
     * // Get one Bibliotecas
     * const bibliotecas = await prisma.bibliotecas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bibliotecasFindUniqueArgs>(args: SelectSubset<T, bibliotecasFindUniqueArgs<ExtArgs>>): Prisma__bibliotecasClient<$Result.GetResult<Prisma.$bibliotecasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bibliotecas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bibliotecasFindUniqueOrThrowArgs} args - Arguments to find a Bibliotecas
     * @example
     * // Get one Bibliotecas
     * const bibliotecas = await prisma.bibliotecas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bibliotecasFindUniqueOrThrowArgs>(args: SelectSubset<T, bibliotecasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bibliotecasClient<$Result.GetResult<Prisma.$bibliotecasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bibliotecas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bibliotecasFindFirstArgs} args - Arguments to find a Bibliotecas
     * @example
     * // Get one Bibliotecas
     * const bibliotecas = await prisma.bibliotecas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bibliotecasFindFirstArgs>(args?: SelectSubset<T, bibliotecasFindFirstArgs<ExtArgs>>): Prisma__bibliotecasClient<$Result.GetResult<Prisma.$bibliotecasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bibliotecas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bibliotecasFindFirstOrThrowArgs} args - Arguments to find a Bibliotecas
     * @example
     * // Get one Bibliotecas
     * const bibliotecas = await prisma.bibliotecas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bibliotecasFindFirstOrThrowArgs>(args?: SelectSubset<T, bibliotecasFindFirstOrThrowArgs<ExtArgs>>): Prisma__bibliotecasClient<$Result.GetResult<Prisma.$bibliotecasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bibliotecas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bibliotecasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bibliotecas
     * const bibliotecas = await prisma.bibliotecas.findMany()
     * 
     * // Get first 10 Bibliotecas
     * const bibliotecas = await prisma.bibliotecas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bibliotecasWithIdOnly = await prisma.bibliotecas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bibliotecasFindManyArgs>(args?: SelectSubset<T, bibliotecasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bibliotecasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bibliotecas.
     * @param {bibliotecasCreateArgs} args - Arguments to create a Bibliotecas.
     * @example
     * // Create one Bibliotecas
     * const Bibliotecas = await prisma.bibliotecas.create({
     *   data: {
     *     // ... data to create a Bibliotecas
     *   }
     * })
     * 
     */
    create<T extends bibliotecasCreateArgs>(args: SelectSubset<T, bibliotecasCreateArgs<ExtArgs>>): Prisma__bibliotecasClient<$Result.GetResult<Prisma.$bibliotecasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bibliotecas.
     * @param {bibliotecasCreateManyArgs} args - Arguments to create many Bibliotecas.
     * @example
     * // Create many Bibliotecas
     * const bibliotecas = await prisma.bibliotecas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bibliotecasCreateManyArgs>(args?: SelectSubset<T, bibliotecasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bibliotecas.
     * @param {bibliotecasDeleteArgs} args - Arguments to delete one Bibliotecas.
     * @example
     * // Delete one Bibliotecas
     * const Bibliotecas = await prisma.bibliotecas.delete({
     *   where: {
     *     // ... filter to delete one Bibliotecas
     *   }
     * })
     * 
     */
    delete<T extends bibliotecasDeleteArgs>(args: SelectSubset<T, bibliotecasDeleteArgs<ExtArgs>>): Prisma__bibliotecasClient<$Result.GetResult<Prisma.$bibliotecasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bibliotecas.
     * @param {bibliotecasUpdateArgs} args - Arguments to update one Bibliotecas.
     * @example
     * // Update one Bibliotecas
     * const bibliotecas = await prisma.bibliotecas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bibliotecasUpdateArgs>(args: SelectSubset<T, bibliotecasUpdateArgs<ExtArgs>>): Prisma__bibliotecasClient<$Result.GetResult<Prisma.$bibliotecasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bibliotecas.
     * @param {bibliotecasDeleteManyArgs} args - Arguments to filter Bibliotecas to delete.
     * @example
     * // Delete a few Bibliotecas
     * const { count } = await prisma.bibliotecas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bibliotecasDeleteManyArgs>(args?: SelectSubset<T, bibliotecasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bibliotecas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bibliotecasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bibliotecas
     * const bibliotecas = await prisma.bibliotecas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bibliotecasUpdateManyArgs>(args: SelectSubset<T, bibliotecasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bibliotecas.
     * @param {bibliotecasUpsertArgs} args - Arguments to update or create a Bibliotecas.
     * @example
     * // Update or create a Bibliotecas
     * const bibliotecas = await prisma.bibliotecas.upsert({
     *   create: {
     *     // ... data to create a Bibliotecas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bibliotecas we want to update
     *   }
     * })
     */
    upsert<T extends bibliotecasUpsertArgs>(args: SelectSubset<T, bibliotecasUpsertArgs<ExtArgs>>): Prisma__bibliotecasClient<$Result.GetResult<Prisma.$bibliotecasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bibliotecas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bibliotecasCountArgs} args - Arguments to filter Bibliotecas to count.
     * @example
     * // Count the number of Bibliotecas
     * const count = await prisma.bibliotecas.count({
     *   where: {
     *     // ... the filter for the Bibliotecas we want to count
     *   }
     * })
    **/
    count<T extends bibliotecasCountArgs>(
      args?: Subset<T, bibliotecasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BibliotecasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bibliotecas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BibliotecasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BibliotecasAggregateArgs>(args: Subset<T, BibliotecasAggregateArgs>): Prisma.PrismaPromise<GetBibliotecasAggregateType<T>>

    /**
     * Group by Bibliotecas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bibliotecasGroupByArgs} args - Group by arguments.
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
      T extends bibliotecasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bibliotecasGroupByArgs['orderBy'] }
        : { orderBy?: bibliotecasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, bibliotecasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBibliotecasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bibliotecas model
   */
  readonly fields: bibliotecasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bibliotecas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bibliotecasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    libros<T extends bibliotecas$librosArgs<ExtArgs> = {}>(args?: Subset<T, bibliotecas$librosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$libroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the bibliotecas model
   */
  interface bibliotecasFieldRefs {
    readonly id: FieldRef<"bibliotecas", 'Int'>
    readonly nombre: FieldRef<"bibliotecas", 'String'>
    readonly ubicacion: FieldRef<"bibliotecas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * bibliotecas findUnique
   */
  export type bibliotecasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bibliotecas
     */
    select?: bibliotecasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bibliotecas
     */
    omit?: bibliotecasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bibliotecasInclude<ExtArgs> | null
    /**
     * Filter, which bibliotecas to fetch.
     */
    where: bibliotecasWhereUniqueInput
  }

  /**
   * bibliotecas findUniqueOrThrow
   */
  export type bibliotecasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bibliotecas
     */
    select?: bibliotecasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bibliotecas
     */
    omit?: bibliotecasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bibliotecasInclude<ExtArgs> | null
    /**
     * Filter, which bibliotecas to fetch.
     */
    where: bibliotecasWhereUniqueInput
  }

  /**
   * bibliotecas findFirst
   */
  export type bibliotecasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bibliotecas
     */
    select?: bibliotecasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bibliotecas
     */
    omit?: bibliotecasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bibliotecasInclude<ExtArgs> | null
    /**
     * Filter, which bibliotecas to fetch.
     */
    where?: bibliotecasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bibliotecas to fetch.
     */
    orderBy?: bibliotecasOrderByWithRelationInput | bibliotecasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bibliotecas.
     */
    cursor?: bibliotecasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bibliotecas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bibliotecas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bibliotecas.
     */
    distinct?: BibliotecasScalarFieldEnum | BibliotecasScalarFieldEnum[]
  }

  /**
   * bibliotecas findFirstOrThrow
   */
  export type bibliotecasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bibliotecas
     */
    select?: bibliotecasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bibliotecas
     */
    omit?: bibliotecasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bibliotecasInclude<ExtArgs> | null
    /**
     * Filter, which bibliotecas to fetch.
     */
    where?: bibliotecasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bibliotecas to fetch.
     */
    orderBy?: bibliotecasOrderByWithRelationInput | bibliotecasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bibliotecas.
     */
    cursor?: bibliotecasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bibliotecas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bibliotecas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bibliotecas.
     */
    distinct?: BibliotecasScalarFieldEnum | BibliotecasScalarFieldEnum[]
  }

  /**
   * bibliotecas findMany
   */
  export type bibliotecasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bibliotecas
     */
    select?: bibliotecasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bibliotecas
     */
    omit?: bibliotecasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bibliotecasInclude<ExtArgs> | null
    /**
     * Filter, which bibliotecas to fetch.
     */
    where?: bibliotecasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bibliotecas to fetch.
     */
    orderBy?: bibliotecasOrderByWithRelationInput | bibliotecasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bibliotecas.
     */
    cursor?: bibliotecasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bibliotecas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bibliotecas.
     */
    skip?: number
    distinct?: BibliotecasScalarFieldEnum | BibliotecasScalarFieldEnum[]
  }

  /**
   * bibliotecas create
   */
  export type bibliotecasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bibliotecas
     */
    select?: bibliotecasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bibliotecas
     */
    omit?: bibliotecasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bibliotecasInclude<ExtArgs> | null
    /**
     * The data needed to create a bibliotecas.
     */
    data: XOR<bibliotecasCreateInput, bibliotecasUncheckedCreateInput>
  }

  /**
   * bibliotecas createMany
   */
  export type bibliotecasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bibliotecas.
     */
    data: bibliotecasCreateManyInput | bibliotecasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bibliotecas update
   */
  export type bibliotecasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bibliotecas
     */
    select?: bibliotecasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bibliotecas
     */
    omit?: bibliotecasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bibliotecasInclude<ExtArgs> | null
    /**
     * The data needed to update a bibliotecas.
     */
    data: XOR<bibliotecasUpdateInput, bibliotecasUncheckedUpdateInput>
    /**
     * Choose, which bibliotecas to update.
     */
    where: bibliotecasWhereUniqueInput
  }

  /**
   * bibliotecas updateMany
   */
  export type bibliotecasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bibliotecas.
     */
    data: XOR<bibliotecasUpdateManyMutationInput, bibliotecasUncheckedUpdateManyInput>
    /**
     * Filter which bibliotecas to update
     */
    where?: bibliotecasWhereInput
    /**
     * Limit how many bibliotecas to update.
     */
    limit?: number
  }

  /**
   * bibliotecas upsert
   */
  export type bibliotecasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bibliotecas
     */
    select?: bibliotecasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bibliotecas
     */
    omit?: bibliotecasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bibliotecasInclude<ExtArgs> | null
    /**
     * The filter to search for the bibliotecas to update in case it exists.
     */
    where: bibliotecasWhereUniqueInput
    /**
     * In case the bibliotecas found by the `where` argument doesn't exist, create a new bibliotecas with this data.
     */
    create: XOR<bibliotecasCreateInput, bibliotecasUncheckedCreateInput>
    /**
     * In case the bibliotecas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bibliotecasUpdateInput, bibliotecasUncheckedUpdateInput>
  }

  /**
   * bibliotecas delete
   */
  export type bibliotecasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bibliotecas
     */
    select?: bibliotecasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bibliotecas
     */
    omit?: bibliotecasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bibliotecasInclude<ExtArgs> | null
    /**
     * Filter which bibliotecas to delete.
     */
    where: bibliotecasWhereUniqueInput
  }

  /**
   * bibliotecas deleteMany
   */
  export type bibliotecasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bibliotecas to delete
     */
    where?: bibliotecasWhereInput
    /**
     * Limit how many bibliotecas to delete.
     */
    limit?: number
  }

  /**
   * bibliotecas.libros
   */
  export type bibliotecas$librosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libro
     */
    select?: libroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libro
     */
    omit?: libroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: libroInclude<ExtArgs> | null
    where?: libroWhereInput
    orderBy?: libroOrderByWithRelationInput | libroOrderByWithRelationInput[]
    cursor?: libroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LibroScalarFieldEnum | LibroScalarFieldEnum[]
  }

  /**
   * bibliotecas without action
   */
  export type bibliotecasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bibliotecas
     */
    select?: bibliotecasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bibliotecas
     */
    omit?: bibliotecasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bibliotecasInclude<ExtArgs> | null
  }


  /**
   * Model libro
   */

  export type AggregateLibro = {
    _count: LibroCountAggregateOutputType | null
    _avg: LibroAvgAggregateOutputType | null
    _sum: LibroSumAggregateOutputType | null
    _min: LibroMinAggregateOutputType | null
    _max: LibroMaxAggregateOutputType | null
  }

  export type LibroAvgAggregateOutputType = {
    id: number | null
  }

  export type LibroSumAggregateOutputType = {
    id: number | null
  }

  export type LibroMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    publicacion: Date | null
  }

  export type LibroMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    publicacion: Date | null
  }

  export type LibroCountAggregateOutputType = {
    id: number
    titulo: number
    publicacion: number
    _all: number
  }


  export type LibroAvgAggregateInputType = {
    id?: true
  }

  export type LibroSumAggregateInputType = {
    id?: true
  }

  export type LibroMinAggregateInputType = {
    id?: true
    titulo?: true
    publicacion?: true
  }

  export type LibroMaxAggregateInputType = {
    id?: true
    titulo?: true
    publicacion?: true
  }

  export type LibroCountAggregateInputType = {
    id?: true
    titulo?: true
    publicacion?: true
    _all?: true
  }

  export type LibroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which libro to aggregate.
     */
    where?: libroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of libros to fetch.
     */
    orderBy?: libroOrderByWithRelationInput | libroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: libroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` libros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` libros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned libros
    **/
    _count?: true | LibroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LibroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LibroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LibroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LibroMaxAggregateInputType
  }

  export type GetLibroAggregateType<T extends LibroAggregateArgs> = {
        [P in keyof T & keyof AggregateLibro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLibro[P]>
      : GetScalarType<T[P], AggregateLibro[P]>
  }




  export type libroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: libroWhereInput
    orderBy?: libroOrderByWithAggregationInput | libroOrderByWithAggregationInput[]
    by: LibroScalarFieldEnum[] | LibroScalarFieldEnum
    having?: libroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LibroCountAggregateInputType | true
    _avg?: LibroAvgAggregateInputType
    _sum?: LibroSumAggregateInputType
    _min?: LibroMinAggregateInputType
    _max?: LibroMaxAggregateInputType
  }

  export type LibroGroupByOutputType = {
    id: number
    titulo: string
    publicacion: Date
    _count: LibroCountAggregateOutputType | null
    _avg: LibroAvgAggregateOutputType | null
    _sum: LibroSumAggregateOutputType | null
    _min: LibroMinAggregateOutputType | null
    _max: LibroMaxAggregateOutputType | null
  }

  type GetLibroGroupByPayload<T extends libroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LibroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LibroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LibroGroupByOutputType[P]>
            : GetScalarType<T[P], LibroGroupByOutputType[P]>
        }
      >
    >


  export type libroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    publicacion?: boolean
    autores?: boolean | libro$autoresArgs<ExtArgs>
    sede?: boolean | libro$sedeArgs<ExtArgs>
    _count?: boolean | LibroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["libro"]>



  export type libroSelectScalar = {
    id?: boolean
    titulo?: boolean
    publicacion?: boolean
  }

  export type libroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "publicacion", ExtArgs["result"]["libro"]>
  export type libroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autores?: boolean | libro$autoresArgs<ExtArgs>
    sede?: boolean | libro$sedeArgs<ExtArgs>
    _count?: boolean | LibroCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $libroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "libro"
    objects: {
      autores: Prisma.$autorPayload<ExtArgs>[]
      sede: Prisma.$bibliotecasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      publicacion: Date
    }, ExtArgs["result"]["libro"]>
    composites: {}
  }

  type libroGetPayload<S extends boolean | null | undefined | libroDefaultArgs> = $Result.GetResult<Prisma.$libroPayload, S>

  type libroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<libroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LibroCountAggregateInputType | true
    }

  export interface libroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['libro'], meta: { name: 'libro' } }
    /**
     * Find zero or one Libro that matches the filter.
     * @param {libroFindUniqueArgs} args - Arguments to find a Libro
     * @example
     * // Get one Libro
     * const libro = await prisma.libro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends libroFindUniqueArgs>(args: SelectSubset<T, libroFindUniqueArgs<ExtArgs>>): Prisma__libroClient<$Result.GetResult<Prisma.$libroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Libro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {libroFindUniqueOrThrowArgs} args - Arguments to find a Libro
     * @example
     * // Get one Libro
     * const libro = await prisma.libro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends libroFindUniqueOrThrowArgs>(args: SelectSubset<T, libroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__libroClient<$Result.GetResult<Prisma.$libroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Libro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {libroFindFirstArgs} args - Arguments to find a Libro
     * @example
     * // Get one Libro
     * const libro = await prisma.libro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends libroFindFirstArgs>(args?: SelectSubset<T, libroFindFirstArgs<ExtArgs>>): Prisma__libroClient<$Result.GetResult<Prisma.$libroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Libro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {libroFindFirstOrThrowArgs} args - Arguments to find a Libro
     * @example
     * // Get one Libro
     * const libro = await prisma.libro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends libroFindFirstOrThrowArgs>(args?: SelectSubset<T, libroFindFirstOrThrowArgs<ExtArgs>>): Prisma__libroClient<$Result.GetResult<Prisma.$libroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Libros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {libroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Libros
     * const libros = await prisma.libro.findMany()
     * 
     * // Get first 10 Libros
     * const libros = await prisma.libro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const libroWithIdOnly = await prisma.libro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends libroFindManyArgs>(args?: SelectSubset<T, libroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$libroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Libro.
     * @param {libroCreateArgs} args - Arguments to create a Libro.
     * @example
     * // Create one Libro
     * const Libro = await prisma.libro.create({
     *   data: {
     *     // ... data to create a Libro
     *   }
     * })
     * 
     */
    create<T extends libroCreateArgs>(args: SelectSubset<T, libroCreateArgs<ExtArgs>>): Prisma__libroClient<$Result.GetResult<Prisma.$libroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Libros.
     * @param {libroCreateManyArgs} args - Arguments to create many Libros.
     * @example
     * // Create many Libros
     * const libro = await prisma.libro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends libroCreateManyArgs>(args?: SelectSubset<T, libroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Libro.
     * @param {libroDeleteArgs} args - Arguments to delete one Libro.
     * @example
     * // Delete one Libro
     * const Libro = await prisma.libro.delete({
     *   where: {
     *     // ... filter to delete one Libro
     *   }
     * })
     * 
     */
    delete<T extends libroDeleteArgs>(args: SelectSubset<T, libroDeleteArgs<ExtArgs>>): Prisma__libroClient<$Result.GetResult<Prisma.$libroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Libro.
     * @param {libroUpdateArgs} args - Arguments to update one Libro.
     * @example
     * // Update one Libro
     * const libro = await prisma.libro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends libroUpdateArgs>(args: SelectSubset<T, libroUpdateArgs<ExtArgs>>): Prisma__libroClient<$Result.GetResult<Prisma.$libroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Libros.
     * @param {libroDeleteManyArgs} args - Arguments to filter Libros to delete.
     * @example
     * // Delete a few Libros
     * const { count } = await prisma.libro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends libroDeleteManyArgs>(args?: SelectSubset<T, libroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Libros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {libroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Libros
     * const libro = await prisma.libro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends libroUpdateManyArgs>(args: SelectSubset<T, libroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Libro.
     * @param {libroUpsertArgs} args - Arguments to update or create a Libro.
     * @example
     * // Update or create a Libro
     * const libro = await prisma.libro.upsert({
     *   create: {
     *     // ... data to create a Libro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Libro we want to update
     *   }
     * })
     */
    upsert<T extends libroUpsertArgs>(args: SelectSubset<T, libroUpsertArgs<ExtArgs>>): Prisma__libroClient<$Result.GetResult<Prisma.$libroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Libros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {libroCountArgs} args - Arguments to filter Libros to count.
     * @example
     * // Count the number of Libros
     * const count = await prisma.libro.count({
     *   where: {
     *     // ... the filter for the Libros we want to count
     *   }
     * })
    **/
    count<T extends libroCountArgs>(
      args?: Subset<T, libroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LibroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Libro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LibroAggregateArgs>(args: Subset<T, LibroAggregateArgs>): Prisma.PrismaPromise<GetLibroAggregateType<T>>

    /**
     * Group by Libro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {libroGroupByArgs} args - Group by arguments.
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
      T extends libroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: libroGroupByArgs['orderBy'] }
        : { orderBy?: libroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, libroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLibroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the libro model
   */
  readonly fields: libroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for libro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__libroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    autores<T extends libro$autoresArgs<ExtArgs> = {}>(args?: Subset<T, libro$autoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sede<T extends libro$sedeArgs<ExtArgs> = {}>(args?: Subset<T, libro$sedeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bibliotecasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the libro model
   */
  interface libroFieldRefs {
    readonly id: FieldRef<"libro", 'Int'>
    readonly titulo: FieldRef<"libro", 'String'>
    readonly publicacion: FieldRef<"libro", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * libro findUnique
   */
  export type libroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libro
     */
    select?: libroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libro
     */
    omit?: libroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: libroInclude<ExtArgs> | null
    /**
     * Filter, which libro to fetch.
     */
    where: libroWhereUniqueInput
  }

  /**
   * libro findUniqueOrThrow
   */
  export type libroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libro
     */
    select?: libroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libro
     */
    omit?: libroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: libroInclude<ExtArgs> | null
    /**
     * Filter, which libro to fetch.
     */
    where: libroWhereUniqueInput
  }

  /**
   * libro findFirst
   */
  export type libroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libro
     */
    select?: libroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libro
     */
    omit?: libroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: libroInclude<ExtArgs> | null
    /**
     * Filter, which libro to fetch.
     */
    where?: libroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of libros to fetch.
     */
    orderBy?: libroOrderByWithRelationInput | libroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for libros.
     */
    cursor?: libroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` libros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` libros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of libros.
     */
    distinct?: LibroScalarFieldEnum | LibroScalarFieldEnum[]
  }

  /**
   * libro findFirstOrThrow
   */
  export type libroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libro
     */
    select?: libroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libro
     */
    omit?: libroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: libroInclude<ExtArgs> | null
    /**
     * Filter, which libro to fetch.
     */
    where?: libroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of libros to fetch.
     */
    orderBy?: libroOrderByWithRelationInput | libroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for libros.
     */
    cursor?: libroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` libros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` libros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of libros.
     */
    distinct?: LibroScalarFieldEnum | LibroScalarFieldEnum[]
  }

  /**
   * libro findMany
   */
  export type libroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libro
     */
    select?: libroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libro
     */
    omit?: libroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: libroInclude<ExtArgs> | null
    /**
     * Filter, which libros to fetch.
     */
    where?: libroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of libros to fetch.
     */
    orderBy?: libroOrderByWithRelationInput | libroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing libros.
     */
    cursor?: libroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` libros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` libros.
     */
    skip?: number
    distinct?: LibroScalarFieldEnum | LibroScalarFieldEnum[]
  }

  /**
   * libro create
   */
  export type libroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libro
     */
    select?: libroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libro
     */
    omit?: libroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: libroInclude<ExtArgs> | null
    /**
     * The data needed to create a libro.
     */
    data: XOR<libroCreateInput, libroUncheckedCreateInput>
  }

  /**
   * libro createMany
   */
  export type libroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many libros.
     */
    data: libroCreateManyInput | libroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * libro update
   */
  export type libroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libro
     */
    select?: libroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libro
     */
    omit?: libroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: libroInclude<ExtArgs> | null
    /**
     * The data needed to update a libro.
     */
    data: XOR<libroUpdateInput, libroUncheckedUpdateInput>
    /**
     * Choose, which libro to update.
     */
    where: libroWhereUniqueInput
  }

  /**
   * libro updateMany
   */
  export type libroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update libros.
     */
    data: XOR<libroUpdateManyMutationInput, libroUncheckedUpdateManyInput>
    /**
     * Filter which libros to update
     */
    where?: libroWhereInput
    /**
     * Limit how many libros to update.
     */
    limit?: number
  }

  /**
   * libro upsert
   */
  export type libroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libro
     */
    select?: libroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libro
     */
    omit?: libroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: libroInclude<ExtArgs> | null
    /**
     * The filter to search for the libro to update in case it exists.
     */
    where: libroWhereUniqueInput
    /**
     * In case the libro found by the `where` argument doesn't exist, create a new libro with this data.
     */
    create: XOR<libroCreateInput, libroUncheckedCreateInput>
    /**
     * In case the libro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<libroUpdateInput, libroUncheckedUpdateInput>
  }

  /**
   * libro delete
   */
  export type libroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libro
     */
    select?: libroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libro
     */
    omit?: libroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: libroInclude<ExtArgs> | null
    /**
     * Filter which libro to delete.
     */
    where: libroWhereUniqueInput
  }

  /**
   * libro deleteMany
   */
  export type libroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which libros to delete
     */
    where?: libroWhereInput
    /**
     * Limit how many libros to delete.
     */
    limit?: number
  }

  /**
   * libro.autores
   */
  export type libro$autoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the autor
     */
    omit?: autorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: autorInclude<ExtArgs> | null
    where?: autorWhereInput
    orderBy?: autorOrderByWithRelationInput | autorOrderByWithRelationInput[]
    cursor?: autorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }

  /**
   * libro.sede
   */
  export type libro$sedeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bibliotecas
     */
    select?: bibliotecasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bibliotecas
     */
    omit?: bibliotecasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bibliotecasInclude<ExtArgs> | null
    where?: bibliotecasWhereInput
    orderBy?: bibliotecasOrderByWithRelationInput | bibliotecasOrderByWithRelationInput[]
    cursor?: bibliotecasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BibliotecasScalarFieldEnum | BibliotecasScalarFieldEnum[]
  }

  /**
   * libro without action
   */
  export type libroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libro
     */
    select?: libroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libro
     */
    omit?: libroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: libroInclude<ExtArgs> | null
  }


  /**
   * Model autor
   */

  export type AggregateAutor = {
    _count: AutorCountAggregateOutputType | null
    _avg: AutorAvgAggregateOutputType | null
    _sum: AutorSumAggregateOutputType | null
    _min: AutorMinAggregateOutputType | null
    _max: AutorMaxAggregateOutputType | null
  }

  export type AutorAvgAggregateOutputType = {
    id: number | null
  }

  export type AutorSumAggregateOutputType = {
    id: number | null
  }

  export type AutorMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    nacionalidad: string | null
  }

  export type AutorMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    nacionalidad: string | null
  }

  export type AutorCountAggregateOutputType = {
    id: number
    nombre: number
    nacionalidad: number
    _all: number
  }


  export type AutorAvgAggregateInputType = {
    id?: true
  }

  export type AutorSumAggregateInputType = {
    id?: true
  }

  export type AutorMinAggregateInputType = {
    id?: true
    nombre?: true
    nacionalidad?: true
  }

  export type AutorMaxAggregateInputType = {
    id?: true
    nombre?: true
    nacionalidad?: true
  }

  export type AutorCountAggregateInputType = {
    id?: true
    nombre?: true
    nacionalidad?: true
    _all?: true
  }

  export type AutorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which autor to aggregate.
     */
    where?: autorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of autors to fetch.
     */
    orderBy?: autorOrderByWithRelationInput | autorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: autorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned autors
    **/
    _count?: true | AutorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AutorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AutorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AutorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AutorMaxAggregateInputType
  }

  export type GetAutorAggregateType<T extends AutorAggregateArgs> = {
        [P in keyof T & keyof AggregateAutor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAutor[P]>
      : GetScalarType<T[P], AggregateAutor[P]>
  }




  export type autorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: autorWhereInput
    orderBy?: autorOrderByWithAggregationInput | autorOrderByWithAggregationInput[]
    by: AutorScalarFieldEnum[] | AutorScalarFieldEnum
    having?: autorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AutorCountAggregateInputType | true
    _avg?: AutorAvgAggregateInputType
    _sum?: AutorSumAggregateInputType
    _min?: AutorMinAggregateInputType
    _max?: AutorMaxAggregateInputType
  }

  export type AutorGroupByOutputType = {
    id: number
    nombre: string
    nacionalidad: string
    _count: AutorCountAggregateOutputType | null
    _avg: AutorAvgAggregateOutputType | null
    _sum: AutorSumAggregateOutputType | null
    _min: AutorMinAggregateOutputType | null
    _max: AutorMaxAggregateOutputType | null
  }

  type GetAutorGroupByPayload<T extends autorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AutorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AutorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AutorGroupByOutputType[P]>
            : GetScalarType<T[P], AutorGroupByOutputType[P]>
        }
      >
    >


  export type autorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    nacionalidad?: boolean
    libros?: boolean | autor$librosArgs<ExtArgs>
    _count?: boolean | AutorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["autor"]>



  export type autorSelectScalar = {
    id?: boolean
    nombre?: boolean
    nacionalidad?: boolean
  }

  export type autorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "nacionalidad", ExtArgs["result"]["autor"]>
  export type autorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    libros?: boolean | autor$librosArgs<ExtArgs>
    _count?: boolean | AutorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $autorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "autor"
    objects: {
      libros: Prisma.$libroPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      nacionalidad: string
    }, ExtArgs["result"]["autor"]>
    composites: {}
  }

  type autorGetPayload<S extends boolean | null | undefined | autorDefaultArgs> = $Result.GetResult<Prisma.$autorPayload, S>

  type autorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<autorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AutorCountAggregateInputType | true
    }

  export interface autorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['autor'], meta: { name: 'autor' } }
    /**
     * Find zero or one Autor that matches the filter.
     * @param {autorFindUniqueArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends autorFindUniqueArgs>(args: SelectSubset<T, autorFindUniqueArgs<ExtArgs>>): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Autor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {autorFindUniqueOrThrowArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends autorFindUniqueOrThrowArgs>(args: SelectSubset<T, autorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Autor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {autorFindFirstArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends autorFindFirstArgs>(args?: SelectSubset<T, autorFindFirstArgs<ExtArgs>>): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Autor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {autorFindFirstOrThrowArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends autorFindFirstOrThrowArgs>(args?: SelectSubset<T, autorFindFirstOrThrowArgs<ExtArgs>>): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Autors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {autorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Autors
     * const autors = await prisma.autor.findMany()
     * 
     * // Get first 10 Autors
     * const autors = await prisma.autor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const autorWithIdOnly = await prisma.autor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends autorFindManyArgs>(args?: SelectSubset<T, autorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Autor.
     * @param {autorCreateArgs} args - Arguments to create a Autor.
     * @example
     * // Create one Autor
     * const Autor = await prisma.autor.create({
     *   data: {
     *     // ... data to create a Autor
     *   }
     * })
     * 
     */
    create<T extends autorCreateArgs>(args: SelectSubset<T, autorCreateArgs<ExtArgs>>): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Autors.
     * @param {autorCreateManyArgs} args - Arguments to create many Autors.
     * @example
     * // Create many Autors
     * const autor = await prisma.autor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends autorCreateManyArgs>(args?: SelectSubset<T, autorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Autor.
     * @param {autorDeleteArgs} args - Arguments to delete one Autor.
     * @example
     * // Delete one Autor
     * const Autor = await prisma.autor.delete({
     *   where: {
     *     // ... filter to delete one Autor
     *   }
     * })
     * 
     */
    delete<T extends autorDeleteArgs>(args: SelectSubset<T, autorDeleteArgs<ExtArgs>>): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Autor.
     * @param {autorUpdateArgs} args - Arguments to update one Autor.
     * @example
     * // Update one Autor
     * const autor = await prisma.autor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends autorUpdateArgs>(args: SelectSubset<T, autorUpdateArgs<ExtArgs>>): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Autors.
     * @param {autorDeleteManyArgs} args - Arguments to filter Autors to delete.
     * @example
     * // Delete a few Autors
     * const { count } = await prisma.autor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends autorDeleteManyArgs>(args?: SelectSubset<T, autorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Autors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {autorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Autors
     * const autor = await prisma.autor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends autorUpdateManyArgs>(args: SelectSubset<T, autorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Autor.
     * @param {autorUpsertArgs} args - Arguments to update or create a Autor.
     * @example
     * // Update or create a Autor
     * const autor = await prisma.autor.upsert({
     *   create: {
     *     // ... data to create a Autor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Autor we want to update
     *   }
     * })
     */
    upsert<T extends autorUpsertArgs>(args: SelectSubset<T, autorUpsertArgs<ExtArgs>>): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Autors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {autorCountArgs} args - Arguments to filter Autors to count.
     * @example
     * // Count the number of Autors
     * const count = await prisma.autor.count({
     *   where: {
     *     // ... the filter for the Autors we want to count
     *   }
     * })
    **/
    count<T extends autorCountArgs>(
      args?: Subset<T, autorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AutorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Autor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AutorAggregateArgs>(args: Subset<T, AutorAggregateArgs>): Prisma.PrismaPromise<GetAutorAggregateType<T>>

    /**
     * Group by Autor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {autorGroupByArgs} args - Group by arguments.
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
      T extends autorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: autorGroupByArgs['orderBy'] }
        : { orderBy?: autorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, autorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the autor model
   */
  readonly fields: autorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for autor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__autorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    libros<T extends autor$librosArgs<ExtArgs> = {}>(args?: Subset<T, autor$librosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$libroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the autor model
   */
  interface autorFieldRefs {
    readonly id: FieldRef<"autor", 'Int'>
    readonly nombre: FieldRef<"autor", 'String'>
    readonly nacionalidad: FieldRef<"autor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * autor findUnique
   */
  export type autorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the autor
     */
    omit?: autorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * Filter, which autor to fetch.
     */
    where: autorWhereUniqueInput
  }

  /**
   * autor findUniqueOrThrow
   */
  export type autorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the autor
     */
    omit?: autorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * Filter, which autor to fetch.
     */
    where: autorWhereUniqueInput
  }

  /**
   * autor findFirst
   */
  export type autorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the autor
     */
    omit?: autorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * Filter, which autor to fetch.
     */
    where?: autorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of autors to fetch.
     */
    orderBy?: autorOrderByWithRelationInput | autorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for autors.
     */
    cursor?: autorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of autors.
     */
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }

  /**
   * autor findFirstOrThrow
   */
  export type autorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the autor
     */
    omit?: autorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * Filter, which autor to fetch.
     */
    where?: autorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of autors to fetch.
     */
    orderBy?: autorOrderByWithRelationInput | autorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for autors.
     */
    cursor?: autorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of autors.
     */
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }

  /**
   * autor findMany
   */
  export type autorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the autor
     */
    omit?: autorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * Filter, which autors to fetch.
     */
    where?: autorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of autors to fetch.
     */
    orderBy?: autorOrderByWithRelationInput | autorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing autors.
     */
    cursor?: autorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` autors.
     */
    skip?: number
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }

  /**
   * autor create
   */
  export type autorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the autor
     */
    omit?: autorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * The data needed to create a autor.
     */
    data: XOR<autorCreateInput, autorUncheckedCreateInput>
  }

  /**
   * autor createMany
   */
  export type autorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many autors.
     */
    data: autorCreateManyInput | autorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * autor update
   */
  export type autorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the autor
     */
    omit?: autorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * The data needed to update a autor.
     */
    data: XOR<autorUpdateInput, autorUncheckedUpdateInput>
    /**
     * Choose, which autor to update.
     */
    where: autorWhereUniqueInput
  }

  /**
   * autor updateMany
   */
  export type autorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update autors.
     */
    data: XOR<autorUpdateManyMutationInput, autorUncheckedUpdateManyInput>
    /**
     * Filter which autors to update
     */
    where?: autorWhereInput
    /**
     * Limit how many autors to update.
     */
    limit?: number
  }

  /**
   * autor upsert
   */
  export type autorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the autor
     */
    omit?: autorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * The filter to search for the autor to update in case it exists.
     */
    where: autorWhereUniqueInput
    /**
     * In case the autor found by the `where` argument doesn't exist, create a new autor with this data.
     */
    create: XOR<autorCreateInput, autorUncheckedCreateInput>
    /**
     * In case the autor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<autorUpdateInput, autorUncheckedUpdateInput>
  }

  /**
   * autor delete
   */
  export type autorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the autor
     */
    omit?: autorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * Filter which autor to delete.
     */
    where: autorWhereUniqueInput
  }

  /**
   * autor deleteMany
   */
  export type autorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which autors to delete
     */
    where?: autorWhereInput
    /**
     * Limit how many autors to delete.
     */
    limit?: number
  }

  /**
   * autor.libros
   */
  export type autor$librosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libro
     */
    select?: libroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libro
     */
    omit?: libroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: libroInclude<ExtArgs> | null
    where?: libroWhereInput
    orderBy?: libroOrderByWithRelationInput | libroOrderByWithRelationInput[]
    cursor?: libroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LibroScalarFieldEnum | LibroScalarFieldEnum[]
  }

  /**
   * autor without action
   */
  export type autorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the autor
     */
    omit?: autorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: autorInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    correo: 'correo',
    contraseña: 'contraseña',
    rol: 'rol',
    fecha: 'fecha'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const BibliotecasScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    ubicacion: 'ubicacion'
  };

  export type BibliotecasScalarFieldEnum = (typeof BibliotecasScalarFieldEnum)[keyof typeof BibliotecasScalarFieldEnum]


  export const LibroScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    publicacion: 'publicacion'
  };

  export type LibroScalarFieldEnum = (typeof LibroScalarFieldEnum)[keyof typeof LibroScalarFieldEnum]


  export const AutorScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    nacionalidad: 'nacionalidad'
  };

  export type AutorScalarFieldEnum = (typeof AutorScalarFieldEnum)[keyof typeof AutorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const usuarioOrderByRelevanceFieldEnum: {
    correo: 'correo',
    contraseña: 'contraseña'
  };

  export type usuarioOrderByRelevanceFieldEnum = (typeof usuarioOrderByRelevanceFieldEnum)[keyof typeof usuarioOrderByRelevanceFieldEnum]


  export const bibliotecasOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    ubicacion: 'ubicacion'
  };

  export type bibliotecasOrderByRelevanceFieldEnum = (typeof bibliotecasOrderByRelevanceFieldEnum)[keyof typeof bibliotecasOrderByRelevanceFieldEnum]


  export const libroOrderByRelevanceFieldEnum: {
    titulo: 'titulo'
  };

  export type libroOrderByRelevanceFieldEnum = (typeof libroOrderByRelevanceFieldEnum)[keyof typeof libroOrderByRelevanceFieldEnum]


  export const autorOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    nacionalidad: 'nacionalidad'
  };

  export type autorOrderByRelevanceFieldEnum = (typeof autorOrderByRelevanceFieldEnum)[keyof typeof autorOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'rol'
   */
  export type EnumrolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'rol'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type usuarioWhereInput = {
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    id?: IntFilter<"usuario"> | number
    correo?: StringFilter<"usuario"> | string
    contraseña?: StringFilter<"usuario"> | string
    rol?: EnumrolFilter<"usuario"> | $Enums.rol
    fecha?: DateTimeFilter<"usuario"> | Date | string
  }

  export type usuarioOrderByWithRelationInput = {
    id?: SortOrder
    correo?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
    fecha?: SortOrder
    _relevance?: usuarioOrderByRelevanceInput
  }

  export type usuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    correo?: string
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    contraseña?: StringFilter<"usuario"> | string
    rol?: EnumrolFilter<"usuario"> | $Enums.rol
    fecha?: DateTimeFilter<"usuario"> | Date | string
  }, "id" | "correo">

  export type usuarioOrderByWithAggregationInput = {
    id?: SortOrder
    correo?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
    fecha?: SortOrder
    _count?: usuarioCountOrderByAggregateInput
    _avg?: usuarioAvgOrderByAggregateInput
    _max?: usuarioMaxOrderByAggregateInput
    _min?: usuarioMinOrderByAggregateInput
    _sum?: usuarioSumOrderByAggregateInput
  }

  export type usuarioScalarWhereWithAggregatesInput = {
    AND?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    OR?: usuarioScalarWhereWithAggregatesInput[]
    NOT?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuario"> | number
    correo?: StringWithAggregatesFilter<"usuario"> | string
    contraseña?: StringWithAggregatesFilter<"usuario"> | string
    rol?: EnumrolWithAggregatesFilter<"usuario"> | $Enums.rol
    fecha?: DateTimeWithAggregatesFilter<"usuario"> | Date | string
  }

  export type bibliotecasWhereInput = {
    AND?: bibliotecasWhereInput | bibliotecasWhereInput[]
    OR?: bibliotecasWhereInput[]
    NOT?: bibliotecasWhereInput | bibliotecasWhereInput[]
    id?: IntFilter<"bibliotecas"> | number
    nombre?: StringFilter<"bibliotecas"> | string
    ubicacion?: StringFilter<"bibliotecas"> | string
    libros?: LibroListRelationFilter
  }

  export type bibliotecasOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    ubicacion?: SortOrder
    libros?: libroOrderByRelationAggregateInput
    _relevance?: bibliotecasOrderByRelevanceInput
  }

  export type bibliotecasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: bibliotecasWhereInput | bibliotecasWhereInput[]
    OR?: bibliotecasWhereInput[]
    NOT?: bibliotecasWhereInput | bibliotecasWhereInput[]
    ubicacion?: StringFilter<"bibliotecas"> | string
    libros?: LibroListRelationFilter
  }, "id" | "nombre">

  export type bibliotecasOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    ubicacion?: SortOrder
    _count?: bibliotecasCountOrderByAggregateInput
    _avg?: bibliotecasAvgOrderByAggregateInput
    _max?: bibliotecasMaxOrderByAggregateInput
    _min?: bibliotecasMinOrderByAggregateInput
    _sum?: bibliotecasSumOrderByAggregateInput
  }

  export type bibliotecasScalarWhereWithAggregatesInput = {
    AND?: bibliotecasScalarWhereWithAggregatesInput | bibliotecasScalarWhereWithAggregatesInput[]
    OR?: bibliotecasScalarWhereWithAggregatesInput[]
    NOT?: bibliotecasScalarWhereWithAggregatesInput | bibliotecasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"bibliotecas"> | number
    nombre?: StringWithAggregatesFilter<"bibliotecas"> | string
    ubicacion?: StringWithAggregatesFilter<"bibliotecas"> | string
  }

  export type libroWhereInput = {
    AND?: libroWhereInput | libroWhereInput[]
    OR?: libroWhereInput[]
    NOT?: libroWhereInput | libroWhereInput[]
    id?: IntFilter<"libro"> | number
    titulo?: StringFilter<"libro"> | string
    publicacion?: DateTimeFilter<"libro"> | Date | string
    autores?: AutorListRelationFilter
    sede?: BibliotecasListRelationFilter
  }

  export type libroOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    publicacion?: SortOrder
    autores?: autorOrderByRelationAggregateInput
    sede?: bibliotecasOrderByRelationAggregateInput
    _relevance?: libroOrderByRelevanceInput
  }

  export type libroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    titulo?: string
    AND?: libroWhereInput | libroWhereInput[]
    OR?: libroWhereInput[]
    NOT?: libroWhereInput | libroWhereInput[]
    publicacion?: DateTimeFilter<"libro"> | Date | string
    autores?: AutorListRelationFilter
    sede?: BibliotecasListRelationFilter
  }, "id" | "titulo">

  export type libroOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    publicacion?: SortOrder
    _count?: libroCountOrderByAggregateInput
    _avg?: libroAvgOrderByAggregateInput
    _max?: libroMaxOrderByAggregateInput
    _min?: libroMinOrderByAggregateInput
    _sum?: libroSumOrderByAggregateInput
  }

  export type libroScalarWhereWithAggregatesInput = {
    AND?: libroScalarWhereWithAggregatesInput | libroScalarWhereWithAggregatesInput[]
    OR?: libroScalarWhereWithAggregatesInput[]
    NOT?: libroScalarWhereWithAggregatesInput | libroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"libro"> | number
    titulo?: StringWithAggregatesFilter<"libro"> | string
    publicacion?: DateTimeWithAggregatesFilter<"libro"> | Date | string
  }

  export type autorWhereInput = {
    AND?: autorWhereInput | autorWhereInput[]
    OR?: autorWhereInput[]
    NOT?: autorWhereInput | autorWhereInput[]
    id?: IntFilter<"autor"> | number
    nombre?: StringFilter<"autor"> | string
    nacionalidad?: StringFilter<"autor"> | string
    libros?: LibroListRelationFilter
  }

  export type autorOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    nacionalidad?: SortOrder
    libros?: libroOrderByRelationAggregateInput
    _relevance?: autorOrderByRelevanceInput
  }

  export type autorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: autorWhereInput | autorWhereInput[]
    OR?: autorWhereInput[]
    NOT?: autorWhereInput | autorWhereInput[]
    nacionalidad?: StringFilter<"autor"> | string
    libros?: LibroListRelationFilter
  }, "id" | "nombre">

  export type autorOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    nacionalidad?: SortOrder
    _count?: autorCountOrderByAggregateInput
    _avg?: autorAvgOrderByAggregateInput
    _max?: autorMaxOrderByAggregateInput
    _min?: autorMinOrderByAggregateInput
    _sum?: autorSumOrderByAggregateInput
  }

  export type autorScalarWhereWithAggregatesInput = {
    AND?: autorScalarWhereWithAggregatesInput | autorScalarWhereWithAggregatesInput[]
    OR?: autorScalarWhereWithAggregatesInput[]
    NOT?: autorScalarWhereWithAggregatesInput | autorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"autor"> | number
    nombre?: StringWithAggregatesFilter<"autor"> | string
    nacionalidad?: StringWithAggregatesFilter<"autor"> | string
  }

  export type usuarioCreateInput = {
    correo: string
    contraseña: string
    rol?: $Enums.rol
    fecha?: Date | string
  }

  export type usuarioUncheckedCreateInput = {
    id?: number
    correo: string
    contraseña: string
    rol?: $Enums.rol
    fecha?: Date | string
  }

  export type usuarioUpdateInput = {
    correo?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: EnumrolFieldUpdateOperationsInput | $Enums.rol
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    correo?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: EnumrolFieldUpdateOperationsInput | $Enums.rol
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuarioCreateManyInput = {
    id?: number
    correo: string
    contraseña: string
    rol?: $Enums.rol
    fecha?: Date | string
  }

  export type usuarioUpdateManyMutationInput = {
    correo?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: EnumrolFieldUpdateOperationsInput | $Enums.rol
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    correo?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: EnumrolFieldUpdateOperationsInput | $Enums.rol
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bibliotecasCreateInput = {
    nombre: string
    ubicacion: string
    libros?: libroCreateNestedManyWithoutSedeInput
  }

  export type bibliotecasUncheckedCreateInput = {
    id?: number
    nombre: string
    ubicacion: string
    libros?: libroUncheckedCreateNestedManyWithoutSedeInput
  }

  export type bibliotecasUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ubicacion?: StringFieldUpdateOperationsInput | string
    libros?: libroUpdateManyWithoutSedeNestedInput
  }

  export type bibliotecasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ubicacion?: StringFieldUpdateOperationsInput | string
    libros?: libroUncheckedUpdateManyWithoutSedeNestedInput
  }

  export type bibliotecasCreateManyInput = {
    id?: number
    nombre: string
    ubicacion: string
  }

  export type bibliotecasUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ubicacion?: StringFieldUpdateOperationsInput | string
  }

  export type bibliotecasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ubicacion?: StringFieldUpdateOperationsInput | string
  }

  export type libroCreateInput = {
    titulo: string
    publicacion: Date | string
    autores?: autorCreateNestedManyWithoutLibrosInput
    sede?: bibliotecasCreateNestedManyWithoutLibrosInput
  }

  export type libroUncheckedCreateInput = {
    id?: number
    titulo: string
    publicacion: Date | string
    autores?: autorUncheckedCreateNestedManyWithoutLibrosInput
    sede?: bibliotecasUncheckedCreateNestedManyWithoutLibrosInput
  }

  export type libroUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    publicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    autores?: autorUpdateManyWithoutLibrosNestedInput
    sede?: bibliotecasUpdateManyWithoutLibrosNestedInput
  }

  export type libroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    publicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    autores?: autorUncheckedUpdateManyWithoutLibrosNestedInput
    sede?: bibliotecasUncheckedUpdateManyWithoutLibrosNestedInput
  }

  export type libroCreateManyInput = {
    id?: number
    titulo: string
    publicacion: Date | string
  }

  export type libroUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    publicacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type libroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    publicacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type autorCreateInput = {
    nombre: string
    nacionalidad: string
    libros?: libroCreateNestedManyWithoutAutoresInput
  }

  export type autorUncheckedCreateInput = {
    id?: number
    nombre: string
    nacionalidad: string
    libros?: libroUncheckedCreateNestedManyWithoutAutoresInput
  }

  export type autorUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    nacionalidad?: StringFieldUpdateOperationsInput | string
    libros?: libroUpdateManyWithoutAutoresNestedInput
  }

  export type autorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    nacionalidad?: StringFieldUpdateOperationsInput | string
    libros?: libroUncheckedUpdateManyWithoutAutoresNestedInput
  }

  export type autorCreateManyInput = {
    id?: number
    nombre: string
    nacionalidad: string
  }

  export type autorUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    nacionalidad?: StringFieldUpdateOperationsInput | string
  }

  export type autorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    nacionalidad?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumrolFilter<$PrismaModel = never> = {
    equals?: $Enums.rol | EnumrolFieldRefInput<$PrismaModel>
    in?: $Enums.rol[]
    notIn?: $Enums.rol[]
    not?: NestedEnumrolFilter<$PrismaModel> | $Enums.rol
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type usuarioOrderByRelevanceInput = {
    fields: usuarioOrderByRelevanceFieldEnum | usuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usuarioCountOrderByAggregateInput = {
    id?: SortOrder
    correo?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
    fecha?: SortOrder
  }

  export type usuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    correo?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
    fecha?: SortOrder
  }

  export type usuarioMinOrderByAggregateInput = {
    id?: SortOrder
    correo?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
    fecha?: SortOrder
  }

  export type usuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumrolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.rol | EnumrolFieldRefInput<$PrismaModel>
    in?: $Enums.rol[]
    notIn?: $Enums.rol[]
    not?: NestedEnumrolWithAggregatesFilter<$PrismaModel> | $Enums.rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumrolFilter<$PrismaModel>
    _max?: NestedEnumrolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type LibroListRelationFilter = {
    every?: libroWhereInput
    some?: libroWhereInput
    none?: libroWhereInput
  }

  export type libroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type bibliotecasOrderByRelevanceInput = {
    fields: bibliotecasOrderByRelevanceFieldEnum | bibliotecasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type bibliotecasCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    ubicacion?: SortOrder
  }

  export type bibliotecasAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type bibliotecasMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    ubicacion?: SortOrder
  }

  export type bibliotecasMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    ubicacion?: SortOrder
  }

  export type bibliotecasSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AutorListRelationFilter = {
    every?: autorWhereInput
    some?: autorWhereInput
    none?: autorWhereInput
  }

  export type BibliotecasListRelationFilter = {
    every?: bibliotecasWhereInput
    some?: bibliotecasWhereInput
    none?: bibliotecasWhereInput
  }

  export type autorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type bibliotecasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type libroOrderByRelevanceInput = {
    fields: libroOrderByRelevanceFieldEnum | libroOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type libroCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    publicacion?: SortOrder
  }

  export type libroAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type libroMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    publicacion?: SortOrder
  }

  export type libroMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    publicacion?: SortOrder
  }

  export type libroSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type autorOrderByRelevanceInput = {
    fields: autorOrderByRelevanceFieldEnum | autorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type autorCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    nacionalidad?: SortOrder
  }

  export type autorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type autorMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    nacionalidad?: SortOrder
  }

  export type autorMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    nacionalidad?: SortOrder
  }

  export type autorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumrolFieldUpdateOperationsInput = {
    set?: $Enums.rol
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type libroCreateNestedManyWithoutSedeInput = {
    create?: XOR<libroCreateWithoutSedeInput, libroUncheckedCreateWithoutSedeInput> | libroCreateWithoutSedeInput[] | libroUncheckedCreateWithoutSedeInput[]
    connectOrCreate?: libroCreateOrConnectWithoutSedeInput | libroCreateOrConnectWithoutSedeInput[]
    connect?: libroWhereUniqueInput | libroWhereUniqueInput[]
  }

  export type libroUncheckedCreateNestedManyWithoutSedeInput = {
    create?: XOR<libroCreateWithoutSedeInput, libroUncheckedCreateWithoutSedeInput> | libroCreateWithoutSedeInput[] | libroUncheckedCreateWithoutSedeInput[]
    connectOrCreate?: libroCreateOrConnectWithoutSedeInput | libroCreateOrConnectWithoutSedeInput[]
    connect?: libroWhereUniqueInput | libroWhereUniqueInput[]
  }

  export type libroUpdateManyWithoutSedeNestedInput = {
    create?: XOR<libroCreateWithoutSedeInput, libroUncheckedCreateWithoutSedeInput> | libroCreateWithoutSedeInput[] | libroUncheckedCreateWithoutSedeInput[]
    connectOrCreate?: libroCreateOrConnectWithoutSedeInput | libroCreateOrConnectWithoutSedeInput[]
    upsert?: libroUpsertWithWhereUniqueWithoutSedeInput | libroUpsertWithWhereUniqueWithoutSedeInput[]
    set?: libroWhereUniqueInput | libroWhereUniqueInput[]
    disconnect?: libroWhereUniqueInput | libroWhereUniqueInput[]
    delete?: libroWhereUniqueInput | libroWhereUniqueInput[]
    connect?: libroWhereUniqueInput | libroWhereUniqueInput[]
    update?: libroUpdateWithWhereUniqueWithoutSedeInput | libroUpdateWithWhereUniqueWithoutSedeInput[]
    updateMany?: libroUpdateManyWithWhereWithoutSedeInput | libroUpdateManyWithWhereWithoutSedeInput[]
    deleteMany?: libroScalarWhereInput | libroScalarWhereInput[]
  }

  export type libroUncheckedUpdateManyWithoutSedeNestedInput = {
    create?: XOR<libroCreateWithoutSedeInput, libroUncheckedCreateWithoutSedeInput> | libroCreateWithoutSedeInput[] | libroUncheckedCreateWithoutSedeInput[]
    connectOrCreate?: libroCreateOrConnectWithoutSedeInput | libroCreateOrConnectWithoutSedeInput[]
    upsert?: libroUpsertWithWhereUniqueWithoutSedeInput | libroUpsertWithWhereUniqueWithoutSedeInput[]
    set?: libroWhereUniqueInput | libroWhereUniqueInput[]
    disconnect?: libroWhereUniqueInput | libroWhereUniqueInput[]
    delete?: libroWhereUniqueInput | libroWhereUniqueInput[]
    connect?: libroWhereUniqueInput | libroWhereUniqueInput[]
    update?: libroUpdateWithWhereUniqueWithoutSedeInput | libroUpdateWithWhereUniqueWithoutSedeInput[]
    updateMany?: libroUpdateManyWithWhereWithoutSedeInput | libroUpdateManyWithWhereWithoutSedeInput[]
    deleteMany?: libroScalarWhereInput | libroScalarWhereInput[]
  }

  export type autorCreateNestedManyWithoutLibrosInput = {
    create?: XOR<autorCreateWithoutLibrosInput, autorUncheckedCreateWithoutLibrosInput> | autorCreateWithoutLibrosInput[] | autorUncheckedCreateWithoutLibrosInput[]
    connectOrCreate?: autorCreateOrConnectWithoutLibrosInput | autorCreateOrConnectWithoutLibrosInput[]
    connect?: autorWhereUniqueInput | autorWhereUniqueInput[]
  }

  export type bibliotecasCreateNestedManyWithoutLibrosInput = {
    create?: XOR<bibliotecasCreateWithoutLibrosInput, bibliotecasUncheckedCreateWithoutLibrosInput> | bibliotecasCreateWithoutLibrosInput[] | bibliotecasUncheckedCreateWithoutLibrosInput[]
    connectOrCreate?: bibliotecasCreateOrConnectWithoutLibrosInput | bibliotecasCreateOrConnectWithoutLibrosInput[]
    connect?: bibliotecasWhereUniqueInput | bibliotecasWhereUniqueInput[]
  }

  export type autorUncheckedCreateNestedManyWithoutLibrosInput = {
    create?: XOR<autorCreateWithoutLibrosInput, autorUncheckedCreateWithoutLibrosInput> | autorCreateWithoutLibrosInput[] | autorUncheckedCreateWithoutLibrosInput[]
    connectOrCreate?: autorCreateOrConnectWithoutLibrosInput | autorCreateOrConnectWithoutLibrosInput[]
    connect?: autorWhereUniqueInput | autorWhereUniqueInput[]
  }

  export type bibliotecasUncheckedCreateNestedManyWithoutLibrosInput = {
    create?: XOR<bibliotecasCreateWithoutLibrosInput, bibliotecasUncheckedCreateWithoutLibrosInput> | bibliotecasCreateWithoutLibrosInput[] | bibliotecasUncheckedCreateWithoutLibrosInput[]
    connectOrCreate?: bibliotecasCreateOrConnectWithoutLibrosInput | bibliotecasCreateOrConnectWithoutLibrosInput[]
    connect?: bibliotecasWhereUniqueInput | bibliotecasWhereUniqueInput[]
  }

  export type autorUpdateManyWithoutLibrosNestedInput = {
    create?: XOR<autorCreateWithoutLibrosInput, autorUncheckedCreateWithoutLibrosInput> | autorCreateWithoutLibrosInput[] | autorUncheckedCreateWithoutLibrosInput[]
    connectOrCreate?: autorCreateOrConnectWithoutLibrosInput | autorCreateOrConnectWithoutLibrosInput[]
    upsert?: autorUpsertWithWhereUniqueWithoutLibrosInput | autorUpsertWithWhereUniqueWithoutLibrosInput[]
    set?: autorWhereUniqueInput | autorWhereUniqueInput[]
    disconnect?: autorWhereUniqueInput | autorWhereUniqueInput[]
    delete?: autorWhereUniqueInput | autorWhereUniqueInput[]
    connect?: autorWhereUniqueInput | autorWhereUniqueInput[]
    update?: autorUpdateWithWhereUniqueWithoutLibrosInput | autorUpdateWithWhereUniqueWithoutLibrosInput[]
    updateMany?: autorUpdateManyWithWhereWithoutLibrosInput | autorUpdateManyWithWhereWithoutLibrosInput[]
    deleteMany?: autorScalarWhereInput | autorScalarWhereInput[]
  }

  export type bibliotecasUpdateManyWithoutLibrosNestedInput = {
    create?: XOR<bibliotecasCreateWithoutLibrosInput, bibliotecasUncheckedCreateWithoutLibrosInput> | bibliotecasCreateWithoutLibrosInput[] | bibliotecasUncheckedCreateWithoutLibrosInput[]
    connectOrCreate?: bibliotecasCreateOrConnectWithoutLibrosInput | bibliotecasCreateOrConnectWithoutLibrosInput[]
    upsert?: bibliotecasUpsertWithWhereUniqueWithoutLibrosInput | bibliotecasUpsertWithWhereUniqueWithoutLibrosInput[]
    set?: bibliotecasWhereUniqueInput | bibliotecasWhereUniqueInput[]
    disconnect?: bibliotecasWhereUniqueInput | bibliotecasWhereUniqueInput[]
    delete?: bibliotecasWhereUniqueInput | bibliotecasWhereUniqueInput[]
    connect?: bibliotecasWhereUniqueInput | bibliotecasWhereUniqueInput[]
    update?: bibliotecasUpdateWithWhereUniqueWithoutLibrosInput | bibliotecasUpdateWithWhereUniqueWithoutLibrosInput[]
    updateMany?: bibliotecasUpdateManyWithWhereWithoutLibrosInput | bibliotecasUpdateManyWithWhereWithoutLibrosInput[]
    deleteMany?: bibliotecasScalarWhereInput | bibliotecasScalarWhereInput[]
  }

  export type autorUncheckedUpdateManyWithoutLibrosNestedInput = {
    create?: XOR<autorCreateWithoutLibrosInput, autorUncheckedCreateWithoutLibrosInput> | autorCreateWithoutLibrosInput[] | autorUncheckedCreateWithoutLibrosInput[]
    connectOrCreate?: autorCreateOrConnectWithoutLibrosInput | autorCreateOrConnectWithoutLibrosInput[]
    upsert?: autorUpsertWithWhereUniqueWithoutLibrosInput | autorUpsertWithWhereUniqueWithoutLibrosInput[]
    set?: autorWhereUniqueInput | autorWhereUniqueInput[]
    disconnect?: autorWhereUniqueInput | autorWhereUniqueInput[]
    delete?: autorWhereUniqueInput | autorWhereUniqueInput[]
    connect?: autorWhereUniqueInput | autorWhereUniqueInput[]
    update?: autorUpdateWithWhereUniqueWithoutLibrosInput | autorUpdateWithWhereUniqueWithoutLibrosInput[]
    updateMany?: autorUpdateManyWithWhereWithoutLibrosInput | autorUpdateManyWithWhereWithoutLibrosInput[]
    deleteMany?: autorScalarWhereInput | autorScalarWhereInput[]
  }

  export type bibliotecasUncheckedUpdateManyWithoutLibrosNestedInput = {
    create?: XOR<bibliotecasCreateWithoutLibrosInput, bibliotecasUncheckedCreateWithoutLibrosInput> | bibliotecasCreateWithoutLibrosInput[] | bibliotecasUncheckedCreateWithoutLibrosInput[]
    connectOrCreate?: bibliotecasCreateOrConnectWithoutLibrosInput | bibliotecasCreateOrConnectWithoutLibrosInput[]
    upsert?: bibliotecasUpsertWithWhereUniqueWithoutLibrosInput | bibliotecasUpsertWithWhereUniqueWithoutLibrosInput[]
    set?: bibliotecasWhereUniqueInput | bibliotecasWhereUniqueInput[]
    disconnect?: bibliotecasWhereUniqueInput | bibliotecasWhereUniqueInput[]
    delete?: bibliotecasWhereUniqueInput | bibliotecasWhereUniqueInput[]
    connect?: bibliotecasWhereUniqueInput | bibliotecasWhereUniqueInput[]
    update?: bibliotecasUpdateWithWhereUniqueWithoutLibrosInput | bibliotecasUpdateWithWhereUniqueWithoutLibrosInput[]
    updateMany?: bibliotecasUpdateManyWithWhereWithoutLibrosInput | bibliotecasUpdateManyWithWhereWithoutLibrosInput[]
    deleteMany?: bibliotecasScalarWhereInput | bibliotecasScalarWhereInput[]
  }

  export type libroCreateNestedManyWithoutAutoresInput = {
    create?: XOR<libroCreateWithoutAutoresInput, libroUncheckedCreateWithoutAutoresInput> | libroCreateWithoutAutoresInput[] | libroUncheckedCreateWithoutAutoresInput[]
    connectOrCreate?: libroCreateOrConnectWithoutAutoresInput | libroCreateOrConnectWithoutAutoresInput[]
    connect?: libroWhereUniqueInput | libroWhereUniqueInput[]
  }

  export type libroUncheckedCreateNestedManyWithoutAutoresInput = {
    create?: XOR<libroCreateWithoutAutoresInput, libroUncheckedCreateWithoutAutoresInput> | libroCreateWithoutAutoresInput[] | libroUncheckedCreateWithoutAutoresInput[]
    connectOrCreate?: libroCreateOrConnectWithoutAutoresInput | libroCreateOrConnectWithoutAutoresInput[]
    connect?: libroWhereUniqueInput | libroWhereUniqueInput[]
  }

  export type libroUpdateManyWithoutAutoresNestedInput = {
    create?: XOR<libroCreateWithoutAutoresInput, libroUncheckedCreateWithoutAutoresInput> | libroCreateWithoutAutoresInput[] | libroUncheckedCreateWithoutAutoresInput[]
    connectOrCreate?: libroCreateOrConnectWithoutAutoresInput | libroCreateOrConnectWithoutAutoresInput[]
    upsert?: libroUpsertWithWhereUniqueWithoutAutoresInput | libroUpsertWithWhereUniqueWithoutAutoresInput[]
    set?: libroWhereUniqueInput | libroWhereUniqueInput[]
    disconnect?: libroWhereUniqueInput | libroWhereUniqueInput[]
    delete?: libroWhereUniqueInput | libroWhereUniqueInput[]
    connect?: libroWhereUniqueInput | libroWhereUniqueInput[]
    update?: libroUpdateWithWhereUniqueWithoutAutoresInput | libroUpdateWithWhereUniqueWithoutAutoresInput[]
    updateMany?: libroUpdateManyWithWhereWithoutAutoresInput | libroUpdateManyWithWhereWithoutAutoresInput[]
    deleteMany?: libroScalarWhereInput | libroScalarWhereInput[]
  }

  export type libroUncheckedUpdateManyWithoutAutoresNestedInput = {
    create?: XOR<libroCreateWithoutAutoresInput, libroUncheckedCreateWithoutAutoresInput> | libroCreateWithoutAutoresInput[] | libroUncheckedCreateWithoutAutoresInput[]
    connectOrCreate?: libroCreateOrConnectWithoutAutoresInput | libroCreateOrConnectWithoutAutoresInput[]
    upsert?: libroUpsertWithWhereUniqueWithoutAutoresInput | libroUpsertWithWhereUniqueWithoutAutoresInput[]
    set?: libroWhereUniqueInput | libroWhereUniqueInput[]
    disconnect?: libroWhereUniqueInput | libroWhereUniqueInput[]
    delete?: libroWhereUniqueInput | libroWhereUniqueInput[]
    connect?: libroWhereUniqueInput | libroWhereUniqueInput[]
    update?: libroUpdateWithWhereUniqueWithoutAutoresInput | libroUpdateWithWhereUniqueWithoutAutoresInput[]
    updateMany?: libroUpdateManyWithWhereWithoutAutoresInput | libroUpdateManyWithWhereWithoutAutoresInput[]
    deleteMany?: libroScalarWhereInput | libroScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumrolFilter<$PrismaModel = never> = {
    equals?: $Enums.rol | EnumrolFieldRefInput<$PrismaModel>
    in?: $Enums.rol[]
    notIn?: $Enums.rol[]
    not?: NestedEnumrolFilter<$PrismaModel> | $Enums.rol
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumrolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.rol | EnumrolFieldRefInput<$PrismaModel>
    in?: $Enums.rol[]
    notIn?: $Enums.rol[]
    not?: NestedEnumrolWithAggregatesFilter<$PrismaModel> | $Enums.rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumrolFilter<$PrismaModel>
    _max?: NestedEnumrolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type libroCreateWithoutSedeInput = {
    titulo: string
    publicacion: Date | string
    autores?: autorCreateNestedManyWithoutLibrosInput
  }

  export type libroUncheckedCreateWithoutSedeInput = {
    id?: number
    titulo: string
    publicacion: Date | string
    autores?: autorUncheckedCreateNestedManyWithoutLibrosInput
  }

  export type libroCreateOrConnectWithoutSedeInput = {
    where: libroWhereUniqueInput
    create: XOR<libroCreateWithoutSedeInput, libroUncheckedCreateWithoutSedeInput>
  }

  export type libroUpsertWithWhereUniqueWithoutSedeInput = {
    where: libroWhereUniqueInput
    update: XOR<libroUpdateWithoutSedeInput, libroUncheckedUpdateWithoutSedeInput>
    create: XOR<libroCreateWithoutSedeInput, libroUncheckedCreateWithoutSedeInput>
  }

  export type libroUpdateWithWhereUniqueWithoutSedeInput = {
    where: libroWhereUniqueInput
    data: XOR<libroUpdateWithoutSedeInput, libroUncheckedUpdateWithoutSedeInput>
  }

  export type libroUpdateManyWithWhereWithoutSedeInput = {
    where: libroScalarWhereInput
    data: XOR<libroUpdateManyMutationInput, libroUncheckedUpdateManyWithoutSedeInput>
  }

  export type libroScalarWhereInput = {
    AND?: libroScalarWhereInput | libroScalarWhereInput[]
    OR?: libroScalarWhereInput[]
    NOT?: libroScalarWhereInput | libroScalarWhereInput[]
    id?: IntFilter<"libro"> | number
    titulo?: StringFilter<"libro"> | string
    publicacion?: DateTimeFilter<"libro"> | Date | string
  }

  export type autorCreateWithoutLibrosInput = {
    nombre: string
    nacionalidad: string
  }

  export type autorUncheckedCreateWithoutLibrosInput = {
    id?: number
    nombre: string
    nacionalidad: string
  }

  export type autorCreateOrConnectWithoutLibrosInput = {
    where: autorWhereUniqueInput
    create: XOR<autorCreateWithoutLibrosInput, autorUncheckedCreateWithoutLibrosInput>
  }

  export type bibliotecasCreateWithoutLibrosInput = {
    nombre: string
    ubicacion: string
  }

  export type bibliotecasUncheckedCreateWithoutLibrosInput = {
    id?: number
    nombre: string
    ubicacion: string
  }

  export type bibliotecasCreateOrConnectWithoutLibrosInput = {
    where: bibliotecasWhereUniqueInput
    create: XOR<bibliotecasCreateWithoutLibrosInput, bibliotecasUncheckedCreateWithoutLibrosInput>
  }

  export type autorUpsertWithWhereUniqueWithoutLibrosInput = {
    where: autorWhereUniqueInput
    update: XOR<autorUpdateWithoutLibrosInput, autorUncheckedUpdateWithoutLibrosInput>
    create: XOR<autorCreateWithoutLibrosInput, autorUncheckedCreateWithoutLibrosInput>
  }

  export type autorUpdateWithWhereUniqueWithoutLibrosInput = {
    where: autorWhereUniqueInput
    data: XOR<autorUpdateWithoutLibrosInput, autorUncheckedUpdateWithoutLibrosInput>
  }

  export type autorUpdateManyWithWhereWithoutLibrosInput = {
    where: autorScalarWhereInput
    data: XOR<autorUpdateManyMutationInput, autorUncheckedUpdateManyWithoutLibrosInput>
  }

  export type autorScalarWhereInput = {
    AND?: autorScalarWhereInput | autorScalarWhereInput[]
    OR?: autorScalarWhereInput[]
    NOT?: autorScalarWhereInput | autorScalarWhereInput[]
    id?: IntFilter<"autor"> | number
    nombre?: StringFilter<"autor"> | string
    nacionalidad?: StringFilter<"autor"> | string
  }

  export type bibliotecasUpsertWithWhereUniqueWithoutLibrosInput = {
    where: bibliotecasWhereUniqueInput
    update: XOR<bibliotecasUpdateWithoutLibrosInput, bibliotecasUncheckedUpdateWithoutLibrosInput>
    create: XOR<bibliotecasCreateWithoutLibrosInput, bibliotecasUncheckedCreateWithoutLibrosInput>
  }

  export type bibliotecasUpdateWithWhereUniqueWithoutLibrosInput = {
    where: bibliotecasWhereUniqueInput
    data: XOR<bibliotecasUpdateWithoutLibrosInput, bibliotecasUncheckedUpdateWithoutLibrosInput>
  }

  export type bibliotecasUpdateManyWithWhereWithoutLibrosInput = {
    where: bibliotecasScalarWhereInput
    data: XOR<bibliotecasUpdateManyMutationInput, bibliotecasUncheckedUpdateManyWithoutLibrosInput>
  }

  export type bibliotecasScalarWhereInput = {
    AND?: bibliotecasScalarWhereInput | bibliotecasScalarWhereInput[]
    OR?: bibliotecasScalarWhereInput[]
    NOT?: bibliotecasScalarWhereInput | bibliotecasScalarWhereInput[]
    id?: IntFilter<"bibliotecas"> | number
    nombre?: StringFilter<"bibliotecas"> | string
    ubicacion?: StringFilter<"bibliotecas"> | string
  }

  export type libroCreateWithoutAutoresInput = {
    titulo: string
    publicacion: Date | string
    sede?: bibliotecasCreateNestedManyWithoutLibrosInput
  }

  export type libroUncheckedCreateWithoutAutoresInput = {
    id?: number
    titulo: string
    publicacion: Date | string
    sede?: bibliotecasUncheckedCreateNestedManyWithoutLibrosInput
  }

  export type libroCreateOrConnectWithoutAutoresInput = {
    where: libroWhereUniqueInput
    create: XOR<libroCreateWithoutAutoresInput, libroUncheckedCreateWithoutAutoresInput>
  }

  export type libroUpsertWithWhereUniqueWithoutAutoresInput = {
    where: libroWhereUniqueInput
    update: XOR<libroUpdateWithoutAutoresInput, libroUncheckedUpdateWithoutAutoresInput>
    create: XOR<libroCreateWithoutAutoresInput, libroUncheckedCreateWithoutAutoresInput>
  }

  export type libroUpdateWithWhereUniqueWithoutAutoresInput = {
    where: libroWhereUniqueInput
    data: XOR<libroUpdateWithoutAutoresInput, libroUncheckedUpdateWithoutAutoresInput>
  }

  export type libroUpdateManyWithWhereWithoutAutoresInput = {
    where: libroScalarWhereInput
    data: XOR<libroUpdateManyMutationInput, libroUncheckedUpdateManyWithoutAutoresInput>
  }

  export type libroUpdateWithoutSedeInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    publicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    autores?: autorUpdateManyWithoutLibrosNestedInput
  }

  export type libroUncheckedUpdateWithoutSedeInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    publicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    autores?: autorUncheckedUpdateManyWithoutLibrosNestedInput
  }

  export type libroUncheckedUpdateManyWithoutSedeInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    publicacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type autorUpdateWithoutLibrosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    nacionalidad?: StringFieldUpdateOperationsInput | string
  }

  export type autorUncheckedUpdateWithoutLibrosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    nacionalidad?: StringFieldUpdateOperationsInput | string
  }

  export type autorUncheckedUpdateManyWithoutLibrosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    nacionalidad?: StringFieldUpdateOperationsInput | string
  }

  export type bibliotecasUpdateWithoutLibrosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ubicacion?: StringFieldUpdateOperationsInput | string
  }

  export type bibliotecasUncheckedUpdateWithoutLibrosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ubicacion?: StringFieldUpdateOperationsInput | string
  }

  export type bibliotecasUncheckedUpdateManyWithoutLibrosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ubicacion?: StringFieldUpdateOperationsInput | string
  }

  export type libroUpdateWithoutAutoresInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    publicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    sede?: bibliotecasUpdateManyWithoutLibrosNestedInput
  }

  export type libroUncheckedUpdateWithoutAutoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    publicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    sede?: bibliotecasUncheckedUpdateManyWithoutLibrosNestedInput
  }

  export type libroUncheckedUpdateManyWithoutAutoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    publicacion?: DateTimeFieldUpdateOperationsInput | Date | string
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