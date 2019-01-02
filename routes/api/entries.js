const express = require("express");
const router = express.Router();

router.get("/entrytest", (req, res) => res.json({ msg: "This is the entries test route" }));

module.exports = router;