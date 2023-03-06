import express from 'express';
import dotenv from 'dotenv';

import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config({
  path: `.env`,
});
console.log(process.env.PORT);
const PORT = process.env.PORT || 5000;
const app = express();

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};
start();
