import { createSlice } from "@reduxjs/toolkit";

/////////////creation de l'etat initial///////////////////

const initialState = {
  // Indique si l'utilisateur est connecté ou non.
  isConnected: false,
  token: null,
  loading: false,
  errors: null,
  user: null,
};

///////////////creation du slice qui gere l'authentification de l'utilisateur ///////////////////////

const userAuth = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    //////////////lance le processus de connexion , a ce moment la nous somme en attente de connexion et aucune donnee n'es stocké//////////////////
    startLogin(state, action) {
      state.loading = true;
      state.errors = null;
    },

    ///////////////////////////la connexion est reussi, le token est stocké dans le store est aucun messages d'erreus n'es retourner ////////////////////
    succesLogin(state, action) {
      state.isConnected = true;
      state.token = action.payload;
      state.loading = false;
    },

    /////////////////////////////récuperation est stockage des donnee utilisateurs /////////////////////////////////////////////////
    setUserData(state, action) {
      state.user = action.payload;
    },

    //////////////////la connexion echoue le token n'es pas stocker et un message d'erreurs est envoyer //////////////////////////////////////////
    loginFailed(state, action) {
      state.errors = action.payload;
      state.loading = false;
      state.token = null;
      state.user = null;
    },

    ////////////////////////////////si l'utilisateur est deconneter on renitiale l'etat a zéro ///////////////////////

    logOut(state) {
      state.isConnected = false;
      state.token = null;
      state.user = null;
      state.errors = null;
    },
  },
});

export const { startLogin, succesLogin, setUserData, loginFailed, logOut } =
  userAuth.actions;

export default userAuth.reducer;
