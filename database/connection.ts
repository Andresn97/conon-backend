
import { Sequelize } from "sequelize";

import { dbConfig } from "../config/config";



const { 
  dbName, 
  dbUser, 
  dbPassword, 
  dbHost
} = dbConfig

const database = new Sequelize(
  dbName || '', 
  dbUser || '', 
  dbPassword,
  {
    host: dbHost,
    dialect: 'postgres',
    // logging: false   
  } 
);


export default database;