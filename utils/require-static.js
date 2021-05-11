/* eslint-disable import/no-dynamic-require, security/detect-non-literal-require */

import { __DEV__ } from '../constants/env';

const requireStatic = (file, trycatch = false) => {
   file = file.replace(/!/, '');

   let r = null;
   if (trycatch) {
      try {
         r = require(`../statics/${file}`);
      } catch (error) {
         if (__DEV__ && error.code !== 'MODULE_NOT_FOUND')
            console.error(`MODULE_NOT_FOUND : ${file}`);
      }
   } else {
      r = require(`../statics/${file}`);
   }

   return (r || {}).default;
};

export default requireStatic;
