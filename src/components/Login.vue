<template>
  <v-form 
    v-model="valid"
    @submit.prevent="login(user)"
    ref="form"
    class="my-14"
  >
      <v-row class="text-h4 ma-10 d-flex justify-center">
        Login
      </v-row>

      <v-row class="ma-8 d-flex justify-center">
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
            required
          ></v-text-field>
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

<!-- error message if loggin is incorrect -->
  <v-row 
    v-if="loginMessageError !==''" 
    class="d-flex justify-center"
  >
    <v-col cols="6">
      <v-alert
        density="compact"
        type="warning"
        :text="loginMessageError"
      ></v-alert>
    </v-col>
  </v-row>

   
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  name: 'TheLogin',
  data: () => ({
    valid: false,
    user: {
      email: '',
      password: '',
    },
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
    ],
  }),

  methods: {
    ...mapActions(['login']),
  },

  computed: {
    ...mapGetters(['loginMessageError']),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
