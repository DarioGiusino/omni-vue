<script>
import BasePmiCard from '../generics/BasePmiCard.vue';
export default {
    name: "PmiSection",
    components: { BasePmiCard }
}
</script>

<template>
    <section id="pmi-section" class="container">
        <!-- # title -->
        <h1 class="text-center">Offriamo alle PMI supporto nei seguenti ambiti</h1>

        <!-- # cards -->
        <!-- ? < 992px (base cards) -->
        <div class="mt-4 d-lg-none">
            <BasePmiCard />
        </div>

        <!-- ? < 992px (carousel) -->
        <div id="pmi-carousel" class="carousel slide d-none d-lg-block">

            <div class="carousel-indicators">
                <button type="button" data-bs-target="#pmi-carousel" data-bs-slide-to="0" class="active"
                    aria-current="true"></button>
                <button type="button" data-bs-target="#pmi-carousel" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#pmi-carousel" data-bs-slide-to="2"></button>
            </div>

            <div class="carousel-inner">
                <div class="carousel-item active">
                    <BasePmiCard />
                </div>
                <div class="carousel-item">
                    <BasePmiCard />
                </div>
                <div class="carousel-item">
                    <BasePmiCard />
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