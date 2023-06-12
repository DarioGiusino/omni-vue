<script>
export default {
    name: "BaseSimpleCard",
    props: {
        image: String,
        title: String,
        text: String
    },
    methods: {
        // build image src
        cardIcon(path) {
            // build src
            const url = new URL(`../../assets/img/${path}`, import.meta.url);

            // return src
            return url.href;
        }
    }
}
</script>

<template>
    <div class="simple-card text-center d-flex flex-column align-items-center">
        <figure v-if="image" class="d-flex justify-content-center mb-0">
            <img :src="cardIcon(image)" :alt="image">
        </figure>

        <h3 class="mb-0">{{ title }}</h3>

        <p>{{ text }}</p>

        <!-- slot for button -->
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.simple-card {
    color: #7f889e;
    padding: 10px;

    figure {
        height: 200px;

        img {
            scale: 0.8;
        }
    }

    h3 {
        font-weight: 700;
        font-size: 1rem;
    }

    p {
        font-weight: 300;
        font-size: 1rem;
    }
}
</style>