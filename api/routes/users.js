const router = require("express").Router();
const bcrypt = require("bcrypt");
let User = require("../models/user.model");

router.post("/login", async(req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(404).json({
            message: "Please fill out all information!"
        })
    }
    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({message:"Missmatch with username or Password"});

        const validate = await bcrypt.compare(password, user.password);
        if (!validate) return res.status(400).json({message:"Missmatch with username or Password"});

        user.password = undefined;

        res.status(200).json({
            user: user
        })
    }
    catch(err) {
        res.status(500).json({message:"Error: " + err});
    }
});

router.post("/register", async(req, res) => {
    try {
        const newUser = await User.create(req.body)
        res.status(200).json({message:"User added!"})
    }
    catch(err) {
        res.status(400).json({message:"Error: " + err})
    }
});

module.exports = router;