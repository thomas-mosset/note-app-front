<!-- eslint-disable no-useless-escape -->
<template>
  <v-form 
    v-model="valid"
    @submit.prevent="submitEditUserInfos(editedUserInfos)"
    ref="form"
    class="my-14"
  >
      <v-row class="text-h4 ma-10 d-flex justify-center">
        Edit your informations
      </v-row>

      <v-row class="ma-8 d-flex justify-center">
        <v-col
          cols="8"
        >
          <v-text-field
            v-model="editedUserInfos.pseudo"
            label="Pseudo"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="8"
        >
          <v-text-field
            v-model="editedUserInfos.email"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="8"
          class="mt-16"
        >
          To change your password, email address or pseudo, you must enter your current password.
        </v-col>

        <v-col
          cols="8"
        >
          <v-text-field
            v-model="editedUserInfos.currentPassword"
            label="Current Password"
            id="currentPassword"
            required
            :append-icon="toggleCurrentPwdState ?'mdi-eye-off':'mdi-eye'"
            :type="toggleCurrentPwdState ? 'text' : 'password'"
            @click:append="toggleCurrentPwdState = !toggleCurrentPwdState"
          >
          </v-text-field>
        </v-col>

        <v-col
          cols="8"
        >
        <p class="pb-2">Your new password must contain a minimum of 8 characters, and at least 1 letter, 1 number and 1 special character.</p>
          <v-text-field
            v-model="editedUserInfos.newPassword"
            label="New Password"
            id="newPassword"
            required
            :append-icon="toggleNewPwdState ?'mdi-eye-off':'mdi-eye'"  
            :type="toggleNewPwdState ? 'text' : 'password'"
            @click:append="toggleNewPwdState = !toggleNewPwdState"
          >
          </v-text-field>
        </v-col>

        <v-col
          cols="8"
        >
          <v-text-field
            v-model="editedUserInfos.confirmedNewPassword"
            label="Confirm New Password"
            id="confirmedNewPassword"
            required
            :append-icon="toggleConfirmNewPwdState ?'mdi-eye-off':'mdi-eye'"
            :type="toggleConfirmNewPwdState ? 'text' : 'password'"  
            @click:append="toggleConfirmNewPwdState = !toggleConfirmNewPwdState"
          >
          </v-text-field>
        </v-col>
      </v-row>

      <v-btn 
        type="submit" 
        color="button" 
        class="mt-2 mx-2"
        @click="validate"
        :disabled="!valid"
      >Save my edited informations</v-btn>

      <v-btn 
        color="primary" 
        class="mt-2 mx-2"
        @click="$router.go(-1)"
      >Go back to my profil</v-btn>
  </v-form>

<!-- error message if loggin is incorrect -->
  <v-row 
    v-if="errorMessages.pseudoMessage !==''" 
    class="d-flex justify-center"
  >
    <v-col cols="6" class="my-2">
      <v-alert
        density="compact"
        type="warning"
        :text="errorMessages.pseudoMessage"
      ></v-alert>
    </v-col>
  </v-row>

  <v-row 
    v-if="errorMessages.emailMessage !==''" 
    class="d-flex justify-center"
  >
    <v-col cols="6" class="my-2">
      <v-alert
        density="compact"
        type="warning"
        :text="errorMessages.emailMessage"
      ></v-alert>
    </v-col>
  </v-row>

  <v-row 
    v-if="errorMessages.passwordMessage !==''" 
    class="d-flex justify-center"
  >
    <v-col cols="6" class="my-2 mb-12">
      <v-alert
        density="compact"
        type="warning"
        :text="errorMessages.passwordMessage"
      ></v-alert>
    </v-col>
  </v-row>

  <v-row 
    v-if="errorMessages.newPasswordMessage !==''" 
    class="d-flex justify-center"
  >
    <v-col cols="6" class="my-2 mb-12">
      <v-alert
        density="compact"
        type="warning"
        :text="errorMessages.newPasswordMessage"
      ></v-alert>
    </v-col>
  </v-row>

  <v-row 
    v-if="errorMessages.confirmedNewPasswordMessage !==''" 
    class="d-flex justify-center"
  >
    <v-col cols="6" class="my-2 mb-12">
      <v-alert
        density="compact"
        type="warning"
        :text="errorMessages.confirmedNewPasswordMessage"
      ></v-alert>
    </v-col>
  </v-row>

  <v-row 
    v-if="confirmationEditedMessage !==''" 
    class="d-flex justify-center"
  >
    <v-col cols="6" class="my-2 mb-12">
      <v-alert
        density="compact"
        type="success"
        :text="confirmationEditedMessage"
      ></v-alert>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  name: 'myAccount',
  data: () => ({
    valid: false,
    toggleCurrentPwdState: false,
    toggleNewPwdState: false,
    toggleConfirmNewPwdState: false,
    user: {
      id: null,
      pseudo: '',
      email: '',
      currentPassword: '',
    },
    editedUserInfos: {
      id: null,
      pseudo: '',
      email: '',
      currentPassword: '',
      newPassword: '',
      confirmedNewPassword: '',
    },

    errorMessages: {
      pseudoMessage: "",
      emailMessage: "",
      passwordMessage: "",
      newPasswordMessage: '',
      confirmedNewPasswordMessage: '',
    },

    confirmationEditedMessage: "",
  }),

  // prevent user to access this page if not logged in
  beforeCreate () {
    if (this.$store.state.isLogged === false) {
      this.$router.push({ name: 'login' })
    }
  },

  created: function () {
    // create copy of the user that will be edited
    this.user = {
      id: this.loggedUserInfos.id,
      pseudo: this.loggedUserInfos.pseudo,
      email: this.loggedUserInfos.email,
      currentPassword: this.loggedUserInfos.password,
    };

    this.editedUserInfos = {
      id: this.loggedUserInfos.id,
      pseudo: this.loggedUserInfos.pseudo,
      email: this.loggedUserInfos.email,
      currentPassword: null,
    };
},

  computed: {
    ...mapGetters(['loggedUserInfos', 'editMessageError']),
  },
  

  methods: {
    ...mapActions(['editUserInfos']),

    submitEditUserInfos(editedUserInfos) {
      let canSubmit = false;
      this.confirmationEditedMessage = "";

      if (canSubmit === false) {
        // reset error messages
        this.errorMessages.pseudoMessage = "";
        this.errorMessages.emailMessage = "";
        this.errorMessages.passwordMessage = "";
        this.errorMessages.newPasswordMessage = "";
        this.errorMessages.confirmedNewPasswordMessage = "";

        // data validation
        if (editedUserInfos.pseudo === "") {
          this.errorMessages.pseudoMessage = "Pseudo is required";
        } else if (editedUserInfos.pseudo.length < 3) {
          this.errorMessages.pseudoMessage = "Pseudo must be at least 3 characters long.";
        }

        if (editedUserInfos.email === "") {
          this.errorMessages.emailMessage = "Email is required";
        } else if (!/.+@.+\..+/.test(editedUserInfos.email)) {
          this.errorMessages.emailMessage = "E-mail must be valid.";
        }

        if (editedUserInfos.currentPassword === null) {
          this.errorMessages.passwordMessage = "You current password is required";
        } else if (editedUserInfos.currentPassword !== this.user.currentPassword) {
          this.errorMessages.passwordMessage = "The current password entered is incorrect.";
        }

        if (editedUserInfos.newPassword !== null && editedUserInfos.newPassword !== "" && editedUserInfos.newPassword !== undefined) {
          // Minimum 8 characters, at least 1 letter, 1 number and 1 special character
          // ex: bebou42123!
          // eslint-disable-next-line no-useless-escape
          const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

          if(!regex.test(editedUserInfos.newPassword)) {
            this.errorMessages.newPasswordMessage = "Your password must contain a minimum of 8 characters, and at least 1 letter, 1 number and 1 special character.";
          }
        }

        if (editedUserInfos.confirmedNewPassword !== editedUserInfos.newPassword) {
          this.errorMessages.confirmedNewPasswordMessage = "Your password et password confirmation don't match.";
        }
      }

      // if no error, then can submit 
      if (
        this.errorMessages.pseudoMessage === "" &&
        this.errorMessages.emailMessage === "" &&
        this.errorMessages.passwordMessage === "" &&
        this.errorMessages.newPasswordMessage === "" &&
        this.errorMessages.confirmedNewPasswordMessage === ""
      ) {
        canSubmit = true;

        this.confirmationEditedMessage = "Your infos has been successfuly edited.";
      }

      // call store function
      this.editUserInfos(editedUserInfos);

      // Redirect to the profil page
      // this.$router.push('my-account');
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
