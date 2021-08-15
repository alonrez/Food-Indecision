const join = require('path')

export const entry = './src/app.js';
export const output = {
  path: join(__dirname, 'public'),
  filename: 'bundle.js'
};
export const module = {
  rules: [{
    loader: 'babel-loader',
    test: /\.js$/,
    exclude: /node_modules/
  }, {
    test: /\.s?css$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader'
    ]
  }]
};
export const devtool = 'cheap-module-eval-source-map';
export const devServer = {
  contentBase: join(__dirname, 'public')
};
