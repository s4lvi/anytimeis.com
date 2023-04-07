const { whenDev } = require('@craco/craco');
const CracoAlias = require('craco-alias');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {  
  eslint: {
    enable: false
  },
  style: {
    postcssOptions: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
};
