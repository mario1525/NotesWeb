const express = require('express');

function routeApi(app) {
  const router = express.Router();

  app.use('/api/v1', router);
}
