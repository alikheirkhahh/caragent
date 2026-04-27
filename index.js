const express = require('express');
const app = express();
app.use(express.json());

app.post('/webhook', (req, res) => {
  const update = req.body;
  console.log(update);
  res.sendStatus(200);
});

app.listen(3000);
