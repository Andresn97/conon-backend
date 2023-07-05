import { Optional } from "sequelize";
import { Default } from "../../models/shared";


export interface UserAttributes extends Default{
  id: number;
  email: string;
  password: string;
  state_id: number;
}

export interface UserInput extends Optional<UserAttributes, 'id'> {}

// export interface StateOutput extends Required<StateAttributes> {}
export interface UserOutput {
  id: number;
  email: string;
  password: string;
  state_id: number;
}

