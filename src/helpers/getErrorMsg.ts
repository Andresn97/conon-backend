import { NextFunction, Request, Response } from "express";
import { Result } from "express-validator";
const { validationResult } = require('express-validator');


export const validateResult = (
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
  try {
    validationResult(req).throw()
    return next();
  } catch (err: any) {
    res.status(403);
    res.send({ errors: err.array() })
  }
}
