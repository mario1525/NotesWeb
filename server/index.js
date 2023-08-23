const express = require('express');
const cors = require('cors');

const app = express();
const Port = process.env.PORT || 3000;

app.use(express.json());

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

app.get('/', (req, res) => {
  res.json({
    name: 'hello world',
  });
});

// port
app.listen(Port, () => {
  console.log(`server on portt ${Port}`);
});
