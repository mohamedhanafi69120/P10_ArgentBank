import { configureStore } from "@reduxjs/toolkit";
import userAuthreducer from "./userSlice";

const store = configureStore({ 
  /***configurer le store un magasin pour stocker mes donnee  */
  
  /**J’ai déclaré une variable nommée store pour configurer
   * le Redux store, qui va centraliser l’état global.  */
  reducer: {
    userAuth: userAuthreducer,
  },
});

export default store;
