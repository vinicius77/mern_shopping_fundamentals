require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//User model
const User = require('../../models/User');

// @route POST api/users
// @desc Register New User
// @access Public
router.post('/', (req, res) => {
	//The destructuring assignment syntax is a JavaScript expression that makes it possible
	//to unpack values from arrays, or properties from objects, into distinct variables.
	const { name, email, password } = req.body;

	//Simple Validation
	if (!name || !email || !password) {
		return res.status(400).json({ msg: 'All Fields Are Required' });
	}

	// Checking for an already existing user
	User.findOne({ email }).then((user) => {
		if (user) return res.status(400).json({ msg: 'User Already Exists!' });

		const newUser = new User({
			name,
			email,
			password,
		});

		// Create salt & Hash
		bcrypt.genSalt(10, (error, salt) => {
			bcrypt.hash(newUser.password, salt, (error, hash) => {
				if (error) throw error;
				newUser.password = hash;
				newUser.save().then((user) => {
					jwt.sign(
						{ id: user.id },
						process.env.JWT,
						/*{ expiresIn: 3600},*/
						(error, token) => {
							if (error) throw error;
							res.json({
								token,
								user: {
									id: user.id,
									name: user.name,
									email: user.email,
								},
							});
						}
					);
				});
			});
		});
	});
});

module.exports = router;
