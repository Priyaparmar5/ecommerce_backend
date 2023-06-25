'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
   
    static associate(models) {
      // define association here
      Cart.belongsTo(models.Customer,{foreignKey:'customerId'})
      Cart.belongsToMany(models.Product, {
        through: "Cart_Product",
        foreignKey:"cartId"
      });
    }
  }
  Cart.init({
    customerId: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};