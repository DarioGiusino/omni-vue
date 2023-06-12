<script>
import BaseCard from '../generics/BaseCard.vue';
import { planGoList } from '../../data';
export default {
    name: "JumboComp",
    components: { BaseCard },
    data() {
        return { planGoList }
    }
}
</script>

<template>
    <section id="jumbotron" class="mb-5">
        <div class="container py-5 d-lg-flex justify-content-center align-items-center gap-4">
            <!-- # jumbo text -->
            <div class="jumbo-text fb-60">
                <h1 class="mb-4">Il Welfare aziendale a portata di PMI</h1>
                <p>My Sarma nasce con l'obiettivo di supportare le aziende a rispondere concretamente ai bisogni di welfare
                    dei
                    propri dipendenti e collaboratori</p>

                <div class="jumbo-blob">
                    <div class="d-none d-lg-block blob-image">
                        <img src="../../assets/img/jumbo_icon.png" alt="jumbo_icon">
                    </div>
                    <p class="mb-0">Da oggi puoi attivare il tuo piano welfare direttamente online ed in pochi semplici
                        passaggi grazie
                        al
                        <a href="#">Piano GO!</a>
                    </p>
                </div>
            </div>

            <!-- # jumbo card -->
            <div class="jumbo-card fb-40">
                <BaseCard text-color="#375ab5" title="Piano GO!" euro="12" cents="50" :linkList="planGoList"
                    buttonText="Attiva Piano GO!" />
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
            font-weight: 600;
            font-size: 3.5rem;
        }

        p {
            font-weight: 300;
            font-size: 1.5rem;
        }

        .jumbo-blob {
            p {
                font-weight: 200;
                font-size: 1rem;

                a {
                    font-weight: 500;
                    text-decoration: underline;
                }
            }
        }
    }

    .jumbo-card {
        position: relative;
        top: 50px;
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