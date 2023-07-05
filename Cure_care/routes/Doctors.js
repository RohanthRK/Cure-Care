const express = require('express')
const router = express.Router();
const doctorControllers = require("../controllers/doctorControllers");

router.post("/register",doctorControllers.register);
router.post("/login", doctorControllers.login);


router.get("/details", doctorControllers.getDoctor);
router.patch("/:id",  doctorControllers.updateDoctor);

module.exports = router;