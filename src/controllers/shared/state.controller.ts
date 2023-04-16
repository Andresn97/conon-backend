import { Request, Response } from "express";

import { StateService } from "../../services/shared";



const stateService = new StateService();

export const getStates = async ( req: Request, res: Response ) => {
  try {
    
    const states = await stateService.findAll();

    return res.json({
      ok: true,
      states
    });

  } catch (error) {
    console.log(error);
    res.status(500).send({ 
      ok: false, 
      msg: 'Por favor consulte con el Administrador [State].' 
    }); 
  }
}

export const createState = async ( req: Request, res: Response ) => {
  try { 
    
    console.log(req.body);
    
    const stateCreated = await stateService.create( req.body );

    res.json({
      success: true, 
      state: stateCreated
    });
  
  } catch (error) {
    res.status(500).json({ 
      ok: false, 
      msg: 'Por favor consulte con el Administrador [State].' 
    });
  }
}
