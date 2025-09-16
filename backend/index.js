import express from "express";
import { PORT, mongodbURL } from "./config.js";
import mongoose from 'mongoose';
import { Book } from "./models/bookModel.js";
import bookRoutes  from './routes/bookRoutes.js';
import cors from 'cors'; 

const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(express.json());

app.get('/', (request, response) => {
    return response.status(200).send("My name is spr");
});

app.use('/books', bookRoutes);

mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log("✅ App connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("❌ MongoDB connection error:", error.message);
  });
