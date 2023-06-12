<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: "OmniTest",
  components: { AppHeader, AppMain, AppFooter }
}
</script>

<template>
  <!-- # header -->
  <AppHeader />

  <!-- # main -->
  <AppMain />

  <!-- # footer -->
  <AppFooter />
</template>

<style lang="scss">
@use "./assets/scss/style.scss";
</style>
