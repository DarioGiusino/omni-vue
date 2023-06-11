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

    border: 1px solid black;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: transparent;

    position: relative;
}
</style>