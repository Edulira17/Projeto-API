'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.addColumn('users', 'telefone', {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: '(92)'
     }) 

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'telefone');
  }
};
