CREATE TABLE IF NOT EXISTS `track_202130_users` (
`id` INT NULL,
`name` VARCHAR(MAX) NULL,
`username` VARCHAR(MAX) NULL,
`email` VARCHAR(MAX) NULL,
`password` VARCHAR(MAX) NULL,
`img` VARCHAR(MAX) NULL,
`date_create` VARCHAR(MAX) NULL
);

INSERT INTO track_202130_users VALUES
(1,'Brandy Duran','user1','user1@gmail.com',md5("pass"),'https://via.placeholder.com/400/727/fff/?text=user1','2020-09-06 05:29:02'),
(2,'Lilia Williams','user2','user2@gmail.com',md5("pass"),'https://via.placeholder.com/400/783/fff/?text=user2','2020-12-25 08:03:16'),
(3,'Rachel Leonard','user3','user3@gmail.com',md5("pass"),'https://via.placeholder.com/400/998/fff/?text=user3','2020-07-28 01:25:20'),
(4,'Houston Sharpe','user4','user4@gmail.com',md5("pass"),'https://via.placeholder.com/400/826/fff/?text=user4','2020-05-08 06:05:23'),
(5,'Donna Nelson','user5','user5@gmail.com',md5("pass"),'https://via.placeholder.com/400/838/fff/?text=user5','2021-01-01 04:51:19'),
(6,'Meghan Delacruz','user6','user6@gmail.com',md5("pass"),'https://via.placeholder.com/400/905/fff/?text=user6','2020-02-18 12:55:23'),
(7,'Bowen Fletcher','user7','user7@gmail.com',md5("pass"),'https://via.placeholder.com/400/784/fff/?text=user7','2020-02-08 01:33:10'),
(8,'Floyd Booth','user8','user8@gmail.com',md5("pass"),'https://via.placeholder.com/400/902/fff/?text=user8','2020-09-15 06:58:12'),
(9,'Helena Pennington','user9','user9@gmail.com',md5("pass"),'https://via.placeholder.com/400/850/fff/?text=user9','2021-03-21 09:01:47'),
(10,'Marissa Chavez','user10','user10@gmail.com',md5("pass"),'https://via.placeholder.com/400/940/fff/?text=user10','2021-03-13 06:32:10');