const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Entry = require('../../models/Entry');


router.get("/test", (req, res) => res.json({ msg: "This is the entry test route" }));

module.exports = router;