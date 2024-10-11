const { UserSchema, User } = require('./user.models');
const { CustomerSchema, Customer } = require('./customer.models');
const { NotesSchema, Note } = require('./notes.models');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Note.init(NotesSchema, Note.config(sequelize));

  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Note.associate(sequelize.models);
}

module.exports = setupModels;
