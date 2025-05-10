import 'webpack-dev-server';
import path from 'path';
import merge from 'webpack-merge';
import common from './webpack.common';

export default merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'client', 'public'),
    historyApiFallback: true,
    open: true,
  },
});
