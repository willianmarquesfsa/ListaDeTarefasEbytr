'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tarefas',
    [{
      id: 1,
      name: 'Lewis Hamilton',
      describe: 'describe',
      status: 'lewishamilton@gmail.com',
      dataDaSolicitacao: '1988-03-21',      
    },
    {
      id: 2,
      name: 'Lewis Hamiltonnnn',
      describe: 'describe',
      status: 'lewishamilton@gmail.com',
      dataDaSolicitacao: '1988-03-21',      
    },
    ], { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
