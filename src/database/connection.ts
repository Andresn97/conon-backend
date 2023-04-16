
import { Sequelize } from "sequelize";

import { dbConfig } from "../config/config";
import { setupSharedModels, setupUsersModels } from "../models/setup";


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
    // logging: false  -- production
  } 
);

setupSharedModels( database );
setupUsersModels( database );


export default database;