
const express = require('express');
require('dotenv').config();
const cloudinary = require('cloudinary')
const models = require('../models');
const Pet = models.Pet;
const User = models.User;

const router = express.Router();

cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.CLOUD_KEY,
	api_secret: process.env.CLOUD_SECRET,
})

//getting all the pets
router.get('/', (req, res) => {
	Pet.findAll({
		attributes: { exclude: ['createdAt', 'updatedAt'] }
	}).then(pets => {
		res.json(pets);
	}).catch(e => {console.log(e); res.sendStatus(500) })
})

router.get('/user', (req, res) => {
	Pet.findAll({
		where: {
			userId: req.user.id,
		},
		attributes: { exclude: ['createdAt', 'updatedAt'] }
	}).then((pets) => { res.json(pets); })
		.catch(e => res.sendStatus(500))
})

//getting all the pets based on zipcode
router.get('/zipcode/:zipcode', (req, res) => {
	Pet.findAll({
		where: {
			zipcode: req.params.zipcode,
		},
		attributes: { exclude: ['createdAt', 'updatedAt'] }
	}).then((pets) => { res.json(pets); })
		.catch(e => res.sendStatus(500))
})

router.post('/cloud', (req, res) => {
	//console.log(Object.values(Object.values(req.files)[0])[0].path);
	console.log(Object.values(Object.values(req.files))[0].path);
	const path = Object.values(Object.values(req.files))[0].path;
	cloudinary.uploader.upload(path).then(image => res.json([image]))
})

router.post('/', (req, res) => {
	if (req.files) {
		const path = Object.values(Object.values(req.files))[0].path;
		cloudinary.uploader.upload(path).then((image) => {
			Pet.create({
				userId: req.user.id,
				species: req.body.species,
				breed: req.body.breed,
				name: req.body.name,
				dob: req.body.dob,
				description: req.body.description,
				gender: req.body.gender,
				zipcode: req.user.zipcode,
				energy: req.body.energy,
				attachment: req.body.attachment,
				imageUrl: image.url,
			}).then(newPet => { 
				res.json({msg: 'pet posted' })
			})
		}).catch(e => res.sendStatus(500));

	} else {
		res.sendStatus(400);
	}
});

router.get('/owner/:pet_id', (req, res) => {
	Pet.findByPk(req.params.pet_id).then(pet => {
		User.findByPk(pet.userId).then(user => { res.json(user); })
			.catch(e => { res.sendStatus(500) })
	})
})

router.get('/:pet_id', (req, res) => {
	Pet.find({
		where: { id : req.params.pet_id },
		attributes: { exclude: ['createdAt', 'updatedAt'] }
	}).then(pet => {
		res.json(pet);
	}).catch(e => { res.sendStatus(500) })
})

module.exports = router;
