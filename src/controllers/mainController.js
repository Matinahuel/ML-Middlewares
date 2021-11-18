const fs = require('fs');
const path = require('path');
const toThousand = require('../utils/toThousand');

const {products} = require('../data/productsDb')



const controller = {
	index: (req, res) => {
	return res.render('index',{
		products,
		toThousand
	});
	},
	search: (req, res) => {
		let result = products.filter(product => product.name.toLowerCase().includes(req.query.search.toLowerCase()));
        return res.render('results',{
            result,
            products,
            buscar : req.query.search
        })
	},
};

module.exports = controller;
