'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.hasOne(models.Cart,{foreignKey:'customerId'})
      Customer.hasMany(models.Address,{foreignKey:'customerId'});
      Customer.hasMany(models.Order, {
        foreignKey: 'customerId',
       
      });
      // Customer.belongsToMany(models.Product, {
      //   through: "Order_Product",
      // });
    }
  }
  Customer.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    contact: DataTypes.STRING,
    gender: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};