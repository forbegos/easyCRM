const router = require("express").Router();
const withAuth = require("../../utils/auth");
const Client = require("../../models/Client");
// const { json } = require("sequelize/types");

// Create Client route ---------------------------------------------
router.post("/", withAuth, async (req, res) => {
  try {
    const newClient = await Client.create(req.body);
    console.log(newClient);
    res.status(200).json(newClient);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
