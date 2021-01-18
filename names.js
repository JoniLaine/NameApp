
const fs = require('fs')


//List names in alphabetical order
const getAllInAlphabeticalOrder = async () => {

	const nameData = fs.readFileSync('./names.json');
	const names = JSON.parse(nameData);

	try {
		names.names.sort(function (x, y) {
		const nameX = x.name.toUpperCase();
		const nameY = y.name.toUpperCase();
		//compares names and returns value -1, 1 or 0 depending on witch name is before in the alphabets 
			return nameX < nameY 
				? -1
			: nameX > nameY
				? 1
			: 0;
		})

		const response = names.names
		//returns sorted list (in json) as a response
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
		//total variable to calculate the amount
		let total = 0

		for (i = 0; i < names.names.length; i++) {
			total = total + names.names[i].amount
		}

		//json object for returning the amount
		const response = {
			name: 'Total',
			amount: total
		}
		//returns json object as a response
		return { data: response, status: 200 };
	} catch (error) {
		return { data: error, status: 500 };
	}
};


//Return the amount of the name given as a parameter
const getAmountByName = async (request) => {

	const nameData = fs.readFileSync('./names.json');
	const names = JSON.parse(nameData);
	//request value (given name) is set to be more descriptive
	const givenName = request
	//empty variable that will get the amount of given name
	//if amount variable is empty (there is no such name on the list) it will be set as 0 in NameFormPage.js (front-end) 
	let amount= ''		
		  
	try {
		for (i = 0; i < names.names.length; i++) {
			if (givenName == names.names[i].name){
				amount =  names.names[i].amount
			}
		}

		//json object that gets givenName as name value and amount as amount value or '' if the givenName is not on the list
		const response = {
			name: givenName,
			amount: amount
		}

		//returns json object as a response
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
		//compares amounts and returns value -1, 1 or 0 depending on witch amount is bigger 
		return amountX < amountY 
				? 1
			: amountX > amountY
				? -1
			: 0;
		})

		const response = names.names
		//returns sorted list (in json) as a response
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

