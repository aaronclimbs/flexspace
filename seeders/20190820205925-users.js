"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "Testdavid1@email.com",
          password:
            "$2a$10$jC52PwZvcRsX1qpGg43wN.HsFn6l/6fNnNInmYoVvus/ZQ4ErCYr.",
          first: "testDavid1",
          last: "testDavidLast1",
          address: "1234 Main St.",
          address2: "apt. 1234",
          city: "Arlington",
          state: "VA",
          zip: "12345",
          phone: "555-5555",
          secQuestion: "What is your favorite Movie",
          secAnswer: "goodfellas",
          createdAt: "08/17/2019 22:11:28",
          updatedAt: "08/17/2019 22:11:28"
        },
        {
          email: "kevin@kevin.com",
          password:
            "$2a$10$tvMsItPaEzEJshQxk.waCOKYrVxWY8ogNLSxRwXu0GTkYUzpinDWq",
          first: "Kevin",
          last: "Steele",
          address: "123 Any St",
          address2: "Apt 1",
          city: "Washington",
          state: "DC",
          zip: "20009",
          phone: "12025551212",
          secQuestion: "What is your favorite Movie",
          secAnswer: "Avengers",
          createdAt: "08/17/2019 22:23:00",
          updatedAt: "08/17/2019 22:23:00"
        },
        {
          email: "kevin@steele.com",
          password:
            "$2a$10$GNkBWLqCYgBae90ubspwuO/lT2MCkwO8zWHxoZW1LeeEG1irsLl0i",
          first: "Kevin",
          last: "Steele",
          address: "123 Main St",
          address2: "Apt 1",
          city: "Washington",
          state: "DC",
          zip: "20009",
          phone: "2025551212",
          secQuestion: "What is your favorite Movie",
          secAnswer: "Avengers",
          createdAt: "08/18/2019 15:10:28",
          updatedAt: "08/18/2019 15:10:28"
        },
        {
          email: "javierjpagan@gmail.com",
          password:
            "$2a$10$aAUlPF2..3vlYgpY2KCkT.zVG2pxXPUy0UnkTGLjA8LOEJNuZUrBK",
          first: "Javier",
          last: "Pagan",
          address: "3308 Montrose Ave.",
          address2: "",
          city: "Alexandria",
          state: "VA",
          zip: "22305",
          phone: "2029755455",
          secQuestion: "What is your favorite Movie",
          secAnswer: "Inception",
          createdAt: "08/17/2019 22:11:28",
          updatedAt: "08/17/2019 22:11:28"
        },
        {
          email: "test@test.com",
          password:
            "$2a$10$No9yO1Ya2lkF6k7aJ04pDejT6yW.JqIps.nKByBzvxtvVtczj/mwm",
          first: "Test",
          last: "User",
          address: "Test Street",
          address2: "Test 1",
          city: "Washington",
          state: "DC",
          zip: "20009",
          phone: "12025551212",
          secQuestion: "What is your favorite Book",
          secAnswer: "Harry Potter",
          createdAt: "08/18/2019 19:41:29",
          updatedAt: "08/18/2019 19:41:29"
        },
        {
          email: "kevin@test.com",
          password:
            "$2a$10$WlWC5Z9ozsKBNTQlA6dhCucCKQdxYQ2DtWHbLNh4FyuhalFoC5vyi",
          first: "Kevin",
          last: "Test",
          address: "5678 Main St",
          address2: "Apt 666",
          city: "Arlington",
          state: "VA",
          zip: "22209",
          phone: "12025551212",
          secQuestion: "What was yo first pet's Name",
          secAnswer: "Dog",
          createdAt: "08/19/2019 21:37:10",
          updatedAt: "08/19/2019 21:37:10"
        },
        {
          email: "jim@jim.com",
          password:
            "$2a$10$hqIVq3ktOrpTP5Z.VCk26OPyzEOxc1puAzz2nDTV2BzDpEsthZV9u",
          first: "Jim",
          last: "Bob",
          address: "666 Main St",
          address2: "Apt 666",
          city: "Arlington",
          state: "VA",
          zip: "22209",
          phone: "17035551212",
          secQuestion: "What is your favorite Book",
          secAnswer: "Fahrenheit 451",
          createdAt: "08/19/2019 21:42:08",
          updatedAt: "08/19/2019 21:42:08"
        },
        {
          email: "tim@tim.com",
          password:
            "$2a$10$CiJCZcW3KjGysEQhUkjkoedt3ZYNRWc7lvZIHTyJVCaJtCrYV.3wC",
          first: "Tim",
          last: "Test",
          address: "4567 Main",
          address2: "9",
          city: "Washington",
          state: "DC",
          zip: "20009",
          phone: "12025551212",
          secQuestion: "What is your favorite Movie",
          secAnswer: "Avengers",
          createdAt: "08/19/2019 21:49:59",
          updatedAt: "08/19/2019 21:49:59"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
