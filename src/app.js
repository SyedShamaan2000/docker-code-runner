// src/app.js
const express = require("express");
const cors = require("cors");
const codeRoutes = require("./routes/code.routes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/code", codeRoutes);

module.exports = app;
