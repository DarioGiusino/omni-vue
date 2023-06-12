<script>
export default {
    name: 'BaseButton',
    props: { buttonLabel: String },
}
</script>

<template>
    <!-- # generic button -->
    <button type="button">
        <!-- slot to add some icon [or not :) ] -->
        <slot></slot>
        <span>{{ buttonLabel }}</span>
    </button>
</template>

<style scoped lang="scss">
button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    line-height: normal;
    font-size: 13px;

    padding: 5px 10px;
    background-color: transparent;

    &:focus {
        outline: 1px solid #0b1038;
    }
}
</style>