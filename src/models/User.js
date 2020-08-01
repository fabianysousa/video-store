const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        age: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Address, { foreignKey: 'userId', as: 'addresses' });

    this.belongsToMany(models.Tech, {
      foreignKey: 'userId',
      through: 'user_techs',
      as: 'techs',
    });
  }
}

module.exports = User;
