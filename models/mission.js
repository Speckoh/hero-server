const mongoose = require('mongoose')
const objectiveSchema = require('./objective')

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