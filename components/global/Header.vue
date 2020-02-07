<template>
  <v-app-bar app class="header">
    <div class="header-title">
      <v-img class="header-icon" src="https://want-now.s3-ap-northeast-1.amazonaws.com/thumbnail/want-now-logo.png" :width="40" :height="40"/>
      <v-img class="title-logo" src="https://want-now.s3-ap-northeast-1.amazonaws.com/thumbnail/logo.png" :width="220" :height="30"/>
    </div>
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.header {
  background-color: #ffff !important;
}
.header-title {
  display: flex;
}
.title-logo {
  top: 5px;
}
</style>
