// ===============================================================================
// DATA
// Below data will hold all of the reserved rooms.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var roomArray = [
  {
    customerName: "Ahmed",
    customerEmail: "ahmed@example.com",
    customerID: "afhaque89",
    phoneNumber: "000-000-0000",
    roomSize: "100",
    roomType: "conference",
    startDate: "01/10/2019",
    endDate: "01/11/2019",
    address1: "1234 Main Ave",
    address2: "Apt. 304",
    city: "New York",
    state: "NY",
    zip: "12345",
    country: "United States"


  },
  {
    customerName: "david",
    customerEmail: "david@example.com",
    customerID: "afhaque89",
    phoneNumber: "000-000-0000",
    roomSize: "100",
    roomType: "conference",
    startDate: "01/10/2019",
    endDate: "01/11/2019",
    address1: "1234 Main Ave",
    address2: "Apt. 304",
    city: "New York",
    state: "NY",
    zip: "12345",
    country: "United States"
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = roomArray;
