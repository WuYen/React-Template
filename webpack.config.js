const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
});

const devServer = {
  inline: true,
  stats: "minimal",
  port: 3006, //can config on package or here
  historyApiFallback: true,
  hot: true, //can config on package or here
  // headers: {
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  //   'Access-Control-Allow-Headers':
  //     'X-Requested-With, content-type, Authorization'
  // }
};

module.exports = (env, options) => {
  console.log(`Webpack is running as ${options.mode} mode.`);
  const runEnv = options.mode || "development";
  const isDevEnv = runEnv === "development";
  return {
    entry: "./src",
    output: {
      path: path.resolve(__dirname, "public"),
      filename: "bundle.js",
      //publicPath: "/resource/",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)/,
          exclude: /node_modules/,
          use: ["babel-loader?cacheDirectory=true"],
        },
      ],
    },
    resolve: {
      extensions: ["*", ".js", ".jsx"],
    },
    plugins: [htmlPlugin],
    ...(isDevEnv && { devServer })
  };
};
