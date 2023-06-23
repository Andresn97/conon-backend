import { NextFunction, Request, Response } from "express";
import { body, check } from "express-validator";

import { validateResult } from "../../helpers/getErrorMsg";


export const validateCreateState = [
  check('reference')
    .exists()
    .withMessage('La referencia es obligatoria')
    .isLength({ min: 2, max: 4 })
    .withMessage(
      'La referencia debe tener un mínimo de 2 caracteres y un máximo de 4 caracteres'
    ),
  check('full_name', 'El nombre es obligatorio')
    .exists()
    .isLength({ min: 1, max: 10 })
    .withMessage('El nombre debe tener un mínimo de 1 caracter y un máximo de 10 caracteres'),
  (req: Request, res: Response, next: NextFunction) => {
    validateResult( req, res, next )    
  }
];

export const validateUpdateState = [
  check('reference')
    .if(body('reference').notEmpty())
    .isLength({ min: 2, max: 4 })
    .withMessage(
      'La referencia debe tener un mínimo de 2 caracteres y un máximo de 4 caracteres'
    ),
  check('full_name')
    .if(body('full_name').notEmpty())
    .isLength({ min: 1, max: 10 })
    .withMessage('El nombre debe tener un mínimo de 1 caracter y un máximo de 10 caracteres'),
  (req: Request, res: Response, next: NextFunction) => {
    validateResult( req, res, next )    
  }
];