

const express = require("express");
const cors = require("cors");
const app = express();


const logger = require("./src/middleware/logger.middleware.js");
const userRoutes = require("./src/routes/user.routes.js");

app.use(cors());

app.use(express.json());
app.use(logger);
app.use("/api",userRoutes);





module.exports =app;