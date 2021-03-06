const express = require('express');
const app = express();

const path = require('path');
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const users = require('./routes/api/users');
const reports = require("./routes/api/reports");
const entries = require('./routes/api/entries');
const goals = require('./routes/api/goals');
const roles = require('./routes/api/roles');
const projects = require('./routes/api/projects');


const bodyParser = require('body-parser');
const passport = require('passport');
require('./config/passport')(passport);

const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;

mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.log(err));

app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/api/reports", reports);
app.use("/api/entries", entries);
app.use("/api/goals", goals);
app.use("/api/roles", roles);
app.use("/api/projects", projects);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server is running on port ${port}`));

