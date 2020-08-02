const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Movie = require('../models/Movie');
const Actor = require('../models/Actor');

const Gender = require('../models/Gender');

const connection = new Sequelize(dbConfig);

Movie.init(connection);
Actor.init(connection);
Gender.init(connection);

Movie.associate(connection.models);
Actor.associate(connection.models);
Gender.associate(connection.models);

module.exports = connection;
