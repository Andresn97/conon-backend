
import { State } from "../../models/shared";
import { StateOutput } from "../../interfaces/shared";
import { StateInput } from "../../interfaces/shared";


const stateReadReference = [ 'id', 'reference' ]; 

export const findAll = (): Promise<StateOutput[]> => {
  return State.findAll({
    attributes: stateReadReference
  });
}

export const findById = async ( id: number ): Promise<StateOutput> => {
  try {
    
    const state = await State.findByPk(id, {
      attributes: stateReadReference
    });
    if ( !state ) throw new Error('No se encontró el Estado');

    return state;

  } catch (error) {
    throw new Error('Something Wrong [State]');
  }
}

export const create = ( state: StateInput ): Promise<StateOutput> => {
  console.log('state', state);
  
  return State.create( state );
}

export const update = async ( 
  id: number, state: Partial<StateInput> 
): Promise<StateOutput> => {
  try {

    console.log('id', id);
    console.log('state', state);
    
    const currentState = await State.findByPk( id ); 
    if ( !currentState ) throw new Error('No se encontró el Estado');

    return currentState.update( state );
    
  } catch (error) {
    throw new Error('Something Wrong [State]');
  }
}

export const deleteById = async ( id: number ): Promise<boolean> => {
  return !!State.destroy({ where: { id } });
}
