import { Router } from "express";

import { 
  createState, 
  getStates,
  updateState, 
} from "../../controllers/shared";
import { 
  validateCreateState, 
  validateUpdateState 
} from "../../validators/shared/state";



const stateRouter = Router();

stateRouter.get('/', 
  getStates
);

stateRouter.post('/', 
  validateCreateState,
  createState
);

stateRouter.put('/:id',
  validateUpdateState,
  updateState
);


export {
  stateRouter
};