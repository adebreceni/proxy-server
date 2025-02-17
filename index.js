const proxy = require('express-http-propxy');
const express = require('express');

const app = express();

const PORT = 11234;

app.use('/', proxy('192.168.100.143:15621'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
