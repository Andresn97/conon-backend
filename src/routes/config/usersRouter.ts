import { Router } from "express";

import { roleRouter, userRouter } from "../users";
import { UserPath } from "../../interfaces/users";


export const setUserRoutes = ( userPaths: UserPath, router: Router ) => {
  const { role, user } = userPaths;
  
  router.use( role, roleRouter );
  router.use( user, userRouter );
}