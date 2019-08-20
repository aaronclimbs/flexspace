-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: arfo8ynm6olw6vpn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com    Database: wxdw3pwe76zijrsc
-- ------------------------------------------------------
-- Server version	5.7.23-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `Rooms`
--

DROP TABLE IF EXISTS `Rooms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Rooms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `roomName` varchar(255) NOT NULL,
  `roomCapacity` varchar(255) NOT NULL,
  `roomURL` varchar(255) NOT NULL,
  `roomType` varchar(255) NOT NULL,
  `address1` varchar(255) DEFAULT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `city` varchar(255) NOT NULL,
  `state_us` varchar(255) NOT NULL,
  `zip` varchar(255) NOT NULL,
  `contactPhone` varchar(255) NOT NULL,
  `hourlyRate` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `Rooms_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Rooms`
--

LOCK TABLES `Rooms` WRITE;
/*!40000 ALTER TABLE `Rooms` DISABLE KEYS */;
INSERT INTO `Rooms` VALUES (1,'Farragut West','30','https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500','large','1234 K St. NW','Apt. 605','Washington','DC','20001','202-555-5555','5.5','0000-00-00 00:00:00','0000-00-00 00:00:00',1),(2,'Arlington Mall','35','https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500','medium','4389 Hillcrest Circle','Number 303','Arlington','VA','22201','202-555-1234','6','0000-00-00 00:00:00','0000-00-00 00:00:00',2),(3,'Office Central','30','https://images.pexels.com/photos/277572/pexels-photo-277572.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500','huddle','1675 Emily Drive','Ring the bell','Kensington','MD','20815','301-555-2345','5.5','0000-00-00 00:00:00','0000-00-00 00:00:00',4),(4,'Super Space','30','https://images.pexels.com/photos/1098982/pexels-photo-1098982.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500','office','3481 Hall Street','bla bla','Washington','DC','20001','202-555-6345','7','0000-00-00 00:00:00','0000-00-00 00:00:00',3),(5,'WeWorkin','30','https://images.pexels.com/photos/1743555/pexels-photo-1743555.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500','huddle','2855 Sardis Station','don\'t knock','Ballston','VA','22201','202-555-5555','4','0000-00-00 00:00:00','0000-00-00 00:00:00',6),(6,'Lets Go Work','30','https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500','office','762 Lake Floyd Circle','Apt. 3B','Washington','DC','20001','202-555-5555','6','0000-00-00 00:00:00','0000-00-00 00:00:00',4),(7,'Pumkin Spice Central','30','https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500','office','667 East Avenue','Just come in','Bethesda','MD','20815','301-555-5555','8','0000-00-00 00:00:00','0000-00-00 00:00:00',3),(8,'Super Workers','30','https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500','huddle','1382 Froe Street','testtest','Alexandria','VA','22201','202-555-5555','5','0000-00-00 00:00:00','0000-00-00 00:00:00',3),(9,'Secret Society East','30','https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500','large','2022 Thompson Street','Apt. 34','Crystal City','VA','22201','202-555-5555','6.5','0000-00-00 00:00:00','0000-00-00 00:00:00',8),(10,'The Cosmo Club','30','https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500','medium','3913 Timberbrook Lane','Apt. 233','Washington','DC','20001','202-555-5555','7.5','0000-00-00 00:00:00','0000-00-00 00:00:00',6),(11,'Marx Cafe','30','https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500','huddle','4486 American Drive','Ring twice','Silver Spring','MD','20815','301-555-5555','8.5','0000-00-00 00:00:00','0000-00-00 00:00:00',5),(12,'Costco HotDog City','30','https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500','office','4774 Hayhurst Lane','Apt. 7','Washington','DC','20001','202-555-5555','4.5','0000-00-00 00:00:00','0000-00-00 00:00:00',5);
/*!40000 ALTER TABLE `Rooms` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-19 21:12:27
