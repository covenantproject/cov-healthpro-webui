<template>
  <div>
    <br />
    <gmap-map :center="center" :zoom="12" style="width:100%;  height: 400px;">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: {},
      markers: [],
      places: [],
    };
  },
  props: {
    latitude: {
      type: Number,
      default: -8.7846,
    },
    longitude: {
      type: Number,
      default: 115.159735,
    },
  },
  mounted() {
    this.addMarker();
  },
  methods: {
    addMarker() {
      this.markers.push({
        position: { lat: this.latitude, lng: this.longitude },
      });
      this.places.push({ lat: this.latitude, lng: this.longitude });
      this.center = { lat: this.latitude, lng: this.longitude };
    },
  },
};
</script>