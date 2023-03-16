import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [
      {
        id: 0,
        pseudo: "userTest",
        email: "user-0@gmail.com",
        password: "pipou42",
        notes: [],
      },
      {
        id: 1,
        pseudo: "superuser",
        email: "superuser@gmail.com",
        password: "bebou97",
        notes: [],
      },
    ],
    isLogged: false,
    loggedUser: null,
    loginMessageError: "",
    editMessageError: "",
    signupMessageError: "",
  },
  getters: {
    loginMessageError (state) {
      return state.loginMessageError;
    },
    editMessageError (state) {
      return state.editMessageError;
    },
    loggedUserInfos (state) {
      return state.loggedUser;
    },
    signupMessageError (state) {
      return state.signupMessageError;
    },
  },
  mutations: {
    LOGIN (state, user) {
      // empty error message
      state.loginMessageError = "";

      for (let index = 0; index < state.users.length; index++) {
        const userInSate = state.users[index];

        if (userInSate.email === user.email) {

          if (userInSate.password === user.password) {
            state.isLogged = true;
            state.loggedUser = userInSate;
  
            // empty error message
            state.loginMessageError = "";
          } else {
            state.loginMessageError = "Email and/or password incorrect !";
          }
        } else {
          state.loginMessageError = "Email and/or password incorrect !";
        }
      }

      state.loginMessageError = "";
    },

    LOGOUT (state) {
      state.isLogged = false;
      state.loggedUser = [];
    },

    EDIT_USER_INFOS (state, editedUserInfos) {
      // change logged user infos
      state.loggedUser.pseudo = editedUserInfos.pseudo;
      state.loggedUser.email = editedUserInfos.email;

      for (let index = 0; index < state.users.length; index++) {
        const userToEdit = state.users[index];

        // find user to edit in "fake store"
        if (userToEdit.id === editedUserInfos.id) {
          // change user infos in "fake store"
          userToEdit.pseudo = editedUserInfos.pseudo;
          userToEdit.email = editedUserInfos.email;

          // Only if pwd has been changed by user, we change it
          if (editedUserInfos.newPassword) {
            // in fake db
            userToEdit.password = editedUserInfos.newPassword;
            // and in logged user
            state.loggedUser.password = editedUserInfos.newPassword;
          }
        }
      }
    },

    DELETE_PROFILE (state, loggedUser) {
      const deletedProfile = state.users.find(user => user.id === loggedUser.id);

      state.users = state.users.filter(user => user !== deletedProfile);

      state.isLogged = false;
      state.loggedUser = [];
    },

    SIGNUP (state, user) {
      // empty error message
      state.signupMessageError = "";

      for (let index = 0; index < state.users.length; index++) {
        const userInState = state.users[index];

        if (userInState.email === user.email) {
          state.signupMessageError = "Email already used !";
        }
      }

      if (state.signupMessageError === "") {
        // fake an id for this user
        user.id = state.users.length;

        state.loggedUser = user;
        state.isLogged = true;
        state.users.push(user);
      }
    },
  },
  actions: {
    login (context, user) {
      context.commit('LOGIN', user);
    },
    logout (context) {
      context.commit('LOGOUT');
    },
    editUserInfos (context, editedUserInfos) {
      context.commit('EDIT_USER_INFOS', editedUserInfos);
    },
    deleteProfile (context, loggedUser) {
      console.log("deleteProfile - loggedUser", loggedUser);

      context.commit('DELETE_PROFILE', loggedUser);
    },
    signup (context, user) {
      context.commit('SIGNUP', user);
    },
  },
})
