var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = function(isDevelopment) {
  var config = {
    cache: isDevelopment,
    debug: isDevelopment,
    devtool: isDevelopment ? 'eval-source-map' : '',
    entry: isDevelopment ? [
      'webpack-dev-server/client?https://localhost:8888',
      'webpack/hot/only-dev-server',
      './src/client/app.js'
    ] : ['./src/client/app.js'],
    output: {
      path: path.join(__dirname, 'build/client'),
      filename: 'bundle.js',
      publicPath: 'client/'
    },
    plugins: (function() {
      var plugins = [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify(isDevelopment ? 'development' : 'production'),
            IS_BROWSER: true
          }
        })
      ]
      if (isDevelopment)
        plugins.push(
          new webpack.HotModuleReplacementPlugin(),
          new webpack.NoErrorsPlugin()
        )
      else
        plugins.push(
          new ExtractTextPlugin('app.css', {
            allChunks: true
          }),
          new webpack.optimize.DedupePlugin(),
          new webpack.optimize.OccurenceOrderPlugin(),
          new webpack.optimize.UglifyJsPlugin({
            compress: {
              warnings: false
            }
          })
        )
      return plugins
    })(),
    resolve: {
      extensions: ['', '.js', '.jsx', '.json']
    },
    module: {
      loaders: [
        { test: /\.jsx?$/, loaders: isDevelopment ? ['react-hot', 'babel'] : ['babel'], include: path.join(__dirname, 'src') },
        { loader: 'url-loader?limit=100000', test: /\.(png|woff|woff2|eot|ttf|svg)$/ },
        { test: /\.scss$/, loader: 'style!css!sass' }
      ]
    }
  };

  return config;
};
