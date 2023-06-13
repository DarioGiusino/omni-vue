<script>
export default {
    name: "BasePmiCard",
    props: {
        title: String,
        paragraph: String,
        image: String,
        color: String
    },
    methods: {
        // build image src
        cardIcon(path) {
            // build src
            const url = new URL(`../../assets/img/${path}`, import.meta.url);

            // return src
            return url.href;
        }
    }
}
</script>

<template>
    <div id="base-pmi-card" :style="'background-color:' + color" class="text-center text-lg-start mb-5 mb-lg-0">
        <!-- #card-top -->
        <div class="d-lg-flex">
            <!-- # title + paragraph -->
            <div class="card-text fb-60">
                <h1 class="mb-lg-4 fw-700 fs-xxl">{{ title }}</h1>
                <p class="mb-0 d-none d-lg-block">
                    {{ paragraph }}
                </p>
            </div>

            <!-- # image -->
            <figure class="p-0 fb-40 d-flex justify-content-center card-image">
                <img :src="cardIcon(image)" :alt="image">
            </figure>
        </div>

        <!-- # card-bottom (link) -->
        <div class="card-link">
            <a href="#" class="text-uppercase">
                <font-awesome-icon class="me-1" :icon="['fas', 'arrow-right']" />
                scopri di più
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/variables.scss" as *;

#base-pmi-card {
    color: $black-50;
    padding: 2rem;
    border-radius: 30px;
}

@media only screen and (min-width: 992px) {
    #base-pmi-card {
        margin: 0 15px;

        .card-image {
            width: 350px;
            height: 300px;
        }
    }
}
</style>