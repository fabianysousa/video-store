const { Model, DataTypes } = require('sequelize');

class Movie extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        value: DataTypes.FLOAT,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    // this.hasMany(models.Address, { foreignKey: 'userId', as: 'addresses' });

    this.belongsToMany(models.Actor, {
      foreignKey: 'movieId',
      through: 'actor_movies',
      as: 'actors',
    });
  }
}

module.exports = Movie;
