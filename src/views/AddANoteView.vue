<template>
  <div class="add-a-note">
    <AddANote />
  </div>
</template>

<script>
// @ is an alias to /src
import AddANote from '@/components/AddANote.vue'

export default {
  name: 'AddANoteView',
  components: {
    AddANote,
  }
}
</script>
