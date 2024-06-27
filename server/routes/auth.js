const express =require('express')
const authRouter =express.Router();
const authController =require("../controllers/auth")

authRouter.post('/register',authController.registerUser)

module.exports =authRouter;