import { ProductsModel } from "./products.model";

//create product
export const createProduct = async (req, res) => {
	try {
		const payload = req.body; //required = name, category, brand, price, optional = subcategory, discount
		const Product = new ProductsModel(payload);
		const response = await Product.save();
		res.send({ message: "Product successfully created" });
	} catch (err) {
		console.log("Err:", err);
		res.send({ message: "Product creation failed" });
	}
};

//get All Products
export const getAllProducts = async (req, res) => {
	try {
		const products = await ProductsModel.find(); //to retrieve all documents in products collections
		res.status(200).json(products);
	} catch (err) {
		console.log("Err:", err);
		res.status(500).json({ message: "Error occured while fetching products." });
	}
};

//Get Products By Id
export const getProductsById = async (req, res) => {
	const { id } = req.params;

	try {
		const product = await ProductsModel.findById(id);
		if (!product) {
			return res
				.status(404)
				.json({ message: "Product not found with given id" });
		}
	} catch (err) {
		console.log("Error:", err);
		return res
			.status(500)
			.json({ message: "An Error occured while retrieving the product." });
	}
};

//Get Products By Name
export const getProductsByName = async (req, res) => {
	const { name } = req.params;
	try {
		const product = await ProductsModel.findOne({ name: name });
		if (!product) {
			console.log("No product found for this name");
			return res
				.status(404)
				.send({ message: "No product found for this name" });
		}
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			message: "An error occured while retrieving the product with given name.",
		});
	}
};
//Get Products By Category
export const getProductsByCategory = async (req, res) => {
	const { categoryName } = req.params;
	try {
		const product = await ProductsModel.find({ category: categoryName });
		if (!product) {
			console.log("No products found for this category");
			return res
				.status(404)
				.send({ message: "No product found for this category" });
		}
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			message:
				"An error occured while retrieving the products for this category.",
		});
	}
};
