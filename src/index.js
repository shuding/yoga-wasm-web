import entry from '../build/entry.js';
import emscripten from '../build/yoga.mjs';

function bind(name, proto) {
  return proto;
}

function initConfig(filepath) {
  return filepath
    ? function locateFile() {
        return filepath
      }
    : void 0;
}

export default function Yoga(filepath) {
  return emscripten({ locateFile: initConfig(filepath) }).then(mod => entry(bind, mod));
}
