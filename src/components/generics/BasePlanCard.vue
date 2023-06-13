<script>
import BaseButton from './BaseButton.vue';
export default {
    name: "BasePlanCard",
    components: { BaseButton },
    props: {
        textColor: String,
        title: String,
        euro: String,
        cents: String,
        linkList: Array,
        buttonText: String,
        arrowID: String
    },
    data() {
        return {
            rotate: "",
            isOpen: true,
        }
    },

    methods: {
        toggleButton() {
            this.isOpen = !this.isOpen;
            this.rotate = this.isOpen ? "" : "rotate";
        },

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
    <div id="base-plan-card" :style="'color:' + textColor">
        <!-- # card top -->
        <header>
            <!-- card title -->
            <div class="card-title">
                <h1 class="fw-700 mb-0">{{ title }}</h1>
                <sub>a partire da</sub>
            </div>

            <!-- card price -->
            <div class="card-price fw-800">
                <div class="d-flex justify-content-center align-items-center gap-2">
                    <span class="fs-xxxl">€{{ euro }}</span>
                    <div class="d-flex flex-column justify-content-center align-items-center">
                        <span class="fs-m">,{{ cents }}</span>
                        <span class="vat fw-200">+ IVA</span>
                    </div>
                </div>
                <p class="price-period fw-400 mb-0 d-flex justify-content-center align-items-center gap-2">
                    all'anno / per utente
                    <img :src="imagePath('info_icon.png')" alt="info_icon">

                </p>
            </div>
        </header>

        <!-- # card hr -->
        <div class="card-hr mb-2"></div>

        <!-- # card central -->
        <main>
            <!-- button toggler -->
            <button class="btn border-0 opacity-25 d-lg-none mb-4" :class="rotate" type="button" data-bs-toggle="collapse"
                :data-bs-target="'#card-central' + arrowID" @click="toggleButton">
                <font-awesome-icon :icon="['fas', 'chevron-up']" />
            </button>

            <!-- collapse -->
            <div class="collapse flex-grow-0 show" :id="'card-central' + arrowID">
                <ul class="p-0 text-start">
                    <li v-for="item in linkList" :key="item" class="d-flex align-items-center gap-2 mb-3 fw-500">
                        <img :src="imagePath('checklist_icon.png')" alt="check_icon">
                        <span>{{ item }}</span>
                    </li>
                </ul>
            </div>
        </main>

        <!-- # card bottom -->
        <footer>
            <!-- button -->
            <div class="d-flex justify-content-center align-items-center mb-4">
                <base-button class="offset-bg fw-700" :button-label="buttonText"></base-button>
            </div>

            <!-- plan info -->
            <p class="mb-0 opacity-50">Vuoi maggiori informazioni sul piano?</p>
            <a class="text-decoration-underline fw-700" href="#">Scopri di più</a>
        </footer>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/style.scss' as generics;
@use '../../assets/scss/partials/variables.scss' as *;

#base-plan-card {
    text-align: center;
    padding: 1.5rem 1rem;

    header {
        .card-price {
            line-height: normal;
            color: #112340;

            .vat {
                font-size: 0.7rem;
            }

            .price-period {
                position: relative;
                bottom: 8px;
            }
        }
    }

    .card-hr {
        background-color: $blue-800;
        width: 100%;
        height: 1px;
    }

    main {
        button.rotate {
            rotate: 180deg;
        }

        [id^="card-central"] {
            color: #112340;

            li {
                line-height: normal;
                font-size: 18px;

                img {
                    position: relative;
                    bottom: 1px;
                }
            }
        }
    }

    footer {
        text-align: center;

        .offset-bg {
            padding: 10px 60px;
            font-size: 1.3rem;

            &:after {
                background-color: $black-50;
            }
        }
    }
}
</style>