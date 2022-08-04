const router = require("express").Router()
const {auth, authAdmin,doctors,nurse} = require("../middleware/auth.middleware")
const patientHistory = require("../controllers/patientHistory.controller")

router.post("/addPatientHistory",nurse, patientHistory.addPatientHistory)
//fetch /getAllOrders to get this 
router.get("/getSinglePatientHistory",doctors, patientHistory.getSinglePatientHistory)












module.exports=router

