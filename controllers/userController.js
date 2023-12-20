const User = require("../models/userModel");

class userController {
	async getAll(req, res, next) {
		try {
			const response = await User.findAll();
			if (response) {
				res.send(response);
			} else {
				res.send("erro! nada encontrado");
			}
		} catch (err) {
			console.log(err);
		}
	}

	async createUser(req, res, next) {
		try {
			const newUser = {
				name: req.body.name,
				email: req.body.email,
				password: req.body.password,
			};
			const response = await User.create(newUser);
			if (response) {
				res.send(req.body);
			} else {
				next("erro! usuário não cadastrado");
			}
		} catch (err) {
			console.log(err);
		}
	}
}

module.exports = new userController();
