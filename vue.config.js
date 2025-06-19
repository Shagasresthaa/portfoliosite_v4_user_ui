const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/home/",
  devServer: {
    port: process.env.PORT || 3000,
  },
});
