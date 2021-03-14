const express =  require("express");
const router =  express.Router();

//user signup 
// @POST /
router.post('' ,(req,res)=>{
    res.status(200).json({
        msg : "user sign up"
    })
})


module.exports = router;