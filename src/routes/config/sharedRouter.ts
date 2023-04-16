import { Router } from "express";

import { SharedPaths } from "../../interfaces/shared";
import { stateRouter } from "../shared";



export const setSharedRoutes = ( sharedPaths: SharedPaths, router: Router ) => {
  const { state } = sharedPaths;
  
  router.use( state, stateRouter );
}