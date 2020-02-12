import Vue from 'vue'
import PrismicVue from 'prismic-vue'
import linkResolver from './prismic/link-resolver'
import htmlSerializer from './prismic/html-serializer'
import VueRouter from 'vue-router';
import axios from 'axios'

import VueAxios from 'vue-axios'
import ContactComponent from './components/ContactComponent.vue';
import './assets/css/style.css'
import App from './App.vue'
import router from './router'

Vue.use(VueAxios, axios);
Vue.use(VueRouter);

const routes = [
  {
    name: 'send',
    path: '/send',
    component: ContactComponent
  }
];

Vue.config.productionTip = false

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver,
  htmlSerializer
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
