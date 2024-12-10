import { configureStore } from "@reduxjs/toolkit";
import userAuthreducer from "./userSlice";

const store = configureStore({
  /**J’ai déclaré une variable nommée store pour configurer
   * le Redux store, qui va centraliser l’état global.  */
  reducer: {
    userAuth: userAuthreducer,
  },
});

export default store;
