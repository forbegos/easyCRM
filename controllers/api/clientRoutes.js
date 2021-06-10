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

router.put("/:id", withAuth, async (req, res) => {
  try {
    const newData = await Client.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    console.log(newData);

    if (!newData) {
      res.status(404).json({ message: "No client found with this id!" });
      return;
    }
    res.status(200).json(newData);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.delete("/client-delete/:id", withAuth, async (req, res) => {
  try {
    const clientData = await Client.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!clientData) {
      res.status(404).json({ message: "No client was found with this id!" });
      return;
    }

    res.status(200).json(clientData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
