import { createSlice } from "@reduxjs/toolkit";

/////////////creation de l'etat initial///////////////////
const initialState = {
  // Indique si l'utilisateur est connecté ou pas.
  isConnected: false,
  token: null,
  loading: false,
  errors: null,
  user: null,
};

///////////////creation du slice qui gere l'authentification de l'utilisateur ///////////////////////

const userAuth = createSlice({
  name: "userAuth" /**Le nom du slice, utilisé pour identifier cette partie de l’état global et les actions associées. */,
  initialState,
  reducers: {
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
    /***etUserData Met à jour les données utilisateur (nom, prénom, pseudo) dans state.user.
     Les données sont reçues depuis l’API et transmises via action.payload.*/

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
    /***Appelée lorsque l’utilisateur se déconnecte.
   Réinitialise toutes les propriétés de l’état utilisateur.*/

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

/**J’ai exporté les actions générées automatiquement par createSlice.
Ces actions sont utilisées pour déclencher les reducers correspondants. */
