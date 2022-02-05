import entry from './entry.js'
import yoga from './yoga.mjs'

function bind(_, proto) {
  return proto
}

export default async function (wasm) {
  const mod = await yoga({
    instantiateWasm(info, receive) {
      const instance = new WebAssembly.Instance(wasm, info)
      receive(instance)
      return instance.exports
    },
    locateFile() {
      return ''
    },
  })
  return entry(bind, mod)
}
