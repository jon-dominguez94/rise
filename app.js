const express = require('express');
const app = express();

const users = require('./routes/api/users');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;

mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.log(err));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));