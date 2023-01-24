/**
 * @file 'hapi-mongodb/index.d.ts'
 * Declares types from module 'hapi-mongodb'
 */

declare module 'hapi-mongodb' {
  import Hapi from '@hapi/hapi'
  import MongoDB from 'mongodb'

  namespace plugin {

    export interface Options {
      url: string
      settings: Record<string, unknown>
      decorate: boolean | string
    }

    export interface HapiMongo {
      lib: typeof MongoDB
      ObjectID: typeof MongoDB.ObjectId
      ObjectId: typeof MongoDB.ObjectId
      db: MongoDB.Db
      client: MongoDB.MongoClient
    }

  }


  const plugin: Hapi.Plugin<plugin.Options>
  export = plugin
}
