'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      
      queryInterface.addColumn(
        'Orders',
        'addressId',
        {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: { model: 'Addresses', key: 'id' }
        },
      ),
    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
     
      queryInterface.removeColumn('Orders', 'addressId'),
    ]);
  }
};
