/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'Fira Code', 'monospace']
            },
            colors: {
                primary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e'
                }
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        'code::before': { content: '""' },
                        'code::after': { content: '""' },
                        'code': {
                            backgroundColor: theme('colors.gray.100'),
                            padding: '0.25rem 0.375rem',
                            borderRadius: '0.25rem',
                            fontWeight: '400'
                        }
                    }
                },
                dark: {
                    css: {
                        color: theme('colors.gray.300'),
                        a: {
                            color: theme('colors.primary.400'),
                            '&:hover': { color: theme('colors.primary.300') }
                        },
                        h1: { color: theme('colors.gray.100') },
                        h2: { color: theme('colors.gray.100') },
                        h3: { color: theme('colors.gray.100') },
                        h4: { color: theme('colors.gray.100') },
                        strong: { color: theme('colors.gray.100') },
                        code: {
                            color: theme('colors.gray.200'),
                            backgroundColor: theme('colors.gray.800')
                        },
                        blockquote: {
                            color: theme('colors.gray.400'),
                            borderLeftColor: theme('colors.gray.700')
                        }
                    }
                }
            })
        }
    },
    plugins: [
        require('@tailwindcss/typography')
    ]
};
