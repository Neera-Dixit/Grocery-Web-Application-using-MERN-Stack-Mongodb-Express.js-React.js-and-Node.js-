var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry:  './app/main.jsx',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'bundle.js'
     },
     module: {
         loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader?presets[]=es2015,presets[]=react']
         }]
     },
     stats: {
         colors: true
     },
     devServer: { inline: true }

 };