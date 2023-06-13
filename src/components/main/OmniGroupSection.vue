<script>
export default {
    name: "OmniGroupSection",
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
    <section id="omni-group-section" class="container section-top-margin">
        <main class="d-lg-flex align-items-center gap-5">
            <figure class="mb-4 mb-lg-0 px-5 d-flex justify-content-center fb-40">
                <img :src="imagePath('logo_omni.png')" alt="omni_image">
            </figure>

            <div class="fb-60">
                <h1 class="mb-4 fw-700 fs-l">Facciamo parte di un grande gruppo!</h1>
                <p class="d-none d-lg-block">
                    Il Gruppo Omninext è costituito da aziende altamente specializzate interconnesse tra loro, che
                    permettono di ricoprire diversi settori industriali per necessità di Business personalizzate.
                </p>
                <a href="#" class="text-uppercase">
                    <font-awesome-icon class="me-1" :icon="['fas', 'arrow-right']" />
                    scopri di più
                </a>
            </div>
        </main>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

#omni-group-section {
    main {
        border: 1px solid $blue-500;
        border-radius: 20px;
        padding: 1.5rem;
        color: $blue-500;

        p {
            color: $black-350;
        }
    }
}
</style>