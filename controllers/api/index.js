const router = require("express").Router();
const userRoutes = require("./userRoutes");
const leadRoutes = require("./leadRoutes");
// const taskRoutes = require("./taskRoutes");

router.use("/users", userRoutes);
router.use("/leads", leadRoutes);
// router.use("/tasks", taskRoutes);

module.exports = router;
