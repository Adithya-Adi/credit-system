import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config();
const app = express();
const PORT = process.env.PORT;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongodb server");
  } catch (err) {
    console.log(err);
  }
};

//middleware
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

//routes
app.get("/", (req, res) => {
  res.send("Welcome to Shri Vaishnavi Fuels");
});



app.listen(PORT, () => {
  connect();
  console.log(`Server started on port ${PORT}`);
});
