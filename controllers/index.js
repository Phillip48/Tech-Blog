const router = require("express").Router();

// finish the required routes
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');

// routes
// routes
// routes

router.use("/api", apiRoutes);
router.use("/dash", dashboardRoutes);
router.use("/", homeRoutes);
// finish the other needed routes with router.use()

module.exports = router;