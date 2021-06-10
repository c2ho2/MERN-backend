const express = require('express');
const path = require('path');
const mongoose = require('./config/db/mongoose')

//Connect Database
const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('API Running'));

//Define Routes
app.use('/users', require('./config/routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));