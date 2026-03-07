const mongoose = require("mongoose");
const saveSchema = new mongoose.Schema({
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

// Prevent a user from saving the same food more than once
saveSchema.index({ user: 1, food: 1 }, { unique: true });
const saveModel = mongoose.model("Save", saveSchema);
module.exports = saveModel;