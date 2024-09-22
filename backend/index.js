import { MONGOURL, PORT } from "./config.js";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import booksRoute from './routes/booksRoute.js';
import path from "path";  // Import the 'path' module
const app = express(); // Initialize the app



app.use(express.json()); // Middleware to parse JSON requests
app.use(cors()); // Enable CORS with options

// Serve the frontend files from the 'dist' folder
const __dirname = path.resolve(); // Ensures __dirname is available in ES module
app.use(express.static(path.join(__dirname, "frontend/dist")));

// API routes
app.use('/books', booksRoute);

// Serve the frontend's index.html for any other routes (important for client-side routing)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
});

// Connect to MongoDB and start the server
mongoose.connect(MONGOURL)
  .then(() => {
    console.log('Database is connected!');
    app.listen(PORT, () => {
      console.log(`App is running on port: ${PORT|| 5000}`);
    });
  })
  .catch((error) => console.log('Database is not connected! ' + error));
