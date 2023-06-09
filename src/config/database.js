import mongoose from "mongoose";

async function connect_db() {
  try {
   const db = await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connection established:", db.connection.db.databaseName);
  } catch (error) {
    console.error("Error connecting to Mongoose", error);
  }
}

connect_db();
