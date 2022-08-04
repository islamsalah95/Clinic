const router = require("express").Router()
const {auth, authAdmin,doctors,nurse} = require("../middleware/auth.middleware")

const clinic = require("../controllers/clinic.controller")

router.post("/adminAddClinic",authAdmin, clinic.adminAddClinic)
router.get("/getAllClinics",authAdmin, clinic.getAllClinics)













module.exports=router

