import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex,axios)

export default new Vuex.Store({
  state: {
  },
  mutations: {
    SET_IMAGES(state,images){
      state.images = images
    }
  },
  actions: {
    loadImage({commit,city}){
      axios
          .get("http://dataservice.accuweather.com/forecasts/v1/daily/10day/{city}")
          .then(r=>r.data.splice(0,6))
          .then(images=>{
            commit("SET_IMAGES",images)
          })
    }
  },
  modules: {
    getImages:( state => state.images),
  }
})
