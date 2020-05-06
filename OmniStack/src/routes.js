const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/ongController')
const IncidentsController = require('./controllers/IncidentsController')
const ProfileController = require('./controllers/PrifileController')
const SessionsController = require('./controllers/SessionController')

routes.get('/ongs', OngController.index)
routes.post('/sessions', SessionsController.create)
routes.post('/ongs', OngController.create)
routes.post('/incidents' , IncidentsController.create)
routes.get('/incidents' , IncidentsController.index)
routes.get('/profile' , ProfileController.index)
routes.delete('/incidents/:id', IncidentsController.delete)

module.exports = routes;