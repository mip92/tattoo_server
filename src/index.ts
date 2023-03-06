import express from 'express';
import dotenv from 'dotenv';
import { dbConfig } from './db';

import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config({
  path: '.env',
});

const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
  res.send('HELLO POSTGRES FF');
});

const start = async () => {
  try {
    await dbConfig.authenticate();

    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};
start();
