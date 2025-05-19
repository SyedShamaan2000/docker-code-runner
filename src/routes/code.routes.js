// src/routes/code.routes.js
const express = require("express");
const router = express.Router();
const { executeCode } = require("../controllers/code.controller");

router.post("/submit", executeCode);

module.exports = router;
