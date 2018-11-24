
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

router.post('/', (req, res) => {
	Pet.create({
		userId: req.body.user_id,
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

module.exports = router;
