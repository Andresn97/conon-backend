import { Request, Response } from "express";
import * as stateService from '../../services/shared';


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
    
    const stateCreated = await stateService.create( req.body );
    const { id, reference } = stateCreated;

    res.status(201).json({
      ok: true, 
      state: { id, reference }
    });
  
  } catch (error) {
    res.status(500).json({ 
      ok: false, 
      msg: 'Por favor consulte con el Administrador [State].' 
    });
  }
}

export const updateState = async ( req: Request, res: Response ) => {
  try {
    
    const { id: reqId } = req.params;
    const currentState = await stateService.update( +reqId, req.body );
    const { id, reference, full_name } = currentState; 

    res.json({
      ok: true, 
      state: { id, reference, full_name }
    });

  } catch (error) {
    res.status(500).json({ 
      ok: false, 
      msg: 'Por favor consulte con el Administrador [State].' 
    });
  }
}
