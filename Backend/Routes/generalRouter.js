import express from "express";
import generalGET from "../Controllers/generalGET.js";
const generalRouter = express.Router();

// Endpoint to get general information
generalRouter.get("/", generalGET);

export default generalRouter;
