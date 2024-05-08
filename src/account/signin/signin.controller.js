import jwt from "jsonwebtoken";

const profile = {
	id: "03",
	email: "pratikyeole@gmail.com",
	password: "12345",
	name: "Pratik",
	city: "Pune",
	state: "Maharashtra",
};

export const signinUser = (req, res) => {
	const { email, password } = req.body;
	if (email !== profile.email || password !== profile.password) {
		return res.status(401).send({ data: {}, message: "Invalid Credentials!" });
	}

	const userToken = jwt.sign({ id: profile.id }, "Pratik");
	//Issuing a token
	return res.status(200).send({
		data: {
			token: userToken,
		},
		meta: { message: "Login Successfull!" },
	});
};
