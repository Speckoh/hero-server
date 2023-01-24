const express = require('express')

const { handle404 } = require('../lib/custom-errors')
//Mission is the ENTITY
const Mission = require('../models/mission')
const router = express.Router()

//INDEX
router.get('/missions', (req, res, next) => {
    Mission.find()
    .then(missions => {
        return missions.map(mission => mission)
    })
    .then(missions => {
        res.status(200).json({ missions: missions })
    })
    .catch(next)
})

//SHOW - GET
router.get('/missions/:id', (req, res, next) => {
    Mission.findById(req.params.id)
    //Handle404 Insert Below findById
    .then(handle404)
    .then(mission => {
        res.status(200).json({ mission: mission })
    })
    .catch(next)
})

//CREATE - POST
router.post('/missions', (req, res, next) => {
    Mission.create(req.body.mission)
    .then(mission => {
        res.status(201).json({ mission: mission })
    })
    .catch(next)
})

//UPDATE - PATCH
router.patch('/missions/:id', (req, res, next) => {
    Mission.findById(req.params.id)
    .then(mission => {
        return mission.updateOne(req.body.mission)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

//DELETE
router.delete('/missions/:id', (req, res, next) => {
    Mission.findById(req.params.id)
    //Handle404 Insert Below findById
    .then(handle404)
    .then(mission => {
        return mission.deleteOne()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router