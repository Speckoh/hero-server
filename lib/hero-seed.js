// const express = require('express')
// const router = express.Router()

// const Hero = require('../models/hero')

// const startingHeroes = [
// 	{
// 		heroName: 'Wolverine',
// 		realName: 'James Howlett',
// 		specialAbility: 'Healing Factor'
// 	},
// 	{
// 		firstName: 'Cyclops',
// 		lastName: 'Scott Summers',
// 		specialAbility: 'Optic Blasts'
// 	},
// ]

// router.get('/hero', (req, res, next) => {
//     Hero.deleteMany({})
//         .then(() => {
//             Hero.create(startingHeroes)
//                 .then(Hero => {
//                     res.status(200).json({ heroes: heroes})
//                 })
//                 .catch()
//         })
//         .catch(next)
// })

// module.exports = router