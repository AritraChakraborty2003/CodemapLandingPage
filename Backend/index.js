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

const corsOptions = {
  origin: [process.env.FRONTEND_URL_TEST], // Allowed domain
  methods: ["GET", "POST", "PATCH", "DELETE"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
};

app.use(cors(corsOptions));

app.use(express.static("public"));
app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Endpoints
app.use("/", generalRouter);
app.use("/contact", contactRouter);
//Listen Logic for Node.js and Express.js
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
