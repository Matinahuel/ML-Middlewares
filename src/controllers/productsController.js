
const {products,saveProduct} = require('../data/productsDb')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
	return res.render('products',{
		products
	});
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let product = products.find(product => product.id === +req.params.id);
		res.render('detail',{
			products,
			product
			
		})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form',{
			products
		})
	},
	
	// Create -  Method to store
	store: (req, res) => {
		const {name,price,discount,category,description} = req.body	
		console.log(req.file)
		let product = { 
		id : products[products.length - 1].id + 1,
		name,
		price : +price,
		discount : +discount,
		description,
		image: req.file.filename,
		category
	}
   products.push(product);

   saveProduct(products)
   return res.redirect('/')

	},

	// Update - Form to edit
	edit: (req, res) => {
	let product = products.find(product => product.id === +req.params.id);
	res.render('product-edit-form',{
			products,
			product
			
		})
	},
	// Update - Method to update
	update: (req, res) => {
		const {name,price,discount,category,description} = req.body	
		let product = products.find(product => product.id === +req.params.id);
		let productEdit = {
			id : +req.params.id,
			name,
			price : +price,
			discount : +discount,
			image : req.file ? req.file.filename : product.image,
			description,
			category
		}  
		
		let productUpdate = products.map(product => product.id === +req.params.id ? productEdit : product)

        saveProduct(productUpdate)
    return res.redirect('/')

          
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let id = req.params.id;

        let productsNew = products.filter(product=>product.id != id);
        saveProduct(productsNew);
       return res.redirect('/');
	}
};

module.exports = controller;