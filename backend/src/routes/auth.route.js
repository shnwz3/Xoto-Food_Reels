const express = require("express");
const router = express.Router();
const { registerUser, loginUser, logoutUser, registerFoodPartner, loginFoodPartner, logoutFoodPartner, getFoodPartnerById } = require("../controllers/auth.controller");
const { optionalAuth } = require("../middlewares/auth.middleware");


// user routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);

// food partner routes
router.post("/food-partner/register", registerFoodPartner);
router.post("/food-partner/login", loginFoodPartner);
router.get("/food-partner/logout", logoutFoodPartner);
router.get("/food-partner/:id", optionalAuth, getFoodPartnerById);

module.exports = router;