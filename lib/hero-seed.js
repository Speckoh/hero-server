//BASE STUFF TO MANIPULATE
//Seeding a Database - Reset the Database to Clean Base
const express = require('express')
const router = express.Router()

const Hero = require('../models/hero')

const startingHeroes = [
	{
		heroName: 'Wolverine',
		realName: 'James Howlett',
		specialAbility: 'Healing Factor'
	},
	{
		heroName: 'Cyclops',
		realName: 'Scott Summers',
		specialAbility: 'Optic Blasts'
	},
]

router.get('/heroes', (req, res, next) => {
    Hero.deleteMany({})
        .then(() => {
            Hero.create(startingHeroes)
                .then(heroes => {
                    res.status(200).json({ heroes: heroes})
                })
        })
        .catch(next)
})

module.exports = router