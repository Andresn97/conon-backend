import { DataTypes, Model } from "sequelize";
import database from "../../database/connection";
import { RoleAttributes, RoleInput } from "../../interfaces/shared/role.interface";


class Role extends Model<RoleAttributes, RoleInput> implements RoleAttributes {
  public id!: number;
  public reference!: string;
  public full_name!: string;
  
  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}


Role.init({
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
  modelName: 'Role',
  tableName: 'roles',
  paranoid: true
});


export default Role;
