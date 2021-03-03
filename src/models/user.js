"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Follows }) {
      // this.belongsTo(Follows, { foreignKey: "following" });
      this.hasMany(Follows, { foreignKey: "userId", as: "followers" });
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
