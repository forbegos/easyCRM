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

router.get("/clients", withAuth, async (req, res) => {
  try {
    const clientData = await Client.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    const clients = clientData.map((entry) => entry.get({ plain: true }));
    res.render("client", {
      clients,
    });
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get("/updatelead/:id", withAuth, async (req, res) => {
  try {
    const leadData = await Lead.findByPk(req.params.id, {
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
    const lead = leadData.get({ plain: true });
    console.log(lead);

    res.render("updatelead", {
      lead,
    });
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get("/deletelead/:id", withAuth, async (req, res) => {
  try {
    const leadData = await Lead.findByPk(req.params.id, {
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
    const lead = leadData.get({ plain: true });
    console.log(lead);

    res.render("deletelead", {
      lead,
    });
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get("/updatetask", withAuth, async (req, res) => {
  try {
    res.render("updatetask");
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get("/dashboard", withAuth, async (req, res) => {
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
    // console.log(tasks);
    // console.log(leads);
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
