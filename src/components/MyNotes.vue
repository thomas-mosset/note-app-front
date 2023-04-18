<template>
<v-row class="mx-auto mt-16">
  <v-col>
    <p class="text-h4">Your notes :</p>
  </v-col>
</v-row>

<v-row class="mx-auto mb-16 d-flex justify-center">
  <v-col 
    cols="4"
    class='d-flex justify-center'
  >
    <v-checkbox 
      class='d-flex justify-center'
      label="Archived notes" 
      value="true" 
      color="button" 
      v-model="filters.status" @click="filters.status = !filters.status;"
    >
    </v-checkbox>
  </v-col>
</v-row>

<v-row class="mb-12">
  <v-container v-if="loggedUserInfos.notes.length > 0">
      <v-row dense v-if="filters.status === false">
        <v-col
          v-for="note in loggedUserInfos.notes"
          :key="note.id"
        >
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-card-text>
              <p>
                {{ note.creationDate }} 
              </p>
              <p class="text-h4 my-2 text-orange">
                {{ note.title }}
              </p>
              <p class="mb-2 text-bold">By : {{ note.author }}</p>
              
              <div class="text-left">
                {{ note.content }}
              </div>
            </v-card-text>

            <v-card-actions class="bg-orange">
              <p v-if="note.category === null" class="ml-2 text-bold">
                Uncategorized
              </p>
              <p v-else class="ml-2 text-bold">
                {{ note.category }}
              </p>

              <v-spacer></v-spacer>

              <EditANote :note="note" />

              <v-btn size="small" color="white" variant="text" icon="mdi-trash-can" @click="deleteNote(note);"></v-btn>

              <v-btn size="small" color="white" variant="text" :icon="note.statut ? 'mdi-archive-refresh' : 'mdi-archive-arrow-down'" @click="archiveNote(note);"></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!-- Based on status (archived) -->
      <v-row dense v-else>
        <v-col
          v-for="note in loggedUserInfos.notes.filter(note => note.statut === true)"
          :key="note.id"
        >
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-card-text>
              <p>
                {{ note.creationDate }} 
              </p>
              <p class="text-h4 my-2 text-orange">
                {{ note.title }}
              </p>
              <p class="mb-2 text-bold">By : {{ note.author }}</p>
              
              <div class="text-left">
                {{ note.content }}
              </div>
            </v-card-text>

            <v-card-actions class="bg-orange">
              <p v-if="note.category === null" class="ml-2 text-bold">
                Uncategorized
              </p>
              <p v-else class="ml-2 text-bold">
                {{ note.category }}
              </p>

              <v-spacer></v-spacer>
    
              <EditANote :note="note" />

              <v-btn size="small" color="white" variant="text" icon="mdi-trash-can" @click="deleteNote(note);"></v-btn>

              <v-btn size="small" color="white" variant="text" :icon="note.statut ? 'mdi-archive-refresh' : 'mdi-archive-arrow-down'" @click="archiveNote(note);"></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col v-if="loggedUserInfos.notes.filter(note => note.statut === true).length === 0">
          <p>No archived note !</p>
        </v-col>
      </v-row>
  </v-container>

  <v-container v-else>
    <v-row dense>
      <v-col >
        <p >No created note yet !</p>

        <v-card
            color="#ff8906"
            theme="dark"
            class="mx-auto my-4"
            max-width="344"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">
                  Create a note
                </v-card-title>

              <router-link to="/add-a-note">
                <v-btn
                  class="ms-2"
                  icon="mdi-pencil-plus"
                  variant="text"
                  color="white"
                ></v-btn>
              </router-link>
            </div>

              <v-avatar
                class="ma-3"
                size="125"
                rounded="0"
              >
                <v-img src="https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></v-img>
              </v-avatar>
            </div>
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</v-row>

</template>

<script>
import EditANote from "./EditANote.vue";

import { mapGetters } from 'vuex';

export default {
  name: 'MyNotes',
  data: () => ({
    filters: {
      status: false,
      // date ?
    },
  }),
  components: {
    EditANote,
  },

  // prevent user to access this page if not logged in
  beforeCreate () {
    if (this.$store.state.isLogged === false) {
      this.$router.push({ name: 'login' })
    }
  },

  methods: {
    deleteNote(note) {
      this.$store.dispatch("deleteANote", note);
    },
    archiveNote(note) {
      this.$store.dispatch("archiveANote", note);
    },
  },

  computed: {
    ...mapGetters(['loggedUserInfos']),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.text-bold {
  font-weight: bold;
};
</style>