'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      schedule.hasOne(models.plane)
    }
  }
  schedule.init({
    name: DataTypes.STRING,
    timeArrivePlane: DataTypes.DATE,
    timeDeparturePlane: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'schedule',
  });
  return schedule;
};