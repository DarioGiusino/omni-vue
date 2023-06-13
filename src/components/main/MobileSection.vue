<script>
export default {
    name: "MobileSection",
    methods: {
        // build image src
        imagePath(path) {
            // build src
            const url = new URL(`../../assets/img/${path}`, import.meta.url);

            // return src
            return url.href;
        }
    }
}
</script>

<template>
    <section id="mobile-section" class="container section-top-margin d-lg-flex justify-content-center align-items-center">
        <!-- ? < 992px -->
        <div class="mobile-text fb-50 p-lg-5">
            <h1 class="fw-700 fs-xxl mb-lg-5">App</h1>
            <div class="d-none d-lg-block">
                <p class="mb-lg-5 fs-m">
                    Con l'app MySarma gestirai il tuo credito welfare e potrai accedere al catalogo dei Benedit e Servizi
                    acquistabili.
                </p>

                <a href="#" class="text-uppercase">
                    <font-awesome-icon class="me-1" :icon="['fas', 'arrow-right']" />
                    coming soon
                </a>
            </div>
        </div>

        <figure class="my-5 d-flex justify-content-center fb-50">
            <img :src="imagePath('app_section_logo.png')" alt="mobile_app">
        </figure>

        <!-- ? > 992px -->
        <div class="d-lg-none">
            <p class="fs-m mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut
                labore
                et dolore
                magna aliqua.</p>

            <div class="card-link">
                <a href="#" class="text-uppercase">
                    <font-awesome-icon class="me-1" :icon="['fas', 'arrow-right']" />
                    coming soon
                </a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

#mobile-section {
    h1 {
        color: $blue-700;
    }

    p {
        color: #7d8797;
    }

    a {
        color: $black-800;
    }
}
</style>