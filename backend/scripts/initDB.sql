CREATE DATABASE IF NOT EXISTS ezparkn;
USE ezparkn;

CREATE TABLE IF NOT EXISTS users (
  userID int NOT NULL AUTO_INCREMENT, 
  username varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  firstname varchar(255) DEFAULT NULL,
  lastname varchar(255) DEFAULT NULL,
  Primary Key (userID)
);

CREATE TABLE IF NOT EXISTS cars (
  carID int NOT NULL AUTO_INCREMENT,
  userID int NOT NULL,
  make varchar(255) NOT NULL,
  model varchar(255) NOT NULL,
  color varchar(50) NOT NULL,
  size varchar(10) NOT NULL,
  Primary Key (carID),
  Foreign Key (userID) REFERENCES users(userID)
);



CREATE TABLE IF NOT EXISTS userHistory (
  userHistoryID int NOT NULL AUTO_INCREMENT,
  latitude int NOT NULL,
  longitude int NOT NULL,
  carID int NOT NULL,
  timeParked timestamp NOT NULL,
  timeLeave timestamp NOT NULL,
  Primary Key (userHistoryID),
  Foreign Key (carID) REFERENCES cars(carID)
);


