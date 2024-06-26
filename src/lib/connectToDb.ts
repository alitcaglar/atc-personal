import { MongoClient } from "mongodb";

let client: MongoClient | null = null;
let isConnected = false;

export const connectToDb = async (): Promise<void> => {
  if (isConnected) {
    console.log("log: already connected");
    return;
  }

  try {
    client = await MongoClient.connect(process.env.MONGO_URI as string);
    isConnected = true;
    console.log("log: connected to database");
  } catch (error) {
    console.log("log: error connecting to database");
    throw new Error(error as string);
  }
};

export const closeDbConnection = async (): Promise<void> => {
  if (!isConnected || !client) {
    console.log("log: not connected");
    return;
  }

  try {
    await client.close();
    isConnected = false;
    console.log("log: disconnected from database");
  } catch (error) {
    console.log("log: error closing database connection");
    throw new Error(error as string);
  }
};

// Bağlantıyı başka yerlerde kullanmak isterseniz client'i döndürebilirsiniz:
// export const getClient = (): MongoClient | null => client;

// Bağlantıyı başka yerlerde kullanmak isterseniz client'i döndürebilirsiniz:
// export const getClient = (): MongoClient | null => client;

// import mongoose from "mongoose";

// let connection: any = {};

// export const connectToDb = async (): Promise<void> => {
//   if (connection.isConnected) {
//     console.log("log: already started to connect");
//     return;
//   }
//   try {
//     const db = await mongoose.connect(process.env.MONGO_URI as string);
//     connection.isConnected = db.connections[0].readyState;
//     console.log("log: connected to database");
//   } catch (error) {
//     console.log("log: error connecting to database");
//     throw new Error(error as string);
//   }
// };
