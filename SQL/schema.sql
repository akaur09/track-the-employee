DROP DATABASE IF EXISTS employed_db;
CREATE DATABASE employed_db;

USE employed_db;

CREATE TABLE department (
    id NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(45) NULL
);

CREATE TABLE role (
    id NOT NULL AUTO_INCREMENT,
    title VARCHAR(45) NULL,
    salary DECIMAL(10.3) NULL,
    department_id INT NULL

);

CREATE TABLE employee (
    id NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(45) NULL,
    last_name VARCHAR(30) NULL,
    role_id INT NULL,
    manager_id INT NULL
);