const express = require("express");
const router = express.Router();
const multer = require("multer");
const { createFood, getAllFoods } = require("../controllers/food.controller");
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




module.exports = router;