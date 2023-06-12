import { createApp } from "vue";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

//fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronUp);

import App from "./App.vue";

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
