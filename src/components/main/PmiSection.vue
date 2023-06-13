<script>
import BasePmiCard from '../generics/BasePmiCard.vue';
import BaseSimpleCard from '../generics/BaseSimpleCard.vue';
import { pmiCards, pmiBaseCards } from '../../data';
import BaseCarousel from '../generics/BaseCarousel.vue';

export default {
    name: "PmiSection",
    components: { BasePmiCard, BaseSimpleCard, BaseCarousel },
    data() {
        return {
            pmiCards, pmiBaseCards
        }
    }
}
</script>

<template>
    <section id="pmi-section" class="container section-top-margin">
        <!-- # header -->
        <header>
            <h1 class="text-center fw-bold fs-l mb-5">Offriamo alle PMI supporto nei seguenti ambiti</h1>
        </header>

        <!-- # cards -->
        <main>
            <!-- ? < 992px (base cards) -->
            <div class="mt-4 d-lg-none">
                <BasePmiCard v-for="card in pmiCards" :key="card.title" :title="card.title" :paragraph="card.paragraph"
                    :image="card.image" :color="card.color" />
            </div>

            <!-- ? > 992px (top little cards + carousel) -->
            <!-- little cards -->
            <div class="my-5 d-none d-lg-flex">
                <base-simple-card v-for="card in pmiBaseCards" :key="card.title" :image="card.image" :title="card.title"
                    :text="card.text" :isSquare="true" class="fb-25">
                </base-simple-card>
            </div>

            <!-- carousel -->
            <div class="d-none d-lg-block">
                <BaseCarousel :cards="pmiCards" />
            </div>
        </main>

    </section>
</template>

<style lang="scss" scoped></style>