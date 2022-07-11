const mongoose = require("mongoose");

const connectDB = async () => {
	await mongoose
		.connect(process.env.MONGO_URI)
		.then((conn) => {
			console.log(
				`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
			);
		})
		.catch((error) => {
			console.log(
				`Failed to connect to mongodb server due to: ${error.message}`
					.red.bold
			);
			console.log(error);
		});
};

module.exports = connectDB;
