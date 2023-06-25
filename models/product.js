'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsToMany(models.Seller, {
        through: "product_seller",
       
      });
      Product.belongsToMany(models.Order, {
        through: "Order_Product",
        foreignKey:"productId"
      });
      
      Product.belongsToMany(models.Cart, {
        through: "Cart_Product",
        foreignKey:"productId"
      });
      Product.belongsToMany(models.Categories, {
        through: "Product_Categories",
      });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};