
import { Role } from "../../models/shared";
import { RoleInput, RoleOutput } from "../../interfaces/shared";


const roleReadReference = [ 'id', 'reference', 'full_name' ]; 
const roleFullReadReference = [ 
  'id', 
  'reference', 
  'full_name',
  'createdAt',
  'updatedAt'
]; 

export const findAll = (): Promise<RoleOutput[]> => {
  return Role.findAll({
    attributes: roleFullReadReference
  });
}

export const findById = async ( id: number ): Promise<RoleOutput> => {
  try {
    
    const role = await Role.findByPk(id, {
      attributes: roleReadReference
    });
    if ( !role ) throw new Error('No se encontró el Estado');

    return role;

  } catch (error) {
    throw new Error('Something Wrong [State]');
  }
}

export const create = ( state: RoleInput ): Promise<RoleOutput> => {
  console.log('state', state);
  
  return Role.create( state );
}

export const update = async ( 
  id: number, state: Partial<RoleInput> 
): Promise<RoleOutput> => {
  try {

    console.log('id', id);
    console.log('state', state);
    
    const currentState = await Role.findByPk( id ); 
    if ( !currentState ) throw new Error('No se encontró el Estado');

    return currentState.update( state );
    
  } catch (error) {
    throw new Error('Something Wrong [State]');
  }
}

export const deleteById = async ( id: number ): Promise<boolean> => {
  return !!Role.destroy({ where: { id } });
}
