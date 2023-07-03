<template>
  <div>
    <h3>Coverage is here</h3>
    <p>Specify the area you will like to cover on the next page</p>
    <p>Select the areas in the UK, you will like to recieve enquiries for</p>
    <div>
      <p>
        Enter a postcode and a distance and then click 'update mark' to generate
        a circle of coverage. You can add multiple multiple postcodes and
        distances,if, for example, you have a number of engineers based in
        differents parts of the country, Alternatively, select whole countries
        using the checkboxes.
      </p>
    </div>
    <div>
      <p>
        Once the map is updated, deselect or delect individual regions by
        clicking on them, when you are ready click on save changes.
      </p>
    </div>
    <form>
      <div v-for="(location, index) in locations" :key="index">
        <label>
          Post code
          <input class="" v-model="location.postcode" />
        </label>
        <label>
          Radius
          <input class="" v-model="location.radius" />
        </label>
      </div>
      <button @click="addMore()" type="button" role="button">Add</button>
    </form>
    <div>
      <AddGoogleMap />
    </div>
  </div>
</template>
<script>
import AddGoogleMap from "../components/Map/AddGoogleMap.vue";
export default {
  name: "SiteCoverage",
  components: {
    AddGoogleMap,
  },
  data() {
    return {
      locations: [{ postcode: "De223Jb", radius: "3" }],
    };
  },
  methods: {
    addMore() {
      this.locations.push({
        postcode: "",
        radius: "",
      });
    },
    remove(index) {
      this.locations.splice(index, 1);
    },
  },
};
</script>

<style scoped></style>
