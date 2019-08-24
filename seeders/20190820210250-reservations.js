"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Reservations",
      [
        {
          text: "testing",
          start_date: "01/08/19 17:00:00",
          end_date: "01/08/19 17:00:00",
          duration: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
          RoomId: "2",
          UserId: "6"
        },
        {
          text: "test2",
          start_date: "01/08/19 17:00:00",
          end_date: "01/08/19 17:00:00",
          duration: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
          RoomId: "4",
          UserId: "3"
        },
        {
          text: "test3",
          start_date: "01/08/19 17:00:00",
          end_date: "01/08/19 17:00:00",
          duration: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
          RoomId: "6",
          UserId: "4"
        },
        {
          text: "test4",
          start_date: "01/08/19 17:00:00",
          end_date: "01/08/19 17:00:00",
          duration: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
          RoomId: "5",
          UserId: "6"
        },
        {
          text: "test5",
          start_date: "01/08/19 17:00:00",
          end_date: "01/08/19 17:00:00",
          duration: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
          RoomId: "3",
          UserId: "3"
        },
        {
          text: "test6",
          start_date: "01/08/19 17:00:00",
          end_date: "01/08/19 17:00:00",
          duration: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
          RoomId: "3",
          UserId: "6"
        },
        {
          text: "test7",
          start_date: "01/08/19 17:00:00",
          end_date: "01/08/19 17:00:00",
          duration: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
          RoomId: "5",
          UserId: "4"
        },
        {
          text: "test8",
          start_date: "01/08/19 17:00:00",
          end_date: "01/08/19 17:00:00",
          duration: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
          RoomId: "6",
          UserId: "8"
        },
        {
          text: "test10",
          start_date: "01/08/19 17:00:00",
          end_date: "01/08/19 17:00:00",
          duration: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
          RoomId: "3",
          UserId: "4"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reservations", null, {});
  }
};
