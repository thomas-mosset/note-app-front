<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      width="1024"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          <v-btn size="small" color="white" variant="text" icon="mdi-pencil"></v-btn>
        </v-btn>
      </template>
      <v-card>

        <v-form 
            v-model="valid"
            @submit.prevent="editNote(noteInfos)"
            ref="form"
            class="my-14"
        >
            <v-row class="text-h4 ma-10 d-flex justify-center">
                Edit a note
            </v-row>

            <v-row class="ma-8 d-flex justify-center">
                <v-col
                cols="8"
                >
                    <v-text-field
                        v-model="editedNote.title"
                        label="Title"
                        required
                    ></v-text-field>
                </v-col>

                <v-col
                cols="8"
                >
                    <v-textarea
                        v-model="editedNote.content"
                        label="Content"
                        required
                    ></v-textarea>
                </v-col>

                <v-col
                    cols="8"
                >
                    <v-text-field
                        v-model="editedNote.category"
                        label="Category"
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-btn 
                type="submit" 
                color="button" 
                class="mt-2 mx-2"
                @click="validate; dialog = false;"
                :disabled="!valid"
            >Save my note</v-btn>

            <v-btn 
                color="primary" 
                class="mt-2 mx-2"
                @click="dialog = false"
            >Go back to all my notes</v-btn>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    props: {
        note: Object,
    },
    data: () => ({
        dialog: false,
        editedNote: {
            id: null,
            title: '',
            content: '',
            author: '',
            statut: false,
            category: "",
            creationDate: "",
            updatedDate: null,
        },
    }),

    created: function () {
        // create copy of the note that will be edited
        this.editedNote = {
            id: this.note.id,
            title: this.note.title,
            content: this.note.content,
            author: this.note.author,
            statut: this.note.statut,
            category: this.note.category,
            creationDate: this.note.creationDate,
            updatedDate: null,
        };
    },

    methods: {
        ...mapActions(['editANote']),

        editNote() {
            // add some edited infos
            this.editedNote.updatedDate = new Date().getFullYear() + "-" + (new Date().getMonth()+1) + "-" + new Date().getDate();
            
            // call store function
            this.editANote(this.editedNote);
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
