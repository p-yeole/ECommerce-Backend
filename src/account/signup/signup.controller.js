import { UserModel } from "./signup.model.js";

export const signupUser = async (req, res) => {
	try {
		const payload = req.body;
		const User = new UserModel(payload);
		const response = await User.save();
		res.send({ message: "User signup successfull!!" });
	} catch (err) {
		console.log("Err:", err);
		res.send({ message: "User signup failed" });
	}
};
