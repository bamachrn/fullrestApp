CREATE TABLE `ss_customers` (
  `cust_id` int(11) NOT NULL AUTO_INCREMENT,
  `cust_first_name` varchar(50) NOT NULL,
  `cust_last_name` varchar(50) NOT NULL,
  `cust_mobile_no` varchar(10) NOT NULL,
  PRIMARY KEY (`cust_id`)
) ;

INSERT INTO `ss_customers` VALUES (1, 'Pravin','Yadav','9989989898');
