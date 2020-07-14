import Vue from 'vue'
import App from './App'
import { myRequest } from 'util/api.js'
Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.$myRequest = myRequest
const app = new Vue({
    ...App
})
app.$mount()
