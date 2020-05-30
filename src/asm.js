import entry from '../build/entry.js';
import emscripten from '../build/yoga.asm.mjs';

function bind(name, proto) {
  return proto;
}

function init() {
  const task = emscripten().then(raw => Object.assign(mod, entry(bind, raw)));
  mod.init = () => task;
  return task;
}

const mod = {
  init,
};

export default mod;
