create database burgers_db;

USE burgers_db;

create table burger 
(
id int auto_increment,
burger_name varchar (255) not null,
devoured boolean default false,
primary key (id)


);