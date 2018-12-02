
const express = require('express');
const models = require('../models');
const Pet = models.Pet;
const User = models.User;

const router = express.Router();

router.get('/', (req, res) => {
	Pet.findAll({
		attributes: { exclude: ['createdAt', 'updatedAt'] }
	}).then(pets => {
		res.json(pets);
	}).catch(e => res.sendStatus(500))
})

router.get('/user/:user', (req, res) => {
	Pet.findAll({
		where: {
			userId: req.params.user,
		},
		attributes: { exclude: ['createdAt', 'updatedAt'] }
	}).then((pets) => { res.json(pets); })
})

router.post('/', (req, res) => {
	Pet.create({
		userId: req.user.id,
		species: req.body.species,
		breed: req.body.breed,
		name: req.body.name,
		dob: req.body.dob,
		description: req.body.description,
		gender: req.body.gender,
	}).then((newPet) => {
	res.json({ msg: "pet posted" });
	}).catch(e => res.sendStatus(500));
});

router.post('/interest', (req, res) => {
	if (req.user) {
		Pet.findById(req.body.petId).then((pet) => {
			req.user.addInterestedPets(pet).then(() => res.json({ msg: "requested interest" }))
				.catch(e => res.sendStatus(500));
		})
	} else { res.sendStatus(404); }
})

module.exports = router;
