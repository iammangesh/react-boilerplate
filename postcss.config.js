let  autoprefixer = require("autoprefixer"),
     customProperties = require("postcss-custom-properties"),
     mqPacker = require("css-mqpacker");

module.exports = {
  plugins:[
    autoprefixer({
      'browsers':'Last 4 versions'
    }),
    customProperties({
      preserve:true
    }),
    mqPacker()
  ]
}
