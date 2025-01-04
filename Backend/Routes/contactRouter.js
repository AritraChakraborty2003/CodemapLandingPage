import express from "express";
import contactGET from "../Controllers/contactGET.js";
import contactPOST from "../Controllers/contactPOST.js";
import { verifyUser } from "../Middlewares/verifyUser.js";
const contactRouter = express.Router();

// Endpoint to get and post  contacts
contactRouter.get("/:id", verifyUser, contactGET);
contactRouter.post("/", contactPOST());

export default contactRouter;
