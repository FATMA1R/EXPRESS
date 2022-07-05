const express = require("express");
const userRouter = express.Router();

//get user
userRouter.get("/", (req,res) => {
    const date = new Date(); // return date of system
    const hours = date.getHours(); // returns the hour of the day
    const d = date.getDay();  // returns the day 
    // Sunday =0 ; Monday =1; Tuesday =2; Wednesday =3; Thersday= 4; Friday =5; Saturday =6
    if ( hours > 9 && hours < 17  && d > 0 && d < 6)  {
        
        res.render ("opened");  
    }
    else{
        res.render("closed");
    }
})







userRouter.get("/home",(req,res)=>{
    res.render("HomePage");
   });
//
userRouter.get("/services",(req,res)=>{
    res.render("OurServices");
});


userRouter.get("/contact",(req,res)=>{
    res.render("ContactUs");
});

module.exports = userRouter;