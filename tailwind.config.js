module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      md: '768px', // { min: 768, max: 1023 }
      lg: '1023px', // { min: 1024, max: 1799 }
      xl: '1801px', // { min: 1800 }
    },

    extend: {
      boxShadow: {
        '01': '0px 4px 20px rgba(165, 171, 184, 0.2)',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },

      fontSize: {
        'heading-01': [
          '1.875rem', // 30px
          {
            lineHeight: '4.063rem', // 65px
          },
        ],
        'heading-02': [
          '1.563rem', // 25px
          {
            lineHeight: '1.875rem', // 30px
          },
        ],
        'heading-03': [
          '1.375rem', // 22px
          {
            lineHeight: '1.563rem', // 25px
          },
        ],
        'heading-04': [
          '1.25rem', // 20px
          {
            lineHeight: '1.563rem', // 25px
          },
        ],
        'subheading-01': [
          '1.125rem', // 18px
          {
            lineHeight: '1.25rem', // 20px
          },
        ],
        'subheading-02': [
          '1rem', // 16px
          {
            lineHeight: '1.25rem', // 20px
          },
        ],
        'paragraph-01': [
          '0.938rem', // 15px
          {
            lineHeight: '1.25rem', // 20px
          },
        ],
        'paragraph-02': [
          '0.875rem', // 14px
          {
            lineHeight: '1.25rem', // 20px
          },
        ],
        'paragraph-03': [
          '0.813rem', // 13px
          {
            lineHeight: '1rem', // 16px
          },
        ],
        'paragraph-04': [
          '0.75rem', // 12px
          {
            lineHeight: '1rem', // 16px
          },
        ],
        'paragraph-05': [
          '0.688rem', // 11px
          {
            lineHeight: '1rem', // 16px
          },
        ],
        'paragraph-06': [
          '0.625rem', // 10px
          {
            lineHeight: '1rem', // 16px
          },
        ],
      },
      backgroundImage: {
        'auth-background': "url('./src/assets/images/food-background.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },

      colors: {
        transparent: 'transparent',
        disabled: '#C4C4C4',
        placeholder: '#9C9C9C',
        primary: {
          grey: {
            900: '#FFFFFF',
            800: '#F1F1F1',
            700: '#F6F7FB',
            600: '#EDEFEF',
            500: '#828282',
            400: '#4A4A4A',
            300: '#A5ABB8',
            200: '#1E1E1E',
            100: '#000000',
          },
          red: {
            300: '#F66A76',
            200: '#FA4C5B',
          },
        },
        feedback: {
          warning: {
            100: '#FFF2D1',
          },
          success: {
            200: '#3A9900',
            100: '#D3F4D3',
          },
        },
        others: {
          transparency: {
            grey: {
              900: 'rgba(0, 0, 0, 0.9)',
              800: 'rgba(0, 0, 0, 0.8)',
              700: 'rgba(0, 0, 0, 0.7)',
              600: 'rgba(0, 0, 0, 0.6)',
              500: 'rgba(0, 0, 0, 0.5)',
              400: 'rgba(0, 0, 0, 0.4)',
              300: 'rgba(0, 0, 0, 0.3)',
              200: 'rgba(0, 0, 0, 0.2)',
              100: 'rgba(0, 0, 0, 0.1)',
            },
            white: {
              900: 'rgba(255, 255, 255, 0.9)',
            },
          },
        },
      },
    },
  },
  plugins: [],
};
