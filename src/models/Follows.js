"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Follows extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: "userId", as: "following" });
      this.belongsTo(User, { foreignKey: "following", as: "user" });
    }
  }
  Follows.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
    },
    {
      timestamps: false,
      sequelize,
      tableName: "follows",
      modelName: "Follows",
    }
  );
  return Follows;
};
