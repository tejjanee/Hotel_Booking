const express=require("express")
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB=require("./config/dbconfig")

dotenv.config();

const app=express();
const PORT=3000
app.use(express.json());
connectDB()
app.get("/",(req,res)=>{
    res.send("hii")
})





// hotel to db
const hotelDataAddedToDB=require("./routes/dataimport.router")
app.use("/api/hoteldata",hotelDataAddedToDB)
// category to db
const categoryDataAddedToDB=require("./routes/categoryimport.router")
app.use("/api/categorydata",categoryDataAddedToDB)
// hotel data
const  hotelRouter=require( "./routes/hotel.router")
app.use("/api/hotels",hotelRouter)
// categorydata
const categoryRouter=require("./routes/category.router")
app.use("/api/category",categoryRouter)
// singlehotel
const singleHotelRouter=require("./routes/singlehotel.router")
app.use("/api/hotels",singleHotelRouter)
// auth
const authRouter=require("./routes/auth.router")
app.use("/api/auth",authRouter)
// wishlist
const wishlistRouter=require("./routes/wishlist.router")
app.use("/api/wishlist", wishlistRouter);



mongoose.connection.once("open", () => {
    console.log("Connected to DB");
    app.listen(process.env.PORT || PORT, () => {
      console.log("Server is Up and Running");
    });
  });