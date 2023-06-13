<script>
import BaseButton from '../generics/BaseButton.vue';
export default {
    name: "ContactForm",
    components: { BaseButton },
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
    <section id="contact-form" class="section-top-margin"
        :style="`background-image: url(${imagePath('newsletter_bg.png')})`">
        <div class="container contact-container d-lg-flex align-items-center justify-content-center gap-5">
            <div class="fb-50">
                <h1 class="fw-600 fs-l">Resta aggiornato</h1>
                <p class="pe-5 mb-5 mb-lg-0 fw-300">Iscriviti alla newsletter per ricevere aggiornamenti sulle nuove offerte
                    e
                    partner
                    MySarma
                </p>
            </div>

            <div class="fb-50 d-lg-flex align-items-center gap-4">
                <div class="fb-70">
                    <label for="contact-mail" class="form-label">Il tuo indirizzo mail</label>
                    <div class="input-group mb-4">
                        <span class="input-group-text">@</span>
                        <input type="email" class="form-control" id="contact-mail">
                    </div>
                </div>
                <div class="d-flex justify-content-end d-lg-block me-1 fb-30">
                    <BaseButton class=" offset-bg fw-700 px-4 py-2" buttonLabel="Invia" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

#contact-form {
    .contact-container {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        color: $black-50;
        padding-top: 5rem;
        padding-bottom: 5rem;

        p {
            opacity: 0.8;
        }

        .input-group-text {
            color: $black-350;
            background-color: $black-50;
        }

        #contact-mail {
            padding: 0.5rem 0.2rem;

            &:focus {
                box-shadow: none;
                border-color: $black-50;
            }
        }

        .offset-bg {
            &:after {
                background-color: $black-50;
            }
        }
    }
}
</style>