import express from 'express';

import { items } from '../code/data.mjs';

const app = express();
app.use(express.static('code'));

app.get('/items', (req, res) => {
  res.json(items);
});

app.listen(8080);
