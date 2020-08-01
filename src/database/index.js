const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Movie = require('../models/Movie');
const Actor = require('../models/Actor');

// const Address = require('../models/Address');

const connection = new Sequelize(dbConfig);

Movie.init(connection);
Actor.init(connection);
// Tech.init(connection);

Movie.associate(connection.models);
Actor.associate(connection.models);

// Address.associate(connection.models);

module.exports = connection;
