CREATE TABLE `service_stations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL COMMENT 'Service Station Name',
  `address` varchar(100) NOT NULL COMMENT 'Service Station Address',
  `contact_no` varchar(30) NOT NULL COMMENT 'Service Station Contact Number',
  `email` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `siteaddress` varchar(255) DEFAULT NULL,
  `logopath` varchar(255) DEFAULT NULL,
  `area_id` varchar(30) NOT NULL,
  `brand_id` varchar(100) NOT NULL,
  `weekly_off_code` varchar(20) NOT NULL,
  `ss_timing` varchar(12) NOT NULL,
  `ss_associate_id` varchar(10) NOT NULL,
  `about_workshop` text,
  `about_team` text,
  `features_list` text,
  `latitude` float DEFAULT NULL,
  `longitude` float DEFAULT NULL,
  `ss_type_code` varchar(20) NOT NULL,
  `pick_drop_km` varchar(50) DEFAULT NULL,
  `facilities` text COMMENT 'Facilities & Services of Service Station ',
  `registertime` datetime NOT NULL,
  `is_verified` tinyint(1) NOT NULL DEFAULT '0',
  `is_approved` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;