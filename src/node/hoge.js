const express = require('express');
const app = express();
const port = 3523;

app.get('/', (req, res) => {
  res.send('Hello, New World!');
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
