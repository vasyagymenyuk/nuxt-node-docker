const express = require("express");
const router = express.Router();
const path = require("path");
const mainControllers = require("../controllers/main.js");

// ГЛАВНАЯ СТРАНИЦА
router.get("/", mainControllers.getMain);

module.exports = router;
