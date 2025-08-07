import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI || 'throw';
const dbName = process.env.MONGODB_DB_NAME || 'My-Website';

let client: MongoClient;
let db: Db;

export async function connectToDatabase() {
    if (!client) {
        client = new MongoClient(uri);
        await client.connect();
        db = client.db(dbName);
        console.log('Connected to MongoDB');
    }
    return { client, db };
}

export async function closeDatabaseConnection() {
    if (client) {
        await client.close();
        console.log('Disconnected from MongoDB');
    }
}

export { db };
