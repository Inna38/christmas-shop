const path = require('path')
module.exports = {
   watch: true,
   entry: "./src/js/index.js",
   output: {
       filename: "bundle.js",
       path: path.resolve(__dirname,'build'),
       publicPath: "/"
    },
       devServer: {
        port: 3000,
        historyApiFallback: true,
        hot: true,
    },
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
};