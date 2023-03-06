const { Sequelize } = require('sequelize');
// import { Sequelize } from 'sequelize-typescript';

const options = {
  database: process.env.DB_NAME as string,
  username: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD,
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialectOptions: {},
};

const dbConfig = new Sequelize(options);
export default dbConfig;

// export default dbConfig;
