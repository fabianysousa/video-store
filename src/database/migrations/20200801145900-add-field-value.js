'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Movies', 'value', {
      type: Sequelize.FLOAT,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Movies', 'value');
  },
};
