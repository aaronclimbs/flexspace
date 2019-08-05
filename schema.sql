
DROP confercloud_db;
CREATE DATABASE confercloud_db;
USE confercloud_db;

CREATE TABLE users (
  id int AUTO_INCREMENT,
  customerName varchar(30) NOT NULL,
  customerEmail varchar(30) NOT NULL,
  phoneNumber int NOT NULL,
  customerPW varchar(30) NOT NULL,
  favorites int NOT NULL,
  currentRoom varchar(30) NOT NULL,
  roomHistory int NOT NULL,
  roomsRented varchar(30) NOT NULL,
  PRIMARY KEY(id)
);


CREATE TABLE rooms (
  id int AUTO_INCREMENT,
  roomName varchar(30) NOT NULL,
  coolness_points int NOT NULL,
  roomSize int NOT NULL,
  roomType varchar(30) NOT NULL,
  startDate int NOT NULL,
  endDate int NOT NULL,
  address1 varchar(30) NOT NULL,
  address2 varchar(30) NOT NULL,
  city varchar(30) NOT NULL,
  state_us varchar(30) NOT NULL,
  zip varchar(30) NOT NULL,
  country varchar(30) NOT NULL,
  ownerID varchar(30) NOT NULL,
  renterID varchar(30) NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO users (customerName, customerEmail, phoneNumber, customerPW, favorites, currentRoom, roomHistory, roomsRented) VALUES ("David", "me@me.com", 5555555, "password", 12345, 12345), ("Peter", "me@me.com", 5555555, "password", 12345, 12345), ("Jerry", "me@me.com", 5555555, "password", 12345, 12345);

INSERT INTO rooms (roomName, coolness_points, roomSize, roomType, startDate, endDate, address1, address2, city, state_us, zip, country, ownserID, renterID) VALUES ("Conference Room 33A", 32, 100, "conference", "01-08-19", "01-08-20", "12345 Main St.", "Apt.311", "Washington", "DC", 12345, "US", 2, 3),
("Conference Room 33B", 32, 100, "conference", "01-08-19", "01-08-20", "12345 Main St.", "Apt.311", "Washington", "DC", 12345, "US", 2, 0),
("Conference Room 33C", 32, 100, "conference", "01-08-19", "01-08-20", "12345 Main St.", "Apt.311", "Washington", "DC", 12345, "US", 2, 0);


