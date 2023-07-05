import { DataTypes, Model } from "sequelize";

import database from "../../database/connection";
import { StateAttributes, StateInput } from "../../interfaces/shared";
import { User } from "../users/User";



class State extends Model<StateAttributes, StateInput> implements StateAttributes {
  public id!: number;
  public reference!: string;
  public full_name!: string;
  
  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

State.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  reference: {
    type: DataTypes.STRING(4),
    allowNull: false
  },
  full_name: {
    type: DataTypes.STRING(10),
    allowNull: false
  }
}, {
  sequelize: database,
  modelName: 'State',
  tableName: 'states',
  paranoid: true
});

State.hasOne(User);



export default State;

// export class State extends Model {
//   static config( sequelize: Sequelize ) {
//     return {
//       sequelize,
//       tableName: 'states',
//       modelName: 'State',
//       timestamps: true,
//     }
//   }
// }

// export const StateSchema = {
//   reference: {
//     type: DataTypes.STRING(4),
//     allowNull: false
//   },
//   full_name: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// }


