import { Router } from "express";

import { 
  createState, 
  getStates, 
} from "../../controllers/shared";



const stateRouter = Router();

stateRouter.get('/', getStates);

stateRouter.post('/', createState);




export {
  stateRouter
};