const router = require("express").Router();

const answersRoutes = require("./answers");

router.use("/answers", answersRoutes);

module.exports = router;
