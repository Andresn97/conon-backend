import { Router } from "express";

import { SharedPaths } from "../../interfaces/shared";
import { stateRouter, roleRouter } from "../shared";



export const setSharedRoutes = ( sharedPaths: SharedPaths, router: Router ) => {
  const { state, role } = sharedPaths;
  
  router.use( state, stateRouter );
  router.use( role, roleRouter );
}