import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Biography from './components/Biography.vue';
//import Blogs from './components/Blogs.vue';
import Certificates from './components/Certificates.vue';
import Experiencies from './components/Experiencies.vue';
import Habilities from './components/Habilities.vue';
import Projects from './components/Projects.vue';
import VueScrollTo from 'vue-scrollto';

import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import "bootstrap/dist/js/bootstrap.js"

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
//importamos el vue router
Vue.use(VueRouter);
Vue.use(VueScrollTo);

const routes = [{
    path: '/biography',
    component: Biography
  },
  {
    path: '/experiencies',
    component: Experiencies
  },
  {
    path: '/certificates',
    component: Certificates
  },
  {
    path: '/habilities',
    component: Habilities
  },
  {
    path: '/projects',
    component: Projects
  },
  {
    path: '/',
    component: Biography
  }

    /*
  {
    path: '/blogs',
    component: Blogs
  },
  */
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');