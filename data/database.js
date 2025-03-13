// import { MongoClient } from 'mongodb';

// const clusterAddress = process.env.MONGODB_CLUSTER_ADDRESS;
// const dbUser = process.env.MONGODB_USERNAME;
// const dbPassword = process.env.MONGODB_PASSWORD;
// const dbName = process.env.MONGODB_DB_NAME;

// const uri = `mongodb+srv://${dbUser}:${dbPassword}@${clusterAddress}/?retryWrites=true&w=majority&appName=Cluster1`;
// const client = new MongoClient(uri);

// console.log('Trying to connect to db');

// try {
//   await client.connect();
//   await client.db(dbName).command({ ping: 1 });
//   console.log('Connected successfully to server');
// } catch (error) {
//   console.log('Connection failed.');
//   await client.close();
//   console.log('Connection closed.');
// }

// const database = client.db(dbName);

// export default database;



const { MongoClient, ServerApiVersion } = require('mongodb');

const clusterAddress = process.env.MONGODB_CLUSTER_ADDRESS;
const dbUser = process.env.MONGODB_USERNAME;
const dbPassword = process.env.MONGODB_PASSWORD;
const dbName = process.env.MONGODB_DB_NAME;
const uri = "mongodb+srv://${dbUser}:${dbPassword}@${clusterAddress}/?retryWrites=true&w=majority&appName=myCluster";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
