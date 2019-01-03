const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Entry = require('../../models/Entry');


// router.get("/test", (req, res) => res.json({ msg: "This is the entry test route" }));

router.get('/reports/:report_id', (req, res) => {
    passport.authenticate('jwt', { session: false }),
    Entry.find({ report: req.params.report_id })
        .then(entries => res.json(entries))
        .catch(err =>
            res.status(404).json({ no: 'No entries found from that report' }
            )
        );
});

module.exports = router;