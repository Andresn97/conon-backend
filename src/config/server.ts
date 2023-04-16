import express, { Application, Router } from 'express';
import cors from 'cors';

import { dbConfig } from './config';
import database from '../database/connection';
import { getSharedPaths, getUsersPaths } from '../helpers';
import { setUserRoutes } from '../routes/config';
import { setSharedRoutes } from '../routes/config/sharedRouter';



class Server {

  private app: Application;
  private port: string;
  private router: Router;
  private routes = {
    users: getUsersPaths(),
    shared: getSharedPaths(),
  }

  constructor() {
    this.app = express();
    this.port = dbConfig.port.toString();
    
    this.dbConnection();
    this.middlewares();
    this.router = Router();
    this.setRoutes();
  }

  listen(): void {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en el puerto ' + this.port);
    });
  }

  setRoutes(): void {

    this.app.use('/api/v1', this.router); 
    setSharedRoutes( this.routes.shared, this.router );
    setUserRoutes( this.routes.users, this.router );
  
  }

  middlewares(): void {

    //Initialize CORS
    this.app.use( cors() );

    // Read body
    this.app.use( express.json() );

    //Set Public Folder
    this.app.use( express.static('public') );

  }

  async dbConnection() {
    try {

      await database.authenticate();
      console.log('Database Online');
      console.log('models',database.models);
      await database.sync({ force: true }); //force false en prod
      
    } catch (error) {
      throw new Error('Ocurrió el siguiente error ' + error);
    }
  }

}

export default Server;