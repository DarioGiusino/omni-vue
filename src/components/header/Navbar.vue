<script>
import { navbarLinks } from '../../data';
import BaseButton from '../generics/BaseButton.vue';
export default {
    name: "HeaderNavbar",
    components: { BaseButton },
    data() {
        return {
            isOpen: false,
            navbarLinks
        }
    },

    methods: {
        toggleButton() {
            this.isOpen = !this.isOpen;
        }
    }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg my-2">
        <div class="container-lg">
            <!-- logo -->
            <figure class="navbar-brand mb-0 me-0 p-0">
                <img class="w-75" src="../../assets/img/logo_blue.png" alt="logo_blue">
            </figure>

            <!-- sign in + hamburger (mobile) -->
            <div class="d-flex justify-content-center align-items-center gap-3 d-lg-none hambuger">
                <!-- sign in link -->
                <a href="#" class="d-flex justify-content-center align-items-center gap-1 sign-in-btn">
                    <img src="../../assets/img/exit_icon.png" alt="exit_icon">
                    <span>Accedi</span>
                </a>

                <!-- hamburger -->
                <button class="btn border-0" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" @click="toggleButton">
                    <img v-if="!isOpen" src="../../assets/img/hamburger_icon.png" alt="hamburger_icon">
                    <img v-if="isOpen" src="../../assets/img/cross_icon.png" alt="hamburger_icon2">
                </button>
            </div>

            <!-- collapse -->
            <div class="collapse navbar-collapse flex-grow-0 mt-4 mt-lg-0" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
                    <li v-for="object in navbarLinks" :key="object.title" class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                            {{ object.title }}
                        </a>
                        <ul class="dropdown-menu border-0">
                            <li v-for="links in object.links" :key="links">
                                <a class="dropdown-item" href="#">{{ links }}</a>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Blog</a>
                    </li>
                </ul>

            </div>

            <!-- sign in link(button) -->
            <div class="d-none d-lg-block">
                <BaseButton class="offset-bg" button-label="Accedi alla piattaforma">
                    <img src="../../assets/img/exit_icon.png" alt="exit_icon">
                </BaseButton>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/variables.scss" as *;

nav {
    .sign-in-btn {
        color: $green-700;
        font-weight: 700;
        font-size: 20px;
    }

    .dropdown-toggle::after {
        display: none;
    }

    .navbar-nav {
        line-height: normal;

        .nav-link {
            color: $blue-500;
            font-size: 13px;
            font-weight: 600;
        }

        .nav-link.show {
            color: $blue-800;
        }

        .dropdown-item {
            color: $blue-500;
            font-size: 13px;
        }
    }

    .offset-bg:after {
        background-color: $green-200;
    }
}
</style>