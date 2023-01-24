const express = require('express')

const { handle404 } = require('../lib/custom-errors')
const { requireToken } = require( '../config/auth')
const Mission = require('../models/mission')

const router = express.Router()

//CREATE - POST
router.post('/objectives', requireToken, (req, res, next) => {
    const missionId = req.body.objective.missionId
    console.log(req.user)
    const objective = req.body.objective 
    objective.owner = req.user._id

    Campaign.findById(missionId)
    .then(handle404)
    .then(mission => {
        mission.objectives.push(objective)
        return mission.save()
    })
    .then(mission => {
        res.sendStatus(201).json({ mission: mission })
    })
	.catch(next)
})
//UPDATE PATCH /objectives/:id
router.patch('/objectives/:objectiveId', (req, res, next) => {
    const missionId = req.body.objective.missionId
    const objectiveBody = req.body.objective
	Campaign.findById(missionId)
        .then(handle404)
		.then((mission) => {
			const objective = mission.objectives.id(req.params.objectiveId)
            objective.set(objectiveBody)
            return mission.save()
		})
		.then(() => res.sendStatus(204))
		.catch(next)
})
//DELETE
router.delete('/objectives/:objectiveId', (req, res, next) => {
    const missionId = req.body.objective.missionId

    Campaign.findById(missionId)
        .then(handle404)
        .then(mission => {
            mission.objectives.id(req.params.objectiveId).remove()
            mission.save()
        })
        .then(() => res.sendStatus(204))
		.catch(next)
})
module.exports = router