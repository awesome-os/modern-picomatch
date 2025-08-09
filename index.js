import { picomatch as pico, picomatchNode } './lib/picomatch.js');
export * from './lib/constants.js';
export * as utils from './lib/utils.js';
export const picomatch = (glob, options, returnState = false) => pico(glob, picomatchNode(options), returnState);
