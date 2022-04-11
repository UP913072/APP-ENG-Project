import express from 'express';
/*import res from 'express/lib/response'; */
import { items } from '../code/partdata.mjs';

const app = express();
app.use(express.static('code'));

app.get('/items', (req, res) => {
  res.json(items);
});

app.listen(8080);
