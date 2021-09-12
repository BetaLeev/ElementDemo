import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'

import 'element-ui/lib/theme-chalk/index.css'
import BaseTable from './components/BaseTable';
// import './variables.scss'
import App from './App.vue'

import Query from './pages/query/index.vue'
import Home from './pages/home/index.vue'
const routes = [
  {path:'/',component:Home},
  { path: '/query', component: Query },
]
const router = new VueRouter({mode:'history',routes})
Vue.use(ElementUI)
Vue.use(BaseTable)
Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
