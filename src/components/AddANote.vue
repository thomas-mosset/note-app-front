<!-- eslint-disable no-useless-escape -->
<template>
<p>Add a note</p>
  <!-- <v-form 
    v-model="valid"
    @submit.prevent="submitNote(noteInfos)"
    ref="form"
    class="my-14"
  >
      <v-row class="text-h4 ma-10 d-flex justify-center">
        Add a note
      </v-row>

      <v-row class="ma-8 d-flex justify-center">
        <v-col
          cols="8"
        >
          <v-text-field
            v-model="noteInfos.pseudo"
            label="Pseudo"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="8"
        >
          <v-text-field
            v-model="noteInfos.email"
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
      </v-row>

      <v-btn 
        type="submit" 
        color="button" 
        class="mt-2 mx-2"
        @click="validate"
        :disabled="!valid"
      >Save my note</v-btn>

      <v-btn 
        color="primary" 
        class="mt-2 mx-2"
        @click="$router.go(-1)"
      >Go back to all my notes</v-btn>
  </v-form> -->
</template>

<script>
import { mapGetters } from 'vuex';
// import { mapActions } from 'vuex';

export default {
  name: 'myAccount',
  data: () => ({
    valid: false,
    note: {
      id: null,
      title: '',
      content: '',
      author: '',
      statut: false, // not archived
      category: "",
      creationDate: "", // https://momentjs.com/docs/#/displaying/
      updatedDate: null,
    },
  }),

  // prevent user to access this page if not logged in
  beforeCreate () {
    if (this.$store.state.isLogged === false) {
      this.$router.push({ name: 'login' })
    }
  },

  computed: {
    ...mapGetters(['loggedUserInfos']),
  },
  

  methods: {
    // ...mapActions(['addANote']),

    /* addANote(noteInfos) {
      // let canSubmit = false;
     
      // call store function
      // this.addANote(noteInfos);

      // Redirect to the notes page
      // this.$router.push('my-notes');
    } */
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
