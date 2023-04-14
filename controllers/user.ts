import { Request, Response } from "express";



export const getUsers = ( req: Request, res: Response ): Response<object> => {

  return res.json({
    ok: true,
    msg: 'Método Funcionando'
  });

}