DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
  id INT NOT NULL AUTO_INCREMENT,
  burgers_name VARCHAR(255) NOT NULL,
  devoured BOOLEAN NOT NULL,
  `date` TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
);




