const express = require('express');
const cors = require('cors');

const RouteApi = require('./routes/index');

const app = express();
const Port = process.env.PORT || 3000;

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');

app.use(express.json());

app.use(logErrors);
app.use(errorHandler);
app.use(boomErrorHandler);

// cors
const whiteList = ['https//:localhost:3000'];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  },
};
app.use(cors(options));

RouteApi(app);

app.get('/', (req, res) => {
  res.json({
    name: 'hello world',
  });
});

// port
app.listen(Port, () => {
  console.log(`server on portt ${Port}`);
});
