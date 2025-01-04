import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import generalRouter from "./Routes/generalRouter.js";
import { DBConnect } from "./Connection/DBConnect.js";
import contactRouter from "./Routes/contactRouter.js";
//Application configuration
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const MongoDB_URI = process.env.MONGODB_URI;
DBConnect(MongoDB_URI);

// Application Level Middlewares
const corsConfig = {
  origin: [process.env.FRONTEND_URL_TEST],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
};
app.use(express.static("public"));
app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsConfig));

// API Endpoints
app.use("/", generalRouter);
app.use("/contact", contactRouter);
//Listen Logic for Node.js and Express.js
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
