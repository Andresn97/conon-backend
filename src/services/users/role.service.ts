import { Model } from "sequelize";

import { Role } from "../../models/users";
import { RoleInterface } from "../../interfaces/users";



export class RoleService {

  constructor() {}

  findAll(): Promise< Model<typeof Role>[] > {
    return Role.findAll();
  }

  findOne( id: number ): Promise< Model<typeof Role > | null> {
    return Role.findByPk( id );
  }

  create( role: RoleInterface ): Promise< Model<typeof Role> > {
    return Role.create( { ...role } );
  }

  async update( model: Model<typeof Role, typeof Role>, role: any ): Promise< Model<typeof Role> > {
    return await model.update( { ...role } );
  }

}