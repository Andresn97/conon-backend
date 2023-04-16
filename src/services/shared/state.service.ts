import { Model } from "sequelize";

import { State } from "../../models/shared";
import { StateInterface } from "../../interfaces/shared";



export class StateService {

  constructor() {}

  findAll(): Promise< Model<typeof State>[] > {
    return State.findAll();
  }

  create( state: StateInterface ): Promise< Model<typeof State> > {
    console.log('state', state);
    
    return State.create( { ...state } );
  }

}