-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 24, 2021 at 01:41 PM
-- Server version: 5.6.51-cll-lve
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wnm608_outline`
--

-- --------------------------------------------------------

--
-- Table structure for table `track_202130_users`
--

CREATE TABLE `track_202130_users` (
  `id` int(13) NOT NULL,
  `firstname` varchar(64) NOT NULL,
  `lastname` varchar(64) NOT NULL,
  `username` varchar(64) NOT NULL,
  `email` varchar(256) NOT NULL,
  `password` varchar(32) NOT NULL,
  `img` varchar(256) NOT NULL,
  `date_create` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `track_202130_users`
--

INSERT INTO `track_202130_users` (`id`, `firstname`, `lastname`, `username`, `email`, `password`, `img`, `date_create`) VALUES
(1, 'Brandy', 'Duran', 'user1', 'user1@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/727/fff/?text=user1', '2020-09-06 05:29:02'),
(2, 'Lilia', ' Williams', 'user2', 'user2@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/783/fff/?text=user2', '2020-12-25 08:03:16'),
(3, 'RachelS', ' Leonard', 'user3', 'user3@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/826/fff/?text=user3', '2020-07-28 01:25:20'),
(4, 'Houston', ' Sharpe', 'user4', 'user4@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/826/fff/?text=user4', '2020-05-08 06:05:23'),
(5, 'Donna', ' Nelson', 'user5', 'user5@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/838/fff/?text=user5', '2021-01-01 04:51:19'),
(6, 'Meghan', 'Delacruz', 'user6', 'user6@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/905/fff/?text=user6', '2020-02-18 12:55:23'),
(7, 'Bowen', ' Fletcher', 'user7', 'user7@gmail.com', 'd41d8cd98f00b204e9800998ecf8427e', 'https://via.placeholder.com/400/784/fff/?text=user7', '2020-02-08 01:33:10'),
(8, 'Floyd', ' Booth', 'user8', 'user8@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/902/fff/?text=user8', '2020-09-15 06:58:12'),
(9, 'Helena', 'Pennington', 'user9', 'user9@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/850/fff/?text=user9', '2021-03-21 09:01:47'),
(10, 'Marissa', 'Chavez', 'user10', 'user10@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/940/fff/?text=user10', '2021-03-13 06:32:10'),
(19, 'Lulu', 'Pan', 'Lulu', 'luadvertise54@gmail.com', '0eb46332e530ea385b5f0f43f45d7362', 'http://via.placeholder.com/500/?text=Profile', '2021-05-23 17:16:46'),
(16, 'Amy', 'Smith', 'user0', 'amy.smith@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'uploads/1621287229.4923_profile-img.jpeg', '2021-05-05 14:49:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `track_202130_users`
--
ALTER TABLE `track_202130_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `track_202130_users`
--
ALTER TABLE `track_202130_users`
  MODIFY `id` int(13) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
