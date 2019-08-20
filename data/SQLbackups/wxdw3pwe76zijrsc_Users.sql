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
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first` varchar(255) NOT NULL,
  `last` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `zip` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `secQuestion` varchar(255) NOT NULL,
  `secAnswer` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'a@a.com','$2a$10$Vy.D8AHQ9ne7cIF.Vt..t.UF5/Tryik1O0UkamsbGfCVUR5TOsK9u','','','','','','Choose...','','23908','What is your favorite Book','blah','2019-08-17 21:48:50','2019-08-17 21:48:50'),(2,'Testdavid1@email.com','$2a$10$jC52PwZvcRsX1qpGg43wN.HsFn6l/6fNnNInmYoVvus/ZQ4ErCYr.','testDavid1','testDavidLast1','1234 Main St.','apt. 1234','Arlington','VA','12345','555-5555','What is your favorite Movie','goodfellas','2019-08-17 22:11:28','2019-08-17 22:11:28'),(3,'kevin@kevin.com','$2a$10$tvMsItPaEzEJshQxk.waCOKYrVxWY8ogNLSxRwXu0GTkYUzpinDWq','Kevin','Steele','123 Any St','Apt 1','Washington','DC','20009','12025551212','What is your favorite Movie','Avengers','2019-08-17 22:23:00','2019-08-17 22:23:00'),(4,'kevin@steele.com','$2a$10$GNkBWLqCYgBae90ubspwuO/lT2MCkwO8zWHxoZW1LeeEG1irsLl0i','Kevin','Steele','123 Main St','Apt 1','Washington','DC','20009','2025551212','What is your favorite Movie','Avengers','2019-08-18 15:10:28','2019-08-18 15:10:28'),(5,'javierjpagan@gmail.com','$2a$10$aAUlPF2..3vlYgpY2KCkT.zVG2pxXPUy0UnkTGLjA8LOEJNuZUrBK','Javier','Pagan','3308 Montrose Ave.','','Alexandria','VA','22305','2029755455','What is your favorite Movie','Inception','2019-08-18 15:48:08','2019-08-18 15:48:08'),(6,'test@test.com','$2a$10$No9yO1Ya2lkF6k7aJ04pDejT6yW.JqIps.nKByBzvxtvVtczj/mwm','Test','User','Test Street','Test 1','Washington','DC','20009','12025551212','What is your favorite Book','Harry Potter','2019-08-18 19:41:29','2019-08-18 19:41:29'),(8,'kevin@test.com','$2a$10$WlWC5Z9ozsKBNTQlA6dhCucCKQdxYQ2DtWHbLNh4FyuhalFoC5vyi','Kevin','Test','5678 Main St','Apt 666','Arlington','VA','22209','12025551212','What was yo first pet\'s Name','Dog','2019-08-19 21:37:10','2019-08-19 21:37:10'),(9,'jim@jim.com','$2a$10$hqIVq3ktOrpTP5Z.VCk26OPyzEOxc1puAzz2nDTV2BzDpEsthZV9u','Jim','Bob','666 Main St','Apt 666','Arlington','VA','22209','17035551212','What is your favorite Book','Fahrenheit 451','2019-08-19 21:42:08','2019-08-19 21:42:08'),(10,'tim@tim.com','$2a$10$CiJCZcW3KjGysEQhUkjkoedt3ZYNRWc7lvZIHTyJVCaJtCrYV.3wC','Tim','Test','4567 Main','9','Washington','DC','20009','12025551212','What is your favorite Movie','Avengers','2019-08-19 21:49:59','2019-08-19 21:49:59');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
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

-- Dump completed on 2019-08-19 21:12:28
