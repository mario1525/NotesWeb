const express = require('express');
const customerRouter = require('./customer.routes');
const userRouter = require('./user.routes');
const notesRouter = require('./notes.routes');

function routeApi(app) {
  const router = express.Router();

  app.use('/api/v1', router);
  router.use('/customer', customerRouter);
  router.use('/user', userRouter);
  router.use('/notes', notesRouter);
}

module.exports = routeApi;
