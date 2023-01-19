const express = require('express')

const Hero = require('../models/hero')
const router = express.Router()

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

router.get('/heroes/:id', (req, res, next) => {
    Hero.findById(req.params.id)
    .then(hero => {
        res.status(200).json({ hero: hero })
    })
    .catch(next)
})

//request //response //next is middleware
router.post('/heroes', (req, res, next) =>{
    Hero.create(req.body.hero)
        .then(hero => {
            res.status(201).json({ hero: hero })
        })
        .catch(next)
})

module.exports = router