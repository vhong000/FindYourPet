
const express = require('express');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const models = require('./models');
const passport = require('./middlewares/auth');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const methodOverride = require('method-override');

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(expressSession(({
  secret: 'asdf',
  resave: false,
  saveUninitialized: true,
})));
app.use(passport.initialize());
app.use(passport.session());

app.use(methodOverride('_method'));
app.use(flash());
// app.use(express.static('./public'));

// app.get(URL, REQUEST_HANDLER);
app.get('/', (req, res) => res.send("FindYourPet"))

app.use(require('./controllers/'));

const PORT = process.env.PORT || 8000;

models.sequelize.sync().then(() => {
	app.listen(PORT, () => {
		console.log(`Server is up and running on port ${PORT}`);
	})
})
