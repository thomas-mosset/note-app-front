import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [
      {
        id: 0,
        pseudo: "userTest",
        email: "user-0@gmail.com",
        password: "pipou42",
        notes: [
          {
            id: 0,
            title: 'First note',
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, facilis.',
            author: 'userTest',
            statut: false, // not archived
            category: null,
            creationDate: "2023-03-14",
            updatedDate: null,
          },
          {
            id: 1,
            title: 'Random note',
            content: 'iet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel',
            author: 'userTest',
            statut: true, // archived
            category: "Medical",
            creationDate: "2023-03-16",
            updatedDate: null,
          }
        ],
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

    ADD_A_NOTE (state, note) {
      state.loggedUser.notes.push(note);
    },

    DELETE_A_NOTE (state, receivedNote) {
      const deletedNote = state.loggedUser.notes.find(note => note.id === receivedNote.id);

      state.loggedUser.notes = state.loggedUser.notes.filter(note => note !== deletedNote);
    },

    ARCHIVE_A_NOTE (state, receivedNote) {
      const noteToArchived = state.loggedUser.notes.find(note => note.id === receivedNote.id);

      noteToArchived.statut = !noteToArchived.statut;
    },

    EDIT_A_NOTE (state, receivedNote) {
      const noteToEdit = state.loggedUser.notes.find(note => note.id === receivedNote.id);

      // change user infos in "fake store"
      noteToEdit.title = receivedNote.title;
      noteToEdit.content = receivedNote.content;
      noteToEdit.category = receivedNote.category;
      noteToEdit.updatedDate = receivedNote.updatedDate;
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
      context.commit('DELETE_PROFILE', loggedUser);
    },
    signup (context, user) {
      context.commit('SIGNUP', user);
    },
    addANote (context, note) {
      context.commit('ADD_A_NOTE', note);
    },
    deleteANote (context, note) {
      context.commit('DELETE_A_NOTE', note);
    },
    archiveANote (context, note) {
      context.commit('ARCHIVE_A_NOTE', note);
    },
    editANote (context, note) {
      context.commit('EDIT_A_NOTE', note);
    },
  },
})
