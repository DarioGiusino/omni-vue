<script>
export default {
    name: "BaseList",
    props: {
        title: String,
        links: Array
    }
}
</script>

<template>
    <div class="base-list">
        <div>
            <h4>{{ title }}</h4>
            <ul>
                <li v-for="(link, i) in links" :key="i" class="mb-2">
                    <slot v-if="i === (links.length - 1)"></slot>
                    <a href="#">{{ link }}</a>
                </li>
            </ul>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

.base-list {
    h4 {
        color: $black-50;
    }

    li {
        color: $black-350;
    }
}

@media only screen and (min-width:992px) {
    .base-list {
        h4 {
            font-size: 1rem;
        }

        li {
            font-size: 0.8rem;
            font-weight: 300;
        }
    }
}
</style>