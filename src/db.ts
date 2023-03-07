// import { UserSchema } from './models/user.model';
// import { TokenSchema } from './models/token.model';
import { DataTypes, Options, Sequelize } from 'sequelize';

const options: Options = {
  database: process.env.DB_NAME as string,
  username: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD,
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialectOptions: {},
};

export const dbConfig = new Sequelize(options);

export const UserSchema = dbConfig.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: 'USER' },
  name: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
  instagram: { type: DataTypes.STRING },
});

export const TokenSchema = dbConfig.define('token', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  refreshToken: { type: DataTypes.STRING, allowNull: false },
});

UserSchema.hasMany(TokenSchema);
TokenSchema.belongsTo(UserSchema);
