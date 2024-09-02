-- Database: Instagram-Main

-- DROP DATABASE IF EXISTS "Instagram-Main";

CREATE DATABASE "Instagram-Main"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE =  False;

CREATE TABLE Users (
	UserId int PRIMARY KEY,
	username varchar(255),
	email varchar(255),
	password varchar(255),
	phone_number varchar(15)
);

select * from Users;
create table followers(
	user_id int  NOT NULL,
	follower_id int NOT NULL,
	follower_user_name varchar(255) NOT NULL,
	FOREIGN KEY (follower_id)  references Users(userid),
	FOREIGN KEY (user_id) references Users(userid)
)