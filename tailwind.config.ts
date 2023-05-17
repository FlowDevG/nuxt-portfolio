module.exports = {
  darkMode: 'class',

  theme: {
    screens: {
      'sm' : '640px',
      'md': '900px',
      'lg': '1050px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        "custom-black": "#0c0c0d",
        "custom-white": "#F1F4FD",
        "secondary-color": "#03C988"
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: ""
          }  
        }
      },
      animation: {
        typing: "typing 3s steps(20) infinite alternate, blink 0.6s infinite"
      }
    }
  }
};