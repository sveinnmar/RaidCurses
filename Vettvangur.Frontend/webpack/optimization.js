const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = ({
  isProduction = false,
  isNjksProduction = false,
}) => ({
  minimize: isProduction || isNjksProduction,
  minimizer: [
    new TerserPlugin({
      parallel: isProduction || isNjksProduction,
    }),
    new CssMinimizerPlugin(),
  ],
});
