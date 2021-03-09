import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import '@/vantUI';
Vue.config.productionTip = false;

let app = new Vue({
  router,
  store,
  render: (h) => h(App),
});

window.mountApp = () => {
  app.$mount('#app');
};

if (process.env.NODE_ENV === 'production') {
  if (window.STYLE_READY) {
    window.mountApp();
  }
} else {
  window.mountApp();
}
