const router = require("express").Router();
const withAuth = require("../../utils/auth");
const Task = require("../../models/Task");

// Create Task route --------------------------------------------------------
router.post("/", withAuth, async (req, res) => {
  try {
    const newData = await Task.create(req.body);
    console.log(newData);
    res.status(200).json(newData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Update Task route --------------------------------------------------------

router.put("/:id", withAuth, async (req, res) => {
  try {
    const newData = await Task.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    console.log(newData);

    if (!newData) {
      res.status(404).json({ message: "No task found with this id!" });
      return;
    }
    res.status(200).json(newData);
  } catch (err) {
    res.status(404).json(err);
  }
});

// Delete Task route --------------------------------------------------------

router.delete("/task-delete/:id", withAuth, async (req, res) => {
  try {
    const newData = await Task.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!newData) {
      res.status(404).json({ message: "No task was found with this id!" });
      return;
    }

    res.status(200).json(newData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
