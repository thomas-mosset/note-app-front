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
