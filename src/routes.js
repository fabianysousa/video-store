const express = require('express');

const MovieController = require('./controllers/MovieController');
const ActorController = require('./controllers/ActorController');

// const AddressController = require('./controllers/AddressController');
// const ReportController = require('./controllers/ReportController');

const routes = express.Router();

routes.get('/movies', MovieController.index);
routes.post('/movies', MovieController.store);

routes.post('/movies/:movieId/actors', ActorController.store);
routes.get('/movies/:movieId/actors', ActorController.index);
routes.delete('/movies/:movieId/actors', ActorController.delete);

// routes.post('/users/:userId/addresses', AddressController.store);
// routes.get('/users/:userId/addresses', AddressController.index);

// routes.get('/report', ReportController.show);

module.exports = routes;
