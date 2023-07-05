import { Optional } from "sequelize";

 
export interface RoleAttributes {
  id: number;
  reference: string;
  full_name: string;
} 

export interface RoleInput extends Optional<RoleAttributes, 'id'> {}

export interface RoleOutput {
  id: number;
  reference: string;
  full_name: string;
}