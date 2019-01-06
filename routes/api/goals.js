const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Goal = require('../../models/Goal');
const validateGoalInput = require('../../validation/goals');

router.get("/test", (req, res) => res.json({ msg: "This is the goals route" }));

router.get(
  "/user/:user_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Goal.find({ user: req.params.user_id })
      .then(goals => res.json(goals))
      .catch(err => res.status(404).json({ nogoalsfound: "No goals found" }));
  }
);

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateGoalInput(req.body);

  if(!isValid){
    return res.status(400).json(errors);
  }

  const newGoal = new Goal({
    title: req.body.title,
    description: req.body.description,
    user: req.user.id
  });

  newGoal.save()
  .then(goal => res.json(goal));
});

router.patch("/:goal_id", passport.authenticate("jwt", { session: false }), (req, res) => {
  const { errors, isValid } = validateGoalInput(req.body);

  if(!isValid){
    return res.status(400).json(errors);
  }

  Goal.findOne({ _id: req.params.goal_id })
  .then(goal => {
    if (!goal) {
      return res.status(404).json({ goal: 'This goal does not exist' });
    }

    goal.title = req.body.title;
    goal.description = req.body.description;

    goal.save()
    .then(goal => res.json(goal))
    .catch(err => console.log(err));
  });
});

module.exports = router;