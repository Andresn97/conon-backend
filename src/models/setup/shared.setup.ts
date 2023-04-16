import { Sequelize } from "sequelize";

import { State, StateSchema } from "../shared";


const setupSharedModels = ( sequelize: Sequelize ) => {

  State.init( StateSchema, State.config( sequelize ) );

}

export {
  setupSharedModels
}