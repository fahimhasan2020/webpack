const webpack = require('webpack');
const path = require('path');
const config = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      
        include: __dirname + '/src/css'
      },
      {
        test: /\.(png|jp(e*)g|svg|eot|woff|woff2|ttf)$/,  
        use: [{
            loader: 'url-loader',
            options: { 
                limit: 800000, // Convert images < 8kb to base64 strings
                name: 'images/[hash]-[name].[ext]'
            } 
        }]
    }

    ],
  },
}
module.exports = config;