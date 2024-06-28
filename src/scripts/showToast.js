// // src/toastUtil.js
// import { createApp } from 'vue';
// import ToastService from 'primevue/toastservice';
// import Toast from 'primevue/toast';

// let app;

// function initToast() {
//     if (!app) {
//         app = createApp({});
//         app.use(ToastService);
//         const vm = app.mount(document.createElement('div'));
//         document.body.appendChild(vm.$el);
//     }
// }

// export default function showToast(severity, summary, detail, life = 3000) {
//     initToast();
//     app.config.globalProperties.$toast.add({ severity, summary, detail, life });
// }
