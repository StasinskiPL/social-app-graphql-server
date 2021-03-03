"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Follows }) {
      // this.hasOne(Follows, { foreignKey: "following", as: "foll" });
      // this.hasMany(Follows, { foreignKey: "userId", as: "followers" });
      this.belongsToMany(Follows, {
        foreignKey: "userId",
        through: Follows,
        as: "following",
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
