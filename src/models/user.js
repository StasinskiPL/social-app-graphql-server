"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ User, Follows }) {
      User.belongsToMany(User, {
        through: "user_has_followers",
        foreignKey: "followers",
        as: "userFollowers",
      });
      User.belongsToMany(User, {
        through: "user_has_following",
        foreignKey: "following",
        as: "userFollowing",
      });
    }
  }
  User.init(
    {
      nick: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
    },
    {
      sequelize,
      tableName: "users",
      modelName: "User",
    }
  );
  return User;
};
