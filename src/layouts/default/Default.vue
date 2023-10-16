<template>
  <v-app>
    <default-bar />
    <Reports />
  </v-app>
</template>

<script>
import DefaultBar from './AppBar.vue'
import Reports from '@/views/Reports.vue'
export default {
  name: 'MyReports',
  components: {
    DefaultBar,
    Reports
  }
}
</script>
