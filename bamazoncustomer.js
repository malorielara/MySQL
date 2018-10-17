let mysql = require('mysql');
let inquirer = require('inquirer');
let Table = require('cli-table');

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "aragon07",
    database: "bamazon"
});

function displayAll() {

    connection.query('SELECT * FROM Products', function (error, response) {
        if (error) {
            console.log(error)
        };

    let dispTable = new Table ({
        head: ['Item ID', 'Product Name', 'Category', 'Price', 'Quantity'],
        colWidths: [10, 30, 18, 10, 14]
    });

    for (i = 0; i < response.length; i++) {
        dispTable.push(
            [response[i].ItemID, response[i].ProductName, response[i].DepartmentName, response[i].Price, response[i].StockQuantity]
        );
    }
    console.log(dispTable.toString());
    possiblePurchase();

    });
};