SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `senchaArchitect` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci ;
USE `senchaArchitect` ;

-- -----------------------------------------------------
-- Table `senchaArchitect`.`Book`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `senchaArchitect`.`Book` (
  `id` INT NOT NULL ,
  `name` VARCHAR(100) NOT NULL ,
  `author` VARCHAR(200) NOT NULL ,
  `language` VARCHAR(45) NULL ,
  `paperback` VARCHAR(45) NULL ,
  `releaseDate` VARCHAR(45) NULL ,
  `isbn` VARCHAR(20) NOT NULL ,
  `isbn13` VARCHAR(20) NOT NULL ,
  PRIMARY KEY (`id`) )
ENGINE = InnoDB;



SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Populating the Book table
-- -----------------------------------------------------
INSERT INTO `Book` 
(`id`,`name`,`author`,`language`,`paperback`,`releaseDate`,`isbn`,`isbn13`) 
VALUES 
(1,'Mastering Ext JS','Loiane Groner','English','350 pages [ 235mm x 191mm ]','August 2013','1782164006','9781782164005');
