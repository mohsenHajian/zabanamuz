let baseFileURL = import.meta.env.VITE_FILE_URL;
// src/mixins/myMixin.js
export const globalMixin = {
    data() {
        return {
            fileURL: baseFileURL
        };
    },
    methods: {
        parseDate(date) {
            return Date.parse(date);
        },
        timeStampToDay(timestamp) {
            return new Date(timestamp).toLocaleDateString('fa-IR', {
                day: 'numeric'
            });
        },
        timeStampToWeekDay(timestamp) {
            return new Date(timestamp).toLocaleDateString('fa-IR', {
                weekday: 'long'
            });
        },
        timeStampToMonth(timestamp) {
            return new Date(timestamp).toLocaleDateString('fa-IR', {
                month: 'long'
            });
        },
        timeStampFromHour(timestamp) {
            return new Date(timestamp).toLocaleTimeString('fa-IR', {
                hour: 'numeric',
                minute: 'numeric'
            });
        }
    }
};
