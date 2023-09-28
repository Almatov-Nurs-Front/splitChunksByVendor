import MiniCssExtractPlugin from "mini-css-extract-plugin";

const rules = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader'
    }
  },
  {
    test: /\.css$|\.s[ac]ss$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: `[path]-[name]__[local]--[hash:base64:5]`,
          }
        }
      },
      'sass-loader',
    ],
  }
];

export default rules;
