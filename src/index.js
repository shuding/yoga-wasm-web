import entry from '../build/entry.js';
import emscripten from '../build/yoga.mjs';

function bind(name, proto) {
  return proto;
}

function initConfig(config) {
  return config
    ? function locateFile(name, dir) {
        if (name === 'yoga.wasm' && config.wasm) {
          return config.wasm;
        } else if (name === 'yoga.wasm.js' && config.asm) {
          return config.asm;
        }
        return (config.dir || dir || '') + name;
      }
    : void 0;
}

export default function Yoga(config) {
  return emscripten({ locateFile: initConfig(config) }).then(mod => entry(bind, mod));
}
