<template>
  <div class="auto-search">
    <section class="text-box-search">
      <input
        v-model="query"
        type="text"
        class="text-box-search__input body-1"
        placeholder="Search for your suburb..."
        @input="getSearchResults"
        @click="setShowSearchDropdown"
      />
      <button class="button button__search subtitle-1 text-box-search__button">
        Search
        <img
          src="../assets/images/search.svg"
          alt="search"
          class="search-icon"
        />
      </button>
    </section>

    <div
      v-show="searchResults.length > 0 && showSearchDropdown"
      class="search-dropdown"
    >
      <div
        v-for="result in searchResults"
        :key="result.id"
        class="search-dropdown__item"
        @click="setSelectedSuburb(result)"
      >
        <img src="../assets/images/location.svg" alt="location" />
        <div class="location-information">
          <div class="location-suburb">{{ result.suburb }}</div>
          <div class="location-city">{{ result.city }}</div>
        </div>
      </div>
    </div>

    <GMap
      id="gMap"
      ref="gMap"
      language="en"
      :center="{ lat: selectedSuburb.latitude, lng: selectedSuburb.longitude }"
      :options="{ fullscreenControl: false }"
      :zoom="15"
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
  </div>
</template>

<script>
const API_URL = 'https://silver-api.production.leadhome.io/api/suburbs?query='

export default {
  name: 'AutoSearch',
  data() {
    return {
      query: '',
      searchResults: [],
      selectedSuburb: {
        latitude: -28.4793,
        longitude: 24.6727,
      },
      showSearchDropdown: false,
    }
  },
  methods: {
    getSearchResults() {
      this.$axios
        .$get(API_URL + this.query)
        .then((results) => {
          this.searchResults = results.items
          this.showSearchDropdown = true
        })
        .catch((err) => console.log(err))
    },
    setSelectedSuburb(suburb) {
      console.log(suburb.centerPoint)
      this.selectedSuburb = suburb.centerPoint
      // this.$refs.gMap.map = {
      //   lat: this.selectedSuburb.latitude,
      //   lng: this.selectedSuburb.longitude,
      // }
      // this.$refs.gMap.markers = {
      //   lat: this.selectedSuburb.latitude,
      //   lng: this.selectedSuburb.longitude,
      // }
      // console.log(this.$refs.gMap)
      // this.$refs.gMap.map.setCenter(this.$refs.gMap.marker.getPosition())
      this.showSearchDropdown = false
      this.setMapCenter()
    },
    setMapCenter() {
      this.$refs.gMap.map.setCenter({
        lat: this.selectedSuburb.latitude,
        lng: this.selectedSuburb.longitude,
        zoom: 15,
      })
    },
    setShowSearchDropdown() {
      this.showSearchDropdown = true
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/abstracts/_functions.scss';
@import '../assets/stylesheets/components/_buttons.scss';
@import '../assets/stylesheets/components/_textboxes.scss';
@import '../assets/stylesheets/components/_dropdown.scss';

.auto-search {
  position: relative;
  width: bu(642);
}
</style>
