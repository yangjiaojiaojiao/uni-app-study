import Vue from 'vue'
import App from './App'
import { myRequest } from 'util/api.js'
Vue.prototype.$myRequest = myRequest
Vue.filter('formatDate',(data)=>{
	const date = new Date(data)
	let year = date.getFullYear()
	let month = (date.getMonth()+1).toString().padStart(2,0)//不足两位追加0
	let day = date.getDay().toString().padStart(2,0)
	let hour = date.getHours().toString().padStart(2,0)
	let minute = date.getMinutes().toString().padStart(2,0)
	let seconds = date.getSeconds().toString().padStart(2,0)
	let time = year+"-"+month+"-"+day+" "+hour+":"+minute+":"+seconds
	return time
})
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()

