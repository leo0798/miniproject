'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class aiport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  aiport.init({
    name: DataTypes.STRING,
    timeArrivePlane_id: DataTypes.DATE,
    timeDeparturePlane_id: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'aiport',
  });
  return aiport;
};