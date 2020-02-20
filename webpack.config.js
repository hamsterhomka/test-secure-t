const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

module.exports = {
  context: __dirname,
  devtool: 'source-map',
  entry: {
    bundle: ['@babel/polyfill', './src/index.js',],
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },

    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash].css',
      chunkFilename: './static/css/[name].[contenthash].css',
    }),
    new ErrorOverlayPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
