<script>
import BaseButton from './BaseButton.vue';
export default {
    name: "BaseCard",
    components: { BaseButton },
    props: {
        textColor: String,
        title: String,
        euro: String,
        cents: String,
        linkList: Array,
        buttonText: String,
    },
    data() {
        return {
            rotate: "rotate",
            isOpen: true,
        }
    },

    methods: {
        toggleButton() {
            this.isOpen = !this.isOpen;
            this.rotate = this.isOpen ? "rotate" : "";
        }
    }
}
</script>

<template>
    <div id="base-card" :style="'color:' + textColor">
        <!-- # card top -->
        <header>
            <!-- card title -->
            <div class="card-title">
                <h1>{{ title }}</h1>
                <sub>a partire da</sub>
            </div>

            <!-- card price -->
            <div class="card-price">
                <div class="d-flex justify-content-center align-items-center gap-2">
                    <span class="euro-int">€{{ euro }}</span>
                    <div class="d-flex flex-column justify-content-center align-items-center">
                        <span class="euro-cent">,{{ cents }}</span>
                        <span class="vat">+ IVA</span>
                    </div>
                </div>
                <p class="price-period d-flex justify-content-center align-items-center gap-2">
                    all'anno / per utente
                    <img src="../../assets/img/info_icon.png" alt="info_icon">
                </p>
            </div>
        </header>

        <!-- # card hr -->
        <div class="card-hr mb-2"></div>

        <!-- # card central -->
        <main>
            <!-- button toggler -->
            <button class="btn border-0 opacity-25 d-lg-none mb-4" :class="rotate" type="button" data-bs-toggle="collapse"
                data-bs-target="#card-central" @click="toggleButton">
                <font-awesome-icon :icon="['fas', 'chevron-up']" />
            </button>

            <!-- collapse -->
            <div class="collapse flex-grow-0 show" id="card-central">
                <ul class="p-0 text-start">
                    <li v-for="  item   in   linkList  " :key="item" class="d-flex align-items-center gap-2 mb-3">
                        <img src="../../assets/img/checklist_icon.png" alt="check_icon">
                        <span>{{ item }}</span>
                    </li>
                </ul>
            </div>
        </main>

        <!-- # card bottom -->
        <footer>
            <!-- button -->
            <div class="d-flex justify-content-center align-items-center mb-4">
                <base-button class="offset-bg" :button-label="buttonText"></base-button>
            </div>

            <!-- plan info -->
            <p class="mb-0 opacity-50">Vuoi maggiori informazioni sul piano?</p>
            <a href="#">Scopri di più</a>
        </footer>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/style.scss' as generics;
@use '../../assets/scss/partials/variables.scss' as *;

#base-card {
    text-align: center;
    padding: 1.5rem 1rem;

    header {
        .card-title {
            h1 {
                font-weight: 700;
                margin-bottom: 0;
            }
        }

        .card-price {
            font-weight: 800;
            line-height: normal;
            color: #112340;

            .euro-int {
                font-size: 3.5rem;
            }

            .euro-cent {
                font-size: 1.5rem;
            }

            .vat {
                font-weight: 200;
                font-size: 0.7rem;
            }

            .price-period {
                font-weight: 400;
                margin-bottom: 0;

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

        #card-central {
            color: #112340;

            li {
                line-height: normal;
                font-weight: 500;
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
            font-weight: 700;
            font-size: 1.3rem;

            &:after {
                background-color: $black-50;
            }
        }

        a {
            font-weight: 700;
            text-decoration: underline;
        }
    }
}
</style>