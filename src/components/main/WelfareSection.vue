<script>
import BaseSimpleCard from '../generics/BaseSimpleCard.vue';
import BaseButton from '../generics/BaseButton.vue';
import { welfareCards } from '../../data';
export default {
    name: "WelfareSection",
    components: { BaseSimpleCard, BaseButton },
    data() {
        return { welfareCards }
    }
}
</script>

<template>
    <section id="welfare-section" class="container section-top-margin">
        <!-- # header -->
        <header class="mb-5">
            <h1 class="text-center fw-700 fs-xxl mb-4">Welfare aziendale?</h1>
            <p class="text-center fw-500 fs-m">Te lo diciamo noi se non lo sai</p>
        </header>

        <!-- # main -->
        <main class="d-lg-flex">
            <base-simple-card v-for="(card, i) in welfareCards" :key="card.title" :image="card.image" :title="card.title"
                :text="card.text" :isSquare="i == 0 ? false : true" class="fb-25 mb-5 mb-lg-0">
                <BaseButton class="offset-bg fw-700 px-4 py-2" buttonLabel="Scopri di più" />
            </base-simple-card>
        </main>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

#welfare-section {
    header {
        p {
            color: $black-350;
        }
    }
}
</style>