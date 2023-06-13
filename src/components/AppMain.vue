<script>
import PmiSection from './main/PmiSection.vue';
import MobileSection from './main/MobileSection.vue';
import WelfareSection from './main/WelfareSection.vue';
import WelfareCollabSection from './main/WelfareCollabSection.vue';
import PlanSection from './main/PlanSection.vue';
import OmniGroupSection from './main/OmniGroupSection.vue';
import QASection from './main/QASection.vue';

export default {
    name: "AppMain",
    components: { PmiSection, MobileSection, WelfareSection, WelfareCollabSection, PlanSection, OmniGroupSection, QASection }
}
</script>

<template>
    <main>
        <!-- # pmi section -->
        <PmiSection />

        <!-- # mobile section -->
        <MobileSection />

        <!-- # welfare section -->
        <WelfareSection />

        <!-- # welfare collab section-->
        <WelfareCollabSection />

        <!-- # plans section -->
        <PlanSection />

        <!-- # omni group section -->
        <OmniGroupSection />

        <!-- # q&a section -->
        <QASection />
    </main>
</template>

<style lang="scss" scoped></style>