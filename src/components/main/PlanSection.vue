<script>
import BasePlanCardVue from '../generics/BasePlanCard.vue';
import { planGoList, planProList } from '../../data';
export default {
    name: "PlanSection",
    components: { BasePlanCardVue },
    data() {
        return { planGoList, planProList }
    }
}
</script>

<template>
    <section id="plan-section" class="container section-top-margin">
        <!-- # header -->
        <header class="mb-5">
            <h1 class="text-center fw-700 fs-xl mb-4">Attiva il tuo piano Go oppure Pro</h1>
            <p class="text-center fw-500 fs-m">Scegli se attivare subito il Piano Go oppure richiedere un preventivo per il
                Piano Pro al nostro cosulente</p>
        </header>

        <!-- # main -->
        <main class="d-lg-flex justify-content-center gap-5">
            <BasePlanCardVue class="offset-bg mb-5" textColor="#375ab5" title="Piano GO!" euro="12" cents="50"
                :linkList="planGoList" buttonText="Attiva Piano GO!" arrowID="1" />

            <BasePlanCardVue class="offset-bg" textColor="#4840b5" title="Piano PRO" euro="22" cents="80"
                :linkList="planProList" buttonText="Calcola preventivo" arrowID="2" />
        </main>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

#plan-section {
    header {
        p {
            color: $black-350;
        }
    }

    main {
        .offset-bg:first-child {
            &:after {
                background-color: $blue-50;
            }
        }

        .offset-bg:last-child {
            &:after {
                background-color: $purple-100;
            }
        }
    }
}
</style>