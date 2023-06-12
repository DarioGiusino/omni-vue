<script>
import BasePmiCard from '../generics/BasePmiCard.vue';
import BaseSimpleCard from '../generics/BaseSimpleCard.vue';
import { pmiCards, pmiBaseCards } from '../../data';

export default {
    name: "PmiSection",
    components: { BasePmiCard, BaseSimpleCard },
    data() {
        return {
            pmiCards, pmiBaseCards
        }
    }
}
</script>

<template>
    <section id="pmi-section" class="container">
        <!-- # title -->
        <h1 class="text-center mb-5">Offriamo alle PMI supporto nei seguenti ambiti</h1>

        <!-- # cards -->
        <!-- ? < 992px (base cards) -->
        <div class="mt-4 d-lg-none">
            <BasePmiCard v-for="card in pmiCards" :key="card.title" :title="card.title" :paragraph="card.paragraph"
                :image="card.image" :color="card.color" />
        </div>

        <!-- ? < 992px (top little cards + carousel) -->
        <!-- little cards -->
        <div class="my-5 d-flex">
            <base-simple-card v-for="card in pmiBaseCards" :key="card.title" :image="card.image" :title="card.title"
                :text="card.text" class="fb-25">
            </base-simple-card>
        </div>

        <!-- carousel -->
        <div id="pmi-carousel" class="carousel slide d-none d-lg-block">
            <!-- indicators -->
            <div class="carousel-indicators">
                <button v-for="(card, i) in pmiCards" :key="card.title" type="button" data-bs-target="#pmi-carousel"
                    :data-bs-slide-to="i" :class="i === 0 ? 'active' : ''"></button>
            </div>
            <!-- cards  -->
            <div class="carousel-inner">
                <div v-for="(card, i) in pmiCards" :key="card.title" class="carousel-item" :class="i === 0 ? 'active' : ''">
                    <BasePmiCard :title="card.title" :paragraph="card.paragraph" :image="card.image" :color="card.color" />
                </div>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

#pmi-section {
    margin-top: 5rem;

    h1 {
        font-weight: 700;
        font-size: 2rem;
    }

    #pmi-carousel {
        .carousel-indicators {
            bottom: -45px;

            [data-bs-target] {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: $black-400;
            }

            .active {
                width: 15px;
            }
        }
    }
}
</style>