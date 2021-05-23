<template>
  <GMap
    id="gMap"
    ref="gMap"
    language="en"
    :center="{ lat: selectedSuburb.latitude, lng: selectedSuburb.longitude }"
    :options="{ fullscreenControl: false }"
    :zoom="15"
    class="map"
  >
    <GMapMarker
      :position="{
        lat: selectedSuburb.latitude,
        lng: selectedSuburb.longitude,
      }"
    >
      <GMapInfoWindow :options="{ maxWidth: 200 }">
        <code>
          lat: {{ selectedSuburb.latitude }}, lng:
          {{ selectedSuburb.longitude }}
        </code>
      </GMapInfoWindow>
    </GMapMarker>
  </GMap>
</template>

<script>
export default {
  name: 'Map',
  props: {
    selectedSuburb: {
      type: Object,
      required: true,
    },
  },
  updated() {
    this.setMapCenter()
  },
  methods: {
    setMapCenter() {
      this.$refs.gMap.map.setCenter({
        lat: this.selectedSuburb.latitude,
        lng: this.selectedSuburb.longitude,
        zoom: 15,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/abstracts/_functions.scss';

.map {
  margin-top: bu(50);
}
</style>
