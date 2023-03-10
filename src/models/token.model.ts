import {DataType, ForeignKey} from 'sequelize-typescript';

import { Table, Column, Model } from 'sequelize-typescript';
import User from './user.model';

@Table
class Token extends Model {
  @Column (DataType.TEXT)
  refreshToken!: string;

  @ForeignKey(() => User)
  @Column
  public userId!: number;
}

export default Token
