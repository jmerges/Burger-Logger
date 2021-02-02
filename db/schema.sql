drop database if exists burgers_db;
create database burgers_db;

use burgers_db;

create table burgers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    burger_name VARCHAR(200),
    devoured BOOLEAN
);