import entry from './entry/index.js'
import yoga from './tmp/yoga.mjs'

function bind(_, proto) {
  return proto
}

export default async function (wasm) {
  const mod = await yoga({
    instantiateWasm(info, receive) {
      WebAssembly.instantiate(wasm, info).then((instance) => {
        receive(instance.instance || instance)
      })
      return {}
    },
    locateFile() {
      return ''
    },
  })
  return entry(bind, mod)
}

export async function initStreaming(response) {
  const mod = await yoga({
    instantiateWasm(info, receive) {
      WebAssembly.instantiateStreaming(response, info).then((instance) => {
        receive(instance.instance || instance)
      })
      return {}
    },
    locateFile() {
      return ''
    },
  })
  return entry(bind, mod)
}
