/* eslint-disable import/no-dynamic-require, security/detect-non-literal-require */

import assign from 'lodash/assign';
import * as defaults from './default';

const CONF_ENV = process.env.CONF_ENV; //eslint-disable-line
let envConfig = {};

try {
   envConfig = CONF_ENV ? require(`./${CONF_ENV}.js`) : {};
} catch (e) {
   envConfig = {};
}

export default assign({}, defaults, envConfig);
