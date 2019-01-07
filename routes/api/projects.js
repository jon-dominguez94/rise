const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");


const Project = require("../../models/Project");
const validateProfileInput = require("../../validation/profile");

router.get("/test", (req, res) => res.json({ msg: "This is the projects route" }));


router.get(
  "/user/:user_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Project.find({ user: req.params.user_id })
      .sort({ date: -1 })
      .then(projects => {
        projectsObject = {};
        projects.forEach(project => {
          projectsObject[project._id] = project;
        });
        res.json(projectsObject);
        // res.json(projects);
      })
      .catch(err => res.status(404).json({ noprojectsfound: "No projects found" }));
  }
);

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateProfileInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newProject = new Project({
    title: req.body.title,
    description: req.body.description,
    user: req.user.id
  });

  newProject.save()
    .then(project => res.json(project));
});

router.patch("/:project_id", passport.authenticate("jwt", { session: false }), (req, res) => {
  const { errors, isValid } = validateProfileInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Project.findOne({ _id: req.params.project_id })
    .then(project => {
      if (!project) {
        return res.status(404).json({ project: 'This project does not exist' });
      }

      project.title = req.body.title;
      project.description = req.body.description;

      project.save()
        .then(project => res.json(project))
        .catch(err => console.log(err));
    });
});

module.exports = router;