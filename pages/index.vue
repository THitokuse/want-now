<template>
  <div>
    <div class="description">
      現在の位置情報を許可すると
      <br />
      近くのお店が検索できるようになります
      <br />
      <a>
        位置情報を利用する
      </a>
    </div>
    <v-card
      class="mx-auto search-engine"
    >
      <v-card-text>
        <p class="search-engine-title">
          キーワード・エリアから探す
        </p>
        <div class="search-engine-form">
          <v-row>
            <v-col cols="6" sm="2" md="3" class="search-engine-text">
              <v-text-field
                class="text-field"
                label="キーワード"
                light
                prepend-inner-icon="mdi-place"
              ></v-text-field>
            </v-col>
            <v-col cols="6" sm="2" md="3" class="search-engine-text">
              <v-text-field
                class="text-field"
                label="エリア"
                light
                prepend-inner-icon="mdi-place"
              ></v-text-field>
            </v-col>
            <v-col cols="6" sm="2" md="3" class="search-engine-text">
              <v-text-field
                class="text-field"
                label="下限"
                light
                prepend-inner-icon="mdi-place"
              ></v-text-field>
            </v-col>
            <v-col cols="6" sm="2" md="3" class="search-engine-text">
              <v-text-field
                class="text-field"
                label="上限"
                light
                prepend-inner-icon="mdi-place"
              ></v-text-field>
            </v-col>
          </v-row>
        </div>
      </v-card-text>
      <v-card-actions>
        <nuxt-link to="/result" class="search-engine-button">
          <img src="https://want-now.s3-ap-northeast-1.amazonaws.com/thumbnail/want-now-button.png" :width="200" :height="54"/>
        </nuxt-link>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  test2
}
</script>

<style lang="scss" scoped>
.description {
  color: black;
  font-size: 10px;
  text-align: center;
  margin-bottom: 30px;
}
.search-engine {
  background-color: white;
  &-title {
    font-size: 24px;
    font-weight: 900;
    text-align: center;
  }
  &-form {
    margin: 10px;
  }
  &-text {
    padding: 15px 0;
  }
  &-button {
    margin: 0 auto;
  }
}
.text-field {
  background-color: #f5f5f5;
}
</style>
