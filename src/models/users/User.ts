import { DataTypes, Model, Sequelize } from "sequelize";


export class User extends Model {
  static config( sequelize: Sequelize ) {
    return {
      sequelize,
      tableName: 'users',
      modelName: 'User',
      timestamps: true,
    }
  }
}


export const UserSchema = {
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  state: {
    type: DataTypes.ENUM,
    values: ['']
  }
}

