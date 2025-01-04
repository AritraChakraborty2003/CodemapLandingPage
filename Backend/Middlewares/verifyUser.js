import dotenv from "dotenv";

dotenv.config();
const verifyUser = (req, res, next) => {
  const apiKey = req.query.apiKey;

  if (apiKey === process.env.API_KEY) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

export { verifyUser };
