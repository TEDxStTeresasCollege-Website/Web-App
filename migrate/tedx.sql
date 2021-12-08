
CREATE DATABASE tedx;


CREATE TABLE `tedx`.`newsletter` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `organisation` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `tedx`.`event_reg` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `f_name` varchar(45) NOT NULL,
    `l_name` varchar(45) NOT NULL,
    `addr`   varchar(45) NOT NULL,
    `email`  varchar(45) NOT NULL,
    `ph_no`  INT NOT NULL
);

CREATE TABLE `tedx`.`pre_event_reg` (
    `id` 		       INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `f_name` 	     varchar(45) NOT NULL,
    `l_name` 	     varchar(45) NOT NULL,
    `ph_no`  	     INT NOT NULL,
    `email`  		   varchar(45) NOT NULL,
    `designation`  varchar(45) NOT NULL,
    `institution`  varchar(45) NOT NULL,
    `aadhar`        varchar(45) NOT NULL, 
);


INSERT INTO `tedx`.`newsletter` (`username`, `email`, `organisation`) VALUES ('Gaurav', 'grbmax@gmail.com', 'Project Aspects');
INSERT INTO `tedx`.`newsletter` (`username`, `email`, `organisation`) VALUES ('Sharun', 'sharun@gmail.com', 'CUSAT');
INSERT INTO `tedx`.`newsletter` (`username`, `email`, `organisation`) VALUES ('Nesrin', 'nesrin@gmail.com', 'TEDxStTeresas');
INSERT INTO `tedx`.`newsletter` (`username`, `email`, `organisation`) VALUES ('Marianne', 'marianne@gmail.com', 'TEDxStTeresas');
INSERT INTO `tedx`.`newsletter` (`username`, `email`, `organisation`) VALUES ('Anna', 'anna@gmail.com', 'TEDxStTeresas');

-- INSERT INTO `tedx`.`pre_event_reg` (`f_name`, `l_name`, `ph_no`, `email`, `designation`, `institution`) VALUES ('Gaurav', 'B', 'Address', 'grbmax@gmail.com', '1234567890');
-- INSERT INTO `tedx`.`pre_event_reg` (`f_name`, `l_name`, `ph_no`, `email`, `designation`, `institution`) VALUES ('Sharun', 'R', 'Address', 'email@gmail.com', '6969696969');
-- INSERT INTO `tedx`.`pre_event_reg` (`f_name`, `l_name`, `ph_no`, `email`, `designation`, `institution`) VALUES ('Nesrin', 'S', 'Address', 'email@gmail.com', '6969696996');
