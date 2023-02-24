<template>
  <div class="NotFoundView">
    <NotFound />
  </div>
</template>

<script>
// @ is an alias to /src
import NotFound from '@/components/NotFound.vue'

export default {
  name: 'NotFoundView',
  components: {
    NotFound
  }
}
</script>
