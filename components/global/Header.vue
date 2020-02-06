<template>
  <v-app-bar app class="header">
    <div class="header-title">
      <v-img class="header-icon" src="https://want-now.s3-ap-northeast-1.amazonaws.com/thumbnail/want-now-logo.png" :width="40" :height="40"/>
      <v-toolbar-title class="title">Want Now!</v-toolbar-title>
    </div>
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  background-color: #ffff !important;
}
.header-title {
  display: flex;
}
.title {
  width: 100%;
  text-align: center;
  color: black;
}
</style>
