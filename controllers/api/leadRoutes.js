const router = require("express").Router();
const withAuth = require("../../utils/auth");
const Lead = require("../../models/Lead");

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const leadData = await Lead.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!leadData) {
      res.status(404).json({ message: "No lead found with this id!" });
      return;
    }

    res.status(200).json(leadData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/update/:id", withAuth, async (req, res) => {
  console.log("start lead update");
  try {
    const leadData = await Lead.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!leadData) {
      res.status(404).json({ message: "No project found with this id!" });
      return;
    }

    res.status(200).json(leadData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/createlead", async (req, res) => {
  try {
    const newLead = await Lead.create(req.body);
    console.log(newLead);
    res.status(200).json(newLead);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
