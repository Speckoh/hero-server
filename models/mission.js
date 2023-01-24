const mongoose = require('mongoose')

const missionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    objectives: [objectiveSchema]
},{
    timestamps: true
})

const Mission = mongoose.model('Mission', missionSchema)
module.exports = Mission