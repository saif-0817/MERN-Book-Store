import { MONGOURL, PORT } from "./config.js";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import booksRoute from './routes/booksRoute.js';

const app = express(); // Initialize the app



app.use(express.json()); // Middleware to parse JSON requests
app.use(cors()); // Enable CORS with options

app.use('/books', booksRoute); // Mount the books routes

// Connect to MongoDB and start the server
mongoose.connect(MONGOURL)
  .then(() => {
    console.log('Database is connected!');
    app.listen(PORT, () => {
      console.log(`App is running on port: ${PORT|| 5000}`);
    });
  })
  .catch((error) => console.log('Database is not connected! ' + error));
