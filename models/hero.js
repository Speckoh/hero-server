const mongoose = require('mongoose')

const heroSchema = new mongoose.Schema({
    heroName:{
        type: String,
        required: true
    },
    realName:{
        type: String,
        required: true
    },
    specialAbility:{
        type: String,
        required: true
    }
},{
    timestamps: true
})

const Hero = mongoose.model('Hero', heroSchema)
module.exports = Hero