const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Entry = require('../../models/Entry');


// router.get("/test", (req, res) => res.json({ msg: "This is the entry test route" }));

router.get('/report/:report_id', (req, res) => {
    passport.authenticate('jwt', { session: false }),
    Entry.find({ report: req.params.report_id })
        .then(entries => res.json(entries))
        .catch(err =>
            res.status(404).json({ no: 'No entries found from that report' }
            )
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const newTweet = new Tweet({
            description: req.body.description,
            importance: req.body.importance,
            // report: req.report.id
            // goal: req.goal.id
            // role: req.role.id
            user: req.user.id
        });

        newTweet.save().then(tweet => res.json(tweet));
    }
);

module.exports = router;