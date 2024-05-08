import { Schema, model } from "mongoose";

const productSchema = Schema(
	{
		productName: { type: String, required: true },
		category: { type: String, required: true }, //cosmetics, fashion, groceries, shoes
		subcategory: { type: String }, //face care, hair care, tshirts, jeans, trousers, sportswear, etc
		brand: { type: String, required: true },
		price: { type: Number, required: true },
		inStock: { type: Boolean, default: true }, // Optional in-stock flag
		discount: { type: Number }, //in Percentage
	},
	{ timestamps: true }
);

export const ProductsModel = model("products", productSchema);
