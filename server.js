//command center
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const db = require('./config/db')

const heroRoutes = require('./routes/hero-routes')
const missionRoutes = require('./routes/mission-routes')
const objectiveRoutes = require('./routes/objective-routes')
const playerRoutes = require('./routes/player-routes')

const requestLogger = require('./lib/request-logger')
const heroSeed = require('./lib/hero-seed')

const PORT = 8002
//deprecation warning
mongoose.set('strictQuery', true)

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express()

app.use(cors({origin: `http://127.0.0.1:5500`}))
app.use(requestLogger)
app.use(express.json())
app.use(heroRoutes)
app.use(missionRoutes)
app.use(objectiveRoutes)
app.use(playerRoutes)

//if you pass string, you can pre-name extensions
// /seend/heroes
app.use('/seed', heroSeed)

app.listen(PORT, () => {
    console.log('listening on ' + PORT)
})

module.exports = app