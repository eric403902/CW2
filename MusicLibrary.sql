CREATE DATABASE MusicLibrary;
USE MUSICLIBRARY;

DROP TABLE IF EXISTS SONG;
DROP TABLE IF EXISTS ALBUM;
DROP TABLE IF EXISTS USER;


CREATE TABLE SONG(
SID INT(8) NOT NULL,
SONGNAME VARCHAR(10) NOT NULL,
ALBUMID INT(8) NOT NULL,
ARTIST VARCHAR(20) NOT NULL,
PRICE INT(8) NOT NULL,
PRIMARY KEY(SID));

CREATE TABLE USER(
USERNAME VARCHAR(10) NOT NULL,
PASSWORD VARCHAR(10) NOT NULL,
POINTS INT(8) NOT NULL,
MONEY_AV INT(8) NOT NULL,
USERSTATE CHAR NOT NULL,
PRIMARY KEY(USERNAME)
);

CREATE TABLE ALBUM(
ALBUMNAME VARCHAR(10) NOT NULL,
ALBUMID INT(8) NOT NULL,
ARTIST VARCHAR(20) NOT NULL,
IMAGEURL VARCHAR(30) NOT NULL,
PRICE INT(8) NOT NULL,
PRIMARY KEY(ALBUMID)
);

INSERT INTO USER VALUES ('testuser', "123456789", '10', "50", 'member');
INSERT INTO USER VALUES ('teststaff', "123456789", '0', "0", 'staff');

INSERT INTO ALBUM VALUES ('X', '00000000', 'Ed Sheeran', "https://www.billboard.com/files/styles/review_main_image/public/ed-sheeran-x-410.jpg", '20');
INSERT INTO ALBUM VALUES ('Wilder Mind', '00000001', 'Mumford and Sons', "https://images-na.ssl-images-amazon.com/images/I/91WUWURTijL._SL1500_.jpg", '25');
INSERT INTO ALBUM VALUES ('Ultimate', '00000002', 'Air Supply', "https://images-na.ssl-images-amazon.com/images/I/51O-UYQBsxL._SL1500_.jpg", '15');
INSERT INTO ALBUM VALUES ('Thriller', '00000003', 'Michael Jackson', "https://tf7i72apx4545vzwn3oriyy1-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/thriller-758x758.jpg", '30');
INSERT INTO ALBUM VALUES ('The Click', '00000004', 'AJR', "https://is1-ssl.mzstatic.com/image/thumb/Music127/v4/6f/a3/60/6fa36088-6df3-1a5a-a45f-de689721b3dc/4050538298680.jpg/1200x630bb.jpg", '20');
INSERT INTO ALBUM VALUES ("What's the story morning glory?", '00000005', 'Oasis', "http://cdn.shopify.com/s/files/1/1226/9490/products/e27aeb3b-dd81-471c-aac7-ac45ee4bd436_grande.jpg?v=1460639335", '20');
INSERT INTO ALBUM VALUES ('AM', '00000006', 'Arctic Monkeys', "https://cdn.shopify.com/s/files/1/1156/2890/products/ArcticMonkeys-AM.jpeg?v=1480629978", '25');
INSERT INTO ALBUM VALUES ('Battle Born', '00000007', 'The Killers', "https://i5.walmartimages.com/asr/d35167f3-33e5-422b-965d-c97891f99b14_1.59d039d8743a4abf33c521f070cb2371.jpeg", '20');
INSERT INTO ALBUM VALUES ('Gold', '00000008', 'ABBA', "https://cps-static.rovicorp.com/3/JPG_500/MI0001/641/MI0001641176.jpg?partner=allrovi.com", '15');
INSERT INTO ALBUM VALUES ('The Script', '00000009', 'The Script', "https://albumart.besteveralbums.com/albumart/album_large_12092_4e54090db255a.jpg", '20');

INSERT INTO ALBUM VALUES ('00000001', "I'm a Mess", '00000000', "Ed Sheeran", '3');
INSERT INTO ALBUM VALUES ('00000002', "Sing", '00000000', "Ed Sheeran", '3');
INSERT INTO ALBUM VALUES ('00000003', "Don't", '00000000', "Ed Sheeran", '3');
INSERT INTO ALBUM VALUES ('00000004', 'Photograph  ', '00000000', "Ed Sheeran", '3');
INSERT INTO ALBUM VALUES ('00000005', 'Bloodstream', '00000000', "Ed Sheeran", '3');
INSERT INTO ALBUM VALUES ('00000006', 'Tenerife Sea', '00000000', "Ed Sheeran", '3');
INSERT INTO ALBUM VALUES ('00000007', 'Nina ', '00000000', "Ed Sheeran", '3');
INSERT INTO ALBUM VALUES ('00000008', 'Thinking Out Loud', '00000000', "Ed Sheeran", '3');

INSERT INTO ALBUM VALUES ('00000009', 'Tompkins Square Park', '00000001', "Mumford and Sons", '3');
INSERT INTO ALBUM VALUES ('00000010', "Believe", '00000001', "Mumford and Sons", '3');
INSERT INTO ALBUM VALUES ('00000011', "The Wolf", '00000001', "Mumford and Sons", '3');
INSERT INTO ALBUM VALUES ('00000012', "Wilder Mind", '00000001', "Mumford and Sons", '3');
INSERT INTO ALBUM VALUES ('00000013', 'Just Smoke', '00000001', "Mumford and Sons", '3');
INSERT INTO ALBUM VALUES ('00000014', 'Monster', '00000001', "Mumford and Sons", '3');
INSERT INTO ALBUM VALUES ('00000015', 'Snake Eyes', '00000001', "Mumford and Sons", '3');
INSERT INTO ALBUM VALUES ('00000016', 'Broad-Shouldered Beasts', '00000001', "Mumford and Sons", '3');
INSERT INTO ALBUM VALUES ('00000017', 'Cold Arms', '00000001', "Mumford and Sons", '3');
INSERT INTO ALBUM VALUES ('00000018', 'Ditmas ', '00000001', "Mumford and Sons", '3');
