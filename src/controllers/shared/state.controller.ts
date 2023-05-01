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
    
    console.log(req.body);
    
    const stateCreated = await stateService.create( req.body );
    const { id, reference } = stateCreated;

    res.json({
      success: true, 
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
    
    const { id:reqId } = req.params;
    const currentState = await stateService.update( +reqId, req.body );
    const { id, reference } = currentState; 

    res.json({
      success: true, 
      state: { id, reference }
    });

  } catch (error) {
    res.status(500).json({ 
      ok: false, 
      msg: 'Por favor consulte con el Administrador [State].' 
    });
  }
}
