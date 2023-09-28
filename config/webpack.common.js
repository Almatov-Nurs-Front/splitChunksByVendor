// Modules
import path from 'path';
// Plugins
import CleanTerminalPlugin from 'clean-terminal-webpack-plugin';
import WebpackBar from 'webpackbar';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
// Utils
import rules from './utils/rules';
import alias from './utils/alias';


const config = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: 'static/js/[name].[contenthash].js',
    path: path.resolve(__dirname, '..', 'build'),
    clean: true,
  },
  devServer: {
    port: 3000,
    compress: true,
    hot: true,
    static: {
      directory: path.join(__dirname, '..', 'public')
    },
  },
  stats: 'errors-warnings',
  infrastructureLogging: { level: 'none' },
  resolve: {
    fallback: {
      "crypto": false,
      os: false,
      path: false,
    },
    modules: [ 'node_modules' ],
    alias,
    extensions: ['*', '.js', '.jsx', '.json', 'scss']
  },
  module: {
    rules
  },
  plugins: [
    new CleanTerminalPlugin(),
    new WebpackBar({ name: 'SpltChunksByVendor', color: '#808080' }),
    new WebpackManifestPlugin(),
    new MiniCssExtractPlugin({ filename: 'static/css/[name].[contenthash].css' })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new OptimizeCssAssetsPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '..', 'public', 'index.html'),
        minify: {
          removeAttributeQuotes:true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          enforce: true,
        }
      }
    }
  }
};

export default config;
