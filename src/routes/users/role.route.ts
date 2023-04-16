import { Router } from "express";

import { createRole, getRoles } from "../../controllers/users";


const roleRouter = Router();

roleRouter.get('/', getRoles);

roleRouter.post('/', createRole);

roleRouter.put('/:id', createRole);


export { 
  roleRouter 
};