const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Lead extends Model {}

Lead.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isFloat: true,
      },
      defaultValue: 0.0,
    },
    owner: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    client: {
      type: DataTypes.INTEGER,
      references: {
        model: "client",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    timestamps: false,
    modelName: "lead",
  }
);

module.exports = Lead;
