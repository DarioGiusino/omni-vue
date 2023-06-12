<script>
export default {
    name: "JumboComp"
}
</script>

<template>
    <section id="jumbotron">
        <div class="container pt-5">
            <!-- # jumbo text -->
            <div class="jumbo-text">
                <h1 class="mb-4">Il Welfare aziendale a portata di PMI</h1>
                <p>My Sarma nasce con l'obiettivo di supportare le aziende a rispondere concretamente ai bisogni di welfare
                    dei
                    propri dipendenti e collaboratori</p>

                <sub>Da oggi puoi attivare il tuo piano welfare direttamente online ed in pochi semplici passaggi grazie al
                    <a href="#">Piano GO!</a></sub>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

#jumbotron {
    height: 800px; // ? da tenere d'occhio 
    color: $black-50;

    background-image: url('../../assets/img/jumbo_bg_mobile.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

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

        sub {
            font-weight: 200;
            font-size: 1rem;

            a {
                font-weight: 500;
                text-decoration: underline;
            }
        }
    }
}

@media only screen and (min-width: 992px) {
    #jumbotron {
        background-image: url('../../assets/img/jumbo_bg_desktop.png');
    }
}
</style>