<template>
  <div class="auto-search">
    <Search></Search>
    <SearchDropdown></SearchDropdown>
  </div>
</template>

<script>
import Search from './Search'
import SearchDropdown from './SearchDropdown'

export default {
  name: 'AutoSearch',
  components: {
    Search,
    SearchDropdown,
  },
}
</script>

<style scoped></style>
