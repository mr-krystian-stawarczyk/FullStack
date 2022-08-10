const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
	name: {
		type: String,
	},
	description: {
		type: String,
	},

	status: {
		type: String,
		enum: ["Not Started", "In Progress", "Completed", "New"],
	},

	clientId: { type: Schema.Types.ObjectId, ref: "Client" },
});
module.exports = mongoose.model("Project", ProjectSchema);
