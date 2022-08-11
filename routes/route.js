const {Router} = require('express')
const routeRoute = Router()
const {RouteController} = require('../Controller')


routeRoute.get('/', RouteController.listroute)
routeRoute.get('/create', RouteController.createroute)
routeRoute.post('/create', RouteController.create)




module.exports = routeRoute