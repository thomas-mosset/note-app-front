<template>
  <v-row class="mx-auto my-16">
    <v-col>
      <p class="text-h4">Welcome to your profile, {{ loggedUserInfos.pseudo }} !</p>
    </v-col>
  </v-row>

  <v-card
    class="mx-auto my-16"
    max-width="500"
  >

    <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-card
              class="mx-auto"
              color="highlight"
              max-width="500"
            >
              <v-card-actions>
                <v-list-item class="w-100">
                  <template v-slot:prepend>
                    <v-avatar
                      color="grey-darken-3"
                      image="https://images.pexels.com/photos/1317844/pexels-photo-1317844.jpeg?auto=compress&cs=tinysrgb&w=660&h=150&dpr=1"
                    ></v-avatar>
                  </template>

                  <v-list-item-title>{{ loggedUserInfos.pseudo }}</v-list-item-title>

                  <v-list-item-subtitle>{{ loggedUserInfos.email }}</v-list-item-subtitle>

                  <template v-slot:append>
                    <div class="justify-self-end">
                      <router-link to="/my-account/my-informations" class="router-link router">
                        <v-icon class="me-1" icon="mdi-account-edit"></v-icon>
                      </router-link>
                      <span class="me-1">·</span>

                    <!-- Delete profile dialog -->
                      <v-icon class="me-1 router" icon="mdi-account-remove" @click.stop="dialog = true"></v-icon>

                      <v-dialog
                        v-model="dialog"
                        max-width="60%"
                      >
                        <v-card class="py-3">
                          <v-card-text class="text-center">
                            <v-icon 
                              x-large
                              class="mt-1 mb-2"
                              color="orange"
                              @click.stop="dialog = true"
                            >
                              mdi-alert
                            </v-icon>
                          </v-card-text>

                          <v-card-title class="text-h5 text-center">
                            Are you sure you want to delete your profile ?
                          </v-card-title>

                          <v-card-subtitle class="text-h6 text-center">
                            This action can't be undone.
                          </v-card-subtitle>

                          <v-card-actions class="d-flex justify-center mt-6">
                              <v-btn
                                stacked prepend-icon="mdi-cancel"
                                variant="flat"
                                color="background"
                                class="white--text d-flex justify-center mx-2"
                                @click="dialog = false"
                              >
                                Cancel
                              </v-btn>

                              <v-btn
                                stacked prepend-icon="mdi-trash-can"
                                variant="flat"
                                color="button"
                                class="white--text d-flex justify-center mx-2"
                                @click="deleteProfile(loggedUserInfos);dialog = false"
                              >
                                Delete
                              </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                      <!-- End delete profile dialog -->

                      <span class="me-1">·</span>
                      <router-link to="/logout" @click="logout();" class="router">
                        <v-icon class="me-1" icon="mdi-logout-variant"></v-icon>
                      </router-link>
                    </div>
                  </template>
                </v-list-item>
              </v-card-actions>

            </v-card>
          </v-col>
        </v-row>
      </v-container>

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              cover
            >
              <v-card-title class="text-white" v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn size="small" color="surface-variant" variant="text" icon="mdi-heart"></v-btn>

              <v-btn size="small" color="surface-variant" variant="text" icon="mdi-bookmark"></v-btn>

              <v-btn size="small" color="surface-variant" variant="text" icon="mdi-share-variant"></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'myAccount',
  data: () => ({
    cards: [
      { title: 'My notes', src: 'https://images.pexels.com/photos/983826/pexels-photo-983826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', flex: 6 },
      { title: 'Add a note', src: 'https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', flex: 6 },
    ],
     dialog: false,
  }),

  // prevent user to access this page if not logged in
  beforeCreate () {
    if (this.$store.state.isLogged === false) {
      this.$router.push({ name: 'login' })
    }
  },

  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    deleteProfile(loggedUserInfos) {
      this.$store.dispatch("deleteProfile", loggedUserInfos);
      this.$router.push({ name: 'profile-successfully-deleted' });
    },
  },

  computed: {
    ...mapGetters(['loggedUserInfos']),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.router {
  color: white;

  &:hover {
    color: #0f0e17;
  }
}
</style>
