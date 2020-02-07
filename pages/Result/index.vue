<template>
  <div class="app">
    <div id="map">
      <GmapMap
      :center="center"
      :zoom="zoom"
      ref="map"
      style="width: 100%; height: 500px;"
        @center_changed="centerChanged"
      >
        <GmapInfoWindow :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
          <table>
            <tr>
              <td><img :src="infoContent.imageurl"></td>
              <td style="text-align:left;">
                <p><a :href="infoContent.url" target="_blank">{{infoContent.title}}</a></p>
                <p>{{infoContent.address}}</p>
              </td>
            </tr>
          </table>
        </GmapInfoWindow>
        <GmapMarker
          v-for="(m,id) in marker_items"
          :position="m.position"
          :title="m.title"
          @click="toggleInfoWindow(m,id)"
          :clickable="true"
          :draggable="false"
          :key="id"
        ></GmapMarker>
        <GmapMarker v-show="marker_center" :position="marker_center" :clickable="true" :icon="icon_center" :draggable="false"></GmapMarker>
      </GmapMap>
      <button @click="mapTest">現在地周辺のお店を検索</button>
      <button @click="currentPosition">現在地へ移動</button>
    </div>
    <v-card
      class="search-result"
    >
      <div class="d-flex flex-no-wrap justify-space-between">
        <v-avatar
          class="ma-3"
          size="150"
          tile
        >
          <v-img src="https://want-now.s3-ap-northeast-1.amazonaws.com/mock-data/isetan.jpg"></v-img>
        </v-avatar>
        <div class="card-description">
          <v-card-title
            class="card-title"
          >
            伊勢丹&nbsp;&nbsp;新宿店
          </v-card-title>

          <v-card-title
            class="card-subtitle"
          >
            在庫あり&nbsp;&nbsp;6件
            <br />
            2/7(金)10:00-20:00
            <br />
            ￥10-
          </v-card-title>
        </div>
      </div>
    </v-card>
    <v-card
      class="search-result"
    >
      <div class="d-flex flex-no-wrap justify-space-between">
        <v-avatar
          class="ma-3"
          size="150"
          tile
        >
          <v-img src="https://want-now.s3-ap-northeast-1.amazonaws.com/mock-data/isetan.jpg"></v-img>
        </v-avatar>
        <div class="card-description">
          <v-card-title
            class="card-title"
          >
            伊勢丹&nbsp;&nbsp;新宿店
          </v-card-title>

          <v-card-title
            class="card-subtitle"
          >
            在庫あり&nbsp;&nbsp;6件
            <br />
            2/7(金)10:00-20:00
            <br />
            ￥10-
          </v-card-title>
        </div>
      </div>
    </v-card>
    <v-card
      class="search-result"
    >
      <div class="d-flex flex-no-wrap justify-space-between">
        <v-avatar
          class="ma-3"
          size="150"
          tile
        >
          <v-img src="https://want-now.s3-ap-northeast-1.amazonaws.com/mock-data/isetan.jpg"></v-img>
        </v-avatar>
        <div class="card-description">
          <v-card-title
            class="card-title"
          >
            伊勢丹&nbsp;&nbsp;新宿店
          </v-card-title>

          <v-card-title
            class="card-subtitle"
          >
            在庫あり&nbsp;&nbsp;6件
            <br />
            2/7(金)10:00-20:00
            <br />
            ￥10-
          </v-card-title>
        </div>
      </div>
    </v-card>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      center: { lat: 35.7, lng: 139.7 },
      zoom: 17,
      marker_center: { lat: 35.7, lng: 139.7 },
      marker_items: [
        { position: { lat: 35.7, lng: 139.69 } }
      ],
      icon_center: {
        url: 'https://want-now.s3-ap-northeast-1.amazonaws.com/thumbnail/want-now-logo.png',
        size: { width: 44, height: 70, f: 'px', b: 'px' },
        scaledSize: { width: 22, height: 35, f: 'px', b: 'px' }
      },
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      infoWindowPos: null,
      infoWinOpen: false,
      infoContent: {
        imageurl: null,
        title: null,
        address: null
      }
    }
  },
  mounted () {
    this.currentPosition()
  },
  methods: {
    centerChanged (latLng) {
      this.marker_center = { lat: latLng.lat(), lng: latLng.lng() }
    },
    async mapTest () {
      this.infoWinOpen = false
      const response = await this.search()
      console.log(response)
      // const shops = response.data.results.shop
      // const items = []
      // for (let i = 0; i < shops.length; i++) {
      //   const item = {
      //     position: {
      //       lat: Number(shops[i].lat),
      //       lng: Number(shops[i].lng)
      //     },
      //     content: {
      //       title: shops[i].name,
      //       imageurl: shops[i].logo_image,
      //       address: shops[i].address,
      //       url: shops[i].urls.pc
      //     }
      //   }
      //   items.push(item)
      // }
      // this.marker_items = items
      // console.log(this.marker_items)
    },
    toggleInfoWindow (marker, id) {
      this.infoWinOpen = false
      this.infoWindowPos = marker.position
      this.infoContent = marker.content
      this.infoWinOpen = true
    },
    async search () {
      const apiResponse = await axios.get('/api/shops/result', {
        params: {
          lat: this.marker_center.lat,
          lng: this.marker_center.lng
        } })
      // console.log(apiResponse)
      // const shops = apiResponse.data.results.shop
      // console.log(shops)
      return apiResponse
    },
    currentPosition () {
      navigator.geolocation.getCurrentPosition(this.getCurrentPositionSuccess)
    },
    getCurrentPositionSuccess (position) {
      this.$refs.map.panTo({ lat: position.coords.latitude, lng: position.coords.longitude })
    }
  }
}
</script>

<style lang="scss" scoped>
.search-result {
  width: 100vw;
  background-color: #f5f5f5;
  color: black;
  &-card {
    display: inline-block;
  }
}
.card {
  &-title {
    font-size: 16px;
  }
  &-subtitle {
    font-size: 12px;
    padding: 0 auto;
  }
}
.card-description {
  margin: 0 auto;
}
</style>
