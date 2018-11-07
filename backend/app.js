
const express = require('express')
const models = require('./models');
const passport = require('./middlewares/auth');
const port = 8000

const app = express()

// app.get(URL, REQUEST_HANDLER);
app.get('/', (req, res) => res.send("FindYourPet"))

models.sequelize.sync().then(() => {
	app.listen(port, () => {
		console.log(`Server is up and running on port ${port}`);
	})
})
