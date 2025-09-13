import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("mongoDB connected");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default ConnectDB;
