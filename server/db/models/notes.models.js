const { Model, DataTypes, Sequelize } = require('sequelize');

const { CUSTOMER_TABLE } = require('./customer.models');

const NOTES_MODEL = 'notes';

const NotesSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  message: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  customerId: {
    field: 'customer_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CUSTOMER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
};

class Note extends Model {
  static associate(models) {
    this.belongsTo(models.customer, { as: 'customer' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: NOTES_MODEL,
      modelName: 'Note',
      timestamps: false,
    };
  }
}

module.exports = { Note, NotesSchema, NOTES_MODEL };
