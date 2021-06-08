const User = require("./User");
const Lead = require("./Lead");
const Task = require("./Task");
const Client = require("./Client");

User.hasMany(Task, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Client.hasMany(Task, {
  foreignKey: "client_id",
  onDelete: "CASCADE",
});

Task.belongsTo(User, {
  foreignKey: "user_id",
});

Task.belongsTo(Client, {
  foreignKey: "client_id",
});

User.hasMany(Lead, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Client.hasMany(Lead, {
  foreignKey: "client_id",
  onDelete: "CASCADE",
});

Client.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Client, {
  foreignKey: "user_id",
});

Lead.belongsTo(User, {
  foreignKey: "user_id",
});

Lead.belongsTo(Client, {
  foreignKey: "client_id",
});

module.exports = { User, Client, Task, Lead };
