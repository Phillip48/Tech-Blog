// const { route } = require("../../../.Main/controllers/api");
const router = require("express").Router();

// Finish the required pathing for these variables
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

router.use("/user", userRoutes);
router.use("/post", postRoutes);
router.use("/comment", commentRoutes);
// write the rest of the router.use routes

module.exports = router;