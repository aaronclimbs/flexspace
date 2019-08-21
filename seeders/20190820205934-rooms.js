"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Rooms",
      [
        {
          roomName: "Farragut West",
          roomCapacity: "30",
          roomURL:
            "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          roomType: "large",
          address1: "1234 K St. NW",
          address2: "Apt. 605",
          city: "Washington",
          state_us: "DC",
          zip: "20001",
          contactPhone: "202-555-5555",
          hourlyRate: "5.5",
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: "1"
        },
        {
          roomName: "Arlington Mall",
          roomCapacity: "35",
          roomURL:
            "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          roomType: "medium",
          address2: "4389 Hillcrest Circle",
          address3: "Number 303",
          city: "Arlington",
          state_us: "VA",
          zip: "22201",
          contactPhone: "202-555-1234",
          hourlyRate: "6",
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: "2"
        },
        {
          roomName: "Office Central",
          roomCapacity: "30",
          roomURL:
            "https://images.pexels.com/photos/277572/pexels-photo-277572.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          roomType: "huddle",
          address3: "1675 Emily Drive",
          address4: "Ring the bell",
          city: "Kensington",
          state_us: "MD",
          zip: "20815",
          contactPhone: "301-555-2345",
          hourlyRate: "5.5",
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: "4"
        },
        {
          roomName: "Super Space",
          roomCapacity: "30",
          roomURL:
            "https://images.pexels.com/photos/1098982/pexels-photo-1098982.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          roomType: "office",
          address4: "3481 Hall Street",
          address5: "bla bla",
          city: "Washington",
          state_us: "DC",
          zip: "20001",
          contactPhone: "202-555-6345",
          hourlyRate: "7",
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: "3"
        },
        {
          roomName: "WeWorkin",
          roomCapacity: "30",
          roomURL:
            "https://images.pexels.com/photos/1743555/pexels-photo-1743555.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          roomType: "huddle",
          address5: "2855 Sardis Station",
          address6: "don't knock",
          city: "Ballston",
          state_us: "VA",
          zip: "22201",
          contactPhone: "202-555-5555",
          hourlyRate: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: "6"
        },
        {
          roomName: "Lets Go Work",
          roomCapacity: "30",
          roomURL:
            "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          roomType: "office",
          address6: "762 Lake Floyd Circle",
          address7: "Apt. 3B",
          city: "Washington",
          state_us: "DC",
          zip: "20001",
          contactPhone: "202-555-5555",
          hourlyRate: "6",
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: "4"
        },
        {
          roomName: "Pumkin Spice Central",
          roomCapacity: "30",
          roomURL:
            "https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          roomType: "office",
          address7: "667 East Avenue",
          address8: "Just come in",
          city: "Bethesda",
          state_us: "MD",
          zip: "20815",
          contactPhone: "301-555-5555",
          hourlyRate: "8",
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: "3"
        },
        {
          roomName: "Super Workers",
          roomCapacity: "30",
          roomURL:
            "https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          roomType: "huddle",
          address8: "1382 Froe Street",
          address9: "testtest",
          city: "Alexandria",
          state_us: "VA",
          zip: "22201",
          contactPhone: "202-555-5555",
          hourlyRate: "5",
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: "3"
        },
        {
          roomName: "Secret Society East",
          roomCapacity: "30",
          roomURL:
            "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          roomType: "large",
          address9: "2022 Thompson Street",
          address10: "Apt. 34",
          city: "Crystal City",
          state_us: "VA",
          zip: "22201",
          contactPhone: "202-555-5555",
          hourlyRate: "6.5",
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: "8"
        },
        {
          roomName: "The Cosmo Club",
          roomCapacity: "30",
          roomURL:
            "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          roomType: "medium",
          address10: "3913 Timberbrook Lane",
          address11: "Apt. 233",
          city: "Washington",
          state_us: "DC",
          zip: "20001",
          contactPhone: "202-555-5555",
          hourlyRate: "7.5",
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: "6"
        },
        {
          roomName: "Marx Cafe",
          roomCapacity: "30",
          roomURL:
            "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          roomType: "huddle",
          address11: "4486 American Drive",
          address12: "Ring twice",
          city: "Silver Spring",
          state_us: "MD",
          zip: "20815",
          contactPhone: "301-555-5555",
          hourlyRate: "8.5",
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: "5"
        },
        {
          roomName: "Costco HotDog City",
          roomCapacity: "30",
          roomURL:
            "https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          roomType: "office",
          address12: "4774 Hayhurst Lane",
          address13: "Apt. 7",
          city: "Washington",
          state_us: "DC",
          zip: "20001",
          contactPhone: "202-555-5555",
          hourlyRate: "4.5",
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: "5"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Rooms", null, {});
  }
};
