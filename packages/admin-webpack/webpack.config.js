const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  mode: "development", //开发环境
  entry: path.resolve(__dirname, "./src/main.js"), //入口需要通过path和绝对路径之间的路径
  output: {
    path: path.resolve(__dirname, "./dist/"), //出口文件同理
    filename: "js[name].js",
  },
  resolve: {
    alias: {
      //别名
      "@": path.resolve("src"),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue', '.json'], //扩展名配置
  },
  module: {
    // loader
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      templateContent: `
      <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <title>Admin Webpack</title>
    </head>
    <body>
    <div id="app" />
    <h1>hello world</h1>
    </body>
    </html>
    `,
    }),
  ],
  devServer: {
    //contentBase: path.resolve(__dirname, "./dist"),
    port: 8080,
    static: {
      directory: path.join(__dirname, "public"),
    },
    //publicePath: "/",
  },
};
