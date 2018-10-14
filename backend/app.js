
const express = require('express')
const app = express()
const port = 8000

// app.get(URL, REQUEST_HANDLER);
app.get('/', (req, res) => res.send("FindYourPet"))

app.listen(port)
