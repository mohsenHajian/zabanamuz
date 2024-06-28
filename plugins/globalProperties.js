// src/plugins/globalProperties.js
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

export default {
    install(app) {
        app.config.globalProperties.$store = useStore();
        app.config.globalProperties.$route = useRoute();
        app.config.globalProperties.$router = useRouter();
    }
};
