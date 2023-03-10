import { Table, Column, Model, HasMany, HasOne, IsDate } from 'sequelize-typescript';
import Role from './role.model ';
import Token from './token.model';
import {DataType} from 'sequelize-typescript';
import { Optional } from 'sequelize';

interface UserAttributes {
  id: number;
  name: string;
  birthday: Date;
  email: string;
  password: string;
  phone: string;
  instagram: string;
  role: Role;
  tokem: Token[];
  azaza: number
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

@Table
class User extends Model<UserAttributes, UserCreationAttributes> {
  @Column(DataType.TEXT)
  name!: string;
  
  @Column(DataType.TEXT)
  email!: string;

  @Column(DataType.TEXT)
  password!: string;
  
  @Column(DataType.TEXT)
  phone!: string;

  @Column(DataType.TEXT)
  instagram!: string;

  @HasOne(() => Role)
  role!: Role;

  @HasMany(() => Token)
  tokem!: Token[]
}

export default User