const { Model, DataTypes } = require('sequelize');

class Gender extends Model {
  static init(sequelize) {
    super.init(
      {
        gender: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Movie, { foreignKey: 'movieId', as: 'movie' });
  }
}

module.exports = Gender;
