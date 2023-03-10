import express from 'express';
import 'dotenv/config';
import { dbConfig }  from './models/db';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import sequelize from 'sequelize';
import User from './models/user.model';
// import router from './router';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
const userRepository = dbConfig.getRepository(User);

 app.get('/api', async ()=>{
  
  const user: User | null = await userRepository.findOne({where:{name: 1}})
 });

const start = async () => {
  try {
    await dbConfig.authenticate();
    await dbConfig.sync()

    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};
start();
