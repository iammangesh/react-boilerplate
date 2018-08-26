const path = require("path"),
      CSSMiniExtract = require("mini-css-extract-plugin");


module.exports = (env) => {

  const isProduction = env === "production",
        isDevelopment  = env === "development",
        CSSExtract = new CSSMiniExtract({
          filename:'style.min.css',
          chunkFilename:'[name].[hash].css',
        });


  return {
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

          isProduction ? CSSMiniExtract.loader : 'style-loader',
          {

            loader:'css-loader',
            options:{
              sourceMap:true
            }

          },
          {
            loader:'sass-loader',
            options:{
              sourceMap:true
            }
          },
          'postcss-loader'
        ]
      },
      {
        test:/\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use:[{
          loader:'file-loader',
          options:{
              outputPath:'fonts/',
              name:'[name].[ext]'
            }
        }]
      },
      {
        test:/\.(jpg|png|gif|svg)$/,
        use:[
          {
            loader:'file-loader',
            options:{
              outputPath:'imgs/'
            }
          },
          {
            loader:'image-webpack-loader',
            options:{
              mozjpeg: {
                  progressive: true,
                  quality:80
              }
            }
          }
        ]
      }]
    },
    plugins:[
      CSSExtract
    ],
    devtool:isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer:{
      contentBase:path.join(__dirname,'/public'),
      historyApiFallback:true
    }
  }
}
