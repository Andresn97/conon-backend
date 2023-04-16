import { Sequelize } from "sequelize";

import { 
  Role, RoleSchema, 
  User, UserSchema 
} from "../users";



const setupUsersModels = ( sequelize: Sequelize ) => {

  Role.init( RoleSchema, Role.config( sequelize ) );
  // User.init( UserSchema, User.config( sequelize ) );

}

export {
  setupUsersModels
}
