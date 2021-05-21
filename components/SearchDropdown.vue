<template>
  <div class="search-dropdown">
    <div class="search-dropdown__item">
      <img src="../assets/images/location.svg" alt="location" />
      <div class="location-information">
        <div class="location-suburb">Bryanbrink</div>
        <div class="location-city">Randburg</div>
      </div>
    </div>
    <div class="search-dropdown__item">
      <img src="../assets/images/location.svg" alt="location" />
      <div class="location-information">
        <div class="location-suburb">Bryonston</div>
        <div class="location-city">Randburg</div>
      </div>
    </div>
    <div class="search-dropdown__item">
      <img src="../assets/images/location.svg" alt="location" />
      <div class="location-information">
        <div class="location-suburb">Bryanbrink West</div>
        <div class="location-city">Randburg</div>
      </div>
    </div>
    <div class="search-dropdown__item">
      <img src="../assets/images/location.svg" alt="location" />
      <div class="location-information">
        <div class="location-suburb">Bryanbrink East</div>
        <div class="location-city">Randburg</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchDropdown',
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/components/_dropdown.scss';
</style>
