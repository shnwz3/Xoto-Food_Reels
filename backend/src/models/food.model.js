const mongoose = require("mongoose");
const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
    },
    video: {
        type: String,
    },
    foodPartnerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "foodPartner",
        // required: true
    },
    likesCount: {
        type: Number,
        default: 0
    },
    savesCount: {
        type: Number,
        default: 0
    },

}, {
    timestamps: true
})
const foodModel = mongoose.model("foodList", foodSchema);
module.exports = foodModel;