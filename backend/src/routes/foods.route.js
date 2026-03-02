const express = require("express");
const router = express.Router();
const multer = require("multer");
const { createFood, getAllFoods, getFoodsByPartnerId } = require("../controllers/food.controller");
const { authFoodPartnerMiddleware, authUserMiddleware } = require("../middlewares/auth.middleware");

const upload = multer({ storage: multer.memoryStorage() });

/*
    POST /api/food/  [protected route => foodpartner]
*/
router.post("/", authFoodPartnerMiddleware, upload.single("video"), createFood);

/* 
    GET /api/food/  [public]
*/
router.get("/", getAllFoods);

/*
    GET /api/food/partner/:partnerId [public]
*/
router.get("/partner/:partnerId", getFoodsByPartnerId);




module.exports = router;