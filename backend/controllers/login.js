
const express = require('express');
const passport = require('../middlewares/auth');
const router = express.Router();
const User = require('../models').User;

module.exports = {
  registerRouter() {
    const router = express.Router();

    router.post('/', this.login);

    return router;
  },
  index(req, res) {
    res.render('login', { error: req.flash('error') });
  },
  login(req, res) {
    passport.authenticate('local', {
      successRedirect: '/profile',
      failureRedirect: '/login',
      failureFlash: true,
      successFlash: true,
    })(req, res);
  },
};

// router.post('/login', (req, res) => {
// 	passport.authenticate('local', {
// 		successRedirect: '/profile',
// 		failureRedirect: '/auth/login',
// 	})(req, res);
// })

