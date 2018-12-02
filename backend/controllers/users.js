
const express = require('express');
const models = require('../models');
const Pet = models.Pet;
const User = models.User;

const router = express.Router();

router.get('/interested', (req, res) => {
	if (req.user) {
		req.user.getInterestedPets().then(pets => { console.log(req.user.id); res.json(pets); })
			.catch(e => res.sendStatus(500));
	} else { res.sendStatus(404); }
});

module.exports = router;
