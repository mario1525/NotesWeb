const boom = require('@hapi/boom');
// const bcrypt = require('bcrypt');

const { models } = require('../libs/sequelize');

class UserService {
  async find() {
    const rta = await models.User.findAll({
      include: ['customer'],
    });
    return rta;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async finByEmail(email) {
    const user = await this.findOne({
      where: [email],
    });
    return user;
  }

  async create(data) {
    // const hash = await bcrypt.hash(data.password, 10);
    // const newUser = await models.User.create({
    //   ...data,
    //   password: hash,
    // });
    // delete newUser.dataValues.password;
    const newUser = await models.User.create();
    return newUser;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;
