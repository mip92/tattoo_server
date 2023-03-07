import { DataTypes } from 'sequelize';
import { dbConfig } from '../db';

// export interface TokenSchemaAttributes {
//   id: number;
//   refreshToken: string;
// }

export const TokenSchema = dbConfig.define('token', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  refreshToken: { type: DataTypes.STRING, allowNull: false },
});

// export default TokenSchema;
