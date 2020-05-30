import entry from '../build/entry.js';
import emscripten from '../build/yoga.mjs';

function bind(name, proto) {
  return proto;
}

function initConfig(filepath) {
  return filepath ?
    function locateFile() {
      return filepath;
    } :
    void 0;
}

function init(filepath) {
  const task = emscripten({ locateFile: initConfig(filepath) }).then(raw => Object.assign(mod, entry(bind, raw)));
  mod.init = () => task;
  return task;
}

const mod = {
  init,
};

export default mod;
