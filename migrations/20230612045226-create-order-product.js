'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Order_Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderId: {
        type: Sequelize.INTEGER,
        references:{model:"Orders",key:"id"}
      },
      productId: {
        type: Sequelize.INTEGER,
        references:{model:"Products",key:"id"}
      },
      name: {
        type: Sequelize.STRING,
        //references:{model:"Products",key:"id"}
      },
      price: {
        type: Sequelize.STRING,
        //references:{model:"Products",key:"id"}
      },
      quantity: {
        type: Sequelize.STRING,
        //references:{model:"Products",key:"id"}
      },
      imageUrl: {
        type: Sequelize.STRING,
        //references:{model:"Products",key:"id"}
      },
      addressId: {
        type: Sequelize.INTEGER,
        references:{model:"Addresses",key:"id"}
      },
      deletedAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Order_Products');
  }
};