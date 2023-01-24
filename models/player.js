const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		token: String,
	},
	{
		timestamps: true,
		toJSON: {
			transform: (_doc, player) => {
				delete player.password
				return player
			},
		},
	}
)

module.exports = mongoose.model('Player', playerSchema)