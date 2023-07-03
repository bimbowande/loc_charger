<template>
  <div>
    <h1>Coverage Overview</h1>

    <h2>Filters</h2>
    <div>
      <label for="chargers">Chargers:</label>
      <select id="chargers" multiple v-model="selectedChargers">
        <option
          v-for="charger in chargerOptions"
          :value="charger"
          :key="charger"
        >
          {{ charger }}
        </option>
      </select>
    </div>

    <div>
      <label for="installers">Installers:</label>
      <select id="installers" multiple v-model="selectedInstallers">
        <option
          v-for="(installer, index) in installerOptions"
          :value="index"
          :key="index"
        >
          {{ installer }}
        </option>
      </select>
    </div>

    <div>
      <label for="postcode">Postcode:</label>
      <input
        type="text"
        id="postcode"
        v-model="postcode"
        placeholder="Enter postcode"
      />
    </div>

    <div>
      <label for="radius">Radius (in miles):</label>
      <input
        type="number"
        id="radius"
        v-model="radius"
        placeholder="Enter radius"
      />
    </div>

    <!-- Rest of the Coverage Overview page content -->
  </div>
</template>
<script>
import sampleData from "@/data/sample-data.json";

export default {
  data() {
    return {
      selectedChargers: [], // Store the selected chargers
      selectedInstallers: [], // Store the selected installers
      postcode: "", // Store the entered postcode
      radius: "", // Store the entered radius
      chargerOptions: [
        "Mini Pro3",
        "Easee One",
        "Ohme Home Pro",
        "Ohme Epod",
        "Indra Smart Pro",
        "Zappi 2.1",
        "Wallbox Pulsar Plus",
      ],
      installerOptions: [],
    };
  },
  mounted() {
    this.populateInstallerOptions();
  },
  methods: {
    populateInstallerOptions() {
      const installerObjects = sampleData.coverage.installers;
      this.installerOptions = installerObjects.map(
        (installer) => Object.keys(installer)[0]
      );
      console.log(this.installerOptions);
    },
  },
};
</script>
