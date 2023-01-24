const mongoose = require('mongoose')

const objectiveSchema = new mongoose.Schema(
	{
		goal: {
			type: String,
			required: true,
		},
        content: {
			type: String,
			required: true,
		},
        player: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Player'
        }
	},
	{
		timestamps: true,
	}
)
//Sub Document, no need for mongoose.model
module.exports = objectiveSchema