const Joi = require('joi');

const id = Joi.number().integer();
const title = Joi.string().min(3).max(15);
const message = Joi.string();

const createNoteSchema = Joi.object({
  title: title.required(),
  message: message.required(),
});

const updateNoteSchema = Joi.object({
  title,
  message,
});

const getNotesSchemas = Joi.object({
  id: id.required(),
});

module.exports = {
  createNoteSchema,
  updateNoteSchema,
  getNotesSchemas,
};
