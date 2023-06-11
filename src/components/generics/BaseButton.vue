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

    &:after {
        content: "";
        width: 100%;
        height: 100%;

        border-radius: 10px;

        position: absolute;
        top: 4px;
        left: 4px;
        z-index: -1;
        transition: 0.2s;
    }

    &:hover {

        &:after {
            top: 0px;
            left: 0px;
        }
    }
}
</style>