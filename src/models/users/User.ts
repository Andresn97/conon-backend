import { DataTypes, Model, Sequelize } from "sequelize";
import { Role } from "./Role";


export class User extends Model {
  static config( sequelize: Sequelize ) {
    
    return {
      sequelize,
      tableName: 'users',
      modelName: 'User',
      timestamps: true,
    }

  }

  static associate(model: any) {
    // define association here
    // userId
    model.hasMany( this, {
      foreignKey: 'role_id',
      sourceKey: 'id'
    });

    this.belongsTo( Role, {
      foreignKey: 'role_id',
      targetKey: 'id'
    });
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

