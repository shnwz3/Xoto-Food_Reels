const foodPartnerModel = require("../models/foodPartner.model");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const authFoodPartnerMiddleware = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Please login first" });
    }
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_TOKEN);
        const foodpartner = await foodPartnerModel.findById(decodedToken.id);
        if (!foodpartner) {
            return res.status(404).json({ message: "Food partner not found" });
        }
        req.foodpartner = foodpartner;
        next();
    }
    catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
}

const authUserMiddleware = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Please login first" });
    }
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_TOKEN);
        const user = await userModel.findById(decodedToken.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        req.user = user;
        next();
    }
    catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
}
module.exports = { authFoodPartnerMiddleware, authUserMiddleware };