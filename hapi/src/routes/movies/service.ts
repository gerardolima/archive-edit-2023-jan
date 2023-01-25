import type {HapiMongo} from 'hapi-mongodb'
import z from 'zod'

/** Zod schema to validate one object with name and age */
export const Movie = z.object({
  title: z.string(),
  year: z.number().int().min(1890),
})
export type Movie = z.infer<typeof Movie>

// const projection = {title: 1, year: 1}
const projection = Object.fromEntries(
  Object.keys(Movie.shape)
    .map(k => [k, 1])
)

export const getAll = async (mongo: HapiMongo, offset: number, limit: number) => mongo.db
  .collection('movies')
  .find({}, {projection})
  .sort({metacritic:-1})
  .skip(offset)
  .limit(limit)
  .toArray()

export const create = async (mongo: HapiMongo, movie: Movie) => mongo.db
  .collection('movies')
  .insertOne(movie)

export const getOne = async (mongo: HapiMongo, id: string) => mongo.db
  .collection('movies')
  .findOne({_id: new mongo.ObjectID(id)},{projection})
  
export const update = async (mongo: HapiMongo, id: string, movie: Movie) => mongo.db
  .collection('movies')
  .updateOne({_id: new mongo.ObjectID(id)}, {$set: movie})

export const remove = async (mongo: HapiMongo, id: string) => mongo.db
  .collection('movies')
  .deleteOne({_id: new mongo.ObjectID(id)})

export const search = async (mongo: HapiMongo, query: string) => mongo.db
  .collection('movies')
  .aggregate([
    {
      $searchBeta: {
        "search": {
          "query": query,
          "path": "title"
        }
      }
    },
    { $project: { ...projection } },
    { $limit: 10 }
  ]).toArray()

