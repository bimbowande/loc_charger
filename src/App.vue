<template>
  <div id="app">
    <nav-component></nav-component>
    <div class="content">
      <!-- Main content -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideNav from "./components/SideNav/SideNav.vue";
export default {
  name: "App",
  components: {
    "nav-component": SideNav,
  },
};
</script>

<style>
#app {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 200px;
  background-color: #f2f2f2;
  padding: 20px;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>
