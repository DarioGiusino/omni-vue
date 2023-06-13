<script>
import BaseList from '../generics/BaseList.vue';
import { footerList } from '../../data';

export default {
    name: "FooterBottom",
    components: { BaseList },
    data() {
        return { footerList }
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
    <section id="footer-bottom">
        <div class="container">
            <!-- #footer top -->
            <div class="foot-top d-lg-flex align-items-start gap-5">
                <!-- logo -->
                <div class="d-flex flex-column align-items-center justify-content-center mb-3">
                    <figure>
                        <img :src="imagePath('logo_white.png')" alt="logo_white">
                    </figure>

                    <!-- ? flag -->
                    <div class="italian-flag mb-3"></div>

                    <p class="fw-200">Il welfare aziendale tutto <br> italiano a portata di PMI.</p>
                </div>

                <!-- lists -->
                <div class="foot-lists d-flex flex-wrap justify-content-center gap-lg-4 flex-lg-grow-1 pt-lg-3">
                    <base-list v-for="(item, i) in footerList" :key="item.title" :title="item.title" :links="item.links"
                        class="fb-50 fb-sm-40 fb-lg-20 mb-3">
                        <font-awesome-icon v-if="i === (footerList.length - 1)" class="me-2" :icon="['fab', 'linkedin']" />
                    </base-list>
                    <div
                        class="foot-plans-list fb-50 fb-sm-40 fb-lg-20 mb-3 d-flex flex-column justify-content-between gap-5">
                        <div>
                            <a href="#">Piano GO!</a>
                            <br>
                            <a href="#">Piano PRO</a>
                        </div>
                        <a href="#">Diventa partner</a>
                    </div>
                </div>
            </div>

            <!-- #footer bottom -->
            <div class="foot-bot d-lg-flex align-items-center justify-content-between">
                <p class="mb-lg-0">Copyright © MySarma srl - Tutti i diritti riservati</p>
                <a href="#"><strong>Privacy e Cookie Policy</strong></a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

#footer-bottom {
    background-color: $black-600;
    padding-top: 5rem;
    padding-bottom: 1rem;

    color: $black-50;

    .foot-top {
        .italian-flag {
            height: 2px;
            width: 12rem;
            background-image: linear-gradient(to right, green, white, red);
        }

        .foot-plans-list {
            a {
                font-weight: 700;
                font-size: 1.2rem;

                &:nth-child(1) {
                    color: $blue-200;
                }

                &:nth-child(3) {
                    color: $purple-300;
                }

                &:nth-child(2) {
                    color: $black-200;
                }
            }
        }
    }

    .foot-bot {
        color: $black-350;
        padding-top: 1rem;
        border-top: 1px solid $black-350;
    }

}

@media only screen and (min-width: 992px) {
    #footer-bottom {
        .foot-top {
            .foot-plans-list {
                position: relative;

                a {
                    font-size: 0.9rem;
                }

                &::before {
                    content: '';
                    position: absolute;
                    top: 1px;
                    bottom: 0;
                    left: -30px;
                    width: 1px;
                    height: 100%;
                    background-color: $black-350;
                }
            }
        }
    }
}
</style>