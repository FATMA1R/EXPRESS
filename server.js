const express = require("express");

const app = express();
app.use(express.json());
app.set("view engine", "ejs");

const userRouter = require("./routes/user");
app.use("/",userRouter);

// app.get("/user" , require("./routes/user"));


app.listen (5000,(err) =>
 err ? console.log(err) : console.log("server is running")
);
