const sequelize = require("../database/connection");
const dataTypes = require("sequelize");

const User = sequelize.define("User", {
	id: {
		type: dataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	name: {
		type: dataTypes.STRING(100),
		allowNull: false,
	},
	password: {
		type: dataTypes.STRING(100),
		allowNull: false,
	},
	email: {
		type: dataTypes.STRING(100),
		allowNull: false,
		unique: true,
	},
});

module.exports = User;
