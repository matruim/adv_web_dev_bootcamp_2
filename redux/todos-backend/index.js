const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const todoRoutes = require("./routes/todos");
const app = express();

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());
app.use("/api/todos", todoRoutes);

app.use(function(req,res,next){
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: err
    });
});

app.listen(process.env.PORT,function(){
    console.log(`app is now running on port ${process.env.PORT}`);
});