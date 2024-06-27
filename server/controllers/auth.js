const users = require("../models/users");
const bcrypt = require("bcrypt");


exports.registerUser = async (req, res) => {

    const newUser = req.body;

    try {
        const salt =await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(req.body.password,salt)

        const dbUser = new users({

            email: newUser.email.toLowerCase(),

            username: newUser.username.toLowerCase(),

            password: newUser.password,

        })

         dbUser.save()

        return res.status(201).send({message: "Successfully registered new user"});

    } catch (error) {

        console.error(error.message)

        return res.status(400).send({message: 'Error registering user!'})

    }

}