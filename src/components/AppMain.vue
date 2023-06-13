<script>
import PmiSection from './main/PmiSection.vue';
import MobileSection from './main/MobileSection.vue';
import WelfareSection from './main/WelfareSection.vue';
import WelfareCollabSection from './main/WelfareCollabSection.vue';
import PlanSection from './main/PlanSection.vue';
export default {
    name: "AppMain",
    components: { PmiSection, MobileSection, WelfareSection, WelfareCollabSection, PlanSection }
}
</script>

<template>
    <main>
        <PmiSection />
        <MobileSection />
        <WelfareSection />
        <WelfareCollabSection />
        <PlanSection />
    </main>
</template>

<style lang="scss" scoped></style>