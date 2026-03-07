const mongoose = require("mongoose");

const likesSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // User model
        required: true
    },
    food: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "foodList", // foodList model
        required: true
    }

}, {
    timestamps: true
})

// Prevent a user from liking the same food more than once
likesSchema.index({ user: 1, food: 1 }, { unique: true });
const likesModel = mongoose.model("Likes", likesSchema);

module.exports = likesModel;
