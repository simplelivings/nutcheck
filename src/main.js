
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import http from '../http'
import axios from 'axios'
// import './plugins/axios'
import * as indexOpr from '../indexOpr'
import vantee from 'vant'
import {Toast} from 'vant'
import 'vant/lib/index.css'


const app = createApp(App)
    .use(store)
    .use(router)
    .use(vantee)

// Vue.config.productionTip = false
// Vue.prototype.$http=http
// Vue.prototype.$msg = Toast
// Vue.prototype.$indexOpr=indexOpr
app.config.globalProperties.$http = http
app.config.globalProperties.$msg = Toast
app.config.globalProperties.$indexOpr = indexOpr

app.mount('#app')




