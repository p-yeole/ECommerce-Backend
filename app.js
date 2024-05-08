import express from "express";
import { connect } from "mongoose";
import signupRouter from "./src/account/signup/signup.routes.js";
import signinRouter from "./src/account/signin/signin.routes.js";
import productsRouter from "./src/products/products.router.js";

//initializing express app
const app = express();
const port = 3000;

//Connecting with MongoDB using Mongoose
(async () => {
	try {
		await connect("mongodb://127.0.0.1:27017/eCommApp");
		console.log("MongoDB connected!");
	} catch (err) {
		console.log("MongoDB connection error:", err);
	}
})();

//middleware
app.use(express.json());
app.use("/signup", signupRouter);
app.use("/signin", signinRouter);
app.use("/products", productsRouter);
// app.use("/profile", profileRouter);
// app.use("/order", orderRouter);

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
