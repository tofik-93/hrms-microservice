const express = require("express");
const router= express.Router();
//Attendance check-in route
router.post('/checkin',(req, res)=>{
    res.json({message:"attendance check-in endpoint ready"});
});
router.post('/check-out', (req, res) => {
    res.json({ message: "Attendance check-out endpoint ready" });
});

module.exports= router;