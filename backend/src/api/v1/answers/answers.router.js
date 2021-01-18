const router = require("express").Router();

const answersController = require("./answers.controller");

router.get("/", answersController.answers);

module.exports = router;
