import { Router } from "express";

import { userRouter } from "../users";
import { UserPath } from "../../interfaces/users";


export const setUserRoutes = ( userPaths: UserPath, router: Router ) => {
  const { user } = userPaths;
  
  router.use( user, userRouter );
}