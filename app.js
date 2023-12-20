const express = require("express");
const app = express();
const createDatabase = require("./database/createDatabase");
const modelSync = require("./models/modelSync");
const userRouter = require("./routers/userRouter.js");

createDatabase().then(() => {
	modelSync();
});

app.use(express.json());
app.use(userRouter);

module.exports = app;
