import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.axios=axios
// Vue.directive('rainbow',{
//   bind(el,binding,vnode){
//     el.style.color="#"+Math.random().toString(16).slice(2,8)
//   }
// })
Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth='1260px'
    }else if (binding.value=='narrow'){
      el.style.maxWidth='560px'
    }
    if (binding.arg=='column') {
      el.style.background='#6677cc'
      el.style.padding="20px"
    }
  }
})
// Vue.filter('to-uppercase',function (value) {
//   return value.toUpperCase();
// })
// Vue.filter('snippet',function (value) {
//   return value.slice(0,100) + '...'
//
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
