const { merge } = require(`webpack-merge`);
const baseConfig = require(`./webpack.common.cjs`);

module.exports = merge(baseConfig, {
  mode: `development`,
  devtool: `inline-source-map`,
  watch: true,
});
