<script>
import BasePlanCard from '../generics/BasePlanCard.vue';
import { planGoList } from '../../data';
export default {
    name: "JumboComp",
    components: { BasePlanCard },
    data() {
        return { planGoList }
    },
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
    <section id="jumbotron" class="mb-5">
        <div class="container py-5 d-lg-flex justify-content-center align-items-center gap-4 gap-xl-5">
            <!-- # jumbo text -->
            <div class="jumbo-text fb-60">
                <h1 class="mb-4 fw-600">Il Welfare aziendale a portata di PMI</h1>
                <p class="fw-300 fs-m">My Sarma nasce con l'obiettivo di supportare le aziende a rispondere concretamente ai
                    bisogni di welfare
                    dei
                    propri dipendenti e collaboratori</p>

                <div class="jumbo-blob">
                    <div class="d-none d-lg-block blob-image">
                        <img :src="imagePath('jumbo_icon.png')" alt="jumbo_icon">
                    </div>
                    <p class="mb-0 fw-200 fs-s">Da oggi puoi attivare il tuo piano welfare direttamente online ed in pochi
                        semplici
                        passaggi grazie
                        al
                        <a class="fw-500 text-decoration-underline" href="#">Piano GO!</a>
                    </p>
                </div>
            </div>

            <!-- # jumbo card -->
            <div class="jumbo-card fb-30">
                <BasePlanCard class="offset-bg" textColor="#375ab5" title="Piano GO!" euro="12" cents="50"
                    :linkList="planGoList" buttonText="Attiva Piano GO!" arrowID="0" />
                <div class="d-none d-lg-block text-center mt-5">
                    <p class="mb-0">Cerchi un piano su misura per la tua azienda?</p>
                    <a href="#" class="text-decoration-underline">Scopri il <strong>Piano PRO</strong></a>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

#jumbotron {
    color: $black-50;

    background-image: url('../../assets/img/jumbo_bg.png');
    background-repeat: no-repeat;

    .jumbo-text {
        letter-spacing: 0.4px;

        h1 {
            font-size: 4rem;
        }
    }

    .jumbo-card {
        position: relative;
        top: 50px;

        .offset-bg:after {
            background-color: $blue-50;
        }
    }
}

@media only screen and (min-width: 992px) {
    #jumbotron {
        background-position: center;
        background-size: cover;

        .jumbo-text {
            p {
                font-size: 1.2rem;
            }

            .jumbo-blob {
                background-color: rgba($color: $blue-50, $alpha: 0.7);
                padding: 10px;
                border-radius: 10px;
                color: $blue-800;

                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;

                p {
                    font-weight: 300;
                    font-size: 0.8rem;

                    a {
                        font-weight: 500;
                        text-decoration: underline;
                    }
                }
            }
        }

        .jumbo-card {
            position: relative;
            top: 0;
        }
    }
}
</style>