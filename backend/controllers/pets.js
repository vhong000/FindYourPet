
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

router.get('/zipcode/:zipcode', (req, res) => {
	Pet.findAll({
		where: {
			zipcode: req.params.zipcode,
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
		zipcode: req.user.zipcode
	}).then((newPet) => {
	res.json({ msg: "pet posted" });
	}).catch(e => res.sendStatus(500));
});

router.get('/owner/:pet_id', (req, res) => {
	User.find({
		through: User.InterestedPets,
		where: { id: req.params.pet_id },
		attributes: { exclude: ['createdAt', 'updatedAt', 'password_hash'] }
	}).then(user => { res.json(user); })
		.catch(e => { res.sendStatus(500) })
})

module.exports = router;
