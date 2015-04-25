var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');

gulp.task('default', ['webpack-dev-server']);

gulp.task('build-dev', ['webpack:build-dev'], function() {
  gulp.watch(['src/**/*'], ['webpack:build-dev']);
});

gulp.task('build', ['webpack:build']);

gulp.task('webpack:build', function(callback) {
  var config = Object.create(webpackConfig(false));

  gulp.src('./src/index.html')
    .pipe(gulp.dest('./build'));

  webpack(config, function(err, stats) {
    if(err) {
      throw new gutil.PluginError('webpack:build', err);
    }

    gutil.log('[webpack:build]', stats.toString({
      colors: true
    }));

    callback();
  });
});

var devConfig = Object.create(webpackConfig(true));
var devCompiler = webpack(devConfig);

gulp.task('webpack:build-dev', function(callback) {
  devCompiler.run(function(err, stats) {
    if(err) {
      throw new gutil.PluginError('webpack:build-dev', err);
    }

    gutil.log('[webpack:build-dev]', stats.toString({
      colors: true
    }));

    callback();
  });
});

gulp.task('webpack-dev-server', function(callback) {
  var config = Object.create(webpackConfig(true));

  // Start a webpack-dev-server
  new WebpackDevServer(webpack(config), {
    publicPath: '/' + config.output.publicPath,
    contentBase: 'src/',
    hot: true,
    quiet: false,
    noInfo: true,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    }
  }).listen(8888, 'localhost', function(err) {
    if(err) {
      throw new gutil.PluginError('webpack-dev-server', err);
    }

    gutil.log('[webpack-dev-server]', 'http://localhost:8888/webpack-dev-server/index.html');
  });
});
