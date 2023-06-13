<script>
import ContactForm from './footer/ContactForm.vue';
import FooterBottom from './footer/FooterBottom.vue';

export default {
    name: "AppFooter",
    components: { ContactForm, FooterBottom }
}
</script>

<template>
    <footer>
        <!-- # contact form -->
        <ContactForm />

        <!-- # fotter bottom -->
        <FooterBottom />
    </footer>
</template>

<style lang="scss" scoped></style>