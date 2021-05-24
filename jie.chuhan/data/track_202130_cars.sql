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
-- Table structure for table `track_202130_cars`
--

CREATE TABLE `track_202130_cars` (
  `id` int(13) NOT NULL,
  `user_id` int(13) NOT NULL,
  `model` varchar(64) NOT NULL,
  `type` varchar(32) NOT NULL,
  `make` varchar(64) NOT NULL,
  `color` varchar(32) NOT NULL,
  `description` text NOT NULL,
  `img` varchar(256) NOT NULL,
  `date_create` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `track_202130_cars`
--

INSERT INTO `track_202130_cars` (`id`, `user_id`, `model`, `type`, `make`, `color`, `description`, `img`, `date_create`) VALUES
(1, 10, 'Flyboyz', 'Sedan', 'accord', 'blue', 'Consectetur sint velit in quis incididunt eiusmod tempor do elit aliqua adipisicing sunt minim sit. Enim anim id velit culpa sunt. Excepteur consectetur dolor mollit reprehenderit.', 'https://via.placeholder.com/400/766/fff/?text=Flyboyz', '2020-08-20 03:49:22'),
(2, 3, 'Eargos', 'Pickup', 'mustang', 'blue', 'Cillum sunt laboris elit aliquip sit irure esse culpa eiusmod irure nisi irure qui. Laborum proident laboris occaecat consectetur pariatur anim dolore. Ex tempor excepteur anim in irure mollit ad velit.\n      \n      \n      \n      \n      \n      \n      \n      \n      \n      \n      \n      ', 'https://via.placeholder.com/400/961/fff/?text=Eargo', '2021-04-02 04:45:59'),
(3, 2, 'Zialactic', 'Sedan', 'camry', 'blue', 'Laborum ad amet deserunt duis velit. Sunt nisi sint culpa ex commodo et adipisicing. Do aliquip aliquip cillum esse officia pariatur in do excepteur tempor eu fugiat sint.', 'https://via.placeholder.com/400/984/fff/?text=Zialactic', '2020-03-26 04:39:32'),
(4, 6, 'Melbacor', 'Sedan', 'civic', 'blue', 'Culpa et esse in anim mollit id ea adipisicing in. Reprehenderit pariatur consectetur exercitation irure qui. Incididunt laborum dolor consequat laborum commodo enim ut.', 'https://via.placeholder.com/400/979/fff/?text=Melbacor', '2020-09-26 10:24:57'),
(5, 7, 'Magnemo', 'Convertible', '911', 'blue', 'Labore qui nostrud commodo commodo aliquip est exercitation nulla ut do. Anim irure deserunt nisi ad sit esse qui officia eiusmod consectetur ullamco occaecat minim. Aute exercitation cillum ullamco commodo culpa culpa exercitation aliquip aliquip cupidatat.', 'https://via.placeholder.com/400/718/fff/?text=Magnemo', '2020-10-11 03:57:18'),
(6, 7, 'Podunk', 'Pickup', 'F-150', 'blue', 'Sunt anim ut commodo aliquip voluptate eiusmod officia excepteur deserunt. Non eiusmod elit sint reprehenderit ullamco voluptate irure minim qui eu in est. Minim cillum labore mollit veniam aliquip ea nostrud excepteur magna ut sint dolor aliqua.', 'https://via.placeholder.com/400/794/fff/?text=Podunk', '2020-10-06 10:43:34'),
(7, 3, 'Cubixs', 'Sedan', 'accord', 'blue', 'Reprehenderit et do ipsum do dolore qui anim elit do consequat enim aliqua laboris. Est nulla nostrud et qui laboris nisi reprehenderit excepteur. Consequat sit laboris veniam voluptate enim ipsum consequat ex reprehenderit exercitation non fugiat.\n      \n      ', 'https://via.placeholder.com/400/911/fff/?text=Cubix', '2020-09-11 03:21:31'),
(8, 2, 'Xurban', 'Pickup', 'Sierra 1500', 'blue', 'Irure eiusmod occaecat magna culpa dolore dolor Lorem est anim cupidatat exercitation ipsum. Nostrud deserunt deserunt deserunt laborum duis labore aliqua reprehenderit. Ad incididunt esse proident occaecat in velit ex nulla do nisi.', 'https://via.placeholder.com/400/882/fff/?text=Xurban', '2020-11-20 11:10:55'),
(9, 4, 'Circum', 'Suv', 'CRV', 'blue', 'Eu excepteur aliquip anim velit dolor ipsum est incididunt sint anim amet aute excepteur. Eu officia sit quis commodo. Est eiusmod ad quis nisi reprehenderit aute qui eiusmod dolore.', 'https://via.placeholder.com/400/882/fff/?text=Circum', '2020-11-27 07:46:12'),
(10, 7, 'Illumity', 'Sedan', 'camry', 'blue', 'Commodo cupidatat velit aliquip in voluptate sunt elit est dolore excepteur irure duis ipsum magna. Deserunt esse in nulla esse consectetur magna adipisicing do velit id mollit eu officia aute. In amet commodo tempor duis veniam anim sit consequat excepteur.', 'https://via.placeholder.com/400/893/fff/?text=Illumity', '2020-08-12 07:46:35'),
(11, 4, 'Medicroix', 'Sedan', 'civic', 'blue', 'Excepteur qui amet qui officia proident non veniam incididunt minim aliqua nisi anim consectetur eiusmod. Irure sunt dolor cillum laboris adipisicing laboris consequat ullamco enim excepteur pariatur quis magna ut. Aliquip voluptate ut ea qui duis culpa consectetur Lorem sunt.', 'https://via.placeholder.com/400/910/fff/?text=Medicroix', '2020-06-15 07:13:20'),
(12, 2, 'Miracula', 'Pickup', 'F-150', 'blue', 'Officia commodo adipisicing voluptate officia pariatur nisi cillum est sit minim. Ea quis amet dolor dolor et magna magna culpa. Quis aliqua elit proident magna labore cillum mollit irure tempor amet ea ad officia cupidatat.', 'https://via.placeholder.com/400/828/fff/?text=Miracula', '2020-01-01 08:34:45'),
(13, 10, 'Polarium', 'Convertible', 'mustang', 'blue', 'Magna magna sint irure excepteur. Dolore tempor fugiat consectetur do consequat. Laborum magna dolor adipisicing tempor sunt enim qui dolor nulla cillum enim fugiat cupidatat ad.', 'https://via.placeholder.com/400/810/fff/?text=Polarium', '2020-04-10 05:41:19'),
(14, 9, 'Fibrodyne', 'Convertible', '911', 'blue', 'Ex eiusmod ad irure commodo voluptate sit irure elit ut ut est ullamco velit. Do non officia tempor exercitation mollit est in cillum ad sit. Aliqua laborum ex id reprehenderit irure proident.\n      ', 'https://via.placeholder.com/400/970/fff/?text=Fibrodyne', '2020-04-27 01:47:10'),
(15, 3, 'Ginks', 'Suv', 'Sierra 1500', 'yellow', 'Anim sint ullamco commodo magna elit sit reprehenderit elit est velit velit et labore duis. Veniam Lorem eu elit et ex culpa. Id culpa ullamco id sunt amet.\n      \n      \n      ', 'https://via.placeholder.com/400/720/fff/?text=Gink', '2020-01-21 07:47:53'),
(16, 2, 'Strozen', 'Pickup', 'Sierra 1500', 'blue', 'Nostrud non enim esse quis quis consectetur in ipsum. Aliquip minim mollit ut veniam. Velit aliqua excepteur deserunt ex exercitation est laboris officia Lorem nostrud eiusmod qui excepteur ullamco.', 'https://via.placeholder.com/400/919/fff/?text=Strozen', '2021-02-03 09:50:04'),
(17, 10, 'Rooforia', 'Sedan', 'accord', 'blue', 'Ut quis nulla ullamco do sint quis fugiat. Ad ut exercitation cupidatat quis non aliquip. Nulla nostrud tempor anim eu.', 'https://via.placeholder.com/400/720/fff/?text=Rooforia', '2021-03-30 08:10:04'),
(18, 5, 'Genmex', 'Sedan', 'accord', 'blue', 'Lorem id duis anim qui excepteur ea sint commodo. Nulla sit do officia pariatur sit nisi deserunt anim sint anim dolore do ipsum ipsum. Dolor ad ad velit exercitation ipsum eu laborum anim labore in ullamco.', 'https://via.placeholder.com/400/886/fff/?text=Genmex', '2020-04-04 08:45:09'),
(19, 7, 'Ultrimax', 'Suv', 'Q8', 'blue', 'Do cillum officia ad cillum duis. Laborum dolore et aliqua et non ullamco irure et aliquip aute mollit do. Duis fugiat consequat cillum eu elit anim sint adipisicing.', 'https://via.placeholder.com/400/873/fff/?text=Ultrimax', '2020-04-04 12:15:54'),
(20, 3, 'Fishland', 'Suv', 'mustang', 'blue', 'Sunt aute eiusmod eu aliquip Lorem velit est. Sit laboris anim veniam sit labore. Occaecat amet velit qui duis dolor ex velit.\n      ', 'https://via.placeholder.com/400/811/fff/?text=Fishland', '2021-01-15 07:36:16'),
(21, 6, 'Isologia', 'Convertible', 'mustang', 'blue', 'Lorem ut sint labore occaecat laboris amet dolore eiusmod aute in veniam proident irure. Irure ipsum mollit quis veniam cillum esse voluptate deserunt. Aliqua eiusmod nisi deserunt ex irure anim eu id.', 'https://via.placeholder.com/400/848/fff/?text=Isologia', '2020-07-13 10:00:15'),
(22, 10, 'Puria', 'Suv', 'CRV', 'blue', 'Nostrud anim enim irure nostrud commodo aute aute dolor qui id. Pariatur sit nulla incididunt excepteur ex eiusmod in sit elit cupidatat sint qui. Anim amet reprehenderit cupidatat nulla officia exercitation est.', 'https://via.placeholder.com/400/776/fff/?text=Puria', '2020-09-24 08:20:23'),
(23, 9, 'Utara', 'Suv', 'Q8', 'blue', 'Adipisicing cupidatat laboris aute voluptate incididunt quis. Sint excepteur exercitation et minim culpa dolor anim sint voluptate deserunt et dolore do. Ullamco voluptate magna aliquip esse qui incididunt.', 'https://via.placeholder.com/400/745/fff/?text=Utara', '2020-03-30 05:43:36'),
(24, 8, 'Sealoud', 'Suv', 'Q8', 'blue', 'Ut sunt voluptate non velit consectetur eu tempor ea. Nisi pariatur ipsum occaecat sit officia id cupidatat aliquip aute et nulla aliquip ipsum. Cupidatat occaecat in et dolore consequat sit dolor culpa labore commodo esse qui ad.', 'https://via.placeholder.com/400/800/fff/?text=Sealoud', '2020-09-21 02:56:30'),
(25, 5, 'Qualitern', 'Convertible', '911', 'blue', 'Consequat qui sint in nisi. Occaecat cupidatat sunt tempor est cillum ut ad ad deserunt tempor consequat aliqua reprehenderit. Et reprehenderit veniam deserunt eu fugiat consequat excepteur cupidatat.', 'https://via.placeholder.com/400/970/fff/?text=Qualitern', '2020-07-29 09:29:15'),
(26, 3, 'Extragen', 'Pickup', 'F-150', 'blue', 'Aliquip laboris anim ea pariatur aliquip eu. Tempor non proident elit est dolore exercitation ea do exercitation. Proident ullamco cillum nisi labore irure irure id.', 'https://via.placeholder.com/400/812/fff/?text=Extragen', '2020-01-11 05:46:24'),
(27, 2, 'Bulljuice', 'Pickup', 'Sierra 1500', 'blue', 'Reprehenderit aute incididunt enim ut ullamco duis elit anim deserunt. Velit elit enim eu dolor consectetur et quis irure tempor mollit occaecat. Esse consequat sunt laborum non.', 'https://via.placeholder.com/400/990/fff/?text=Bulljuice', '2020-11-22 12:00:50'),
(28, 9, 'Quinex', 'Sedan', 'civic', 'blue', 'Ut fugiat incididunt mollit incididunt et nostrud eiusmod voluptate. Non enim do commodo eu non eiusmod magna laborum magna ipsum. Aute veniam anim deserunt Lorem fugiat laboris quis exercitation consequat exercitation.', 'https://via.placeholder.com/400/787/fff/?text=Quinex', '2020-08-27 03:59:06'),
(29, 3, 'Dogtown', 'Suv', 'CRV', 'blue', 'Officia ea fugiat exercitation duis non mollit enim dolor occaecat anim Lorem. Ex quis exercitation aliquip aliquip in minim esse non. Esse laboris dolore irure eu veniam.', 'https://via.placeholder.com/400/769/fff/?text=Dogtown', '2020-01-12 11:30:09'),
(30, 5, 'Radiantix', 'Sedan', 'civic', 'blue', 'Aliquip voluptate ea in enim exercitation. Est ad fugiat sit in commodo enim amet tempor labore. Est aliquip nisi reprehenderit ea amet cupidatat labore tempor.', 'https://via.placeholder.com/400/993/fff/?text=Radiantix', '2021-01-08 07:06:31'),
(31, 6, 'Roughies', 'Convertible', '911', 'blue', 'Magna ut veniam veniam aliquip in dolor fugiat dolore minim in laborum fugiat. In consequat deserunt id nostrud sint velit sint non eiusmod pariatur. Magna ullamco nostrud esse cupidatat voluptate labore eiusmod deserunt commodo laboris commodo.', 'https://via.placeholder.com/400/933/fff/?text=Roughies', '2021-03-31 07:31:45'),
(32, 8, 'Sustenza', 'Suv', 'CRV', 'blue', 'Duis aliquip est consequat non labore eiusmod nulla nulla duis non fugiat reprehenderit quis. Ut qui elit velit officia deserunt adipisicing culpa. Proident sint commodo mollit aute veniam.', 'https://via.placeholder.com/400/761/fff/?text=Sustenza', '2020-05-03 01:59:30'),
(33, 9, 'Splinx', 'Suv', 'X5', 'blue', 'Sunt ut in et laborum magna eiusmod ut id qui eu incididunt veniam. Aliquip deserunt sunt eu magna exercitation culpa aliqua amet eu duis quis voluptate anim. Qui aute esse exercitation quis ut nulla est incididunt quis non incididunt.', 'https://via.placeholder.com/400/959/fff/?text=Splinx', '2020-02-17 12:00:27'),
(34, 2, 'Neurocell', 'Pickup', 'Sierra 1500', 'blue', 'Commodo tempor aute sunt duis. Ut velit ipsum proident occaecat non do elit amet anim excepteur aliqua sit duis officia. Anim velit incididunt ea quis pariatur labore in do culpa exercitation fugiat velit est.', 'https://via.placeholder.com/400/721/fff/?text=Neurocell', '2020-01-19 11:26:55'),
(35, 9, 'Straloy', 'Sedan', 'camry', 'blue', 'Dolore officia consectetur enim elit incididunt. Aliquip sunt sit consequat est cupidatat amet eiusmod occaecat aute fugiat nostrud Lorem veniam sunt. Eiusmod proident laborum anim mollit reprehenderit quis aute magna consequat ullamco incididunt ex magna deserunt.', 'https://via.placeholder.com/400/908/fff/?text=Straloy', '2021-03-07 06:43:23'),
(36, 2, 'Mixers', 'Convertible', 'mustang', 'blue', 'Fugiat aliqua est amet consequat sunt. In duis laboris nulla Lorem fugiat quis pariatur. Anim amet consequat veniam nulla occaecat id exercitation tempor deserunt velit eu sint qui.', 'https://via.placeholder.com/400/802/fff/?text=Mixers', '2020-08-17 06:45:43'),
(37, 6, 'Quordate', 'Pickup', 'F-150', 'blue', 'Excepteur dolore quis nostrud mollit magna laboris anim velit. Nisi incididunt ex elit voluptate eiusmod eiusmod laborum non proident nisi. Laborum nostrud adipisicing magna eiusmod.', 'https://via.placeholder.com/400/765/fff/?text=Quordate', '2020-03-27 09:49:43'),
(38, 2, 'Ebidco', 'Suv', 'X5', 'blue', 'Cillum sit id nisi adipisicing consequat excepteur do et culpa. Cillum aliquip sunt aute magna aliquip magna qui. Aliqua voluptate incididunt do quis id nisi non adipisicing in.', 'https://via.placeholder.com/400/831/fff/?text=Ebidco', '2020-09-19 10:34:41'),
(39, 6, 'Imant', 'Sedan', 'camry', 'blue', 'Esse consequat culpa deserunt consequat anim occaecat. Nisi labore deserunt elit tempor ad. Occaecat reprehenderit dolor quis esse.', 'https://via.placeholder.com/400/944/fff/?text=Imant', '2020-02-14 11:16:39'),
(40, 4, 'Baluba', 'Pickup', 'Sierra 1500', 'blue', 'Ipsum laborum reprehenderit deserunt laborum deserunt laboris tempor eu dolor consequat velit. Incididunt id anim id exercitation anim veniam laborum et deserunt amet mollit tempor tempor nulla. Excepteur eiusmod laboris esse labore labore velit ad nostrud esse consectetur proident aliquip ad.', 'https://via.placeholder.com/400/844/fff/?text=Baluba', '2020-01-24 04:39:44'),
(41, 9, 'Bleeko', 'Suv', 'CRV', 'blue', 'Ex voluptate id non velit fugiat. Sit irure nulla est nulla in deserunt commodo. Aute enim occaecat ullamco cillum laborum id cillum.', 'https://via.placeholder.com/400/818/fff/?text=Bleeko', '2020-03-23 03:05:30'),
(42, 7, 'Photobin', 'Convertible', '911', 'blue', 'Veniam dolore est occaecat consequat anim proident ex eiusmod irure velit. Ad in ad ut voluptate anim duis exercitation nulla aliqua ullamco sint magna adipisicing ipsum. Id esse esse aliqua sunt velit ex adipisicing elit in.', 'https://via.placeholder.com/400/997/fff/?text=Photobin', '2021-02-28 06:14:04'),
(43, 10, 'Boilcat', 'Sedan', 'accord', 'blue', 'Esse aliqua est reprehenderit ut cupidatat fugiat anim. Ad consectetur cillum sunt ad amet dolor. Fugiat mollit Lorem et pariatur id elit.', 'https://via.placeholder.com/400/799/fff/?text=Boilcat', '2021-01-18 05:20:10'),
(44, 3, 'Bytrex', 'Convertible', '911', 'blue', 'Sit cillum adipisicing ex magna proident do qui ad labore exercitation velit excepteur culpa. Lorem laborum esse incididunt amet non amet et duis consectetur. Laboris enim velit pariatur elit culpa.', 'https://via.placeholder.com/400/746/fff/?text=Bytrex', '2020-06-18 03:15:00'),
(45, 3, 'Nebulean', 'Convertible', 'mustang', 'blue', 'Culpa sint adipisicing ipsum aute quis dolor Lorem in. Commodo ea laborum ad quis fugiat veniam duis esse in reprehenderit. Do enim in esse do Lorem excepteur consectetur aute.', 'https://via.placeholder.com/400/856/fff/?text=Nebulean', '2020-05-27 09:45:30'),
(46, 4, 'Zaphire', 'Sedan', 'accord', 'blue', 'Exercitation ut sunt excepteur id ea magna laboris magna sint nostrud exercitation laboris. Laboris occaecat esse fugiat commodo labore ad. Culpa sit id irure aliquip est ullamco velit.', 'https://via.placeholder.com/400/790/fff/?text=Zaphire', '2020-10-21 12:34:41'),
(47, 3, 'Jamnation', 'Sedan', 'civic', 'blue', 'Esse sint consequat fugiat ea duis veniam. Deserunt occaecat incididunt ipsum aliquip magna incididunt do elit officia nostrud quis. Commodo dolor adipisicing tempor id non est dolor sit exercitation.', 'https://via.placeholder.com/400/738/fff/?text=Jamnation', '2020-09-03 05:52:18'),
(48, 2, 'Assistix', 'Sedan', 'accord', 'blue', 'Esse in minim deserunt cillum veniam commodo ut dolor excepteur. Non laboris quis est in. Dolor ut consectetur sit mollit amet aliqua.', 'https://via.placeholder.com/400/747/fff/?text=Assistix', '2020-03-15 11:43:58'),
(49, 5, 'Orboid', 'Pickup', 'F-150', 'blue', 'Sunt ullamco dolor ullamco excepteur pariatur fugiat officia irure ad amet nisi do. Aliquip sit officia irure sunt cupidatat non esse. Amet pariatur sint nisi ut est laborum cupidatat exercitation eu anim ex.', 'https://via.placeholder.com/400/880/fff/?text=Orboid', '2020-12-03 09:14:05'),
(50, 2, 'Zentix', 'Suv', 'Q8', 'blue', 'Commodo laboris eu minim id veniam ut in do eu exercitation et ullamco occaecat laboris. Enim minim proident fugiat id. Esse aliqua officia non irure enim occaecat esse enim ad amet et aliquip aliquip cupidatat.', 'https://via.placeholder.com/400/753/fff/?text=Zentix', '2020-08-26 03:15:37'),
(63, 16, 'HURACÁN EVO', 'Convertible', 'Lamborghini', 'Orange', 'The Huracán EVO is the evolution of the most successful V10-powered Lamborghini ever. The result of fine-tuning and refining existing features, combined with new design solutions that increase performance, the car stands out for its ability to anticipate and cater to the driver’s behavior, expectations and desires.\n      ', 'uploads/1621286632.845_2020_lamborghini_huracan_coupe_evo_fq_oem_7_1600.jpeg', '2021-05-17 13:41:41'),
(64, 16, 'X5 M', 'Suv', 'BMW', 'white', 'Unleash up to 617 hp with the available Competition Package – and feel a new surge of confidence. The racetrack-proven cooling system in the M TwinPower Turbo V-8 engine includes four water pumps, six radiators, and a dedicated transmission cooler.\n      \n      ', 'uploads/1621287528.6117_2020-BMW-X5M-Mineral-White-44.jpeg', '2021-05-17 14:37:02'),
(65, 16, 'A 220', 'Sedan', 'Mercedes-Benz', 'blue', 'A is for attention-getting. Clean lines, LED lighting and an aggressive stance aim for admiring eyes. An ultramodern, premium cabin can captivate you for years to come.', 'uploads/1621291638.1968_2020-mercedes-benz-a-class_100730898_h.jpeg', '2021-05-17 15:30:26'),
(66, 16, 'C 300', 'Sedan', 'Mercedes-Benz', 'white', 'With turbo power, nine speeds, and the year-round grip of available 4MATIC® all-wheel drive, the C-Class has the agility, strength and confidence to match the beauty of its well-toned body.', 'uploads/1621291648.9683_WechatIMG2523.jpeg', '2021-05-17 15:46:46'),
(67, 16, 'RANGER', 'Pickup', 'Ford', 'red', 'The 2021 Ford Ranger is a versatile midsize pickup truck that can fill a number of roles depending on how you configure it. The truck is built on the same bones as the global-market Ford Ranger introduced in 2012, but the U.S.-spec model received an updated suspension, unique bodywork and interior, and a single-spec drivetrain.\n      ', 'uploads/1621291946.4815_2021-Ford-Ranger-STX-Special-Edition-Package.jpeg', '2021-05-17 15:52:20'),
(68, 16, 'S CONVERTIBLE', 'Convertible', 'Mini Cooper', 'green', 'The electrically-powered soft top folds up quietly and smoothly in 18 seconds flat – at speeds of up to 18 mph. Fold your top up or down, or opt for sunroof mode, which lets the breeze in while you cruise. You can also make your MINI a little more outgoing with a ‘MINI Yours’ soft top, featuring a woven Union Jack design.', 'uploads/1621292231.9191_images.jpeg', '2021-05-17 15:56:50');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `track_202130_cars`
--
ALTER TABLE `track_202130_cars`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `track_202130_cars`
--
ALTER TABLE `track_202130_cars`
  MODIFY `id` int(13) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
