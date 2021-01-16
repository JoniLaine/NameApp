
const fs = require('fs')


//List names in alphabetical order
const getAllInAlphabeticalOrder = async () => {

	const nameData = fs.readFileSync('./names.json');
	const names = JSON.parse(nameData);

	try {
		names.names.sort(function (x, y) {
		const nameX = x.name.toUpperCase();
		const nameY = y.name.toUpperCase(); 
			return nameX < nameY 
				? -1
			: nameX > nameY
				? 1
			: 0;
		})

		const response = names.names
		return { data: response, status: 200 };
	} catch(err) {
			console.log('Error parsing JSON string:', err)
	}
};


//Return the total amount of all the names
const getTotalAmount = async () => {

	const nameData = fs.readFileSync('./names.json');
	const names = JSON.parse(nameData);

	try {
	   	let total = 0;
  
		for (i = 0; i < names.names.length; i++) {
			total = total + names.names[i].amount
		}

		const response = {
			name: 'Total',
			amount: total
		}
	
		return { data: response, status: 200 };
	} catch (error) {
		return { data: error, status: 500 };
	}
};


//Return the amount of the name given as a parameter
const getAmountByName = async (request) => {

	const nameData = fs.readFileSync('./names.json');
	const names = JSON.parse(nameData);
	const givenName = request
	let amount= ''		
		  
	try {
		for (i = 0; i < names.names.length; i++) {
			if (givenName == names.names[i].name){
				amount =  names.names[i].amount
			}
		}

		const response = {
			name: request,
			amount: amount
		}

		return { data: response, status: 200 };
	} catch (error) {
		return { data: error, status: 500 };
	}
};
	  

//List names and amounts, order by amount, most popular first
const getMostPopularFirst = async () => {

	const nameData = fs.readFileSync('./names.json');
	const names = JSON.parse(nameData);

	try {
		names.names.sort(function (x, y) {
		const amountX = x.amount;
		const amountY = y.amount;
		return amountX < amountY 
				? 1
			: amountX > amountY
				? -1
			: 0;
		})

		const response = names.names

		return { data: response, status: 200 };
	}catch (error) {
		return { data: error, status: 500 };
	}
};
  

	module.exports = {
		getAllInAlphabeticalOrder,
		getTotalAmount,
		getMostPopularFirst,
		getAmountByName
	}; 

