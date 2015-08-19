-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 11, 2015 at 09:49 PM
-- Server version: 5.5.27
-- PHP Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `service_station`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE IF NOT EXISTS `customers` (
  `customer_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(30) DEFAULT NULL,
  `last_name` varchar(30) DEFAULT NULL,
  `gender` tinyint(1) DEFAULT NULL,
  `photo_path` varchar(255) DEFAULT NULL,
  `email` varchar(50) NOT NULL COMMENT 'Email is used as username',
  `mobile` varchar(15) NOT NULL,
  `mobile_alt` varchar(15) DEFAULT NULL,
  `password` varchar(32) DEFAULT NULL,
  `credit_amount` float(3,2) DEFAULT NULL,
  `should_notify_sms` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'For sms subscriptions',
  `should_notify_email` tinyint(1) NOT NULL DEFAULT '1' COMMENT 'For email subscriptions',
  `password_key` varchar(32) DEFAULT NULL COMMENT 'To be used in set/reset password link in email',
  `verify_time` timestamp NULL DEFAULT NULL,
  `block_time` timestamp NULL DEFAULT NULL,
  `delete_time` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`customer_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `customer_bikes`
--

CREATE TABLE IF NOT EXISTS `customer_bikes` (
  `bike_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) NOT NULL,
  `brand_id` tinyint(2) NOT NULL COMMENT 'Bike Company e.g: Bajaj, Honda',
  `model_name` varchar(20) NOT NULL COMMENT 'e.g. Pulsar 150, Activa 110',
  `bike_number` varchar(20) NOT NULL,
  `purchase_year` varchar(4) DEFAULT NULL,
  `photo_path` varchar(255) DEFAULT NULL,
  `puc_date` date DEFAULT NULL,
  `should_remind_puc` tinyint(1) NOT NULL DEFAULT '0',
  `insurance_expiry` date DEFAULT NULL,
  `should_remind_insurance` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`bike_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `service_bookings`
--

CREATE TABLE IF NOT EXISTS `service_bookings` (
  `booking_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) NOT NULL DEFAULT '0',
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `mobile` varchar(15) NOT NULL,
  `mobile_alt` varchar(15) DEFAULT NULL COMMENT 'Alternate Mobile number',
  `address` text NOT NULL,
  `area_id` int(11) NOT NULL,
  `pincode` int(6) NOT NULL,
  `bike_id` int(11) NOT NULL,
  `is_free_service` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'Free service coupon by bike company',
  `customer_notes` varchar(255) NOT NULL,
  `coupon_id` varchar(10) DEFAULT NULL COMMENT 'Coupon code id provided by website',
  `bike_running_km` int(6) DEFAULT NULL COMMENT 'Running of bike at the time of booking',
  `submit_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'The datetime on which booking request is submitted',
  `booking_date` date NOT NULL COMMENT 'The date on which bike needs to be serviced',
  `is_regular_service` tinyint(1) NOT NULL DEFAULT '0',
  `service_rating` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'Rating provided by customer, 0 mean not submitted rating',
  `service_feedback` varchar(255) DEFAULT NULL COMMENT 'Servicing feedback given by Customer',
  `ss_id` int(11) NOT NULL COMMENT 'Service Station id',
  `job_card_number` varchar(10) DEFAULT NULL COMMENT 'To be entered by service station',
  `servicing_by` varchar(50) DEFAULT NULL COMMENT 'To be entered by service station',
  `current_service_status_id` tinyint(1) NOT NULL DEFAULT '0',
  `bill_number` varchar(10) DEFAULT NULL COMMENT 'To be entered by service station',
  `bill_amount` float(10,2) NOT NULL DEFAULT '0.00' COMMENT 'To be entered by service station',
  `bill_path` varchar(255) DEFAULT NULL COMMENT 'Path for storing uploaded bill for this servicing',
  `pending_work` varchar(255) DEFAULT NULL COMMENT 'Pending work from customer suggestions',
  `ss_recommendation` varchar(255) DEFAULT NULL COMMENT 'Recommendations from service station',
  `delivery_date` date DEFAULT NULL COMMENT 'Delivery date given by service station',
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `verify_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT 'Verified by Customer',
  `confirm_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT 'Confirmed by Admin',
  `createdAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`booking_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `service_stations`
--

CREATE TABLE IF NOT EXISTS `service_stations` (
  `ss_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL COMMENT 'Service Station Name',
  `address` varchar(255) NOT NULL COMMENT 'Service Station Address',
  `contact_ph` varchar(15) NOT NULL COMMENT 'Service Station Contact Number',
  `mobile` varchar(15) NOT NULL COMMENT 'Service Station Mobile Number',
  `email` varchar(50) NOT NULL,
  `description` varchar(255) DEFAULT NULL COMMENT 'Brief description used for comparision',
  `website` varchar(50) DEFAULT NULL,
  `logo_path` varchar(100) DEFAULT NULL,
  `area_id` varchar(10) NOT NULL,
  `brand_id` varchar(3) NOT NULL,
  `weekly_off_id` char(1) NOT NULL DEFAULT '0',
  `timing` varchar(12) NOT NULL COMMENT 'Open and close time',
  `about_workshop` text,
  `about_team` text,
  `facilities` text COMMENT 'Facilities & Services of Service Station ',
  `ss_type_id` varchar(1) NOT NULL COMMENT 'Authorized, specialized, all',
  `pick_drop_km` varchar(2) DEFAULT '0',
  `latitude` float DEFAULT NULL,
  `longitude` float DEFAULT NULL,
  `register_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `verify_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `approve_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `createdAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`ss_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

