<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang="scss">
@import 'assets/stylesheets/abstracts/mixins/_mixins-flex.scss';
@import 'assets/stylesheets/abstracts/_functions.scss';
@import 'assets/stylesheets/abstracts/_variables.scss';
@import 'assets/stylesheets/base/_reset.scss';
@import 'assets/stylesheets/base/_typography.scss';

html {
  @include flexbox;
  @include flex-justify-content(center);
  height: 100vh;
  margin-top: bu(40);
  background-color: map-get($colours, 'mercury');
  font-family: map-get($fonts, 'source-sans');
}
</style>
