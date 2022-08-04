const router = require("express").Router()
const {auth, authAdmin,doctors,nurse} = require("../middleware/auth.middleware")
const stuffNationalId = require("../controllers/stuffNationalId.controller")
router.post("/addNationalId",authAdmin, stuffNationalId.addNationalId)















module.exports=router

