const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_CONNECT_URI}/foodView`);
        console.log("MongoDB connected");
    }
    catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1); // Exit process on failed DB connection
    }
}

module.exports = connectDB;
