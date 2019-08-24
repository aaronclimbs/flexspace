const Promise = require("bluebird");

const db = require("./models");

const userData = [
  {
    email: "Testdavid1@email.com",
    password: "password",
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
    createdAt: new Date(),
    updatedAt: new Date(),
    isAdmin: false
  },
  {
    email: "kevin@kevin.com",
    password: "password",
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
    createdAt: new Date(),
    updatedAt: new Date(),
    isAdmin: false
  },
  {
    email: "kevin@steele.com",
    password: "password",
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
    createdAt: new Date(),
    updatedAt: new Date(),
    isAdmin: false
  },
  {
    email: "javierjpagan@gmail.com",
    password: "password",
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
    createdAt: new Date(),
    updatedAt: new Date(),
    isAdmin: false
  },
  {
    email: "test@test.com",
    password: "password",
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
    createdAt: new Date(),
    updatedAt: new Date(),
    isAdmin: true
  },
  {
    email: "kevin@test.com",
    password: "password",
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
    createdAt: new Date(),
    updatedAt: new Date(),
    isAdmin: false
  },
  {
    email: "jim@jim.com",
    password: "password",
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
    createdAt: new Date(),
    updatedAt: new Date(),
    isAdmin: false
  },
  {
    email: "tim@tim.com",
    password: "password",
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
    createdAt: new Date(),
    updatedAt: new Date(),
    isAdmin: false
  },
  {
    email: "aaron@test.com",
    password: "password",
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
    createdAt: new Date(),
    updatedAt: new Date(),
    isAdmin: true
  }
];

const roomData = [
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
];

const reservationData = [
  {
    text: "testing",
    start_date: "2019-08-28",
    end_date: "2019-08-28",
    start_time: "09:00",
    duration: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    RoomId: "2",
    UserId: "6"
  },
  {
    text: "test2",
    start_date: "2019-08-28",
    end_date: "2019-08-28",
    start_time: "10:00",
    duration: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    RoomId: "4",
    UserId: "3"
  },
  {
    text: "test3",
    start_date: "2019-08-28",
    end_date: "2019-08-28",
    start_time: "09:00",
    duration: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
    RoomId: "6",
    UserId: "4"
  },
  {
    text: "test4",
    start_date: "2019-08-28",
    end_date: "2019-08-28",
    start_time: "17:00",
    duration: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    RoomId: "5",
    UserId: "6"
  },
  {
    text: "test5",
    start_date: "2019-08-28",
    end_date: "2019-08-28",
    start_time: "09:00",
    duration: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    RoomId: "3",
    UserId: "3"
  },
  {
    text: "test10",
    start_date: "2019-08-30",
    end_date: "2019-08-30",
    start_time: "09:00",
    duration: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    RoomId: "3",
    UserId: "3"
  },
  {
    text: "test11",
    start_date: "2019-08-29",
    end_date: "2019-08-29",
    start_time: "09:00",
    duration: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    RoomId: "3",
    UserId: "3"
  },
  {
    text: "test6",
    start_date: "2019-08-28",
    end_date: "2019-08-28",
    start_time: "13:00",
    duration: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
    RoomId: "3",
    UserId: "6"
  },
  {
    text: "test7",
    start_date: "2019-08-28",
    end_date: "2019-08-28",
    start_time: "10:00",
    duration: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    RoomId: "5",
    UserId: "4"
  },
  {
    text: "test8",
    start_date: "2019-08-28",
    start_time:"17:00",
    end_date: "2019-08-28",
    duration: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    RoomId: "6",
    UserId: "8"
  },
  {
    text: "test10",
    start_date: "2019-08-28",
    start_time: "19:00",
    end_date: "2019-08-28",
    duration: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    RoomId: "3",
    UserId: "4"
  }
];

db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("db has dropped old data");
  })
  .then(() => {
    return Promise.map(userData, user => db.User.create(user));
  })
  .then(createdUsers => {
    console.log(`${createdUsers.length} new users created.`);
  })
  .then(() => {
    return Promise.map(roomData, room => db.Room.create(room));
  })
  .then(createdRooms => {
    console.log(`${createdRooms.length} new rooms created.`);
  })
  .then(() => {
    return Promise.map(reservationData, reservation =>
      db.Reservation.create(reservation)
    );
  })
  .then(createdReservations => {
    console.log(`${createdReservations.length} new reservations created.`);
  })
  .then(() => {
    console.log("Seeded successfully");
  })
  .catch(err => {
    console.error("Error!", err, err.stack);
  })
  .finally(() => {
    db.sequelize.close();
    console.log("Finished!");
    return null;
  });
