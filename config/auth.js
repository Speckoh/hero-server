const passport = require('passport')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET || 'some string value only your app knows'
const { Strategy, ExtractJwt } = require('passport-jwt')

const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: secret,
}
const Player = require('../models/player')
const strategy = new Strategy(opts, function (jwt_payload, done) {
	Player.findById(jwt_payload.id)
		.then((player) => done(null, player))
		.catch((err) => done(err))
})

passport.use(strategy)

passport.initialize()

const requireToken = passport.authenticate('jwt', { session: false })

const createPlayerToken = (req, player) => {
	if (
		!player ||
		!req.body.credentials.password ||
		!bcrypt.compareSync(req.body.credentials.password, player.password)
	) {
		const err = new Error('The player or password is incorrect')
		err.statusCode = 422
		throw err
	}
	return jwt.sign({ id: player._id }, secret, { expiresIn: 36000 })
}

module.exports = {
	requireToken,
	createPlayerToken,
}
