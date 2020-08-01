const { Model, DataTypes } = require('sequelize');

class Actor extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'actors',
      }
    );
  }
  static associate(models) {
    this.belongsToMany(models.Movie, {
      foreignKey: 'actorId',
      through: 'actor_movies',
      as: 'movies',
    });
  }
}

module.exports = Actor;
