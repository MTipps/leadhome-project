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
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err))
    },
    setSelectedSuburb(suburb) {
      this.$store.commit('search/setSelectedSuburb', suburb.centerPoint)
      this.showSearchDropdown = false
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
}
</style>
