const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Path to your main JavaScript file
  output: {
      filename: 'bundle.js', // Name of the output file
      path: path.resolve(__dirname, 'dist'), // Output directory
      clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html', // Path to your HTML file
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ]
  }
};