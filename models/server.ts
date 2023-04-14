import express, { Application } from 'express';
import cors from 'cors';


import userRoutes from '../routes/user';
import { dbConfig } from '../config/config';
import database from '../database/connection';



class Server {

  private app: Application;
  private port: string;
  private routes = {
    users: '/api/users'
  }

  constructor() {
    this.app = express();
    this.port = dbConfig.port.toString();

    this.dbConnection();
    this.setRoutes();
    this.middlewares();
  }

  listen(): void {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en el puerto ' + this.port);
    });
  }

  setRoutes(): void {
    this.app.use( this.routes.users,  userRoutes);
  }

  middlewares(): void {

    //Initialize CORS
    this.app.use( cors() );

    //Set Public Folder
    this.app.use( express.static('public') );

  }

  async dbConnection() {
    try {

      await database.authenticate();
      console.log('Database Online');
      

    } catch (error) {
      throw new Error('Ocurrió el siguiente error ' + error);
    }
  }

}

export default Server;