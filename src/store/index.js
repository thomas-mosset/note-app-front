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
    islogged : false,
    loggedUser : [],
    loginMessageError : "",
  },
  getters: {
    loginMessageError (state) {
      return state.loginMessageError;
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
            state.islogged = true;
            state.loggedUser.push(user);
  
            // empty error message
            state.loginMessageError = "";
          } else {
            state.loginMessageError = "Email and/or password incorrect !";
          }
        } else {
          state.loginMessageError = "Email and/or password incorrect !";
        }
      }
    }
  },
  actions: {
    login (context, user) {
      context.commit('LOGIN', user);
    }
  },
})
