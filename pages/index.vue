<template>
  <div class="home">
    <h3 class="home__text">See if we’re in your area</h3>
    <Search></Search>
  </div>
</template>

<script>
import Search from '@/components/Search'
export default {
  components: {
    Search,
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
