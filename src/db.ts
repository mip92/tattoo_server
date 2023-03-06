const { Sequelize } = require('sequelize');
// import { Sequelize } from 'sequelize-typescript';

const options = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
};

export const dbConfig = new Sequelize(options);
