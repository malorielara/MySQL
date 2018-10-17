CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE Products(
	ItemID INTEGER(10) AUTO_INCREMENT NOT NULL,
    ProductName VARCHAR(50) NOT NULL,
    DepartmentName VARCHAR(50) NOT NULL,
    Price DECIMAL(10,2) NOT NULL,
    StockQuantity INTEGER(10),
    primary key (ItemId)
);


-- into products
-- INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity) VALUES('Camelbak Pack', 'Hiking', 69.99, 100);
-- INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity) VALUES('AirPods', 'Electronics', 159.99, 200);
-- INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity) VALUES('Metal Straws', 'Kitchenware', 9.99, 500);
-- INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity) VALUES('Playstation4', 'Gaming', 499.99, 200);
-- INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity) VALUES('Dog Sweater', 'Dog Clothing', 19.99, 150);
-- INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity) VALUES('Spiderman Web Shooter','Toys', 25.99, 200);
-- INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity) VALUES('Lady Bug Pillow Pet', 'Pillows', 9.99, 200);
-- INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity) VALUES('Doritos', 'Food', 5.49, 175);
-- INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity) VALUES('Jurrassic World', 'Movies', 29.99, 200);
-- INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity) VALUES('Vans Slip-on Shoes','Shoes', 49.99, 100);
--