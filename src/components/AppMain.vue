<script>
import PmiSection from './main/PmiSection.vue';
import MobileSection from './main/MobileSection.vue';
import WelfareSection from './main/WelfareSection.vue';
export default {
    name: "AppMain",
    components: { PmiSection, MobileSection, WelfareSection }
}
</script>

<template>
    <main>
        <PmiSection />
        <MobileSection />
        <WelfareSection />
    </main>
</template>

<style lang="scss" scoped></style>