const { KnapsackVueRenderer } = require('@knapsack/renderer-vue');
const { configureKnapsack } = require('@knapsack/app');
const { join } = require('path');
const { version } = require('../package.json');

module.exports = configureKnapsack({
  data: join(__dirname, './data'),
  dist: join(__dirname, './dist'),
  public: join(__dirname, './public'),
  version,
  templateRenderers: [new KnapsackVueRenderer({
    
  })],
  plugins: [],
  cloud: {
    siteId: 'rei-cedar',
    repoRoot: join(__dirname, '..'),
  },
});
