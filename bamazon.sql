DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
ItemID INTEGER(11) AUTO_INCREMENT NOT NULL,
ProductName  VARCHAR(50) NOT NULL,
DepartmentName VARCHAR(50) NOT NULL,
Price DECIMAL(10,2) NULL,
StockQuantity INTEGER(10) NULL,
PRIMARY KEY (ItemID)
);

INSERT INTO products ( ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Samsung Chromebook", "Computers", 154.99, 9);
INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("HP Pavilion Laptop", "Computers", 579.99, 10);
INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Lenovo Yoga Laptop", "Computers", 899.99, 3);
INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Uno Delux", "Toys & Games", 13.95, 15);
INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Rubik's Cube", "Toys & Games", 6.95, 10);
INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Scattergories", "Toys & Games", 20.49, 2);
INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Call of Duty Black Ops 4", "Video Games", 59.95, 5);
INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Crazy Rich Asians", "Books", 14.95, 5);
INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("China Rich Girl", "Books", 16.99, 1);
INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Rich People Problems", "Books", 16.95, 10);

select * FROM products