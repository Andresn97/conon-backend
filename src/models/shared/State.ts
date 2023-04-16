import { DataTypes, Model, Sequelize } from "sequelize";



export class State extends Model {
  static config( sequelize: Sequelize ) {
    return {
      sequelize,
      tableName: 'states',
      modelName: 'State',
      timestamps: true,
    }
  }
}

export const StateSchema = {
  reference: {
    type: DataTypes.STRING(4),
    allowNull: false
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}


// export const State = database.define('state', {
//   reference: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   full_name: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// });
