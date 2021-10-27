import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING(100),
    allowNull: false
  })
  private username: String;
  
  @Column({
    type: DataType.STRING(20),
    allowNull: false
  })
  private password: String;
}