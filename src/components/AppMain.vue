<script>
import PmiSection from './main/PmiSection.vue';
import MobileSection from './main/MobileSection.vue';
import WelfareSection from './main/WelfareSection.vue';
import WelfareCollabSection from './main/WelfareCollabSection.vue';
export default {
    name: "AppMain",
    components: { PmiSection, MobileSection, WelfareSection, WelfareCollabSection }
}
</script>

<template>
    <main>
        <PmiSection />
        <MobileSection />
        <WelfareSection />
        <WelfareCollabSection />
    </main>
</template>

<style lang="scss" scoped></style>