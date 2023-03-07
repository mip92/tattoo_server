import { DataTypes, Sequelize } from 'sequelize';
import { dbConfig } from '../db';

// export interface UserSchemaAttributes {
//   id: number;
//   email: string;
//   password: string;
//   role: string;
//   name: string;
//   phone: string;
//   instagram: string;
// }

export const UserSchema = dbConfig.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: 'USER' },
  name: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
  instagram: { type: DataTypes.STRING },
});

// export default UserSchema;
