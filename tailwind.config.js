module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#ff4338',
                secondary: '#fafafc',
                tertiary: '#313638',
                accent: '#33B4EB',
                'accent-active': '#1c7faa',
                'light-bg': '#fafafc',
                'primary-gray': '#999999',
                'primary-dark-gray': '#313140',
                'gray-dark': '#808080'
            },
            gridTemplateRows: {
                12: 'repeat(12, minmax(0, 1fr))'
            },
            gridRowStart: {
                8: '8',
                9: '9',
                10: '10',
                11: '11',
                12: '12',
                13: '13'
            },
            gridRowEnd: {
                8: '8',
                9: '9',
                10: '10',
                11: '11',
                12: '12',
                13: '13'
            }
        },
        screens: {
            xs: '320px',
            // => @media (min-width: 320px) { ... }

            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px'
            // => @media (min-width: 1536px) { ... }
        }
    },
    variants: {
        extend: {}
    },
    plugins: [require('daisyui')],
    daisyui: {
        rtl: true,
        logs: false,
        themes: [
            {
                light: {
                    primary: '#ff4338',
                    'primary-focus': '#ff4338',
                    'primary-content': '#ffffff',
                    secondary: '#fafafc',
                    'secondary-focus': '#fafafc',
                    'secondary-content': '#ffffff',
                    accent: '#33B4EB',
                    'accent-active': '#1c7faa',
                    'accent-focus': '#33B4EB',
                    'accent-content': '#ffffff',
                    neutral: '#3d4451',
                    'neutral-focus': '#2a2e37',
                    'neutral-content': '#ffffff',
                    'base-100': '#ffffff',
                    'base-200': '#f9fafb',
                    'base-300': '#d1d5db',
                    'base-content': '#1f2937',
                    info: '#2094f3',
                    success: '#009485',
                    warning: '#ff9900',
                    error: '#ff5724',
                    'primary-gray': '#999999',
                    'primary-dark-gray': '#313140',
                    'gray-dark': '#808080'
                }
            }
        ]
    }
};
