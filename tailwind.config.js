
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {

      screens:{
      "sm":"320px",
      "2xl":"1900px"
      
      
      
    },},
    fontFamily: {
      custom: ['Bubblegum Sans', 'sans-serif']
    },
  },
  plugins: [require('flowbite/plugin')],
});

