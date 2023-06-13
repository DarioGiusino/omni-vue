<script>
export default {
    name: "WelfareCollabSection",
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
    <section id="welfare-collab-section" class="section-top-margin text-center px-lg-5"
        :style="`background-image: url(${imagePath('welfare_bg.png')})`">

        <div class="container">
            <h3>Sfrutta al meglio il tuo potenziale e fai crescere</h3>

            <h1 class="mt-3 mb-4 fw-700 fs-xl">il benessere dei tuoi collaboratori</h1>

            <p class="mb-0 fw-300">
                Attiva subito il <strong>Piano Go</strong> oppure richiedi un preventivo gratuito per attivare un
                <strong>Piano Pro.</strong> Il nostro Welfare guru è pronto a consigliarti la migliore soluzione in base
                alle tue esigenze
            </p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

#welfare-collab-section {
    background-repeat: no-repeat;
    background-position: center;

    color: $black-50;
    padding-top: 5rem;
    padding-bottom: 5rem;

    h3 {
        opacity: 0.8;
    }

    h1 {
        line-height: 2.5rem;
    }
}
</style>