import { Optional } from "sequelize";


export interface PersonAttributes {
  id: number;
  name: string;
  last_name: string;
  phone: string;
  state_id: number; 
}

export interface PersonInput extends Optional<PersonAttributes, 'id'> {}

export interface PersonOutput {
  id: number;
  name: string;
  last_name: string;
}