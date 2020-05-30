import entry from '../build/entry.js';
import emscripten from '../build/yoga.asm.mjs';

function bind(name, proto) {
  return proto;
}

export default emscripten().then(mod => entry(bind, mod));
