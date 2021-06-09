const sequelize = require("../config/connection");
const User = require("../models/User");
const Task = require("../models/Task");
const Client = require("../models/Client");
const Lead = require("../models/Lead");
const Contact = require("../models/Contact");
// const { User, Task, Client, Lead, Product, Contact } = require("../models");

const userData = require("./users.json");
const taskData = require("./tasks.json");
const clientData = require("./clients.json");
const leadData = require("./leads.json");
const contactData = require("./contacts.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Client.bulkCreate(clientData);
  await Contact.bulkCreate(contactData);

  await Task.bulkCreate(taskData);
  await Lead.bulkCreate(leadData);

  process.exit(0);
};

seedDatabase();
