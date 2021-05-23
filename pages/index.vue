<template>
  <div class="home">
    <h3 class="home__text">See if we’re in your area</h3>
    <AutoSearch></AutoSearch>
    <Map :selected-suburb="getSelectedSuburb"></Map>
  </div>
</template>

<script>
import AutoSearch from '../components/AutoSearch'
import Map from '../components/Map'

export default {
  components: {
    AutoSearch,
    Map,
  },
  computed: {
    getSelectedSuburb() {
      return this.$store.state.search.selectedSuburb
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/abstracts/_functions.scss';
@import '../assets/stylesheets/abstracts/_variables.scss';

.home {
  padding: 0 20px;
  max-width: bu(642);
  margin: auto;

  &__text {
    color: map-get($colours, 'night');
    text-align: center;
    margin-bottom: bu(24);
  }
}
</style>
