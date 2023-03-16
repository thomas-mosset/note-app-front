<template>
  <div class="ProfileDeletedView">
    <ProfileDeleted />
  </div>
</template>

<script>
// @ is an alias to /src
import ProfileDeleted from '@/components/profileDeleted.vue';

export default {
  name: 'ProfileDeletedView',
  components: {
    ProfileDeleted
  }
}
</script>
