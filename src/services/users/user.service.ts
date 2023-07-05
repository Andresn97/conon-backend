import { Model } from "sequelize";

import { User } from "../../models/users";
import { UserAttributes } from "../../interfaces/users";



export class UserService {

  constructor() {}

  // findAll(): Promise< Model<typeof User>[] > {
  //   return User.findAll();
  // }

  // findOne( id: number ): Promise< Model<typeof User > | null> {
  //   return User.findByPk(id);
  // }

  // create( user: UserAttributes ): Promise< Model<typeof User> > {
  //   return User.create( { ...user } );
  // }

}
