<template>
  <v-app>
    <side-bar />
    <Header />
    <v-content>
      <v-overlay v-if="loading" :opacity="0.8" :value="loading" absolute>
        <v-progress-circular :size="50" color="primary" indeterminate />
      </v-overlay>
      <v-container v-else>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from '@/components/global/Header'

export default {
  components: {
    Header
  }
}
</script>
