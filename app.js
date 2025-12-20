

const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");


const logger = require("./src/middleware/logger.middleware.js");
const authRoutes = require("./src/routes/auth.router.js");
const userRoutes = require("./src/routes/user.routes.js");
//const authmiddleware = require("./src/middleware/auth.middleware.js");
app.use(cors());

app.use(express.json());

app.use(cookieParser("helloworld"));
app.use(session({secret:"helloworld",
    saveUninitialized:false,
    resave:false,
     cookie:{secure:false,httpOnly:true,maxAge:60*60*1000},
}
));

app.use(logger);

app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);

app.use((err,req,res,next) => {
    res.status(500).json({"something went wrong":err.message});
});


module.exports =app;