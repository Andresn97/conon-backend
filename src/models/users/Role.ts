import { DataTypes, Model, Sequelize } from "sequelize";
import database from "../../database/connection";


export class Role extends Model {
  static config( sequelize: Sequelize ) {
    return {
      sequelize,
      tableName: 'roles',
      modelName: 'Role',
      timestamps: true,
    }
  }
}


export const RoleSchema = {
  reference: {
    type: DataTypes.STRING(4),
    allowNull: false
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}


// const Role = database.define('Role', {
//   reference: {
//     type: DataTypes.STRING(4),
//     allowNull: false
//   },
//   full_name: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// });

// export default Role;
