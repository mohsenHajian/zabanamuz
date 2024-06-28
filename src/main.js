import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { Icon } from "@iconify/vue";

// repositories
import repositories from "../plugins/repositories";
// import axiosMessage from '../plugins/axiosMessage';
import globalProperties from "../plugins/globalProperties";

// directives
import clickOutside from "../directives/click-outside";

// mixin
import { globalMixin } from "../mixin/globalMixin";

import BlockViewer from "@/components/BlockViewer.vue";

import "@/assets/styles.scss";
import "@/assets/_tailwind.css";

// custom components
import LoadingSpinner from "../components/Global/LoadingSpinner.vue";

// store
import store from "../store/index";

const app = createApp(App);
// app.config.globalProperties.$store = store;
app.use(repositories);
// app.use(axiosMessage);
app.use(globalProperties);
app.use(store);
app.mixin(globalMixin);
app.use(router);

app.component("Icon", Icon);

// app.use(PrimeVue, { ripple: true });
// app.use(PrimeVue, {
//     ripple: true
// });
// app.use(ToastService);
// app.use(DialogService);
// app.use(ConfirmationService);

app.directive("click-outside", clickOutside);
// app.directive('tooltip', Tooltip);
// app.directive('badge', BadgeDirective);
// app.directive('ripple', Ripple);
// app.directive('styleclass', StyleClass);

app.component("BlockViewer", BlockViewer);

// custom components
app.component("LoadingSpinner", LoadingSpinner);

app.mount("#app");
