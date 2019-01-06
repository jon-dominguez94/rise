const express = require('exporess');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Goal = require('../../models/Goal');
const validateGoalInput = require('../../validation/goals');

router.get('/user/:user_id', (req, res) => {
  Goal.find({user: req.params.user_id})
  .then(goals => res.json(goals))
  .catch(err => res.status(404).json({ nogoalsfound: 'No goals found'}));
});

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

module.exports = router;