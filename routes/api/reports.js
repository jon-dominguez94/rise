const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Report = require('../../models/Report');

router.get("/test", (req, res) => res.json({ msg: "This is the reports route" }));

router.get('/', (req, res) => {
  Report.find()
    .sort({ date: -1 })
    .then(reports => res.json(reports))
    .catch(err => res.status(404).json({ noreportsfound: 'No reports found' }));
});

router.get('/:id', (req, res) => {
  Report.findById(req.params.id)
    .then(report => res.json(report))
    .catch(err =>
      res.status(404).json({ noreportfound: 'No report found with that ID' })
    );
});

module.exports = router;