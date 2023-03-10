import { Table, Column, Model, HasMany, HasOne, ForeignKey } from 'sequelize-typescript';
import {DataType} from 'sequelize-typescript';
import User from './user.model';
@Table
class Role extends Model {
  @Column(DataType.TEXT)
  name!: string;
  
  @ForeignKey(() => User)
  @Column
  public userId!: number;
}

export default Role