
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
-- Table structure for table `service_bookings`
--
USE Service_Station
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
  `bill_path` varchar(255) COMMENT 'Path for storing uploaded bill for this servicing',
  `pending_work` varchar(255) DEFAULT NULL COMMENT 'Pending work from customer suggestions',
  `ss_recommendation` varchar(255) DEFAULT NULL COMMENT 'Recommendations from service station',
  `delivery_date` date DEFAULT NULL COMMENT 'Delivery date given by service station',
  `updatedAt` timestamp,
  `verify_time` timestamp COMMENT 'Verified by Customer',
  `confirm_time` timestamp COMMENT 'Confirmed by Admin',
  `createdAt` timestamp,
  PRIMARY KEY (`booking_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
