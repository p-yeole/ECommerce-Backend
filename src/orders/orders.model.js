import { Schema, model } from "mongoose";

const orderSchema = Schema(
	{
		transactionId: { type: String, required: true },
		customerId: { type: String, required: true },
		products: [
			{
				productId: { type: String, required: true },
				quantity: { type: Number, required: true },
				price: { type: Number, required: true },
			},
		],
		deliveryAddress: {
			address: { type: String, required: true },
			city: { type: String, required: true },
			state: { type: String, required: true },
			country: { type: String, required: true },
			pincode: { type: number, required: true },
		},
	},
	{ timestamps: true }
);

export const OrdersModel = model("orders", orderSchema);
