const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Role = require("../../models/Role");
const validateProfileInput = require("../../validation/profile");

router.get("/test", (req, res) => res.json({ msg: "This is the roles route" }));

router.get(
  "/user/:user_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Role.find({ user: req.params.user_id })
      .sort({ date: -1 })
      .then(roles => {
        rolesObject = {};
        roles.forEach(role => {
          rolesObject[role._id] = role;
        });
        res.json(rolesObject);
        // res.json(roles);
      })
      .catch(err => res.status(404).json({ norolesfound: "No roles found" }));
  }
);

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateProfileInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newRole = new Role({
    title: req.body.title,
    description: req.body.description,
    user: req.user.id
  });

  newRole.save()
    .then(role => res.json(role));
});

router.patch("/:role_id", passport.authenticate("jwt", { session: false }), (req, res) => {
  const { errors, isValid } = validateProfileInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Role.findOne({ _id: req.params.role_id })
    .then(role => {
      if (!role) {
        return res.status(404).json({ role: 'This role does not exist' });
      }

      role.title = req.body.title;
      role.description = req.body.description;

      role.save()
        .then(role => res.json(role))
        .catch(err => console.log(err));
    });
});

module.exports = router;