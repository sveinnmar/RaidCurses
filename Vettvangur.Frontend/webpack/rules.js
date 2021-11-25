/* eslint-disable */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const globImporter = require('node-sass-glob-importer');
const path = require('path');
const paths = require('./paths');

module.exports = ({
  isProduction = false,
  isNjksDev = false,
  isNjksProduction = false,
}) => {
  const typescript = {
    test: /\.(js|jsx|ts|tsx)$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
  };

  const sass = {
    test: /\.((c|sa|sc)ss)$/i,
    exclude: /node_modules/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: false,
          sourceMap: !isProduction || !isNjksProduction
        },
      },
      'postcss-loader',
      {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            importer: globImporter(),
          },
        },
      },
      {
        loader: '@epegzz/sass-vars-loader',
        options: {
          syntax: 'scss',
          vars: {
            showMediaLabel: !isProduction || !isNjksProduction,
            showMediaLabels: !isProduction || !isNjksProduction,
            useRem: isProduction || isNjksProduction,
          },
        },
      },
      {
        loader: 'sass-resources-loader',
        options: {
          resources: [
            path.resolve(__dirname, '../src/styles/utility/remify.scss'),
            path.resolve(__dirname, '../src/styles/utility/variables/*.scss'),
            path.resolve(__dirname, '../src/styles/utility/mixins/*.scss'),
          ],
        },
      },
    ],
  }

  const nunjucks = {
    test: /\.njk$/,
    use: [{
      loader: 'simple-nunjucks-loader',
      options: {
        searchPaths: 'src/templates/',
        assetsPaths: 'src/assets/',
        globals: {
          loadSvg: path.join(__dirname, 'customNunjucksFns', 'loadsvg-fn.js')
        }
      },
    },],
  }

  // TODO: Research why the images and fonts dont work if we uncomment this

  const images =       {
    test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
    type: 'asset/resource'
  }

  const fonts =       {
    test: /\.(eot|ttf|woff(2)|svg)$/,
    type: 'asset/resource'
  }

  let config = [
    typescript,
    sass,
    images,
    fonts,
  ];

  if (isNjksDev || isNjksProduction) {
    config.push(nunjucks);
  }

  return config;
};
