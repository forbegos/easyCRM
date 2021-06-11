const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Task, Lead, Client } = require("../models");

// Login -----------------------------------------------------------------------------------------
router.get("/", async (req, res) => {
  try {
    // console.log("homeroute started");

    res.render("login");
  } catch (err) {
    res.status(404).json(err);
  }
});

// Clients -----------------------------------------------------------------------------------------
router.get("/clients", withAuth, async (req, res) => {
  try {
    const clientData = await Client.findAll();
    const clients = clientData.map((entry) => entry.get({ plain: true }));
    res.render("client", {
      clients,
    });
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get("/new-client", withAuth, async (req, res) => {
  try {
    res.render("create-client");
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get("/update-client/:id", withAuth, async (req, res) => {
  try {
    const clientData = await Client.findByPk(req.params.id);
    const client = clientData.get({ plain: true });
    console.log(client);

    res.render("update-client", {
      client,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/delete-client/:id", withAuth, async (req, res) => {
  try {
    const clientData = await Client.findByPk(req.params.id);
    const client = clientData.get({ plain: true });
    res.render("delete-client", {
      client,
    });
  } catch (err) {
    res.status(404).json(err);
  }
});

// Leads -----------------------------------------------------------------------------------------
router.get("/updatelead/:id", withAuth, async (req, res) => {
  try {
    const leadData = await Lead.findByPk(req.params.id, {
      include: [
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

router.get("/createlead", withAuth, async (req, res) => {
  try {
    const clientData = await Client.findAll();
    const userData = await User.findAll();

    const clients = clientData.map((entry) => entry.get({ plain: true }));
    const users = userData.map((entry) => entry.get({ plain: true }));

    console.log(clients);
    console.log(users);

    res.render("createlead", {
      clients,
      users,
    });
  } catch (err) {
    res.status(404).json(err);
  }
});

// Tasks -----------------------------------------------------------------------------------------

router.get("/updatetask/:id", withAuth, async (req, res) => {
  try {
    const newData = await Task.findByPk(req.params.id, {
      include: [
        {
          model: Client,
          attributes: ["name"],
        },
      ],
    });
    const task = newData.get({ plain: true });
    console.log(task);

    res.render("task-update", {
      task,
    });
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get("/createtask", withAuth, async (req, res) => {
  try {
    res.render("create-task");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/deletetask/:id", withAuth, async (req, res) => {
  try {
    const newData = await Task.findByPk(req.params.id, {
      include: [
        {
          model: Client,
          attributes: ["name"],
        },
      ],
    });
    const task = newData.get({ plain: true });

    res.render("delete-task", {
      task,
    });
  } catch (err) {
    res.status(404).json(err);
  }
});

// Dasboard -----------------------------------------------------------------------------------------
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const leadData = await Lead.findAll({
      include: [
        {
          model: Client,
          attributes: ["name"],
        },
      ],
    });
    const taskData = await Task.findAll({
      include: [
        {
          model: Client,
          attributes: ["name"],
        },
      ],
    });

    const leads = leadData.map((entry) => entry.get({ plain: true }));
    const tasks = taskData.map((entry) => entry.get({ plain: true }));

    res.render("dashboard", {
      leads,
      tasks,
    });
  } catch (err) {
    res.status(404).json({ message: "not running leads or tasks" });
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
