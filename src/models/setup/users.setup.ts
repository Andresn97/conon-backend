import { Sequelize } from "sequelize";

// import { 
//   // Role, 
//   // RoleSchema, 
//   User, 
//   UserSchema
// } from "../users";



const setupUsersModels = ( sequelize: Sequelize ) => {

  // Role.init( RoleSchema, Role.config( sequelize ) );
  // User.init( UserSchema, User.config( sequelize ) );
  // User.associate( Role );

  // Role.hasMany( User, {
  //   foreignKey: 'role_id',
  //   sourceKey: 'id'
  // });
  
  // User.belongsTo( Role, {
  //   foreignKey: 'role_id',
  //   targetKey: 'id'
  // });

}


// export {
//   setupUsersModels
// }
