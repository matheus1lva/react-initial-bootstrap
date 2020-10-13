const { resolve } = require('path');

const webpack = require('webpack');
const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';
const outputPath = resolve(__dirname, 'dist');

const entry = isDev ? ['./src/index.tsx', 'webpack-plugin-serve/client'] : './src/index.tsx';

const plugins = [
  new HtmlWebpackPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  })
];

if (isDev) {
  plugins.push(new Serve({
    hmr: true,
    historyFallback: true,
    static: [outputPath]
  }));
} else {
  plugins.push(new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
    chunkFilename: '[id].[contenthash].css'
   }))
}

module.exports = {
  target: ["web", "es5"],
  entry,
  mode: process.env.NODE_ENV,
  devtool: 'eval-cheap-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: !isDev ? [MiniCssExtractPlugin.loader, 'css-loader'] : ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg|pdf|csv|xlsx|ttf|woff(2)?)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
            },
          },
        ],
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    publicPath: '/',
    filename: 'bundle.[contenthash].js'
  },
  plugins,
  watch: isDev
};
