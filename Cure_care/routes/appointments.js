const express = require('express')
const router = express.Router();
const appointmentControllers = require("../controllers/appointmentControllers");

router.post("/register",appointmentControllers.register);
// router.post("/login", appointmentControllers.login);
// router.get("/details", appointmentControllers.getDoctor);
// router.patch("/:id",  appointmentControllers.updateDoctor);

module.exports = router;