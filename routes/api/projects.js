const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

router.get("/test", (req, res) => res.json({ msg: "This is the projects route" }));

module.exports = router;