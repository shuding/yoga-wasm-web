import entry from '../dist/entry.js';
import  emscripten from '../build/yoga.mjs';

function bind(name, proto) {
  return proto;
}

export default function Yoga(path = '') {
  if (path) {
    if (path[path.length - 1] !== '/') path += '/'
  }
  return emscripten({ locateFile: name => path + name }).then(mod => entry(bind, mod));
}
