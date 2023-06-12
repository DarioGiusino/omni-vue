<script>
export default {
    name: "BasePmiCard",

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
    <div id="base-pmi-card" style="background-color: cornflowerblue;" class="text-center text-lg-start">
        <!-- #card-top -->
        <div class="d-lg-flex">
            <!-- # title + paragraph -->
            <div class="card-text fb-60">
                <h1 class="mb-lg-4">Welfare <br class="d-none d-lg-block">Guru</h1>
                <p class="mb-0 d-none d-lg-block">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt fugit porro
                    repellat placeat blanditiis eligendi culpa architecto, commodi eius similique cum illum adipisci,
                    dolores
                    voluptate, explicabo eveniet vero tempore tenetur?
                </p>
            </div>

            <!-- # image -->
            <figure class="p-0 fb-40 d-flex justify-content-center card-image">
                <img :src="cardIcon('carousel_1.png')" alt="pmi_1">
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

    .card-text {
        h1 {
            font-weight: 700;
            font-size: 3rem;
        }
    }


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