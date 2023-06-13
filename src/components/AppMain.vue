<script>
import PmiSection from './main/PmiSection.vue';
import MobileSection from './main/MobileSection.vue';
import WelfareSection from './main/WelfareSection.vue';
import WelfareCollabSection from './main/WelfareCollabSection.vue';
import PlanSection from './main/PlanSection.vue';
import OmniGroupSection from './main/OmniGroupSection.vue';

export default {
    name: "AppMain",
    components: { PmiSection, MobileSection, WelfareSection, WelfareCollabSection, PlanSection, OmniGroupSection }
}
</script>

<template>
    <main>
        <PmiSection />
        <MobileSection />
        <WelfareSection />
        <WelfareCollabSection />
        <PlanSection />
        <OmniGroupSection />
    </main>
</template>

<style lang="scss" scoped></style>