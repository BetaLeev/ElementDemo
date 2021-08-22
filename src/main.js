import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import BaseTable from './components/BaseTable';
// import './variables.scss'
import App from './App.vue'

Vue.use(ElementUI)
Vue.use(BaseTable)
new Vue({
  el: '#app',
  render: h => h(App)
})
