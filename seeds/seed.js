const sequelize = require("../config/connection");
const User = require("../models/User");
const Task = require("../models/Task");
const Client = require("../models/Client");
const Lead = require("../models/Lead");
const Product = require("../models/Product");
const Contact = require("../models/Contact");
// const { User, Task, Client, Lead, Product, Contact } = require("../models");

const userData = require("./users.json");
const taskData = require("./tasks.json");
const clientData = require("./clients.json");
const leadData = require("./leads.json");
const productData = require("./products.json");
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

  await Product.bulkCreate(productData);

  process.exit(0);
};

seedDatabase();
