const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_CONNECT_URI}/foodView`);
        console.log("MongoDB connected");
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;
