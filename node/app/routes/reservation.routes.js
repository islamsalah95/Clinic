const router = require("express").Router()
const {auth, authAdmin,doctors,nurse} = require("../middleware/auth.middleware")
const reservation = require("../controllers/reservation.controller")

router.post("/appointment",auth, reservation.appointment)
router.get("/getAllOrders",authAdmin, reservation.getAllOrders)
router.get("/getMyAppointmentDR",doctors, reservation.getMyAppointmentDR)
router.get("/getSinglePatient",auth, reservation.getSinglePatient)









module.exports=router

