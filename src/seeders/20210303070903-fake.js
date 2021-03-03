"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "follows",
      [
        {
          uuid: "ccfb67a0-7fd9-5321-ac5b-579a018e3d4f",
          userId: 1,
          following: 2,
        },
        {
          uuid: "ccfb67a0-7fd9-5321-ac5b-579a018e3d4f",
          userId: 1,
          following: 3,
        },
        {
          uuid: "ccfb67a0-7fd9-5321-ac5b-579a018e3d4f",
          userId: 2,
          following: 3,
        },
        {
          uuid: "ccfb67a0-7fd9-5321-ac5b-579a018e3d4f",
          userId: 3,
          following: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("follows", null, {});
  },
};
