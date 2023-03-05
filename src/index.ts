import express, { Express, Request, Response } from 'express';
//import cors from 'cors';
//import cookieParser from 'cookie-parser';

const PORT = 5000;
const app = express();

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};
start();
