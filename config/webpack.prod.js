import merge from 'webpack-merge';
import config from './webpack.common';


const prodConfig = { mode: 'production' };

export default merge(config, prodConfig);
