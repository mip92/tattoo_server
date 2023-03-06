import express from 'express';
import 'dotenv/config';
import router from './routes';
import dbConfig from './db';

// import cors from 'cors';
// import cookieParser from 'cookie-parser';

const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
  res.send('HELLO POSTGRES FF');
});

app.get('/api', router);

const start = async () => {
  try {
    await dbConfig.authenticate();

    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};
start();
