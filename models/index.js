const Lead = require("./Lead");
const Task = require("./Task");
const Client = require("./Client");

Client.hasMany(Task, {
  foreignKey: "client_id",
  onDelete: "CASCADE",
});

Task.belongsTo(Client, {
  foreignKey: "client_id",
});

Client.hasMany(Lead, {
  foreignKey: "client_id",
  onDelete: "CASCADE",
});

Lead.belongsTo(Client, {
  foreignKey: "client_id",
});

module.exports = { Client, Task, Lead };
