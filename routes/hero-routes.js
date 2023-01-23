const express = require('express')

// const { handle404 } = require('../lib/custom-errors')

const Hero = require('../models/hero')
const router = express.Router()

//INDEX
router.get('/heroes', (req, res, next) => {
    Hero.find()
    .then(heroes => {
        return heroes.map(hero => hero)
    })
    .then(heroes => {
        res.status(200).json({ heroes: heroes })
    })
    .catch(next)
})

//SHOW /GET
//request to get characters :id
router.get('/heroes/:id', (req, res, next) => {
    Hero.findById(req.params.id)
    // .then(handle404)
    .then(hero => {
        res.status(200).json({ hero: hero })
    })
    .catch(next)
})

//CREATE /POST
// //request //response //next is middleware
router.post('/heroes', (req, res, next) => {
    Hero.create(req.body.hero)
    .then(hero => {
        res.status(201).json({ hero: hero })
    })
    .catch(next)
})

// router.delete('/heroes/:id', (req, res, next) => {
//     Hero.findById(req.params.id)
//         .then(handle404)
//         .then(hero => {
//             return hero.deleteOne()
//         })
//         .then(() => res.sendStatus(204))
//         .catch(next)
// })

module.exports = router