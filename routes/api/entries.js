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
            res.status(404).json({ noentriesfound: 'No entries found from that report' }
            )
        );
});

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