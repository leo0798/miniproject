const express = require('express')
const route = express.Router()

route.get('/',  (req, res) => { 
    res.json({
        message:'Schedule flight'
    })
})

const planeRoute = require('./plane')
const scheduleRoute = require('./schedule')
const aiportRoute = require('./airport')
const routeRoute= require('./route') 


route.use('/plane',planeRoute)
route.use('/schedule',scheduleRoute)
route.use('/aiport',aiportRoute)
route.use('/route',routeRoute)


module.exports = route