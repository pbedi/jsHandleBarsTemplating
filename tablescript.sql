DROP TABLE IF EXISTS `tweets`;
CREATE TABLE  `tweets` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tweet_text` varchar(500) NOT NULL,
  `author` varchar(45) NOT NULL,
  `profile_image_url` varchar(100) NOT NULL,
  `id_str` varchar(45) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `age` smallint(5) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;