// // src/axiosMessage.js
// import axios from 'axios';
// import showToast from '../src/scripts/showToast';

// const axiosMessage = {
//     install() {
//         axios.interceptors.request.use(
//             function (config) {
//                 return config;
//             },
//             function (error) {
//                 return Promise.reject(error);
//             }
//         );

//         axios.interceptors.response.use(
//             function (response) {
//                 if (response.status === 200 && response.config.method.toLowerCase() !== 'get') {
//                     showToast('success', 'موفق', 'عملیات با موفقیت انجام شد', 3000);
//                 }
//                 return response;
//             },
//             function (error) {
//                 showToast('error', 'نا موفق', error?.response?.data?.message || 'مشکلی از طرف سرور رخ داده است', 3000);
//                 return Promise.reject(error);
//             }
//         );
//     }
// };

// export default axiosMessage;
