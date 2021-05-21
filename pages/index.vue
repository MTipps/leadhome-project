<template>
  <div class="home">
    <h3 class="home__text">See if we’re in your area</h3>
    <AutoSearch></AutoSearch>
  </div>
</template>

<script>
import AutoSearch from '../components/AutoSearch'
export default {
  components: {
    AutoSearch,
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/abstracts/_functions.scss';
@import '../assets/stylesheets/abstracts/_variables.scss';

.home {
  &__text {
    color: map-get($colours, 'night');
    text-align: center;
    margin-bottom: bu(24);
  }
}
</style>
