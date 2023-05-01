import { Optional } from "sequelize";


export interface StateAttributes {
  id: number;
  reference: string;
  full_name: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface StateInput extends Optional<StateAttributes, 'id'> {}

// export interface StateOutput extends Required<StateAttributes> {}
export interface StateOutput {
  id: number;
  reference: string;
}