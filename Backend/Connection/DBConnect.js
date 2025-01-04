import mongoose from "mongoose";
const DBConnect = async (URL) => {
  // Connection logic here
  try {
    const mongoURI = URL;
    await mongoose.connect(mongoURI);
    console.log("✅ MongoDB connection established successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1); // Exit if the database connection fails
  }
};

export { DBConnect };
