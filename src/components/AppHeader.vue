<script>
import NavbarComp from './header/NavbarComp.vue';
import JumboComp from './header/JumboComp.vue';

export default {
    name: "AppHeader",
    components: { NavbarComp, JumboComp }
}
</script>

<template>
    <header>
        <!-- # navbar -->
        <NavbarComp />

        <!-- # jumbotron -->
        <JumboComp />
    </header>
</template>

<style lang="scss" scoped></style>