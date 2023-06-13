<script>
export default {
    name: "BaseQA",
    props: {
        title: String,
        text: String,
        index: Number
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
    <div class="border-bottom">
        <p class="my-3 fw-700 fs-s d-flex align-items-center justify-content-between" data-bs-toggle="collapse"
            :data-bs-target="'#qacollapse' + index" @click="toggleButton">
            {{ title }}
            <font-awesome-icon class="text-end" :class="rotate" :icon="['fas', 'chevron-up']" />
        </p>

        <div class="collapse" :id="'qacollapse' + index">
            {{ text }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

.rotate {
    rotate: 180deg;
}

.collapse {
    color: $black-350;
}
</style>