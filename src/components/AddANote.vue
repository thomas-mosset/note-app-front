<!-- eslint-disable no-useless-escape -->
<template>
  <v-form 
    v-model="valid"
    @submit.prevent="submitANote(noteInfos)"
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
            v-model="note.title"
            label="Title"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="8"
        >
          <v-textarea
            v-model="note.content"
            label="Content"
            required
          ></v-textarea>
        </v-col>

        <v-col
          cols="8"
        >
          <v-text-field
            v-model="note.category"
            label="Category"
          ></v-text-field>
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
  </v-form>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

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
      creationDate: "",
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
    ...mapActions(['addANote']),

    submitANote() {
      // add some infos
      this.note.id = this.loggedUserInfos.notes.length + 1;
      this.note.author = this.loggedUserInfos.pseudo;
      this.note.creationDate = new Date().getFullYear() + "-" + (new Date().getMonth()+1) + "-" + new Date().getDate();
     
      // call store function
      this.addANote(this.note);

      // Redirect to the notes page
      this.$router.push('my-notes');
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
