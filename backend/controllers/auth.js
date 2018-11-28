const express = require('express');
const models = require('../models');
const passport = require('../middlewares/auth');
const User = models.User;

const router = express.Router();

router.get('/error', (req, res) => {
	res.sendStatus(401);
})

router.post('/login', 
	passport.authenticate('local', { failureRedirect: '/auth/error' }),
	(req, res) => {
		res.json({
			id: req.user.id,
			firstName: req.user.firstName,
			lastName: req.user.lastName,
			email: req.user.email,
			address: req.user.address,
			phoneNumber: req.user.phoneNumber
		});
	});
 
router.post('/logout', (req, res) => {
	req.logout();
	res.sendStatus(200);
});

router.post('/register', (req, res) => {
    
	function isEmailUsed(email) {
		return User.count({ where: { email: email }})
		.then(count => {
			if (count !== 0){
				return true;
			}
			return false;
		});
	}

	isEmailUsed(req.body.email).then(isEmailUsed =>{
		if (isEmailUsed) {
			res.json({
				msg: "The email address provided has been used to register an account before"
			});
		} else {
			User.create({
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				email: req.body.email,
				password_hash: req.body.password,
				address: req.body.address,
				phoneNumber: req.body.phoneNumber
			})
			.then((newUser) => {
				res.json({ msg: "user created" });
			})
		}
	}).catch((e) => {
		res.sendStatus(500);
	});

});

module.exports = router;
