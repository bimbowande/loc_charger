<script>
export default {
  name: "SideNav",
  data() {
    return {};
  },
};
</script>

<template>
  <div class="sidebar">
    <h3 aria-label="Brand Name">Right Charge</h3>
    <!-- Navigation panels -->
    <ul>
      <li><router-link to="/">Dashboard</router-link></li>
      <li><router-link to="/coverage">Acount</router-link></li>
      <li><router-link to="/coverage">Pricing </router-link></li>
      <li><router-link to="/coverage">Customer</router-link></li>
    </ul>
  </div>
</template>

<style scoped>
li {
  list-style: none;
  margin: 4px 0;
}
li a {
  text-decoration: none !important;
  color: #555;
}
</style>
