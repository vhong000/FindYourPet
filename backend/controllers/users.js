
const express = require('express');
const models = require('../models');
const Pet = models.Pet;
const User = models.User;

const router = express.Router();

router.post('/interested', (req, res) => {
	if (req.user) {
		Pet.findById(req.body.petId).then((pet) => {
			if (pet.userId === req.user.id) {
				res.sendStatus(400);
			} else {
				req.user.addInterestedPets(pet).then(() => res.json({ msg: "requested interest" }))
					.catch(e => res.sendStatus(500));
			}
		})
	} else { res.sendStatus(404); }
})

router.get('/interested', (req, res) => {
	if (req.user) {
		req.user.getInterestedPets().then(pets => { res.json(pets); })
			.catch(e => res.sendStatus(500));
	} else { res.sendStatus(404); }
});

module.exports = router;
