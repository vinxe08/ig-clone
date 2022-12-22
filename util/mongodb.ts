import { MongoClient } from "mongodb";

let uri = process.env.MONGODB_URI!;
let dbName = process.env.MONGODB_DB!;

let cachedClient:any;
let cachedDb:any;

if(!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

if(!dbName) {
  throw new Error (
    "Please define the MONGODB_DB environment variable inside .env.local"
  );
}

// Utility function that allow to connect in database & send and fetch request
export async function connectToDatabase() {
  const options:any = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    }

  if(cachedClient && cachedDb) {
    return {client: cachedClient, db: cachedDb}
  }

  const client = await MongoClient.connect(uri, options)

  const db = await client.db(dbName)

  cachedClient = client;
  cachedDb = db;

  return { client, db }

}