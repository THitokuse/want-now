import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCvUTinbYu-gBU5baYBhCW5HpylHfP8gns',
    libraries: 'places'
  }
})
