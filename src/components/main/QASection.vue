<script>
import BaseQA from '../generics/BaseQA.vue';
import { QAList } from '../../data';

export default {
    name: "QASection",
    components: { BaseQA },
    data() {
        return { QAList }
    }
}
</script>

<template>
    <section id="qa-section" class="container section-top-margin px-lg-5">
        <!-- # title -->
        <h1 class="text-center mb-5">Domande frequenti</h1>

        <!-- # q&a -->
        <div>
            <BaseQA v-for="(item, i) in QAList" :key="i" :title="item.title" :text="item.text" :index="i" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

#qa-section {
    h1 {
        color: $blue-600;
    }
}
</style>