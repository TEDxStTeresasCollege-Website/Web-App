
CREATE DATABASE tedx;


CREATE TABLE `tedx`.`newsletter` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `ph_no` INT NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `tedx`.`reg` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `f_name` varchar(45) NOT NULL,
    `l_name` varchar(45) NOT NULL,
    `addr`   varchar(45) NOT NULL,
    `email`  varchar(45) NOT NULL,
    `ph_no`  INT(12) NOT NULL
);
