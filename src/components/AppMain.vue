<script>
import PmiSection from './main/PmiSection.vue';
import MobileSection from './main/MobileSection.vue';
export default {
    name: "AppMain",
    components: { PmiSection, MobileSection }
}
</script>

<template>
    <main>
        <PmiSection />
        <MobileSection />
    </main>
</template>

<style lang="scss" scoped></style>