import path from 'path';


const getAlias = () => {
  const alias = require('../../alias.json');

  return Object.keys(alias).reduce((acc, key) => {
    acc[key] = path.resolve(process.cwd(), alias[key]);
    return acc;
  }, {});
};

const alias = {
  ...getAlias()
};

export default alias;
