"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          nick: "Dawid",
          uuid: "ccfb67a0-7fd9-4e2e-ac5b-579a018e3d4f",
          createdAt: "2020-11-01T16:30:07.592Z",
          updatedAt: "2020-11-01T16:30:07.592Z",
          following: [2, 3],
        },
        {
          nick: "Lolek",
          uuid: "bbfb67b1-7fd9-4e2e-ac5b-579a018e3d7a",
          createdAt: "2020-11-01T16:30:07.592Z",
          updatedAt: "2020-11-01T16:30:07.592Z",
          following: [1],
        },
        {
          nick: "Kocyk",
          uuid: "cbfb67a0-7fd9-4e2e-ac5b-579a018e3d4f",
          createdAt: "2020-11-01T16:30:07.592Z",
          updatedAt: "2020-11-01T16:30:07.592Z",
          following: [2],
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
