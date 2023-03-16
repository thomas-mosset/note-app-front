<template>
  <v-form 
    v-model="valid"
    @submit.prevent="submitSignup(user)"
    ref="form"
    class="my-14"
  >
      <v-row class="text-h4 ma-10 d-flex justify-center">
        Sign up
      </v-row>

      <v-row class="ma-8 d-flex justify-center">
         <v-col
          cols="8"
        >
          <v-text-field
            v-model="user.pseudo"
            :rules="pseudoRules"
            label="Pseudo"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="8"
        >
          <v-text-field
            v-model="user.email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>

         <v-col
          cols="8"
        >
          <v-text-field
            v-model="user.password"
            :rules="passwordRules"
            label="Password"
            id="password"
            required
            :append-icon="pwdState ?'mdi-eye-off':'mdi-eye'"
            :type="pwdState ? 'text' : 'password'"
            @click:append="pwdState = !pwdState"
          >
          </v-text-field>
        </v-col>
      </v-row>

      <v-btn 
        type="submit" 
        color="button" 
        class="mt-2"
        @click="validate"
        :disabled="!valid"
      >Submit</v-btn>
  </v-form>

</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TheSignin',
  data: () => ({
    valid: false,
    pwdState: false,
    user: {
      id: '',
      pseudo: '',
      email: '',
      password: '',
      notes: [],
    },
    pseudoRules: [
      value => {
        if (value) return true

        return 'Pseudo is required.'
      },
      value => {
        if (value?.length >= 3) return true

        return 'Pseudo must be at least 3 characters long.'
      },
    ],
    emailRules: [
      value => {
        if (value) return true

        return 'E-mail is required.'
      },
      value => {
        if (/.+@.+\..+/.test(value)) return true

        return 'E-mail must be valid.'
      },
    ],
    passwordRules: [
      value => {
        if (value) return true

        return 'Password is required.'
      },
      value => {
        if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value)) return true

        return 'Your password must contain a minimum of 8 characters, and at least 1 letter, 1 number and 1 special character.'
      },
    ],
  }),

  methods: {
    ...mapActions(['signup']),

    submitSignup(user) {      
      this.signup(user);

      // Redirect to the profil page
      this.$router.push('my-account');
    }
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
