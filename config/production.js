const path = require('path')
const VueloaderPlugin = require('vue-loader/lib/plugin')
const HtmlwebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: path.join(__dirname, '../app.js'),
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'build.min.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /(.jpg|.png|.jpeg|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              limit: 100
            }
          }
        ]
      },
      {}
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js' //内部为正则表达式  vue结尾的,
    }
  },
  plugins: [
    new VueloaderPlugin(),
    new HtmlwebpackPlugin({
      template: './index.html',
      hash: true
    })
  ]
}
