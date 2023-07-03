import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDzvTh5dnOQul8oxwSkpyQFe_bNrFhWW-A",
    libraries: "places",
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
