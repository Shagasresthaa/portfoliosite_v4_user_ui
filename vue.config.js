const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: process.env.PORT || 8080, // Default to 8080 if the PORT environment variable isn't set
  },
});
