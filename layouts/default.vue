<template>
  <v-app>
    <Header />
    <v-content class="main">
      <v-container>
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

<style lang="scss" scoped>
.main {
  background-color: #f5f5f5;
}
</style>
