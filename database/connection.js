const {Sequelize} = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
	"Login_jwt",
	process.env.DB_USERNAME,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		dialect: "mysql",
	},
);

async function testConnection() {
	try {
		await sequelize.authenticate();
		console.log("conectado no mySql");
	} catch (err) {
		console.log(err);
	}
}

testConnection();

module.exports = sequelize;
