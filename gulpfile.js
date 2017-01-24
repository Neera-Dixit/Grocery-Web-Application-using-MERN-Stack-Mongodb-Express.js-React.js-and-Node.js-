var gulp=require('gulp');
var gulpLiveServer=require('gulp-live-server');
var browserSync=require('browser-sync');
var webpack=require('webpack');
var webpackConfig = require('./webpack.config.js');
var gutil = require('gulp-util');

gulp.task('live-server',['webpack'],function(){
	var server=gulpLiveServer('./server/main.js');
	server.start();

	 // Watch for file changes
    gulp.watch(['./server/main.js','./routes/*.js','./app/components/*.jsx','./app/main.jsx','./app/stores/*.js','./app/dispatcher/*.js'], function(file) {
       /* server.start.bind(server)();
        server.notify.bind(server)(file);*/
        gulp.start(['live-server']);
    });
});

gulp.task('webpack', function (done) {
     webpack(webpackConfig
    , function(error) {

        console.log("Error : ",error);

        var pluginError;
 
        if (error) {
            pluginError = new gulpUtil.PluginError('webpack', error);
 
            if (done) {
                done(pluginError);
            } else {
                gulpUtil.log('[webpack]', pluginError);
            }
 
            return;
        }
 
        if (done) {
            done();
        }
    });
});

gulp.task('serve',['webpack','live-server'],function(){
	browserSync.init(null,{
		proxy:'http://localhost:6789',
		port:9800
	});
});

