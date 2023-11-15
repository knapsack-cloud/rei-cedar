const { KnapsackVueRenderer } = require("@knapsack/renderer-vue");
const { configureKnapsack } = require("@knapsack/app");
const { join } = require("path");
const { version } = require("../package.json");

module.exports = configureKnapsack({
  data: join(__dirname, "./data"),
  dist: join(__dirname, "./dist"),
  public: join(__dirname, "./public"),
  version,
  templateRenderers: [
    new KnapsackVueRenderer({
      webpackConfig: {
        module: {
          rules: [
            {
              test: /\.s[ac]ss$/i,
              use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
              ],
            },
          ],
        },
        resolve: {
          alias: {
            srcdir: join(__dirname, "../src"),
            cssdir: join(__dirname, "../src/css"),
            componentsdir: join(__dirname, "../src/components"),
            mixinsdir: join(__dirname, "../src/mixins"),
            "~": join(__dirname, "../node_modules"),
            // "@": join(__dirname, "../"),
          },
        },
      },
    }),
  ],
  plugins: [],
  cloud: {
    siteId: "rei-cedar",
    repoRoot: join(__dirname, ".."),
  },
});
