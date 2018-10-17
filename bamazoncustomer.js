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

        let dispTable = new Table({
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

function possiblePurchase() {
    inquirer.prompt([
        {
            name: "ID",
            type: "input",
            message: "What is the ID number for the item you would like to purchase?"
        }, {
            name: 'Quantity',
            type: 'input',
            message: "Quantity?"
        },

    ]).then(function (answers) {
        let qtywant = answers.Quantity;
        let IDwant = answers.ID;
        purchaseFromDatabase(IDwant, qtywant);
    });
};

function purchaseFromDatabase(ID, qtyneed) {
    connection.query('SELECT * FROM Products WHERE ItemID = ' + ID, function (error, response) {
        if (error) {
            console.log(error)
        };
    });
};