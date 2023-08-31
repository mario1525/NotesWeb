'use strict';

const { CUSTOMER_TABLE, CustomerSchema } = require('../models/customer.models');
const { USER_TABLE, UserSchema } = require('../models/user.models');
const { NOTES_TABLE, NotesSchema } = require('../models/notes.models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(NOTES_TABLE, NotesSchema);
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(CUSTOMER_TABLE);
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(NOTES_TABLE);
  },
};
