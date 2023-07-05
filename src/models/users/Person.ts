import { DataTypes, Model } from "sequelize";

import database from "../../database/connection";
import { PersonAttributes, PersonInput } from "../../interfaces/users/person.interface";



class Person extends Model<PersonAttributes, PersonInput> implements PersonAttributes {
  public id!: number;
  public name!: string;
  public last_name!: string;
  public phone!: string;
  public state_id!: number;
  
  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Person.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(4),
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  state_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize: database,
  modelName: 'State',
  tableName: 'states',
  paranoid: true
});



