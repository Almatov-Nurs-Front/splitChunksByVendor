import merge from 'webpack-merge';
import config from './webpack.common';


const devConfig = { mode: 'development' };

export default merge(config, devConfig);
