var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'root',
	database: 'bamazon'
});

function validateInput(value) {
	var integer = Number.isInteger(parseFloat(value));
	var sign = Math.sign(value);

	if (integer && (sign === 1)) {
		return true;
	} else {
		return 'Please enter a whole number greater than zero.';
	}
}

function promptForPurchase() {

	inquirer.prompt([
		{
			type: 'input',
			name: 'item_id',
			message: 'Please enter the Item ID that you would like to purchase.',
			validate: validateInput,
			filter: Number
		},
		{
			type: 'input',
			name: 'quantity',
			message: 'How many do you need?',
			validate: validateInput,
			filter: Number
		}
	]).then(function(input) {

		var item = input.item_id;
		var quantity = input.quantity;
		var queryStr = 'SELECT * FROM products WHERE ?';

		connection.query(queryStr, {ItemID: item}, function(err, data) {
		if (err) throw err;


		if (data.length === 0) {
			console.log('ERROR: Invalid Item ID. Please select a valid Item ID.');
			Inventory();

		} else {
			var productData = data[0];

			if (quantity <= productData.StockQuantity) {
				console.log('Congratulations, the product you requested is in stock! Placing order.....................................................................................................................................................');

				var updateQueryStr = 'UPDATE products SET StockQuantity = ' + (productData.StockQuantity - quantity) + ' WHERE ItemID = ' + item;

				connection.query(updateQueryStr, function(err, data) {
					if (err) throw err;

					console.log('Your oder has been placed! Your total is $' + productData.Price * quantity);
					console.log('Thank you for shopping with us!');
					console.log("\n------------------------------------------------------------------\n");

					connection.end();
				})
			} else {
				console.log('Your order can not be placed due to insufficient stock.');
				console.log('Please modify your order and try again; sorry for the inconvenience.');
				console.log("\n------------------------------------------------------------------\n");

				Inventory();
			}
		}
		})
	})
}


function Inventory() {

	queryStr = 'SELECT * FROM products';

	connection.query(queryStr, function(err, data) {
		if (err) throw err;

		console.log('Existing Inventory: ');
		console.log('............................\n');

		var Output = '';
		for (var i = 0; i < data.length; i++) {
			Output = '';
			Output += 'Item ID: ' + data[i].ItemID + '  //  ';
			Output += 'Product Name: ' + data[i].ProductName + '  //  ';
			Output += 'Department: ' + data[i].DepartmentName + '  //  ';
			Output += 'Price: $' + data[i].Price + '\n';

			console.log(Output);
		}

	  	console.log("---------------------------------------------------------------------\n");

	  	promptForPurchase();
	})
}

function runBamazon() {

	Inventory();
}

runBamazon();