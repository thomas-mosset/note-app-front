<template>
  <div class="my-notes">
    <MyNotes msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MyNotes from '@/components/MyNotes.vue'

export default {
  name: 'myNotesView',
  components: {
    MyNotes
  }
}
</script>
