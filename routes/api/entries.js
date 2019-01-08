const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Entry = require('../../models/Entry');


router.get(
    "/user/:user_id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Entry.find({ user: req.params.user_id })
            .sort({ date: -1 })
            .then(entries => {
                entriesObject = {};
                entries.forEach(entry => {
                    entriesObject[entry._id] = entry;
                });
                res.json(entriesObject);
                // res.json(goals);
            })
            .catch(err => res.status(404).json({ nogoalsfound: "No entries found" }));
    }
);

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        // debugger
        const newEntry = new Entry({
            description: req.body.description,
            importance: req.body.importance,
            user: req.user.id,
            report: req.body.report,
            goal: req.body.goal,
            role: req.body.role,
            project: req.body.project
        });

        newEntry.save().then(entry => res.json(entry));
    }
);

// router.get('/:id', (req, res) => {
//     Tweet.findById(req.params.id)
//         .then(tweet => res.json(tweet))
//         .catch(err =>
//             res.status(404).json({ noentryfound: 'No entry found with that ID' })
//         );
// });

module.exports = router;