const path = require("path");

module.exports = {
  'entry':'./src/scripts/app.js',
  output:{
    'path':path.join(__dirname,'/public'),
    'filename':'bundle.js'
  },
  module:{
    rules:[{
      test:/\.js$/,
      loader:'babel-loader',
      exclude:/node_modules/
    },{
      test:/\.s?css$/,
      use:[

        'style-loader',
        'css-loader',
        'sass-loader',
        'postcss-loader'
      ]
    }]
  },
  mode:'development',
  devServer:{
    contentBase:path.join(__dirname,'/public'),
    historyApiFallback:true
  }
}
