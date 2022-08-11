import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueTypedJs from "vue-typed-js";
import shell from "vue-shell";

Vue.config.productionTip = false;

Vue.use(VueTypedJs);
Vue.use(shell);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
