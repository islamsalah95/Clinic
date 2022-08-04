const router = require("express").Router()
const {auth, authAdmin,doctors,nurse} = require("../middleware/auth.middleware")
const user = require("../controllers/user.controller")
//const {auth, authAdmin} = require("../middleware/auth.middleware")
router.post("/register", user.register)
 router.post("/login", user.login)
router.post("/activateAcc", user.activate)
router.post("/forget", user.forget)
//router.get("/me", auth, user.me)
// router.get("/all", authAdmin, user.allUsegetAllDoctorsrs)
// router.get("/all/:id", authAdmin, user.singleDetails)
router.put("/updatePass", user.updatePass)
router.get("/logout", auth, user.logout)
router.get("/me", auth, user.me)
/////////////////////////admin//////////////////////////////
//router.post("/adminAddDoctors",authAdmin, user.adminAddDoctors)
router.get("/getAllDoctors", user.getAllDoctors)
router.get("/getAllUsers", user.getAllUsers)

///////////////////////////doctor/////////////////////////////////

router.post("/stripe", user.stripe)












module.exports=router

