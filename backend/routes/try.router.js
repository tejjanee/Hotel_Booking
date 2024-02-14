const express=require("express");
const router=express.Router();
const Hotel=require("../data/hotels");
router.route("/")
.get( (req,res)=>{
res.json(Hotel.data);
   

}
)
module.exports=router;