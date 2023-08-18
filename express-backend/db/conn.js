const { MongoClient } = require("mongodb");
var dotenv = require("dotenv");
dotenv.config({ path: `.env.local` });

const connectionString = process.env.MONGO_URI || "";

const client = new MongoClient(connectionString);

let _db;

const connectDB = async callback => {
  conn = await client.connect();
  _db = conn.db("testDB");
  console.log("connection established");
  return callback();
};

const getDB = () => _db;

module.exports = {
  connectDB,
  getDB,
};
