const router = require("express").Router();
const withAuth = require("../utils/auth");
const { User, Task, Lead, Client } = require("../models");

router.get("/", async (req, res) => {
  try {
    // console.log("homeroute started");

    res.render("login");
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get("/dashboard", async (req, res) => {
  console.log("running dashboard get");
  try {
    const leadData = await Lead.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Client,
          attributes: ["name"],
        },
      ],
    });
    const taskData = await Task.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Client,
          attributes: ["name"],
        },
      ],
    });
    const leads = leadData.map((entry) => entry.get({ plain: true }));
    const tasks = taskData.map((entry) => entry.get({ plain: true }));
    console.log(tasks);
    console.log(leads);
    res.render("dashboard", {
      leads,
      tasks,
    });
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get("/register", async (req, res) => {
  try {
    res.render("register");
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
