import { DataTypes, Model } from "sequelize";
// import { Role } from "./Role";
import { UserAttributes, UserInput } from "../../interfaces/users";
import { State } from "../shared";
import database from "../../database/connection";


export class User extends Model<UserAttributes, UserInput> implements UserAttributes {
  public id!: number;
  public email!: string;
  public password!: string;
  public state_id!: number;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;



  // static associate(model: any) {
  //   // define association here
  //   // userId
  //   model.hasMany( this, {
  //     foreignKey: 'role_id',
  //     sourceKey: 'id'
  //   });

  //   this.belongsTo( Role, {
  //     foreignKey: 'role_id',
  //     targetKey: 'id'
  //   });
  // }
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING(),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  state_id: {
    type: DataTypes.INTEGER,
    references: {
      model: State
    }
  }
}, {
  sequelize: database,
  modelName: 'State',
  tableName: 'states',
  paranoid: true
});

User.belongsTo(State);


// export default User;


// export const UserSchema = {
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   state: {
//     type: DataTypes.ENUM,
//     values: ['']
//   }
// }

