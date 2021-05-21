<template>
  <section class="text-box-search">
    <input
      type="text"
      class="text-box-search__input body-1"
      placeholder="Search for your suburb..."
    />
    <button class="button button__search subtitle-1 text-box-search__button">
      Search
      <img src="../assets/images/search.svg" alt="search" class="search-icon" />
    </button>
  </section>
</template>

<script>
export default {
  name: 'Search',
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/abstracts/_functions.scss';
@import '../assets/stylesheets/components/_buttons.scss';
@import '../assets/stylesheets/components/_textboxes.scss';

.text-box-search {
  max-width: bu(642);
}
</style>
