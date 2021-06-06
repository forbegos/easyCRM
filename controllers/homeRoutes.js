const router = require("express").Router();

router.get("/", async (req, res) => {
  console.log("homeroute started");
  res.render("login");
});
module.exports = router;
