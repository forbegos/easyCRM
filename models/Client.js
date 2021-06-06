const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Client extends Model {}

Client.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlphanumeric: true,
      },
    },
    phone: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      unique: true,
      validate: {
        len: [10],
      },
    },

    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
      },
    },

    website: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "client",
  }
);

module.exports = Client;
