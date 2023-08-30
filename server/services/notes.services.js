const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class NotesService {
  async find() {
    const rta = await models.Note.findAll();
    return rta;
  }

  async findOne(id) {
    const note = await models.Note.findByPk(id);
    if (!note) {
      throw boom.notFound('note not found');
    }
    return note;
  }

  async create(data) {
    const newNotes = await models.Note.create(data);
    return newNotes;
  }

  async update(id, changes) {
    const model = await this.findOne(id);
    const rta = await model.update(changes);
    return rta;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { rta: true };
  }
}

module.exports = NotesService;
