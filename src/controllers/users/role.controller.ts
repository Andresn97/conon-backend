import { Request, Response } from "express";

import { RoleService } from "../../services/users";



const roleService = new RoleService();

export const getRoles = async ( req: Request, res: Response ) => {
  try {
    
    const roles = await roleService.findAll();

    return res.json({
      ok: true,
      roles
    });

  } catch (error) {
    console.log(error);
    res.status(500).send({ 
      ok: false, 
      msg: 'Por favor consulte con el Administrador [Role].' 
    }); 
  }
}

export const createRole = async ( req: Request, res: Response ) => {
  try { 
    
    const stateCreated = await roleService.create( req.body );

    res.status(201).json({
      success: true, 
      state: stateCreated
    });
  
  } catch (error) {
    res.status(500).json({ 
      ok: false, 
      msg: 'Por favor consulte con el Administrador [Role].' 
    });
  }
}

export const updateRole = async ( req: Request, res: Response ) => {
  try {
    
    const { id } = req.params;
    if ( !id ) {
      return res.status(400).json({
        ok: false,
        msg: 'No se envió la referencia del Rol'
      });
    }

    const currentState = await roleService.findOne( +id );
    if ( !currentState ) {
      return res.status(400).json({
        ok: false,
        msg: 'No se encontró la referencia del Rol'
      });
    }

    const updateResponse = roleService.update( currentState, req.body );
    res.json({
      ok: true,
      role: updateResponse
    });

  } catch (error) {
    res.status(500).json({ 
      ok: false, 
      msg: 'Por favor consulte con el Administrador [Role].' 
    });
  }
}