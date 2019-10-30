const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

//User model 
const User = require("../../models/User");

// @route POST api/auth
// @desc Authenticate the user
// @access Public
router.post("/", (req, res) => {
    
    const { email, password} = req.body; 

    //Simple Validation
    if(!email || !password) {
        return res.status(400).json({ msg: "All Fields Are Required" });
    }

    // Checking for not existing user
    User.findOne({ email })
        .then(user => {
            if(!user) return res.status(400).json({ msg: "User Doesn't Exist!"});

            // Validate Password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({ msg: "Invalid Password"});

                    jwt.sign(
                        { id: user.id },
                        config.get("jwtSecret"),
                        /*{ expiresIn: 3600},*/
                        (error, token) => {
                            if(error) throw error;
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email
                                }
                            })
                        }
                    )
                })            
        });
});

// @route GET api/auth/user
// @desc Get the user data
// @access Public / Protected
router.get("/user", auth, (req, res) => {
    User.findById(req.user.id)
        .select("-password")
        .then(user => res.json(user));
})

module.exports = router;