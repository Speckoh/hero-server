const express = require ('express')
const bcrypt = require('bcrypt')

const Player = require('../models/player')
const { createPlayerToken } = require('../config/auth')

const router = express.Router()

//POST /sign-up
router.post('/sign-up', (req, res, next) => {
    bcrypt
    .hash(req.body.credentials.password, 10)
    .then(hashedPassword => {
        return {
            email: req.body.credentials.email,
            password: hashedPassword
        }
    })
    .then(player => Player.create(player))
    .then(player => {
        res.status(201).json({ player: player})
    })
    .catch(next)
})

//POST /sign-in
router.post('/sign-in', (req, res, next) => {
    Player.findOne({ email: req.body.credentials.email })
    .then(player => createPlayerToken(req, player))
    .then(token => res.json({ token: token }))
    .catch(next)
})

module.exports = router