//get Orders by customer Id i.e signedIn userId == Get all orders for a specific customer
//get order by orderId
//

import { OrdersModel } from "./orders.model.js";

export const getOrdersByUserId = async (req, res) => {
	const { userId } = req.params;
	try {
		const results = [await orders.find((x) => x.userId === userId)];
		if (results.length() > 0) {
			console.log(results);
			return res.status(200).json(results);
		}
		return res.status(404).send({ message: "No orders found for this user." });
	} catch (err) {
		console.log("Err:", err);
		return res
			.status(500)
			.send({ message: "Error occured during order search" });
	}
};

//get order by transactionId
export const getOrderById = async (req, res) => {
	const { transactionId } = req.params;
	try {
		const results = [
			await orders.find((x) => x.transactionId === transactionId),
		];
		if (results.length() > 0) {
			console.log(results);
			return res.status(200).json(results);
		}
		return res
			.status(404)
			.send({ message: "No orders found for this transactionId." });
	} catch (err) {
		console.log("Err:", err);
		return res
			.status(500)
			.send({ message: "Error while retrieving the order." });
	}
};

// export const getOrdersByUserId = await (req, res) => {
//     const {userId} = req.params;
// 	//current table = orders
// 	const results = await orders.aggregate([
// 		{ $match: {} },
// 		{
// 			$lookup: {
// 				from: "users", //join with users table
// 				let: { customerObjectId: { $toObjectId: "$customerId" } }, //object of customerId is made from orders table
// 				pipeline: [
// 					{
// 						$match: {
// 							$exp: { $eq: ["$userId", "$$customerObjectId"] }, //matching _id from users table and cutomerId from customerObjectId
// 						},
// 					},
// 				],
// 				as: "UserDetails",
// 			},
// 		},
// 		{
// 			$project: {
// 				//formating the output
// 				transactionId: "$_id", //from orders table
// 				productName: { $first: "$UserDetails.userName" }, //from UserDetails written above
// 				customerId: "$customerId", //from orders table
// 				price: "$amount", //from orders table
// 			},
// 		},
// 	]);
// };
