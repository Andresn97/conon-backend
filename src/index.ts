import dotenv from 'dotenv';
import Server from './config/server';

//Config dotenv
dotenv.config();


const server = new Server();

server.listen();
