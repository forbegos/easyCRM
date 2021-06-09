const router = require("express").Router();
const userRoutes = require("./userRoutes");
const leadRoutes = require("./leadRoutes");
const clientRoutes = require("./clientRoutes");
// const taskRoutes = require("./taskRoutes");

router.use("/users", userRoutes);
router.use("/leads", leadRoutes);
router.use("/clients", clientRoutes);
// router.use("/tasks", taskRoutes);

module.exports = router;
