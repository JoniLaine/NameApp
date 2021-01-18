const nameRouter = require('express').Router();
const names = require('./names.js');

//router sends requests to name.js and return response (result) to front-end page that sent the request

//List names in alphabetical order
nameRouter.get('/getAllInAlphabeticalOrder', async (req,res) => {
    await names.getAllInAlphabeticalOrder()
    .then(result => res.json(result))
    .catch(error => res.json({error:error.message}))
})

//Return the total amount of all the names
nameRouter.get('/getTotalAmount', async (req, res) => {
    await names.getTotalAmount()
    .then(result => res.json(result))
    .catch(error => res.json({error:error.message}))
})

//List names and amounts, order by amount, most popular first
nameRouter.get('/getMostPopularFirst', async (req,res) => {
    await names.getMostPopularFirst()
    .then(result => res.json(result))
    .catch(error => res.json({error:error.message}))
})

//Return the amount of the name given as a parameter
nameRouter.get('/getAmountByName/:name', async (req,res) => {
    await names.getAmountByName(req.params.name)
    .then(result => res.json(result))
    .catch(error => res.json({error:error.message}))

})

module.exports = nameRouter;