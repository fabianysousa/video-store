const express = require('express');

const MovieController = require('./controllers/MovieController');
const ActorController = require('./controllers/ActorController');

const routes = express.Router();

routes.get('/movies', MovieController.index);
routes.post('/movies', MovieController.store);
routes.put('/movies', MovieController.alter);

routes.post('/movies/:movieId/actors', ActorController.store);
routes.get('/movies/:movieId/actors', ActorController.index);
routes.delete('/movies/:movieId/actors', ActorController.delete);

module.exports = routes;
