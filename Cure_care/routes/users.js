const express = require('express')
const router = express.Router();
const userControllers = require("../controllers/userControllers");

router.post("/register",userControllers.register);
router.post("/login", userControllers.login);


router.get("/details", userControllers.getUser);
router.patch("/:id",  userControllers.updateUser);

module.exports = router;