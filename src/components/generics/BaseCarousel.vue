<script>
import BasePmiCard from './BasePmiCard.vue';

export default {
    name: "BaseCarousel",
    components: { BasePmiCard },
    props: {
        cards: Array
    }
}
</script>

<template>
    <div id="my-carousel" class="carousel slide">
        <!-- indicators -->
        <div class="carousel-indicators">
            <button v-for="(card, i) in cards" :key="card.title" type="button" data-bs-target="#my-carousel"
                :data-bs-slide-to="i" :class="i === 0 ? 'active' : ''"></button>
        </div>
        <!-- cards  -->
        <div class="carousel-inner">
            <div v-for="(card, i) in cards" :key="card.title" class="carousel-item" :class="i === 0 ? 'active' : ''">
                <BasePmiCard :title="card.title" :paragraph="card.paragraph" :image="card.image" :color="card.color" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/variables.scss" as *;

#my-carousel {
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
</style>