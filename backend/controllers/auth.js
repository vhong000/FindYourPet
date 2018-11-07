
const express = require('express');
const router = express.Router();
const User = models.user;

router.post('/login', (req, res) => {
	passport.authenticate('local', {
		successRedirect: '/profile',
		failureRedirect: '/auth/login',
	})(req, res);
})

router.post('/signup', (req, res) => {
	User.create({
		firstName: req.body.firstname,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password,
	})(req, res);
})

router.get('/logout', (req, res) => {
	req.logout();
	res.render('');
})

module.exports = router;
