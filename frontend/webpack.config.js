const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../backend/public/"),
    clean: true,
  },
  devtool: process.env.development && "inline-source-map",
  devServer: {
    static: "./dist",
    liveReload: true,
    historyApiFallback: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(tsx|jsx|ts|js)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
  optimization: {
    runtimeChunk: "single",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
};
