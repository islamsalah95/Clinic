require("dotenv").config()
require("./app/db/connection")

const express= require("express")
const cors = require("cors")
const patientHistoryRoutes= require("./app/routes/patientHistory.routes")
const reservationRoutes = require("./app/routes/reservation.routes")
const clinicRoutes = require("./app/routes/clinic.routes")
const userRoutes = require("./app/routes/user.routes")
const stuffNationalId = require("./app/routes/stuffNationalId.routes")

const myHelper = require("./app/helpers/methods")
const app = express()

app.use(cors())
app.use(express.static(__dirname+"/uploads"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/user", userRoutes)
app.use("/api/clinic", clinicRoutes)
app.use("/api/reservation", reservationRoutes)
app.use("/api/patientHistory", patientHistoryRoutes)
app.use("/api/stuffNationalId", stuffNationalId)


app.all("*", (req,res) => {
    myHelper.resGenerator(res, 404, "Invalid url", "not found")
})
app.listen(process.env.PORT, ()=> console.log(`http://localhost:${process.env.PORT}`))


