'use strict';

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
var CONSTANTS = {
  ALIGN_COUNT: 8,
  ALIGN_AUTO: 0,
  ALIGN_FLEX_START: 1,
  ALIGN_CENTER: 2,
  ALIGN_FLEX_END: 3,
  ALIGN_STRETCH: 4,
  ALIGN_BASELINE: 5,
  ALIGN_SPACE_BETWEEN: 6,
  ALIGN_SPACE_AROUND: 7,
  DIMENSION_COUNT: 2,
  DIMENSION_WIDTH: 0,
  DIMENSION_HEIGHT: 1,
  DIRECTION_COUNT: 3,
  DIRECTION_INHERIT: 0,
  DIRECTION_LTR: 1,
  DIRECTION_RTL: 2,
  DISPLAY_COUNT: 2,
  DISPLAY_FLEX: 0,
  DISPLAY_NONE: 1,
  EDGE_COUNT: 9,
  EDGE_LEFT: 0,
  EDGE_TOP: 1,
  EDGE_RIGHT: 2,
  EDGE_BOTTOM: 3,
  EDGE_START: 4,
  EDGE_END: 5,
  EDGE_HORIZONTAL: 6,
  EDGE_VERTICAL: 7,
  EDGE_ALL: 8,
  EXPERIMENTAL_FEATURE_COUNT: 1,
  EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS: 0,
  FLEX_DIRECTION_COUNT: 4,
  FLEX_DIRECTION_COLUMN: 0,
  FLEX_DIRECTION_COLUMN_REVERSE: 1,
  FLEX_DIRECTION_ROW: 2,
  FLEX_DIRECTION_ROW_REVERSE: 3,
  JUSTIFY_COUNT: 6,
  JUSTIFY_FLEX_START: 0,
  JUSTIFY_CENTER: 1,
  JUSTIFY_FLEX_END: 2,
  JUSTIFY_SPACE_BETWEEN: 3,
  JUSTIFY_SPACE_AROUND: 4,
  JUSTIFY_SPACE_EVENLY: 5,
  LOG_LEVEL_COUNT: 6,
  LOG_LEVEL_ERROR: 0,
  LOG_LEVEL_WARN: 1,
  LOG_LEVEL_INFO: 2,
  LOG_LEVEL_DEBUG: 3,
  LOG_LEVEL_VERBOSE: 4,
  LOG_LEVEL_FATAL: 5,
  MEASURE_MODE_COUNT: 3,
  MEASURE_MODE_UNDEFINED: 0,
  MEASURE_MODE_EXACTLY: 1,
  MEASURE_MODE_AT_MOST: 2,
  NODE_TYPE_COUNT: 2,
  NODE_TYPE_DEFAULT: 0,
  NODE_TYPE_TEXT: 1,
  OVERFLOW_COUNT: 3,
  OVERFLOW_VISIBLE: 0,
  OVERFLOW_HIDDEN: 1,
  OVERFLOW_SCROLL: 2,
  POSITION_TYPE_COUNT: 2,
  POSITION_TYPE_RELATIVE: 0,
  POSITION_TYPE_ABSOLUTE: 1,
  PRINT_OPTIONS_COUNT: 3,
  PRINT_OPTIONS_LAYOUT: 1,
  PRINT_OPTIONS_STYLE: 2,
  PRINT_OPTIONS_CHILDREN: 4,
  UNIT_COUNT: 4,
  UNIT_UNDEFINED: 0,
  UNIT_POINT: 1,
  UNIT_PERCENT: 2,
  UNIT_AUTO: 3,
  WRAP_COUNT: 3,
  WRAP_NO_WRAP: 0,
  WRAP_WRAP: 1,
  WRAP_WRAP_REVERSE: 2
};
var YGEnums = CONSTANTS;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */

var Layout = /*#__PURE__*/function () {
  function Layout(left, right, top, bottom, width, height) {
    _classCallCheck(this, Layout);

    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
    this.width = width;
    this.height = height;
  }

  _createClass(Layout, [{
    key: "fromJS",
    value: function fromJS(expose) {
      expose(this.left, this.right, this.top, this.bottom, this.width, this.height);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "<Layout#".concat(this.left, ":").concat(this.right, ";").concat(this.top, ":").concat(this.bottom, ";").concat(this.width, ":").concat(this.height, ">");
    }
  }]);

  return Layout;
}();

var Size = /*#__PURE__*/function () {
  _createClass(Size, null, [{
    key: "fromJS",
    value: function fromJS(_ref) {
      var width = _ref.width,
          height = _ref.height;
      return new Size(width, height);
    }
  }]);

  function Size(width, height) {
    _classCallCheck(this, Size);

    this.width = width;
    this.height = height;
  }

  _createClass(Size, [{
    key: "fromJS",
    value: function fromJS(expose) {
      expose(this.width, this.height);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "<Size#".concat(this.width, "x").concat(this.height, ">");
    }
  }]);

  return Size;
}();

var Value = /*#__PURE__*/function () {
  function Value(unit, value) {
    _classCallCheck(this, Value);

    this.unit = unit;
    this.value = value;
  }

  _createClass(Value, [{
    key: "fromJS",
    value: function fromJS(expose) {
      expose(this.unit, this.value);
    }
  }, {
    key: "toString",
    value: function toString() {
      switch (this.unit) {
        case YGEnums.UNIT_POINT:
          return String(this.value);

        case YGEnums.UNIT_PERCENT:
          return "".concat(this.value, "%");

        case YGEnums.UNIT_AUTO:
          return 'auto';

        default:
          {
            return "".concat(this.value, "?");
          }
      }
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.value;
    }
  }]);

  return Value;
}();

var entryCommon = function entryCommon(bind, lib) {
  function patch(prototype, name, fn) {
    var original = prototype[name];

    prototype[name] = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return fn.call.apply(fn, [this, original].concat(args));
    };
  }

  var _loop = function _loop() {
    var _methods;

    var fnName = _arr[_i];
    var methods = (_methods = {}, _defineProperty(_methods, YGEnums.UNIT_POINT, lib.Node.prototype[fnName]), _defineProperty(_methods, YGEnums.UNIT_PERCENT, lib.Node.prototype["".concat(fnName, "Percent")]), _defineProperty(_methods, YGEnums.UNIT_AUTO, lib.Node.prototype["".concat(fnName, "Auto")]), _methods);
    patch(lib.Node.prototype, fnName, function (original) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      // We patch all these functions to add support for the following calls:
      // .setWidth(100) / .setWidth("100%") / .setWidth(.getWidth()) / .setWidth("auto")
      var value = args.pop();
      var unit, asNumber;

      if (value === 'auto') {
        unit = YGEnums.UNIT_AUTO;
        asNumber = undefined;
      } else if (value instanceof Value) {
        unit = value.unit;
        asNumber = value.valueOf();
      } else {
        unit = typeof value === 'string' && value.endsWith('%') ? YGEnums.UNIT_PERCENT : YGEnums.UNIT_POINT;
        asNumber = parseFloat(value);

        if (!Number.isNaN(value) && Number.isNaN(asNumber)) {
          throw new Error("Invalid value ".concat(value, " for ").concat(fnName));
        }
      }

      if (!methods[unit]) throw new Error("Failed to execute \"".concat(fnName, "\": Unsupported unit '").concat(value, "'"));

      if (asNumber !== undefined) {
        var _methods$unit;

        return (_methods$unit = methods[unit]).call.apply(_methods$unit, [this].concat(args, [asNumber]));
      } else {
        var _methods$unit2;

        return (_methods$unit2 = methods[unit]).call.apply(_methods$unit2, [this].concat(args));
      }
    });
  };

  for (var _i = 0, _arr = ['setPosition', 'setMargin', 'setFlexBasis', 'setWidth', 'setHeight', 'setMinWidth', 'setMinHeight', 'setMaxWidth', 'setMaxHeight', 'setPadding']; _i < _arr.length; _i++) {
    _loop();
  }

  patch(lib.Config.prototype, 'free', function () {
    // Since we handle the memory allocation ourselves (via lib.Config.create),
    // we also need to handle the deallocation
    lib.Config.destroy(this);
  });
  patch(lib.Node, 'create', function (_, config) {
    // We decide the constructor we want to call depending on the parameters
    return config ? lib.Node.createWithConfig(config) : lib.Node.createDefault();
  });
  patch(lib.Node.prototype, 'free', function () {
    // Since we handle the memory allocation ourselves (via lib.Node.create),
    // we also need to handle the deallocation
    lib.Node.destroy(this);
  });
  patch(lib.Node.prototype, 'freeRecursive', function () {
    for (var t = 0, T = this.getChildCount(); t < T; ++t) {
      this.getChild(0).freeRecursive();
    }

    this.free();
  });
  patch(lib.Node.prototype, 'setMeasureFunc', function (original, measureFunc) {
    // This patch is just a convenience patch, since it helps write more
    // idiomatic source code (such as .setMeasureFunc(null))
    // We also automatically convert the return value of the measureFunc
    // to a Size object, so that we can return anything that has .width and
    // .height properties
    if (measureFunc) {
      return original.call(this, function () {
        return Size.fromJS(measureFunc.apply(void 0, arguments));
      });
    } else {
      return this.unsetMeasureFunc();
    }
  });
  patch(lib.Node.prototype, 'calculateLayout', function (original) {
    var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NaN;
    var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NaN;
    var direction = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : YGEnums.DIRECTION_LTR;
    // Just a small patch to add support for the function default parameters
    return original.call(this, width, height, direction);
  });
  return _objectSpread2({
    Config: lib.Config,
    Node: lib.Node,
    Layout: bind('Layout', Layout),
    Size: bind('Size', Size),
    Value: bind('Value', Value)
  }, YGEnums);
};

var Module = function () {
  var _scriptDir = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('asm.js', document.baseURI).href));
  return function (Module) {
    Module = Module || {};
    var Module = typeof Module !== "undefined" ? Module : {};
    var readyPromiseResolve;
    Module["ready"] = new Promise(function (resolve, reject) {
      readyPromiseResolve = resolve;
    });
    var moduleOverrides = {};
    var key;

    for (key in Module) {
      if (Module.hasOwnProperty(key)) {
        moduleOverrides[key] = Module[key];
      }
    }

    var arguments_ = [];
    var thisProgram = "./this.program";

    var quit_ = function quit_(status, toThrow) {
      throw toThrow;
    };

    var ENVIRONMENT_IS_WEB = false;
    var ENVIRONMENT_IS_WORKER = false;
    var ENVIRONMENT_IS_NODE = false;
    var ENVIRONMENT_IS_SHELL = false;
    ENVIRONMENT_IS_WEB = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object";
    ENVIRONMENT_IS_WORKER = typeof importScripts === "function";
    ENVIRONMENT_IS_NODE = (typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" && _typeof(process.versions) === "object" && typeof process.versions.node === "string";
    ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
    var scriptDirectory = "";

    function locateFile(path) {
      if (Module["locateFile"]) {
        return Module["locateFile"](path, scriptDirectory);
      }

      return scriptDirectory + path;
    }

    var read_, readBinary;
    var nodeFS;
    var nodePath;

    if (ENVIRONMENT_IS_NODE) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = require("path").dirname(scriptDirectory) + "/";
      } else {
        scriptDirectory = __dirname + "/";
      }

      read_ = function shell_read(filename, binary) {
        var ret = tryParseAsDataURI(filename);

        if (ret) {
          return binary ? ret : ret.toString();
        }

        if (!nodeFS) nodeFS = require("fs");
        if (!nodePath) nodePath = require("path");
        filename = nodePath["normalize"](filename);
        return nodeFS["readFileSync"](filename, binary ? null : "utf8");
      };

      readBinary = function readBinary(filename) {
        var ret = read_(filename, true);

        if (!ret.buffer) {
          ret = new Uint8Array(ret);
        }

        assert(ret.buffer);
        return ret;
      };

      if (process["argv"].length > 1) {
        thisProgram = process["argv"][1].replace(/\\/g, "/");
      }

      arguments_ = process["argv"].slice(2);
      process["on"]("uncaughtException", function (ex) {
        if (!(ex instanceof ExitStatus)) {
          throw ex;
        }
      });
      process["on"]("unhandledRejection", abort);

      quit_ = function quit_(status) {
        process["exit"](status);
      };

      Module["inspect"] = function () {
        return "[Emscripten Module object]";
      };
    } else if (ENVIRONMENT_IS_SHELL) {
      if (typeof read != "undefined") {
        read_ = function shell_read(f) {
          var data = tryParseAsDataURI(f);

          if (data) {
            return intArrayToString(data);
          }

          return read(f);
        };
      }

      readBinary = function readBinary(f) {
        var data;
        data = tryParseAsDataURI(f);

        if (data) {
          return data;
        }

        if (typeof readbuffer === "function") {
          return new Uint8Array(readbuffer(f));
        }

        data = read(f, "binary");
        assert(_typeof(data) === "object");
        return data;
      };

      if (typeof scriptArgs != "undefined") {
        arguments_ = scriptArgs;
      } else if (typeof arguments != "undefined") {
        arguments_ = arguments;
      }

      if (typeof quit === "function") {
        quit_ = function quit_(status) {
          quit(status);
        };
      }

      if (typeof print !== "undefined") {
        if (typeof console === "undefined") console = {};
        console.log = print;
        console.warn = console.error = typeof printErr !== "undefined" ? printErr : print;
      }
    } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = self.location.href;
      } else if (document.currentScript) {
        scriptDirectory = document.currentScript.src;
      }

      if (_scriptDir) {
        scriptDirectory = _scriptDir;
      }

      if (scriptDirectory.indexOf("blob:") !== 0) {
        scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf("/") + 1);
      } else {
        scriptDirectory = "";
      }

      {
        read_ = function shell_read(url) {
          try {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, false);
            xhr.send(null);
            return xhr.responseText;
          } catch (err) {
            var data = tryParseAsDataURI(url);

            if (data) {
              return intArrayToString(data);
            }

            throw err;
          }
        };

        if (ENVIRONMENT_IS_WORKER) {
          readBinary = function readBinary(url) {
            try {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, false);
              xhr.responseType = "arraybuffer";
              xhr.send(null);
              return new Uint8Array(xhr.response);
            } catch (err) {
              var data = tryParseAsDataURI(url);

              if (data) {
                return data;
              }

              throw err;
            }
          };
        }
      }
    }

    var out = Module["print"] || console.log.bind(console);
    var err = Module["printErr"] || console.warn.bind(console);

    for (key in moduleOverrides) {
      if (moduleOverrides.hasOwnProperty(key)) {
        Module[key] = moduleOverrides[key];
      }
    }

    moduleOverrides = null;
    if (Module["arguments"]) arguments_ = Module["arguments"];
    if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
    if (Module["quit"]) quit_ = Module["quit"];

    var setTempRet0 = function setTempRet0(value) {
    };

    var wasmBinary;
    if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
    var noExitRuntime;
    if (Module["noExitRuntime"]) noExitRuntime = Module["noExitRuntime"];
    var WebAssembly = {
      Memory: function Memory(opts) {
        return {
          buffer: new ArrayBuffer(opts["initial"] * 65536),
          grow: function grow(amount) {
            var ret = __growWasmMemory(amount);

            return ret;
          }
        };
      },
      Table: function Table(opts) {
        var ret = new Array(opts["initial"]);

        ret.grow = function (by) {
          if (ret.length >= 231 + 0) {
            abort("Unable to grow wasm table. Use a higher value for RESERVED_FUNCTION_POINTERS or set ALLOW_TABLE_GROWTH.");
          }

          ret.push(null);
        };

        ret.set = function (i, func) {
          ret[i] = func;
        };

        ret.get = function (i) {
          return ret[i];
        };

        return ret;
      },
      Module: function Module(binary) {
        return {};
      },
      Instance: function Instance(module, info) {
        var exports = // EMSCRIPTEN_START_ASM
        function a(asmLibraryArg, wasmMemory, wasmTable) {
          var scratchBuffer = new ArrayBuffer(8);
          var b = new Int32Array(scratchBuffer);
          var c = new Float32Array(scratchBuffer);
          var d = new Float64Array(scratchBuffer);

          function e(index) {
            return b[index];
          }

          function f(index, value) {
            b[index] = value;
          }

          function g() {
            return d[0];
          }

          function h(value) {
            d[0] = value;
          }

          function i(low, high) {
            b[0] = low;
            b[1] = high;
          }

          function j(value) {
            c[0] = value;
          }

          function k() {
            return c[0];
          }

          function l(global, env, buffer) {
            var m = env.memory;
            var n = wasmTable;
            var o = new global.Int8Array(buffer);
            var p = new global.Int16Array(buffer);
            var q = new global.Int32Array(buffer);
            var r = new global.Uint8Array(buffer);
            var s = new global.Uint16Array(buffer);
            var t = new global.Uint32Array(buffer);
            var u = new global.Float32Array(buffer);
            var v = new global.Float64Array(buffer);
            var w = global.Math.imul;
            var x = global.Math.fround;
            var y = global.Math.abs;
            var z = global.Math.clz32;
            var A = global.Math.min;
            var B = global.Math.max;
            var C = global.Math.floor;
            var D = global.Math.ceil;
            var E = global.Math.sqrt;
            var F = env.abort;
            var G = global.NaN;
            var H = global.Infinity;
            var I = env._embind_register_class_function;
            var J = env._embind_register_memory_view;
            var K = env._embind_register_integer;
            var L = env._embind_register_class_class_function;
            var M = env._embind_register_class;
            var N = env._embind_register_value_object_field;
            var O = env._embind_finalize_value_object;
            var P = env._embind_register_value_object;
            var Q = env._embind_register_std_wstring;
            var R = env._ZN8facebook4yoga24LayoutPassReasonToStringENS0_16LayoutPassReasonE;
            var S = env._embind_register_class_constructor;
            var T = env.abort;
            var U = env.fd_write;
            var V = env._embind_register_float;
            var W = env._embind_register_std_string;
            var X = env._emval_get_method_caller;
            var Y = env._embind_create_inheriting_constructor;
            var Z = env.__cxa_throw;
            var _ = env.__cxa_allocate_exception;
            var $ = env.fd_seek;
            var aa = env.setTempRet0;
            var ba = env.emscripten_memcpy_big;
            var ca = env.emscripten_resize_heap;
            var da = env.fd_close;
            var ea = env._embind_register_emval;
            var fa = env._embind_register_bool;
            var ga = env._embind_register_void;
            var ha = env._emval_incref;
            var ia = env._emval_run_destructors;
            var ja = env._emval_call_method;
            var ka = env._emval_call_void_method;
            var la = env._emval_decref;
            var ma = 5254160;
            var na = 0; // EMSCRIPTEN_START_FUNCS

            function Id(a) {
              a = a | 0;
              var b = 0,
                  c = 0,
                  d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0,
                  j = 0,
                  k = 0,
                  l = 0,
                  m = 0,
                  n = 0;
              l = ma - 16 | 0;
              ma = l;

              a: {
                b: {
                  c: {
                    d: {
                      e: {
                        f: {
                          g: {
                            h: {
                              i: {
                                j: {
                                  k: {
                                    if (a >>> 0 <= 244) {
                                      f = q[2651];
                                      g = a >>> 0 < 11 ? 16 : a + 11 & -8;
                                      a = g >>> 3 | 0;
                                      b = f >>> a | 0;

                                      if (b & 3) {
                                        c = a + ((b ^ -1) & 1) | 0;
                                        e = c << 3;
                                        b = q[e + 10652 >> 2];
                                        a = b + 8 | 0;
                                        d = q[b + 8 >> 2];
                                        e = e + 10644 | 0;

                                        l: {
                                          if ((d | 0) == (e | 0)) {
                                            m = 10604, n = Ro(c) & f, q[m >> 2] = n;
                                            break l;
                                          }

                                          q[d + 12 >> 2] = e;
                                          q[e + 8 >> 2] = d;
                                        }

                                        c = c << 3;
                                        q[b + 4 >> 2] = c | 3;
                                        b = b + c | 0;
                                        q[b + 4 >> 2] = q[b + 4 >> 2] | 1;
                                        break a;
                                      }

                                      i = q[2653];

                                      if (g >>> 0 <= i >>> 0) {
                                        break k;
                                      }

                                      if (b) {
                                        c = 2 << a;
                                        a = (0 - c | c) & b << a;
                                        a = (0 - a & a) + -1 | 0;
                                        b = a >>> 12 & 16;
                                        c = b;
                                        a = a >>> b | 0;
                                        b = a >>> 5 & 8;
                                        c = c | b;
                                        a = a >>> b | 0;
                                        b = a >>> 2 & 4;
                                        c = c | b;
                                        a = a >>> b | 0;
                                        b = a >>> 1 & 2;
                                        c = c | b;
                                        a = a >>> b | 0;
                                        b = a >>> 1 & 1;
                                        c = (c | b) + (a >>> b | 0) | 0;
                                        d = c << 3;
                                        b = q[d + 10652 >> 2];
                                        a = q[b + 8 >> 2];
                                        d = d + 10644 | 0;

                                        m: {
                                          if ((a | 0) == (d | 0)) {
                                            f = Ro(c) & f;
                                            q[2651] = f;
                                            break m;
                                          }

                                          q[a + 12 >> 2] = d;
                                          q[d + 8 >> 2] = a;
                                        }

                                        a = b + 8 | 0;
                                        q[b + 4 >> 2] = g | 3;
                                        h = b + g | 0;
                                        c = c << 3;
                                        e = c - g | 0;
                                        q[h + 4 >> 2] = e | 1;
                                        q[b + c >> 2] = e;

                                        if (i) {
                                          c = i >>> 3 | 0;
                                          b = (c << 3) + 10644 | 0;
                                          d = q[2656];
                                          c = 1 << c;

                                          n: {
                                            if (!(c & f)) {
                                              q[2651] = c | f;
                                              c = b;
                                              break n;
                                            }

                                            c = q[b + 8 >> 2];
                                          }

                                          q[b + 8 >> 2] = d;
                                          q[c + 12 >> 2] = d;
                                          q[d + 12 >> 2] = b;
                                          q[d + 8 >> 2] = c;
                                        }

                                        q[2656] = h;
                                        q[2653] = e;
                                        break a;
                                      }

                                      k = q[2652];

                                      if (!k) {
                                        break k;
                                      }

                                      a = (k & 0 - k) + -1 | 0;
                                      b = a >>> 12 & 16;
                                      c = b;
                                      a = a >>> b | 0;
                                      b = a >>> 5 & 8;
                                      c = c | b;
                                      a = a >>> b | 0;
                                      b = a >>> 2 & 4;
                                      c = c | b;
                                      a = a >>> b | 0;
                                      b = a >>> 1 & 2;
                                      c = c | b;
                                      a = a >>> b | 0;
                                      b = a >>> 1 & 1;
                                      b = q[((c | b) + (a >>> b | 0) << 2) + 10908 >> 2];
                                      d = (q[b + 4 >> 2] & -8) - g | 0;
                                      c = b;

                                      while (1) {
                                        o: {
                                          a = q[c + 16 >> 2];

                                          if (!a) {
                                            a = q[c + 20 >> 2];

                                            if (!a) {
                                              break o;
                                            }
                                          }

                                          e = (q[a + 4 >> 2] & -8) - g | 0;
                                          c = e >>> 0 < d >>> 0;
                                          d = c ? e : d;
                                          b = c ? a : b;
                                          c = a;
                                          continue;
                                        }

                                        break;
                                      }

                                      j = q[b + 24 >> 2];
                                      e = q[b + 12 >> 2];

                                      if ((e | 0) != (b | 0)) {
                                        a = q[b + 8 >> 2];
                                        q[a + 12 >> 2] = e;
                                        q[e + 8 >> 2] = a;
                                        break b;
                                      }

                                      c = b + 20 | 0;
                                      a = q[c >> 2];

                                      if (!a) {
                                        a = q[b + 16 >> 2];

                                        if (!a) {
                                          break j;
                                        }

                                        c = b + 16 | 0;
                                      }

                                      while (1) {
                                        h = c;
                                        e = a;
                                        c = a + 20 | 0;
                                        a = q[c >> 2];

                                        if (a) {
                                          continue;
                                        }

                                        c = e + 16 | 0;
                                        a = q[e + 16 >> 2];

                                        if (a) {
                                          continue;
                                        }

                                        break;
                                      }

                                      q[h >> 2] = 0;
                                      break b;
                                    }

                                    g = -1;

                                    if (a >>> 0 > 4294967231) {
                                      break k;
                                    }

                                    b = a + 11 | 0;
                                    g = b & -8;
                                    i = q[2652];

                                    if (!i) {
                                      break k;
                                    }

                                    c = 0 - g | 0;
                                    b = b >>> 8 | 0;
                                    f = 0;

                                    p: {
                                      if (!b) {
                                        break p;
                                      }

                                      f = 31;

                                      if (g >>> 0 > 16777215) {
                                        break p;
                                      }

                                      d = b + 1048320 >>> 16 & 8;
                                      b = b << d;
                                      a = b + 520192 >>> 16 & 4;
                                      f = b << a;
                                      b = f + 245760 >>> 16 & 2;
                                      a = (f << b >>> 15 | 0) - (b | (a | d)) | 0;
                                      f = (a << 1 | g >>> a + 21 & 1) + 28 | 0;
                                    }

                                    d = q[(f << 2) + 10908 >> 2];

                                    q: {
                                      r: {
                                        s: {
                                          if (!d) {
                                            a = 0;
                                            break s;
                                          }

                                          b = g << ((f | 0) == 31 ? 0 : 25 - (f >>> 1 | 0) | 0);
                                          a = 0;

                                          while (1) {
                                            t: {
                                              h = (q[d + 4 >> 2] & -8) - g | 0;

                                              if (h >>> 0 >= c >>> 0) {
                                                break t;
                                              }

                                              e = d;
                                              c = h;

                                              if (c) {
                                                break t;
                                              }

                                              c = 0;
                                              a = d;
                                              break r;
                                            }

                                            h = q[d + 20 >> 2];
                                            d = q[((b >>> 29 & 4) + d | 0) + 16 >> 2];
                                            a = h ? (h | 0) == (d | 0) ? a : h : a;
                                            b = b << ((d | 0) != 0);

                                            if (d) {
                                              continue;
                                            }

                                            break;
                                          }
                                        }

                                        if (!(a | e)) {
                                          a = 2 << f;
                                          a = (0 - a | a) & i;

                                          if (!a) {
                                            break k;
                                          }

                                          a = (a & 0 - a) + -1 | 0;
                                          b = a >>> 12 & 16;
                                          d = b;
                                          a = a >>> b | 0;
                                          b = a >>> 5 & 8;
                                          d = d | b;
                                          a = a >>> b | 0;
                                          b = a >>> 2 & 4;
                                          d = d | b;
                                          a = a >>> b | 0;
                                          b = a >>> 1 & 2;
                                          d = d | b;
                                          a = a >>> b | 0;
                                          b = a >>> 1 & 1;
                                          a = q[((d | b) + (a >>> b | 0) << 2) + 10908 >> 2];
                                        }

                                        if (!a) {
                                          break q;
                                        }
                                      }

                                      while (1) {
                                        d = (q[a + 4 >> 2] & -8) - g | 0;
                                        b = d >>> 0 < c >>> 0;
                                        c = b ? d : c;
                                        e = b ? a : e;
                                        b = q[a + 16 >> 2];

                                        if (b) {
                                          a = b;
                                        } else {
                                          a = q[a + 20 >> 2];
                                        }

                                        if (a) {
                                          continue;
                                        }

                                        break;
                                      }
                                    }

                                    if (!e | c >>> 0 >= q[2653] - g >>> 0) {
                                      break k;
                                    }

                                    h = q[e + 24 >> 2];
                                    b = q[e + 12 >> 2];

                                    if ((e | 0) != (b | 0)) {
                                      a = q[e + 8 >> 2];
                                      q[a + 12 >> 2] = b;
                                      q[b + 8 >> 2] = a;
                                      break c;
                                    }

                                    d = e + 20 | 0;
                                    a = q[d >> 2];

                                    if (!a) {
                                      a = q[e + 16 >> 2];

                                      if (!a) {
                                        break i;
                                      }

                                      d = e + 16 | 0;
                                    }

                                    while (1) {
                                      f = d;
                                      b = a;
                                      d = a + 20 | 0;
                                      a = q[d >> 2];

                                      if (a) {
                                        continue;
                                      }

                                      d = b + 16 | 0;
                                      a = q[b + 16 >> 2];

                                      if (a) {
                                        continue;
                                      }

                                      break;
                                    }

                                    q[f >> 2] = 0;
                                    break c;
                                  }

                                  b = q[2653];

                                  if (b >>> 0 >= g >>> 0) {
                                    a = q[2656];
                                    c = b - g | 0;

                                    u: {
                                      if (c >>> 0 >= 16) {
                                        q[2653] = c;
                                        d = a + g | 0;
                                        q[2656] = d;
                                        q[d + 4 >> 2] = c | 1;
                                        q[a + b >> 2] = c;
                                        q[a + 4 >> 2] = g | 3;
                                        break u;
                                      }

                                      q[2656] = 0;
                                      q[2653] = 0;
                                      q[a + 4 >> 2] = b | 3;
                                      b = a + b | 0;
                                      q[b + 4 >> 2] = q[b + 4 >> 2] | 1;
                                    }

                                    a = a + 8 | 0;
                                    break a;
                                  }

                                  d = q[2654];

                                  if (d >>> 0 > g >>> 0) {
                                    b = d - g | 0;
                                    q[2654] = b;
                                    a = q[2657];
                                    c = a + g | 0;
                                    q[2657] = c;
                                    q[c + 4 >> 2] = b | 1;
                                    q[a + 4 >> 2] = g | 3;
                                    a = a + 8 | 0;
                                    break a;
                                  }

                                  a = 0;
                                  e = g + 47 | 0;
                                  c = e;

                                  if (q[2769]) {
                                    b = q[2771];
                                  } else {
                                    q[2772] = -1;
                                    q[2773] = -1;
                                    q[2770] = 4096;
                                    q[2771] = 4096;
                                    q[2769] = l + 12 & -16 ^ 1431655768;
                                    q[2774] = 0;
                                    q[2762] = 0;
                                    b = 4096;
                                  }

                                  f = c + b | 0;
                                  h = 0 - b | 0;
                                  c = f & h;

                                  if (c >>> 0 <= g >>> 0) {
                                    break a;
                                  }

                                  b = q[2761];

                                  if (b) {
                                    i = q[2759];
                                    j = i + c | 0;

                                    if (j >>> 0 <= i >>> 0 | j >>> 0 > b >>> 0) {
                                      break a;
                                    }
                                  }

                                  if (r[11048] & 4) {
                                    break f;
                                  }

                                  v: {
                                    w: {
                                      b = q[2657];

                                      if (b) {
                                        a = 11052;

                                        while (1) {
                                          i = q[a >> 2];

                                          if (i + q[a + 4 >> 2] >>> 0 > b >>> 0 ? i >>> 0 <= b >>> 0 : 0) {
                                            break w;
                                          }

                                          a = q[a + 8 >> 2];

                                          if (a) {
                                            continue;
                                          }

                                          break;
                                        }
                                      }

                                      b = ic(0);

                                      if ((b | 0) == -1) {
                                        break g;
                                      }

                                      f = c;
                                      a = q[2770];
                                      d = a + -1 | 0;

                                      if (d & b) {
                                        f = (c - b | 0) + (b + d & 0 - a) | 0;
                                      }

                                      if (f >>> 0 <= g >>> 0 | f >>> 0 > 2147483646) {
                                        break g;
                                      }

                                      a = q[2761];

                                      if (a) {
                                        d = q[2759];
                                        h = d + f | 0;

                                        if (h >>> 0 <= d >>> 0 | h >>> 0 > a >>> 0) {
                                          break g;
                                        }
                                      }

                                      a = ic(f);

                                      if ((b | 0) != (a | 0)) {
                                        break v;
                                      }

                                      break e;
                                    }

                                    f = h & f - d;

                                    if (f >>> 0 > 2147483646) {
                                      break g;
                                    }

                                    b = ic(f);

                                    if ((b | 0) == (q[a >> 2] + q[a + 4 >> 2] | 0)) {
                                      break h;
                                    }

                                    a = b;
                                  }

                                  if (!((a | 0) == -1 | g + 48 >>> 0 <= f >>> 0)) {
                                    b = q[2771];
                                    b = b + (e - f | 0) & 0 - b;

                                    if (b >>> 0 > 2147483646) {
                                      b = a;
                                      break e;
                                    }

                                    if ((ic(b) | 0) != -1) {
                                      f = b + f | 0;
                                      b = a;
                                      break e;
                                    }

                                    ic(0 - f | 0);
                                    break g;
                                  }

                                  b = a;

                                  if ((a | 0) != -1) {
                                    break e;
                                  }

                                  break g;
                                }

                                e = 0;
                                break b;
                              }

                              b = 0;
                              break c;
                            }

                            if ((b | 0) != -1) {
                              break e;
                            }
                          }

                          q[2762] = q[2762] | 4;
                        }

                        if (c >>> 0 > 2147483646) {
                          break d;
                        }

                        b = ic(c);
                        a = ic(0);

                        if (b >>> 0 >= a >>> 0 | (b | 0) == -1 | (a | 0) == -1) {
                          break d;
                        }

                        f = a - b | 0;

                        if (f >>> 0 <= g + 40 >>> 0) {
                          break d;
                        }
                      }

                      a = q[2759] + f | 0;
                      q[2759] = a;

                      if (a >>> 0 > t[2760]) {
                        q[2760] = a;
                      }

                      x: {
                        y: {
                          z: {
                            c = q[2657];

                            if (c) {
                              a = 11052;

                              while (1) {
                                d = q[a >> 2];
                                e = q[a + 4 >> 2];

                                if ((d + e | 0) == (b | 0)) {
                                  break z;
                                }

                                a = q[a + 8 >> 2];

                                if (a) {
                                  continue;
                                }

                                break;
                              }

                              break y;
                            }

                            a = q[2655];

                            if (!(b >>> 0 >= a >>> 0 ? a : 0)) {
                              q[2655] = b;
                            }

                            a = 0;
                            q[2764] = f;
                            q[2763] = b;
                            q[2659] = -1;
                            q[2660] = q[2769];
                            q[2766] = 0;

                            while (1) {
                              c = a << 3;
                              d = c + 10644 | 0;
                              q[c + 10652 >> 2] = d;
                              q[c + 10656 >> 2] = d;
                              a = a + 1 | 0;

                              if ((a | 0) != 32) {
                                continue;
                              }

                              break;
                            }

                            a = f + -40 | 0;
                            c = b + 8 & 7 ? -8 - b & 7 : 0;
                            d = a - c | 0;
                            q[2654] = d;
                            c = b + c | 0;
                            q[2657] = c;
                            q[c + 4 >> 2] = d | 1;
                            q[(a + b | 0) + 4 >> 2] = 40;
                            q[2658] = q[2773];
                            break x;
                          }

                          if (r[a + 12 | 0] & 8 | b >>> 0 <= c >>> 0 | d >>> 0 > c >>> 0) {
                            break y;
                          }

                          q[a + 4 >> 2] = e + f;
                          a = c + 8 & 7 ? -8 - c & 7 : 0;
                          b = a + c | 0;
                          q[2657] = b;
                          d = q[2654] + f | 0;
                          a = d - a | 0;
                          q[2654] = a;
                          q[b + 4 >> 2] = a | 1;
                          q[(c + d | 0) + 4 >> 2] = 40;
                          q[2658] = q[2773];
                          break x;
                        }

                        e = q[2655];

                        if (b >>> 0 < e >>> 0) {
                          q[2655] = b;
                          e = 0;
                        }

                        d = b + f | 0;
                        a = 11052;

                        A: {
                          B: {
                            C: {
                              D: {
                                E: {
                                  F: {
                                    while (1) {
                                      if ((d | 0) != q[a >> 2]) {
                                        a = q[a + 8 >> 2];

                                        if (a) {
                                          continue;
                                        }

                                        break F;
                                      }

                                      break;
                                    }

                                    if (!(r[a + 12 | 0] & 8)) {
                                      break E;
                                    }
                                  }

                                  a = 11052;

                                  while (1) {
                                    d = q[a >> 2];

                                    if (d >>> 0 <= c >>> 0) {
                                      e = d + q[a + 4 >> 2] | 0;

                                      if (e >>> 0 > c >>> 0) {
                                        break D;
                                      }
                                    }

                                    a = q[a + 8 >> 2];
                                    continue;
                                  }
                                }

                                q[a >> 2] = b;
                                q[a + 4 >> 2] = q[a + 4 >> 2] + f;
                                j = (b + 8 & 7 ? -8 - b & 7 : 0) + b | 0;
                                q[j + 4 >> 2] = g | 3;
                                b = d + (d + 8 & 7 ? -8 - d & 7 : 0) | 0;
                                a = (b - j | 0) - g | 0;
                                h = g + j | 0;

                                if ((b | 0) == (c | 0)) {
                                  q[2657] = h;
                                  a = q[2654] + a | 0;
                                  q[2654] = a;
                                  q[h + 4 >> 2] = a | 1;
                                  break B;
                                }

                                if (q[2656] == (b | 0)) {
                                  q[2656] = h;
                                  a = q[2653] + a | 0;
                                  q[2653] = a;
                                  q[h + 4 >> 2] = a | 1;
                                  q[a + h >> 2] = a;
                                  break B;
                                }

                                c = q[b + 4 >> 2];

                                if ((c & 3) == 1) {
                                  k = c & -8;

                                  G: {
                                    if (c >>> 0 <= 255) {
                                      e = c >>> 3 | 0;
                                      c = q[b + 8 >> 2];
                                      d = q[b + 12 >> 2];

                                      if ((d | 0) == (c | 0)) {
                                        m = 10604, n = q[2651] & Ro(e), q[m >> 2] = n;
                                        break G;
                                      }

                                      q[c + 12 >> 2] = d;
                                      q[d + 8 >> 2] = c;
                                      break G;
                                    }

                                    i = q[b + 24 >> 2];
                                    f = q[b + 12 >> 2];

                                    H: {
                                      if ((f | 0) != (b | 0)) {
                                        c = q[b + 8 >> 2];
                                        q[c + 12 >> 2] = f;
                                        q[f + 8 >> 2] = c;
                                        break H;
                                      }

                                      I: {
                                        d = b + 20 | 0;
                                        g = q[d >> 2];

                                        if (g) {
                                          break I;
                                        }

                                        d = b + 16 | 0;
                                        g = q[d >> 2];

                                        if (g) {
                                          break I;
                                        }

                                        f = 0;
                                        break H;
                                      }

                                      while (1) {
                                        c = d;
                                        f = g;
                                        d = g + 20 | 0;
                                        g = q[d >> 2];

                                        if (g) {
                                          continue;
                                        }

                                        d = f + 16 | 0;
                                        g = q[f + 16 >> 2];

                                        if (g) {
                                          continue;
                                        }

                                        break;
                                      }

                                      q[c >> 2] = 0;
                                    }

                                    if (!i) {
                                      break G;
                                    }

                                    c = q[b + 28 >> 2];
                                    d = (c << 2) + 10908 | 0;

                                    J: {
                                      if (q[d >> 2] == (b | 0)) {
                                        q[d >> 2] = f;

                                        if (f) {
                                          break J;
                                        }

                                        m = 10608, n = q[2652] & Ro(c), q[m >> 2] = n;
                                        break G;
                                      }

                                      q[i + (q[i + 16 >> 2] == (b | 0) ? 16 : 20) >> 2] = f;

                                      if (!f) {
                                        break G;
                                      }
                                    }

                                    q[f + 24 >> 2] = i;
                                    c = q[b + 16 >> 2];

                                    if (c) {
                                      q[f + 16 >> 2] = c;
                                      q[c + 24 >> 2] = f;
                                    }

                                    c = q[b + 20 >> 2];

                                    if (!c) {
                                      break G;
                                    }

                                    q[f + 20 >> 2] = c;
                                    q[c + 24 >> 2] = f;
                                  }

                                  b = b + k | 0;
                                  a = a + k | 0;
                                }

                                q[b + 4 >> 2] = q[b + 4 >> 2] & -2;
                                q[h + 4 >> 2] = a | 1;
                                q[a + h >> 2] = a;

                                if (a >>> 0 <= 255) {
                                  b = a >>> 3 | 0;
                                  a = (b << 3) + 10644 | 0;
                                  c = q[2651];
                                  b = 1 << b;

                                  K: {
                                    if (!(c & b)) {
                                      q[2651] = b | c;
                                      b = a;
                                      break K;
                                    }

                                    b = q[a + 8 >> 2];
                                  }

                                  q[a + 8 >> 2] = h;
                                  q[b + 12 >> 2] = h;
                                  q[h + 12 >> 2] = a;
                                  q[h + 8 >> 2] = b;
                                  break B;
                                }

                                c = h;
                                d = a >>> 8 | 0;
                                b = 0;

                                L: {
                                  if (!d) {
                                    break L;
                                  }

                                  b = 31;

                                  if (a >>> 0 > 16777215) {
                                    break L;
                                  }

                                  e = d + 1048320 >>> 16 & 8;
                                  d = d << e;
                                  b = d + 520192 >>> 16 & 4;
                                  g = d << b;
                                  d = g + 245760 >>> 16 & 2;
                                  b = (g << d >>> 15 | 0) - (d | (b | e)) | 0;
                                  b = (b << 1 | a >>> b + 21 & 1) + 28 | 0;
                                }

                                q[c + 28 >> 2] = b;
                                q[h + 16 >> 2] = 0;
                                q[h + 20 >> 2] = 0;
                                c = (b << 2) + 10908 | 0;
                                d = q[2652];
                                e = 1 << b;

                                M: {
                                  if (!(d & e)) {
                                    q[2652] = d | e;
                                    q[c >> 2] = h;
                                    break M;
                                  }

                                  d = a << ((b | 0) == 31 ? 0 : 25 - (b >>> 1 | 0) | 0);
                                  b = q[c >> 2];

                                  while (1) {
                                    c = b;

                                    if ((q[b + 4 >> 2] & -8) == (a | 0)) {
                                      break C;
                                    }

                                    b = d >>> 29 | 0;
                                    d = d << 1;
                                    e = (b & 4) + c | 0;
                                    b = q[e + 16 >> 2];

                                    if (b) {
                                      continue;
                                    }

                                    break;
                                  }

                                  q[e + 16 >> 2] = h;
                                }

                                q[h + 24 >> 2] = c;
                                q[h + 12 >> 2] = h;
                                q[h + 8 >> 2] = h;
                                break B;
                              }

                              a = f + -40 | 0;
                              d = b + 8 & 7 ? -8 - b & 7 : 0;
                              h = a - d | 0;
                              q[2654] = h;
                              d = b + d | 0;
                              q[2657] = d;
                              q[d + 4 >> 2] = h | 1;
                              q[(a + b | 0) + 4 >> 2] = 40;
                              q[2658] = q[2773];
                              a = (e + (e + -39 & 7 ? 39 - e & 7 : 0) | 0) + -47 | 0;
                              d = a >>> 0 < c + 16 >>> 0 ? c : a;
                              q[d + 4 >> 2] = 27;
                              a = q[2766];
                              q[d + 16 >> 2] = q[2765];
                              q[d + 20 >> 2] = a;
                              a = q[2764];
                              q[d + 8 >> 2] = q[2763];
                              q[d + 12 >> 2] = a;
                              q[2765] = d + 8;
                              q[2764] = f;
                              q[2763] = b;
                              q[2766] = 0;
                              a = d + 24 | 0;

                              while (1) {
                                q[a + 4 >> 2] = 7;
                                b = a + 8 | 0;
                                a = a + 4 | 0;

                                if (e >>> 0 > b >>> 0) {
                                  continue;
                                }

                                break;
                              }

                              if ((c | 0) == (d | 0)) {
                                break x;
                              }

                              q[d + 4 >> 2] = q[d + 4 >> 2] & -2;
                              e = d - c | 0;
                              q[c + 4 >> 2] = e | 1;
                              q[d >> 2] = e;

                              if (e >>> 0 <= 255) {
                                b = e >>> 3 | 0;
                                a = (b << 3) + 10644 | 0;
                                d = q[2651];
                                b = 1 << b;

                                N: {
                                  if (!(d & b)) {
                                    q[2651] = b | d;
                                    b = a;
                                    break N;
                                  }

                                  b = q[a + 8 >> 2];
                                }

                                q[a + 8 >> 2] = c;
                                q[b + 12 >> 2] = c;
                                q[c + 12 >> 2] = a;
                                q[c + 8 >> 2] = b;
                                break x;
                              }

                              q[c + 16 >> 2] = 0;
                              q[c + 20 >> 2] = 0;
                              b = c;
                              d = e >>> 8 | 0;
                              a = 0;

                              O: {
                                if (!d) {
                                  break O;
                                }

                                a = 31;

                                if (e >>> 0 > 16777215) {
                                  break O;
                                }

                                f = d + 1048320 >>> 16 & 8;
                                d = d << f;
                                a = d + 520192 >>> 16 & 4;
                                h = d << a;
                                d = h + 245760 >>> 16 & 2;
                                a = (h << d >>> 15 | 0) - (d | (a | f)) | 0;
                                a = (a << 1 | e >>> a + 21 & 1) + 28 | 0;
                              }

                              q[b + 28 >> 2] = a;
                              b = (a << 2) + 10908 | 0;
                              d = q[2652];
                              f = 1 << a;

                              P: {
                                if (!(d & f)) {
                                  q[2652] = d | f;
                                  q[b >> 2] = c;
                                  q[c + 24 >> 2] = b;
                                  break P;
                                }

                                a = e << ((a | 0) == 31 ? 0 : 25 - (a >>> 1 | 0) | 0);
                                b = q[b >> 2];

                                while (1) {
                                  d = b;

                                  if ((e | 0) == (q[b + 4 >> 2] & -8)) {
                                    break A;
                                  }

                                  b = a >>> 29 | 0;
                                  a = a << 1;
                                  f = d + (b & 4) | 0;
                                  b = q[f + 16 >> 2];

                                  if (b) {
                                    continue;
                                  }

                                  break;
                                }

                                q[f + 16 >> 2] = c;
                                q[c + 24 >> 2] = d;
                              }

                              q[c + 12 >> 2] = c;
                              q[c + 8 >> 2] = c;
                              break x;
                            }

                            a = q[c + 8 >> 2];
                            q[a + 12 >> 2] = h;
                            q[c + 8 >> 2] = h;
                            q[h + 24 >> 2] = 0;
                            q[h + 12 >> 2] = c;
                            q[h + 8 >> 2] = a;
                          }

                          a = j + 8 | 0;
                          break a;
                        }

                        a = q[d + 8 >> 2];
                        q[a + 12 >> 2] = c;
                        q[d + 8 >> 2] = c;
                        q[c + 24 >> 2] = 0;
                        q[c + 12 >> 2] = d;
                        q[c + 8 >> 2] = a;
                      }

                      a = q[2654];

                      if (a >>> 0 <= g >>> 0) {
                        break d;
                      }

                      b = a - g | 0;
                      q[2654] = b;
                      a = q[2657];
                      c = a + g | 0;
                      q[2657] = c;
                      q[c + 4 >> 2] = b | 1;
                      q[a + 4 >> 2] = g | 3;
                      a = a + 8 | 0;
                      break a;
                    }

                    q[2373] = 48;
                    a = 0;
                    break a;
                  }

                  Q: {
                    if (!h) {
                      break Q;
                    }

                    a = q[e + 28 >> 2];
                    d = (a << 2) + 10908 | 0;

                    R: {
                      if (q[d >> 2] == (e | 0)) {
                        q[d >> 2] = b;

                        if (b) {
                          break R;
                        }

                        i = Ro(a) & i;
                        q[2652] = i;
                        break Q;
                      }

                      q[h + (q[h + 16 >> 2] == (e | 0) ? 16 : 20) >> 2] = b;

                      if (!b) {
                        break Q;
                      }
                    }

                    q[b + 24 >> 2] = h;
                    a = q[e + 16 >> 2];

                    if (a) {
                      q[b + 16 >> 2] = a;
                      q[a + 24 >> 2] = b;
                    }

                    a = q[e + 20 >> 2];

                    if (!a) {
                      break Q;
                    }

                    q[b + 20 >> 2] = a;
                    q[a + 24 >> 2] = b;
                  }

                  S: {
                    if (c >>> 0 <= 15) {
                      a = c + g | 0;
                      q[e + 4 >> 2] = a | 3;
                      a = a + e | 0;
                      q[a + 4 >> 2] = q[a + 4 >> 2] | 1;
                      break S;
                    }

                    q[e + 4 >> 2] = g | 3;
                    d = e + g | 0;
                    q[d + 4 >> 2] = c | 1;
                    q[c + d >> 2] = c;

                    if (c >>> 0 <= 255) {
                      b = c >>> 3 | 0;
                      a = (b << 3) + 10644 | 0;
                      c = q[2651];
                      b = 1 << b;

                      T: {
                        if (!(c & b)) {
                          q[2651] = b | c;
                          b = a;
                          break T;
                        }

                        b = q[a + 8 >> 2];
                      }

                      q[a + 8 >> 2] = d;
                      q[b + 12 >> 2] = d;
                      q[d + 12 >> 2] = a;
                      q[d + 8 >> 2] = b;
                      break S;
                    }

                    b = d;
                    g = c >>> 8 | 0;
                    a = 0;

                    U: {
                      if (!g) {
                        break U;
                      }

                      a = 31;

                      if (c >>> 0 > 16777215) {
                        break U;
                      }

                      f = g + 1048320 >>> 16 & 8;
                      g = g << f;
                      a = g + 520192 >>> 16 & 4;
                      h = g << a;
                      g = h + 245760 >>> 16 & 2;
                      a = (h << g >>> 15 | 0) - (g | (a | f)) | 0;
                      a = (a << 1 | c >>> a + 21 & 1) + 28 | 0;
                    }

                    q[b + 28 >> 2] = a;
                    q[d + 16 >> 2] = 0;
                    q[d + 20 >> 2] = 0;
                    b = (a << 2) + 10908 | 0;

                    V: {
                      g = 1 << a;

                      W: {
                        if (!(g & i)) {
                          q[2652] = g | i;
                          q[b >> 2] = d;
                          break W;
                        }

                        a = c << ((a | 0) == 31 ? 0 : 25 - (a >>> 1 | 0) | 0);
                        g = q[b >> 2];

                        while (1) {
                          b = g;

                          if ((q[b + 4 >> 2] & -8) == (c | 0)) {
                            break V;
                          }

                          g = a >>> 29 | 0;
                          a = a << 1;
                          f = (g & 4) + b | 0;
                          g = q[f + 16 >> 2];

                          if (g) {
                            continue;
                          }

                          break;
                        }

                        q[f + 16 >> 2] = d;
                      }

                      q[d + 24 >> 2] = b;
                      q[d + 12 >> 2] = d;
                      q[d + 8 >> 2] = d;
                      break S;
                    }

                    a = q[b + 8 >> 2];
                    q[a + 12 >> 2] = d;
                    q[b + 8 >> 2] = d;
                    q[d + 24 >> 2] = 0;
                    q[d + 12 >> 2] = b;
                    q[d + 8 >> 2] = a;
                  }

                  a = e + 8 | 0;
                  break a;
                }

                X: {
                  if (!j) {
                    break X;
                  }

                  a = q[b + 28 >> 2];
                  c = (a << 2) + 10908 | 0;

                  Y: {
                    if (q[c >> 2] == (b | 0)) {
                      q[c >> 2] = e;

                      if (e) {
                        break Y;
                      }

                      m = 10608, n = Ro(a) & k, q[m >> 2] = n;
                      break X;
                    }

                    q[j + (q[j + 16 >> 2] == (b | 0) ? 16 : 20) >> 2] = e;

                    if (!e) {
                      break X;
                    }
                  }

                  q[e + 24 >> 2] = j;
                  a = q[b + 16 >> 2];

                  if (a) {
                    q[e + 16 >> 2] = a;
                    q[a + 24 >> 2] = e;
                  }

                  a = q[b + 20 >> 2];

                  if (!a) {
                    break X;
                  }

                  q[e + 20 >> 2] = a;
                  q[a + 24 >> 2] = e;
                }

                Z: {
                  if (d >>> 0 <= 15) {
                    a = d + g | 0;
                    q[b + 4 >> 2] = a | 3;
                    a = a + b | 0;
                    q[a + 4 >> 2] = q[a + 4 >> 2] | 1;
                    break Z;
                  }

                  q[b + 4 >> 2] = g | 3;
                  g = b + g | 0;
                  q[g + 4 >> 2] = d | 1;
                  q[d + g >> 2] = d;

                  if (i) {
                    c = i >>> 3 | 0;
                    a = (c << 3) + 10644 | 0;
                    e = q[2656];
                    c = 1 << c;

                    _: {
                      if (!(c & f)) {
                        q[2651] = c | f;
                        c = a;
                        break _;
                      }

                      c = q[a + 8 >> 2];
                    }

                    q[a + 8 >> 2] = e;
                    q[c + 12 >> 2] = e;
                    q[e + 12 >> 2] = a;
                    q[e + 8 >> 2] = c;
                  }

                  q[2656] = g;
                  q[2653] = d;
                }

                a = b + 8 | 0;
              }

              ma = l + 16 | 0;
              return a | 0;
            }

            function Rj() {
              var a = 0,
                  b = 0;
              a = ma - 720 | 0;
              ma = a;
              M(4048, 4076, 4112, 0, 3912, 41, 3915, 0, 3915, 0, 2468, 3917, 42);
              q[a + 704 >> 2] = 0;
              q[a + 708 >> 2] = 1;
              q[a + 712 >> 2] = 0;
              q[a + 716 >> 2] = 1;
              Qj(a + 704 | 0);
              M(4416, 4456, 4500, 4048, 3912, 43, 3912, 151, 3912, 152, 2492, 3917, 44);
              Oj();
              L(4048, 4220, 2, 4528, 4564, 45, 46);
              L(4048, 4230, 3, 4612, 3992, 47, 48);
              M(4780, 4808, 4844, 0, 3912, 49, 3915, 0, 3915, 0, 2515, 3917, 50);
              q[a + 696 >> 2] = 0;
              q[a + 700 >> 2] = 1;
              q[a + 712 >> 2] = 0;
              q[a + 716 >> 2] = 1;
              Kj(a + 696 | 0);
              M(4984, 5024, 5068, 4780, 3912, 51, 3912, 156, 3912, 157, 2539, 3917, 52);
              Ij();
              L(4780, 4220, 2, 5092, 4564, 53, 54);
              L(4780, 4230, 3, 4612, 3992, 47, 55);
              P(4160, 2562, 4016, 160, 3917, 161);
              wf(wf(a + 712 | 0, 2455, 0), 2461, 4);
              O(4160);
              P(5140, 2567, 4016, 164, 3917, 165);
              Ej(Fj(a + 712 | 0));
              O(5140);
              M(5176, 5192, 5216, 0, 3912, 56, 3915, 0, 3915, 0, 2584, 3917, 57);
              Cj();
              L(5176, 2589, 1, 5232, 3912, 59, 58);
              L(5176, 2603, 2, 5236, 4564, 60, 61);
              L(5176, 2620, 2, 5244, 4524, 62, 63);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 64;
              b = q[a + 716 >> 2];
              q[a + 688 >> 2] = q[a + 712 >> 2];
              q[a + 692 >> 2] = b;
              Ac(2628, a + 688 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 65;
              b = q[a + 716 >> 2];
              q[a + 680 >> 2] = q[a + 712 >> 2];
              q[a + 684 >> 2] = b;
              Bj(a + 680 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 66;
              b = q[a + 716 >> 2];
              q[a + 672 >> 2] = q[a + 712 >> 2];
              q[a + 676 >> 2] = b;
              Lb(2644, a + 672 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 67;
              b = q[a + 716 >> 2];
              q[a + 664 >> 2] = q[a + 712 >> 2];
              q[a + 668 >> 2] = b;
              kc(2660, a + 664 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 68;
              b = q[a + 716 >> 2];
              q[a + 656 >> 2] = q[a + 712 >> 2];
              q[a + 660 >> 2] = b;
              kc(2672, a + 656 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 69;
              b = q[a + 716 >> 2];
              q[a + 648 >> 2] = q[a + 712 >> 2];
              q[a + 652 >> 2] = b;
              Lb(2691, a + 648 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 70;
              b = q[a + 716 >> 2];
              q[a + 640 >> 2] = q[a + 712 >> 2];
              q[a + 644 >> 2] = b;
              Lb(2707, a + 640 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 71;
              b = q[a + 716 >> 2];
              q[a + 632 >> 2] = q[a + 712 >> 2];
              q[a + 636 >> 2] = b;
              Lb(2721, a + 632 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 72;
              b = q[a + 716 >> 2];
              q[a + 624 >> 2] = q[a + 712 >> 2];
              q[a + 628 >> 2] = b;
              Lb(2734, a + 624 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 73;
              b = q[a + 716 >> 2];
              q[a + 616 >> 2] = q[a + 712 >> 2];
              q[a + 620 >> 2] = b;
              Lb(2751, a + 616 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 74;
              b = q[a + 716 >> 2];
              q[a + 608 >> 2] = q[a + 712 >> 2];
              q[a + 612 >> 2] = b;
              Lb(2763, a + 608 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 75;
              b = q[a + 716 >> 2];
              q[a + 600 >> 2] = q[a + 712 >> 2];
              q[a + 604 >> 2] = b;
              kc(2781, a + 600 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 76;
              b = q[a + 716 >> 2];
              q[a + 592 >> 2] = q[a + 712 >> 2];
              q[a + 596 >> 2] = b;
              kc(2791, a + 592 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 77;
              b = q[a + 716 >> 2];
              q[a + 584 >> 2] = q[a + 712 >> 2];
              q[a + 588 >> 2] = b;
              Lb(2808, a + 584 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 78;
              b = q[a + 716 >> 2];
              q[a + 576 >> 2] = q[a + 712 >> 2];
              q[a + 580 >> 2] = b;
              Lb(2822, a + 576 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 79;
              b = q[a + 716 >> 2];
              q[a + 568 >> 2] = q[a + 712 >> 2];
              q[a + 572 >> 2] = b;
              Lb(2834, a + 568 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 80;
              b = q[a + 716 >> 2];
              q[a + 560 >> 2] = q[a + 712 >> 2];
              q[a + 564 >> 2] = b;
              cb(2845, a + 560 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 81;
              b = q[a + 716 >> 2];
              q[a + 552 >> 2] = q[a + 712 >> 2];
              q[a + 556 >> 2] = b;
              cb(2853, a + 552 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 82;
              b = q[a + 716 >> 2];
              q[a + 544 >> 2] = q[a + 712 >> 2];
              q[a + 548 >> 2] = b;
              cb(2866, a + 544 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 83;
              b = q[a + 716 >> 2];
              q[a + 536 >> 2] = q[a + 712 >> 2];
              q[a + 540 >> 2] = b;
              cb(2886, a + 536 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 84;
              b = q[a + 716 >> 2];
              q[a + 528 >> 2] = q[a + 712 >> 2];
              q[a + 532 >> 2] = b;
              cb(2898, a + 528 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 85;
              b = q[a + 716 >> 2];
              q[a + 520 >> 2] = q[a + 712 >> 2];
              q[a + 524 >> 2] = b;
              cb(2912, a + 520 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 86;
              b = q[a + 716 >> 2];
              q[a + 512 >> 2] = q[a + 712 >> 2];
              q[a + 516 >> 2] = b;
              cb(2921, a + 512 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 87;
              b = q[a + 716 >> 2];
              q[a + 504 >> 2] = q[a + 712 >> 2];
              q[a + 508 >> 2] = b;
              Ac(2937, a + 504 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 88;
              b = q[a + 716 >> 2];
              q[a + 496 >> 2] = q[a + 712 >> 2];
              q[a + 500 >> 2] = b;
              cb(2950, a + 496 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 89;
              b = q[a + 716 >> 2];
              q[a + 488 >> 2] = q[a + 712 >> 2];
              q[a + 492 >> 2] = b;
              cb(2960, a + 488 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 90;
              b = q[a + 716 >> 2];
              q[a + 480 >> 2] = q[a + 712 >> 2];
              q[a + 484 >> 2] = b;
              Ac(2977, a + 480 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 91;
              b = q[a + 716 >> 2];
              q[a + 472 >> 2] = q[a + 712 >> 2];
              q[a + 476 >> 2] = b;
              cb(2991, a + 472 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 92;
              b = q[a + 716 >> 2];
              q[a + 464 >> 2] = q[a + 712 >> 2];
              q[a + 468 >> 2] = b;
              cb(3003, a + 464 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 93;
              b = q[a + 716 >> 2];
              q[a + 456 >> 2] = q[a + 712 >> 2];
              q[a + 460 >> 2] = b;
              cb(3022, a + 456 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 94;
              b = q[a + 716 >> 2];
              q[a + 448 >> 2] = q[a + 712 >> 2];
              q[a + 452 >> 2] = b;
              cb(3035, a + 448 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 95;
              b = q[a + 716 >> 2];
              q[a + 440 >> 2] = q[a + 712 >> 2];
              q[a + 444 >> 2] = b;
              cb(3055, a + 440 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 96;
              b = q[a + 716 >> 2];
              q[a + 432 >> 2] = q[a + 712 >> 2];
              q[a + 436 >> 2] = b;
              cb(3067, a + 432 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 97;
              b = q[a + 716 >> 2];
              q[a + 424 >> 2] = q[a + 712 >> 2];
              q[a + 428 >> 2] = b;
              cb(3086, a + 424 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 98;
              b = q[a + 716 >> 2];
              q[a + 416 >> 2] = q[a + 712 >> 2];
              q[a + 420 >> 2] = b;
              cb(3099, a + 416 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 99;
              b = q[a + 716 >> 2];
              q[a + 408 >> 2] = q[a + 712 >> 2];
              q[a + 412 >> 2] = b;
              cb(3119, a + 408 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 100;
              b = q[a + 716 >> 2];
              q[a + 400 >> 2] = q[a + 712 >> 2];
              q[a + 404 >> 2] = b;
              kc(3134, a + 400 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 101;
              b = q[a + 716 >> 2];
              q[a + 392 >> 2] = q[a + 712 >> 2];
              q[a + 396 >> 2] = b;
              kc(3144, a + 392 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 102;
              b = q[a + 716 >> 2];
              q[a + 384 >> 2] = q[a + 712 >> 2];
              q[a + 388 >> 2] = b;
              kc(3155, a + 384 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 103;
              b = q[a + 716 >> 2];
              q[a + 376 >> 2] = q[a + 712 >> 2];
              q[a + 380 >> 2] = b;
              Ub(3173, a + 376 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 104;
              b = q[a + 716 >> 2];
              q[a + 368 >> 2] = q[a + 712 >> 2];
              q[a + 372 >> 2] = b;
              Yd(3189, a + 368 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 105;
              b = q[a + 716 >> 2];
              q[a + 360 >> 2] = q[a + 712 >> 2];
              q[a + 364 >> 2] = b;
              Ub(3201, a + 360 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 106;
              b = q[a + 716 >> 2];
              q[a + 352 >> 2] = q[a + 712 >> 2];
              q[a + 356 >> 2] = b;
              Ub(3217, a + 352 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 107;
              b = q[a + 716 >> 2];
              q[a + 344 >> 2] = q[a + 712 >> 2];
              q[a + 348 >> 2] = b;
              Ub(3231, a + 344 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 108;
              b = q[a + 716 >> 2];
              q[a + 336 >> 2] = q[a + 712 >> 2];
              q[a + 340 >> 2] = b;
              Ub(3244, a + 336 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 109;
              b = q[a + 716 >> 2];
              q[a + 328 >> 2] = q[a + 712 >> 2];
              q[a + 332 >> 2] = b;
              Ub(3261, a + 328 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 110;
              b = q[a + 716 >> 2];
              q[a + 320 >> 2] = q[a + 712 >> 2];
              q[a + 324 >> 2] = b;
              Ub(3273, a + 320 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 111;
              b = q[a + 716 >> 2];
              q[a + 312 >> 2] = q[a + 712 >> 2];
              q[a + 316 >> 2] = b;
              Yd(3291, a + 312 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 112;
              b = q[a + 716 >> 2];
              q[a + 304 >> 2] = q[a + 712 >> 2];
              q[a + 308 >> 2] = b;
              jc(3301, a + 304 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 113;
              b = q[a + 716 >> 2];
              q[a + 296 >> 2] = q[a + 712 >> 2];
              q[a + 300 >> 2] = b;
              Tb(3314, a + 296 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 114;
              b = q[a + 716 >> 2];
              q[a + 288 >> 2] = q[a + 712 >> 2];
              q[a + 292 >> 2] = b;
              Tb(3326, a + 288 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 115;
              b = q[a + 716 >> 2];
              q[a + 280 >> 2] = q[a + 712 >> 2];
              q[a + 284 >> 2] = b;
              jc(3340, a + 280 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 116;
              b = q[a + 716 >> 2];
              q[a + 272 >> 2] = q[a + 712 >> 2];
              q[a + 276 >> 2] = b;
              jc(3349, a + 272 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 117;
              b = q[a + 716 >> 2];
              q[a + 264 >> 2] = q[a + 712 >> 2];
              q[a + 268 >> 2] = b;
              jc(3359, a + 264 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 118;
              b = q[a + 716 >> 2];
              q[a + 256 >> 2] = q[a + 712 >> 2];
              q[a + 260 >> 2] = b;
              jc(3371, a + 256 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 119;
              b = q[a + 716 >> 2];
              q[a + 248 >> 2] = q[a + 712 >> 2];
              q[a + 252 >> 2] = b;
              jc(3384, a + 248 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 120;
              b = q[a + 716 >> 2];
              q[a + 240 >> 2] = q[a + 712 >> 2];
              q[a + 244 >> 2] = b;
              jc(3396, a + 240 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 121;
              b = q[a + 716 >> 2];
              q[a + 232 >> 2] = q[a + 712 >> 2];
              q[a + 236 >> 2] = b;
              Tb(3409, a + 232 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 122;
              b = q[a + 716 >> 2];
              q[a + 224 >> 2] = q[a + 712 >> 2];
              q[a + 228 >> 2] = b;
              ed(3424, a + 224 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 123;
              b = q[a + 716 >> 2];
              q[a + 216 >> 2] = q[a + 712 >> 2];
              q[a + 220 >> 2] = b;
              Ub(3434, a + 216 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 124;
              b = q[a + 716 >> 2];
              q[a + 208 >> 2] = q[a + 712 >> 2];
              q[a + 212 >> 2] = b;
              Ub(3446, a + 208 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 125;
              b = q[a + 716 >> 2];
              q[a + 200 >> 2] = q[a + 712 >> 2];
              q[a + 204 >> 2] = b;
              Yd(3457, a + 200 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 126;
              b = q[a + 716 >> 2];
              q[a + 192 >> 2] = q[a + 712 >> 2];
              q[a + 196 >> 2] = b;
              Aj(a + 192 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 127;
              b = q[a + 716 >> 2];
              q[a + 184 >> 2] = q[a + 712 >> 2];
              q[a + 188 >> 2] = b;
              zj(a + 184 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 128;
              b = q[a + 716 >> 2];
              q[a + 176 >> 2] = q[a + 712 >> 2];
              q[a + 180 >> 2] = b;
              yj(a + 176 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 129;
              b = q[a + 716 >> 2];
              q[a + 168 >> 2] = q[a + 712 >> 2];
              q[a + 172 >> 2] = b;
              xj(a + 168 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 130;
              b = q[a + 716 >> 2];
              q[a + 160 >> 2] = q[a + 712 >> 2];
              q[a + 164 >> 2] = b;
              wj(a + 160 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 131;
              b = q[a + 716 >> 2];
              q[a + 152 >> 2] = q[a + 712 >> 2];
              q[a + 156 >> 2] = b;
              vj(a + 152 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 132;
              b = q[a + 716 >> 2];
              q[a + 144 >> 2] = q[a + 712 >> 2];
              q[a + 148 >> 2] = b;
              uj(a + 144 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 133;
              b = q[a + 716 >> 2];
              q[a + 136 >> 2] = q[a + 712 >> 2];
              q[a + 140 >> 2] = b;
              tj(a + 136 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 134;
              b = q[a + 716 >> 2];
              q[a + 128 >> 2] = q[a + 712 >> 2];
              q[a + 132 >> 2] = b;
              Ac(3583, a + 128 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 135;
              b = q[a + 716 >> 2];
              q[a + 120 >> 2] = q[a + 712 >> 2];
              q[a + 124 >> 2] = b;
              sj(a + 120 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 136;
              b = q[a + 716 >> 2];
              q[a + 112 >> 2] = q[a + 712 >> 2];
              q[a + 116 >> 2] = b;
              Ac(3615, a + 112 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 137;
              b = q[a + 716 >> 2];
              q[a + 104 >> 2] = q[a + 712 >> 2];
              q[a + 108 >> 2] = b;
              Ac(3632, a + 104 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 138;
              b = q[a + 716 >> 2];
              q[a + 96 >> 2] = q[a + 712 >> 2];
              q[a + 100 >> 2] = b;
              rj(a + 96 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 139;
              b = q[a + 716 >> 2];
              q[a + 88 >> 2] = q[a + 712 >> 2];
              q[a + 92 >> 2] = b;
              qj(a + 88 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 140;
              b = q[a + 716 >> 2];
              q[a + 80 >> 2] = q[a + 712 >> 2];
              q[a + 84 >> 2] = b;
              Tb(3666, a + 80 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 141;
              b = q[a + 716 >> 2];
              q[a + 72 >> 2] = q[a + 712 >> 2];
              q[a + 76 >> 2] = b;
              Tb(3682, a + 72 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 142;
              b = q[a + 716 >> 2];
              q[a + 64 >> 2] = q[a + 712 >> 2];
              q[a + 68 >> 2] = b;
              Tb(3699, a - -64 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 143;
              b = q[a + 716 >> 2];
              q[a + 56 >> 2] = q[a + 712 >> 2];
              q[a + 60 >> 2] = b;
              Tb(3714, a + 56 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 144;
              b = q[a + 716 >> 2];
              q[a + 48 >> 2] = q[a + 712 >> 2];
              q[a + 52 >> 2] = b;
              Tb(3732, a + 48 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 145;
              b = q[a + 716 >> 2];
              q[a + 40 >> 2] = q[a + 712 >> 2];
              q[a + 44 >> 2] = b;
              Tb(3749, a + 40 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 146;
              b = q[a + 716 >> 2];
              q[a + 32 >> 2] = q[a + 712 >> 2];
              q[a + 36 >> 2] = b;
              pj(a + 32 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 147;
              b = q[a + 716 >> 2];
              q[a + 24 >> 2] = q[a + 712 >> 2];
              q[a + 28 >> 2] = b;
              ed(3785, a + 24 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 148;
              b = q[a + 716 >> 2];
              q[a + 16 >> 2] = q[a + 712 >> 2];
              q[a + 20 >> 2] = b;
              ed(3803, a + 16 | 0);
              q[a + 716 >> 2] = 0;
              q[a + 712 >> 2] = 149;
              b = q[a + 716 >> 2];
              q[a + 8 >> 2] = q[a + 712 >> 2];
              q[a + 12 >> 2] = b;
              ed(3821, a + 8 | 0);
              ma = a + 720 | 0;
            }

            function Wm(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
              var p = 0,
                  s = x(0),
                  t = 0,
                  v = 0,
                  w = 0,
                  y = 0,
                  z = x(0),
                  A = x(0),
                  B = x(0),
                  C = x(0),
                  D = 0,
                  E = 0,
                  F = x(0),
                  G = 0,
                  H = x(0),
                  I = x(0),
                  J = x(0),
                  K = 0,
                  L = x(0),
                  M = x(0),
                  N = x(0),
                  O = x(0),
                  P = 0,
                  Q = 0,
                  R = x(0),
                  S = 0,
                  T = x(0),
                  U = x(0),
                  V = 0,
                  W = x(0),
                  X = 0,
                  Y = x(0),
                  Z = x(0),
                  _ = x(0),
                  $ = 0,
                  aa = 0,
                  ba = 0,
                  ca = 0,
                  da = 0,
                  ea = x(0),
                  fa = x(0),
                  ga = x(0),
                  ha = 0,
                  ia = x(0),
                  ja = 0,
                  ka = 0;

              p = ma - 208 | 0;
              ma = p;
              q[p + 204 >> 2] = a;
              ub(a, !e | Fa(b) ^ 1, 2020);
              ub(a, !f | Fa(c) ^ 1, 2100);
              w = (i ? 0 : 4) + k | 0;
              q[w >> 2] = q[w >> 2] + 1;
              K = Ae(a, d);
              Io(a + 288 | 0, K);
              w = dc(2, K);
              v = dc(0, K);
              ha = p, ia = sb(a, w, g), u[ha + 112 >> 2] = ia;
              D = a;
              a = ((K | 0) != 1) << 1;
              Cd(D, u[p + 112 >> 2], a);
              D = q[p + 204 >> 2];
              ha = p, ia = Sb(D, w, g), u[ha + 112 >> 2] = ia;
              X = D;
              D = ((K | 0) == 1) << 1;
              Cd(X, u[p + 112 >> 2], D);
              y = q[p + 204 >> 2];
              ha = p, ia = sb(y, v, g), u[ha + 112 >> 2] = ia;
              Cd(y, u[p + 112 >> 2], 1);
              y = q[p + 204 >> 2];
              ha = p, ia = Sb(y, v, g), u[ha + 112 >> 2] = ia;
              Cd(y, u[p + 112 >> 2], 3);
              y = q[p + 204 >> 2];
              Bd(y, $b(y, w), a);
              y = q[p + 204 >> 2];
              Bd(y, pc(y, w), D);
              y = q[p + 204 >> 2];
              Bd(y, $b(y, v), 1);
              y = q[p + 204 >> 2];
              Bd(y, pc(y, v), 3);
              y = q[p + 204 >> 2];
              ha = p, ia = ye(y, w, g), u[ha + 112 >> 2] = ia;
              Ad(y, u[p + 112 >> 2], a);
              a = q[p + 204 >> 2];
              ha = p, ia = xe(a, w, g), u[ha + 112 >> 2] = ia;
              Ad(a, u[p + 112 >> 2], D);
              a = q[p + 204 >> 2];
              ha = p, ia = ye(a, v, g), u[ha + 112 >> 2] = ia;
              Ad(a, u[p + 112 >> 2], 1);
              a = q[p + 204 >> 2];
              ha = p, ia = xe(a, v, g), u[ha + 112 >> 2] = ia;
              Ad(a, u[p + 112 >> 2], 3);
              w = Xc(q[p + 204 >> 2]);
              a = q[p + 204 >> 2];

              a: {
                if (w) {
                  Vm(a, b, c, e, f, g, h, k, l, o);
                  break a;
                }

                D = Zb(a);

                if (!D) {
                  Um(q[p + 204 >> 2], b, c, e, f, g, h);
                  break a;
                }

                if (!i) {
                  if (Tm(q[p + 204 >> 2], b, c, e, f, g, h)) {
                    break a;
                  }
                }

                Fo(q[p + 204 >> 2], l);
                De(q[p + 204 >> 2], 0);
                ac(p + 112 | 0, Ea(q[p + 204 >> 2]));
                E = dc(uc(p + 112 | 0), K);
                t = Ge(E, K);
                G = Wa(E);
                Jc(p + 112 | 0, Ea(q[p + 204 >> 2]));
                S = jb(p + 112 | 0);
                ha = p, ia = we(q[p + 204 >> 2], t, g), u[ha + 112 >> 2] = ia;
                z = u[p + 112 >> 2];
                T = yb(q[p + 204 >> 2], E, g);
                M = yb(q[p + 204 >> 2], t, g);
                ha = p, ia = Ja(q[p + 204 >> 2], 2, g), u[ha + 112 >> 2] = ia;
                Z = u[p + 112 >> 2];
                ha = p, ia = Ja(q[p + 204 >> 2], 0, g), u[ha + 112 >> 2] = ia;
                _ = u[p + 112 >> 2];
                ha = p, ja = Ea(q[p + 204 >> 2]), q[ha + 200 >> 2] = ja;
                ha = p, ja = Ea(q[p + 204 >> 2]), q[ha + 192 >> 2] = ja;
                Uf(p + 184 | 0, p + 200 | 0, 0);
                q[p + 12 >> 2] = q[p + 184 >> 2];
                ha = p, ia = Pa(p + 12 | 0, g), u[ha + 112 >> 2] = ia;
                s = u[p + 112 >> 2];
                Gc(p + 176 | 0, p + 192 | 0, 0);
                q[p + 8 >> 2] = q[p + 176 >> 2];
                ha = p, ia = Pa(p + 8 | 0, g), u[ha + 112 >> 2] = ia;
                B = u[p + 112 >> 2];
                Uf(p + 168 | 0, p + 200 | 0, 1);
                q[p + 4 >> 2] = q[p + 168 >> 2];
                ha = p, ia = Pa(p + 4 | 0, h), u[ha + 112 >> 2] = ia;
                I = u[p + 112 >> 2];
                Gc(p + 160 | 0, p + 192 | 0, 1);
                q[p >> 2] = q[p + 160 >> 2];
                ha = p, ia = Pa(p, h), u[ha + 112 >> 2] = ia;
                L = u[p + 112 >> 2];
                A = Tf(q[p + 204 >> 2], 2, b, g, g);
                O = Tf(q[p + 204 >> 2], 0, c, h, g);
                H = G ? A : O;
                a = G ? e : f;
                o = Sm(q[p + 204 >> 2], A, O, e, f, K, E, j, i, k, l, m, n) > H;
                P = S ? (a | 0) == 2 ? o ? 1 : a : a : a;
                $ = o & (a | 0) != 0;
                F = G ? O : A;
                Q = G ? f : e;
                a = (Q | 0) == 1;
                aa = a & (i ^ 1);
                I = x((G ? s : I) - T);
                L = x((G ? B : L) - T);
                U = G ? h : g;
                R = G ? g : h;
                ba = G ^ 1;
                ca = Q & -3;
                da = a & !S;
                v = p + 112 | 0;
                ld(v + 20 | 0);
                f = 0;
                a = 0;

                while (1) {
                  y = a;
                  w = f;
                  Rm(p - -64 | 0, p + 204 | 0, d, R, A, H, w, a);
                  Qm(v, p - -64 | 0);
                  Sf(p - -64 | 0);
                  f = q[v + 16 >> 2];
                  a = v;

                  b: {
                    c: {
                      d: {
                        e: {
                          if ((P | 0) == 1) {
                            s = H;
                            break e;
                          }

                          o = Fa(I);

                          if (!!(u[v + 4 >> 2] < I)) {
                            s = I;

                            if (!o) {
                              break e;
                            }
                          }

                          o = Fa(L);

                          if (!!(u[v + 4 >> 2] > L)) {
                            s = L;

                            if (!o) {
                              break e;
                            }
                          }

                          f: {
                            if (r[q[q[p + 204 >> 2] + 556 >> 2] + 11 | 0]) {
                              break f;
                            }

                            if (!(ha = Fa(u[v + 8 >> 2]), ja = 0, ka = u[v + 8 >> 2] == x(0), ka ? ha : ja)) {
                              if (!Fa(qc(q[p + 204 >> 2]))) {
                                break f;
                              }

                              if (qc(q[p + 204 >> 2]) != x(0)) {
                                break f;
                              }
                            }

                            H = u[v + 4 >> 2];
                          }

                          s = H;

                          if (r[q[q[p + 204 >> 2] + 556 >> 2] + 11 | 0]) {
                            Vb(q[p + 204 >> 2] + 288 | 0, 2, 1);
                          }

                          if (!r[q[q[p + 204 >> 2] + 556 >> 2] + 11 | 0]) {
                            break d;
                          }
                        }

                        if (Fa(s)) {
                          break d;
                        }

                        H = x(s - u[v + 4 >> 2]);
                        break c;
                      }

                      B = u[v + 4 >> 2];
                      H = s;

                      if (!(B < x(0))) {
                        break b;
                      }

                      H = x(-B);
                    }

                    u[a + 32 >> 2] = H;
                    H = s;
                  }

                  if (!aa) {
                    Pm(q[p + 204 >> 2], v, E, t, R, H, F, A, O, $, Q, i, j, k, l, m, n);
                  }

                  a = q[p + 204 >> 2];
                  o = Yc(Ga(a));
                  De(a, u[v + 32 >> 2] < x(0) | o);
                  Om(q[p + 204 >> 2], v, w, E, t, P, Q, R, g, H, F, A, i, l);
                  B = F;

                  if (!ca) {
                    B = x(Ya(q[p + 204 >> 2], t, x(M + u[v + 40 >> 2]), U, g) - M);
                  }

                  if (da) {
                    u[v + 40 >> 2] = F;
                    s = F;
                  } else {
                    s = u[v + 40 >> 2];
                  }

                  s = x(Ya(q[p + 204 >> 2], t, x(M + s), U, g) - M);
                  u[v + 40 >> 2] = s;

                  if (!(!i | w >>> 0 >= f >>> 0)) {
                    while (1) {
                      a = ec(q[p + 204 >> 2], w);
                      mc(p - -64 | 0, Ea(a));

                      g: {
                        if ((eb(p - -64 | 0) | 0) == 1) {
                          break g;
                        }

                        zb(p - -64 | 0, Ea(a));

                        if ((eb(p - -64 | 0) | 0) == 1) {
                          if (Ab(a, t)) {
                            ha = p, ia = zc(a, t, F), u[ha + 64 >> 2] = ia;
                            s = u[p - -64 >> 2];
                            C = $b(q[p + 204 >> 2], t);
                            ha = p, ia = sb(a, t, A), u[ha + 56 >> 2] = ia;
                            Qa(a, x(x(s + C) + u[p + 56 >> 2]), q[Da(2184, t) >> 2]);

                            if (!Fa(u[Da(Ga(a), q[Da(2184, t) >> 2]) >> 2])) {
                              break g;
                            }
                          }

                          s = $b(q[p + 204 >> 2], t);
                          ha = p, ia = sb(a, t, A), u[ha + 64 >> 2] = ia;
                          Qa(a, x(s + u[p - -64 >> 2]), q[Da(2184, t) >> 2]);
                          break g;
                        }

                        X = a;

                        h: {
                          i: {
                            o = Nb(q[p + 204 >> 2], a);

                            if ((o | 0) != 4) {
                              break i;
                            }

                            tc(p - -64 | 0, a, t);

                            if (q[p + 68 >> 2] == 3) {
                              break i;
                            }

                            sc(p + 56 | 0, a, t);

                            if (q[p + 60 >> 2] == 3) {
                              break i;
                            }

                            s = z;

                            if (Eb(a, t, F)) {
                              break h;
                            }

                            o = Da(Ga(a) + 288 | 0, q[Da(1848, E) >> 2]);
                            s = u[o >> 2];
                            q[p + 56 >> 2] = q[o >> 2];
                            V = Ea(a);
                            u[p + 64 >> 2] = u[V + 188 >> 2];
                            o = p;

                            j: {
                              if (!Ia(p - -64 | 0)) {
                                ha = p, ia = Ja(a, t, A), u[ha + 40 >> 2] = ia;
                                C = u[V + 188 >> 2];
                                J = u[p + 40 >> 2];

                                k: {
                                  if (G) {
                                    u[p + 32 >> 2] = C;
                                    W = x(s / u[p + 32 >> 2]);
                                    break k;
                                  }

                                  u[p + 32 >> 2] = C;
                                  W = x(u[p + 32 >> 2] * s);
                                }

                                J = x(J + W);
                                break j;
                              }

                              J = u[v + 40 >> 2];
                            }

                            u[o + 48 >> 2] = J;
                            ha = p, ia = Ja(a, E, A), u[ha + 64 >> 2] = ia;
                            u[p + 56 >> 2] = u[p - -64 >> 2] + s;
                            q[p + 40 >> 2] = 1;
                            q[p + 32 >> 2] = 1;
                            Fc(a, E, H, A, p + 40 | 0, p + 56 | 0);
                            Fc(a, t, F, A, p + 32 | 0, p + 48 | 0);
                            s = u[p + 48 >> 2];
                            C = u[p + 56 >> 2];
                            Uc(p - -64 | 0, Ea(q[p + 204 >> 2]));
                            o = (S | 0) != 0 & (Vc(p - -64 | 0) | 0) != 4;
                            J = G ? C : s;
                            V = (Fa(J) | o & ba) ^ 1;
                            s = G ? s : C;
                            cc(a, J, s, K, V, (Fa(s) | o & G) ^ 1, A, O, 1, 2, j, k, l, m, n);
                            s = z;
                            break h;
                          }

                          s = ce(a, t, A);
                          tc(p - -64 | 0, a, t);
                          C = x(B - s);

                          l: {
                            if (q[p + 68 >> 2] != 3) {
                              break l;
                            }

                            sc(p + 56 | 0, a, t);

                            if (q[p + 60 >> 2] != 3) {
                              break l;
                            }

                            s = x(z + Xa(x(0), x(C * x(.5))));
                            break h;
                          }

                          sc(p - -64 | 0, a, t);
                          s = z;

                          if (q[p + 68 >> 2] == 3) {
                            break h;
                          }

                          tc(p - -64 | 0, a, t);

                          if (q[p + 68 >> 2] == 3) {
                            s = x(z + Xa(x(0), C));
                            break h;
                          }

                          o = o + -1 | 0;

                          if (o >>> 0 <= 1) {
                            s = z;

                            if (o - 1) {
                              break h;
                            }

                            s = x(z + x(C * x(.5)));
                            break h;
                          }

                          s = x(z + C);
                        }

                        Qa(X, x(s + x(N + u[Da(Ga(a), q[Da(2184, t) >> 2]) >> 2])), q[Da(2184, t) >> 2]);
                      }

                      w = w + 1 | 0;

                      if ((w | 0) != (f | 0)) {
                        continue;
                      }

                      break;
                    }

                    s = u[v + 40 >> 2];
                  }

                  a = y + 1 | 0;
                  N = x(N + s);
                  Y = Xa(Y, u[v + 36 >> 2]);

                  if (f >>> 0 < D >>> 0) {
                    continue;
                  }

                  break;
                }

                m: {
                  if (!i) {
                    break m;
                  }

                  if (!S) {
                    if (!Rf(q[p + 204 >> 2])) {
                      break m;
                    }
                  }

                  L = x(0);

                  n: {
                    o: {
                      if (Fa(F)) {
                        break o;
                      }

                      Uc(p - -64 | 0, Ea(q[p + 204 >> 2]));
                      d = Vc(p - -64 | 0) + -2 | 0;

                      if (d >>> 0 > 5) {
                        break o;
                      }

                      s = x(F - N);

                      p: {
                        switch (d - 1 | 0) {
                          default:
                            z = x(z + x(s * x(.5)));
                            break o;

                          case 1:
                            if (!(F > N)) {
                              break o;
                            }

                            L = x(s / x(a >>> 0));
                            break o;

                          case 4:
                            if (!!(F > N)) {
                              z = x(z + x(s / x(a << 1 >>> 0)));

                              if (a >>> 0 < 2) {
                                break o;
                              }

                              L = x(s / x(a >>> 0));
                              break n;
                            }

                            z = x(z + x(s * x(.5)));
                            break o;

                          case 3:
                            if (F > N ^ 1 | a >>> 0 < 2) {
                              break o;
                            }

                            L = x(s / x(y >>> 0));
                            break n;

                          case 2:
                            break o;

                          case 0:
                            break p;
                        }
                      }

                      z = x(z + s);
                    }

                    if (!a) {
                      break m;
                    }
                  }

                  o = 0;
                  a = 0;
                  f = 0;

                  while (1) {
                    I = x(0);
                    B = x(0);
                    s = x(0);
                    w = a;
                    C = x(0);
                    J = L;

                    if (a >>> 0 < D >>> 0) {
                      q: {
                        while (1) {
                          d = ec(q[p + 204 >> 2], w);
                          mc(p - -64 | 0, Ea(d));

                          r: {
                            if ((eb(p - -64 | 0) | 0) == 1) {
                              break r;
                            }

                            zb(p - -64 | 0, Ea(d));

                            if (eb(p - -64 | 0)) {
                              break r;
                            }

                            f = w;

                            if (q[d + 536 >> 2] != (o | 0)) {
                              break q;
                            }

                            if (Nm(d, t)) {
                              C = u[Da(Ga(d) + 288 | 0, q[Da(1848, t) >> 2]) >> 2];
                              ha = p, ia = Ja(d, t, A), u[ha + 64 >> 2] = ia;
                              s = Xa(s, x(C + u[p - -64 >> 2]));
                            }

                            if ((Nb(q[p + 204 >> 2], d) | 0) != 5) {
                              break r;
                            }

                            C = kd(d, l);
                            ha = p, ia = sb(d, 0, A), u[ha + 64 >> 2] = ia;
                            ea = u[p - -64 >> 2];
                            fa = u[Da(Ga(d) + 288 | 0, 1) >> 2];
                            ha = p, ia = Ja(d, 0, A), u[ha + 64 >> 2] = ia;
                            ga = u[p - -64 >> 2];
                            W = s;
                            s = x(C + ea);
                            B = Xa(B, s);
                            I = Xa(I, x(x(fa + ga) - s));
                            s = Xa(W, x(B + I));
                          }

                          w = w + 1 | 0;

                          if ((D | 0) != (w | 0)) {
                            continue;
                          }

                          break;
                        }

                        f = D;
                      }

                      C = B;
                    }

                    s = x(J + s);

                    if (a >>> 0 >= f >>> 0) {
                      z = x(z + s);
                    } else {
                      J = x(z + s);
                      C = x(z + C);

                      while (1) {
                        d = ec(q[p + 204 >> 2], a);
                        mc(p - -64 | 0, Ea(d));

                        s: {
                          if ((eb(p - -64 | 0) | 0) == 1) {
                            break s;
                          }

                          zb(p - -64 | 0, Ea(d));

                          if (eb(p - -64 | 0)) {
                            break s;
                          }

                          w = Nb(q[p + 204 >> 2], d) + -1 | 0;

                          if (w >>> 0 > 4) {
                            break s;
                          }

                          t: {
                            switch (w - 1 | 0) {
                              default:
                                ha = p, ia = sb(d, t, A), u[ha + 64 >> 2] = ia;
                                Qa(d, x(z + u[p - -64 >> 2]), q[Da(2184, t) >> 2]);
                                break s;

                              case 1:
                                ha = p, ia = Sb(d, t, A), u[ha + 64 >> 2] = ia;
                                Qa(d, x(x(J - u[p - -64 >> 2]) - u[Da(Ga(d) + 288 | 0, q[Da(1848, t) >> 2]) >> 2]), q[Da(2184, t) >> 2]);
                                break s;

                              case 0:
                                Qa(d, x(z + x(x(s - u[Da(Ga(d) + 288 | 0, q[Da(1848, t) >> 2]) >> 2]) * x(.5))), q[Da(2184, t) >> 2]);
                                break s;

                              case 2:
                                ha = p, ia = sb(d, t, A), u[ha + 64 >> 2] = ia;
                                Qa(d, x(z + u[p - -64 >> 2]), q[Da(2184, t) >> 2]);

                                if (Eb(d, t, F)) {
                                  break s;
                                }

                                u: {
                                  if (G) {
                                    B = u[Da(Ga(d) + 288 | 0, 0) >> 2];
                                    ha = p, ia = Ja(d, E, A), u[ha + 64 >> 2] = ia;
                                    I = s;
                                    B = x(B + u[p - -64 >> 2]);
                                    break u;
                                  }

                                  B = u[Da(Ga(d) + 288 | 0, 1) >> 2];
                                  ha = p, ia = Ja(d, t, A), u[ha + 64 >> 2] = ia;
                                  I = x(B + u[p - -64 >> 2]);
                                  B = s;
                                }

                                if (Ta(B, u[Da(Ga(d) + 288 | 0, 0) >> 2])) {
                                  if (Ta(I, u[Da(Ga(d) + 288 | 0, 1) >> 2])) {
                                    break s;
                                  }
                                }

                                cc(d, B, I, K, 1, 1, A, O, 1, 3, j, k, l, m, n);
                                break s;

                              case 3:
                                break t;
                            }
                          }

                          B = kd(d, l);
                          ha = p, ia = zc(d, 0, F), u[ha + 64 >> 2] = ia;
                          Qa(d, x(x(C - B) + u[p - -64 >> 2]), 1);
                        }

                        a = a + 1 | 0;

                        if ((f | 0) != (a | 0)) {
                          continue;
                        }

                        break;
                      }

                      z = J;
                    }

                    d = (o | 0) != (y | 0);
                    o = o + 1 | 0;
                    a = f;

                    if (d) {
                      continue;
                    }

                    break;
                  }
                }

                a = q[p + 204 >> 2];
                rb(a, Ya(a, 2, x(b - Z), g, g), 0);
                a = q[p + 204 >> 2];
                rb(a, Ya(a, 0, x(c - _), h, g), 1);

                v: {
                  w: {
                    if (P) {
                      Yb(p - -64 | 0, Ea(q[p + 204 >> 2]));

                      if ((jb(p - -64 | 0) | 0) == 2 | (P | 0) != 2) {
                        break w;
                      }
                    }

                    a = q[p + 204 >> 2];
                    b = Ya(a, E, Y, R, g);
                    rb(a, b, q[Da(1848, E) >> 2]);
                    break v;
                  }

                  if ((P | 0) != 2) {
                    break v;
                  }

                  Yb(p - -64 | 0, Ea(q[p + 204 >> 2]));

                  if ((jb(p - -64 | 0) | 0) != 2) {
                    break v;
                  }

                  a = q[p + 204 >> 2];
                  ha = p, ia = Ec(a, E, u[Ma(p + 24 | 0, Y) >> 2], R), u[ha + 64 >> 2] = ia;
                  rb(a, Xa(Wd(x(T + H), u[p - -64 >> 2]), T), q[Da(1848, E) >> 2]);
                }

                x: {
                  y: {
                    if (Q) {
                      Yb(p - -64 | 0, Ea(q[p + 204 >> 2]));
                      a = (Q | 0) != 2;

                      if (a | (jb(p - -64 | 0) | 0) == 2) {
                        break y;
                      }
                    }

                    a = q[p + 204 >> 2];
                    b = Ya(a, t, x(M + N), U, g);
                    rb(a, b, q[Da(1848, t) >> 2]);
                    break x;
                  }

                  if (a) {
                    break x;
                  }

                  Yb(p - -64 | 0, Ea(q[p + 204 >> 2]));

                  if ((jb(p - -64 | 0) | 0) != 2) {
                    break x;
                  }

                  a = q[p + 204 >> 2];
                  ha = p, ia = Ec(a, t, u[Ma(p + 16 | 0, x(M + N)) >> 2], U), u[ha + 64 >> 2] = ia;
                  rb(a, Xa(Wd(x(M + F), u[p - -64 >> 2]), M), q[Da(1848, t) >> 2]);
                }

                z: {
                  if (!i) {
                    break z;
                  }

                  Jc(p - -64 | 0, Ea(q[p + 204 >> 2]));

                  if ((jb(p - -64 | 0) | 0) == 2) {
                    f = D >>> 0 > 1 ? D : 1;
                    a = 0;

                    while (1) {
                      d = nc(q[p + 204 >> 2], a);
                      zb(p - -64 | 0, Ea(d));

                      if (!eb(p - -64 | 0)) {
                        Qa(d, x(x(u[Da(Ga(q[p + 204 >> 2]) + 288 | 0, q[Da(1848, t) >> 2]) >> 2] - u[Da(Ga(d), q[Da(2184, t) >> 2]) >> 2]) - u[Da(Ga(d) + 288 | 0, q[Da(1848, t) >> 2]) >> 2]), q[Da(2184, t) >> 2]);
                      }

                      a = a + 1 | 0;

                      if ((f | 0) != (a | 0)) {
                        continue;
                      }

                      break;
                    }
                  }

                  a = Gb(q[p + 204 >> 2]);
                  ha = p, ja = ib(a), q[ha + 56 >> 2] = ja;
                  ha = p, ja = pb(a), q[ha + 48 >> 2] = ja;

                  if (Oa(p + 56 | 0, p + 48 | 0)) {
                    a = G ? P : e;

                    while (1) {
                      d = q[q[p + 56 >> 2] >> 2];
                      zb(p - -64 | 0, Ea(d));

                      if ((eb(p - -64 | 0) | 0) == 1) {
                        Mm(q[p + 204 >> 2], d, A, a, O, K, j, k, l, m, n);
                      }

                      ob(p + 56 | 0);

                      if (Oa(p + 56 | 0, p + 48 | 0)) {
                        continue;
                      }

                      break;
                    }
                  }

                  e = E & -3;
                  f = t & -3;

                  if ((f | 0) != 1 ? (e | 0) != 1 : 0) {
                    break z;
                  }

                  i = D >>> 0 > 1 ? D : 1;
                  a = 0;

                  while (1) {
                    d = ec(q[p + 204 >> 2], a);
                    mc(p - -64 | 0, Ea(d));

                    A: {
                      if ((eb(p - -64 | 0) | 0) == 1) {
                        break A;
                      }

                      if ((e | 0) == 1) {
                        Qf(q[p + 204 >> 2], d, E);
                      }

                      if ((f | 0) != 1) {
                        break A;
                      }

                      Qf(q[p + 204 >> 2], d, t);
                    }

                    a = a + 1 | 0;

                    if ((i | 0) != (a | 0)) {
                      continue;
                    }

                    break;
                  }
                }

                Sf(v);
              }

              ma = p + 208 | 0;
            }

            function xi(a, b, c, d, f, g) {
              a = a | 0;
              b = +b;
              c = c | 0;
              d = d | 0;
              f = f | 0;
              g = g | 0;
              var i = 0,
                  j = 0,
                  k = 0,
                  l = 0,
                  m = 0,
                  n = 0,
                  p = 0,
                  s = 0,
                  t = 0,
                  u = 0,
                  v = 0,
                  x = 0,
                  z = 0,
                  A = 0,
                  B = 0,
                  C = 0,
                  D = 0,
                  E = 0,
                  F = 0,
                  G = 0,
                  H = 0,
                  I = 0,
                  J = 0,
                  K = 0,
                  L = 0;
              m = ma - 560 | 0;
              ma = m;
              q[m + 44 >> 2] = 0;
              h(+b);
              i = e(1) | 0;

              a: {
                if (G = 1, H = (J = e(0) >>> 0 > 4294967295 ? 0 : 1, K = 0, L = (i | 0) <= -1, L ? J : K), I = (i | 0) < -1, I ? G : H) {
                  D = 1;
                  b = -b;
                  h(+b);
                  i = e(1) | 0;
                  E = 7632;
                  break a;
                }

                if (f & 2048) {
                  D = 1;
                  E = 7635;
                  break a;
                }

                D = f & 1;
                E = D ? 7638 : 7633;
              }

              b: {
                if ((i & 2146435072) == 2146435072) {
                  p = D + 3 | 0;
                  hb(a, 32, c, p, f & -65537);
                  Za(a, E, D);
                  d = g >>> 5 & 1;
                  Za(a, b != b ? d ? 7659 : 7663 : d ? 7651 : 7655, 3);
                  break b;
                }

                A = m + 16 | 0;

                c: {
                  d: {
                    e: {
                      b = We(b, m + 44 | 0);
                      b = b + b;

                      if (b != 0) {
                        i = q[m + 44 >> 2];
                        q[m + 44 >> 2] = i + -1;
                        z = g | 32;

                        if ((z | 0) != 97) {
                          break e;
                        }

                        break c;
                      }

                      z = g | 32;

                      if ((z | 0) == 97) {
                        break c;
                      }

                      l = q[m + 44 >> 2];
                      n = (d | 0) < 0 ? 6 : d;
                      break d;
                    }

                    l = i + -29 | 0;
                    q[m + 44 >> 2] = l;
                    b = b * 268435456;
                    n = (d | 0) < 0 ? 6 : d;
                  }

                  v = (l | 0) < 0 ? m + 48 | 0 : m + 336 | 0;
                  k = v;

                  while (1) {
                    d = k;

                    if (b < 4294967296 & b >= 0) {
                      i = ~~b >>> 0;
                    } else {
                      i = 0;
                    }

                    q[d >> 2] = i;
                    k = k + 4 | 0;
                    b = (b - +(i >>> 0)) * 1e9;

                    if (b != 0) {
                      continue;
                    }

                    break;
                  }

                  f: {
                    if ((l | 0) < 1) {
                      i = k;
                      j = v;
                      break f;
                    }

                    j = v;

                    while (1) {
                      x = (l | 0) < 29 ? l : 29;
                      i = k + -4 | 0;

                      g: {
                        if (i >>> 0 < j >>> 0) {
                          break g;
                        }

                        d = x;
                        t = 0;

                        while (1) {
                          u = i;
                          p = 0;
                          F = t;
                          t = q[i >> 2];
                          s = d & 31;

                          if (32 <= (d & 63) >>> 0) {
                            l = t << s;
                            s = 0;
                          } else {
                            l = (1 << s) - 1 & t >>> 32 - s;
                            s = t << s;
                          }

                          t = F + s | 0;
                          p = l + p | 0;
                          p = t >>> 0 < s >>> 0 ? p + 1 | 0 : p;
                          s = t;
                          t = Qo(s, p, 1e9);
                          F = u;
                          u = Po(t, na, 1e9);
                          q[F >> 2] = s - u;
                          i = i + -4 | 0;

                          if (i >>> 0 >= j >>> 0) {
                            continue;
                          }

                          break;
                        }

                        d = t;

                        if (!d) {
                          break g;
                        }

                        j = j + -4 | 0;
                        q[j >> 2] = d;
                      }

                      while (1) {
                        i = k;

                        if (i >>> 0 > j >>> 0) {
                          k = i + -4 | 0;

                          if (!q[k >> 2]) {
                            continue;
                          }
                        }

                        break;
                      }

                      l = q[m + 44 >> 2] - x | 0;
                      q[m + 44 >> 2] = l;
                      k = i;

                      if ((l | 0) > 0) {
                        continue;
                      }

                      break;
                    }
                  }

                  if ((l | 0) <= -1) {
                    B = ((n + 25 | 0) / 9 | 0) + 1 | 0;
                    x = (z | 0) == 102;

                    while (1) {
                      t = (l | 0) < -9 ? 9 : 0 - l | 0;

                      h: {
                        if (j >>> 0 >= i >>> 0) {
                          j = q[j >> 2] ? j : j + 4 | 0;
                          break h;
                        }

                        u = 1e9 >>> t | 0;
                        s = -1 << t ^ -1;
                        l = 0;
                        k = j;

                        while (1) {
                          d = q[k >> 2];
                          q[k >> 2] = (d >>> t | 0) + l;
                          l = w(u, d & s);
                          k = k + 4 | 0;

                          if (k >>> 0 < i >>> 0) {
                            continue;
                          }

                          break;
                        }

                        j = q[j >> 2] ? j : j + 4 | 0;

                        if (!l) {
                          break h;
                        }

                        q[i >> 2] = l;
                        i = i + 4 | 0;
                      }

                      l = t + q[m + 44 >> 2] | 0;
                      q[m + 44 >> 2] = l;
                      d = x ? v : j;
                      i = i - d >> 2 > (B | 0) ? d + (B << 2) | 0 : i;

                      if ((l | 0) < 0) {
                        continue;
                      }

                      break;
                    }
                  }

                  k = 0;

                  i: {
                    if (j >>> 0 >= i >>> 0) {
                      break i;
                    }

                    k = w(v - j >> 2, 9);
                    l = 10;
                    d = q[j >> 2];

                    if (d >>> 0 < 10) {
                      break i;
                    }

                    while (1) {
                      k = k + 1 | 0;
                      l = w(l, 10);

                      if (d >>> 0 >= l >>> 0) {
                        continue;
                      }

                      break;
                    }
                  }

                  d = (n - ((z | 0) == 102 ? 0 : k) | 0) - ((z | 0) == 103 & (n | 0) != 0) | 0;

                  if ((d | 0) < (w(i - v >> 2, 9) + -9 | 0)) {
                    s = d + 9216 | 0;
                    d = (s | 0) / 9 | 0;
                    p = (v + (d << 2) | 0) + -4092 | 0;
                    l = 10;
                    d = s - w(d, 9) | 0;

                    if ((d | 0) <= 7) {
                      while (1) {
                        l = w(l, 10);
                        d = d + 1 | 0;

                        if ((d | 0) != 8) {
                          continue;
                        }

                        break;
                      }
                    }

                    u = q[p >> 2];
                    s = (u >>> 0) / (l >>> 0) | 0;
                    B = p + 4 | 0;
                    x = u - w(l, s) | 0;

                    j: {
                      if (x ? 0 : (B | 0) == (i | 0)) {
                        break j;
                      }

                      d = l >>> 1 | 0;
                      C = x >>> 0 < d >>> 0 ? .5 : (i | 0) == (B | 0) ? (d | 0) == (x | 0) ? 1 : 1.5 : 1.5;
                      b = s & 1 ? 9007199254740994 : 9007199254740992;

                      if (!(!D | r[E | 0] != 45)) {
                        C = -C;
                        b = -b;
                      }

                      d = u - x | 0;
                      q[p >> 2] = d;

                      if (b + C == b) {
                        break j;
                      }

                      d = d + l | 0;
                      q[p >> 2] = d;

                      if (d >>> 0 >= 1e9) {
                        while (1) {
                          q[p >> 2] = 0;
                          p = p + -4 | 0;

                          if (p >>> 0 < j >>> 0) {
                            j = j + -4 | 0;
                            q[j >> 2] = 0;
                          }

                          d = q[p >> 2] + 1 | 0;
                          q[p >> 2] = d;

                          if (d >>> 0 > 999999999) {
                            continue;
                          }

                          break;
                        }
                      }

                      k = w(v - j >> 2, 9);
                      l = 10;
                      d = q[j >> 2];

                      if (d >>> 0 < 10) {
                        break j;
                      }

                      while (1) {
                        k = k + 1 | 0;
                        l = w(l, 10);

                        if (d >>> 0 >= l >>> 0) {
                          continue;
                        }

                        break;
                      }
                    }

                    d = p + 4 | 0;
                    i = i >>> 0 > d >>> 0 ? d : i;
                  }

                  k: {
                    while (1) {
                      x = i;
                      u = 0;

                      if (i >>> 0 <= j >>> 0) {
                        break k;
                      }

                      i = x + -4 | 0;

                      if (!q[i >> 2]) {
                        continue;
                      }

                      break;
                    }

                    u = 1;
                  }

                  l: {
                    if ((z | 0) != 103) {
                      z = f & 8;
                      break l;
                    }

                    i = n ? n : 1;
                    d = (i | 0) > (k | 0) & (k | 0) > -5;
                    n = (d ? k ^ -1 : -1) + i | 0;
                    g = (d ? -1 : -2) + g | 0;
                    z = f & 8;

                    if (z) {
                      break l;
                    }

                    i = 9;

                    m: {
                      if (!u) {
                        break m;
                      }

                      s = q[x + -4 >> 2];

                      if (!s) {
                        break m;
                      }

                      d = 10;
                      i = 0;

                      if ((s >>> 0) % 10) {
                        break m;
                      }

                      while (1) {
                        i = i + 1 | 0;
                        d = w(d, 10);

                        if (!((s >>> 0) % (d >>> 0))) {
                          continue;
                        }

                        break;
                      }
                    }

                    d = w(x - v >> 2, 9) + -9 | 0;

                    if ((g & -33) == 70) {
                      z = 0;
                      d = d - i | 0;
                      d = (d | 0) > 0 ? d : 0;
                      n = (n | 0) < (d | 0) ? n : d;
                      break l;
                    }

                    z = 0;
                    d = (d + k | 0) - i | 0;
                    d = (d | 0) > 0 ? d : 0;
                    n = (n | 0) < (d | 0) ? n : d;
                  }

                  l = n | z;
                  p = (l | 0) != 0;
                  d = a;
                  s = c;
                  t = g & -33;
                  i = (k | 0) > 0 ? k : 0;

                  n: {
                    if ((t | 0) == 70) {
                      break n;
                    }

                    i = k >> 31;
                    i = xc(i + k ^ i, 0, A);

                    if ((A - i | 0) <= 1) {
                      while (1) {
                        i = i + -1 | 0;
                        o[i | 0] = 48;

                        if ((A - i | 0) < 2) {
                          continue;
                        }

                        break;
                      }
                    }

                    B = i + -2 | 0;
                    o[B | 0] = g;
                    o[i + -1 | 0] = (k | 0) < 0 ? 45 : 43;
                    i = A - B | 0;
                  }

                  p = (i + (p + (n + D | 0) | 0) | 0) + 1 | 0;
                  hb(d, 32, s, p, f);
                  Za(a, E, D);
                  hb(a, 48, c, p, f ^ 65536);

                  o: {
                    p: {
                      q: {
                        if ((t | 0) == 70) {
                          d = m + 16 | 8;
                          k = m + 16 | 9;
                          g = j >>> 0 > v >>> 0 ? v : j;
                          j = g;

                          while (1) {
                            i = xc(q[j >> 2], 0, k);

                            r: {
                              if ((g | 0) != (j | 0)) {
                                if (i >>> 0 <= m + 16 >>> 0) {
                                  break r;
                                }

                                while (1) {
                                  i = i + -1 | 0;
                                  o[i | 0] = 48;

                                  if (i >>> 0 > m + 16 >>> 0) {
                                    continue;
                                  }

                                  break;
                                }

                                break r;
                              }

                              if ((i | 0) != (k | 0)) {
                                break r;
                              }

                              o[m + 24 | 0] = 48;
                              i = d;
                            }

                            Za(a, i, k - i | 0);
                            j = j + 4 | 0;

                            if (j >>> 0 <= v >>> 0) {
                              continue;
                            }

                            break;
                          }

                          if (l) {
                            Za(a, 7667, 1);
                          }

                          if ((n | 0) < 1 | j >>> 0 >= x >>> 0) {
                            break q;
                          }

                          while (1) {
                            i = xc(q[j >> 2], 0, k);

                            if (i >>> 0 > m + 16 >>> 0) {
                              while (1) {
                                i = i + -1 | 0;
                                o[i | 0] = 48;

                                if (i >>> 0 > m + 16 >>> 0) {
                                  continue;
                                }

                                break;
                              }
                            }

                            Za(a, i, (n | 0) < 9 ? n : 9);
                            i = n + -9 | 0;
                            j = j + 4 | 0;

                            if (j >>> 0 >= x >>> 0) {
                              break p;
                            }

                            d = (n | 0) > 9;
                            n = i;

                            if (d) {
                              continue;
                            }

                            break;
                          }

                          break p;
                        }

                        s: {
                          if ((n | 0) < 0) {
                            break s;
                          }

                          g = u ? x : j + 4 | 0;
                          d = m + 16 | 8;
                          v = m + 16 | 9;
                          k = j;

                          while (1) {
                            i = xc(q[k >> 2], 0, v);

                            if ((v | 0) == (i | 0)) {
                              o[m + 24 | 0] = 48;
                              i = d;
                            }

                            t: {
                              if ((j | 0) != (k | 0)) {
                                if (i >>> 0 <= m + 16 >>> 0) {
                                  break t;
                                }

                                while (1) {
                                  i = i + -1 | 0;
                                  o[i | 0] = 48;

                                  if (i >>> 0 > m + 16 >>> 0) {
                                    continue;
                                  }

                                  break;
                                }

                                break t;
                              }

                              Za(a, i, 1);
                              i = i + 1 | 0;

                              if ((n | 0) < 1 ? !z : 0) {
                                break t;
                              }

                              Za(a, 7667, 1);
                            }

                            t = i;
                            i = v - i | 0;
                            Za(a, t, (n | 0) > (i | 0) ? i : n);
                            n = n - i | 0;
                            k = k + 4 | 0;

                            if (k >>> 0 >= g >>> 0) {
                              break s;
                            }

                            if ((n | 0) > -1) {
                              continue;
                            }

                            break;
                          }
                        }

                        hb(a, 48, n + 18 | 0, 18, 0);
                        Za(a, B, A - B | 0);
                        break o;
                      }

                      i = n;
                    }

                    hb(a, 48, i + 9 | 0, 9, 0);
                  }

                  break b;
                }

                n = g & 32;
                s = n ? E + 9 | 0 : E;

                u: {
                  if (d >>> 0 > 11) {
                    break u;
                  }

                  i = 12 - d | 0;

                  if (!i) {
                    break u;
                  }

                  C = 8;

                  while (1) {
                    C = C * 16;
                    i = i + -1 | 0;

                    if (i) {
                      continue;
                    }

                    break;
                  }

                  if (r[s | 0] == 45) {
                    b = -(C + (-b - C));
                    break u;
                  }

                  b = b + C - C;
                }

                i = q[m + 44 >> 2];
                k = i >> 31;
                i = xc(k ^ i + k, 0, A);

                if ((A | 0) == (i | 0)) {
                  o[m + 15 | 0] = 48;
                  i = m + 15 | 0;
                }

                v = D | 2;
                k = q[m + 44 >> 2];
                u = i + -2 | 0;
                o[u | 0] = g + 15;
                o[i + -1 | 0] = (k | 0) < 0 ? 45 : 43;
                i = f & 8;
                j = m + 16 | 0;

                while (1) {
                  g = j;
                  t = n;

                  if (y(b) < 2147483648) {
                    k = ~~b;
                  } else {
                    k = -2147483648;
                  }

                  o[j | 0] = t | r[k + 7616 | 0];
                  j = g + 1 | 0;
                  b = (b - +(k | 0)) * 16;

                  if (!((j - (m + 16 | 0) | 0) != 1 | (b == 0 ? !(i | (d | 0) > 0) : 0))) {
                    o[g + 1 | 0] = 46;
                    j = g + 2 | 0;
                  }

                  if (b != 0) {
                    continue;
                  }

                  break;
                }

                g = !d | ((j - m | 0) + -18 | 0) >= (d | 0) ? ((A - (m + 16 | 0) | 0) - u | 0) + j | 0 : ((d + A | 0) - u | 0) + 2 | 0;
                p = g + v | 0;
                hb(a, 32, c, p, f);
                Za(a, s, v);
                hb(a, 48, c, p, f ^ 65536);
                d = j - (m + 16 | 0) | 0;
                Za(a, m + 16 | 0, d);
                i = d;
                d = A - u | 0;
                hb(a, 48, g - (i + d | 0) | 0, 0, 0);
                Za(a, u, d);
              }

              hb(a, 32, c, p, f ^ 8192);
              ma = m + 560 | 0;
              return ((p | 0) < (c | 0) ? c : p) | 0;
            }

            function Rd(a, b, c, d, e) {
              var f = 0,
                  g = 0,
                  h = 0,
                  i = 0,
                  j = 0,
                  k = 0,
                  l = 0,
                  m = 0,
                  s = 0,
                  t = 0,
                  u = 0,
                  x = 0,
                  y = 0,
                  z = 0,
                  A = 0;
              f = ma - 80 | 0;
              ma = f;
              q[f + 76 >> 2] = b;
              A = f + 55 | 0;
              x = f + 56 | 0;
              b = 0;

              a: {
                b: {
                  c: while (1) {
                    d: {
                      if ((t | 0) < 0) {
                        break d;
                      }

                      if ((b | 0) > (2147483647 - t | 0)) {
                        q[2373] = 61;
                        t = -1;
                        break d;
                      }

                      t = b + t | 0;
                    }

                    e: {
                      f: {
                        g: {
                          h: {
                            i: {
                              j: {
                                k: {
                                  l: {
                                    m: {
                                      n: {
                                        o: {
                                          p: {
                                            q: {
                                              j = q[f + 76 >> 2];
                                              b = j;
                                              i = r[b | 0];

                                              if (i) {
                                                while (1) {
                                                  r: {
                                                    s: {
                                                      g = i & 255;

                                                      t: {
                                                        if (!g) {
                                                          i = b;
                                                          break t;
                                                        }

                                                        if ((g | 0) != 37) {
                                                          break s;
                                                        }

                                                        i = b;

                                                        while (1) {
                                                          if (r[b + 1 | 0] != 37) {
                                                            break t;
                                                          }

                                                          g = b + 2 | 0;
                                                          q[f + 76 >> 2] = g;
                                                          i = i + 1 | 0;
                                                          h = r[b + 2 | 0];
                                                          b = g;

                                                          if ((h | 0) == 37) {
                                                            continue;
                                                          }

                                                          break;
                                                        }
                                                      }

                                                      b = i - j | 0;

                                                      if (a) {
                                                        Za(a, j, b);
                                                      }

                                                      if (b) {
                                                        continue c;
                                                      }

                                                      u = -1;
                                                      i = 1;
                                                      g = f;
                                                      k = !Rc(o[q[f + 76 >> 2] + 1 | 0]);
                                                      b = q[f + 76 >> 2];

                                                      if (!(k | r[b + 2 | 0] != 36)) {
                                                        u = o[b + 1 | 0] + -48 | 0;
                                                        y = 1;
                                                        i = 3;
                                                      }

                                                      b = i + b | 0;
                                                      q[g + 76 >> 2] = b;
                                                      i = 0;
                                                      m = o[b | 0];
                                                      h = m + -32 | 0;

                                                      u: {
                                                        if (h >>> 0 > 31) {
                                                          g = b;
                                                          break u;
                                                        }

                                                        g = b;
                                                        h = 1 << h;

                                                        if (!(h & 75913)) {
                                                          break u;
                                                        }

                                                        while (1) {
                                                          g = b + 1 | 0;
                                                          q[f + 76 >> 2] = g;
                                                          i = h | i;
                                                          m = o[b + 1 | 0];
                                                          h = m + -32 | 0;

                                                          if (h >>> 0 > 31) {
                                                            break u;
                                                          }

                                                          b = g;
                                                          h = 1 << h;

                                                          if (h & 75913) {
                                                            continue;
                                                          }

                                                          break;
                                                        }
                                                      }

                                                      v: {
                                                        if ((m | 0) == 42) {
                                                          k = f;

                                                          w: {
                                                            x: {
                                                              if (!Rc(o[g + 1 | 0])) {
                                                                break x;
                                                              }

                                                              b = q[f + 76 >> 2];

                                                              if (r[b + 2 | 0] != 36) {
                                                                break x;
                                                              }

                                                              q[((o[b + 1 | 0] << 2) + e | 0) + -192 >> 2] = 10;
                                                              s = q[((o[b + 1 | 0] << 3) + d | 0) + -384 >> 2];
                                                              y = 1;
                                                              b = b + 3 | 0;
                                                              break w;
                                                            }

                                                            if (y) {
                                                              break b;
                                                            }

                                                            y = 0;
                                                            s = 0;

                                                            if (a) {
                                                              b = q[c >> 2];
                                                              q[c >> 2] = b + 4;
                                                              s = q[b >> 2];
                                                            }

                                                            b = q[f + 76 >> 2] + 1 | 0;
                                                          }

                                                          q[k + 76 >> 2] = b;

                                                          if ((s | 0) > -1) {
                                                            break v;
                                                          }

                                                          s = 0 - s | 0;
                                                          i = i | 8192;
                                                          break v;
                                                        }

                                                        s = Ve(f + 76 | 0);

                                                        if ((s | 0) < 0) {
                                                          break b;
                                                        }

                                                        b = q[f + 76 >> 2];
                                                      }

                                                      h = -1;

                                                      y: {
                                                        if (r[b | 0] != 46) {
                                                          break y;
                                                        }

                                                        if (r[b + 1 | 0] == 42) {
                                                          z: {
                                                            if (!Rc(o[b + 2 | 0])) {
                                                              break z;
                                                            }

                                                            b = q[f + 76 >> 2];

                                                            if (r[b + 3 | 0] != 36) {
                                                              break z;
                                                            }

                                                            q[((o[b + 2 | 0] << 2) + e | 0) + -192 >> 2] = 10;
                                                            h = q[((o[b + 2 | 0] << 3) + d | 0) + -384 >> 2];
                                                            b = b + 4 | 0;
                                                            q[f + 76 >> 2] = b;
                                                            break y;
                                                          }

                                                          if (y) {
                                                            break b;
                                                          }

                                                          if (a) {
                                                            b = q[c >> 2];
                                                            q[c >> 2] = b + 4;
                                                            h = q[b >> 2];
                                                          } else {
                                                            h = 0;
                                                          }

                                                          b = q[f + 76 >> 2] + 2 | 0;
                                                          q[f + 76 >> 2] = b;
                                                          break y;
                                                        }

                                                        q[f + 76 >> 2] = b + 1;
                                                        h = Ve(f + 76 | 0);
                                                        b = q[f + 76 >> 2];
                                                      }

                                                      g = 0;

                                                      while (1) {
                                                        z = g;
                                                        l = -1;

                                                        if (o[b | 0] + -65 >>> 0 > 57) {
                                                          break a;
                                                        }

                                                        m = b + 1 | 0;
                                                        q[f + 76 >> 2] = m;
                                                        g = o[b | 0];
                                                        b = m;
                                                        g = r[(g + w(z, 58) | 0) + 7087 | 0];

                                                        if (g + -1 >>> 0 < 8) {
                                                          continue;
                                                        }

                                                        break;
                                                      }

                                                      if (!g) {
                                                        break a;
                                                      }

                                                      A: {
                                                        B: {
                                                          C: {
                                                            if ((g | 0) == 19) {
                                                              if ((u | 0) <= -1) {
                                                                break C;
                                                              }

                                                              break a;
                                                            }

                                                            if ((u | 0) < 0) {
                                                              break B;
                                                            }

                                                            q[(u << 2) + e >> 2] = g;
                                                            b = (u << 3) + d | 0;
                                                            g = q[b + 4 >> 2];
                                                            q[f + 64 >> 2] = q[b >> 2];
                                                            q[f + 68 >> 2] = g;
                                                          }

                                                          b = 0;

                                                          if (!a) {
                                                            continue c;
                                                          }

                                                          break A;
                                                        }

                                                        if (!a) {
                                                          break e;
                                                        }

                                                        Ue(f - -64 | 0, g, c);
                                                        m = q[f + 76 >> 2];
                                                      }

                                                      k = i & -65537;
                                                      i = i & 8192 ? k : i;
                                                      l = 0;
                                                      u = 7120;
                                                      g = x;
                                                      b = o[m + -1 | 0];
                                                      b = z ? (b & 15) == 3 ? b & -33 : b : b;
                                                      m = b + -88 | 0;

                                                      if (m >>> 0 <= 32) {
                                                        break r;
                                                      }

                                                      D: {
                                                        E: {
                                                          F: {
                                                            G: {
                                                              k = b + -65 | 0;

                                                              if (k >>> 0 > 6) {
                                                                if ((b | 0) != 83) {
                                                                  break f;
                                                                }

                                                                if (!h) {
                                                                  break G;
                                                                }

                                                                g = q[f + 64 >> 2];
                                                                break E;
                                                              }

                                                              switch (k - 1 | 0) {
                                                                case 1:
                                                                  break F;

                                                                case 0:
                                                                case 2:
                                                                  break f;

                                                                default:
                                                                  break q;
                                                              }
                                                            }

                                                            b = 0;
                                                            hb(a, 32, s, 0, i);
                                                            break D;
                                                          }

                                                          q[f + 12 >> 2] = 0;
                                                          q[f + 8 >> 2] = q[f + 64 >> 2];
                                                          q[f + 64 >> 2] = f + 8;
                                                          h = -1;
                                                          g = f + 8 | 0;
                                                        }

                                                        b = 0;

                                                        H: {
                                                          while (1) {
                                                            j = q[g >> 2];

                                                            if (!j) {
                                                              break H;
                                                            }

                                                            j = Se(f + 4 | 0, j);
                                                            k = (j | 0) < 0;

                                                            if (!(k | j >>> 0 > h - b >>> 0)) {
                                                              g = g + 4 | 0;
                                                              b = b + j | 0;

                                                              if (h >>> 0 > b >>> 0) {
                                                                continue;
                                                              }

                                                              break H;
                                                            }

                                                            break;
                                                          }

                                                          l = -1;

                                                          if (k) {
                                                            break a;
                                                          }
                                                        }

                                                        hb(a, 32, s, b, i);

                                                        if (!b) {
                                                          b = 0;
                                                          break D;
                                                        }

                                                        h = 0;
                                                        g = q[f + 64 >> 2];

                                                        while (1) {
                                                          j = q[g >> 2];

                                                          if (!j) {
                                                            break D;
                                                          }

                                                          j = Se(f + 4 | 0, j);
                                                          h = j + h | 0;

                                                          if ((h | 0) > (b | 0)) {
                                                            break D;
                                                          }

                                                          Za(a, f + 4 | 0, j);
                                                          g = g + 4 | 0;

                                                          if (h >>> 0 < b >>> 0) {
                                                            continue;
                                                          }

                                                          break;
                                                        }
                                                      }

                                                      hb(a, 32, s, b, i ^ 8192);
                                                      b = (s | 0) > (b | 0) ? s : b;
                                                      continue c;
                                                    }

                                                    g = b + 1 | 0;
                                                    q[f + 76 >> 2] = g;
                                                    i = r[b + 1 | 0];
                                                    b = g;
                                                    continue;
                                                  }

                                                  break;
                                                }

                                                switch (m - 1 | 0) {
                                                  case 28:
                                                    break i;

                                                  case 21:
                                                    break j;

                                                  case 23:
                                                    break l;

                                                  case 22:
                                                    break m;

                                                  case 11:
                                                  case 16:
                                                    break n;

                                                  case 10:
                                                    break o;

                                                  case 26:
                                                    break p;

                                                  case 8:
                                                  case 12:
                                                  case 13:
                                                  case 14:
                                                    break q;

                                                  case 0:
                                                  case 1:
                                                  case 2:
                                                  case 3:
                                                  case 4:
                                                  case 5:
                                                  case 6:
                                                  case 7:
                                                  case 9:
                                                  case 15:
                                                  case 17:
                                                  case 18:
                                                  case 19:
                                                  case 20:
                                                  case 24:
                                                  case 25:
                                                  case 27:
                                                  case 29:
                                                  case 30:
                                                    break f;

                                                  default:
                                                    break k;
                                                }
                                              }

                                              l = t;

                                              if (a) {
                                                break a;
                                              }

                                              if (!y) {
                                                break e;
                                              }

                                              b = 1;

                                              while (1) {
                                                a = q[(b << 2) + e >> 2];

                                                if (a) {
                                                  Ue((b << 3) + d | 0, a, c);
                                                  l = 1;
                                                  b = b + 1 | 0;

                                                  if ((b | 0) != 10) {
                                                    continue;
                                                  }

                                                  break a;
                                                }

                                                break;
                                              }

                                              l = 1;

                                              if (b >>> 0 > 9) {
                                                break a;
                                              }

                                              while (1) {
                                                a = b;
                                                b = b + 1 | 0;

                                                if (q[(b << 2) + e >> 2] ? 0 : (b | 0) != 10) {
                                                  continue;
                                                }

                                                break;
                                              }

                                              l = a >>> 0 < 9 ? -1 : 1;
                                              break a;
                                            }

                                            b = n[199](a, v[f + 64 >> 3], s, h, i, b) | 0;
                                            continue;
                                          }

                                          b = q[f + 64 >> 2];
                                          j = b ? b : 7130;
                                          b = si(j, h);
                                          g = b ? b : h + j | 0;
                                          i = k;
                                          h = b ? b - j | 0 : h;
                                          break f;
                                        }

                                        o[f + 55 | 0] = q[f + 64 >> 2];
                                        h = 1;
                                        j = A;
                                        i = k;
                                        break f;
                                      }

                                      k = q[f + 68 >> 2];
                                      b = k;
                                      j = q[f + 64 >> 2];

                                      if ((b | 0) < -1 ? 1 : (b | 0) <= -1 ? j >>> 0 > 4294967295 ? 0 : 1 : 0) {
                                        b = 0 - (b + (0 < j >>> 0) | 0) | 0;
                                        j = 0 - j | 0;
                                        q[f + 64 >> 2] = j;
                                        q[f + 68 >> 2] = b;
                                        l = 1;
                                        u = 7120;
                                        break h;
                                      }

                                      if (i & 2048) {
                                        l = 1;
                                        u = 7121;
                                        break h;
                                      }

                                      l = i & 1;
                                      u = l ? 7122 : 7120;
                                      break h;
                                    }

                                    j = zi(q[f + 64 >> 2], q[f + 68 >> 2], x);

                                    if (!(i & 8)) {
                                      break g;
                                    }

                                    b = x - j | 0;
                                    h = (h | 0) > (b | 0) ? h : b + 1 | 0;
                                    break g;
                                  }

                                  h = h >>> 0 > 8 ? h : 8;
                                  i = i | 8;
                                  b = 120;
                                }

                                j = yi(q[f + 64 >> 2], q[f + 68 >> 2], x, b & 32);

                                if (!(i & 8) | !(q[f + 64 >> 2] | q[f + 68 >> 2])) {
                                  break g;
                                }

                                u = (b >>> 4 | 0) + 7120 | 0;
                                l = 2;
                                break g;
                              }

                              b = 0;
                              g = z & 255;

                              if (g >>> 0 > 7) {
                                continue;
                              }

                              I: {
                                switch (g - 1 | 0) {
                                  default:
                                    q[q[f + 64 >> 2] >> 2] = t;
                                    continue;

                                  case 0:
                                    q[q[f + 64 >> 2] >> 2] = t;
                                    continue;

                                  case 1:
                                    g = q[f + 64 >> 2];
                                    q[g >> 2] = t;
                                    q[g + 4 >> 2] = t >> 31;
                                    continue;

                                  case 2:
                                    p[q[f + 64 >> 2] >> 1] = t;
                                    continue;

                                  case 3:
                                    o[q[f + 64 >> 2]] = t;
                                    continue;

                                  case 5:
                                    q[q[f + 64 >> 2] >> 2] = t;
                                    continue;

                                  case 4:
                                    continue;

                                  case 6:
                                    break I;
                                }
                              }

                              g = q[f + 64 >> 2];
                              q[g >> 2] = t;
                              q[g + 4 >> 2] = t >> 31;
                              continue;
                            }

                            j = q[f + 64 >> 2];
                            b = q[f + 68 >> 2];
                            u = 7120;
                          }

                          j = xc(j, b, x);
                        }

                        i = (h | 0) > -1 ? i & -65537 : i;
                        b = q[f + 68 >> 2];
                        k = b;
                        m = q[f + 64 >> 2];

                        J: {
                          if (!(!!(b | m) | h)) {
                            j = x;
                            h = 0;
                            break J;
                          }

                          b = !(k | m) + (x - j | 0) | 0;
                          h = (h | 0) > (b | 0) ? h : b;
                        }
                      }

                      k = g - j | 0;
                      h = (h | 0) < (k | 0) ? k : h;
                      g = h + l | 0;
                      b = (s | 0) < (g | 0) ? g : s;
                      hb(a, 32, b, g, i);
                      Za(a, u, l);
                      hb(a, 48, b, g, i ^ 65536);
                      hb(a, 48, h, k, 0);
                      Za(a, j, k);
                      hb(a, 32, b, g, i ^ 8192);
                      continue;
                    }

                    break;
                  }

                  l = 0;
                  break a;
                }

                l = -1;
              }

              ma = f + 80 | 0;
              return l;
            }

            function ab(a) {
              a = a | 0;
              var b = 0,
                  c = 0,
                  d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0,
                  j = 0;

              a: {
                if (!a) {
                  break a;
                }

                d = a + -8 | 0;
                c = q[a + -4 >> 2];
                a = c & -8;
                f = d + a | 0;

                b: {
                  if (c & 1) {
                    break b;
                  }

                  if (!(c & 3)) {
                    break a;
                  }

                  c = q[d >> 2];
                  d = d - c | 0;

                  if (d >>> 0 < t[2655]) {
                    break a;
                  }

                  a = a + c | 0;

                  if (q[2656] != (d | 0)) {
                    if (c >>> 0 <= 255) {
                      e = q[d + 8 >> 2];
                      c = c >>> 3 | 0;
                      b = q[d + 12 >> 2];

                      if ((b | 0) == (e | 0)) {
                        i = 10604, j = q[2651] & Ro(c), q[i >> 2] = j;
                        break b;
                      }

                      q[e + 12 >> 2] = b;
                      q[b + 8 >> 2] = e;
                      break b;
                    }

                    h = q[d + 24 >> 2];
                    c = q[d + 12 >> 2];

                    c: {
                      if ((d | 0) != (c | 0)) {
                        b = q[d + 8 >> 2];
                        q[b + 12 >> 2] = c;
                        q[c + 8 >> 2] = b;
                        break c;
                      }

                      d: {
                        e = d + 20 | 0;
                        b = q[e >> 2];

                        if (b) {
                          break d;
                        }

                        e = d + 16 | 0;
                        b = q[e >> 2];

                        if (b) {
                          break d;
                        }

                        c = 0;
                        break c;
                      }

                      while (1) {
                        g = e;
                        c = b;
                        e = c + 20 | 0;
                        b = q[e >> 2];

                        if (b) {
                          continue;
                        }

                        e = c + 16 | 0;
                        b = q[c + 16 >> 2];

                        if (b) {
                          continue;
                        }

                        break;
                      }

                      q[g >> 2] = 0;
                    }

                    if (!h) {
                      break b;
                    }

                    e = q[d + 28 >> 2];
                    b = (e << 2) + 10908 | 0;

                    e: {
                      if (q[b >> 2] == (d | 0)) {
                        q[b >> 2] = c;

                        if (c) {
                          break e;
                        }

                        i = 10608, j = q[2652] & Ro(e), q[i >> 2] = j;
                        break b;
                      }

                      q[h + (q[h + 16 >> 2] == (d | 0) ? 16 : 20) >> 2] = c;

                      if (!c) {
                        break b;
                      }
                    }

                    q[c + 24 >> 2] = h;
                    b = q[d + 16 >> 2];

                    if (b) {
                      q[c + 16 >> 2] = b;
                      q[b + 24 >> 2] = c;
                    }

                    b = q[d + 20 >> 2];

                    if (!b) {
                      break b;
                    }

                    q[c + 20 >> 2] = b;
                    q[b + 24 >> 2] = c;
                    break b;
                  }

                  c = q[f + 4 >> 2];

                  if ((c & 3) != 3) {
                    break b;
                  }

                  q[2653] = a;
                  q[f + 4 >> 2] = c & -2;
                  q[d + 4 >> 2] = a | 1;
                  q[a + d >> 2] = a;
                  return;
                }

                if (f >>> 0 <= d >>> 0) {
                  break a;
                }

                c = q[f + 4 >> 2];

                if (!(c & 1)) {
                  break a;
                }

                f: {
                  if (!(c & 2)) {
                    if (q[2657] == (f | 0)) {
                      q[2657] = d;
                      a = q[2654] + a | 0;
                      q[2654] = a;
                      q[d + 4 >> 2] = a | 1;

                      if (q[2656] != (d | 0)) {
                        break a;
                      }

                      q[2653] = 0;
                      q[2656] = 0;
                      return;
                    }

                    if (q[2656] == (f | 0)) {
                      q[2656] = d;
                      a = q[2653] + a | 0;
                      q[2653] = a;
                      q[d + 4 >> 2] = a | 1;
                      q[a + d >> 2] = a;
                      return;
                    }

                    a = (c & -8) + a | 0;

                    g: {
                      if (c >>> 0 <= 255) {
                        b = q[f + 8 >> 2];
                        c = c >>> 3 | 0;
                        e = q[f + 12 >> 2];

                        if ((b | 0) == (e | 0)) {
                          i = 10604, j = q[2651] & Ro(c), q[i >> 2] = j;
                          break g;
                        }

                        q[b + 12 >> 2] = e;
                        q[e + 8 >> 2] = b;
                        break g;
                      }

                      h = q[f + 24 >> 2];
                      c = q[f + 12 >> 2];

                      h: {
                        if ((f | 0) != (c | 0)) {
                          b = q[f + 8 >> 2];
                          q[b + 12 >> 2] = c;
                          q[c + 8 >> 2] = b;
                          break h;
                        }

                        i: {
                          e = f + 20 | 0;
                          b = q[e >> 2];

                          if (b) {
                            break i;
                          }

                          e = f + 16 | 0;
                          b = q[e >> 2];

                          if (b) {
                            break i;
                          }

                          c = 0;
                          break h;
                        }

                        while (1) {
                          g = e;
                          c = b;
                          e = c + 20 | 0;
                          b = q[e >> 2];

                          if (b) {
                            continue;
                          }

                          e = c + 16 | 0;
                          b = q[c + 16 >> 2];

                          if (b) {
                            continue;
                          }

                          break;
                        }

                        q[g >> 2] = 0;
                      }

                      if (!h) {
                        break g;
                      }

                      e = q[f + 28 >> 2];
                      b = (e << 2) + 10908 | 0;

                      j: {
                        if (q[b >> 2] == (f | 0)) {
                          q[b >> 2] = c;

                          if (c) {
                            break j;
                          }

                          i = 10608, j = q[2652] & Ro(e), q[i >> 2] = j;
                          break g;
                        }

                        q[h + (q[h + 16 >> 2] == (f | 0) ? 16 : 20) >> 2] = c;

                        if (!c) {
                          break g;
                        }
                      }

                      q[c + 24 >> 2] = h;
                      b = q[f + 16 >> 2];

                      if (b) {
                        q[c + 16 >> 2] = b;
                        q[b + 24 >> 2] = c;
                      }

                      b = q[f + 20 >> 2];

                      if (!b) {
                        break g;
                      }

                      q[c + 20 >> 2] = b;
                      q[b + 24 >> 2] = c;
                    }

                    q[d + 4 >> 2] = a | 1;
                    q[a + d >> 2] = a;

                    if (q[2656] != (d | 0)) {
                      break f;
                    }

                    q[2653] = a;
                    return;
                  }

                  q[f + 4 >> 2] = c & -2;
                  q[d + 4 >> 2] = a | 1;
                  q[a + d >> 2] = a;
                }

                if (a >>> 0 <= 255) {
                  a = a >>> 3 | 0;
                  c = (a << 3) + 10644 | 0;
                  b = q[2651];
                  a = 1 << a;

                  k: {
                    if (!(b & a)) {
                      q[2651] = a | b;
                      a = c;
                      break k;
                    }

                    a = q[c + 8 >> 2];
                  }

                  q[c + 8 >> 2] = d;
                  q[a + 12 >> 2] = d;
                  q[d + 12 >> 2] = c;
                  q[d + 8 >> 2] = a;
                  return;
                }

                q[d + 16 >> 2] = 0;
                q[d + 20 >> 2] = 0;
                f = d;
                e = a >>> 8 | 0;
                b = 0;

                l: {
                  if (!e) {
                    break l;
                  }

                  b = 31;

                  if (a >>> 0 > 16777215) {
                    break l;
                  }

                  c = e;
                  e = e + 1048320 >>> 16 & 8;
                  b = c << e;
                  h = b + 520192 >>> 16 & 4;
                  b = b << h;
                  g = b + 245760 >>> 16 & 2;
                  b = (b << g >>> 15 | 0) - (g | (e | h)) | 0;
                  b = (b << 1 | a >>> b + 21 & 1) + 28 | 0;
                }

                q[f + 28 >> 2] = b;
                g = (b << 2) + 10908 | 0;

                m: {
                  n: {
                    e = q[2652];
                    c = 1 << b;

                    o: {
                      if (!(e & c)) {
                        q[2652] = c | e;
                        q[g >> 2] = d;
                        q[d + 24 >> 2] = g;
                        break o;
                      }

                      e = a << ((b | 0) == 31 ? 0 : 25 - (b >>> 1 | 0) | 0);
                      c = q[g >> 2];

                      while (1) {
                        b = c;

                        if ((q[c + 4 >> 2] & -8) == (a | 0)) {
                          break n;
                        }

                        c = e >>> 29 | 0;
                        e = e << 1;
                        g = b + (c & 4) | 0;
                        c = q[g + 16 >> 2];

                        if (c) {
                          continue;
                        }

                        break;
                      }

                      q[g + 16 >> 2] = d;
                      q[d + 24 >> 2] = b;
                    }

                    q[d + 12 >> 2] = d;
                    q[d + 8 >> 2] = d;
                    break m;
                  }

                  a = q[b + 8 >> 2];
                  q[a + 12 >> 2] = d;
                  q[b + 8 >> 2] = d;
                  q[d + 24 >> 2] = 0;
                  q[d + 12 >> 2] = b;
                  q[d + 8 >> 2] = a;
                }

                a = q[2659] + -1 | 0;
                q[2659] = a;

                if (a) {
                  break a;
                }

                d = 11060;

                while (1) {
                  a = q[d >> 2];
                  d = a + 8 | 0;

                  if (a) {
                    continue;
                  }

                  break;
                }

                q[2659] = -1;
              }
            }

            function Mm(a, b, c, d, e, f, g, h, i, j, k) {
              var l = 0,
                  m = x(0),
                  n = x(0),
                  o = 0,
                  p = 0,
                  r = 0,
                  s = 0,
                  t = x(0),
                  v = x(0),
                  w = 0,
                  y = x(0),
                  z = x(0),
                  A = 0,
                  B = x(0);
              l = ma + -64 | 0;
              ma = l;
              ac(l + 32 | 0, Ea(a));
              o = dc(uc(l + 32 | 0), f);
              p = Ge(o, f);
              w = Wa(o);
              A = l, B = Ja(b, 2, c), u[A + 32 >> 2] = B;
              t = u[l + 32 >> 2];
              A = l, B = Ja(b, 0, c), u[A + 32 >> 2] = B;
              v = u[l + 32 >> 2];

              a: {
                if (Eb(b, 2, c)) {
                  Dc(l + 32 | 0, b);
                  r = hc(l + 32 | 0, 0);
                  s = q[r + 4 >> 2];
                  r = q[r >> 2];
                  q[l + 16 >> 2] = r;
                  q[l + 20 >> 2] = s;
                  q[l + 48 >> 2] = r;
                  q[l + 52 >> 2] = s;
                  A = l, B = Bb(l + 16 | 0, c), u[A + 56 >> 2] = B;
                  m = x(t + u[l + 56 >> 2]);
                  break a;
                }

                m = x(G);

                if (!Ab(b, 2)) {
                  break a;
                }

                if (!dd(b, 2)) {
                  break a;
                }

                m = u[Da(Ga(a) + 288 | 0, 0) >> 2];
                n = $b(a, 2);
                y = pc(a, 2);
                A = l, B = kb(zc(b, 2, c), Qc(b, 2, c)), u[A + 32 >> 2] = B;
                m = Ya(b, 2, x(x(m - x(n + y)) - u[l + 32 >> 2]), c, c);
              }

              b: {
                if (Eb(b, 0, e)) {
                  Dc(l + 32 | 0, b);
                  r = hc(l + 32 | 0, 1);
                  s = q[r + 4 >> 2];
                  r = q[r >> 2];
                  q[l + 8 >> 2] = r;
                  q[l + 12 >> 2] = s;
                  q[l + 24 >> 2] = r;
                  q[l + 28 >> 2] = s;
                  A = l, B = Bb(l + 8 | 0, e), u[A + 56 >> 2] = B;
                  n = x(v + u[l + 56 >> 2]);
                  break b;
                }

                n = x(G);

                if (!Ab(b, 0)) {
                  break b;
                }

                if (!dd(b, 0)) {
                  break b;
                }

                n = u[Da(Ga(a) + 288 | 0, 1) >> 2];
                y = $b(a, 0);
                z = pc(a, 0);
                A = l, B = kb(zc(b, 0, e), Qc(b, 0, e)), u[A + 32 >> 2] = B;
                n = Ya(b, 0, x(x(n - x(y + z)) - u[l + 32 >> 2]), e, c);
              }

              s = Ea(b);

              c: {
                if ((Fa(m) ^ Fa(n)) != 1) {
                  break c;
                }

                u[l + 32 >> 2] = u[s + 188 >> 2];

                if (Ia(l + 32 | 0)) {
                  break c;
                }

                if (Fa(m)) {
                  u[l + 32 >> 2] = u[s + 188 >> 2];
                  m = x(t + x(x(n - v) * u[l + 32 >> 2]));
                  break c;
                }

                if (!Fa(n)) {
                  break c;
                }

                u[l + 32 >> 2] = u[s + 188 >> 2];
                n = x(v + x(x(m - t) / u[l + 32 >> 2]));
              }

              d: {
                if (!Fa(m)) {
                  if (!Fa(n)) {
                    break d;
                  }
                }

                s = Fa(m) ^ 1;
                r = Fa(n) ^ 1;

                e: {
                  if (w) {
                    break e;
                  }

                  if (!d | !Fa(m)) {
                    break e;
                  }

                  d = (Fa(c) ^ 1) & c > x(0);
                  m = d ? c : m;
                  s = d ? 2 : s;
                }

                cc(b, m, n, f, s, r, m, n, 0, 6, g, h, i, j, k);
                m = u[Da(Ga(b) + 288 | 0, 0) >> 2];
                A = l, B = Ja(b, 2, c), u[A + 32 >> 2] = B;
                n = u[l + 32 >> 2];
                t = u[Da(Ga(b) + 288 | 0, 1) >> 2];
                A = l, B = Ja(b, 0, c), u[A + 32 >> 2] = B;
                m = x(m + n);
                n = x(t + u[l + 32 >> 2]);
              }

              cc(b, m, n, f, 1, 1, m, n, 1, 1, g, h, i, j, k);

              f: {
                g: {
                  if (!dd(b, o)) {
                    break g;
                  }

                  if (Ab(b, o)) {
                    break g;
                  }

                  m = u[Da(Ga(a) + 288 | 0, q[Da(1848, o) >> 2]) >> 2];
                  n = u[Da(Ga(b) + 288 | 0, q[Da(1848, o) >> 2]) >> 2];
                  t = pc(a, o);
                  A = l, B = Sb(b, o, c), u[A + 32 >> 2] = B;
                  v = u[l + 32 >> 2];
                  A = l, B = Qc(b, o, w ? c : e), u[A + 56 >> 2] = B;
                  Qa(b, x(x(x(x(m - n) - t) - v) - u[l + 56 >> 2]), q[Da(1596, o) >> 2]);
                  break f;
                }

                h: {
                  if (Ab(b, o)) {
                    break h;
                  }

                  od(l + 32 | 0, Ea(a));

                  if ((jd(l + 32 | 0) | 0) != 1) {
                    break h;
                  }

                  Qa(b, x(x(u[Da(Ga(a) + 288 | 0, q[Da(1848, o) >> 2]) >> 2] - u[Da(Ga(b) + 288 | 0, q[Da(1848, o) >> 2]) >> 2]) * x(.5)), q[Da(1596, o) >> 2]);
                  break f;
                }

                if (Ab(b, o)) {
                  break f;
                }

                od(l + 32 | 0, Ea(a));

                if ((jd(l + 32 | 0) | 0) != 2) {
                  break f;
                }

                Qa(b, x(u[Da(Ga(a) + 288 | 0, q[Da(1848, o) >> 2]) >> 2] - u[Da(Ga(b) + 288 | 0, q[Da(1848, o) >> 2]) >> 2]), q[Da(1596, o) >> 2]);
              }

              i: {
                j: {
                  if (!dd(b, p)) {
                    break j;
                  }

                  if (Ab(b, p)) {
                    break j;
                  }

                  m = u[Da(Ga(a) + 288 | 0, q[Da(1848, p) >> 2]) >> 2];
                  n = u[Da(Ga(b) + 288 | 0, q[Da(1848, p) >> 2]) >> 2];
                  t = pc(a, p);
                  A = l, B = Sb(b, p, c), u[A + 32 >> 2] = B;
                  v = u[l + 32 >> 2];
                  A = l, B = Qc(b, p, w ? e : c), u[A + 56 >> 2] = B;
                  Qa(b, x(x(x(x(m - n) - t) - v) - u[l + 56 >> 2]), q[Da(1596, p) >> 2]);
                  break i;
                }

                k: {
                  if (Ab(b, p)) {
                    break k;
                  }

                  if ((Nb(a, b) | 0) != 2) {
                    break k;
                  }

                  Qa(b, x(x(u[Da(Ga(a) + 288 | 0, q[Da(1848, p) >> 2]) >> 2] - u[Da(Ga(b) + 288 | 0, q[Da(1848, p) >> 2]) >> 2]) * x(.5)), q[Da(1596, p) >> 2]);
                  break i;
                }

                if (Ab(b, p)) {
                  break i;
                }

                d = Nb(a, b);
                Jc(l + 32 | 0, Ea(a));

                if (((d | 0) == 3 | 0) == ((jb(l + 32 | 0) | 0) == 2 | 0)) {
                  break i;
                }

                Qa(b, x(u[Da(Ga(a) + 288 | 0, q[Da(1848, p) >> 2]) >> 2] - u[Da(Ga(b) + 288 | 0, q[Da(1848, p) >> 2]) >> 2]), q[Da(1596, p) >> 2]);
              }

              ma = l - -64 | 0;
            }

            function cc(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
              var p = 0,
                  s = 0,
                  w = 0,
                  y = 0,
                  z = 0,
                  A = 0,
                  B = x(0),
                  C = x(0),
                  D = 0,
                  E = 0,
                  F = 0,
                  G = 0,
                  H = 0,
                  I = x(0);
              p = ma - 176 | 0;
              ma = p;
              s = Ga(a);

              a: {
                if (!(F = rg(a), G = 0, H = q[s + 84 >> 2] != (o | 0), H ? F : G)) {
                  z = 0;

                  if (q[s + 88 >> 2] == (d | 0)) {
                    break a;
                  }
                }

                q[s + 296 >> 2] = -1082130432;
                q[s + 300 >> 2] = -1082130432;
                q[s + 92 >> 2] = 0;
                q[s + 312 >> 2] = -1082130432;
                q[s + 316 >> 2] = -1082130432;
                q[s + 304 >> 2] = 0;
                q[s + 308 >> 2] = 0;
                z = 1;
              }

              y = n + 1 | 0;

              b: {
                c: {
                  d: {
                    e: {
                      f: {
                        g: {
                          h: {
                            i: {
                              if (Xc(a)) {
                                F = p, I = Ja(a, 2, g), u[F + 168 >> 2] = I;
                                B = u[p + 168 >> 2];
                                F = p, I = Ja(a, 0, g), u[F + 168 >> 2] = I;
                                C = u[p + 168 >> 2];

                                if (Yf(e, b, f, c, q[s + 304 >> 2], u[s + 296 >> 2], q[s + 308 >> 2], u[s + 300 >> 2], u[s + 312 >> 2], u[s + 316 >> 2], B, C, k)) {
                                  n = s + 296 | 0;
                                  break h;
                                }

                                if (!q[s + 92 >> 2]) {
                                  break i;
                                }

                                w = s + 96 | 0;
                                n = 0;

                                while (1) {
                                  if (Yf(e, b, f, c, q[mb(w, n) + 8 >> 2], u[mb(w, n) >> 2], q[mb(w, n) + 12 >> 2], u[mb(w, n) + 4 >> 2], u[mb(w, n) + 16 >> 2], u[mb(w, n) + 20 >> 2], B, C, k)) {
                                    n = mb(w, n);
                                    break h;
                                  }

                                  n = n + 1 | 0;

                                  if (n >>> 0 < t[s + 92 >> 2]) {
                                    continue;
                                  }

                                  break;
                                }

                                break i;
                              }

                              if (!i) {
                                if (!q[s + 92 >> 2]) {
                                  break i;
                                }

                                w = s + 96 | 0;
                                n = 0;

                                while (1) {
                                  j: {
                                    if (!Ta(u[mb(w, n) >> 2], b)) {
                                      break j;
                                    }

                                    if (!Ta(u[mb(w, n) + 4 >> 2], c)) {
                                      break j;
                                    }

                                    if (q[mb(w, n) + 8 >> 2] != (e | 0)) {
                                      break j;
                                    }

                                    if (q[mb(w, n) + 12 >> 2] != (f | 0)) {
                                      break j;
                                    }

                                    n = mb(w, n);
                                    break h;
                                  }

                                  n = n + 1 | 0;

                                  if (n >>> 0 < t[s + 92 >> 2]) {
                                    continue;
                                  }

                                  break;
                                }

                                break i;
                              }

                              if (!Ta(u[s + 296 >> 2], b)) {
                                break i;
                              }

                              if (!Ta(u[s + 300 >> 2], c) | q[s + 304 >> 2] != (e | 0)) {
                                break i;
                              }

                              n = q[s + 308 >> 2] == (f | 0) ? s + 296 | 0 : 0;
                              break h;
                            }

                            w = z ^ 1;
                            n = 0;
                            break g;
                          }

                          D = (n | 0) != 0;
                          w = z ^ 1;

                          if (!n | !w) {
                            break g;
                          }

                          d = q[n + 16 >> 2];
                          k = s + 288 | 0;
                          F = Da(k, 0), G = d, q[F >> 2] = G;
                          d = q[n + 20 >> 2];
                          D = 1;
                          F = Da(k, 1), G = d, q[F >> 2] = G;
                          d = (i ? 12 : 16) + l | 0;
                          q[d >> 2] = q[d >> 2] + 1;

                          if (r[9456]) {
                            break f;
                          }

                          break c;
                        }

                        if (r[9456]) {
                          q[p + 152 >> 2] = z ? 1703 : 1705;
                          q[p + 148 >> 2] = y;
                          F = p, G = de(y), q[F + 144 >> 2] = G;
                          bc(a, 4, 1694, p + 144 | 0);
                          Zd(a, m);
                          A = Hc(e, i);
                          E = Hc(f, i);
                          F = p, G = R(j | 0) | 0, q[F + 136 >> 2] = G;
                          v[p + 128 >> 3] = c;
                          v[p + 120 >> 3] = b;
                          q[p + 116 >> 2] = E;
                          q[p + 112 >> 2] = A;
                          bc(a, 4, 1706, p + 112 | 0);
                        }

                        Wm(a, b, c, d, e, f, g, h, i, k, l, m, y, o, j);

                        if (r[9456]) {
                          q[p + 104 >> 2] = z ? 1703 : 1705;
                          q[p + 100 >> 2] = y;
                          F = p, G = de(y), q[F + 96 >> 2] = G;
                          bc(a, 4, 1740, p + 96 | 0);
                          Zd(a, m);
                          k = Hc(e, i);
                          y = Hc(f, i);
                          A = s + 288 | 0;
                          g = u[Da(A, 0) >> 2];
                          h = u[Da(A, 1) >> 2];
                          F = p, G = R(j | 0) | 0, q[F + 88 >> 2] = G;
                          v[p + 80 >> 3] = h;
                          v[p + 72 >> 3] = g;
                          q[p + 68 >> 2] = y;
                          q[p + 64 >> 2] = k;
                          bc(a, 4, 1749, p - -64 | 0);
                        }

                        q[s + 88 >> 2] = d;

                        if (n) {
                          break b;
                        }

                        n = q[s + 92 >> 2];
                        d = n + 1 | 0;

                        if (d >>> 0 > t[l + 8 >> 2]) {
                          q[l + 8 >> 2] = d;
                        }

                        if ((n | 0) == 8) {
                          n = 0;

                          if (r[9456]) {
                            bc(a, 4, 1781, 0);
                          }

                          q[s + 92 >> 2] = 0;
                        }

                        if (!i) {
                          break e;
                        }

                        d = s + 296 | 0;
                        break d;
                      }

                      if (!r[9457]) {
                        break c;
                      }

                      q[p + 52 >> 2] = y;
                      F = p, G = de(y), q[F + 48 >> 2] = G;
                      bc(a, 4, 1628, p + 48 | 0);
                      Zd(a, m);
                      d = Hc(e, i);
                      e = Hc(f, i);
                      g = u[n + 16 >> 2];
                      h = u[n + 20 >> 2];
                      F = p, G = R(j | 0) | 0, q[F + 40 >> 2] = G;
                      v[p + 32 >> 3] = h;
                      v[p + 24 >> 3] = g;
                      v[p + 16 >> 3] = c;
                      v[p + 8 >> 3] = b;
                      q[p + 4 >> 2] = e;
                      q[p >> 2] = d;
                      bc(a, 4, 1645, p);
                      break c;
                    }

                    d = mb(s + 96 | 0, n);
                    q[s + 92 >> 2] = q[s + 92 >> 2] + 1;
                  }

                  q[d + 12 >> 2] = f;
                  q[d + 8 >> 2] = e;
                  u[d + 4 >> 2] = c;
                  u[d >> 2] = b;
                  n = 0;
                  e = s + 288 | 0;
                  F = d, G = q[Da(e, 0) >> 2], q[F + 16 >> 2] = G;
                  F = d, G = q[Da(e, 1) >> 2], q[F + 20 >> 2] = G;
                  break b;
                }

                w = 1;
              }

              k: {
                if (i) {
                  Lc(a, u[Da(Ga(a) + 288 | 0, 0) >> 2], 0);
                  Lc(a, u[Da(Ga(a) + 288 | 0, 1) >> 2], 1);
                  je(a);
                  Fe(a, 0);
                  a = w ? ((s + 296 | 0) == (n | 0)) << 1 : 0;
                  break k;
                }

                a = D ? 3 : 1;
              }

              q[s + 84 >> 2] = o;
              q[p + 172 >> 2] = m;
              q[p + 168 >> 2] = a;
              ma = p + 176 | 0;
              return !n | z;
            }

            function Im(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
              var o = 0,
                  p = 0,
                  r = 0,
                  s = 0,
                  t = 0,
                  v = x(0),
                  w = x(0),
                  y = 0,
                  z = x(0),
                  A = x(0),
                  B = 0,
                  C = 0,
                  D = 0,
                  E = 0,
                  F = x(0);
              o = ma - 144 | 0;
              ma = o;
              ac(o + 88 | 0, Ea(a));
              y = dc(uc(o + 88 | 0), i);
              t = Wa(y);
              Ho(o + 112 | 0, b);
              p = q[o + 116 >> 2];
              q[o + 40 >> 2] = q[o + 112 >> 2];
              q[o + 44 >> 2] = p;
              E = o, F = Bb(o + 40 | 0, t ? f : g), u[E + 120 >> 2] = F;
              B = Eb(b, 2, f);
              C = Eb(b, 0, g);

              a: {
                b: {
                  if (Ia(o + 120 | 0)) {
                    break b;
                  }

                  if (Fa(t ? c : e)) {
                    break b;
                  }

                  if (!Ia(Ga(b) + 80 | 0)) {
                    if (!Hf(q[b + 556 >> 2], 0)) {
                      break a;
                    }

                    if (q[Ga(b) + 76 >> 2] == (n | 0)) {
                      break a;
                    }
                  }

                  a = Ma(o + 88 | 0, yb(b, y, f));
                  Mc(b, Pc(u[o + 120 >> 2], u[a >> 2]));
                  break a;
                }

                D = t ^ 1;

                if (!(D | B ^ 1)) {
                  d = Ma(o + 56 | 0, yb(b, 2, f));
                  Dc(o + 88 | 0, b);
                  h = hc(o + 88 | 0, 0);
                  a = q[h + 4 >> 2];
                  h = q[h >> 2];
                  q[o + 32 >> 2] = h;
                  q[o + 36 >> 2] = a;
                  q[o + 104 >> 2] = h;
                  q[o + 108 >> 2] = a;
                  Mc(b, Pc(Bb(o + 32 | 0, f), u[d >> 2]));
                  break a;
                }

                if (!(C ^ 1 | t)) {
                  d = Ma(o + 56 | 0, yb(b, 0, f));
                  Dc(o + 88 | 0, b);
                  h = hc(o + 88 | 0, 1);
                  a = q[h + 4 >> 2];
                  h = q[h >> 2];
                  q[o + 24 >> 2] = h;
                  q[o + 28 >> 2] = a;
                  q[o + 80 >> 2] = h;
                  q[o + 84 >> 2] = a;
                  Mc(b, Pc(Bb(o + 24 | 0, g), u[d >> 2]));
                  break a;
                }

                q[o + 136 >> 2] = 2143289344;
                q[o + 140 >> 2] = 2143289344;
                q[o + 132 >> 2] = 0;
                q[o + 128 >> 2] = 0;
                E = o, F = Ja(b, 2, f), u[E + 88 >> 2] = F;
                z = u[o + 88 >> 2];
                E = o, F = Ja(b, 0, f), u[E + 88 >> 2] = F;
                A = u[o + 88 >> 2];
                v = x(G);
                w = x(G);

                if (B) {
                  Dc(o + 88 | 0, b);
                  s = hc(o + 88 | 0, 0);
                  p = q[s + 4 >> 2];
                  s = q[s >> 2];
                  q[o + 16 >> 2] = s;
                  q[o + 20 >> 2] = p;
                  q[o + 72 >> 2] = s;
                  q[o + 76 >> 2] = p;
                  E = o, F = Bb(o + 16 | 0, f), u[E + 56 >> 2] = F;
                  w = x(z + u[o + 56 >> 2]);
                  u[o + 140 >> 2] = w;
                  q[o + 132 >> 2] = 1;
                  s = 1;
                }

                if (C) {
                  Dc(o + 88 | 0, b);
                  r = hc(o + 88 | 0, 1);
                  p = q[r + 4 >> 2];
                  r = q[r >> 2];
                  q[o + 8 >> 2] = r;
                  q[o + 12 >> 2] = p;
                  q[o + 64 >> 2] = r;
                  q[o + 68 >> 2] = p;
                  E = o, F = Bb(o + 8 | 0, g), u[E + 56 >> 2] = F;
                  v = x(A + u[o + 56 >> 2]);
                  u[o + 136 >> 2] = v;
                  q[o + 128 >> 2] = 1;
                  r = 1;
                }

                c: {
                  d: {
                    if (!t) {
                      Yb(o + 88 | 0, Ea(a));

                      if ((jb(o + 88 | 0) | 0) == 2) {
                        break d;
                      }
                    }

                    Yb(o + 56 | 0, Ea(a));

                    if ((jb(o + 56 | 0) | 0) == 2) {
                      break c;
                    }
                  }

                  if (!Fa(w)) {
                    break c;
                  }

                  if (Fa(c)) {
                    break c;
                  }

                  s = 2;
                  q[o + 132 >> 2] = 2;
                  u[o + 140 >> 2] = c;
                  w = c;
                }

                e: {
                  f: {
                    if (t) {
                      Yb(o + 88 | 0, Ea(a));

                      if ((jb(o + 88 | 0) | 0) == 2) {
                        break f;
                      }
                    }

                    Yb(o + 56 | 0, Ea(a));

                    if ((jb(o + 56 | 0) | 0) == 2) {
                      break e;
                    }
                  }

                  if (!Fa(v)) {
                    break e;
                  }

                  if (Fa(e)) {
                    break e;
                  }

                  r = 2;
                  q[o + 128 >> 2] = 2;
                  u[o + 136 >> 2] = e;
                  v = e;
                }

                p = Ea(b);
                u[o + 88 >> 2] = u[p + 188 >> 2];

                g: {
                  if (Ia(o + 88 | 0)) {
                    break g;
                  }

                  h: {
                    if (!(D ^ 1 | (s | 0) != 1)) {
                      u[o + 88 >> 2] = u[p + 188 >> 2];
                      u[o + 136 >> 2] = A + x(x(w - z) / u[o + 88 >> 2]);
                      q[o + 128 >> 2] = 1;
                      break h;
                    }

                    if (t ^ 1 | (r | 0) != 1) {
                      break g;
                    }

                    u[o + 88 >> 2] = u[p + 188 >> 2];
                    u[o + 140 >> 2] = z + x(x(v - A) * u[o + 88 >> 2]);
                    q[o + 132 >> 2] = 1;
                  }

                  r = 1;
                  s = 1;
                }

                i: {
                  if (t | B | (d | 0) != 1 | (Fa(c) | (Nb(a, b) | 0) != 4) | (s | 0) == 1) {
                    break i;
                  }

                  q[o + 132 >> 2] = 1;
                  u[o + 140 >> 2] = c;
                  u[o + 88 >> 2] = u[p + 188 >> 2];

                  if (Ia(o + 88 | 0)) {
                    break i;
                  }

                  u[o + 88 >> 2] = u[p + 188 >> 2];
                  u[o + 136 >> 2] = x(c - z) / u[o + 88 >> 2];
                  r = 1;
                  q[o + 128 >> 2] = 1;
                }

                d = Fa(e);

                j: {
                  if (C | D | (h | 0) != 1 | (d | (Nb(a, b) | 0) != 4) | (r | 0) == 1) {
                    break j;
                  }

                  q[o + 128 >> 2] = 1;
                  u[o + 136 >> 2] = e;
                  u[o + 88 >> 2] = u[p + 188 >> 2];

                  if (Ia(o + 88 | 0)) {
                    break j;
                  }

                  u[o + 88 >> 2] = u[p + 188 >> 2];
                  u[o + 140 >> 2] = x(e - A) * u[o + 88 >> 2];
                  q[o + 132 >> 2] = 1;
                }

                Fc(b, 2, f, f, o + 132 | 0, o + 140 | 0);
                Fc(b, 0, g, f, o + 128 | 0, o + 136 | 0);
                cc(b, u[o + 140 >> 2], u[o + 136 >> 2], i, q[o + 132 >> 2], q[o + 128 >> 2], f, g, 0, 5, j, k, l, m, n);
                Mc(b, u[Ma(o + 48 | 0, Xa(u[Da(Ga(b) + 288 | 0, q[Da(1848, y) >> 2]) >> 2], yb(b, y, f))) >> 2]);
              }

              $g(b, n);
              ma = o + 144 | 0;
            }

            function Om(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
              var o = 0,
                  p = 0,
                  r = x(0),
                  s = 0,
                  v = 0,
                  w = x(0),
                  y = x(0),
                  z = x(0),
                  A = x(0),
                  B = x(0),
                  C = x(0),
                  D = x(0),
                  E = 0,
                  F = x(0);
              o = ma - 368 | 0;
              ma = o;
              s = Ea(a);
              E = o, F = we(a, d, i), u[E + 32 >> 2] = F;
              w = u[o + 32 >> 2];
              E = o, F = Og(a, d, i), u[E + 32 >> 2] = F;
              y = u[o + 32 >> 2];

              a: {
                if (u[b + 32 >> 2] > x(0) ^ 1 | (f | 0) != 2) {
                  break a;
                }

                b: {
                  if (Va(Ha(Jb(s), q[Da(1848, d) >> 2]))) {
                    break b;
                  }

                  f = q[Ha(Jb(s), q[Da(1848, d) >> 2]) >> 2];
                  q[o + 12 >> 2] = f;
                  q[o + 360 >> 2] = f;
                  E = o, F = Pa(o + 12 | 0, h), u[E + 32 >> 2] = F;

                  if (Ia(o + 32 | 0)) {
                    break b;
                  }

                  f = q[Ha(Jb(s), q[Da(1848, d) >> 2]) >> 2];
                  q[o + 8 >> 2] = f;
                  q[o + 352 >> 2] = f;
                  E = o, F = Pa(o + 8 | 0, h), u[E + 32 >> 2] = F;
                  E = b, F = Xa(x(0), x(x(x(u[o + 32 >> 2] - w) - y) - x(j - u[b + 32 >> 2]))), u[E + 32 >> 2] = F;
                  break a;
                }

                q[b + 32 >> 2] = 0;
              }

              if (t[b + 16 >> 2] > c >>> 0) {
                f = c;

                while (1) {
                  v = ec(a, f);
                  zb(o + 32 | 0, Ea(v));

                  if (!eb(o + 32 | 0)) {
                    tc(o + 32 | 0, v, d);
                    s = q[o + 36 >> 2];
                    sc(o + 32 | 0, v, d);
                    p = (((s | 0) == 3) + p | 0) + (q[o + 36 >> 2] == 3) | 0;
                  }

                  f = f + 1 | 0;

                  if (f >>> 0 < t[b + 16 >> 2]) {
                    continue;
                  }

                  break;
                }
              }

              od(o + 32 | 0, Ea(a));
              f = jd(o + 32 | 0);
              h = x(0);
              r = x(0);

              c: {
                if (p) {
                  break c;
                }

                f = f + -1 | 0;
                r = x(0);

                if (f >>> 0 > 4) {
                  break c;
                }

                d: {
                  switch (f - 1 | 0) {
                    default:
                      r = x(u[b + 32 >> 2] * x(.5));
                      break c;

                    case 0:
                      r = u[b + 32 >> 2];
                      break c;

                    case 1:
                      r = x(0);

                      if (t[b >> 2] < 2) {
                        break c;
                      }

                      h = x(Xa(u[b + 32 >> 2], x(0)) / x(q[b >> 2] + -1 >>> 0));
                      r = x(0);
                      break c;

                    case 3:
                      h = x(u[b + 32 >> 2] / x(q[b >> 2] + 1 >>> 0));
                      r = h;
                      break c;

                    case 2:
                      break d;
                  }
                }

                h = x(u[b + 32 >> 2] / x(t[b >> 2]));
                r = x(h * x(.5));
              }

              i = r;
              q[b + 40 >> 2] = 0;
              u[b + 36 >> 2] = w + r;
              s = Rf(a);

              if (t[b + 16 >> 2] > c >>> 0) {
                g = (m ^ 1) & (g | 0) == 1;
                f = o + 112 | 0;
                z = x(p | 0);

                while (1) {
                  p = ec(a, c);
                  v = Ea(p);
                  fb(o + 32 | 0, Ga(p), 320);

                  e: {
                    if ((rd(v) | 0) == 1) {
                      break e;
                    }

                    f: {
                      if ((Zc(v) | 0) != 1) {
                        break f;
                      }

                      if (!Ab(p, d)) {
                        break f;
                      }

                      if (!m) {
                        break e;
                      }

                      E = o, F = zc(p, d, j), u[E + 16 >> 2] = F;
                      w = u[o + 16 >> 2];
                      r = $b(a, d);
                      E = o, F = sb(p, d, l), u[E + 24 >> 2] = F;
                      Qa(p, x(x(w + r) + u[o + 24 >> 2]), q[Da(2184, d) >> 2]);
                      break e;
                    }

                    if (!Zc(v)) {
                      tc(o + 16 | 0, p, d);

                      if (q[o + 20 >> 2] == 3) {
                        u[b + 36 >> 2] = u[b + 36 >> 2] + x(u[b + 32 >> 2] / z);
                      }

                      if (m) {
                        Qa(p, x(u[Da(o + 32 | 0, q[Da(2184, d) >> 2]) >> 2] + u[b + 36 >> 2]), q[Da(2184, d) >> 2]);
                      }

                      sc(o + 16 | 0, p, d);

                      if (q[o + 20 >> 2] == 3) {
                        u[b + 36 >> 2] = u[b + 36 >> 2] + x(u[b + 32 >> 2] / z);
                      }

                      if (g) {
                        E = o, F = Ja(p, d, l), u[E + 16 >> 2] = F;
                        u[b + 36 >> 2] = u[b + 36 >> 2] + x(u[f >> 2] + x(h + u[o + 16 >> 2]));
                        u[b + 40 >> 2] = k;
                        break e;
                      }

                      r = ce(p, d, l);
                      u[b + 36 >> 2] = u[b + 36 >> 2] + x(h + r);

                      if (s) {
                        C = kd(p, n);
                        E = o, F = sb(p, 0, l), u[E + 16 >> 2] = F;
                        r = u[o + 16 >> 2];
                        D = u[Da(Ga(p) + 288 | 0, 1) >> 2];
                        E = o, F = Ja(p, 0, l), u[E + 16 >> 2] = F;
                        w = u[o + 16 >> 2];
                        r = x(C + r);
                        A = Xa(A, r);
                        B = Xa(B, x(x(D + w) - r));
                        break e;
                      }

                      E = b, F = Xa(u[b + 40 >> 2], ce(p, e, l)), u[E + 40 >> 2] = F;
                      break e;
                    }

                    if (!m) {
                      break e;
                    }

                    Qa(p, x(i + x(u[Da(o + 32 | 0, q[Da(2184, d) >> 2]) >> 2] + $b(a, d))), q[Da(2184, d) >> 2]);
                  }

                  c = c + 1 | 0;

                  if (c >>> 0 < t[b + 16 >> 2]) {
                    continue;
                  }

                  break;
                }
              }

              u[b + 36 >> 2] = y + u[b + 36 >> 2];

              if (s) {
                u[b + 40 >> 2] = B + A;
              }

              ma = o + 368 | 0;
            }

            function Gm(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, r) {
              var s = 0,
                  t = x(0),
                  v = 0,
                  w = x(0),
                  y = x(0),
                  z = 0,
                  A = 0,
                  B = x(0),
                  C = x(0),
                  D = 0,
                  E = x(0),
                  F = 0,
                  G = 0,
                  H = 0,
                  I = x(0);
              s = ma + -64 | 0;
              ma = s;
              A = Wa(c);
              Jc(s + 56 | 0, Ea(b));
              v = jb(s + 56 | 0);
              z = a + 20 | 0;
              G = s, H = ib(z), q[G + 48 >> 2] = H;
              G = s, H = pb(z), q[G + 40 >> 2] = H;

              if (Oa(s + 48 | 0, s + 40 | 0)) {
                F = !v | j ^ 1;

                while (1) {
                  j = q[q[s + 48 >> 2] >> 2];
                  G = s, I = Ec(j, c, u[Ga(j) + 80 >> 2], e), u[G + 56 >> 2] = I;
                  y = u[s + 56 >> 2];
                  z = Fa(u[a + 32 >> 2]);
                  t = u[a + 32 >> 2];

                  a: {
                    if (!(z | t < x(0) ^ 1)) {
                      w = x(y * x(-Kc(j)));
                      t = y;

                      if (w == x(0)) {
                        break a;
                      }

                      D = Fa(u[a + 12 >> 2]);
                      v = j;
                      z = c;
                      t = y;
                      B = u[a + 12 >> 2];

                      if (!(D ? 0 : B == x(0))) {
                        w = x(w * x(u[a + 32 >> 2] / B));
                      }

                      t = Ya(v, z, x(t + w), f, h);
                      break a;
                    }

                    v = Fa(t);
                    t = y;

                    if (!(u[a + 32 >> 2] > x(0))) {
                      break a;
                    }

                    t = y;

                    if (v) {
                      break a;
                    }

                    w = qc(j);
                    v = Fa(w);
                    t = y;

                    if (w == x(0)) {
                      break a;
                    }

                    t = y;

                    if (v) {
                      break a;
                    }

                    t = Ya(j, c, x(y + x(w * x(u[a + 32 >> 2] / u[a + 8 >> 2]))), f, h);
                  }

                  G = s, I = Ja(j, c, h), u[G + 56 >> 2] = I;
                  w = u[s + 56 >> 2];
                  G = s, I = Ja(j, d, h), u[G + 56 >> 2] = I;
                  B = u[s + 56 >> 2];
                  C = x(t + w);
                  u[s + 32 >> 2] = C;
                  q[s + 24 >> 2] = 1;
                  v = Ea(j);
                  u[s + 56 >> 2] = u[v + 188 >> 2];

                  b: {
                    if (!Ia(s + 56 | 0)) {
                      w = x(C - w);
                      C = u[v + 188 >> 2];

                      c: {
                        if (A) {
                          u[s + 56 >> 2] = C;
                          w = x(w / u[s + 56 >> 2]);
                          break c;
                        }

                        u[s + 56 >> 2] = C;
                        w = x(w * u[s + 56 >> 2]);
                      }

                      q[s + 28 >> 2] = 1;
                      u[s + 36 >> 2] = B + w;
                      break b;
                    }

                    d: {
                      if (Fa(g)) {
                        break d;
                      }

                      if (!F | (Eb(j, d, g) | (k | 0) != 1)) {
                        break d;
                      }

                      if ((Nb(b, j) | 0) != 4) {
                        break d;
                      }

                      tc(s + 56 | 0, j, d);

                      if (q[s + 60 >> 2] == 3) {
                        break d;
                      }

                      sc(s + 16 | 0, j, d);

                      if (q[s + 20 >> 2] == 3) {
                        break d;
                      }

                      q[s + 28 >> 2] = 1;
                      u[s + 36 >> 2] = g;
                      break b;
                    }

                    if (!Eb(j, d, g)) {
                      u[s + 36 >> 2] = g;
                      G = s, H = Fa(g) ? 0 : 2, q[G + 28 >> 2] = H;
                      break b;
                    }

                    Db(s + 8 | 0, j, q[Da(1848, d) >> 2]);
                    v = q[s + 12 >> 2];
                    q[s >> 2] = q[s + 8 >> 2];
                    q[s + 4 >> 2] = v;
                    G = s, I = Bb(s, g), u[G + 56 >> 2] = I;
                    w = x(B + u[s + 56 >> 2]);
                    u[s + 36 >> 2] = w;
                    Db(s + 56 | 0, j, q[Da(1848, d) >> 2]);
                    v = q[s + 60 >> 2];
                    G = s, H = (Fa(w) | (v | 0) == 2 & (k | 0) != 1) ^ 1, q[G + 28 >> 2] = H;
                  }

                  y = x(t - y);
                  Fc(j, c, f, h, s + 24 | 0, s + 32 | 0);
                  Fc(j, d, g, h, s + 28 | 0, s + 36 | 0);
                  v = 0;

                  e: {
                    if (Eb(j, d, g)) {
                      break e;
                    }

                    if ((Nb(b, j) | 0) != 4) {
                      break e;
                    }

                    tc(s + 56 | 0, j, d);

                    if (q[s + 60 >> 2] == 3) {
                      break e;
                    }

                    sc(s + 16 | 0, j, d);
                    v = q[s + 20 >> 2] != 3;
                  }

                  E = x(E + y);
                  z = q[s + 24 >> 2];
                  D = q[s + 28 >> 2];
                  y = u[s + 32 >> 2];
                  t = u[s + 36 >> 2];
                  v = (v ^ -1) & l;
                  cc(j, A ? y : t, A ? t : y, Hb(Ga(b)), A ? z : D, A ? D : z, h, i, v, v ? 4 : 7, m, n, o, p, r);
                  De(b, Yc(Ga(b)) | Yc(Ga(j)));
                  ob(s + 48 | 0);

                  if (Oa(s + 48 | 0, s + 40 | 0)) {
                    continue;
                  }

                  break;
                }
              }

              ma = s - -64 | 0;
              return E;
            }

            function jo(a, b) {
              var c = 0,
                  d = 0,
                  e = 0,
                  f = 0;
              c = ma - 48 | 0;
              ma = c;

              a: {
                b: {
                  c: {
                    d: {
                      e: {
                        if ((vg(a) | 0) != (vg(b) | 0)) {
                          break e;
                        }

                        if ((td(a) | 0) != (td(b) | 0)) {
                          break e;
                        }

                        if ((oe(a) | 0) != (oe(b) | 0)) {
                          break e;
                        }

                        if ((ne(a) | 0) != (ne(b) | 0)) {
                          break e;
                        }

                        if ((sd(a) | 0) != (sd(b) | 0)) {
                          break e;
                        }

                        if ((_c(a) | 0) != (_c(b) | 0)) {
                          break e;
                        }

                        if ((Zc(a) | 0) != (Zc(b) | 0)) {
                          break e;
                        }

                        if ((me(a) | 0) != (me(b) | 0)) {
                          break e;
                        }

                        if ((le(a) | 0) != (le(b) | 0)) {
                          break e;
                        }

                        if ((rd(a) | 0) != (rd(b) | 0)) {
                          break e;
                        }

                        zd(c + 40 | 0, a);
                        zd(c + 32 | 0, b);
                        q[c + 12 >> 2] = q[c + 40 >> 2];
                        q[c + 8 >> 2] = q[c + 32 >> 2];

                        if (!Yg(c + 12 | 0, c + 8 | 0)) {
                          break e;
                        }

                        if (!qd(lb(a), lb(b))) {
                          break e;
                        }

                        if (!qd(Cb(a), Cb(b))) {
                          break e;
                        }

                        if (!qd(gc(a), gc(b))) {
                          break e;
                        }

                        if (!qd(_b(a), _b(b))) {
                          break e;
                        }

                        if (!ke(ad(a), ad(b))) {
                          break e;
                        }

                        if (ke(Jb(a), Jb(b))) {
                          break d;
                        }
                      }

                      d = 0;
                      break c;
                    }

                    d = 0;

                    if (!ke(Kb(a), Kb(b))) {
                      break c;
                    }

                    u[c + 24 >> 2] = u[a + 4 >> 2];
                    d = Ia(c + 24 | 0);
                    u[c + 16 >> 2] = u[b + 4 >> 2];
                    d = Ia(c + 16 | 0) ^ d ^ 1;
                  }

                  if (!d) {
                    break b;
                  }

                  u[c + 24 >> 2] = u[a + 4 >> 2];

                  f: {
                    if (Ia(c + 24 | 0)) {
                      break f;
                    }

                    u[c + 16 >> 2] = u[b + 4 >> 2];

                    if (Ia(c + 16 | 0)) {
                      break f;
                    }

                    if (!rc(u[a + 4 >> 2], u[b + 4 >> 2])) {
                      break b;
                    }
                  }

                  u[c + 24 >> 2] = u[a + 8 >> 2];
                  d = Ia(c + 24 | 0);
                  u[c + 16 >> 2] = u[b + 8 >> 2];

                  if ((Ia(c + 16 | 0) | 0) != (d | 0)) {
                    break b;
                  }

                  u[c + 24 >> 2] = u[a + 8 >> 2];

                  if (!Ia(c + 24 | 0)) {
                    if (!rc(u[a + 8 >> 2], u[b + 8 >> 2])) {
                      break b;
                    }
                  }

                  u[c + 24 >> 2] = u[a + 12 >> 2];
                  d = Ia(c + 24 | 0);
                  u[c + 16 >> 2] = u[b + 12 >> 2];

                  if ((Ia(c + 16 | 0) | 0) != (d | 0)) {
                    break b;
                  }

                  u[c + 24 >> 2] = u[b + 12 >> 2];
                  d = 1;

                  if (Ia(c + 24 | 0)) {
                    break a;
                  }

                  d = rc(u[a + 12 >> 2], u[b + 12 >> 2]);
                  break a;
                }

                d = 0;
              }

              u[c + 24 >> 2] = u[a + 188 >> 2];

              g: {
                h: {
                  if (Ia(c + 24 | 0)) {
                    u[c + 16 >> 2] = u[b + 188 >> 2];
                    e = Ia(c + 16 | 0);
                    f = d & e;

                    if (e) {
                      break g;
                    }

                    if (!!d) {
                      break h;
                    }

                    break g;
                  }

                  if (!d) {
                    break g;
                  }
                }

                f = rc(u[a + 188 >> 2], u[b + 188 >> 2]);
              }

              ma = c + 48 | 0;
              return f;
            }

            function Lm(a, b, c, d) {
              var e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = x(0),
                  j = x(0),
                  k = x(0),
                  l = 0,
                  m = 0,
                  n = x(0);
              e = ma - 208 | 0;
              ma = e;
              q[e + 152 >> 2] = 0;
              gb(e + 152 | 0, 0, 56);
              h = 1;
              Mf();
              Be(a);
              l = e, m = Ea(a), q[l + 144 >> 2] = m;
              f = a;

              a: {
                if (Eb(a, 2, b)) {
                  Db(e + 136 | 0, a, q[Da(1848, 2) >> 2]);
                  g = q[e + 140 >> 2];
                  q[e + 24 >> 2] = q[e + 136 >> 2];
                  q[e + 28 >> 2] = g;
                  l = e, n = kb(Bb(e + 24 | 0, b), Ja(a, 2, b)), u[l + 40 >> 2] = n;
                  i = u[e + 40 >> 2];
                  break a;
                }

                Gc(e + 128 | 0, e + 144 | 0, 0);
                q[e + 36 >> 2] = q[e + 128 >> 2];
                l = e, n = Pa(e + 36 | 0, b), u[l + 40 >> 2] = n;

                if (!Ia(e + 40 | 0)) {
                  Gc(e + 120 | 0, e + 144 | 0, 0);
                  q[e + 32 >> 2] = q[e + 120 >> 2];
                  l = e, n = Pa(e + 32 | 0, b), u[l + 40 >> 2] = n;
                  h = 2;
                  i = u[e + 40 >> 2];
                  break a;
                }

                h = Fa(b) ^ 1;
                i = b;
              }

              k = i;

              b: {
                if (Eb(a, 0, c)) {
                  Db(e + 112 | 0, a, q[Da(1848, 0) >> 2]);
                  g = q[e + 116 >> 2];
                  q[e + 8 >> 2] = q[e + 112 >> 2];
                  q[e + 12 >> 2] = g;
                  l = e, n = kb(Bb(e + 8 | 0, c), Ja(a, 0, b)), u[l + 40 >> 2] = n;
                  g = 1;
                  j = u[e + 40 >> 2];
                  break b;
                }

                Gc(e + 104 | 0, e + 144 | 0, 1);
                q[e + 20 >> 2] = q[e + 104 >> 2];
                l = e, n = Pa(e + 20 | 0, c), u[l + 40 >> 2] = n;

                if (!Ia(e + 40 | 0)) {
                  Gc(e + 96 | 0, e + 144 | 0, 1);
                  q[e + 16 >> 2] = q[e + 96 >> 2];
                  l = e, n = Pa(e + 16 | 0, c), u[l + 40 >> 2] = n;
                  g = 2;
                  j = u[e + 40 >> 2];
                  break b;
                }

                g = Fa(c) ^ 1;
                j = c;
              }

              if (cc(f, k, j, d, h, g, b, c, 1, 0, q[a + 556 >> 2], e + 152 | 0, 0, 0, q[2363])) {
                Ce(a, Hb(Ga(a)), b, c, b);
                be(a, +u[q[a + 556 >> 2] + 16 >> 2], 0, 0);
              }

              q[e + 40 >> 2] = 0;
              q[e + 44 >> 2] = e + 152;

              c: {
                if (!r[q[a + 556 >> 2] + 12 | 0]) {
                  break c;
                }

                if (!Co(a)) {
                  break c;
                }

                f = Pf(a);
                Be(f);
                Qg(f);
                Mf();
                Of(f);
                gb(e + 40 | 0, 0, 56);

                if (cc(f, i, j, d, h, g, b, c, 1, 0, q[f + 556 >> 2], e + 40 | 0, 0, 0, q[2363])) {
                  Ce(f, Hb(Ga(f)), b, c, b);
                  be(f, +u[q[f + 556 >> 2] + 16 >> 2], 0, 0);
                  Vb(a + 288 | 0, 3, Mg(f, a) ^ 1);
                }

                Nf(f);
                lg(f);
              }

              ma = e + 208 | 0;
            }

            function oi(a, b, c, d) {
              var e = 0,
                  h = 0,
                  i = 0,
                  j = 0,
                  k = 0,
                  l = 0,
                  m = 0;
              i = ma - 32 | 0;
              ma = i;
              e = d & 2147483647;
              k = e;
              e = e + -1006698496 | 0;
              j = c;
              h = c;

              if (c >>> 0 < 0) {
                e = e + 1 | 0;
              }

              l = h;
              h = e;
              e = k + -1140785152 | 0;
              m = j;

              if (j >>> 0 < 0) {
                e = e + 1 | 0;
              }

              a: {
                if ((e | 0) == (h | 0) & l >>> 0 < m >>> 0 | h >>> 0 < e >>> 0) {
                  e = d << 4 | c >>> 28;
                  c = c << 4 | b >>> 28;
                  b = b & 268435455;
                  j = b;

                  if ((b | 0) == 134217728 & a >>> 0 >= 1 | b >>> 0 > 134217728) {
                    e = e + 1073741824 | 0;
                    a = c + 1 | 0;

                    if (a >>> 0 < 1) {
                      e = e + 1 | 0;
                    }

                    h = a;
                    break a;
                  }

                  h = c;
                  e = e - ((c >>> 0 < 0) + -1073741824 | 0) | 0;

                  if (a | j ^ 134217728) {
                    break a;
                  }

                  a = h + (h & 1) | 0;

                  if (a >>> 0 < h >>> 0) {
                    e = e + 1 | 0;
                  }

                  h = a;
                  break a;
                }

                if (!(!j & (k | 0) == 2147418112 ? !(a | b) : (k | 0) == 2147418112 & j >>> 0 < 0 | k >>> 0 < 2147418112)) {
                  e = d << 4 | c >>> 28;
                  h = c << 4 | b >>> 28;
                  e = e & 524287 | 2146959360;
                  break a;
                }

                h = 0;
                e = 2146435072;

                if ((k | 0) == 1140785151 & j >>> 0 > 4294967295 | k >>> 0 > 1140785151) {
                  break a;
                }

                e = 0;
                j = k >>> 16 | 0;

                if (j >>> 0 < 15249) {
                  break a;
                }

                e = d & 65535 | 65536;
                qi(i + 16 | 0, a, b, c, e, j + -15233 | 0);
                pi(i, a, b, c, e, 15361 - j | 0);
                c = q[i + 4 >> 2];
                a = q[i + 8 >> 2];
                e = q[i + 12 >> 2] << 4 | a >>> 28;
                h = a << 4 | c >>> 28;
                a = c & 268435455;
                c = a;
                b = q[i >> 2] | ((q[i + 16 >> 2] | q[i + 24 >> 2]) != 0 | (q[i + 20 >> 2] | q[i + 28 >> 2]) != 0);

                if ((a | 0) == 134217728 & b >>> 0 >= 1 | a >>> 0 > 134217728) {
                  a = h + 1 | 0;

                  if (a >>> 0 < 1) {
                    e = e + 1 | 0;
                  }

                  h = a;
                  break a;
                }

                if (b | c ^ 134217728) {
                  break a;
                }

                a = h + (h & 1) | 0;

                if (a >>> 0 < h >>> 0) {
                  e = e + 1 | 0;
                }

                h = a;
              }

              ma = i + 32 | 0;
              f(0, h | 0);
              f(1, d & -2147483648 | e);
              return +g();
            }

            function Vh(a, b, c, d, e) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              d = d | 0;
              e = e | 0;
              var f = 0,
                  g = 0,
                  h = 0,
                  i = 0,
                  j = 0;

              if (Ua(a, q[b + 8 >> 2], e)) {
                Kd(b, c, d);
                return;
              }

              a: {
                if (Ua(a, q[b >> 2], e)) {
                  if (!(q[b + 20 >> 2] != (c | 0) ? q[b + 16 >> 2] != (c | 0) : 0)) {
                    if ((d | 0) != 1) {
                      break a;
                    }

                    q[b + 32 >> 2] = 1;
                    return;
                  }

                  q[b + 32 >> 2] = d;

                  if (q[b + 44 >> 2] != 4) {
                    f = a + 16 | 0;
                    i = f + (q[a + 12 >> 2] << 3) | 0;
                    j = b;

                    b: {
                      c: {
                        while (1) {
                          d: {
                            if (f >>> 0 >= i >>> 0) {
                              break d;
                            }

                            p[b + 52 >> 1] = 0;
                            Jd(f, b, c, c, 1, e);

                            if (r[b + 54 | 0]) {
                              break d;
                            }

                            e: {
                              if (!r[b + 53 | 0]) {
                                break e;
                              }

                              if (r[b + 52 | 0]) {
                                d = 1;

                                if (q[b + 24 >> 2] == 1) {
                                  break c;
                                }

                                h = 1;
                                g = 1;

                                if (r[a + 8 | 0] & 2) {
                                  break e;
                                }

                                break c;
                              }

                              h = 1;
                              d = g;

                              if (!(o[a + 8 | 0] & 1)) {
                                break c;
                              }
                            }

                            f = f + 8 | 0;
                            continue;
                          }

                          break;
                        }

                        d = g;
                        a = 4;

                        if (!h) {
                          break b;
                        }
                      }

                      a = 3;
                    }

                    q[j + 44 >> 2] = a;

                    if (d & 1) {
                      break a;
                    }
                  }

                  q[b + 20 >> 2] = c;
                  q[b + 40 >> 2] = q[b + 40 >> 2] + 1;

                  if (q[b + 36 >> 2] != 1 | q[b + 24 >> 2] != 2) {
                    break a;
                  }

                  o[b + 54 | 0] = 1;
                  return;
                }

                g = q[a + 12 >> 2];
                f = a + 16 | 0;
                cd(f, b, c, d, e);

                if ((g | 0) < 2) {
                  break a;
                }

                g = f + (g << 3) | 0;
                f = a + 24 | 0;
                a = q[a + 8 >> 2];

                if (!(q[b + 36 >> 2] != 1 ? !(a & 2) : 0)) {
                  while (1) {
                    if (r[b + 54 | 0]) {
                      break a;
                    }

                    cd(f, b, c, d, e);
                    f = f + 8 | 0;

                    if (f >>> 0 < g >>> 0) {
                      continue;
                    }

                    break;
                  }

                  break a;
                }

                if (!(a & 1)) {
                  while (1) {
                    if (r[b + 54 | 0] | q[b + 36 >> 2] == 1) {
                      break a;
                    }

                    cd(f, b, c, d, e);
                    f = f + 8 | 0;

                    if (f >>> 0 < g >>> 0) {
                      continue;
                    }

                    break a;
                  }
                }

                while (1) {
                  if (r[b + 54 | 0] | (q[b + 24 >> 2] == 1 ? q[b + 36 >> 2] == 1 : 0)) {
                    break a;
                  }

                  cd(f, b, c, d, e);
                  f = f + 8 | 0;

                  if (f >>> 0 < g >>> 0) {
                    continue;
                  }

                  break;
                }
              }
            }

            function uo(a, b) {
              var c = 0,
                  d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0;
              c = ma - 48 | 0;
              ma = c;

              a: {
                if (!vd(a, b)) {
                  break a;
                }

                if (!qo(a + 16 | 0, b + 16 | 0)) {
                  break a;
                }

                if (!vd(a + 24 | 0, b + 24 | 0)) {
                  break a;
                }

                if (!vd(a + 40 | 0, b + 40 | 0)) {
                  break a;
                }

                if (!vd(a + 56 | 0, b + 56 | 0)) {
                  break a;
                }

                if ((Hb(a) | 0) != (Hb(b) | 0)) {
                  break a;
                }

                if ((Yc(a) | 0) != (Yc(b) | 0) | q[a + 88 >> 2] != q[b + 88 >> 2] | q[a + 92 >> 2] != q[b + 92 >> 2]) {
                  break a;
                }

                e = q[b + 316 >> 2];
                q[c + 40 >> 2] = q[b + 312 >> 2];
                q[c + 44 >> 2] = e;
                e = q[b + 308 >> 2];
                q[c + 32 >> 2] = q[b + 304 >> 2];
                q[c + 36 >> 2] = e;
                e = q[b + 300 >> 2];
                q[c + 24 >> 2] = q[b + 296 >> 2];
                q[c + 28 >> 2] = e;

                if (!qg(a + 296 | 0, c + 24 | 0)) {
                  break a;
                }

                if (!rc(u[a + 80 >> 2], u[b + 80 >> 2])) {
                  break a;
                }

                e = b + 96 | 0;
                i = a + 96 | 0;

                while (1) {
                  h = mb(i, f);
                  d = mb(e, f);
                  g = q[d + 20 >> 2];
                  q[c + 16 >> 2] = q[d + 16 >> 2];
                  q[c + 20 >> 2] = g;
                  g = q[d + 12 >> 2];
                  q[c + 8 >> 2] = q[d + 8 >> 2];
                  q[c + 12 >> 2] = g;
                  g = q[d + 4 >> 2];
                  q[c >> 2] = q[d >> 2];
                  q[c + 4 >> 2] = g;
                  d = qg(h, c);

                  if (!d) {
                    break a;
                  }

                  h = f >>> 0 < 7;
                  f = f + 1 | 0;

                  if (h) {
                    continue;
                  }

                  break;
                }
              }

              a = a + 288 | 0;

              b: {
                c: {
                  if (Fa(u[Da(a, 0) >> 2])) {
                    e = Fa(u[Da(b + 288 | 0, 0) >> 2]);
                    f = e & d;

                    if (e) {
                      break b;
                    }

                    if (!!d) {
                      break c;
                    }

                    break b;
                  }

                  f = 0;

                  if (!d) {
                    break b;
                  }
                }

                f = u[Da(a, 0) >> 2] == u[Da(b + 288 | 0, 0) >> 2];
              }

              d: {
                e: {
                  if (Fa(u[Da(a, 1) >> 2])) {
                    e = Fa(u[Da(b + 288 | 0, 1) >> 2]);
                    d = e & f;

                    if (e) {
                      break d;
                    }

                    if (!!f) {
                      break e;
                    }

                    break d;
                  }

                  d = 0;

                  if (!f) {
                    break d;
                  }
                }

                d = u[Da(a, 1) >> 2] == u[Da(b + 288 | 0, 1) >> 2];
              }

              ma = c + 48 | 0;
              return d;
            }

            function fb(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0;

              if (c >>> 0 >= 512) {
                ba(a | 0, b | 0, c | 0) | 0;
                return a;
              }

              e = a + c | 0;

              a: {
                if (!((a ^ b) & 3)) {
                  b: {
                    if ((c | 0) < 1) {
                      c = a;
                      break b;
                    }

                    if (!(a & 3)) {
                      c = a;
                      break b;
                    }

                    c = a;

                    while (1) {
                      o[c | 0] = r[b | 0];
                      b = b + 1 | 0;
                      c = c + 1 | 0;

                      if (c >>> 0 >= e >>> 0) {
                        break b;
                      }

                      if (c & 3) {
                        continue;
                      }

                      break;
                    }
                  }

                  d = e & -4;

                  c: {
                    if (d >>> 0 < 64) {
                      break c;
                    }

                    f = d + -64 | 0;

                    if (c >>> 0 > f >>> 0) {
                      break c;
                    }

                    while (1) {
                      q[c >> 2] = q[b >> 2];
                      q[c + 4 >> 2] = q[b + 4 >> 2];
                      q[c + 8 >> 2] = q[b + 8 >> 2];
                      q[c + 12 >> 2] = q[b + 12 >> 2];
                      q[c + 16 >> 2] = q[b + 16 >> 2];
                      q[c + 20 >> 2] = q[b + 20 >> 2];
                      q[c + 24 >> 2] = q[b + 24 >> 2];
                      q[c + 28 >> 2] = q[b + 28 >> 2];
                      q[c + 32 >> 2] = q[b + 32 >> 2];
                      q[c + 36 >> 2] = q[b + 36 >> 2];
                      q[c + 40 >> 2] = q[b + 40 >> 2];
                      q[c + 44 >> 2] = q[b + 44 >> 2];
                      q[c + 48 >> 2] = q[b + 48 >> 2];
                      q[c + 52 >> 2] = q[b + 52 >> 2];
                      q[c + 56 >> 2] = q[b + 56 >> 2];
                      q[c + 60 >> 2] = q[b + 60 >> 2];
                      b = b - -64 | 0;
                      c = c - -64 | 0;

                      if (c >>> 0 <= f >>> 0) {
                        continue;
                      }

                      break;
                    }
                  }

                  if (c >>> 0 >= d >>> 0) {
                    break a;
                  }

                  while (1) {
                    q[c >> 2] = q[b >> 2];
                    b = b + 4 | 0;
                    c = c + 4 | 0;

                    if (c >>> 0 < d >>> 0) {
                      continue;
                    }

                    break;
                  }

                  break a;
                }

                if (e >>> 0 < 4) {
                  c = a;
                  break a;
                }

                d = e + -4 | 0;

                if (d >>> 0 < a >>> 0) {
                  c = a;
                  break a;
                }

                c = a;

                while (1) {
                  o[c | 0] = r[b | 0];
                  o[c + 1 | 0] = r[b + 1 | 0];
                  o[c + 2 | 0] = r[b + 2 | 0];
                  o[c + 3 | 0] = r[b + 3 | 0];
                  b = b + 4 | 0;
                  c = c + 4 | 0;

                  if (c >>> 0 <= d >>> 0) {
                    continue;
                  }

                  break;
                }
              }

              if (c >>> 0 < e >>> 0) {
                while (1) {
                  o[c | 0] = r[b | 0];
                  b = b + 1 | 0;
                  c = c + 1 | 0;

                  if ((e | 0) != (c | 0)) {
                    continue;
                  }

                  break;
                }
              }

              return a;
            }

            function Rm(a, b, c, d, e, f, g, h) {
              var i = 0,
                  j = 0,
                  k = x(0),
                  l = x(0),
                  m = 0,
                  n = x(0),
                  o = 0,
                  p = 0,
                  r = x(0);
              i = ma - 32 | 0;
              ma = i;
              q[a >> 2] = 0;
              q[a + 4 >> 2] = 0;
              q[a + 16 >> 2] = 0;
              q[a + 8 >> 2] = 0;
              q[a + 12 >> 2] = 0;
              m = ld(a + 20 | 0);
              q[a + 40 >> 2] = 0;
              q[a + 32 >> 2] = 0;
              q[a + 36 >> 2] = 0;
              Lf(m, Ka(Gb(q[b >> 2])));
              ac(i + 24 | 0, Ea(q[b >> 2]));
              c = dc(uc(i + 24 | 0), Ae(q[b >> 2], c));
              Jc(i + 24 | 0, Ea(q[b >> 2]));
              o = jb(i + 24 | 0);

              a: {
                if (Ka(Gb(q[b >> 2])) >>> 0 <= g >>> 0) {
                  break a;
                }

                while (1) {
                  j = ec(q[b >> 2], g);
                  q[i + 20 >> 2] = j;
                  mc(i + 24 | 0, Ea(j));

                  b: {
                    if ((eb(i + 24 | 0) | 0) == 1) {
                      break b;
                    }

                    zb(i + 8 | 0, Ea(q[i + 20 >> 2]));

                    if ((eb(i + 8 | 0) | 0) == 1) {
                      break b;
                    }

                    q[q[i + 20 >> 2] + 536 >> 2] = h;
                    p = i, r = Ja(q[i + 20 >> 2], c, e), u[p + 24 >> 2] = r;
                    k = u[i + 24 >> 2];
                    j = q[i + 20 >> 2];
                    p = i, r = Ec(j, c, u[Ga(j) + 80 >> 2], d), u[p + 24 >> 2] = r;
                    j = q[a >> 2];
                    l = u[i + 24 >> 2];

                    if (x(k + x(n + l)) > f ? !(!j | !o) : 0) {
                      break a;
                    }

                    q[a >> 2] = j + 1;
                    k = x(k + l);
                    u[a + 4 >> 2] = k + u[a + 4 >> 2];

                    if (Pg(q[i + 20 >> 2])) {
                      p = a, r = x(qc(q[i + 20 >> 2]) + u[a + 8 >> 2]), u[p + 8 >> 2] = r;
                      l = Kc(q[i + 20 >> 2]);
                      j = Ga(q[i + 20 >> 2]);
                      u[a + 12 >> 2] = u[a + 12 >> 2] - x(l * u[j + 80 >> 2]);
                    }

                    n = x(n + k);
                    Kf(m, i + 20 | 0);
                  }

                  g = g + 1 | 0;

                  if (g >>> 0 < Ka(Gb(q[b >> 2])) >>> 0) {
                    continue;
                  }

                  break;
                }
              }

              d = u[a + 8 >> 2];

              if (!(d > x(0) ^ 1 | d < x(1) ^ 1)) {
                q[a + 8 >> 2] = 1065353216;
              }

              d = u[a + 12 >> 2];

              if (!(d > x(0) ^ 1 | d < x(1) ^ 1)) {
                q[a + 12 >> 2] = 1065353216;
              }

              q[a + 16 >> 2] = g;
              ma = i + 32 | 0;
            }

            function Xh(a, b, c) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0;
              e = ma + -64 | 0;
              ma = e;

              a: {
                b: {
                  c: {
                    if (Ua(b, 8432, 0)) {
                      q[c >> 2] = 0;
                      break c;
                    }

                    if (Yh(a, b)) {
                      f = 1;
                      a = q[c >> 2];

                      if (!a) {
                        break a;
                      }

                      q[c >> 2] = q[a >> 2];
                      break a;
                    }

                    if (!b) {
                      break b;
                    }

                    b = wb(b, 8212);

                    if (!b) {
                      break a;
                    }

                    d = q[c >> 2];

                    if (d) {
                      q[c >> 2] = q[d >> 2];
                    }

                    g = q[b + 8 >> 2];
                    d = q[a + 8 >> 2];

                    if (g & (d ^ -1) & 7 | (g ^ -1) & d & 96) {
                      break a;
                    }

                    f = 1;

                    if (Ua(q[a + 12 >> 2], q[b + 12 >> 2], 0)) {
                      break a;
                    }

                    if (Ua(q[a + 12 >> 2], 8420, 0)) {
                      a = q[b + 12 >> 2];

                      if (!a) {
                        break a;
                      }

                      f = !wb(a, 8264);
                      break a;
                    }

                    d = q[a + 12 >> 2];

                    if (!d) {
                      break b;
                    }

                    f = 0;
                    d = wb(d, 8212);

                    if (d) {
                      if (!(o[a + 8 | 0] & 1)) {
                        break a;
                      }

                      f = Wh(d, q[b + 12 >> 2]);
                      break a;
                    }

                    d = q[a + 12 >> 2];

                    if (!d) {
                      break a;
                    }

                    d = wb(d, 8324);

                    if (d) {
                      if (!(o[a + 8 | 0] & 1)) {
                        break a;
                      }

                      f = Me(d, q[b + 12 >> 2]);
                      break a;
                    }

                    a = q[a + 12 >> 2];

                    if (!a) {
                      break a;
                    }

                    d = wb(a, 8116);

                    if (!d) {
                      break a;
                    }

                    a = q[b + 12 >> 2];

                    if (!a) {
                      break a;
                    }

                    a = wb(a, 8116);

                    if (!a) {
                      break a;
                    }

                    q[e + 20 >> 2] = -1;
                    q[e + 16 >> 2] = d;
                    q[e + 12 >> 2] = 0;
                    q[e + 8 >> 2] = a;
                    gb(e + 24 | 0, 0, 39);
                    q[e + 56 >> 2] = 1;
                    n[q[q[a >> 2] + 28 >> 2]](a, e + 8 | 0, q[c >> 2], 1);

                    if (q[e + 32 >> 2] != 1) {
                      break a;
                    }

                    if (!q[c >> 2]) {
                      break c;
                    }

                    q[c >> 2] = q[e + 24 >> 2];
                  }

                  f = 1;
                  break a;
                }

                f = 0;
              }

              ma = e - -64 | 0;
              return f | 0;
            }

            function Oo(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0,
                  j = 0,
                  k = 0,
                  l = 0;

              a: {
                b: {
                  c: {
                    d: {
                      e: {
                        f: {
                          g: {
                            h: {
                              i: {
                                e = b;

                                if (e) {
                                  d = c;

                                  if (!d) {
                                    break i;
                                  }

                                  break h;
                                }

                                b = a;
                                a = (a >>> 0) / (c >>> 0) | 0;
                                Mo(b - w(a, c) | 0, 0);
                                na = 0;
                                return a;
                              }

                              if (!a) {
                                break g;
                              }

                              break f;
                            }

                            g = d + -1 | 0;

                            if (!(g & d)) {
                              break e;
                            }

                            g = (z(d) + 33 | 0) - z(e) | 0;
                            h = 0 - g | 0;
                            break c;
                          }

                          a = (e >>> 0) / 0 | 0;
                          Mo(0, e - w(a, 0) | 0);
                          na = 0;
                          return a;
                        }

                        d = 32 - z(e) | 0;

                        if (d >>> 0 < 31) {
                          break d;
                        }

                        break b;
                      }

                      Mo(a & g, 0);

                      if ((d | 0) == 1) {
                        break a;
                      }

                      if (d) {
                        d = 31 - z(d + -1 ^ d) | 0;
                      } else {
                        d = 32;
                      }

                      c = d & 31;

                      if (32 <= (d & 63) >>> 0) {
                        e = 0;
                        a = b >>> c | 0;
                      } else {
                        e = b >>> c | 0;
                        a = ((1 << c) - 1 & b) << 32 - c | a >>> c;
                      }

                      na = e;
                      return a;
                    }

                    g = d + 1 | 0;
                    h = 63 - d | 0;
                  }

                  d = b;
                  e = g & 63;
                  f = e & 31;

                  if (32 <= e >>> 0) {
                    e = 0;
                    f = d >>> f | 0;
                  } else {
                    e = d >>> f | 0;
                    f = ((1 << f) - 1 & d) << 32 - f | a >>> f;
                  }

                  h = h & 63;
                  d = h & 31;

                  if (32 <= h >>> 0) {
                    b = a << d;
                    a = 0;
                  } else {
                    b = (1 << d) - 1 & a >>> 32 - d | b << d;
                    a = a << d;
                  }

                  if (g) {
                    d = -1;
                    h = c + -1 | 0;

                    if (h >>> 0 < 4294967295) {
                      d = 0;
                    }

                    while (1) {
                      i = f << 1 | b >>> 31;
                      j = i;
                      e = e << 1 | f >>> 31;
                      i = d - (e + (h >>> 0 < i >>> 0) | 0) >> 31;
                      k = c & i;
                      f = j - k | 0;
                      e = e - (j >>> 0 < k >>> 0) | 0;
                      b = b << 1 | a >>> 31;
                      a = l | a << 1;
                      i = i & 1;
                      l = i;
                      g = g + -1 | 0;

                      if (g) {
                        continue;
                      }

                      break;
                    }
                  }

                  Mo(f, e);
                  na = b << 1 | a >>> 31;
                  return i | a << 1;
                }

                Mo(a, b);
                a = 0;
                b = 0;
              }

              na = b;
              return a;
            }

            function Sm(a, b, c, d, e, f, g, h, i, j, k, l, m) {
              var n = 0,
                  o = 0,
                  p = 0,
                  r = 0,
                  s = x(0),
                  t = 0,
                  v = 0,
                  w = x(0);
              n = ma - 32 | 0;
              ma = n;
              r = Gb(a);

              a: {
                if (((Wa(g) ? d : e) | 0) != 1) {
                  break a;
                }

                t = n, v = ib(r), q[t + 8 >> 2] = v;
                t = n, v = pb(r), q[t + 24 >> 2] = v;

                b: {
                  if (!Oa(n + 8 | 0, n + 24 | 0)) {
                    break b;
                  }

                  while (1) {
                    o = q[q[n + 8 >> 2] >> 2];

                    if (Pg(o)) {
                      if (p) {
                        break b;
                      }

                      if (Ta(qc(o), x(0))) {
                        break b;
                      }

                      p = o;

                      if (Ta(Kc(o), x(0))) {
                        break b;
                      }
                    }

                    ob(n + 8 | 0);

                    if (Oa(n + 8 | 0, n + 24 | 0)) {
                      continue;
                    }

                    break;
                  }

                  break a;
                }

                p = 0;
              }

              t = n, v = ib(r), q[t + 24 >> 2] = v;
              t = n, v = pb(r), q[t + 16 >> 2] = v;

              if (Oa(n + 24 | 0, n + 16 | 0)) {
                while (1) {
                  o = q[q[n + 24 >> 2] >> 2];
                  Be(o);
                  mc(n + 8 | 0, Ea(o));

                  c: {
                    if ((eb(n + 8 | 0) | 0) == 1) {
                      If(o, k);
                      je(o);
                      Fe(o, 0);
                      break c;
                    }

                    if (i) {
                      Ce(o, Ae(o, f), Wa(g) ? b : c, Wa(g) ? c : b, b);
                    }

                    zb(n + 8 | 0, Ea(o));

                    if ((eb(n + 8 | 0) | 0) == 1) {
                      break c;
                    }

                    d: {
                      if ((o | 0) == (p | 0)) {
                        $g(p, m);
                        Ma(n, x(0));
                        Mc(p, u[n >> 2]);
                        break d;
                      }

                      Im(a, o, b, d, c, b, c, e, f, h, j, k, l, m);
                    }

                    t = n, w = kb(u[Ga(o) + 80 >> 2], Ja(o, g, b)), u[t + 8 >> 2] = w;
                    s = x(s + u[n + 8 >> 2]);
                  }

                  ob(n + 24 | 0);

                  if (Oa(n + 24 | 0, n + 16 | 0)) {
                    continue;
                  }

                  break;
                }
              }

              ma = n + 32 | 0;
              return s;
            }

            function Hm(a, b, c, d, e) {
              var f = x(0),
                  g = 0,
                  h = 0,
                  i = x(0),
                  j = x(0),
                  k = x(0),
                  l = x(0),
                  m = 0,
                  n = 0,
                  o = x(0);
              g = ma - 32 | 0;
              ma = g;
              h = a + 20 | 0;
              m = g, n = ib(h), q[m + 24 >> 2] = n;
              m = g, n = pb(h), q[m + 16 >> 2] = n;

              if (Oa(g + 24 | 0, g + 16 | 0)) {
                while (1) {
                  h = q[q[g + 24 >> 2] >> 2];
                  m = g, o = Ec(h, b, u[Ga(h) + 80 >> 2], c), u[m + 8 >> 2] = o;
                  j = u[g + 8 >> 2];
                  f = u[a + 32 >> 2];

                  a: {
                    if (!!(f < x(0))) {
                      f = x(j * x(-Kc(h)));

                      if (Fa(f) | f == x(0)) {
                        break a;
                      }

                      i = x(j + x(f * x(u[a + 32 >> 2] / u[a + 12 >> 2])));
                      f = Ya(h, b, i, d, e);

                      if (Fa(i)) {
                        break a;
                      }

                      if (Fa(f) | i == f) {
                        break a;
                      }

                      i = Kc(h);
                      k = u[Ga(h) + 80 >> 2];
                      u[a + 12 >> 2] = u[a + 12 >> 2] + x(i * k);
                      l = x(l + x(f - j));
                      break a;
                    }

                    if (Fa(f) | u[a + 32 >> 2] > x(0) ^ 1) {
                      break a;
                    }

                    f = qc(h);

                    if (Fa(f) | f == x(0)) {
                      break a;
                    }

                    k = x(j + x(f * x(u[a + 32 >> 2] / u[a + 8 >> 2])));
                    i = Ya(h, b, k, d, e);

                    if (Fa(k)) {
                      break a;
                    }

                    if (Fa(i) | k == i) {
                      break a;
                    }

                    u[a + 8 >> 2] = u[a + 8 >> 2] - f;
                    l = x(l + x(i - j));
                  }

                  ob(g + 24 | 0);

                  if (Oa(g + 24 | 0, g + 16 | 0)) {
                    continue;
                  }

                  break;
                }
              }

              u[a + 32 >> 2] = u[a + 32 >> 2] - l;
              ma = g + 32 | 0;
            }

            function qg(a, b) {
              var c = 0,
                  d = x(0),
                  e = 0,
                  f = 0,
                  g = 0;

              a: {
                b: {
                  c: {
                    d: {
                      if (q[a + 8 >> 2] == q[b + 8 >> 2]) {
                        f = q[b + 12 >> 2];
                        c = q[a + 12 >> 2];

                        if (!Fa(u[a >> 2])) {
                          break c;
                        }

                        c = (c | 0) == (f | 0);
                        break d;
                      }

                      if (!Fa(u[a >> 2])) {
                        break a;
                      }
                    }

                    d = u[b >> 2];
                    f = Fa(d);
                    e = f & c;

                    if (f) {
                      break a;
                    }

                    if (c) {
                      break b;
                    }

                    break a;
                  }

                  if ((c | 0) != (f | 0)) {
                    break a;
                  }

                  d = u[b >> 2];
                }

                e = u[a >> 2] == d;
              }

              e: {
                f: {
                  g: {
                    h: {
                      i: {
                        j: {
                          if (Fa(u[a + 4 >> 2])) {
                            d = u[b + 4 >> 2];
                            f = Fa(d);
                            c = f & e;

                            if (f) {
                              break i;
                            }

                            if (!!e) {
                              break j;
                            }

                            break i;
                          }

                          if (!e) {
                            break h;
                          }

                          d = u[b + 4 >> 2];
                        }

                        c = u[a + 4 >> 2] == d;
                      }

                      f = a + 16 | 0;
                      e = f;

                      if (Fa(u[a + 16 >> 2])) {
                        break g;
                      }

                      e = 0;

                      if (!c) {
                        break e;
                      }

                      d = u[b + 16 >> 2];
                      break f;
                    }

                    c = 0;

                    if (!Fa(u[a + 16 >> 2])) {
                      e = 0;
                      break e;
                    }

                    e = a + 16 | 0;
                  }

                  f = e;
                  d = u[b + 16 >> 2];
                  g = Fa(d);
                  e = g & c;

                  if (!c | g) {
                    break e;
                  }
                }

                e = u[f >> 2] == d;
              }

              k: {
                l: {
                  if (Fa(u[a + 20 >> 2])) {
                    d = u[b + 20 >> 2];
                    b = Fa(d);
                    c = b & e;

                    if (b) {
                      break k;
                    }

                    if (!!e) {
                      break l;
                    }

                    break k;
                  }

                  c = 0;

                  if (!e) {
                    break k;
                  }

                  d = u[b + 20 >> 2];
                }

                c = u[a + 20 >> 2] == d;
              }

              return c;
            }

            function Le(a, b, c) {
              var d = 0,
                  e = 0;

              a: {
                if ((a | 0) == (b | 0)) {
                  break a;
                }

                b: {
                  if (b + c >>> 0 > a >>> 0) {
                    e = a + c | 0;

                    if (e >>> 0 > b >>> 0) {
                      break b;
                    }
                  }

                  fb(a, b, c);
                  return;
                }

                d = (a ^ b) & 3;

                c: {
                  d: {
                    if (a >>> 0 < b >>> 0) {
                      if (d) {
                        break c;
                      }

                      if (!(a & 3)) {
                        break d;
                      }

                      while (1) {
                        if (!c) {
                          break a;
                        }

                        o[a | 0] = r[b | 0];
                        b = b + 1 | 0;
                        c = c + -1 | 0;
                        a = a + 1 | 0;

                        if (a & 3) {
                          continue;
                        }

                        break;
                      }

                      break d;
                    }

                    e: {
                      if (d) {
                        break e;
                      }

                      if (e & 3) {
                        while (1) {
                          if (!c) {
                            break a;
                          }

                          c = c + -1 | 0;
                          d = c + a | 0;
                          o[d | 0] = r[b + c | 0];

                          if (d & 3) {
                            continue;
                          }

                          break;
                        }
                      }

                      if (c >>> 0 <= 3) {
                        break e;
                      }

                      while (1) {
                        c = c + -4 | 0;
                        q[c + a >> 2] = q[b + c >> 2];

                        if (c >>> 0 > 3) {
                          continue;
                        }

                        break;
                      }
                    }

                    if (!c) {
                      break a;
                    }

                    while (1) {
                      c = c + -1 | 0;
                      o[c + a | 0] = r[b + c | 0];

                      if (c) {
                        continue;
                      }

                      break;
                    }

                    break a;
                  }

                  if (c >>> 0 <= 3) {
                    break c;
                  }

                  while (1) {
                    q[a >> 2] = q[b >> 2];
                    b = b + 4 | 0;
                    a = a + 4 | 0;
                    c = c + -4 | 0;

                    if (c >>> 0 > 3) {
                      continue;
                    }

                    break;
                  }
                }

                if (!c) {
                  break a;
                }

                while (1) {
                  o[a | 0] = r[b | 0];
                  a = a + 1 | 0;
                  b = b + 1 | 0;
                  c = c + -1 | 0;

                  if (c) {
                    continue;
                  }

                  break;
                }
              }
            }

            function Vm(a, b, c, d, e, f, g, h, i, j) {
              var k = 0,
                  l = x(0),
                  m = x(0),
                  n = x(0),
                  o = x(0),
                  p = x(0),
                  r = x(0),
                  s = 0,
                  t = x(0);
              k = ma - 48 | 0;
              ma = k;
              ub(a, Xc(a), 2200);
              p = yb(a, 2, f);
              r = yb(a, 0, f);
              s = k, t = Ja(a, 2, f), u[s + 8 >> 2] = t;
              l = u[k + 8 >> 2];
              s = k, t = Ja(a, 0, f), u[s + 8 >> 2] = t;
              m = u[k + 8 >> 2];
              b = d ? b : x(G);
              n = b;

              if (!Fa(b)) {
                n = Xa(x(0), x(x(b - l) - p));
              }

              c = e ? c : x(G);
              o = c;

              if (!Fa(c)) {
                o = Xa(x(0), x(x(c - m) - r));
              }

              a: {
                if (!((d | 0) != 1 | (e | 0) != 1)) {
                  rb(a, Ya(a, 2, x(b - l), f, f), 0);
                  rb(a, Ya(a, 0, x(c - m), g, f), 1);
                  break a;
                }

                mh(k + 40 | 0, a, n, d, o, e, i);
                q[h + 20 >> 2] = q[h + 20 >> 2] + 1;
                h = Da(h + 24 | 0, j);
                q[h >> 2] = q[h >> 2] + 1;
                q[k + 24 >> 2] = e;
                u[k + 20 >> 2] = o;
                q[k + 16 >> 2] = d;
                u[k + 12 >> 2] = n;
                q[k + 8 >> 2] = i;
                q[k + 36 >> 2] = j;
                h = q[k + 44 >> 2];
                q[k + 28 >> 2] = q[k + 40 >> 2];
                q[k + 32 >> 2] = h;
                rb(a, Ya(a, 2, d & -3 ? x(b - l) : x(p + u[k + 40 >> 2]), f, f), 0);
                rb(a, Ya(a, 0, e & -3 ? x(c - m) : x(r + u[k + 44 >> 2]), g, f), 1);
              }

              ma = k + 48 | 0;
            }

            function gb(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0;

              a: {
                if (!c) {
                  break a;
                }

                d = a + c | 0;
                o[d + -1 | 0] = b;
                o[a | 0] = b;

                if (c >>> 0 < 3) {
                  break a;
                }

                o[d + -2 | 0] = b;
                o[a + 1 | 0] = b;
                o[d + -3 | 0] = b;
                o[a + 2 | 0] = b;

                if (c >>> 0 < 7) {
                  break a;
                }

                o[d + -4 | 0] = b;
                o[a + 3 | 0] = b;

                if (c >>> 0 < 9) {
                  break a;
                }

                d = 0 - a & 3;
                e = d + a | 0;
                b = w(b & 255, 16843009);
                q[e >> 2] = b;
                c = c - d & -4;
                d = c + e | 0;
                q[d + -4 >> 2] = b;

                if (c >>> 0 < 9) {
                  break a;
                }

                q[e + 8 >> 2] = b;
                q[e + 4 >> 2] = b;
                q[d + -8 >> 2] = b;
                q[d + -12 >> 2] = b;

                if (c >>> 0 < 25) {
                  break a;
                }

                q[e + 24 >> 2] = b;
                q[e + 20 >> 2] = b;
                q[e + 16 >> 2] = b;
                q[e + 12 >> 2] = b;
                q[d + -16 >> 2] = b;
                q[d + -20 >> 2] = b;
                q[d + -24 >> 2] = b;
                q[d + -28 >> 2] = b;
                g = e & 4 | 24;
                c = c - g | 0;

                if (c >>> 0 < 32) {
                  break a;
                }

                d = b;
                f = b;
                b = e + g | 0;

                while (1) {
                  q[b + 24 >> 2] = f;
                  q[b + 28 >> 2] = d;
                  q[b + 16 >> 2] = f;
                  q[b + 20 >> 2] = d;
                  q[b + 8 >> 2] = f;
                  q[b + 12 >> 2] = d;
                  q[b >> 2] = f;
                  q[b + 4 >> 2] = d;
                  b = b + 32 | 0;
                  c = c + -32 | 0;

                  if (c >>> 0 > 31) {
                    continue;
                  }

                  break;
                }
              }

              return a;
            }

            function Bi(a, b, c) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0;
              d = ma - 32 | 0;
              ma = d;
              e = q[a + 28 >> 2];
              q[d + 16 >> 2] = e;
              f = q[a + 20 >> 2];
              q[d + 28 >> 2] = c;
              q[d + 24 >> 2] = b;
              b = f - e | 0;
              q[d + 20 >> 2] = b;
              e = b + c | 0;
              h = 2;
              b = d + 16 | 0;

              a: {
                b: {
                  c: {
                    if (!Qd(U(q[a + 60 >> 2], d + 16 | 0, 2, d + 12 | 0) | 0)) {
                      while (1) {
                        f = q[d + 12 >> 2];

                        if ((f | 0) == (e | 0)) {
                          break c;
                        }

                        if ((f | 0) <= -1) {
                          break b;
                        }

                        g = q[b + 4 >> 2];
                        i = f >>> 0 > g >>> 0;
                        b = i ? b + 8 | 0 : b;
                        g = f - (i ? g : 0) | 0;
                        q[b >> 2] = g + q[b >> 2];
                        q[b + 4 >> 2] = q[b + 4 >> 2] - g;
                        e = e - f | 0;
                        h = h - i | 0;

                        if (!Qd(U(q[a + 60 >> 2], b | 0, h | 0, d + 12 | 0) | 0)) {
                          continue;
                        }

                        break;
                      }
                    }

                    q[d + 12 >> 2] = -1;

                    if ((e | 0) != -1) {
                      break b;
                    }
                  }

                  b = q[a + 44 >> 2];
                  q[a + 28 >> 2] = b;
                  q[a + 20 >> 2] = b;
                  q[a + 16 >> 2] = b + q[a + 48 >> 2];
                  a = c;
                  break a;
                }

                q[a + 28 >> 2] = 0;
                q[a + 16 >> 2] = 0;
                q[a + 20 >> 2] = 0;
                q[a >> 2] = q[a >> 2] | 32;
                a = 0;

                if ((h | 0) == 2) {
                  break a;
                }

                a = c - q[b + 4 >> 2] | 0;
              }

              ma = d + 32 | 0;
              return a | 0;
            }

            function Hd(a) {
              var b = 0,
                  c = 0,
                  d = 0,
                  g = 0,
                  h = 0;
              h = (j(a), e(0));
              c = h >>> 23 & 255;

              if ((c | 0) == 255) {
                return x(a / a);
              }

              b = h << 1;

              if (b >>> 0 > 2130706432) {
                a: {
                  if (!c) {
                    c = 0;
                    b = h << 9;

                    if ((b | 0) >= 0) {
                      while (1) {
                        c = c + -1 | 0;
                        b = b << 1;

                        if ((b | 0) > -1) {
                          continue;
                        }

                        break;
                      }
                    }

                    b = h << 1 - c;
                    break a;
                  }

                  b = h & 8388607 | 8388608;
                }

                g = b - 8388608 | 0;
                d = (g | 0) > -1;

                if ((c | 0) > 127) {
                  while (1) {
                    b: {
                      if (!(d & 1)) {
                        break b;
                      }

                      b = g;

                      if (b) {
                        break b;
                      }

                      return x(a * x(0));
                    }

                    b = b << 1;
                    g = b - 8388608 | 0;
                    d = (g | 0) > -1;
                    c = c + -1 | 0;

                    if ((c | 0) > 127) {
                      continue;
                    }

                    break;
                  }

                  c = 127;
                }

                c: {
                  if (!d) {
                    break c;
                  }

                  b = g;

                  if (b) {
                    break c;
                  }

                  return x(a * x(0));
                }

                d: {
                  if (b >>> 0 > 8388607) {
                    d = b;
                    break d;
                  }

                  while (1) {
                    c = c + -1 | 0;
                    g = b >>> 0 < 4194304;
                    d = b << 1;
                    b = d;

                    if (g) {
                      continue;
                    }

                    break;
                  }
                }

                return f(0, h & -2147483648 | ((c | 0) >= 1 ? d + -8388608 | c << 23 : d >>> 1 - c | 0)), k();
              }

              return (b | 0) == 2130706432 ? x(a * x(0)) : a;
            }

            function Ue(a, b, c) {
              a: {
                b: {
                  if (b >>> 0 > 20) {
                    break b;
                  }

                  b = b + -9 | 0;

                  if (b >>> 0 > 9) {
                    break b;
                  }

                  c: {
                    switch (b - 1 | 0) {
                      default:
                        b = q[c >> 2];
                        q[c >> 2] = b + 4;
                        q[a >> 2] = q[b >> 2];
                        return;

                      case 0:
                        b = q[c >> 2];
                        q[c >> 2] = b + 4;
                        b = q[b >> 2];
                        q[a >> 2] = b;
                        q[a + 4 >> 2] = b >> 31;
                        return;

                      case 1:
                        b = q[c >> 2];
                        q[c >> 2] = b + 4;
                        q[a >> 2] = q[b >> 2];
                        q[a + 4 >> 2] = 0;
                        return;

                      case 3:
                        b = q[c >> 2];
                        q[c >> 2] = b + 4;
                        b = p[b >> 1];
                        q[a >> 2] = b;
                        q[a + 4 >> 2] = b >> 31;
                        return;

                      case 4:
                        b = q[c >> 2];
                        q[c >> 2] = b + 4;
                        q[a >> 2] = s[b >> 1];
                        q[a + 4 >> 2] = 0;
                        return;

                      case 5:
                        b = q[c >> 2];
                        q[c >> 2] = b + 4;
                        b = o[b | 0];
                        q[a >> 2] = b;
                        q[a + 4 >> 2] = b >> 31;
                        return;

                      case 6:
                        b = q[c >> 2];
                        q[c >> 2] = b + 4;
                        q[a >> 2] = r[b | 0];
                        q[a + 4 >> 2] = 0;
                        return;

                      case 2:
                      case 7:
                        break a;

                      case 8:
                        break c;
                    }
                  }

                  n[200](a, c);
                }

                return;
              }

              b = q[c >> 2] + 7 & -8;
              q[c >> 2] = b + 8;
              c = q[b + 4 >> 2];
              q[a >> 2] = q[b >> 2];
              q[a + 4 >> 2] = c;
            }

            function Ec(a, b, c, d) {
              var e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0,
                  j = x(0);
              e = ma - 80 | 0;
              ma = e;
              f = Wb(e + 72 | 0);
              g = Wb(e - -64 | 0);
              h = g;

              a: {
                b: {
                  if (ud(b)) {
                    b = q[Ha(Jb(Ea(a)), 1) >> 2];
                    q[e + 4 >> 2] = b;
                    q[e + 56 >> 2] = b;
                    i = f, j = Pa(e + 4 | 0, d), u[i >> 2] = j;
                    a = q[Ha(Kb(Ea(a)), 1) >> 2];
                    q[e >> 2] = a;
                    q[e + 48 >> 2] = a;
                    d = Pa(e, d);
                    break b;
                  }

                  if (!Wa(b)) {
                    d = u[g >> 2];
                    break a;
                  }

                  b = q[Ha(Jb(Ea(a)), 0) >> 2];
                  q[e + 12 >> 2] = b;
                  q[e + 40 >> 2] = b;
                  i = f, j = Pa(e + 12 | 0, d), u[i >> 2] = j;
                  a = q[Ha(Kb(Ea(a)), 0) >> 2];
                  q[e + 8 >> 2] = a;
                  q[e + 32 >> 2] = a;
                  d = Pa(e + 8 | 0, d);
                }

                u[h >> 2] = d;
              }

              c: {
                d: {
                  if (!Ed(d, u[Ma(e + 24 | 0, x(0)) >> 2])) {
                    break d;
                  }

                  if (!Ee(c, u[g >> 2])) {
                    break d;
                  }

                  c = u[g >> 2];
                  break c;
                }

                if (!Ed(u[f >> 2], u[Ma(e + 16 | 0, x(0)) >> 2])) {
                  break c;
                }

                a = Fm(c, u[f >> 2]);
                c = a ? u[f >> 2] : c;
              }

              ma = e + 80 | 0;
              return c;
            }

            function Ai(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0;
              d = ma - 208 | 0;
              ma = d;
              q[d + 204 >> 2] = c;
              c = 0;
              gb(d + 160 | 0, 0, 40);
              q[d + 200 >> 2] = q[d + 204 >> 2];

              a: {
                if ((Rd(0, b, d + 200 | 0, d + 80 | 0, d + 160 | 0) | 0) < 0) {
                  b = -1;
                  break a;
                }

                c = q[a + 76 >> 2] >= 0 ? 1 : c;
                e = q[a >> 2];

                if (o[a + 74 | 0] <= 0) {
                  q[a >> 2] = e & -33;
                }

                g = e & 32;

                b: {
                  if (q[a + 48 >> 2]) {
                    b = Rd(a, b, d + 200 | 0, d + 80 | 0, d + 160 | 0);
                    break b;
                  }

                  q[a + 48 >> 2] = 80;
                  q[a + 16 >> 2] = d + 80;
                  q[a + 28 >> 2] = d;
                  q[a + 20 >> 2] = d;
                  e = q[a + 44 >> 2];
                  q[a + 44 >> 2] = d;
                  f = Rd(a, b, d + 200 | 0, d + 80 | 0, d + 160 | 0);
                  b = f;

                  if (!e) {
                    break b;
                  }

                  n[q[a + 36 >> 2]](a, 0, 0) | 0;
                  q[a + 48 >> 2] = 0;
                  q[a + 44 >> 2] = e;
                  q[a + 28 >> 2] = 0;
                  q[a + 16 >> 2] = 0;
                  b = q[a + 20 >> 2];
                  q[a + 20 >> 2] = 0;
                  b = b ? f : -1;
                }

                f = a;
                a = q[a >> 2];
                q[f >> 2] = a | g;
                b = a & 32 ? -1 : b;

                if (!c) {
                  break a;
                }
              }

              ma = d + 208 | 0;
              return b;
            }

            function Yf(a, b, c, d, e, f, g, h, i, j, k, l, m) {
              var n = 0,
                  o = x(0),
                  p = x(0),
                  q = 0,
                  r = x(0),
                  s = x(0),
                  t = x(0),
                  v = 0;

              a: {
                if (Fa(j) ? 0 : !!(j < x(0))) {
                  break a;
                }

                if (Fa(i) ? 0 : !!(i < x(0))) {
                  break a;
                }

                r = f;
                s = b;
                t = d;
                o = h;

                b: {
                  if (!m) {
                    break b;
                  }

                  p = u[m + 16 >> 2];
                  o = h;

                  if (p == x(0)) {
                    break b;
                  }

                  s = Ob(+b, +p, 0, 0);
                  t = Ob(+d, +u[m + 16 >> 2], 0, 0);
                  r = Ob(+f, +u[m + 16 >> 2], 0, 0);
                  o = Ob(+h, +u[m + 16 >> 2], 0, 0);
                }

                p = o;
                m = 0;

                if ((a | 0) == (e | 0)) {
                  m = Ta(r, s);
                }

                if ((c | 0) == (g | 0)) {
                  v = Ta(p, t);
                }

                q = 1;
                n = 1;

                c: {
                  if (m) {
                    break c;
                  }

                  b = x(b - k);
                  n = 1;

                  if (Xf(a, b, i)) {
                    break c;
                  }

                  n = 1;

                  if (Wf(a, b, e, i)) {
                    break c;
                  }

                  n = Vf(a, b, e, f, i);
                }

                a = n;

                d: {
                  if (v) {
                    break d;
                  }

                  b = x(d - l);

                  if (Xf(c, b, j)) {
                    break d;
                  }

                  if (Wf(c, b, g, j)) {
                    break d;
                  }

                  q = Vf(c, b, g, h, j);
                }

                q = a & q;
              }

              return q;
            }

            function Sh(a, b, c, d, e, f) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              d = d | 0;
              e = e | 0;
              f = f | 0;
              var g = 0,
                  h = 0,
                  i = 0,
                  j = 0,
                  k = 0,
                  l = 0;

              if (Ua(a, q[b + 8 >> 2], f)) {
                Ld(b, c, d, e);
                return;
              }

              h = r[b + 53 | 0];
              g = q[a + 12 >> 2];
              o[b + 53 | 0] = 0;
              i = r[b + 52 | 0];
              o[b + 52 | 0] = 0;
              j = a + 16 | 0;
              Jd(j, b, c, d, e, f);
              k = r[b + 53 | 0];
              h = h | k;
              l = r[b + 52 | 0];
              i = i | l;

              a: {
                if ((g | 0) < 2) {
                  break a;
                }

                j = j + (g << 3) | 0;
                g = a + 24 | 0;

                while (1) {
                  if (r[b + 54 | 0]) {
                    break a;
                  }

                  b: {
                    if (l) {
                      if (q[b + 24 >> 2] == 1) {
                        break a;
                      }

                      if (r[a + 8 | 0] & 2) {
                        break b;
                      }

                      break a;
                    }

                    if (!k) {
                      break b;
                    }

                    if (!(o[a + 8 | 0] & 1)) {
                      break a;
                    }
                  }

                  p[b + 52 >> 1] = 0;
                  Jd(g, b, c, d, e, f);
                  k = r[b + 53 | 0];
                  h = k | h;
                  l = r[b + 52 | 0];
                  i = l | i;
                  g = g + 8 | 0;

                  if (g >>> 0 < j >>> 0) {
                    continue;
                  }

                  break;
                }
              }

              o[b + 53 | 0] = (h & 255) != 0;
              o[b + 52 | 0] = (i & 255) != 0;
            }

            function be(a, b, c, d) {
              var e = 0,
                  f = x(0),
                  g = 0,
                  h = 0,
                  i = 0,
                  j = 0,
                  k = 0,
                  l = 0,
                  m = 0,
                  n = x(0),
                  o = x(0),
                  p = x(0);

              a: {
                if (b == 0) {
                  break a;
                }

                f = u[Da(Ga(a), 0) >> 2];
                n = u[Da(Ga(a), 1) >> 2];
                o = u[Da(Ga(a) + 16 | 0, 0) >> 2];
                p = u[Da(Ga(a) + 16 | 0, 1) >> 2];
                i = +f;
                e = yd(r[a + 4 | 0], 3);
                g = (e | 0) == 1;
                Qa(a, Ob(i, b, 0, g), 0);
                j = +n;
                Qa(a, Ob(j, b, 0, g), 1);
                g = 0;
                k = +o;
                f = Hd(x(k * b));

                if (!Ta(f, x(0))) {
                  g = Ta(f, x(1)) ^ 1;
                }

                l = +p;
                f = Hd(x(l * b));

                if (!Ta(f, x(0))) {
                  m = Ta(f, x(1)) ^ 1;
                }

                c = i + c;
                e = (e | 0) == 1;
                Lc(a, x(Ob(c + k, b, e & g, e & (g ^ 1)) - Ob(c, b, 0, e)), 0);
                d = j + d;
                Lc(a, x(Ob(d + l, b, e & m, e & (m ^ 1)) - Ob(d, b, 0, e)), 1);
                e = Zb(a);

                if (!e) {
                  break a;
                }

                while (1) {
                  be(nc(a, h), b, c, d);
                  h = h + 1 | 0;

                  if ((e | 0) != (h | 0)) {
                    continue;
                  }

                  break;
                }
              }
            }

            function dh(a, b) {
              var c = 0,
                  d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0,
                  j = 0;
              d = ma - 48 | 0;
              ma = d;

              a: {
                if (q[a + 8 >> 2] != q[fc(a) >> 2]) {
                  break a;
                }

                g = a + 8 | 0;
                h = a + 4 | 0;
                c = q[a + 4 >> 2];
                e = q[a >> 2];

                if (c >>> 0 > e >>> 0) {
                  f = c;
                  c = ((c - e >> 2) + 1 | 0) / -2 << 2;
                  i = g, j = Dd(f, q[g >> 2], f + c | 0), q[i >> 2] = j;
                  q[h >> 2] = c + q[h >> 2];
                  break a;
                }

                i = d, j = q[fc(a) >> 2] - q[a >> 2] >> 1, q[i + 24 >> 2] = j;
                q[d + 44 >> 2] = 1;
                c = q[xg(d + 24 | 0, d + 44 | 0) >> 2];
                c = Oc(d + 24 | 0, c, c >>> 2 | 0, q[a + 16 >> 2]);
                e = vb(d + 16 | 0, q[a + 4 >> 2]);
                f = vb(d + 8 | 0, q[a + 8 >> 2]);
                ro(c, q[e >> 2], q[f >> 2]);
                Rb(a, c);
                Rb(h, c + 4 | 0);
                Rb(g, c + 8 | 0);
                Rb(fc(a), fc(c));
                Nc(c);
              }

              $c(q[a + 16 >> 2], q[a + 8 >> 2], b);
              q[a + 8 >> 2] = q[a + 8 >> 2] + 4;
              ma = d + 48 | 0;
            }

            function Be(a) {
              var b = 0,
                  c = 0,
                  d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0;
              b = ma - 48 | 0;
              ma = b;
              c = Ea(a);
              q[b + 44 >> 2] = 2;
              q[b + 32 >> 2] = 0;
              q[b + 36 >> 2] = 1;
              q[b + 40 >> 2] = b + 32;
              d = q[b + 40 >> 2];
              f = q[b + 40 >> 2] + (q[b + 44 >> 2] << 2) | 0;

              if ((d | 0) != (f | 0)) {
                g = a + 560 | 0;

                while (1) {
                  a = q[d >> 2];

                  a: {
                    b: {
                      if (Va(Ha(Kb(c), a))) {
                        break b;
                      }

                      h = b, i = q[Ha(Kb(c), a) >> 2], q[h + 24 >> 2] = i;
                      e = q[Ha(Jb(c), a) >> 2];
                      q[b + 16 >> 2] = e;
                      q[b + 4 >> 2] = q[b + 24 >> 2];
                      q[b >> 2] = e;

                      if (!Yg(b + 4 | 0, b)) {
                        break b;
                      }

                      Ra(b + 8 | 0, Ha(Kb(c), a));
                      break a;
                    }

                    Ra(b + 8 | 0, Ha(ad(c), a));
                  }

                  a = hc(g, a);
                  e = q[b + 12 >> 2];
                  q[a >> 2] = q[b + 8 >> 2];
                  q[a + 4 >> 2] = e;
                  d = d + 4 | 0;

                  if ((f | 0) != (d | 0)) {
                    continue;
                  }

                  break;
                }
              }

              ma = b + 48 | 0;
            }

            function wb(a, b) {
              var c = 0,
                  d = 0,
                  e = 0,
                  f = 0;
              c = ma + -64 | 0;
              ma = c;
              d = q[a >> 2];
              e = q[d + -4 >> 2];
              f = q[d + -8 >> 2];
              q[c + 20 >> 2] = 0;
              q[c + 16 >> 2] = 8068;
              q[c + 12 >> 2] = a;
              q[c + 8 >> 2] = b;
              d = 0;
              gb(c + 24 | 0, 0, 39);
              a = a + f | 0;

              a: {
                if (Ua(e, b, 0)) {
                  q[c + 56 >> 2] = 1;
                  n[q[q[e >> 2] + 20 >> 2]](e, c + 8 | 0, a, a, 1, 0);
                  d = q[c + 32 >> 2] == 1 ? a : 0;
                  break a;
                }

                n[q[q[e >> 2] + 24 >> 2]](e, c + 8 | 0, a, 1, 0);
                a = q[c + 44 >> 2];

                if (a >>> 0 > 1) {
                  break a;
                }

                if (a - 1) {
                  d = q[c + 48 >> 2] == 1 ? q[c + 36 >> 2] == 1 ? q[c + 40 >> 2] == 1 ? q[c + 28 >> 2] : 0 : 0 : 0;
                  break a;
                }

                if (q[c + 32 >> 2] != 1) {
                  if (q[c + 48 >> 2] | q[c + 36 >> 2] != 1 | q[c + 40 >> 2] != 1) {
                    break a;
                  }
                }

                d = q[c + 24 >> 2];
              }

              ma = c - -64 | 0;
              return d;
            }

            function Uh(a, b, c, d, e) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              d = d | 0;
              e = e | 0;

              if (Ua(a, q[b + 8 >> 2], e)) {
                Kd(b, c, d);
                return;
              }

              a: {
                if (Ua(a, q[b >> 2], e)) {
                  if (!(q[b + 20 >> 2] != (c | 0) ? q[b + 16 >> 2] != (c | 0) : 0)) {
                    if ((d | 0) != 1) {
                      break a;
                    }

                    q[b + 32 >> 2] = 1;
                    return;
                  }

                  q[b + 32 >> 2] = d;

                  b: {
                    if (q[b + 44 >> 2] == 4) {
                      break b;
                    }

                    p[b + 52 >> 1] = 0;
                    a = q[a + 8 >> 2];
                    n[q[q[a >> 2] + 20 >> 2]](a, b, c, c, 1, e);

                    if (r[b + 53 | 0]) {
                      q[b + 44 >> 2] = 3;

                      if (!r[b + 52 | 0]) {
                        break b;
                      }

                      break a;
                    }

                    q[b + 44 >> 2] = 4;
                  }

                  q[b + 20 >> 2] = c;
                  q[b + 40 >> 2] = q[b + 40 >> 2] + 1;

                  if (q[b + 36 >> 2] != 1 | q[b + 24 >> 2] != 2) {
                    break a;
                  }

                  o[b + 54 | 0] = 1;
                  return;
                }

                a = q[a + 8 >> 2];
                n[q[q[a >> 2] + 24 >> 2]](a, b, c, d, e);
              }
            }

            function pi(a, b, c, d, e, f) {
              var g = 0,
                  h = 0,
                  i = 0,
                  j = 0;

              a: {
                if (f & 64) {
                  c = f + -64 | 0;
                  b = c & 31;

                  if (32 <= (c & 63) >>> 0) {
                    c = 0;
                    b = e >>> b | 0;
                  } else {
                    c = e >>> b | 0;
                    b = ((1 << b) - 1 & e) << 32 - b | d >>> b;
                  }

                  d = 0;
                  e = 0;
                  break a;
                }

                if (!f) {
                  break a;
                }

                h = e;
                i = d;
                j = 64 - f | 0;
                g = j & 31;

                if (32 <= (j & 63) >>> 0) {
                  h = i << g;
                  j = 0;
                } else {
                  h = (1 << g) - 1 & i >>> 32 - g | h << g;
                  j = i << g;
                }

                i = b;
                g = f;
                b = g & 31;

                if (32 <= (g & 63) >>> 0) {
                  g = 0;
                  b = c >>> b | 0;
                } else {
                  g = c >>> b | 0;
                  b = ((1 << b) - 1 & c) << 32 - b | i >>> b;
                }

                b = j | b;
                c = g | h;
                g = d;
                d = f & 31;

                if (32 <= (f & 63) >>> 0) {
                  h = 0;
                  d = e >>> d | 0;
                } else {
                  h = e >>> d | 0;
                  d = ((1 << d) - 1 & e) << 32 - d | g >>> d;
                }

                e = h;
              }

              q[a >> 2] = b;
              q[a + 4 >> 2] = c;
              q[a + 8 >> 2] = d;
              q[a + 12 >> 2] = e;
            }

            function qi(a, b, c, d, e, f) {
              var g = 0,
                  h = 0,
                  i = 0,
                  j = 0;

              a: {
                if (f & 64) {
                  d = b;
                  e = f + -64 | 0;
                  b = e & 31;

                  if (32 <= (e & 63) >>> 0) {
                    e = d << b;
                    d = 0;
                  } else {
                    e = (1 << b) - 1 & d >>> 32 - b | c << b;
                    d = d << b;
                  }

                  b = 0;
                  c = 0;
                  break a;
                }

                if (!f) {
                  break a;
                }

                g = d;
                i = f;
                d = f & 31;

                if (32 <= (f & 63) >>> 0) {
                  h = g << d;
                  j = 0;
                } else {
                  h = (1 << d) - 1 & g >>> 32 - d | e << d;
                  j = g << d;
                }

                d = c;
                g = b;
                f = 64 - f | 0;
                e = f & 31;

                if (32 <= (f & 63) >>> 0) {
                  f = 0;
                  d = d >>> e | 0;
                } else {
                  f = d >>> e | 0;
                  d = ((1 << e) - 1 & d) << 32 - e | g >>> e;
                }

                d = j | d;
                e = f | h;
                f = b;
                b = i & 31;

                if (32 <= (i & 63) >>> 0) {
                  h = f << b;
                  b = 0;
                } else {
                  h = (1 << b) - 1 & f >>> 32 - b | c << b;
                  b = f << b;
                }

                c = h;
              }

              q[a >> 2] = b;
              q[a + 4 >> 2] = c;
              q[a + 8 >> 2] = d;
              q[a + 12 >> 2] = e;
            }

            function Tf(a, b, c, d, e) {
              var f = 0,
                  g = 0,
                  h = x(0),
                  i = x(0),
                  j = 0,
                  k = x(0);
              f = ma - 48 | 0;
              ma = f;
              g = Wa(b);
              b = Wa(b);
              g = g ? 2 : 0;
              j = f, k = Ja(a, g, e), u[j + 40 >> 2] = k;
              h = x(c - u[f + 40 >> 2]);
              c = yb(a, g, e);
              e = x(h - c);

              if (!Fa(e)) {
                b = b ^ 1;
                g = q[Ha(Jb(Ea(a)), b) >> 2];
                q[f + 12 >> 2] = g;
                q[f + 32 >> 2] = g;
                j = f, k = Pa(f + 12 | 0, d), u[j + 40 >> 2] = k;

                if (!Ia(f + 40 | 0)) {
                  i = x(u[f + 40 >> 2] - c);
                }

                a = q[Ha(Kb(Ea(a)), b) >> 2];
                q[f + 8 >> 2] = a;
                q[f + 16 >> 2] = a;
                j = f, k = Pa(f + 8 | 0, d), u[j + 24 >> 2] = k;

                if (Ia(f + 24 | 0)) {
                  c = x(3.4028234663852886e+38);
                } else {
                  c = x(u[f + 24 >> 2] - c);
                }

                e = Xa(Wd(e, c), i);
              }

              ma = f + 48 | 0;
              return e;
            }

            function Eb(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0;
              d = ma - 48 | 0;
              ma = d;
              Db(d + 40 | 0, a, q[Da(1848, b) >> 2]);
              f = Fa(u[d + 40 >> 2]);
              Db(d + 40 | 0, a, q[Da(1848, b) >> 2]);

              a: {
                b: {
                  if (q[d + 44 >> 2] == 3) {
                    break b;
                  }

                  Db(d + 32 | 0, a, q[Da(1848, b) >> 2]);

                  if (!q[d + 36 >> 2]) {
                    break b;
                  }

                  Db(d + 24 | 0, a, q[Da(1848, b) >> 2]);
                  e = 1;

                  if (!(q[d + 28 >> 2] != 1 | f)) {
                    Db(d + 16 | 0, a, q[Da(1848, b) >> 2]);

                    if (u[d + 16 >> 2] < x(0)) {
                      break b;
                    }
                  }

                  Db(d + 8 | 0, a, q[Da(1848, b) >> 2]);

                  if (q[d + 12 >> 2] != 2 | f) {
                    break a;
                  }

                  Db(d, a, q[Da(1848, b) >> 2]);
                  e = 0;

                  if (u[d >> 2] < x(0)) {
                    break a;
                  }

                  e = Fa(c) ^ 1;
                  break a;
                }

                e = 0;
              }

              ma = d + 48 | 0;
              return e;
            }

            function kd(a, b) {
              var c = 0,
                  d = 0,
                  e = 0,
                  f = x(0),
                  g = 0,
                  h = 0;
              e = ma - 32 | 0;
              ma = e;

              a: {
                if (q[a + 12 >> 2]) {
                  f = lh(a, u[Da(Ga(a) + 288 | 0, 0) >> 2], u[Da(Ga(a) + 288 | 0, 1) >> 2], b);
                  ub(a, Fa(f) ^ 1, 2246);
                  break a;
                }

                b: {
                  h = Zb(a);

                  if (h) {
                    c: {
                      while (1) {
                        c = nc(a, g);

                        if (q[c + 536 >> 2]) {
                          break c;
                        }

                        zb(e + 8 | 0, Ea(c));

                        d: {
                          if ((eb(e + 8 | 0) | 0) != 1) {
                            if ((Nb(a, c) | 0) == 5) {
                              break d;
                            }

                            if (he(c)) {
                              break d;
                            }

                            d = d ? d : c;
                          }

                          g = g + 1 | 0;

                          if ((h | 0) != (g | 0)) {
                            continue;
                          }

                          break c;
                        }

                        break;
                      }

                      d = c;
                    }

                    if (d) {
                      break b;
                    }
                  }

                  f = u[Da(Ga(a) + 288 | 0, 1) >> 2];
                  break a;
                }

                f = x(kd(d, b) + u[Da(Ga(d), 1) >> 2]);
              }

              ma = e + 32 | 0;
              return f;
            }

            function Tm(a, b, c, d, e, f, g) {
              var h = 0,
                  i = x(0),
                  j = x(0),
                  k = 0,
                  l = 0,
                  m = x(0),
                  n = x(0);
              h = ma - 16 | 0;
              ma = h;

              a: {
                b: {
                  if (Fa(b) ? 0 : !(b <= x(0) ^ 1 | (d | 0) != 2)) {
                    break b;
                  }

                  if (Fa(c) ? 0 : !(c <= x(0) ^ 1 | (e | 0) != 2)) {
                    break b;
                  }

                  if ((d | 0) != 1 | (e | 0) != 1) {
                    break a;
                  }
                }

                l = h, m = Ja(a, 0, f), u[l + 8 >> 2] = m;
                j = u[h + 8 >> 2];
                l = h, m = Ja(a, 2, f), u[l >> 2] = m;
                i = (m = x(0), n = x(b - u[h >> 2]), l = Fa(b), l ? m : n);
                rb(a, Ya(a, 2, b < x(0) ? (d | 0) == 2 ? x(0) : i : i, f, f), 0);
                k = 1;
                d = a;

                if (Fa(c)) {
                  b = x(0);
                } else {
                  b = x(c - j);
                  b = c < x(0) ? (e | 0) == 2 ? x(0) : b : b;
                }

                rb(d, Ya(a, 0, b, g, f), 1);
              }

              ma = h + 16 | 0;
              return k;
            }

            function Pf(a) {
              var b = 0,
                  c = 0,
                  d = 0,
                  e = 0,
                  f = 0,
                  g = 0;
              b = ma - 32 | 0;
              ma = b;
              c = Km(q[a + 556 >> 2]);
              d = yf(bb(576), a);
              q[d + 556 >> 2] = c;

              if (r[c + 10 | 0]) {
                $d(d);
              }

              Xb(d, 0);
              q[b + 16 >> 2] = q[d + 556 >> 2];
              c = ld(b + 16 | 0);
              Lf(c, Ka(Gb(a)));
              q[b + 12 >> 2] = 0;
              a = Gb(a);
              f = b, g = ib(a), q[f + 8 >> 2] = g;
              f = b, g = pb(a), q[f >> 2] = g;

              if (Oa(b + 8 | 0, b)) {
                while (1) {
                  a = Pf(q[q[b + 8 >> 2] >> 2]);
                  q[b + 12 >> 2] = a;
                  Xb(a, d);
                  Kf(c, b + 12 | 0);
                  ob(b + 8 | 0);

                  if (Oa(b + 8 | 0, b)) {
                    continue;
                  }

                  break;
                }
              }

              e = d + 544 | 0;
              a = c;

              if ((e | 0) != (a | 0)) {
                Jm(e, q[a >> 2], q[a + 4 >> 2]);
              }

              ve(c);
              ma = b + 32 | 0;
              return d;
            }

            function Ho(a, b) {
              var c = 0,
                  d = 0,
                  e = 0;
              c = ma - 32 | 0;
              ma = c;
              d = b + 24 | 0;
              zd(c + 16 | 0, d);
              Ra(c + 24 | 0, c + 16 | 0);

              a: {
                b: {
                  c: {
                    e = q[c + 28 >> 2];

                    if (e >>> 0 > 3) {
                      break c;
                    }

                    switch (e - 1 | 0) {
                      case 0:
                      case 1:
                        break c;

                      default:
                        break b;
                    }
                  }

                  b = q[c + 28 >> 2];
                  q[a >> 2] = q[c + 24 >> 2];
                  q[a + 4 >> 2] = b;
                  break a;
                }

                u[c + 16 >> 2] = u[d + 4 >> 2];

                d: {
                  if (Ia(c + 16 | 0)) {
                    break d;
                  }

                  u[c + 8 >> 2] = u[d + 4 >> 2];

                  if (!(u[c + 8 >> 2] > x(0))) {
                    break d;
                  }

                  b = tb(r[b + 4 | 0], 7) ? 1288 : 1272;
                  d = q[b + 4 >> 2];
                  q[a >> 2] = q[b >> 2];
                  q[a + 4 >> 2] = d;
                  break a;
                }

                b = q[323];
                q[a >> 2] = q[322];
                q[a + 4 >> 2] = b;
              }

              ma = c + 32 | 0;
            }

            function zc(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0;
              d = ma + -64 | 0;
              ma = d;
              f = d;

              a: {
                b: {
                  c: {
                    if (!Wa(b)) {
                      break c;
                    }

                    e = Cb(a + 24 | 0);
                    xb(d + 40 | 0);
                    q[d + 12 >> 2] = q[d + 40 >> 2];
                    qb(d + 48 | 0, e, 4, d + 12 | 0);

                    if (Va(d + 48 | 0)) {
                      break c;
                    }

                    a = q[d + 48 >> 2];
                    q[d + 32 >> 2] = a;
                    q[d + 8 >> 2] = a;
                    c = Pa(d + 8 | 0, c);
                    break b;
                  }

                  e = Cb(a + 24 | 0);
                  a = q[Da(1596, b) >> 2];
                  xb(d + 24 | 0);
                  q[d + 4 >> 2] = q[d + 24 >> 2];
                  qb(d + 48 | 0, e, a, d + 4 | 0);

                  if (Va(d + 48 | 0)) {
                    c = u[Ma(d + 56 | 0, x(0)) >> 2];
                    break a;
                  }

                  a = q[d + 48 >> 2];
                  q[d + 16 >> 2] = a;
                  q[d >> 2] = a;
                  c = Pa(d, c);
                }

                u[f + 56 >> 2] = c;
              }

              ma = d - -64 | 0;
              return c;
            }

            function Qc(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0;
              d = ma + -64 | 0;
              ma = d;
              f = d;

              a: {
                b: {
                  c: {
                    if (!Wa(b)) {
                      break c;
                    }

                    e = Cb(a + 24 | 0);
                    xb(d + 40 | 0);
                    q[d + 12 >> 2] = q[d + 40 >> 2];
                    qb(d + 48 | 0, e, 5, d + 12 | 0);

                    if (Va(d + 48 | 0)) {
                      break c;
                    }

                    a = q[d + 48 >> 2];
                    q[d + 32 >> 2] = a;
                    q[d + 8 >> 2] = a;
                    c = Pa(d + 8 | 0, c);
                    break b;
                  }

                  e = Cb(a + 24 | 0);
                  a = q[Da(1612, b) >> 2];
                  xb(d + 24 | 0);
                  q[d + 4 >> 2] = q[d + 24 >> 2];
                  qb(d + 48 | 0, e, a, d + 4 | 0);

                  if (Va(d + 48 | 0)) {
                    c = u[Ma(d + 56 | 0, x(0)) >> 2];
                    break a;
                  }

                  a = q[d + 48 >> 2];
                  q[d + 16 >> 2] = a;
                  q[d >> 2] = a;
                  c = Pa(d, c);
                }

                u[f + 56 >> 2] = c;
              }

              ma = d - -64 | 0;
              return c;
            }

            function ri(a, b) {
              a: {
                if (a) {
                  if (b >>> 0 <= 127) {
                    break a;
                  }

                  b: {
                    if (!q[q[2344] >> 2]) {
                      if ((b & -128) == 57216) {
                        break a;
                      }

                      break b;
                    }

                    if (b >>> 0 <= 2047) {
                      o[a + 1 | 0] = b & 63 | 128;
                      o[a | 0] = b >>> 6 | 192;
                      return 2;
                    }

                    if (!((b & -8192) != 57344 ? b >>> 0 >= 55296 : 0)) {
                      o[a + 2 | 0] = b & 63 | 128;
                      o[a | 0] = b >>> 12 | 224;
                      o[a + 1 | 0] = b >>> 6 & 63 | 128;
                      return 3;
                    }

                    if (b + -65536 >>> 0 <= 1048575) {
                      o[a + 3 | 0] = b & 63 | 128;
                      o[a | 0] = b >>> 18 | 240;
                      o[a + 2 | 0] = b >>> 6 & 63 | 128;
                      o[a + 1 | 0] = b >>> 12 & 63 | 128;
                      return 4;
                    }
                  }

                  q[2373] = 25;
                  a = -1;
                } else {
                  a = 1;
                }

                return a;
              }

              o[a | 0] = b;
              return 1;
            }

            function Fc(a, b, c, d, e, f) {
              var g = 0,
                  h = 0,
                  i = 0,
                  j = x(0),
                  k = 0,
                  l = 0;
              g = ma - 32 | 0;
              ma = g;
              h = q[Ha(Kb(Ea(a)), q[Da(1848, b) >> 2]) >> 2];
              q[g + 12 >> 2] = h;
              q[g + 16 >> 2] = h;
              i = g, j = kb(Pa(g + 12 | 0, c), Ja(a, b, d)), u[i + 24 >> 2] = j;
              a = q[e >> 2];

              a: {
                if (a >>> 0 > 2) {
                  break a;
                }

                b: {
                  switch (a - 1 | 0) {
                    case 0:
                    case 1:
                      a = f;

                      c: {
                        if (!(i = !Ia(g + 24 | 0), k = 0, l = u[f >> 2] < u[g + 24 >> 2] ^ 1, l ? i : k)) {
                          c = u[f >> 2];
                          break c;
                        }

                        c = u[g + 24 >> 2];
                      }

                      u[a >> 2] = c;
                      break a;

                    default:
                      break b;
                  }
                }

                if (Ia(g + 24 | 0)) {
                  break a;
                }

                q[e >> 2] = 2;
                u[f >> 2] = u[g + 24 >> 2];
              }

              ma = g + 32 | 0;
            }

            function si(a, b) {
              var c = 0;
              c = (b | 0) != 0;

              a: {
                b: {
                  c: {
                    d: {
                      if (!b | !(a & 3)) {
                        break d;
                      }

                      while (1) {
                        if (!r[a | 0]) {
                          break c;
                        }

                        a = a + 1 | 0;
                        b = b + -1 | 0;
                        c = (b | 0) != 0;

                        if (!b) {
                          break d;
                        }

                        if (a & 3) {
                          continue;
                        }

                        break;
                      }
                    }

                    if (!c) {
                      break b;
                    }
                  }

                  if (!r[a | 0]) {
                    break a;
                  }

                  e: {
                    if (b >>> 0 >= 4) {
                      while (1) {
                        c = q[a >> 2];

                        if ((c ^ -1) & c + -16843009 & -2139062144) {
                          break e;
                        }

                        a = a + 4 | 0;
                        b = b + -4 | 0;

                        if (b >>> 0 > 3) {
                          continue;
                        }

                        break;
                      }
                    }

                    if (!b) {
                      break b;
                    }
                  }

                  while (1) {
                    if (!r[a | 0]) {
                      break a;
                    }

                    a = a + 1 | 0;
                    b = b + -1 | 0;

                    if (b) {
                      continue;
                    }

                    break;
                  }
                }

                return 0;
              }

              return a;
            }

            function Ce(a, b, c, d, e) {
              var f = 0,
                  g = 0,
                  h = 0,
                  i = x(0);
              f = ma - 16 | 0;
              ma = f;
              g = q[a + 540 >> 2];
              ac(f + 8 | 0, a + 24 | 0);
              g = g ? b : 1;
              b = dc(uc(f + 8 | 0), g);
              g = Ge(b, g);
              c = _g(a, b, c);
              d = _g(a, g, d);
              h = f, i = kb(sb(a, b, e), c), u[h + 8 >> 2] = i;
              Qa(a, u[f + 8 >> 2], q[Da(1596, b) >> 2]);
              h = f, i = kb(Sb(a, b, e), c), u[h + 8 >> 2] = i;
              Qa(a, u[f + 8 >> 2], q[Da(1612, b) >> 2]);
              h = f, i = kb(sb(a, g, e), d), u[h + 8 >> 2] = i;
              Qa(a, u[f + 8 >> 2], q[Da(1596, g) >> 2]);
              h = f, i = kb(Sb(a, g, e), d), u[h + 8 >> 2] = i;
              Qa(a, u[f + 8 >> 2], q[Da(1612, g) >> 2]);
              ma = f + 16 | 0;
            }

            function ye(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = x(0);
              d = ma + -64 | 0;
              ma = d;
              a = a + 24 | 0;
              e = q[Ha(gc(a), 4) >> 2];
              q[d + 20 >> 2] = e;
              q[d + 48 >> 2] = e;
              f = d, g = Pa(d + 20 | 0, c), u[f + 56 >> 2] = g;

              a: {
                b: {
                  if (!Wa(b)) {
                    break b;
                  }

                  if (Va(Ha(gc(a), 4))) {
                    break b;
                  }

                  if (Ia(d + 56 | 0) | u[d + 56 >> 2] >= x(0) ^ 1) {
                    break b;
                  }

                  c = u[d + 56 >> 2];
                  break a;
                }

                a = gc(a);
                b = q[Da(1596, b) >> 2];
                wc(d + 32 | 0);
                q[d + 16 >> 2] = q[d + 32 >> 2];
                qb(d + 40 | 0, a, b, d + 16 | 0);
                q[d + 12 >> 2] = q[d + 40 >> 2];
                c = Pc(Pa(d + 12 | 0, c), u[Ma(d + 24 | 0, x(0)) >> 2]);
              }

              ma = d - -64 | 0;
              return c;
            }

            function Fg(a, b) {
              var c = 0,
                  d = 0,
                  g = x(0),
                  h = 0,
                  i = 0,
                  l = 0;
              c = ma - 32 | 0;
              ma = c;

              a: {
                if (!(b < x(1.0842021724855044e-19) ^ 1 | b > x(-1.0842021724855044e-19) ^ 1 ? b != x(0) : 0)) {
                  i = c, l = q[vb(c + 24 | 0, 2139156720) >> 2], q[i >> 2] = l;
                  vc(a, c);
                  break a;
                }

                g = (f(0, (j(b), e(0)) & -2147483648 | 1602224127), k());
                h = Ma(c + 16 | 0, b > x(0xffffff0000000000) ? g : b < x(-0xffffff0000000000) ? g : b);
                d = q[h >> 2] + -536870912 | 1073741824;
                q[h >> 2] = d;
                q[c + 4 >> 2] = d;
                q[c + 8 >> 2] = d;
                vc(a, c + 4 | 0);
              }

              ma = c + 32 | 0;
            }

            function tn(a) {
              var b = 0;
              b = ma - 16 | 0;
              ma = b;
              q[a >> 2] = 0;
              q[a + 4 >> 2] = 0;
              Wb(a + 4 | 0);
              q[a + 8 >> 2] = 0;
              Wb(a + 8 | 0);
              q[a + 12 >> 2] = 0;
              Wb(a + 12 | 0);
              Cc(a + 16 | 0);
              xd(gb(a + 20 | 0, 0, 36));
              xd(gb(a + 56 | 0, 0, 36));
              xd(gb(a + 92 | 0, 0, 36));
              xd(gb(a + 128 | 0, 0, 36));
              Cc(b);
              Ra(b + 8 | 0, b);
              $l(a + 164 | 0, b + 8 | 0);
              q[a + 172 >> 2] = 0;
              q[a + 176 >> 2] = 0;
              Ef(a + 172 | 0);
              q[a + 180 >> 2] = 0;
              q[a + 184 >> 2] = 0;
              Ef(a + 180 | 0);
              q[a + 188 >> 2] = 0;
              Wb(a + 188 | 0);
              Uc(b + 8 | 0, a);
              hd(b + 8 | 0, 1);
              ae(b + 8 | 0, a);
              hd(b + 8 | 0, 4);
              ma = b + 16 | 0;
            }

            function Gg(a, b) {
              var c = 0,
                  d = 0,
                  g = x(0),
                  h = 0,
                  i = 0,
                  l = 0;
              c = ma - 32 | 0;
              ma = c;

              a: {
                if (!(b < x(1.0842021724855044e-19) ^ 1 | b > x(-1.0842021724855044e-19) ^ 1 ? b != x(0) : 0)) {
                  i = c, l = q[vb(c + 24 | 0, 2140081935) >> 2], q[i >> 2] = l;
                  vc(a, c);
                  break a;
                }

                g = (f(0, (j(b), e(0)) & -2147483648 | 1610612735), k());
                h = Ma(c + 16 | 0, b > x(0x1fffffe0000000000) ? g : b < x(-0x1fffffe0000000000) ? g : b);
                d = q[h >> 2] + -536870912 | 0;
                q[h >> 2] = d;
                q[c + 4 >> 2] = d;
                q[c + 8 >> 2] = d;
                vc(a, c + 4 | 0);
              }

              ma = c + 32 | 0;
            }

            function ak() {
              var a = 0,
                  b = 0;
              a = ma - 32 | 0;
              ma = a;
              M(3848, 3868, 3896, 0, 3912, 27, 3915, 0, 3915, 0, 2333, 3917, 28);
              Zj();
              L(3848, 2340, 1, 3920, 3912, 30, 29);
              q[a + 28 >> 2] = 0;
              q[a + 24 >> 2] = 31;
              b = q[a + 28 >> 2];
              q[a + 16 >> 2] = q[a + 24 >> 2];
              q[a + 20 >> 2] = b;
              Yj(a + 16 | 0);
              q[a + 28 >> 2] = 0;
              q[a + 24 >> 2] = 32;
              b = q[a + 28 >> 2];
              q[a + 8 >> 2] = q[a + 24 >> 2];
              q[a + 12 >> 2] = b;
              Xj(a + 8 | 0);
              q[a + 28 >> 2] = 0;
              q[a + 24 >> 2] = 33;
              b = q[a + 28 >> 2];
              q[a >> 2] = q[a + 24 >> 2];
              q[a + 4 >> 2] = b;
              Wj(a);
              ma = a + 32 | 0;
            }

            function Kc(a) {
              var b = 0,
                  c = x(0),
                  d = 0;
              b = ma - 16 | 0;
              ma = b;
              c = x(0);

              a: {
                if (!q[a + 540 >> 2]) {
                  break a;
                }

                d = a + 24 | 0;
                u[b + 8 >> 2] = u[d + 12 >> 2];

                if (!Ia(b + 8 | 0)) {
                  u[b + 8 >> 2] = u[d + 12 >> 2];
                  c = u[b + 8 >> 2];
                  break a;
                }

                b: {
                  if (tb(r[a + 4 | 0], 7)) {
                    break b;
                  }

                  u[b + 8 >> 2] = u[d + 4 >> 2];

                  if (Ia(b + 8 | 0)) {
                    break b;
                  }

                  u[b >> 2] = u[d + 4 >> 2];

                  if (!(u[b >> 2] < x(0))) {
                    break b;
                  }

                  u[b + 8 >> 2] = u[d + 4 >> 2];
                  c = x(-u[b + 8 >> 2]);
                  break a;
                }

                c = tb(r[a + 4 | 0], 7) ? x(1) : x(0);
              }

              ma = b + 16 | 0;
              return c;
            }

            function fh(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0;
              e = ma - 32 | 0;
              ma = e;
              q[e + 24 >> 2] = b;
              b = q[a >> 2];
              f = e, g = ib(a), q[f >> 2] = g;
              b = b + (Gd(e + 24 | 0, e) << 2) | 0;

              a: {
                if (t[a + 4 >> 2] < t[Na(a) >> 2]) {
                  d = q[a + 4 >> 2];

                  if ((d | 0) == (b | 0)) {
                    He(a, c);
                    break a;
                  }

                  eh(a, b, d, b + 4 | 0);
                  d = b;

                  if (b >>> 0 <= c >>> 0) {
                    c = c >>> 0 < t[a + 4 >> 2] ? c + 4 | 0 : c;
                  }

                  q[d >> 2] = q[c >> 2];
                  break a;
                }

                d = Na(a);
                d = Oc(e, Fd(a, Ka(a) + 1 | 0), b - q[a >> 2] >> 2, d);
                dh(d, c);
                b = ch(a, d, b);
                Nc(d);
              }

              gd(b);
              ma = e + 32 | 0;
            }

            function qb(a, b, c, d) {
              var e = 0,
                  f = 0;

              if (!Va(Ha(b, c))) {
                e = a, f = q[Ha(b, c) >> 2], q[e >> 2] = f;
                return;
              }

              a: {
                if ((c & -3) != 1) {
                  break a;
                }

                if (Va(Ha(b, 7))) {
                  break a;
                }

                e = a, f = q[Ha(b, 7) >> 2], q[e >> 2] = f;
                return;
              }

              b: {
                if (!(1 << c & 53) | c >>> 0 > 5) {
                  break b;
                }

                if (Va(Ha(b, 6))) {
                  break b;
                }

                e = a, f = q[Ha(b, 6) >> 2], q[e >> 2] = f;
                return;
              }

              if (!Va(Ha(b, 8))) {
                e = a, f = q[Ha(b, 8) >> 2], q[e >> 2] = f;
                return;
              }

              if ((c & -2) == 4) {
                xb(a);
                return;
              }

              q[a >> 2] = q[d >> 2];
            }

            function Mh(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0;

              a: {
                d = q[c + 16 >> 2];

                if (!d) {
                  if (Nh(c)) {
                    break a;
                  }

                  d = q[c + 16 >> 2];
                }

                f = q[c + 20 >> 2];

                if (d - f >>> 0 < b >>> 0) {
                  n[q[c + 36 >> 2]](c, a, b) | 0;
                  return;
                }

                b: {
                  if (o[c + 75 | 0] < 0) {
                    break b;
                  }

                  d = b;

                  while (1) {
                    e = d;

                    if (!e) {
                      break b;
                    }

                    d = e + -1 | 0;

                    if (r[d + a | 0] != 10) {
                      continue;
                    }

                    break;
                  }

                  if (n[q[c + 36 >> 2]](c, a, e) >>> 0 < e >>> 0) {
                    break a;
                  }

                  b = b - e | 0;
                  a = a + e | 0;
                  f = q[c + 20 >> 2];
                }

                fb(f, a, b);
                q[c + 20 >> 2] = q[c + 20 >> 2] + b;
              }
            }

            function Ra(a, b) {
              var c = 0,
                  d = x(0);

              a: {
                d = u[b >> 2];
                c = q[b >> 2];

                if ((c | 0) != 2139156720) {
                  if ((c | 0) != 2140081935) {
                    if ((c | 0) != 2141891242) {
                      break a;
                    }

                    b = q[323];
                    q[a >> 2] = q[322];
                    q[a + 4 >> 2] = b;
                    return;
                  }

                  q[a >> 2] = 0;
                  q[a + 4 >> 2] = 1;
                  return;
                }

                q[a >> 2] = 0;
                q[a + 4 >> 2] = 2;
                return;
              }

              if (Fa(d)) {
                b = q[321];
                q[a >> 2] = q[320];
                q[a + 4 >> 2] = b;
                return;
              }

              b = q[b >> 2];
              q[a + 4 >> 2] = b & 1073741824 ? 2 : 1;
              q[a >> 2] = (b & -1073741825) + 536870912;
            }

            function yo(a, b) {
              var c = 0;
              c = q[b + 4 >> 2];
              q[a >> 2] = q[b >> 2];
              q[a + 4 >> 2] = c;
              c = q[b + 20 >> 2];
              q[a + 16 >> 2] = q[b + 16 >> 2];
              q[a + 20 >> 2] = c;
              c = q[b + 12 >> 2];
              q[a + 8 >> 2] = q[b + 8 >> 2];
              q[a + 12 >> 2] = c;
              fb(a + 24 | 0, b + 24 | 0, 192);
              fb(a + 216 | 0, b + 216 | 0, 328);
              Zf(a + 544 | 0, b + 544 | 0);
              q[a + 572 >> 2] = q[b + 572 >> 2];
              c = q[b + 568 >> 2];
              q[a + 564 >> 2] = q[b + 564 >> 2];
              q[a + 568 >> 2] = c;
              c = q[b + 560 >> 2];
              q[a + 556 >> 2] = q[b + 556 >> 2];
              q[a + 560 >> 2] = c;
            }

            function ee(a) {
              var b = 0,
                  c = 0;
              q[a >> 2] = 0;
              q[a + 4 >> 2] = 0;
              q[a + 76 >> 2] = 0;
              q[a + 80 >> 2] = 0;
              q[a + 16 >> 2] = 2143289344;
              q[a + 20 >> 2] = 2143289344;
              q[a + 8 >> 2] = 0;
              q[a + 12 >> 2] = 0;
              gb(a + 24 | 0, 0, 49);
              Wb(a + 80 | 0);
              q[a + 92 >> 2] = 0;
              q[a + 84 >> 2] = 0;
              q[a + 88 >> 2] = 0;
              c = a + 288 | 0;
              b = a + 96 | 0;

              while (1) {
                b = zf(b) + 24 | 0;

                if ((c | 0) != (b | 0)) {
                  continue;
                }

                break;
              }

              q[a + 288 >> 2] = 2143289344;
              q[a + 292 >> 2] = 2143289344;
              zf(a + 296 | 0);
              return a;
            }

            function bm(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0,
                  j = 0;
              d = ma - 48 | 0;
              ma = d;
              e = q[a + 4 >> 2];
              h = d;
              f = b;
              b = q[a + 8 >> 2];
              g = f + (b >> 1) | 0;
              f = g;

              if (b & 1) {
                e = q[q[g >> 2] + e >> 2];
              }

              i = h, j = n[e](f) | 0, q[i + 24 >> 2] = j;
              nb(d + 32 | 0, d + 24 | 0, q[a >> 2]);
              i = d, j = q[Ha(q[d + 32 >> 2] + 128 | 0, q[d + 36 >> 2]) >> 2], q[i + 40 >> 2] = j;
              a = q[c >> 2];
              q[d + 16 >> 2] = a;
              q[d + 12 >> 2] = q[d + 40 >> 2];
              q[d + 8 >> 2] = a;
              a = Qb(d + 12 | 0, d + 8 | 0);
              ma = d + 48 | 0;
              return a;
            }

            function Yl(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0,
                  j = 0;
              d = ma - 48 | 0;
              ma = d;
              e = q[a + 4 >> 2];
              h = d;
              f = b;
              b = q[a + 8 >> 2];
              g = f + (b >> 1) | 0;
              f = g;

              if (b & 1) {
                e = q[q[g >> 2] + e >> 2];
              }

              i = h, j = n[e](f) | 0, q[i + 24 >> 2] = j;
              nb(d + 32 | 0, d + 24 | 0, q[a >> 2]);
              i = d, j = q[Ha(q[d + 32 >> 2] + 164 | 0, q[d + 36 >> 2]) >> 2], q[i + 40 >> 2] = j;
              a = q[c >> 2];
              q[d + 16 >> 2] = a;
              q[d + 12 >> 2] = q[d + 40 >> 2];
              q[d + 8 >> 2] = a;
              a = Qb(d + 12 | 0, d + 8 | 0);
              ma = d + 48 | 0;
              return a;
            }

            function Wl(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0,
                  j = 0;
              d = ma - 48 | 0;
              ma = d;
              e = q[a + 4 >> 2];
              h = d;
              f = b;
              b = q[a + 8 >> 2];
              g = f + (b >> 1) | 0;
              f = g;

              if (b & 1) {
                e = q[q[g >> 2] + e >> 2];
              }

              i = h, j = n[e](f) | 0, q[i + 24 >> 2] = j;
              nb(d + 32 | 0, d + 24 | 0, q[a >> 2]);
              i = d, j = q[Ha(q[d + 32 >> 2] + 172 | 0, q[d + 36 >> 2]) >> 2], q[i + 40 >> 2] = j;
              a = q[c >> 2];
              q[d + 16 >> 2] = a;
              q[d + 12 >> 2] = q[d + 40 >> 2];
              q[d + 8 >> 2] = a;
              a = Qb(d + 12 | 0, d + 8 | 0);
              ma = d + 48 | 0;
              return a;
            }

            function Ul(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0,
                  j = 0;
              d = ma - 48 | 0;
              ma = d;
              e = q[a + 4 >> 2];
              h = d;
              f = b;
              b = q[a + 8 >> 2];
              g = f + (b >> 1) | 0;
              f = g;

              if (b & 1) {
                e = q[q[g >> 2] + e >> 2];
              }

              i = h, j = n[e](f) | 0, q[i + 24 >> 2] = j;
              nb(d + 32 | 0, d + 24 | 0, q[a >> 2]);
              i = d, j = q[Ha(q[d + 32 >> 2] + 180 | 0, q[d + 36 >> 2]) >> 2], q[i + 40 >> 2] = j;
              a = q[c >> 2];
              q[d + 16 >> 2] = a;
              q[d + 12 >> 2] = q[d + 40 >> 2];
              q[d + 8 >> 2] = a;
              a = Qb(d + 12 | 0, d + 8 | 0);
              ma = d + 48 | 0;
              return a;
            }

            function hm(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0,
                  j = 0;
              d = ma - 48 | 0;
              ma = d;
              e = q[a + 4 >> 2];
              h = d;
              f = b;
              b = q[a + 8 >> 2];
              g = f + (b >> 1) | 0;
              f = g;

              if (b & 1) {
                e = q[q[g >> 2] + e >> 2];
              }

              i = h, j = n[e](f) | 0, q[i + 24 >> 2] = j;
              nb(d + 32 | 0, d + 24 | 0, q[a >> 2]);
              i = d, j = q[Ha(q[d + 32 >> 2] + 56 | 0, q[d + 36 >> 2]) >> 2], q[i + 40 >> 2] = j;
              a = q[c >> 2];
              q[d + 16 >> 2] = a;
              q[d + 12 >> 2] = q[d + 40 >> 2];
              q[d + 8 >> 2] = a;
              a = Qb(d + 12 | 0, d + 8 | 0);
              ma = d + 48 | 0;
              return a;
            }

            function fm(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0,
                  j = 0;
              d = ma - 48 | 0;
              ma = d;
              e = q[a + 4 >> 2];
              h = d;
              f = b;
              b = q[a + 8 >> 2];
              g = f + (b >> 1) | 0;
              f = g;

              if (b & 1) {
                e = q[q[g >> 2] + e >> 2];
              }

              i = h, j = n[e](f) | 0, q[i + 24 >> 2] = j;
              nb(d + 32 | 0, d + 24 | 0, q[a >> 2]);
              i = d, j = q[Ha(q[d + 32 >> 2] + 20 | 0, q[d + 36 >> 2]) >> 2], q[i + 40 >> 2] = j;
              a = q[c >> 2];
              q[d + 16 >> 2] = a;
              q[d + 12 >> 2] = q[d + 40 >> 2];
              q[d + 8 >> 2] = a;
              a = Qb(d + 12 | 0, d + 8 | 0);
              ma = d + 48 | 0;
              return a;
            }

            function dm(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0,
                  j = 0;
              d = ma - 48 | 0;
              ma = d;
              e = q[a + 4 >> 2];
              h = d;
              f = b;
              b = q[a + 8 >> 2];
              g = f + (b >> 1) | 0;
              f = g;

              if (b & 1) {
                e = q[q[g >> 2] + e >> 2];
              }

              i = h, j = n[e](f) | 0, q[i + 24 >> 2] = j;
              nb(d + 32 | 0, d + 24 | 0, q[a >> 2]);
              i = d, j = q[Ha(q[d + 32 >> 2] + 92 | 0, q[d + 36 >> 2]) >> 2], q[i + 40 >> 2] = j;
              a = q[c >> 2];
              q[d + 16 >> 2] = a;
              q[d + 12 >> 2] = q[d + 40 >> 2];
              q[d + 8 >> 2] = a;
              a = Qb(d + 12 | 0, d + 8 | 0);
              ma = d + 48 | 0;
              return a;
            }

            function Rf(a) {
              var b = 0,
                  c = 0,
                  d = 0,
                  e = 0;
              c = ma - 16 | 0;
              ma = c;
              ac(c + 8 | 0, Ea(a));
              b = 0;

              a: {
                if (ud(uc(c + 8 | 0))) {
                  break a;
                }

                ae(c + 8 | 0, Ea(a));
                b = 1;

                if ((Vc(c + 8 | 0) | 0) == 5) {
                  break a;
                }

                e = Zb(a);
                b = 0;

                if (!e) {
                  break a;
                }

                while (1) {
                  b = nc(a, d);
                  zb(c + 8 | 0, Ea(b));

                  b: {
                    if (eb(c + 8 | 0)) {
                      break b;
                    }

                    jg(c, Ea(b));

                    if ((Vc(c) | 0) != 5) {
                      break b;
                    }

                    b = 1;
                    break a;
                  }

                  d = d + 1 | 0;

                  if ((e | 0) != (d | 0)) {
                    continue;
                  }

                  break;
                }

                b = 0;
              }

              ma = c + 16 | 0;
              return b;
            }

            function xe(a, b, c) {
              var d = 0,
                  e = x(0),
                  f = 0;
              d = ma + -64 | 0;
              ma = d;
              a = a + 24 | 0;
              f = q[Ha(gc(a), 5) >> 2];
              q[d + 20 >> 2] = f;
              q[d + 56 >> 2] = f;
              e = Pa(d + 20 | 0, c);

              a: {
                if (Wa(b)) {
                  if (Ed(e, u[Ma(d + 48 | 0, x(0)) >> 2])) {
                    break a;
                  }
                }

                a = gc(a);
                b = q[Da(1612, b) >> 2];
                wc(d + 32 | 0);
                q[d + 16 >> 2] = q[d + 32 >> 2];
                qb(d + 40 | 0, a, b, d + 16 | 0);
                q[d + 12 >> 2] = q[d + 40 >> 2];
                e = Pc(Pa(d + 12 | 0, c), u[Ma(d + 24 | 0, x(0)) >> 2]);
              }

              ma = d - -64 | 0;
              return e;
            }

            function ai(a, b, c) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              var d = 0,
                  e = 0;
              d = ma + -64 | 0;
              ma = d;
              e = 1;

              a: {
                if (Ua(a, b, 0)) {
                  break a;
                }

                e = 0;

                if (!b) {
                  break a;
                }

                b = wb(b, 8116);
                e = 0;

                if (!b) {
                  break a;
                }

                q[d + 20 >> 2] = -1;
                q[d + 16 >> 2] = a;
                q[d + 12 >> 2] = 0;
                q[d + 8 >> 2] = b;
                gb(d + 24 | 0, 0, 39);
                q[d + 56 >> 2] = 1;
                n[q[q[b >> 2] + 28 >> 2]](b, d + 8 | 0, q[c >> 2], 1);
                e = 0;

                if (q[d + 32 >> 2] != 1) {
                  break a;
                }

                q[c >> 2] = q[d + 24 >> 2];
                e = 1;
              }

              ma = d - -64 | 0;
              return e | 0;
            }

            function Ld(a, b, c, d) {
              o[a + 53 | 0] = 1;

              a: {
                if (q[a + 4 >> 2] != (c | 0)) {
                  break a;
                }

                o[a + 52 | 0] = 1;
                c = q[a + 16 >> 2];

                if (!c) {
                  q[a + 36 >> 2] = 1;
                  q[a + 24 >> 2] = d;
                  q[a + 16 >> 2] = b;

                  if ((d | 0) != 1 | q[a + 48 >> 2] != 1) {
                    break a;
                  }

                  o[a + 54 | 0] = 1;
                  return;
                }

                if ((b | 0) == (c | 0)) {
                  c = q[a + 24 >> 2];

                  if ((c | 0) == 2) {
                    q[a + 24 >> 2] = d;
                    c = d;
                  }

                  if (q[a + 48 >> 2] != 1 | (c | 0) != 1) {
                    break a;
                  }

                  o[a + 54 | 0] = 1;
                  return;
                }

                o[a + 54 | 0] = 1;
                q[a + 36 >> 2] = q[a + 36 >> 2] + 1;
              }
            }

            function Wh(a, b) {
              var c = 0,
                  d = 0;

              a: {
                while (1) {
                  if (!b) {
                    return 0;
                  }

                  b = wb(b, 8212);

                  if (!b | q[b + 8 >> 2] & (q[a + 8 >> 2] ^ -1)) {
                    break a;
                  }

                  if (Ua(q[a + 12 >> 2], q[b + 12 >> 2], 0)) {
                    return 1;
                  }

                  if (!(o[a + 8 | 0] & 1)) {
                    break a;
                  }

                  c = q[a + 12 >> 2];

                  if (!c) {
                    break a;
                  }

                  c = wb(c, 8212);

                  if (c) {
                    b = q[b + 12 >> 2];
                    a = c;
                    continue;
                  }

                  break;
                }

                a = q[a + 12 >> 2];

                if (!a) {
                  break a;
                }

                a = wb(a, 8324);

                if (!a) {
                  break a;
                }

                d = Me(a, q[b + 12 >> 2]);
              }

              return d;
            }

            function Mg(a, b) {
              var c = 0,
                  d = 0,
                  e = 0,
                  f = 0;
              d = ma - 320 | 0;
              ma = d;
              c = a + 544 | 0;
              e = b + 544 | 0;

              a: {
                if ((Ka(c) | 0) != (Ka(e) | 0)) {
                  break a;
                }

                if (Ao(a + 216 | 0, fb(d, b + 216 | 0, 320))) {
                  break a;
                }

                f = 1;

                if (!Ka(c)) {
                  break a;
                }

                if (!Ka(c)) {
                  break a;
                }

                a = 0;

                b: {
                  while (1) {
                    b = q[Lg(e, a) >> 2];

                    if (!Mg(q[Lg(c, a) >> 2], b)) {
                      break b;
                    }

                    a = a + 1 | 0;

                    if (a >>> 0 < Ka(c) >>> 0) {
                      continue;
                    }

                    break;
                  }

                  break a;
                }

                f = 0;
              }

              ma = d + 320 | 0;
              return f;
            }

            function Ke(a) {
              var b = 0,
                  c = 0,
                  d = 0;

              a: {
                b: {
                  b = a;

                  if (!(b & 3)) {
                    break b;
                  }

                  if (!r[a | 0]) {
                    return 0;
                  }

                  while (1) {
                    b = b + 1 | 0;

                    if (!(b & 3)) {
                      break b;
                    }

                    if (r[b | 0]) {
                      continue;
                    }

                    break;
                  }

                  break a;
                }

                while (1) {
                  c = b;
                  b = b + 4 | 0;
                  d = q[c >> 2];

                  if (!((d ^ -1) & d + -16843009 & -2139062144)) {
                    continue;
                  }

                  break;
                }

                if (!(d & 255)) {
                  return c - a | 0;
                }

                while (1) {
                  d = r[c + 1 | 0];
                  b = c + 1 | 0;
                  c = b;

                  if (d) {
                    continue;
                  }

                  break;
                }
              }

              return b - a | 0;
            }

            function Ob(a, b, c, d) {
              var e = x(0),
                  f = 0;
              a = a * b;
              e = Hd(x(a));
              e = e < x(0) ? x(e + x(1)) : e;

              a: {
                if (Ta(e, x(0))) {
                  a = a - +e;
                  break a;
                }

                a = a - +e;

                if (Ta(e, x(1))) {
                  a = a + 1;
                  break a;
                }

                if (c) {
                  a = a + 1;
                  break a;
                }

                if (d) {
                  break a;
                }

                f = 0;

                b: {
                  if (Fa(e)) {
                    break b;
                  }

                  f = 1;

                  if (e > x(.5)) {
                    break b;
                  }

                  f = Ta(e, x(.5)) ? 1 : 0;
                }

                a = a + f;
              }

              e = x(G);

              c: {
                if (Fa(x(a))) {
                  break c;
                }

                if (Fa(x(b))) {
                  break c;
                }

                e = x(a / b);
              }

              return e;
            }

            function bf() {
              ga(8420, 5524);
              fa(8444, 5529, 1, 1, 0);
              Ui();
              Ti();
              Si();
              Ri();
              Qi();
              Pi();
              Oi();
              Ni();
              Mi();
              Li();
              Ki();
              W(4736, 5635);
              W(6380, 5647);
              Q(6468, 4, 5680);
              Q(6560, 2, 5693);
              Q(6652, 4, 5708);
              ea(4556, 5723);
              Ji();
              af(5769);
              $e(5806);

              _e(5845);

              Ze(5876);
              Ye(5916);
              Xe(5945);
              Ii();
              Hi();
              af(6052);
              $e(6084);

              _e(6117);

              Ze(6150);
              Ye(6184);
              Xe(6217);
              Gi();
              Fi();
            }

            function Th(a, b, c, d, e) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              d = d | 0;
              e = e | 0;

              if (Ua(a, q[b + 8 >> 2], e)) {
                Kd(b, c, d);
                return;
              }

              a: {
                if (!Ua(a, q[b >> 2], e)) {
                  break a;
                }

                if (!(q[b + 20 >> 2] != (c | 0) ? q[b + 16 >> 2] != (c | 0) : 0)) {
                  if ((d | 0) != 1) {
                    break a;
                  }

                  q[b + 32 >> 2] = 1;
                  return;
                }

                q[b + 20 >> 2] = c;
                q[b + 32 >> 2] = d;
                q[b + 40 >> 2] = q[b + 40 >> 2] + 1;

                if (!(q[b + 36 >> 2] != 1 | q[b + 24 >> 2] != 2)) {
                  o[b + 54 | 0] = 1;
                }

                q[b + 44 >> 2] = 4;
              }
            }

            function sb(a, b, c) {
              var d = 0,
                  e = 0;
              d = ma - 48 | 0;
              ma = d;

              a: {
                b: {
                  if (!Wa(b)) {
                    break b;
                  }

                  e = a + 24 | 0;

                  if (Va(Ha(lb(e), 4))) {
                    break b;
                  }

                  a = q[Ha(lb(e), 4) >> 2];
                  q[d + 20 >> 2] = a;
                  q[d + 40 >> 2] = a;
                  c = bd(d + 20 | 0, c);
                  break a;
                }

                a = lb(a + 24 | 0);
                b = q[Da(1596, b) >> 2];
                wc(d + 24 | 0);
                q[d + 16 >> 2] = q[d + 24 >> 2];
                qb(d + 32 | 0, a, b, d + 16 | 0);
                q[d + 12 >> 2] = q[d + 32 >> 2];
                c = bd(d + 12 | 0, c);
              }

              ma = d + 48 | 0;
              return c;
            }

            function Sb(a, b, c) {
              var d = 0,
                  e = 0;
              d = ma - 48 | 0;
              ma = d;

              a: {
                b: {
                  if (!Wa(b)) {
                    break b;
                  }

                  e = a + 24 | 0;

                  if (Va(Ha(lb(e), 5))) {
                    break b;
                  }

                  a = q[Ha(lb(e), 5) >> 2];
                  q[d + 20 >> 2] = a;
                  q[d + 40 >> 2] = a;
                  c = bd(d + 20 | 0, c);
                  break a;
                }

                a = lb(a + 24 | 0);
                b = q[Da(1612, b) >> 2];
                wc(d + 24 | 0);
                q[d + 16 >> 2] = q[d + 24 >> 2];
                qb(d + 32 | 0, a, b, d + 16 | 0);
                q[d + 12 >> 2] = q[d + 32 >> 2];
                c = bd(d + 12 | 0, c);
              }

              ma = d + 48 | 0;
              return c;
            }

            function xc(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0;

              a: {
                if ((b | 0) == 1 & a >>> 0 < 0 | b >>> 0 < 1) {
                  d = a;
                  break a;
                }

                while (1) {
                  d = Qo(a, b, 10);
                  e = na;
                  f = e;
                  e = Po(d, e, 10);
                  c = c + -1 | 0;
                  o[c | 0] = a - e | 48;
                  e = (b | 0) == 9 & a >>> 0 > 4294967295 | b >>> 0 > 9;
                  a = d;
                  b = f;

                  if (e) {
                    continue;
                  }

                  break;
                }
              }

              if (d) {
                while (1) {
                  c = c + -1 | 0;
                  a = (d >>> 0) / 10 | 0;
                  o[c | 0] = d - w(a, 10) | 48;
                  b = d >>> 0 > 9;
                  d = a;

                  if (b) {
                    continue;
                  }

                  break;
                }
              }

              return c;
            }

            function xo(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 16 | 0;
              ma = c;
              vb(a, 0);
              d = q[b + 4 >> 2];

              a: {
                if (d >>> 0 > 3) {
                  break a;
                }

                b: {
                  switch (d - 1 | 0) {
                    default:
                      xb(c + 8 | 0);
                      q[a >> 2] = q[c + 8 >> 2];
                      break a;

                    case 2:
                      Cc(c + 8 | 0);
                      q[a >> 2] = q[c + 8 >> 2];
                      break a;

                    case 0:
                      Gg(c + 8 | 0, u[b >> 2]);
                      q[a >> 2] = q[c + 8 >> 2];
                      break a;

                    case 1:
                      break b;
                  }
                }

                Fg(c + 8 | 0, u[b >> 2]);
                q[a >> 2] = q[c + 8 >> 2];
              }

              ma = c + 16 | 0;
              return a;
            }

            function Em(a, b) {
              var c = 0,
                  d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0;
              c = ma - 16 | 0;
              ma = c;
              d = a + 544 | 0;
              g = c, h = ib(d), q[g + 8 >> 2] = h;
              g = c, h = pb(d), q[g >> 2] = h;

              if (Oa(c + 8 | 0, c)) {
                d = 0;

                while (1) {
                  e = q[c + 8 >> 2];

                  if (q[q[e >> 2] + 540 >> 2] != (a | 0)) {
                    f = Ig(q[a + 556 >> 2], q[e >> 2], a, d, b);
                    q[e >> 2] = f;
                    Xb(f, a);
                  }

                  n[24](q[e >> 2], b);
                  d = d + 1 | 0;
                  ob(c + 8 | 0);

                  if (Oa(c + 8 | 0, c)) {
                    continue;
                  }

                  break;
                }
              }

              ma = c + 16 | 0;
            }

            function pc(a, b) {
              var c = 0,
                  d = x(0),
                  e = 0;
              c = ma - 32 | 0;
              ma = c;

              a: {
                b: {
                  if (!Wa(b)) {
                    break b;
                  }

                  e = a + 24 | 0;

                  if (Va(Ha(_b(e), 5))) {
                    break b;
                  }

                  Ra(c + 24 | 0, Ha(_b(e), 5));
                  d = u[c + 24 >> 2];

                  if (d >= x(0)) {
                    break a;
                  }
                }

                a = _b(a + 24 | 0);
                b = q[Da(1612, b) >> 2];
                wc(c + 8 | 0);
                q[c + 4 >> 2] = q[c + 8 >> 2];
                qb(c + 16 | 0, a, b, c + 4 | 0);
                Ra(c + 24 | 0, c + 16 | 0);
                d = Xa(u[c + 24 >> 2], x(0));
              }

              ma = c + 32 | 0;
              return d;
            }

            function $b(a, b) {
              var c = 0,
                  d = x(0),
                  e = 0;
              c = ma - 32 | 0;
              ma = c;

              a: {
                b: {
                  if (!Wa(b)) {
                    break b;
                  }

                  e = a + 24 | 0;

                  if (Va(Ha(_b(e), 4))) {
                    break b;
                  }

                  Ra(c + 24 | 0, Ha(_b(e), 4));
                  d = u[c + 24 >> 2];

                  if (d >= x(0)) {
                    break a;
                  }
                }

                a = _b(a + 24 | 0);
                b = q[Da(1596, b) >> 2];
                wc(c + 8 | 0);
                q[c + 4 >> 2] = q[c + 8 >> 2];
                qb(c + 16 | 0, a, b, c + 4 | 0);
                Ra(c + 24 | 0, c + 16 | 0);
                d = Xa(u[c + 24 >> 2], x(0));
              }

              ma = c + 32 | 0;
              return d;
            }

            function mi(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0;
              e = ma - 16 | 0;
              ma = e;

              if (4294967279 >= c >>> 0) {
                a: {
                  if (c >>> 0 <= 10) {
                    o[a + 11 | 0] = c;
                    d = a;
                    break a;
                  }

                  f = li(c) + 1 | 0;
                  d = f;

                  if (4294967295 < d >>> 0) {
                    wd(7689);
                    F();
                  }

                  d = bb(d);
                  q[a >> 2] = d;
                  q[a + 8 >> 2] = f | -2147483648;
                  q[a + 4 >> 2] = c;
                }

                f = d;
                a = c;

                if (c) {
                  fb(f, b, a);
                }

                o[e + 15 | 0] = 0;
                o[c + d | 0] = r[e + 15 | 0];
                ma = e + 16 | 0;
                return;
              }

              wd(7676);
              F();
            }

            function Jm(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0;
              d = ma - 16 | 0;
              ma = d;
              e = c - b >> 2;

              a: {
                if (e >>> 0 <= Ib(a) >>> 0) {
                  q[d + 12 >> 2] = c;

                  if (e >>> 0 > Ka(a) >>> 0) {
                    q[d + 12 >> 2] = b;
                    f = Ka(a);
                    q[d + 12 >> 2] = q[d + 12 >> 2] + (f << 2);
                    Dd(b, q[d + 12 >> 2], q[a >> 2]);
                    ue(a, q[d + 12 >> 2], c, e - Ka(a) | 0);
                    break a;
                  }

                  ah(a, Dd(b, c, q[a >> 2]));
                  break a;
                }

                yg(a);
                Eg(a, Fd(a, e));
                ue(a, b, c, e);
              }

              ma = d + 16 | 0;
            }

            function Fo(a, b) {
              var c = 0,
                  d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0;
              c = ma - 16 | 0;
              ma = c;
              d = a + 544 | 0;
              g = c, h = ib(d), q[g + 8 >> 2] = h;
              g = c, h = pb(d), q[g >> 2] = h;

              if (Oa(c + 8 | 0, c)) {
                d = 0;

                while (1) {
                  e = q[c + 8 >> 2];

                  if (q[q[e >> 2] + 540 >> 2] != (a | 0)) {
                    f = e;
                    e = Ig(q[a + 556 >> 2], q[e >> 2], a, d, b);
                    q[f >> 2] = e;
                    Xb(e, a);
                  }

                  d = d + 1 | 0;
                  ob(c + 8 | 0);

                  if (Oa(c + 8 | 0, c)) {
                    continue;
                  }

                  break;
                }
              }

              ma = c + 16 | 0;
            }

            function qc(a) {
              var b = 0,
                  c = x(0);
              b = ma - 16 | 0;
              ma = b;

              a: {
                if (!q[a + 540 >> 2]) {
                  break a;
                }

                a = a + 24 | 0;
                u[b + 8 >> 2] = u[a + 8 >> 2];

                if (!Ia(b + 8 | 0)) {
                  u[b + 8 >> 2] = u[a + 8 >> 2];
                  c = u[b + 8 >> 2];
                  break a;
                }

                u[b + 8 >> 2] = u[a + 4 >> 2];

                if (Ia(b + 8 | 0)) {
                  break a;
                }

                u[b >> 2] = u[a + 4 >> 2];

                if (!(u[b >> 2] > x(0))) {
                  break a;
                }

                u[b + 8 >> 2] = u[a + 4 >> 2];
                c = u[b + 8 >> 2];
              }

              ma = b + 16 | 0;
              return c;
            }

            function am(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0;
              d = ma - 32 | 0;
              ma = d;
              q[d + 24 >> 2] = q[c >> 2];
              c = q[a + 4 >> 2];
              f = d;
              e = b;
              b = q[a + 8 >> 2];
              e = e + (b >> 1) | 0;
              g = e;

              if (b & 1) {
                c = q[c + q[e >> 2] >> 2];
              }

              h = f, i = n[c](g) | 0, q[h + 8 >> 2] = i;
              nb(d + 16 | 0, d + 8 | 0, q[a >> 2]);
              q[d + 4 >> 2] = q[d + 24 >> 2];
              h = Ha(q[d + 16 >> 2] + 128 | 0, q[d + 20 >> 2]), i = q[d + 4 >> 2], q[h >> 2] = i;
              ma = d + 32 | 0;
            }

            function Xl(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0;
              d = ma - 32 | 0;
              ma = d;
              q[d + 24 >> 2] = q[c >> 2];
              c = q[a + 4 >> 2];
              f = d;
              e = b;
              b = q[a + 8 >> 2];
              e = e + (b >> 1) | 0;
              g = e;

              if (b & 1) {
                c = q[c + q[e >> 2] >> 2];
              }

              h = f, i = n[c](g) | 0, q[h + 8 >> 2] = i;
              nb(d + 16 | 0, d + 8 | 0, q[a >> 2]);
              q[d + 4 >> 2] = q[d + 24 >> 2];
              h = Ha(q[d + 16 >> 2] + 164 | 0, q[d + 20 >> 2]), i = q[d + 4 >> 2], q[h >> 2] = i;
              ma = d + 32 | 0;
            }

            function Vl(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0;
              d = ma - 32 | 0;
              ma = d;
              q[d + 24 >> 2] = q[c >> 2];
              c = q[a + 4 >> 2];
              f = d;
              e = b;
              b = q[a + 8 >> 2];
              e = e + (b >> 1) | 0;
              g = e;

              if (b & 1) {
                c = q[c + q[e >> 2] >> 2];
              }

              h = f, i = n[c](g) | 0, q[h + 8 >> 2] = i;
              nb(d + 16 | 0, d + 8 | 0, q[a >> 2]);
              q[d + 4 >> 2] = q[d + 24 >> 2];
              h = Ha(q[d + 16 >> 2] + 172 | 0, q[d + 20 >> 2]), i = q[d + 4 >> 2], q[h >> 2] = i;
              ma = d + 32 | 0;
            }

            function Tl(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0;
              d = ma - 32 | 0;
              ma = d;
              q[d + 24 >> 2] = q[c >> 2];
              c = q[a + 4 >> 2];
              f = d;
              e = b;
              b = q[a + 8 >> 2];
              e = e + (b >> 1) | 0;
              g = e;

              if (b & 1) {
                c = q[c + q[e >> 2] >> 2];
              }

              h = f, i = n[c](g) | 0, q[h + 8 >> 2] = i;
              nb(d + 16 | 0, d + 8 | 0, q[a >> 2]);
              q[d + 4 >> 2] = q[d + 24 >> 2];
              h = Ha(q[d + 16 >> 2] + 180 | 0, q[d + 20 >> 2]), i = q[d + 4 >> 2], q[h >> 2] = i;
              ma = d + 32 | 0;
            }

            function gm(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0;
              d = ma - 32 | 0;
              ma = d;
              q[d + 24 >> 2] = q[c >> 2];
              c = q[a + 4 >> 2];
              f = d;
              e = b;
              b = q[a + 8 >> 2];
              e = e + (b >> 1) | 0;
              g = e;

              if (b & 1) {
                c = q[c + q[e >> 2] >> 2];
              }

              h = f, i = n[c](g) | 0, q[h + 8 >> 2] = i;
              nb(d + 16 | 0, d + 8 | 0, q[a >> 2]);
              q[d + 4 >> 2] = q[d + 24 >> 2];
              h = Ha(q[d + 16 >> 2] + 56 | 0, q[d + 20 >> 2]), i = q[d + 4 >> 2], q[h >> 2] = i;
              ma = d + 32 | 0;
            }

            function em(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0;
              d = ma - 32 | 0;
              ma = d;
              q[d + 24 >> 2] = q[c >> 2];
              c = q[a + 4 >> 2];
              f = d;
              e = b;
              b = q[a + 8 >> 2];
              e = e + (b >> 1) | 0;
              g = e;

              if (b & 1) {
                c = q[c + q[e >> 2] >> 2];
              }

              h = f, i = n[c](g) | 0, q[h + 8 >> 2] = i;
              nb(d + 16 | 0, d + 8 | 0, q[a >> 2]);
              q[d + 4 >> 2] = q[d + 24 >> 2];
              h = Ha(q[d + 16 >> 2] + 20 | 0, q[d + 20 >> 2]), i = q[d + 4 >> 2], q[h >> 2] = i;
              ma = d + 32 | 0;
            }

            function cm(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0;
              d = ma - 32 | 0;
              ma = d;
              q[d + 24 >> 2] = q[c >> 2];
              c = q[a + 4 >> 2];
              f = d;
              e = b;
              b = q[a + 8 >> 2];
              e = e + (b >> 1) | 0;
              g = e;

              if (b & 1) {
                c = q[c + q[e >> 2] >> 2];
              }

              h = f, i = n[c](g) | 0, q[h + 8 >> 2] = i;
              nb(d + 16 | 0, d + 8 | 0, q[a >> 2]);
              q[d + 4 >> 2] = q[d + 24 >> 2];
              h = Ha(q[d + 16 >> 2] + 92 | 0, q[d + 20 >> 2]), i = q[d + 4 >> 2], q[h >> 2] = i;
              ma = d + 32 | 0;
            }

            function Kg(a, b) {
              var c = 0,
                  d = 0;
              q[a + 8 >> 2] = 0;
              q[a + 12 >> 2] = 0;
              p[a + 4 >> 1] = 1;
              q[a >> 2] = 0;
              q[a + 16 >> 2] = 0;
              q[a + 20 >> 2] = 0;
              tn(a + 24 | 0);
              ee(gb(a + 216 | 0, 0, 320));
              q[a + 536 >> 2] = 0;
              q[a + 540 >> 2] = 0;
              ld(a + 544 | 0);
              q[a + 556 >> 2] = b;
              c = q[321];
              d = q[320];
              q[a + 568 >> 2] = d;
              q[a + 572 >> 2] = c;
              q[a + 560 >> 2] = d;
              q[a + 564 >> 2] = c;

              if (r[b + 10 | 0]) {
                $d(a);
              }

              return a;
            }

            function Co(a) {
              var b = 0,
                  c = 0,
                  d = 0,
                  e = 0;
              b = ma - 16 | 0;
              ma = b;
              c = 1;

              a: {
                if (Ng(a + 216 | 0)) {
                  break a;
                }

                a = a + 544 | 0;
                d = b, e = ib(a), q[d + 8 >> 2] = e;
                d = b, e = pb(a), q[d >> 2] = e;
                c = 0;

                if (!Oa(b + 8 | 0, b)) {
                  break a;
                }

                while (1) {
                  a = Ng(q[q[b + 8 >> 2] >> 2] + 216 | 0);

                  if (a) {
                    c = 1;
                    break a;
                  }

                  c = a | c;
                  ob(b + 8 | 0);

                  if (Oa(b + 8 | 0, b)) {
                    continue;
                  }

                  break;
                }
              }

              ma = b + 16 | 0;
              return c & 1;
            }

            function Nf(a) {
              var b = 0,
                  c = 0,
                  d = 0,
                  e = 0;
              b = ma - 16 | 0;
              ma = b;

              a: {
                if (!q[a + 556 >> 2]) {
                  break a;
                }

                q[2360] = q[2360] + -1;
                c = q[a + 556 >> 2];

                if (!c) {
                  break a;
                }

                ab(c);
              }

              a = Gb(a);
              d = b, e = ib(a), q[d + 8 >> 2] = e;
              d = b, e = pb(a), q[d >> 2] = e;

              if (Oa(b + 8 | 0, b)) {
                while (1) {
                  Nf(q[q[b + 8 >> 2] >> 2]);
                  ob(b + 8 | 0);

                  if (Oa(b + 8 | 0, b)) {
                    continue;
                  }

                  break;
                }
              }

              ma = b + 16 | 0;
            }

            function jm(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0;
              d = ma - 32 | 0;
              ma = d;
              e = q[a >> 2];
              f = d;
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              g = b;

              if (a & 1) {
                e = q[q[b >> 2] + e >> 2];
              }

              h = f, i = n[e](g) | 0, q[h + 16 >> 2] = i;
              q[d + 24 >> 2] = q[q[d + 16 >> 2] + 16 >> 2];
              a = q[c >> 2];
              q[d + 8 >> 2] = a;
              q[d + 4 >> 2] = q[d + 24 >> 2];
              q[d >> 2] = a;
              a = Qb(d + 4 | 0, d);
              ma = d + 32 | 0;
              return a;
            }

            function dd(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 48 | 0;
              ma = c;

              a: {
                if (Wa(b)) {
                  d = Cb(a + 24 | 0);
                  xb(c + 32 | 0);
                  q[c + 12 >> 2] = q[c + 32 >> 2];
                  qb(c + 40 | 0, d, 5, c + 12 | 0);
                  d = 1;

                  if (!Va(c + 40 | 0)) {
                    break a;
                  }
                }

                a = Cb(a + 24 | 0);
                b = q[Da(1612, b) >> 2];
                xb(c + 16 | 0);
                q[c + 8 >> 2] = q[c + 16 >> 2];
                qb(c + 24 | 0, a, b, c + 8 | 0);
                d = Va(c + 24 | 0) ^ 1;
              }

              ma = c + 48 | 0;
              return d;
            }

            function Ab(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 48 | 0;
              ma = c;

              a: {
                if (Wa(b)) {
                  d = Cb(a + 24 | 0);
                  xb(c + 32 | 0);
                  q[c + 12 >> 2] = q[c + 32 >> 2];
                  qb(c + 40 | 0, d, 4, c + 12 | 0);
                  d = 1;

                  if (!Va(c + 40 | 0)) {
                    break a;
                  }
                }

                a = Cb(a + 24 | 0);
                b = q[Da(1596, b) >> 2];
                xb(c + 16 | 0);
                q[c + 8 >> 2] = q[c + 16 >> 2];
                qb(c + 24 | 0, a, b, c + 8 | 0);
                d = Va(c + 24 | 0) ^ 1;
              }

              ma = c + 48 | 0;
              return d;
            }

            function qd(a, b) {
              var c = 0,
                  d = 0,
                  e = 0,
                  f = 0,
                  g = 0;
              c = ma - 32 | 0;
              ma = c;

              a: {
                while (1) {
                  b: {
                    f = c, g = q[Da(a, e) >> 2], q[f + 24 >> 2] = g;
                    d = q[Da(b, e) >> 2];
                    q[c + 16 >> 2] = d;
                    q[c + 12 >> 2] = q[c + 24 >> 2];
                    q[c + 8 >> 2] = d;

                    if (Qb(c + 12 | 0, c + 8 | 0)) {
                      break b;
                    }

                    d = 1;
                    e = e + 1 | 0;

                    if ((e | 0) != 9) {
                      continue;
                    }

                    break a;
                  }

                  break;
                }

                d = 0;
              }

              ma = c + 32 | 0;
              return d;
            }

            function Um(a, b, c, d, e, f, g) {
              var h = 0,
                  i = x(0),
                  j = x(0),
                  k = x(0),
                  l = x(0),
                  m = 0,
                  n = x(0);
              h = ma - 16 | 0;
              ma = h;
              i = yb(a, 2, f);
              j = yb(a, 0, f);
              m = h, n = Ja(a, 2, f), u[m + 8 >> 2] = n;
              k = u[h + 8 >> 2];
              m = h, n = Ja(a, 0, f), u[m >> 2] = n;
              l = u[h >> 2];
              rb(a, Ya(a, 2, d & -3 ? x(b - k) : i, f, f), 0);
              rb(a, Ya(a, 0, e & -3 ? x(c - l) : j, g, f), 1);
              ma = h + 16 | 0;
            }

            function Zh(a, b, c, d) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              d = d | 0;
              var e = 0,
                  f = 0;

              if (Ua(a, q[b + 8 >> 2], 0)) {
                Md(b, c, d);
                return;
              }

              e = q[a + 12 >> 2];
              f = a + 16 | 0;
              Ne(f, b, c, d);

              a: {
                if ((e | 0) < 2) {
                  break a;
                }

                e = (e << 3) + f | 0;
                a = a + 24 | 0;

                while (1) {
                  Ne(a, b, c, d);

                  if (r[b + 54 | 0]) {
                    break a;
                  }

                  a = a + 8 | 0;

                  if (a >>> 0 < e >>> 0) {
                    continue;
                  }

                  break;
                }
              }
            }

            function We(a, b) {
              var c = 0,
                  d = 0,
                  i = 0;
              h(+a);
              c = e(1) | 0;
              d = e(0) | 0;
              i = c;
              c = c >>> 20 & 2047;

              if ((c | 0) != 2047) {
                if (!c) {
                  c = b;

                  if (a == 0) {
                    b = 0;
                  } else {
                    a = We(a * 0x10000000000000000, b);
                    b = q[b >> 2] + -64 | 0;
                  }

                  q[c >> 2] = b;
                  return a;
                }

                q[b >> 2] = c + -1022;
                f(0, d | 0);
                f(1, i & -2146435073 | 1071644672);
                a = +g();
              }

              return a;
            }

            function ke(a, b) {
              var c = 0,
                  d = 0,
                  e = 0,
                  f = 0,
                  g = 0;
              c = ma - 32 | 0;
              ma = c;

              a: {
                while (1) {
                  b: {
                    f = c, g = q[Da(a, d) >> 2], q[f + 24 >> 2] = g;
                    e = q[Da(b, d) >> 2];
                    q[c + 16 >> 2] = e;
                    q[c + 12 >> 2] = q[c + 24 >> 2];
                    q[c + 8 >> 2] = e;

                    if (Qb(c + 12 | 0, c + 8 | 0)) {
                      break b;
                    }

                    e = d;
                    d = 1;

                    if (!e) {
                      continue;
                    }

                    break a;
                  }

                  break;
                }

                d = 0;
              }

              ma = c + 32 | 0;
              return d;
            }

            function eh(a, b, c, d) {
              var e = 0,
                  f = 0,
                  g = 0,
                  h = 0;
              g = ma - 16 | 0;
              ma = g;
              h = q[a + 4 >> 2];
              d = (h - d | 0) + b | 0;
              e = se(g, a, c - d >> 2);

              if (c >>> 0 > d >>> 0) {
                f = d;

                while (1) {
                  $c(Na(a), q[e + 4 >> 2], f);
                  q[e + 4 >> 2] = q[e + 4 >> 2] + 4;
                  f = f + 4 | 0;

                  if (f >>> 0 < c >>> 0) {
                    continue;
                  }

                  break;
                }
              }

              re(e);
              a = d - b | 0;

              if (a) {
                Le(h - a | 0, b, a);
              }

              ma = g + 16 | 0;
            }

            function Zm(a, b) {
              var c = 0;
              ub(a, (b | 0) < 6, 1539);

              a: {
                if ((b | 0) == 4) {
                  b = Hb(Ga(a));
                  a = Ga(a) + 24 | 0;

                  if ((b | 0) == 2) {
                    a = Da(a, 2);
                    break a;
                  }

                  a = Da(a, 0);
                  break a;
                }

                c = Ga(a);

                if ((b | 0) == 5) {
                  b = Hb(c);
                  a = Ga(a) + 24 | 0;

                  if ((b | 0) == 2) {
                    a = Da(a, 0);
                    break a;
                  }

                  a = Da(a, 2);
                  break a;
                }

                a = Da(c + 24 | 0, b);
              }

              return u[a >> 2];
            }

            function Ym(a, b) {
              var c = 0;
              ub(a, (b | 0) < 6, 1539);

              a: {
                if ((b | 0) == 4) {
                  b = Hb(Ga(a));
                  a = Ga(a) + 40 | 0;

                  if ((b | 0) == 2) {
                    a = Da(a, 2);
                    break a;
                  }

                  a = Da(a, 0);
                  break a;
                }

                c = Ga(a);

                if ((b | 0) == 5) {
                  b = Hb(c);
                  a = Ga(a) + 40 | 0;

                  if ((b | 0) == 2) {
                    a = Da(a, 0);
                    break a;
                  }

                  a = Da(a, 2);
                  break a;
                }

                a = Da(c + 40 | 0, b);
              }

              return u[a >> 2];
            }

            function Xm(a, b) {
              var c = 0;
              ub(a, (b | 0) < 6, 1539);

              a: {
                if ((b | 0) == 4) {
                  b = Hb(Ga(a));
                  a = Ga(a) + 56 | 0;

                  if ((b | 0) == 2) {
                    a = Da(a, 2);
                    break a;
                  }

                  a = Da(a, 0);
                  break a;
                }

                c = Ga(a);

                if ((b | 0) == 5) {
                  b = Hb(c);
                  a = Ga(a) + 56 | 0;

                  if ((b | 0) == 2) {
                    a = Da(a, 0);
                    break a;
                  }

                  a = Da(a, 2);
                  break a;
                }

                a = Da(c + 56 | 0, b);
              }

              return u[a >> 2];
            }

            function ro(a, b, c) {
              var d = 0;
              d = ma - 32 | 0;
              ma = d;
              q[d + 24 >> 2] = b;
              b = mo(d + 8 | 0, a + 8 | 0, lo(b, c));

              if (q[b >> 2] != q[b + 4 >> 2]) {
                while (1) {
                  $c(q[a + 16 >> 2], q[b >> 2], q[d + 24 >> 2]);
                  q[b >> 2] = q[b >> 2] + 4;
                  ob(d + 24 | 0);

                  if (q[b >> 2] != q[b + 4 >> 2]) {
                    continue;
                  }

                  break;
                }
              }

              q[q[b + 8 >> 2] >> 2] = q[b >> 2];
              ma = d + 32 | 0;
            }

            function Km(a) {
              var b = 0,
                  c = 0;
              b = bb(28);
              q[b + 24 >> 2] = q[a + 24 >> 2];
              c = q[a + 20 >> 2];
              q[b + 16 >> 2] = q[a + 16 >> 2];
              q[b + 20 >> 2] = c;
              c = q[a + 12 >> 2];
              q[b + 8 >> 2] = q[a + 8 >> 2];
              q[b + 12 >> 2] = c;
              c = q[a + 4 >> 2];
              q[b >> 2] = q[a >> 2];
              q[b + 4 >> 2] = c;
              a = ma - 16 | 0;
              ma = a;
              ma = a + 16 | 0;
              q[2360] = q[2360] + 1;
              return b;
            }

            function im(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0;
              d = ma - 32 | 0;
              ma = d;
              q[d + 24 >> 2] = q[c >> 2];
              c = q[a >> 2];
              e = d;
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              f = b;

              if (a & 1) {
                c = q[c + q[b >> 2] >> 2];
              }

              g = e, h = n[c](f) | 0, q[g + 16 >> 2] = h;
              q[d + 12 >> 2] = q[d + 24 >> 2];
              q[q[d + 16 >> 2] + 16 >> 2] = q[d + 12 >> 2];
              ma = d + 32 | 0;
            }

            function Mj(a, b, c) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              var d = 0,
                  e = 0;
              d = ma - 32 | 0;
              ma = d;
              e = ma - 16 | 0;
              ma = e;
              mi(d + 8 | 0, b + 4 | 0, q[b >> 2]);
              ma = e + 16 | 0;
              lf(d, c);
              n[a](d + 24 | 0, d + 8 | 0, d);
              ha(q[d + 24 >> 2]);
              a = q[d + 24 >> 2];
              Sc(d + 24 | 0);
              Sc(d);

              if (ff(d + 8 | 0)) {
                ab(q[d + 8 >> 2]);
              }

              ma = d + 32 | 0;
              return a | 0;
            }

            function gj(a, b, c, d, e, f) {
              var g = 0,
                  h = 0;
              g = ma - 48 | 0;
              ma = g;
              h = +ja(fj() | 0, b | 0, 2484, g + 12 | 0, ej(g + 16 | 0, c, d, e, f) | 0);
              c = vb(g + 8 | 0, q[g + 12 >> 2]);

              if (h < 4294967296 & h >= 0) {
                b = ~~h >>> 0;
              } else {
                b = 0;
              }

              d = q[b + 4 >> 2];
              q[a >> 2] = q[b >> 2];
              q[a + 4 >> 2] = d;
              ia(q[c >> 2]);
              ma = g + 48 | 0;
            }

            function fk(a, b) {
              a = a | 0;
              b = b | 0;
              var c = 0,
                  d = 0;
              c = a, d = +dg(q[b >> 2]), v[c >> 3] = d;
              c = a, d = +bg(q[b >> 2]), v[c + 8 >> 3] = d;
              c = a, d = +cg(q[b >> 2]), v[c + 16 >> 3] = d;
              c = a, d = +ag(q[b >> 2]), v[c + 24 >> 3] = d;
              c = a, d = +$f(q[b >> 2]), v[c + 32 >> 3] = d;
              c = a, d = +_f(q[b >> 2]), v[c + 40 >> 3] = d;
            }

            function lj(a, b, c, d, e, f) {
              a = a | 0;
              b = b | 0;
              c = x(c);
              d = d | 0;
              e = x(e);
              f = f | 0;
              var g = 0,
                  h = 0,
                  i = 0,
                  j = 0;
              g = ma - 16 | 0;
              ma = g;
              h = q[a >> 2];
              i = g + 8 | 0;
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              j = b;

              if (a & 1) {
                h = q[h + q[b >> 2] >> 2];
              }

              n[h](i, j, c, d, e, f);
              a = La(g + 8 | 0);
              ma = g + 16 | 0;
              return a | 0;
            }

            function Qm(a, b) {
              var c = 0;
              c = q[b + 4 >> 2];
              q[a >> 2] = q[b >> 2];
              q[a + 4 >> 2] = c;
              q[a + 16 >> 2] = q[b + 16 >> 2];
              c = q[b + 12 >> 2];
              q[a + 8 >> 2] = q[b + 8 >> 2];
              q[a + 12 >> 2] = c;
              Zf(a + 20 | 0, b + 20 | 0);
              q[a + 40 >> 2] = q[b + 40 >> 2];
              c = q[b + 36 >> 2];
              q[a + 32 >> 2] = q[b + 32 >> 2];
              q[a + 36 >> 2] = c;
            }

            function _g(a, b, c) {
              var d = 0,
                  e = 0,
                  f = x(0);
              d = ma - 16 | 0;
              ma = d;

              a: {
                if (Ab(a, b)) {
                  c = zc(a, b, c);
                  break a;
                }

                e = d, f = Qc(a, b, c), u[e + 8 >> 2] = f;

                if (Ia(d + 8 | 0)) {
                  c = u[d + 8 >> 2];
                  break a;
                }

                a = Ma(d, x(-u[d + 8 >> 2]));
                c = u[a >> 2];
                q[d + 8 >> 2] = q[a >> 2];
              }

              ma = d + 16 | 0;
              return c;
            }

            function Of(a) {
              var b = 0,
                  c = 0,
                  d = 0;
              b = ma - 16 | 0;
              ma = b;
              o[q[a + 556 >> 2] + 11 | 0] = 0;
              a = Gb(a);
              c = b, d = ib(a), q[c + 8 >> 2] = d;
              c = b, d = pb(a), q[c >> 2] = d;

              if (Oa(b + 8 | 0, b)) {
                while (1) {
                  Of(q[q[b + 8 >> 2] >> 2]);
                  ob(b + 8 | 0);

                  if (Oa(b + 8 | 0, b)) {
                    continue;
                  }

                  break;
                }
              }

              ma = b + 16 | 0;
            }

            function mg(a) {
              var b = 0,
                  c = 0,
                  d = 0;
              c = ma - 16 | 0;
              ma = c;
              b = q[a + 540 >> 2];

              if (b) {
                bh(b, a);
                Xb(a, 0);
              }

              d = Zb(a);

              if (d) {
                b = 0;

                while (1) {
                  Xb(nc(a, b), 0);
                  b = b + 1 | 0;

                  if ((d | 0) != (b | 0)) {
                    continue;
                  }

                  break;
                }
              }

              Wg(a);
              q[c + 8 >> 2] = q[a + 556 >> 2];

              if (a) {
                ab(Jg(a));
              }

              ma = c + 16 | 0;
            }

            function Bb(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 16 | 0;
              ma = c;
              d = q[a + 4 >> 2] + -1 | 0;

              a: {
                if (d >>> 0 <= 1) {
                  if (d - 1) {
                    Ma(c + 8 | 0, u[a >> 2]);
                    break a;
                  }

                  Ma(c + 8 | 0, x(x(u[a >> 2] * b) * x(.009999999776482582)));
                  break a;
                }

                q[c + 8 >> 2] = 0;
                Wb(c + 8 | 0);
              }

              ma = c + 16 | 0;
              return u[c + 8 >> 2];
            }

            function wn(a, b, c, d) {
              var e = 0,
                  f = 0;
              e = ma - 48 | 0;
              ma = e;
              f = q[b >> 2];
              b = q[b + 4 >> 2];
              d = q[d >> 2];
              q[e + 40 >> 2] = d;
              q[e + 32 >> 2] = b;
              q[e + 28 >> 2] = f;
              q[e + 24 >> 2] = c;
              q[e + 16 >> 2] = b;
              q[e + 4 >> 2] = d;
              q[e + 12 >> 2] = f;
              q[e + 8 >> 2] = c;
              vn(a, e + 4 | 0, e + 24 | 0, e + 8 | 0);
              ma = e + 48 | 0;
            }

            function nd(a, b, c, d) {
              var e = 0,
                  f = 0;
              e = ma - 48 | 0;
              ma = e;
              f = q[b >> 2];
              b = q[b + 4 >> 2];
              d = q[d >> 2];
              q[e + 40 >> 2] = d;
              q[e + 32 >> 2] = b;
              q[e + 28 >> 2] = f;
              q[e + 24 >> 2] = c;
              q[e + 16 >> 2] = b;
              q[e + 4 >> 2] = d;
              q[e + 12 >> 2] = f;
              q[e + 8 >> 2] = c;
              gn(a, e + 4 | 0, e + 24 | 0, e + 8 | 0);
              ma = e + 48 | 0;
            }

            function md(a, b, c, d) {
              var e = 0,
                  f = 0;
              e = ma - 48 | 0;
              ma = e;
              f = q[b >> 2];
              b = q[b + 4 >> 2];
              d = q[d >> 2];
              q[e + 40 >> 2] = d;
              q[e + 32 >> 2] = b;
              q[e + 28 >> 2] = f;
              q[e + 24 >> 2] = c;
              q[e + 16 >> 2] = b;
              q[e + 4 >> 2] = d;
              q[e + 12 >> 2] = f;
              q[e + 8 >> 2] = c;
              bn(a, e + 4 | 0, e + 24 | 0, e + 8 | 0);
              ma = e + 48 | 0;
            }

            function fg(a, b, c, d) {
              var e = 0,
                  f = 0;
              e = ma - 48 | 0;
              ma = e;
              f = q[b >> 2];
              b = q[b + 4 >> 2];
              d = q[d >> 2];
              q[e + 40 >> 2] = d;
              q[e + 32 >> 2] = b;
              q[e + 28 >> 2] = f;
              q[e + 24 >> 2] = c;
              q[e + 16 >> 2] = b;
              q[e + 4 >> 2] = d;
              q[e + 12 >> 2] = f;
              q[e + 8 >> 2] = c;
              Gn(a, e + 4 | 0, e + 24 | 0, e + 8 | 0);
              ma = e + 48 | 0;
            }

            function fe(a, b, c, d) {
              var e = 0,
                  f = 0;
              e = ma - 48 | 0;
              ma = e;
              f = q[b >> 2];
              b = q[b + 4 >> 2];
              d = q[d >> 2];
              q[e + 40 >> 2] = d;
              q[e + 32 >> 2] = b;
              q[e + 28 >> 2] = f;
              q[e + 24 >> 2] = c;
              q[e + 16 >> 2] = b;
              q[e + 4 >> 2] = d;
              q[e + 12 >> 2] = f;
              q[e + 8 >> 2] = c;
              Dn(a, e + 4 | 0, e + 24 | 0, e + 8 | 0);
              ma = e + 48 | 0;
            }

            function eg(a, b, c, d) {
              var e = 0,
                  f = 0;
              e = ma - 48 | 0;
              ma = e;
              f = q[b >> 2];
              b = q[b + 4 >> 2];
              d = q[d >> 2];
              q[e + 40 >> 2] = d;
              q[e + 32 >> 2] = b;
              q[e + 28 >> 2] = f;
              q[e + 24 >> 2] = c;
              q[e + 16 >> 2] = b;
              q[e + 4 >> 2] = d;
              q[e + 12 >> 2] = f;
              q[e + 8 >> 2] = c;
              zn(a, e + 4 | 0, e + 24 | 0, e + 8 | 0);
              ma = e + 48 | 0;
            }

            function Ic(a, b, c, d) {
              var e = 0,
                  f = 0;
              e = ma - 48 | 0;
              ma = e;
              f = q[b >> 2];
              b = q[b + 4 >> 2];
              d = q[d >> 2];
              q[e + 40 >> 2] = d;
              q[e + 32 >> 2] = b;
              q[e + 28 >> 2] = f;
              q[e + 24 >> 2] = c;
              q[e + 16 >> 2] = b;
              q[e + 4 >> 2] = d;
              q[e + 12 >> 2] = f;
              q[e + 8 >> 2] = c;
              on(a, e + 4 | 0, e + 24 | 0, e + 8 | 0);
              ma = e + 48 | 0;
            }

            function bh(a, b) {
              var c = 0,
                  d = 0,
                  e = 0;
              c = ma - 32 | 0;
              ma = c;
              q[c + 28 >> 2] = b;
              a = a + 544 | 0;
              d = c, e = Ko(ib(a), pb(a), c + 28 | 0), q[d + 24 >> 2] = e;
              d = c, e = pb(a), q[d + 16 >> 2] = e;
              b = 0;

              if (Oa(c + 24 | 0, c + 16 | 0)) {
                Jo(a, q[Ie(c + 8 | 0, c + 24 | 0) >> 2]);
                b = 1;
              }

              ma = c + 32 | 0;
              return b;
            }

            function Di(a, b, c, d) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              d = d | 0;
              var e = 0;
              e = ma - 16 | 0;
              ma = e;

              a: {
                if (!Qd($(q[a + 60 >> 2], b | 0, c | 0, d & 255, e + 8 | 0) | 0)) {
                  b = q[e + 12 >> 2];
                  a = q[e + 8 >> 2];
                  break a;
                }

                q[e + 8 >> 2] = -1;
                q[e + 12 >> 2] = -1;
                b = -1;
                a = -1;
              }

              ma = e + 16 | 0;
              na = b;
              return a | 0;
            }

            function Md(a, b, c) {
              var d = 0;
              d = q[a + 16 >> 2];

              if (!d) {
                q[a + 36 >> 2] = 1;
                q[a + 24 >> 2] = c;
                q[a + 16 >> 2] = b;
                return;
              }

              a: {
                if ((b | 0) == (d | 0)) {
                  if (q[a + 24 >> 2] != 2) {
                    break a;
                  }

                  q[a + 24 >> 2] = c;
                  return;
                }

                o[a + 54 | 0] = 1;
                q[a + 24 >> 2] = 2;
                q[a + 36 >> 2] = q[a + 36 >> 2] + 1;
              }
            }

            function Ko(a, b, c) {
              var d = 0;
              d = ma - 16 | 0;
              ma = d;
              q[d >> 2] = b;
              q[d + 8 >> 2] = a;

              a: {
                if (!Oa(d + 8 | 0, d)) {
                  break a;
                }

                while (1) {
                  if (q[q[d + 8 >> 2] >> 2] == q[c >> 2]) {
                    break a;
                  }

                  ob(d + 8 | 0);

                  if (Oa(d + 8 | 0, d)) {
                    continue;
                  }

                  break;
                }
              }

              ma = d + 16 | 0;
              return q[d + 8 >> 2];
            }

            function bo(a) {
              var b = 0,
                  c = x(0),
                  d = 0,
                  e = x(0);
              b = ma - 16 | 0;
              ma = b;
              d = b, e = u[Ea(a) + 12 >> 2], u[d + 8 >> 2] = e;

              a: {
                if (Ia(b + 8 | 0)) {
                  c = r[q[a + 556 >> 2] + 10 | 0] ? x(1) : x(0);
                  break a;
                }

                d = b, e = u[Ea(a) + 12 >> 2], u[d >> 2] = e;
                c = u[b >> 2];
              }

              ma = b + 16 | 0;
              return c;
            }

            function _l(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0;
              d = ma - 16 | 0;
              ma = d;
              e = q[a >> 2];
              f = d;
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              g = b;

              if (a & 1) {
                e = q[q[b >> 2] + e >> 2];
              }

              h = f, i = n[e](g) | 0, q[h + 8 >> 2] = i;
              a = id(u[q[d + 8 >> 2] + 188 >> 2], c);
              ma = d + 16 | 0;
              return a;
            }

            function yn(a, b, c) {
              var d = 0,
                  e = 0;
              d = ma - 48 | 0;
              ma = d;
              Pb(d + 40 | 0, c);
              q[d + 28 >> 2] = 0;
              q[d + 24 >> 2] = 18;
              e = q[d + 40 >> 2];
              q[d + 32 >> 2] = e;
              q[d + 12 >> 2] = e;
              e = q[d + 28 >> 2];
              q[d + 16 >> 2] = q[d + 24 >> 2];
              q[d + 20 >> 2] = e;
              eg(a, d + 16 | 0, b, d + 12 | 0);
              ma = d + 48 | 0;
            }

            function xn(a, b, c) {
              var d = 0,
                  e = 0;
              d = ma - 48 | 0;
              ma = d;
              Fb(d + 40 | 0, c);
              q[d + 28 >> 2] = 0;
              q[d + 24 >> 2] = 19;
              e = q[d + 40 >> 2];
              q[d + 32 >> 2] = e;
              q[d + 12 >> 2] = e;
              e = q[d + 28 >> 2];
              q[d + 16 >> 2] = q[d + 24 >> 2];
              q[d + 20 >> 2] = e;
              wn(a, d + 16 | 0, b, d + 12 | 0);
              ma = d + 48 | 0;
            }

            function lm(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0;
              d = ma - 16 | 0;
              ma = d;
              e = q[a >> 2];
              f = d;
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              g = b;

              if (a & 1) {
                e = q[q[b >> 2] + e >> 2];
              }

              h = f, i = n[e](g) | 0, q[h + 8 >> 2] = i;
              a = id(u[q[d + 8 >> 2] + 12 >> 2], c);
              ma = d + 16 | 0;
              return a;
            }

            function Yi(a, b, c) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0;
              d = ma - 16 | 0;
              ma = d;
              e = q[a >> 2];
              f = d;
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              g = b;

              if (a & 1) {
                e = q[e + q[b >> 2] >> 2];
              }

              h = f, i = +n[e](g, c), v[h + 8 >> 3] = i;
              ma = d + 16 | 0;
              return +v[d + 8 >> 3];
            }

            function Hn(a, b, c) {
              var d = 0,
                  e = 0;
              d = ma - 48 | 0;
              ma = d;
              Fb(d + 40 | 0, c);
              q[d + 28 >> 2] = 0;
              q[d + 24 >> 2] = 16;
              e = q[d + 40 >> 2];
              q[d + 32 >> 2] = e;
              q[d + 12 >> 2] = e;
              e = q[d + 28 >> 2];
              q[d + 16 >> 2] = q[d + 24 >> 2];
              q[d + 20 >> 2] = e;
              fg(a, d + 16 | 0, b, d + 12 | 0);
              ma = d + 48 | 0;
            }

            function Fn(a, b, c) {
              var d = 0,
                  e = 0;
              d = ma - 48 | 0;
              ma = d;
              Pb(d + 40 | 0, c);
              q[d + 28 >> 2] = 0;
              q[d + 24 >> 2] = 16;
              e = q[d + 40 >> 2];
              q[d + 32 >> 2] = e;
              q[d + 12 >> 2] = e;
              e = q[d + 28 >> 2];
              q[d + 16 >> 2] = q[d + 24 >> 2];
              q[d + 20 >> 2] = e;
              fg(a, d + 16 | 0, b, d + 12 | 0);
              ma = d + 48 | 0;
            }

            function En(a, b, c) {
              var d = 0,
                  e = 0;
              d = ma - 48 | 0;
              ma = d;
              Fb(d + 40 | 0, c);
              q[d + 28 >> 2] = 0;
              q[d + 24 >> 2] = 17;
              e = q[d + 40 >> 2];
              q[d + 32 >> 2] = e;
              q[d + 12 >> 2] = e;
              e = q[d + 28 >> 2];
              q[d + 16 >> 2] = q[d + 24 >> 2];
              q[d + 20 >> 2] = e;
              fe(a, d + 16 | 0, b, d + 12 | 0);
              ma = d + 48 | 0;
            }

            function Cn(a, b, c) {
              var d = 0,
                  e = 0;
              d = ma - 48 | 0;
              ma = d;
              Pb(d + 40 | 0, c);
              q[d + 28 >> 2] = 0;
              q[d + 24 >> 2] = 17;
              e = q[d + 40 >> 2];
              q[d + 32 >> 2] = e;
              q[d + 12 >> 2] = e;
              e = q[d + 28 >> 2];
              q[d + 16 >> 2] = q[d + 24 >> 2];
              q[d + 20 >> 2] = e;
              fe(a, d + 16 | 0, b, d + 12 | 0);
              ma = d + 48 | 0;
            }

            function An(a, b, c) {
              var d = 0,
                  e = 0;
              d = ma - 48 | 0;
              ma = d;
              Fb(d + 40 | 0, c);
              q[d + 28 >> 2] = 0;
              q[d + 24 >> 2] = 18;
              e = q[d + 40 >> 2];
              q[d + 32 >> 2] = e;
              q[d + 12 >> 2] = e;
              e = q[d + 28 >> 2];
              q[d + 16 >> 2] = q[d + 24 >> 2];
              q[d + 20 >> 2] = e;
              eg(a, d + 16 | 0, b, d + 12 | 0);
              ma = d + 48 | 0;
            }

            function pm(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0;
              d = ma - 16 | 0;
              ma = d;
              e = q[a >> 2];
              f = d;
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              g = b;

              if (a & 1) {
                e = q[q[b >> 2] + e >> 2];
              }

              h = f, i = n[e](g) | 0, q[h + 8 >> 2] = i;
              a = id(u[q[d + 8 >> 2] + 4 >> 2], c);
              ma = d + 16 | 0;
              return a;
            }

            function nm(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0;
              d = ma - 16 | 0;
              ma = d;
              e = q[a >> 2];
              f = d;
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              g = b;

              if (a & 1) {
                e = q[q[b >> 2] + e >> 2];
              }

              h = f, i = n[e](g) | 0, q[h + 8 >> 2] = i;
              a = id(u[q[d + 8 >> 2] + 8 >> 2], c);
              ma = d + 16 | 0;
              return a;
            }

            function Oc(a, b, c, d) {
              var e = 0,
                  f = 0,
                  g = 0,
                  h = 0;
              e = ma - 16 | 0;
              ma = e;
              q[e + 12 >> 2] = 0;
              qe(a + 12 | 0);
              q[a + 16 >> 2] = d;

              if (b) {
                f = Bg(b);
              }

              q[a >> 2] = f;
              c = (c << 2) + f | 0;
              q[a + 8 >> 2] = c;
              q[a + 4 >> 2] = c;
              g = fc(a), h = (b << 2) + f | 0, q[g >> 2] = h;
              ma = e + 16 | 0;
              return a;
            }

            function pn(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 48 | 0;
              ma = c;
              Fb(c + 40 | 0, b);
              q[c + 28 >> 2] = 0;
              q[c + 24 >> 2] = 21;
              d = q[c + 40 >> 2];
              q[c + 32 >> 2] = d;
              q[c + 12 >> 2] = d;
              d = q[c + 28 >> 2];
              q[c + 16 >> 2] = q[c + 24 >> 2];
              q[c + 20 >> 2] = d;
              Ic(a, c + 16 | 0, 0, c + 12 | 0);
              ma = c + 48 | 0;
            }

            function nn(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 48 | 0;
              ma = c;
              Pb(c + 40 | 0, b);
              q[c + 28 >> 2] = 0;
              q[c + 24 >> 2] = 21;
              d = q[c + 40 >> 2];
              q[c + 32 >> 2] = d;
              q[c + 12 >> 2] = d;
              d = q[c + 28 >> 2];
              q[c + 16 >> 2] = q[c + 24 >> 2];
              q[c + 20 >> 2] = d;
              Ic(a, c + 16 | 0, 0, c + 12 | 0);
              ma = c + 48 | 0;
            }

            function ln(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 48 | 0;
              ma = c;
              Fb(c + 40 | 0, b);
              q[c + 28 >> 2] = 0;
              q[c + 24 >> 2] = 21;
              d = q[c + 40 >> 2];
              q[c + 32 >> 2] = d;
              q[c + 12 >> 2] = d;
              d = q[c + 28 >> 2];
              q[c + 16 >> 2] = q[c + 24 >> 2];
              q[c + 20 >> 2] = d;
              Ic(a, c + 16 | 0, 1, c + 12 | 0);
              ma = c + 48 | 0;
            }

            function kn(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 48 | 0;
              ma = c;
              Pb(c + 40 | 0, b);
              q[c + 28 >> 2] = 0;
              q[c + 24 >> 2] = 21;
              d = q[c + 40 >> 2];
              q[c + 32 >> 2] = d;
              q[c + 12 >> 2] = d;
              d = q[c + 28 >> 2];
              q[c + 16 >> 2] = q[c + 24 >> 2];
              q[c + 20 >> 2] = d;
              Ic(a, c + 16 | 0, 1, c + 12 | 0);
              ma = c + 48 | 0;
            }

            function hn(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 48 | 0;
              ma = c;
              Fb(c + 40 | 0, b);
              q[c + 28 >> 2] = 0;
              q[c + 24 >> 2] = 22;
              d = q[c + 40 >> 2];
              q[c + 32 >> 2] = d;
              q[c + 12 >> 2] = d;
              d = q[c + 28 >> 2];
              q[c + 16 >> 2] = q[c + 24 >> 2];
              q[c + 20 >> 2] = d;
              nd(a, c + 16 | 0, 0, c + 12 | 0);
              ma = c + 48 | 0;
            }

            function fn(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 48 | 0;
              ma = c;
              Pb(c + 40 | 0, b);
              q[c + 28 >> 2] = 0;
              q[c + 24 >> 2] = 22;
              d = q[c + 40 >> 2];
              q[c + 32 >> 2] = d;
              q[c + 12 >> 2] = d;
              d = q[c + 28 >> 2];
              q[c + 16 >> 2] = q[c + 24 >> 2];
              q[c + 20 >> 2] = d;
              nd(a, c + 16 | 0, 0, c + 12 | 0);
              ma = c + 48 | 0;
            }

            function en(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 48 | 0;
              ma = c;
              Fb(c + 40 | 0, b);
              q[c + 28 >> 2] = 0;
              q[c + 24 >> 2] = 22;
              d = q[c + 40 >> 2];
              q[c + 32 >> 2] = d;
              q[c + 12 >> 2] = d;
              d = q[c + 28 >> 2];
              q[c + 16 >> 2] = q[c + 24 >> 2];
              q[c + 20 >> 2] = d;
              nd(a, c + 16 | 0, 1, c + 12 | 0);
              ma = c + 48 | 0;
            }

            function dn(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 48 | 0;
              ma = c;
              Pb(c + 40 | 0, b);
              q[c + 28 >> 2] = 0;
              q[c + 24 >> 2] = 22;
              d = q[c + 40 >> 2];
              q[c + 32 >> 2] = d;
              q[c + 12 >> 2] = d;
              d = q[c + 28 >> 2];
              q[c + 16 >> 2] = q[c + 24 >> 2];
              q[c + 20 >> 2] = d;
              nd(a, c + 16 | 0, 1, c + 12 | 0);
              ma = c + 48 | 0;
            }

            function cn(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 48 | 0;
              ma = c;
              Fb(c + 40 | 0, b);
              q[c + 28 >> 2] = 0;
              q[c + 24 >> 2] = 23;
              d = q[c + 40 >> 2];
              q[c + 32 >> 2] = d;
              q[c + 12 >> 2] = d;
              d = q[c + 28 >> 2];
              q[c + 16 >> 2] = q[c + 24 >> 2];
              q[c + 20 >> 2] = d;
              md(a, c + 16 | 0, 0, c + 12 | 0);
              ma = c + 48 | 0;
            }

            function an(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 48 | 0;
              ma = c;
              Pb(c + 40 | 0, b);
              q[c + 28 >> 2] = 0;
              q[c + 24 >> 2] = 23;
              d = q[c + 40 >> 2];
              q[c + 32 >> 2] = d;
              q[c + 12 >> 2] = d;
              d = q[c + 28 >> 2];
              q[c + 16 >> 2] = q[c + 24 >> 2];
              q[c + 20 >> 2] = d;
              md(a, c + 16 | 0, 0, c + 12 | 0);
              ma = c + 48 | 0;
            }

            function _m(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 48 | 0;
              ma = c;
              Pb(c + 40 | 0, b);
              q[c + 28 >> 2] = 0;
              q[c + 24 >> 2] = 23;
              d = q[c + 40 >> 2];
              q[c + 32 >> 2] = d;
              q[c + 12 >> 2] = d;
              d = q[c + 28 >> 2];
              q[c + 16 >> 2] = q[c + 24 >> 2];
              q[c + 20 >> 2] = d;
              md(a, c + 16 | 0, 1, c + 12 | 0);
              ma = c + 48 | 0;
            }

            function $m(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 48 | 0;
              ma = c;
              Fb(c + 40 | 0, b);
              q[c + 28 >> 2] = 0;
              q[c + 24 >> 2] = 23;
              d = q[c + 40 >> 2];
              q[c + 32 >> 2] = d;
              q[c + 12 >> 2] = d;
              d = q[c + 28 >> 2];
              q[c + 16 >> 2] = q[c + 24 >> 2];
              q[c + 20 >> 2] = d;
              md(a, c + 16 | 0, 1, c + 12 | 0);
              ma = c + 48 | 0;
            }

            function hb(a, b, c, d, e) {
              var f = 0;
              f = ma - 256 | 0;
              ma = f;

              if (!(e & 73728 | (c | 0) <= (d | 0))) {
                c = c - d | 0;
                d = c >>> 0 < 256;
                gb(f, b, d ? c : 256);

                if (!d) {
                  while (1) {
                    Za(a, f, 256);
                    c = c + -256 | 0;

                    if (c >>> 0 > 255) {
                      continue;
                    }

                    break;
                  }
                }

                Za(a, f, c);
              }

              ma = f + 256 | 0;
            }

            function Kn(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 48 | 0;
              ma = c;
              Fb(c + 40 | 0, b);
              q[c + 28 >> 2] = 0;
              q[c + 24 >> 2] = 15;
              d = q[c + 40 >> 2];
              q[c + 32 >> 2] = d;
              q[c + 12 >> 2] = d;
              d = q[c + 28 >> 2];
              q[c + 16 >> 2] = q[c + 24 >> 2];
              q[c + 20 >> 2] = d;
              gg(a, c + 16 | 0, c + 12 | 0);
              ma = c + 48 | 0;
            }

            function In(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 48 | 0;
              ma = c;
              Pb(c + 40 | 0, b);
              q[c + 28 >> 2] = 0;
              q[c + 24 >> 2] = 15;
              d = q[c + 40 >> 2];
              q[c + 32 >> 2] = d;
              q[c + 12 >> 2] = d;
              d = q[c + 28 >> 2];
              q[c + 16 >> 2] = q[c + 24 >> 2];
              q[c + 20 >> 2] = d;
              gg(a, c + 16 | 0, c + 12 | 0);
              ma = c + 48 | 0;
            }

            function No(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0;
              e = c >>> 16 | 0;
              d = a >>> 16 | 0;
              h = w(e, d);
              f = c & 65535;
              a = a & 65535;
              g = w(f, a);
              d = (g >>> 16 | 0) + w(d, f) | 0;
              a = (d & 65535) + w(a, e) | 0;
              na = h + w(b, c) + (d >>> 16) + (a >>> 16) | 0;
              return g & 65535 | a << 16;
            }

            function cf(a, b) {
              a = a | 0;
              b = b | 0;
              var c = 0,
                  d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0;
              c = ma - 16 | 0;
              ma = c;
              d = q[a >> 2];
              e = c;
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              f = b;

              if (a & 1) {
                d = q[q[b >> 2] + d >> 2];
              }

              g = e, h = n[d](f) | 0, q[g + 12 >> 2] = h;
              ma = c + 16 | 0;
              return q[c + 12 >> 2];
            }

            function yf(a, b) {
              var c = 0;
              a = fb(a, b, 544);
              bk(a + 544 | 0, b + 544 | 0);
              q[a + 572 >> 2] = q[b + 572 >> 2];
              c = q[b + 568 >> 2];
              q[a + 564 >> 2] = q[b + 564 >> 2];
              q[a + 568 >> 2] = c;
              c = q[b + 560 >> 2];
              q[a + 556 >> 2] = q[b + 556 >> 2];
              q[a + 560 >> 2] = c;
              return a;
            }

            function Zi(a, b) {
              a = a | 0;
              b = b | 0;
              var c = 0,
                  d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0;
              c = ma - 16 | 0;
              ma = c;
              d = q[a >> 2];
              e = c;
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              f = b;

              if (a & 1) {
                d = q[q[b >> 2] + d >> 2];
              }

              g = e, h = +n[d](f), v[g + 8 >> 3] = h;
              ma = c + 16 | 0;
              return +v[c + 8 >> 3];
            }

            function ch(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0;
              pe(a);
              e = q[b + 4 >> 2];
              d = b + 4 | 0;
              wg(Na(a), q[a >> 2], c, d);
              f = c;
              c = b + 8 | 0;
              Cg(Na(a), f, q[a + 4 >> 2], c);
              Rb(a, d);
              Rb(a + 4 | 0, c);
              Rb(Na(a), fc(b));
              q[b >> 2] = q[b + 4 >> 2];
              te(a, Ka(a));
              return e;
            }

            function fi(a, b) {
              var c = 0,
                  d = 0;
              c = q[a + 4 >> 2];

              a: {
                if ((c | 0) != q[b + 4 >> 2]) {
                  break a;
                }

                d = 1;

                if (!c) {
                  break a;
                }

                if (Fa(u[a >> 2])) {
                  if (Fa(u[b >> 2])) {
                    break a;
                  }
                }

                d = x(y(x(u[a >> 2] - u[b >> 2]))) < x(9999999747378752e-20);
              }

              return d;
            }

            function Zl(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0;
              d = ma - 16 | 0;
              ma = d;
              e = q[a >> 2];
              f = d;
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              g = b;

              if (a & 1) {
                e = q[q[b >> 2] + e >> 2];
              }

              h = f, i = n[e](g) | 0, q[h + 8 >> 2] = i;
              u[q[d + 8 >> 2] + 188 >> 2] = c;
              ma = d + 16 | 0;
            }

            function un(a, b) {
              var c = 0,
                  d = x(0),
                  e = 0,
                  f = 0;
              c = ma - 16 | 0;
              ma = c;
              e = c, f = q[Ha(_b(Ea(a)), b) >> 2], q[e + 8 >> 2] = f;
              d = x(G);

              a: {
                if (Va(c + 8 | 0)) {
                  break a;
                }

                if (Je(c + 8 | 0)) {
                  break a;
                }

                Ra(c, c + 8 | 0);
                d = u[c >> 2];
              }

              ma = c + 16 | 0;
              return d;
            }

            function km(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0;
              d = ma - 16 | 0;
              ma = d;
              e = q[a >> 2];
              f = d;
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              g = b;

              if (a & 1) {
                e = q[q[b >> 2] + e >> 2];
              }

              h = f, i = n[e](g) | 0, q[h + 8 >> 2] = i;
              u[q[d + 8 >> 2] + 12 >> 2] = c;
              ma = d + 16 | 0;
            }

            function $i(a, b, c) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0;
              d = ma - 16 | 0;
              ma = d;
              e = q[a >> 2];
              f = d + 8 | 0;
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              g = b;

              if (a & 1) {
                e = q[e + q[b >> 2] >> 2];
              }

              n[e](f, g, c);
              a = La(d + 8 | 0);
              ma = d + 16 | 0;
              return a | 0;
            }

            function om(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0;
              d = ma - 16 | 0;
              ma = d;
              e = q[a >> 2];
              f = d;
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              g = b;

              if (a & 1) {
                e = q[q[b >> 2] + e >> 2];
              }

              h = f, i = n[e](g) | 0, q[h + 8 >> 2] = i;
              u[q[d + 8 >> 2] + 4 >> 2] = c;
              ma = d + 16 | 0;
            }

            function mm(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0;
              d = ma - 16 | 0;
              ma = d;
              e = q[a >> 2];
              f = d;
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              g = b;

              if (a & 1) {
                e = q[q[b >> 2] + e >> 2];
              }

              h = f, i = n[e](g) | 0, q[h + 8 >> 2] = i;
              u[q[d + 8 >> 2] + 8 >> 2] = c;
              ma = d + 16 | 0;
            }

            function gg(a, b, c) {
              var d = 0,
                  e = 0;
              d = ma - 32 | 0;
              ma = d;
              e = q[b >> 2];
              b = q[b + 4 >> 2];
              c = q[c >> 2];
              q[d + 24 >> 2] = c;
              q[d + 20 >> 2] = b;
              q[d + 16 >> 2] = e;
              q[d + 4 >> 2] = c;
              q[d + 12 >> 2] = b;
              q[d + 8 >> 2] = e;
              Jn(a, d + 4 | 0, d + 16 | 0, d + 8 | 0);
              ma = d + 32 | 0;
            }

            function Nh(a) {
              var b = 0;
              b = r[a + 74 | 0];
              o[a + 74 | 0] = b + -1 | b;
              b = q[a >> 2];

              if (b & 8) {
                q[a >> 2] = b | 32;
                return -1;
              }

              q[a + 4 >> 2] = 0;
              q[a + 8 >> 2] = 0;
              b = q[a + 44 >> 2];
              q[a + 28 >> 2] = b;
              q[a + 20 >> 2] = b;
              q[a + 16 >> 2] = b + q[a + 48 >> 2];
              return 0;
            }

            function Ln(a, b) {
              var c = 0;
              c = ma - 16 | 0;
              ma = c;
              zd(c + 8 | 0, Ea(b));
              Ra(a, c + 8 | 0);
              b = q[a + 4 >> 2];

              a: {
                if (b >>> 0 > 3) {
                  break a;
                }

                b: {
                  switch (b - 1 | 0) {
                    case 0:
                    case 1:
                      break a;

                    default:
                      break b;
                  }
                }

                q[a >> 2] = 2143289344;
              }

              ma = c + 16 | 0;
            }

            function bi(a, b) {
              var c = 0,
                  d = 0;
              c = r[a | 0];
              d = r[b | 0];

              a: {
                if (!c | (d | 0) != (c | 0)) {
                  break a;
                }

                while (1) {
                  d = r[b + 1 | 0];
                  c = r[a + 1 | 0];

                  if (!c) {
                    break a;
                  }

                  b = b + 1 | 0;
                  a = a + 1 | 0;

                  if ((c | 0) == (d | 0)) {
                    continue;
                  }

                  break;
                }
              }

              return c - d | 0;
            }

            function Wi(a, b) {
              a = a | 0;
              b = b | 0;
              var c = 0,
                  d = 0,
                  e = 0,
                  f = 0;
              c = ma - 48 | 0;
              ma = c;
              d = q[a >> 2];
              e = c;
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              f = b;

              if (a & 1) {
                d = q[q[b >> 2] + d >> 2];
              }

              n[d](e, f);
              a = fb(bb(48), c, 48);
              ma = c + 48 | 0;
              return a | 0;
            }

            function hj(a, b, c, d, e, f) {
              a = a | 0;
              b = b | 0;
              c = x(c);
              d = d | 0;
              e = x(e);
              f = f | 0;
              var g = 0;
              g = ma - 16 | 0;
              ma = g;
              q[g + 8 >> 2] = d;
              u[g + 12 >> 2] = c;
              u[g + 4 >> 2] = e;
              q[g >> 2] = f;
              gj(a, q[b + 8 >> 2], g + 12 | 0, g + 8 | 0, g + 4 | 0, g);
              ma = g + 16 | 0;
            }

            function _i(a, b) {
              a = a | 0;
              b = b | 0;
              var c = 0,
                  d = 0,
                  e = 0,
                  f = 0;
              c = ma - 16 | 0;
              ma = c;
              d = q[a >> 2];
              e = c + 8 | 0;
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              f = b;

              if (a & 1) {
                d = q[q[b >> 2] + d >> 2];
              }

              n[d](e, f);
              a = La(c + 8 | 0);
              ma = c + 16 | 0;
              return a | 0;
            }

            function Ne(a, b, c, d) {
              var e = 0,
                  f = 0,
                  g = 0,
                  h = 0;
              f = q[a + 4 >> 2];
              a = q[a >> 2];
              g = a;
              h = b;
              e = 0;

              a: {
                if (!c) {
                  break a;
                }

                b = f >> 8;
                e = b;

                if (!(f & 1)) {
                  break a;
                }

                e = q[b + q[c >> 2] >> 2];
              }

              n[q[q[a >> 2] + 28 >> 2]](g, h, e + c | 0, f & 2 ? d : 2);
            }

            function Bn(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 32 | 0;
              ma = c;
              Cc(c + 24 | 0);
              q[c + 20 >> 2] = 0;
              q[c + 16 >> 2] = 17;
              q[c + 4 >> 2] = q[c + 24 >> 2];
              d = q[c + 20 >> 2];
              q[c + 8 >> 2] = q[c + 16 >> 2];
              q[c + 12 >> 2] = d;
              fe(a, c + 8 | 0, b, c + 4 | 0);
              ma = c + 32 | 0;
            }

            function xm(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0;
              d = ma - 16 | 0;
              ma = d;
              e = q[a >> 2];
              f = d + 8 | 0;
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              g = b;

              if (a & 1) {
                e = q[e + q[b >> 2] >> 2];
              }

              n[e](f, g);
              a = Vc(d + 8 | 0);
              ma = d + 16 | 0;
              return (a | 0) != (c | 0);
            }

            function vm(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0;
              d = ma - 16 | 0;
              ma = d;
              e = q[a >> 2];
              f = d + 8 | 0;
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              g = b;

              if (a & 1) {
                e = q[e + q[b >> 2] >> 2];
              }

              n[e](f, g);
              a = eb(d + 8 | 0);
              ma = d + 16 | 0;
              return (a | 0) != (c | 0);
            }

            function sm(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0;
              d = ma - 16 | 0;
              ma = d;
              e = q[a >> 2];
              f = d + 8 | 0;
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              g = b;

              if (a & 1) {
                e = q[e + q[b >> 2] >> 2];
              }

              n[e](f, g);
              a = jb(d + 8 | 0);
              ma = d + 16 | 0;
              return (a | 0) != (c | 0);
            }

            function mn(a) {
              var b = 0,
                  c = 0;
              b = ma - 32 | 0;
              ma = b;
              Cc(b + 24 | 0);
              q[b + 20 >> 2] = 0;
              q[b + 16 >> 2] = 21;
              q[b + 4 >> 2] = q[b + 24 >> 2];
              c = q[b + 20 >> 2];
              q[b + 8 >> 2] = q[b + 16 >> 2];
              q[b + 12 >> 2] = c;
              Ic(a, b + 8 | 0, 0, b + 4 | 0);
              ma = b + 32 | 0;
            }

            function jn(a) {
              var b = 0,
                  c = 0;
              b = ma - 32 | 0;
              ma = b;
              Cc(b + 24 | 0);
              q[b + 20 >> 2] = 0;
              q[b + 16 >> 2] = 21;
              q[b + 4 >> 2] = q[b + 24 >> 2];
              c = q[b + 20 >> 2];
              q[b + 8 >> 2] = q[b + 16 >> 2];
              q[b + 12 >> 2] = c;
              Ic(a, b + 8 | 0, 1, b + 4 | 0);
              ma = b + 32 | 0;
            }

            function Fd(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 16 | 0;
              ma = c;
              q[c + 12 >> 2] = b;
              d = Dg(a);

              if (d >>> 0 >= b >>> 0) {
                a = Ib(a);

                if (a >>> 0 < d >>> 1 >>> 0) {
                  q[c + 8 >> 2] = a << 1;
                  d = q[xg(c + 8 | 0, c + 12 | 0) >> 2];
                }

                ma = c + 16 | 0;
                return d;
              }

              Qe();
              F();
            }

            function Cm(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0;
              d = ma - 16 | 0;
              ma = d;
              e = q[a >> 2];
              f = d + 8 | 0;
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              g = b;

              if (a & 1) {
                e = q[e + q[b >> 2] >> 2];
              }

              n[e](f, g);
              a = uc(d + 8 | 0);
              ma = d + 16 | 0;
              return (a | 0) != (c | 0);
            }

            function Am(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0;
              d = ma - 16 | 0;
              ma = d;
              e = q[a >> 2];
              f = d + 8 | 0;
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              g = b;

              if (a & 1) {
                e = q[e + q[b >> 2] >> 2];
              }

              n[e](f, g);
              a = jd(d + 8 | 0);
              ma = d + 16 | 0;
              return (a | 0) != (c | 0);
            }

            function ic(a) {
              var b = 0,
                  c = 0;
              b = q[2780];
              c = a + 3 & -4;
              a = b + c | 0;

              a: {
                if (a >>> 0 <= b >>> 0 ? (c | 0) >= 1 : 0) {
                  break a;
                }

                if (a >>> 0 > oa() << 16 >>> 0) {
                  if (!ca(a | 0)) {
                    break a;
                  }
                }

                q[2780] = a;
                return b;
              }

              q[2373] = 48;
              return -1;
            }

            function kg(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 320 | 0;
              ma = c;

              a: {
                if (!Zb(a)) {
                  break a;
                }

                d = q[b + 540 >> 2];

                if (!bh(a, b)) {
                  break a;
                }

                if ((a | 0) == (d | 0)) {
                  fb(b + 216 | 0, ee(gb(c, 0, 320)), 320);
                  Xb(b, 0);
                }

                Sa(a);
              }

              ma = c + 320 | 0;
            }

            function Me(a, b) {
              var c = 0;

              a: {
                if (!b) {
                  break a;
                }

                b = wb(b, 8324);

                if (!b | q[b + 8 >> 2] & (q[a + 8 >> 2] ^ -1)) {
                  break a;
                }

                if (!Ua(q[a + 12 >> 2], q[b + 12 >> 2], 0)) {
                  break a;
                }

                c = Ua(q[a + 16 >> 2], q[b + 16 >> 2], 0);
              }

              return c;
            }

            function zo(a) {
              var b = 0,
                  c = 0,
                  d = 0;
              b = ma - 576 | 0;
              ma = b;
              ub(a, !Ka(a + 544 | 0), 1104);
              ub(a, !q[a + 540 >> 2], 1158);
              Wg(a);
              d = tb(r[a + 4 | 0], 7);
              c = Kg(b, q[a + 556 >> 2]);
              yo(a, c);
              Jg(c);

              if (d) {
                $d(a);
              }

              ma = b + 576 | 0;
            }

            function hh(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0;
              d = ma - 32 | 0;
              ma = d;
              q[d + 28 >> 2] = b;
              a = a + 544 | 0;
              e = d, f = ib(a), q[e + 8 >> 2] = f;
              e = d, f = gh(d + 8 | 0, c), q[e + 16 >> 2] = f;
              fh(a, q[Ie(d + 24 | 0, d + 16 | 0) >> 2], d + 28 | 0);
              ma = d + 32 | 0;
            }

            function ce(a, b, c) {
              var d = 0,
                  e = x(0),
                  f = 0,
                  g = x(0);
              d = ma - 16 | 0;
              ma = d;
              e = u[Da(Ga(a) + 288 | 0, q[Da(1848, b) >> 2]) >> 2];
              f = d, g = kb(sb(a, b, c), Sb(a, b, c)), u[f + 8 >> 2] = g;
              ma = d + 16 | 0;
              return x(e + u[d + 8 >> 2]);
            }

            function zn(a, b, c, d) {
              var e = 0,
                  f = 0;
              e = ma - 32 | 0;
              ma = e;
              f = Ea(a);
              b = q[b >> 2];
              q[e + 12 >> 2] = b;
              q[e + 24 >> 2] = b;

              if (dm(c, f, e + 12 | 0)) {
                c = Ea(a);
                q[e + 8 >> 2] = b;
                q[e + 16 >> 2] = b;
                cm(d, c, e + 8 | 0);
                Sa(a);
              }

              ma = e + 32 | 0;
            }

            function zm(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0;
              d = ma - 16 | 0;
              ma = d;
              e = q[a >> 2];
              f = d + 8 | 0;
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              g = b;

              if (a & 1) {
                e = q[q[b >> 2] + e >> 2];
              }

              n[e](f, g);
              ym(q[d + 8 >> 2], q[d + 12 >> 2], c);
              ma = d + 16 | 0;
            }

            function vn(a, b, c, d) {
              var e = 0,
                  f = 0;
              e = ma - 32 | 0;
              ma = e;
              f = Ea(a);
              b = q[b >> 2];
              q[e + 12 >> 2] = b;
              q[e + 24 >> 2] = b;

              if (bm(c, f, e + 12 | 0)) {
                c = Ea(a);
                q[e + 8 >> 2] = b;
                q[e + 16 >> 2] = b;
                am(d, c, e + 8 | 0);
                Sa(a);
              }

              ma = e + 32 | 0;
            }

            function um(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0;
              d = ma - 16 | 0;
              ma = d;
              e = q[a >> 2];
              f = d + 8 | 0;
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              g = b;

              if (a & 1) {
                e = q[q[b >> 2] + e >> 2];
              }

              n[e](f, g);
              tm(q[d + 8 >> 2], q[d + 12 >> 2], c);
              ma = d + 16 | 0;
            }

            function rm(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0;
              d = ma - 16 | 0;
              ma = d;
              e = q[a >> 2];
              f = d + 8 | 0;
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              g = b;

              if (a & 1) {
                e = q[q[b >> 2] + e >> 2];
              }

              n[e](f, g);
              qm(q[d + 8 >> 2], q[d + 12 >> 2], c);
              ma = d + 16 | 0;
            }

            function on(a, b, c, d) {
              var e = 0,
                  f = 0;
              e = ma - 32 | 0;
              ma = e;
              f = Ea(a);
              b = q[b >> 2];
              q[e + 12 >> 2] = b;
              q[e + 24 >> 2] = b;

              if (Yl(c, f, e + 12 | 0)) {
                c = Ea(a);
                q[e + 8 >> 2] = b;
                q[e + 16 >> 2] = b;
                Xl(d, c, e + 8 | 0);
                Sa(a);
              }

              ma = e + 32 | 0;
            }

            function gn(a, b, c, d) {
              var e = 0,
                  f = 0;
              e = ma - 32 | 0;
              ma = e;
              f = Ea(a);
              b = q[b >> 2];
              q[e + 12 >> 2] = b;
              q[e + 24 >> 2] = b;

              if (Wl(c, f, e + 12 | 0)) {
                c = Ea(a);
                q[e + 8 >> 2] = b;
                q[e + 16 >> 2] = b;
                Vl(d, c, e + 8 | 0);
                Sa(a);
              }

              ma = e + 32 | 0;
            }

            function bn(a, b, c, d) {
              var e = 0,
                  f = 0;
              e = ma - 32 | 0;
              ma = e;
              f = Ea(a);
              b = q[b >> 2];
              q[e + 12 >> 2] = b;
              q[e + 24 >> 2] = b;

              if (Ul(c, f, e + 12 | 0)) {
                c = Ea(a);
                q[e + 8 >> 2] = b;
                q[e + 16 >> 2] = b;
                Tl(d, c, e + 8 | 0);
                Sa(a);
              }

              ma = e + 32 | 0;
            }

            function Qf(a, b, c) {
              var d = x(0);
              d = u[Da(Ga(b) + 288 | 0, q[Da(1848, c) >> 2]) >> 2];
              Qa(b, x(x(u[Da(Ga(a) + 288 | 0, q[Da(1848, c) >> 2]) >> 2] - d) - u[Da(Ga(b), q[Da(2184, c) >> 2]) >> 2]), q[Da(1612, c) >> 2]);
            }

            function Jn(a, b, c, d) {
              var e = 0,
                  f = 0;
              e = ma - 32 | 0;
              ma = e;
              f = Ea(a);
              b = q[b >> 2];
              q[e + 12 >> 2] = b;
              q[e + 24 >> 2] = b;

              if (jm(c, f, e + 12 | 0)) {
                c = Ea(a);
                q[e + 8 >> 2] = b;
                q[e + 16 >> 2] = b;
                im(d, c, e + 8 | 0);
                Sa(a);
              }

              ma = e + 32 | 0;
            }

            function Gn(a, b, c, d) {
              var e = 0,
                  f = 0;
              e = ma - 32 | 0;
              ma = e;
              f = Ea(a);
              b = q[b >> 2];
              q[e + 12 >> 2] = b;
              q[e + 24 >> 2] = b;

              if (hm(c, f, e + 12 | 0)) {
                c = Ea(a);
                q[e + 8 >> 2] = b;
                q[e + 16 >> 2] = b;
                gm(d, c, e + 8 | 0);
                Sa(a);
              }

              ma = e + 32 | 0;
            }

            function Dn(a, b, c, d) {
              var e = 0,
                  f = 0;
              e = ma - 32 | 0;
              ma = e;
              f = Ea(a);
              b = q[b >> 2];
              q[e + 12 >> 2] = b;
              q[e + 24 >> 2] = b;

              if (fm(c, f, e + 12 | 0)) {
                c = Ea(a);
                q[e + 8 >> 2] = b;
                q[e + 16 >> 2] = b;
                em(d, c, e + 8 | 0);
                Sa(a);
              }

              ma = e + 32 | 0;
            }

            function qn(a, b, c) {
              var d = 0,
                  e = 0;
              d = ma - 16 | 0;
              ma = d;
              e = q[b >> 2];
              b = q[b + 4 >> 2];
              q[d + 12 >> 2] = b;
              q[d + 8 >> 2] = e;
              q[d + 4 >> 2] = b;
              q[d >> 2] = e;
              b = d;

              if (_l(d + 8 | 0, Ea(a), c)) {
                Zl(b, Ea(a), c);
                Sa(a);
              }

              ma = d + 16 | 0;
            }

            function ig(a, b, c) {
              var d = 0,
                  e = 0;
              d = ma - 16 | 0;
              ma = d;
              e = q[b >> 2];
              b = q[b + 4 >> 2];
              q[d + 12 >> 2] = b;
              q[d + 8 >> 2] = e;
              q[d + 4 >> 2] = b;
              q[d >> 2] = e;
              b = d;

              if (vm(d + 8 | 0, Ea(a), c)) {
                um(b, Ea(a), c);
                Sa(a);
              }

              ma = d + 16 | 0;
            }

            function hg(a, b, c) {
              var d = 0,
                  e = 0;
              d = ma - 16 | 0;
              ma = d;
              e = q[b >> 2];
              b = q[b + 4 >> 2];
              q[d + 12 >> 2] = b;
              q[d + 8 >> 2] = e;
              q[d + 4 >> 2] = b;
              q[d >> 2] = e;
              b = d;

              if (sm(d + 8 | 0, Ea(a), c)) {
                rm(b, Ea(a), c);
                Sa(a);
              }

              ma = d + 16 | 0;
            }

            function ge(a, b, c) {
              var d = 0,
                  e = 0;
              d = ma - 16 | 0;
              ma = d;
              e = q[b >> 2];
              b = q[b + 4 >> 2];
              q[d + 12 >> 2] = b;
              q[d + 8 >> 2] = e;
              q[d + 4 >> 2] = b;
              q[d >> 2] = e;
              b = d;

              if (xm(d + 8 | 0, Ea(a), c)) {
                wm(b, Ea(a), c);
                Sa(a);
              }

              ma = d + 16 | 0;
            }

            function Zn(a, b, c) {
              var d = 0,
                  e = 0;
              d = ma - 16 | 0;
              ma = d;
              e = q[b >> 2];
              b = q[b + 4 >> 2];
              q[d + 12 >> 2] = b;
              q[d + 8 >> 2] = e;
              q[d + 4 >> 2] = b;
              q[d >> 2] = e;
              b = d;

              if (Am(d + 8 | 0, Ea(a), c)) {
                zm(b, Ea(a), c);
                Sa(a);
              }

              ma = d + 16 | 0;
            }

            function Qn(a, b, c) {
              var d = 0,
                  e = 0;
              d = ma - 16 | 0;
              ma = d;
              e = q[b >> 2];
              b = q[b + 4 >> 2];
              q[d + 12 >> 2] = b;
              q[d + 8 >> 2] = e;
              q[d + 4 >> 2] = b;
              q[d >> 2] = e;
              b = d;

              if (pm(d + 8 | 0, Ea(a), c)) {
                om(b, Ea(a), c);
                Sa(a);
              }

              ma = d + 16 | 0;
            }

            function On(a, b, c) {
              var d = 0,
                  e = 0;
              d = ma - 16 | 0;
              ma = d;
              e = q[b >> 2];
              b = q[b + 4 >> 2];
              q[d + 12 >> 2] = b;
              q[d + 8 >> 2] = e;
              q[d + 4 >> 2] = b;
              q[d >> 2] = e;
              b = d;

              if (nm(d + 8 | 0, Ea(a), c)) {
                mm(b, Ea(a), c);
                Sa(a);
              }

              ma = d + 16 | 0;
            }

            function Mn(a, b, c) {
              var d = 0,
                  e = 0;
              d = ma - 16 | 0;
              ma = d;
              e = q[b >> 2];
              b = q[b + 4 >> 2];
              q[d + 12 >> 2] = b;
              q[d + 8 >> 2] = e;
              q[d + 4 >> 2] = b;
              q[d >> 2] = e;
              b = d;

              if (lm(d + 8 | 0, Ea(a), c)) {
                km(b, Ea(a), c);
                Sa(a);
              }

              ma = d + 16 | 0;
            }

            function $n(a, b, c) {
              var d = 0,
                  e = 0;
              d = ma - 16 | 0;
              ma = d;
              e = q[b >> 2];
              b = q[b + 4 >> 2];
              q[d + 12 >> 2] = b;
              q[d + 8 >> 2] = e;
              q[d + 4 >> 2] = b;
              q[d >> 2] = e;
              b = d;

              if (Cm(d + 8 | 0, Ea(a), c)) {
                Bm(b, Ea(a), c);
                Sa(a);
              }

              ma = d + 16 | 0;
            }

            function bd(a, b) {
              var c = 0;
              c = ma - 32 | 0;
              ma = c;

              a: {
                if (Je(a)) {
                  b = u[Ma(c + 24 | 0, x(0)) >> 2];
                  break a;
                }

                a = q[a >> 2];
                q[c + 12 >> 2] = a;
                q[c + 16 >> 2] = a;
                b = Pa(c + 12 | 0, b);
                u[c + 24 >> 2] = b;
              }

              ma = c + 32 | 0;
              return b;
            }

            function rn(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 32 | 0;
              ma = c;
              d = Ma(c + 24 | 0, b);
              q[c + 20 >> 2] = 0;
              q[c + 16 >> 2] = 20;
              b = u[d >> 2];
              d = q[c + 20 >> 2];
              q[c + 8 >> 2] = q[c + 16 >> 2];
              q[c + 12 >> 2] = d;
              qn(a, c + 8 | 0, b);
              ma = c + 32 | 0;
            }

            function Rn(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 32 | 0;
              ma = c;
              d = Ma(c + 24 | 0, b);
              q[c + 20 >> 2] = 0;
              q[c + 16 >> 2] = 12;
              b = u[d >> 2];
              d = q[c + 20 >> 2];
              q[c + 8 >> 2] = q[c + 16 >> 2];
              q[c + 12 >> 2] = d;
              Qn(a, c + 8 | 0, b);
              ma = c + 32 | 0;
            }

            function Qk(a, b) {
              var c = 0,
                  d = 0,
                  e = 0;
              yg(a);
              q[a >> 2] = q[b >> 2];
              q[a + 4 >> 2] = q[b + 4 >> 2];
              c = q[Na(b) >> 2];
              d = Na(a), e = c, q[d >> 2] = e;
              d = Na(b), e = 0, q[d >> 2] = e;
              q[b >> 2] = 0;
              q[b + 4 >> 2] = 0;
            }

            function Pn(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 32 | 0;
              ma = c;
              d = Ma(c + 24 | 0, b);
              q[c + 20 >> 2] = 0;
              q[c + 16 >> 2] = 13;
              b = u[d >> 2];
              d = q[c + 20 >> 2];
              q[c + 8 >> 2] = q[c + 16 >> 2];
              q[c + 12 >> 2] = d;
              On(a, c + 8 | 0, b);
              ma = c + 32 | 0;
            }

            function Nn(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 32 | 0;
              ma = c;
              d = Ma(c + 24 | 0, b);
              q[c + 20 >> 2] = 0;
              q[c + 16 >> 2] = 14;
              b = u[d >> 2];
              d = q[c + 20 >> 2];
              q[c + 8 >> 2] = q[c + 16 >> 2];
              q[c + 12 >> 2] = d;
              Mn(a, c + 8 | 0, b);
              ma = c + 32 | 0;
            }

            function Vf(a, b, c, d, e) {
              var f = 0;

              a: {
                if ((a | 0) != 2 | (c | 0) != 2) {
                  break a;
                }

                if (Fa(d)) {
                  break a;
                }

                if (Fa(b)) {
                  break a;
                }

                if (Fa(e) | d > b ^ 1) {
                  break a;
                }

                f = 1;

                if (e <= b) {
                  break a;
                }

                f = Ta(b, e);
              }

              return f;
            }

            function co(a) {
              var b = 0,
                  c = x(0),
                  d = 0,
                  e = x(0);
              b = ma - 16 | 0;
              ma = b;
              d = b, e = u[Ea(a) + 8 >> 2], u[d + 8 >> 2] = e;

              if (!Ia(b + 8 | 0)) {
                d = b, e = u[Ea(a) + 8 >> 2], u[d >> 2] = e;
                c = u[b >> 2];
              }

              ma = b + 16 | 0;
              return c;
            }

            function Pc(a, b) {
              var c = 0;
              c = ma - 16 | 0;
              ma = c;
              u[c + 4 >> 2] = b;
              u[c + 8 >> 2] = a;

              a: {
                if (Ed(a, b)) {
                  b = a;
                  break a;
                }

                if (Ee(b, a)) {
                  break a;
                }

                b = u[(Ia(c + 8 | 0) ? c + 4 | 0 : c + 8 | 0) >> 2];
              }

              ma = c + 16 | 0;
              return b;
            }

            function Vj() {
              var a = 0;
              a = ma - 16 | 0;
              ma = a;
              P(4008, 2426, 4016, 37, 3917, 38);
              Bc(Bc(Bc(Bc(Bc(Bc(a + 8 | 0, 2433, 0), 2438, 8), 2444, 16), 2448, 24), 2455, 32), 2461, 40);
              O(4008);
              ma = a + 16 | 0;
            }

            function Dm(a, b) {
              var c = 0,
                  d = 0,
                  e = 0;
              d = ma - 32 | 0;
              ma = d;
              c = Na(a);
              e = c;
              c = Oc(d + 8 | 0, Fd(a, Ka(a) + 1 | 0), Ka(a), c);
              $c(e, q[c + 8 >> 2], b);
              q[c + 8 >> 2] = q[c + 8 >> 2] + 4;
              ze(a, c);
              Nc(c);
              ma = d + 32 | 0;
            }

            function wm(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0;
              d = ma - 16 | 0;
              ma = d;
              e = q[a >> 2];
              f = d + 8 | 0;
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              g = b;

              if (a & 1) {
                e = q[e + q[b >> 2] >> 2];
              }

              n[e](f, g);
              hd(d + 8 | 0, c);
              ma = d + 16 | 0;
            }

            function Jo(a, b) {
              var c = 0,
                  d = 0,
                  e = 0;
              c = ma - 16 | 0;
              ma = c;
              q[c + 8 >> 2] = b;
              d = c, e = ib(a), q[d >> 2] = e;
              b = Gd(c + 8 | 0, c);
              b = q[a >> 2] + (b << 2) | 0;
              ah(a, Dd(b + 4 | 0, q[a + 4 >> 2], b));
              gd(b);
              ma = c + 16 | 0;
            }

            function Eo(a, b) {
              var c = 0;
              c = ma - 16 | 0;
              ma = c;
              q[c >> 2] = b;
              q[c + 8 >> 2] = a;

              if (Oa(c + 8 | 0, c)) {
                while (1) {
                  Qg(q[q[c + 8 >> 2] >> 2]);
                  ob(c + 8 | 0);

                  if (Oa(c + 8 | 0, c)) {
                    continue;
                  }

                  break;
                }
              }

              ma = c + 16 | 0;
            }

            function Bm(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0;
              d = ma - 16 | 0;
              ma = d;
              e = q[a >> 2];
              f = d + 8 | 0;
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              g = b;

              if (a & 1) {
                e = q[e + q[b >> 2] >> 2];
              }

              n[e](f, g);
              vf(d + 8 | 0, c);
              ma = d + 16 | 0;
            }

            function rc(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 16 | 0;
              ma = c;
              u[c >> 2] = b;
              u[c + 8 >> 2] = a;
              d = 1;

              a: {
                if (u[c + 8 >> 2] == u[c >> 2]) {
                  break a;
                }

                d = 0;

                if (!Ia(c + 8 | 0)) {
                  break a;
                }

                d = Ia(c);
              }

              ma = c + 16 | 0;
              return d;
            }

            function Pm(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
              var r = x(0),
                  s = 0,
                  t = x(0);
              r = u[b + 32 >> 2];
              Hm(b, c, e, f, h);
              s = b, t = x(r - Gm(b, a, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q)), u[s + 32 >> 2] = t;
            }

            function tc(a, b, c) {
              var d = 0;
              d = a;

              a: {
                b: {
                  if (!Wa(c)) {
                    break b;
                  }

                  a = b + 24 | 0;

                  if (Va(Ha(lb(a), 4))) {
                    break b;
                  }

                  a = Ha(lb(a), 4);
                  break a;
                }

                a = Ha(lb(b + 24 | 0), q[Da(1596, c) >> 2]);
              }

              Ra(d, a);
            }

            function sc(a, b, c) {
              var d = 0;
              d = a;

              a: {
                b: {
                  if (!Wa(c)) {
                    break b;
                  }

                  a = b + 24 | 0;

                  if (Va(Ha(lb(a), 5))) {
                    break b;
                  }

                  a = Ha(lb(a), 5);
                  break a;
                }

                a = Ha(lb(b + 24 | 0), q[Da(1612, c) >> 2]);
              }

              Ra(d, a);
            }

            function Ve(a) {
              var b = 0,
                  c = 0,
                  d = 0;

              if (Rc(o[q[a >> 2]])) {
                while (1) {
                  b = q[a >> 2];
                  d = o[b | 0];
                  q[a >> 2] = b + 1;
                  c = (w(c, 10) + d | 0) + -48 | 0;

                  if (Rc(o[b + 1 | 0])) {
                    continue;
                  }

                  break;
                }
              }

              return c;
            }

            function Sa(a) {
              var b = 0;
              b = ma - 16 | 0;
              ma = b;

              a: {
                if (tb(r[a + 4 | 0], 2)) {
                  break a;
                }

                Fe(a, 1);
                q[b + 8 >> 2] = 0;
                Mc(a, u[Wb(b + 8 | 0) >> 2]);
                a = q[a + 540 >> 2];

                if (!a) {
                  break a;
                }

                Sa(a);
              }

              ma = b + 16 | 0;
            }

            function lg(a) {
              var b = 0,
                  c = 0;

              if (Zb(a)) {
                while (1) {
                  c = nc(a, b);

                  a: {
                    if (q[c + 540 >> 2] != (a | 0)) {
                      b = b + 1 | 0;
                      break a;
                    }

                    kg(a, c);
                    lg(c);
                  }

                  if (Zb(a) >>> 0 > b >>> 0) {
                    continue;
                  }

                  break;
                }
              }

              mg(a);
            }

            function ej(a, b, c, d, e) {
              var f = 0;
              f = ma - 16 | 0;
              ma = f;
              q[f + 12 >> 2] = a;
              hf(f + 12 | 0, u[b >> 2]);
              gf(f + 12 | 0, q[c >> 2]);
              hf(f + 12 | 0, u[d >> 2]);
              gf(f + 12 | 0, q[e >> 2]);
              ma = f + 16 | 0;
              return a;
            }

            function Pg(a) {
              var b = 0,
                  c = 0;
              c = ma - 16 | 0;
              ma = c;
              zb(c + 8 | 0, a + 24 | 0);
              b = 0;

              a: {
                if (eb(c + 8 | 0)) {
                  break a;
                }

                b = 1;

                if (qc(a) != x(0)) {
                  break a;
                }

                b = Kc(a) != x(0);
              }

              a = b;
              ma = c + 16 | 0;
              return a;
            }

            function Yh(a, b) {
              var c = 0,
                  d = 0;
              c = a;
              d = b;

              a: {
                if (r[a + 8 | 0] & 24) {
                  a = 1;
                } else {
                  a = 0;

                  if (!b) {
                    break a;
                  }

                  b = wb(b, 8164);

                  if (!b) {
                    break a;
                  }

                  a = (r[b + 8 | 0] & 24) != 0;
                }

                a = Ua(c, d, a);
              }

              return a;
            }

            function Qb(a, b) {
              var c = 0;
              c = ma - 32 | 0;
              ma = c;
              a = q[a >> 2];
              q[c + 24 >> 2] = a;
              b = q[b >> 2];
              q[c + 16 >> 2] = b;
              q[c + 12 >> 2] = a;
              q[c + 8 >> 2] = b;
              ma = c + 32 | 0;
              return q[c + 12 >> 2] == q[c + 8 >> 2] ^ 1;
            }

            function Rh(a, b, c, d, e, f) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              d = d | 0;
              e = e | 0;
              f = f | 0;

              if (Ua(a, q[b + 8 >> 2], f)) {
                Ld(b, c, d, e);
                return;
              }

              a = q[a + 8 >> 2];
              n[q[q[a >> 2] + 20 >> 2]](a, b, c, d, e, f);
            }

            function jj() {
              var a = 0,
                  b = 0;

              a: {
                if (o[9468] & 1) {
                  break a;
                }

                if (!Pd(9468)) {
                  break a;
                }

                a = ma - 16 | 0;
                ma = a;
                b = X(1, 4384) | 0;
                ma = a + 16 | 0;
                q[2366] = b;
                Od(9468);
              }

              return q[2366];
            }

            function fj() {
              var a = 0,
                  b = 0;

              a: {
                if (o[9476] & 1) {
                  break a;
                }

                if (!Pd(9476)) {
                  break a;
                }

                a = ma - 16 | 0;
                ma = a;
                b = X(5, 4592) | 0;
                ma = a + 16 | 0;
                q[2368] = b;
                Od(9476);
              }

              return q[2368];
            }

            function Ya(a, b, c, d, e) {
              var f = 0,
                  g = 0,
                  h = x(0);
              f = ma - 16 | 0;
              ma = f;
              g = f, h = Ec(a, b, u[Ma(f, c) >> 2], d), u[g + 8 >> 2] = h;
              c = Xa(u[f + 8 >> 2], yb(a, b, e));
              ma = f + 16 | 0;
              return c;
            }

            function Ta(a, b) {
              var c = 0;

              a: {
                if (Fa(a)) {
                  break a;
                }

                if (Fa(b)) {
                  break a;
                }

                return x(y(x(a - b))) < x(9999999747378752e-20);
              }

              if (Fa(a)) {
                c = Fa(b);
              } else {
                c = 0;
              }

              return c;
            }

            function Ae(a, b) {
              var c = 0;
              c = ma - 16 | 0;
              ma = c;
              a = a + 24 | 0;
              Xg(c + 8 | 0, a);
              b = (b | 0) > 1 ? b : 1;

              a: {
                if (!jb(c + 8 | 0)) {
                  break a;
                }

                Xg(c + 8 | 0, a);
                b = jb(c + 8 | 0);
              }

              ma = c + 16 | 0;
              return b;
            }

            function sn(a) {
              var b = 0,
                  c = x(0),
                  d = 0,
                  e = x(0);
              b = ma - 16 | 0;
              ma = b;
              d = b, e = u[Ea(a) + 188 >> 2], u[d + 8 >> 2] = e;
              c = x(G);

              if (!Ia(b + 8 | 0)) {
                c = u[b + 8 >> 2];
              }

              ma = b + 16 | 0;
              return c;
            }

            function Jd(a, b, c, d, e, f) {
              var g = 0,
                  h = 0,
                  i = 0;
              g = q[a + 4 >> 2];
              h = g >> 8;
              a = q[a >> 2];
              i = a;

              if (g & 1) {
                h = q[q[d >> 2] + h >> 2];
              }

              n[q[q[a >> 2] + 20 >> 2]](i, b, c, d + h | 0, g & 2 ? e : 2, f);
            }

            function Xi(a, b, c, d, e) {
              a = a | 0;
              b = b | 0;
              c = +c;
              d = +d;
              e = e | 0;
              var f = 0,
                  g = 0;
              f = q[a >> 2];
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              g = b;

              if (a & 1) {
                f = q[f + q[b >> 2] >> 2];
              }

              n[f](g, c, d, e);
            }

            function wf(a, b, c) {
              var d = 0;
              d = ma - 16 | 0;
              ma = d;
              q[d + 12 >> 2] = c;
              N(4160, b | 0, 8564, 5124, 162, Mb(d + 12 | 0) | 0, 8564, 3972, 163, Mb(d + 12 | 0) | 0);
              ma = d + 16 | 0;
              return a;
            }

            function Ig(a, b, c, d, e) {
              var f = 0;
              f = q[a >> 2];

              a: {
                if (f) {
                  b: {
                    if (r[a + 8 | 0]) {
                      a = n[f](b, c, d, e) | 0;
                      break b;
                    }

                    a = n[f](b, c, d) | 0;
                  }

                  if (a) {
                    break a;
                  }
                }

                a = ho(b);
              }

              return a;
            }

            function If(a, b) {
              a = a | 0;
              b = b | 0;
              var c = 0;
              c = ma - 320 | 0;
              ma = c;
              c = gb(c, 0, 320);
              ee(c);
              fb(Ga(a), c, 320);
              Lc(a, x(0), 0);
              Lc(a, x(0), 1);
              je(a);
              Em(a, b);
              ma = c + 320 | 0;
            }

            function ze(a, b) {
              var c = 0;
              pe(a);
              c = b + 4 | 0;
              wg(Na(a), q[a >> 2], q[a + 4 >> 2], c);
              Rb(a, c);
              Rb(a + 4 | 0, b + 8 | 0);
              Rb(Na(a), fc(b));
              q[b >> 2] = q[b + 4 >> 2];
              te(a, Ka(a));
            }

            function kc(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 16 | 0;
              ma = c;
              d = q[b + 4 >> 2];
              q[c + 8 >> 2] = q[b >> 2];
              q[c + 12 >> 2] = d;
              I(5176, a | 0, 4, 5280, 5296, 173, La(c + 8 | 0) | 0, 0);
              ma = c + 16 | 0;
            }

            function jc(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 16 | 0;
              ma = c;
              d = q[b + 4 >> 2];
              q[c + 8 >> 2] = q[b >> 2];
              q[c + 12 >> 2] = d;
              I(5176, a | 0, 2, 5336, 4564, 177, La(c + 8 | 0) | 0, 0);
              ma = c + 16 | 0;
            }

            function ed(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 16 | 0;
              ma = c;
              d = q[b + 4 >> 2];
              q[c + 8 >> 2] = q[b >> 2];
              q[c + 12 >> 2] = d;
              I(5176, a | 0, 3, 5352, 5364, 179, La(c + 8 | 0) | 0, 0);
              ma = c + 16 | 0;
            }

            function cd(a, b, c, d, e) {
              var f = 0,
                  g = 0,
                  h = 0;
              f = q[a + 4 >> 2];
              g = f >> 8;
              a = q[a >> 2];
              h = a;

              if (f & 1) {
                g = q[q[c >> 2] + g >> 2];
              }

              n[q[q[a >> 2] + 24 >> 2]](h, b, c + g | 0, f & 2 ? d : 2, e);
            }

            function cb(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 16 | 0;
              ma = c;
              d = q[b + 4 >> 2];
              q[c + 8 >> 2] = q[b >> 2];
              q[c + 12 >> 2] = d;
              I(5176, a | 0, 3, 5304, 4022, 174, La(c + 8 | 0) | 0, 0);
              ma = c + 16 | 0;
            }

            function Yd(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 16 | 0;
              ma = c;
              d = q[b + 4 >> 2];
              q[c + 8 >> 2] = q[b >> 2];
              q[c + 12 >> 2] = d;
              I(5176, a | 0, 3, 5324, 3992, 176, La(c + 8 | 0) | 0, 0);
              ma = c + 16 | 0;
            }

            function Ub(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 16 | 0;
              ma = c;
              d = q[b + 4 >> 2];
              q[c + 8 >> 2] = q[b >> 2];
              q[c + 12 >> 2] = d;
              I(5176, a | 0, 2, 5316, 4564, 175, La(c + 8 | 0) | 0, 0);
              ma = c + 16 | 0;
            }

            function Tb(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 16 | 0;
              ma = c;
              d = q[b + 4 >> 2];
              q[c + 8 >> 2] = q[b >> 2];
              q[c + 12 >> 2] = d;
              I(5176, a | 0, 2, 5344, 4018, 178, La(c + 8 | 0) | 0, 0);
              ma = c + 16 | 0;
            }

            function Lb(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 16 | 0;
              ma = c;
              d = q[b + 4 >> 2];
              q[c + 8 >> 2] = q[b >> 2];
              q[c + 12 >> 2] = d;
              I(5176, a | 0, 3, 5264, 5164, 172, La(c + 8 | 0) | 0, 0);
              ma = c + 16 | 0;
            }

            function Ac(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 16 | 0;
              ma = c;
              d = q[b + 4 >> 2];
              q[c + 8 >> 2] = q[b >> 2];
              q[c + 12 >> 2] = d;
              I(5176, a | 0, 2, 5244, 4524, 170, La(c + 8 | 0) | 0, 0);
              ma = c + 16 | 0;
            }

            function zj(a) {
              var b = 0,
                  c = 0;
              b = ma - 16 | 0;
              ma = b;
              c = q[a + 4 >> 2];
              q[b + 8 >> 2] = q[a >> 2];
              q[b + 12 >> 2] = c;
              I(5176, 3480, 3, 5392, 5164, 181, La(b + 8 | 0) | 0, 0);
              ma = b + 16 | 0;
            }

            function yj(a) {
              var b = 0,
                  c = 0;
              b = ma - 16 | 0;
              ma = b;
              c = q[a + 4 >> 2];
              q[b + 8 >> 2] = q[a >> 2];
              q[b + 12 >> 2] = c;
              I(5176, 3492, 2, 5404, 4564, 182, La(b + 8 | 0) | 0, 0);
              ma = b + 16 | 0;
            }

            function xj(a) {
              var b = 0,
                  c = 0;
              b = ma - 16 | 0;
              ma = b;
              c = q[a + 4 >> 2];
              q[b + 8 >> 2] = q[a >> 2];
              q[b + 12 >> 2] = c;
              I(5176, 3506, 2, 5412, 4564, 183, La(b + 8 | 0) | 0, 0);
              ma = b + 16 | 0;
            }

            function wj(a) {
              var b = 0,
                  c = 0;
              b = ma - 16 | 0;
              ma = b;
              c = q[a + 4 >> 2];
              q[b + 8 >> 2] = q[a >> 2];
              q[b + 12 >> 2] = c;
              I(5176, 3516, 3, 5420, 3992, 184, La(b + 8 | 0) | 0, 0);
              ma = b + 16 | 0;
            }

            function wi(a, b) {
              a = a | 0;
              b = b | 0;
              var c = 0,
                  d = 0,
                  e = 0;
              c = b;
              b = q[b >> 2] + 15 & -16;
              q[c >> 2] = b + 16;
              d = a, e = oi(q[b >> 2], q[b + 4 >> 2], q[b + 8 >> 2], q[b + 12 >> 2]), v[d >> 3] = e;
            }

            function vj(a) {
              var b = 0,
                  c = 0;
              b = ma - 16 | 0;
              ma = b;
              c = q[a + 4 >> 2];
              q[b + 8 >> 2] = q[a >> 2];
              q[b + 12 >> 2] = c;
              I(5176, 3525, 2, 5432, 4564, 185, La(b + 8 | 0) | 0, 0);
              ma = b + 16 | 0;
            }

            function uj(a) {
              var b = 0,
                  c = 0;
              b = ma - 16 | 0;
              ma = b;
              c = q[a + 4 >> 2];
              q[b + 8 >> 2] = q[a >> 2];
              q[b + 12 >> 2] = c;
              I(5176, 3545, 3, 5440, 5164, 186, La(b + 8 | 0) | 0, 0);
              ma = b + 16 | 0;
            }

            function tj(a) {
              var b = 0,
                  c = 0;
              b = ma - 16 | 0;
              ma = b;
              c = q[a + 4 >> 2];
              q[b + 8 >> 2] = q[a >> 2];
              q[b + 12 >> 2] = c;
              I(5176, 3568, 3, 5452, 5164, 187, La(b + 8 | 0) | 0, 0);
              ma = b + 16 | 0;
            }

            function sj(a) {
              var b = 0,
                  c = 0;
              b = ma - 16 | 0;
              ma = b;
              c = q[a + 4 >> 2];
              q[b + 8 >> 2] = q[a >> 2];
              q[b + 12 >> 2] = c;
              I(5176, 3600, 3, 5464, 5164, 188, La(b + 8 | 0) | 0, 0);
              ma = b + 16 | 0;
            }

            function rj(a) {
              var b = 0,
                  c = 0;
              b = ma - 16 | 0;
              ma = b;
              c = q[a + 4 >> 2];
              q[b + 8 >> 2] = q[a >> 2];
              q[b + 12 >> 2] = c;
              I(5176, 3642, 2, 5476, 4564, 189, La(b + 8 | 0) | 0, 0);
              ma = b + 16 | 0;
            }

            function qj(a) {
              var b = 0,
                  c = 0;
              b = ma - 16 | 0;
              ma = b;
              c = q[a + 4 >> 2];
              q[b + 8 >> 2] = q[a >> 2];
              q[b + 12 >> 2] = c;
              I(5176, 3650, 5, 5488, 5508, 190, La(b + 8 | 0) | 0, 0);
              ma = b + 16 | 0;
            }

            function pj(a) {
              var b = 0,
                  c = 0;
              b = ma - 16 | 0;
              ma = b;
              c = q[a + 4 >> 2];
              q[b + 8 >> 2] = q[a >> 2];
              q[b + 12 >> 2] = c;
              I(5176, 3767, 2, 5516, 4564, 191, La(b + 8 | 0) | 0, 0);
              ma = b + 16 | 0;
            }

            function Qj(a) {
              var b = 0,
                  c = 0;
              b = ma - 16 | 0;
              ma = b;
              c = q[a + 4 >> 2];
              q[b + 8 >> 2] = q[a >> 2];
              q[b + 12 >> 2] = c;
              I(4048, 2484, 6, 4128, 4192, 150, La(b + 8 | 0) | 0, 1);
              ma = b + 16 | 0;
            }

            function Kj(a) {
              var b = 0,
                  c = 0;
              b = ma - 16 | 0;
              ma = b;
              c = q[a + 4 >> 2];
              q[b + 8 >> 2] = q[a >> 2];
              q[b + 12 >> 2] = c;
              I(4780, 2531, 2, 4860, 4524, 155, La(b + 8 | 0) | 0, 1);
              ma = b + 16 | 0;
            }

            function Bj(a) {
              var b = 0,
                  c = 0;
              b = ma - 16 | 0;
              ma = b;
              c = q[a + 4 >> 2];
              q[b + 8 >> 2] = q[a >> 2];
              q[b + 12 >> 2] = c;
              I(5176, 2634, 3, 5252, 5164, 171, La(b + 8 | 0) | 0, 0);
              ma = b + 16 | 0;
            }

            function Bc(a, b, c) {
              var d = 0;
              d = ma - 16 | 0;
              ma = d;
              q[d + 12 >> 2] = c;
              N(4008, b | 0, 8576, 4018, 39, Mb(d + 12 | 0) | 0, 8576, 4022, 40, Mb(d + 12 | 0) | 0);
              ma = d + 16 | 0;
              return a;
            }

            function Aj(a) {
              var b = 0,
                  c = 0;
              b = ma - 16 | 0;
              ma = b;
              c = q[a + 4 >> 2];
              q[b + 8 >> 2] = q[a >> 2];
              q[b + 12 >> 2] = c;
              I(5176, 3468, 4, 5376, 3952, 180, La(b + 8 | 0) | 0, 0);
              ma = b + 16 | 0;
            }

            function zf(a) {
              q[a + 16 >> 2] = -1082130432;
              q[a + 20 >> 2] = -1082130432;
              q[a + 8 >> 2] = 0;
              q[a + 12 >> 2] = 0;
              q[a >> 2] = -1082130432;
              q[a + 4 >> 2] = -1082130432;
              return a;
            }

            function Yj(a) {
              var b = 0,
                  c = 0;
              b = ma - 16 | 0;
              ma = b;
              c = q[a + 4 >> 2];
              q[b + 8 >> 2] = q[a >> 2];
              q[b + 12 >> 2] = c;
              I(3848, 2347, 4, 3936, 3952, 34, La(b + 8 | 0) | 0, 0);
              ma = b + 16 | 0;
            }

            function Xj(a) {
              var b = 0,
                  c = 0;
              b = ma - 16 | 0;
              ma = b;
              c = q[a + 4 >> 2];
              q[b + 8 >> 2] = q[a >> 2];
              q[b + 12 >> 2] = c;
              I(3848, 2377, 3, 3960, 3972, 35, La(b + 8 | 0) | 0, 0);
              ma = b + 16 | 0;
            }

            function Wj(a) {
              var b = 0,
                  c = 0;
              b = ma - 16 | 0;
              ma = b;
              c = q[a + 4 >> 2];
              q[b + 8 >> 2] = q[a >> 2];
              q[b + 12 >> 2] = c;
              I(3848, 2397, 3, 3980, 3992, 36, La(b + 8 | 0) | 0, 0);
              ma = b + 16 | 0;
            }

            function Fj(a) {
              var b = 0;
              b = ma - 16 | 0;
              ma = b;
              q[b + 12 >> 2] = 0;
              N(5140, 2573, 8564, 5124, 166, Mb(b + 12 | 0) | 0, 8564, 3972, 167, Mb(b + 12 | 0) | 0);
              ma = b + 16 | 0;
              return a;
            }

            function Eg(a, b) {
              var c = 0,
                  d = 0,
                  e = 0;

              if (Dg(a) >>> 0 < b >>> 0) {
                Qe();
                F();
              }
              c = Bg(b);
              q[a >> 2] = c;
              q[a + 4 >> 2] = c;
              d = Na(a), e = (b << 2) + c | 0, q[d >> 2] = e;
              te(a);
            }

            function yi(a, b, c, d) {
              if (a | b) {
                while (1) {
                  c = c + -1 | 0;
                  o[c | 0] = r[(a & 15) + 7616 | 0] | d;
                  a = (b & 15) << 28 | a >>> 4;
                  b = b >>> 4 | 0;

                  if (a | b) {
                    continue;
                  }

                  break;
                }
              }

              return c;
            }

            function kj(a, b) {
              var c = 0,
                  d = 0,
                  e = 0,
                  f = 0;
              c = ma - 16 | 0;
              ma = c;
              f = jj();
              d = ma - 16 | 0;
              ma = d;
              e = c + 8 | 0;
              q[d + 12 >> 2] = e;
              ma = d + 16 | 0;
              ka(f | 0, a | 0, b | 0, e | 0);
              ma = c + 16 | 0;
            }

            function Nb(a, b) {
              var c = 0;

              a: {
                if (!_c(Ea(b))) {
                  b = sd(Ea(a));
                  break a;
                }

                b = _c(Ea(b));
              }

              b: {
                if ((b | 0) == 5) {
                  c = 1;

                  if (ud(td(Ea(a)))) {
                    break b;
                  }
                }

                c = b;
              }

              return c;
            }

            function pf(a, b, c, d) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              d = d | 0;
              var e = 0,
                  f = 0;
              e = q[a >> 2];
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              f = b;

              if (a & 1) {
                e = q[e + q[b >> 2] >> 2];
              }

              n[e](f, c, d);
            }

            function of(a, b, c) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              var d = 0,
                  e = 0;
              d = q[a >> 2];
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              e = b;

              if (a & 1) {
                d = q[d + q[b >> 2] >> 2];
              }

              return n[d](e, c) | 0;
            }

            function bj(a, b, c, d) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              d = +d;
              var e = 0,
                  f = 0;
              e = q[a >> 2];
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              f = b;

              if (a & 1) {
                e = q[e + q[b >> 2] >> 2];
              }

              n[e](f, c, d);
            }

            function Tn(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 16 | 0;
              ma = c;
              q[c + 12 >> 2] = 0;
              q[c + 8 >> 2] = 10;
              d = q[c + 12 >> 2];
              q[c >> 2] = q[c + 8 >> 2];
              q[c + 4 >> 2] = d;
              hg(a, c, b);
              ma = c + 16 | 0;
            }

            function Sn(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 16 | 0;
              ma = c;
              q[c + 12 >> 2] = 0;
              q[c + 8 >> 2] = 11;
              d = q[c + 12 >> 2];
              q[c >> 2] = q[c + 8 >> 2];
              q[c + 4 >> 2] = d;
              ig(a, c, b);
              ma = c + 16 | 0;
            }

            function ao(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 16 | 0;
              ma = c;
              q[c + 12 >> 2] = 0;
              q[c + 8 >> 2] = 3;
              d = q[c + 12 >> 2];
              q[c >> 2] = q[c + 8 >> 2];
              q[c + 4 >> 2] = d;
              $n(a, c, b);
              ma = c + 16 | 0;
            }

            function _n(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 16 | 0;
              ma = c;
              q[c + 12 >> 2] = 0;
              q[c + 8 >> 2] = 4;
              d = q[c + 12 >> 2];
              q[c >> 2] = q[c + 8 >> 2];
              q[c + 4 >> 2] = d;
              Zn(a, c, b);
              ma = c + 16 | 0;
            }

            function Yn(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 16 | 0;
              ma = c;
              q[c + 12 >> 2] = 0;
              q[c + 8 >> 2] = 5;
              d = q[c + 12 >> 2];
              q[c >> 2] = q[c + 8 >> 2];
              q[c + 4 >> 2] = d;
              ge(a, c, b);
              ma = c + 16 | 0;
            }

            function Xn(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 16 | 0;
              ma = c;
              q[c + 12 >> 2] = 0;
              q[c + 8 >> 2] = 6;
              d = q[c + 12 >> 2];
              q[c >> 2] = q[c + 8 >> 2];
              q[c + 4 >> 2] = d;
              ge(a, c, b);
              ma = c + 16 | 0;
            }

            function Wn(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 16 | 0;
              ma = c;
              q[c + 12 >> 2] = 0;
              q[c + 8 >> 2] = 7;
              d = q[c + 12 >> 2];
              q[c >> 2] = q[c + 8 >> 2];
              q[c + 4 >> 2] = d;
              ge(a, c, b);
              ma = c + 16 | 0;
            }

            function Vn(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 16 | 0;
              ma = c;
              q[c + 12 >> 2] = 0;
              q[c + 8 >> 2] = 8;
              d = q[c + 12 >> 2];
              q[c >> 2] = q[c + 8 >> 2];
              q[c + 4 >> 2] = d;
              ig(a, c, b);
              ma = c + 16 | 0;
            }

            function Un(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 16 | 0;
              ma = c;
              q[c + 12 >> 2] = 0;
              q[c + 8 >> 2] = 9;
              d = q[c + 12 >> 2];
              q[c >> 2] = q[c + 8 >> 2];
              q[c + 4 >> 2] = d;
              hg(a, c, b);
              ma = c + 16 | 0;
            }

            function Go(a) {
              var b = 0,
                  c = 0,
                  d = 0;
              b = ma - 32 | 0;
              ma = b;

              if (Ib(a) >>> 0 > Ka(a) >>> 0) {
                c = Na(a);
                d = a;
                a = Oc(b + 8 | 0, Ka(a), Ka(a), c);
                ze(d, a);
                Nc(a);
              }

              ma = b + 32 | 0;
            }

            function vd(a, b) {
              var c = 0,
                  d = 0,
                  e = 0;

              while (1) {
                d = Ta(u[Da(a, c) >> 2], u[Da(b, c) >> 2]);

                if (d) {
                  e = c >>> 0 < 3;
                  c = c + 1 | 0;

                  if (e) {
                    continue;
                  }
                }

                break;
              }

              return d;
            }

            function tk(a, b, c, d, e, f) {
              a = a | 0;
              b = b | 0;
              c = x(c);
              d = d | 0;
              e = x(e);
              f = f | 0;
              var g = 0;
              g = a;
              a = q[q[b >> 2] + 4 >> 2];
              n[q[q[a >> 2] >> 2]](g, a, x(+c), d, x(+e), f);
            }

            function Dg(a) {
              var b = 0;
              b = ma - 16 | 0;
              ma = b;
              q[b + 12 >> 2] = 1073741823;
              q[b + 8 >> 2] = 2147483647;
              a = q[to(b + 12 | 0, b + 8 | 0) >> 2];
              ma = b + 16 | 0;
              return a;
            }

            function ho(a) {
              var b = 0,
                  c = 0;
              b = ma - 16 | 0;
              ma = b;
              c = yf(bb(576), a);
              ie(q[a + 556 >> 2], 1, 1296);
              q[b + 8 >> 2] = q[c + 556 >> 2];
              Xb(c, 0);
              ma = b + 16 | 0;
              return c;
            }

            function Va(a) {
              var b = x(0);
              b = u[a >> 2];
              a = q[a >> 2];

              if ((a | 0) == 2139156720 | (a | 0) == 2140081935 | (a | 0) == 2141891242) {
                a = 0;
              } else {
                a = Fa(b);
              }

              return a;
            }

            function Do(a) {
              q[a + 24 >> 2] = 0;
              o[a + 20 | 0] = 0;
              q[a + 16 >> 2] = 1065353216;
              p[a + 10 >> 1] = 0;
              p[a + 12 >> 1] = 0;
              q[a >> 2] = 0;
              o[a + 9 | 0] = 0;
              q[a + 4 >> 2] = 2;
              return a;
            }

            function Ph(a, b) {
              if (((j(a), e(0)) & 2147483647) >>> 0 <= 2139095040) {
                return ((j(b), e(0)) & 2147483647) >>> 0 > 2139095040 ? a : x(A(a, b));
              }

              return b;
            }

            function Oh(a, b) {
              if (((j(a), e(0)) & 2147483647) >>> 0 <= 2139095040) {
                return ((j(b), e(0)) & 2147483647) >>> 0 > 2139095040 ? a : x(B(a, b));
              }

              return b;
            }

            function ni(a, b) {
              var c = 0,
                  d = 0,
                  e = 0,
                  f = 0;
              c = Ke(b);
              d = bb(c + 13 | 0);
              q[d + 8 >> 2] = 0;
              q[d + 4 >> 2] = c;
              q[d >> 2] = c;
              e = a, f = fb(d + 12 | 0, b, c + 1 | 0), q[e >> 2] = f;
            }

            function kb(a, b) {
              var c = 0;
              c = ma - 32 | 0;
              ma = c;
              u[c + 8 >> 2] = b;
              u[c + 16 >> 2] = a;
              a = u[Ma(c + 24 | 0, x(u[c + 16 >> 2] + u[c + 8 >> 2])) >> 2];
              ma = c + 32 | 0;
              return a;
            }

            function Lf(a, b) {
              var c = 0,
                  d = 0,
                  e = 0;
              c = ma - 32 | 0;
              ma = c;

              if (Ib(a) >>> 0 < b >>> 0) {
                d = Na(a);
                e = a;
                a = Oc(c + 8 | 0, b, Ka(a), d);
                ze(e, a);
                Nc(a);
              }

              ma = c + 32 | 0;
            }

            function Df(a, b) {
              var c = 0;
              c = a;

              a: {
                if (b) {
                  b = pg(q[b >> 2]);
                  break a;
                }

                b = pg(og());
              }

              q[c >> 2] = b;
              Bf(a + 4 | 0);
              Bf(a + 8 | 0);
              q[q[a >> 2] >> 2] = a;
              return a;
            }

            function mj(a, b, c) {
              a = a | 0;
              b = b | 0;
              c = x(c);
              var d = 0,
                  e = 0;
              d = q[a >> 2];
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              e = b;

              if (a & 1) {
                d = q[d + q[b >> 2] >> 2];
              }

              n[d](e, c);
            }

            function _h(a, b, c, d) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              d = d | 0;

              if (Ua(a, q[b + 8 >> 2], 0)) {
                Md(b, c, d);
                return;
              }

              a = q[a + 8 >> 2];
              n[q[q[a >> 2] + 28 >> 2]](a, b, c, d);
            }

            function zg(a, b) {
              var c = 0;
              c = q[a + 4 >> 2];

              if ((c | 0) != (b | 0)) {
                while (1) {
                  c = c + -4 | 0;

                  if ((c | 0) != (b | 0)) {
                    continue;
                  }

                  break;
                }
              }

              q[a + 4 >> 2] = b;
            }

            function yc(a, b, c) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              var d = 0,
                  e = 0;
              d = q[a >> 2];
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              e = b;

              if (a & 1) {
                d = q[d + q[b >> 2] >> 2];
              }

              n[d](e, c);
            }

            function Pa(a, b) {
              var c = 0;
              c = ma - 16 | 0;
              ma = c;
              Ra(c + 8 | 0, a);
              a = q[c + 12 >> 2];
              q[c >> 2] = q[c + 8 >> 2];
              q[c + 4 >> 2] = a;
              b = Bb(c, b);
              ma = c + 16 | 0;
              return b;
            }

            function io(a, b, c, d, e) {
              c = c | 0;
              d = d | 0;
              e = e | 0;

              if (!(c ? (c | 0) != 5 : 0)) {
                return Te(q[1779], d, e) | 0;
              }

              return Te(q[1918], d, e) | 0;
            }

            function aj(a, b, c) {
              a = a | 0;
              b = b | 0;
              c = +c;
              var d = 0,
                  e = 0;
              d = q[a >> 2];
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              e = b;

              if (a & 1) {
                d = q[d + q[b >> 2] >> 2];
              }

              n[d](e, c);
            }

            function Ud(a, b) {
              a = a | 0;
              b = b | 0;
              var c = 0,
                  d = 0;
              c = q[a >> 2];
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              d = b;

              if (a & 1) {
                c = q[q[b >> 2] + c >> 2];
              }

              return n[c](d) | 0;
            }

            function yg(a) {
              var b = 0,
                  c = 0,
                  d = 0;

              if (q[a >> 2]) {
                Vg(a);
                b = q[a >> 2];
                Ib(a);
                ab(b);
                c = Na(a), d = 0, q[c >> 2] = d;
                q[a >> 2] = 0;
                q[a + 4 >> 2] = 0;
              }
            }

            function yb(a, b, c) {
              var d = 0,
                  e = 0,
                  f = x(0);
              d = ma - 16 | 0;
              ma = d;
              e = d, f = kb(we(a, b, c), Og(a, b, c)), u[e + 8 >> 2] = f;
              ma = d + 16 | 0;
              return u[d + 8 >> 2];
            }

            function qo(a, b) {
              var c = 0,
                  d = 0,
                  e = 0;

              while (1) {
                c = e;
                d = Ta(u[Da(a, c) >> 2], u[Da(b, c) >> 2]);

                if (d) {
                  e = 1;

                  if (!c) {
                    continue;
                  }
                }

                break;
              }

              return d;
            }

            function zi(a, b, c) {
              if (a | b) {
                while (1) {
                  c = c + -1 | 0;
                  o[c | 0] = a & 7 | 48;
                  a = (b & 7) << 29 | a >>> 3;
                  b = b >>> 3 | 0;

                  if (a | b) {
                    continue;
                  }

                  break;
                }
              }

              return c;
            }

            function og() {
              var a = 0,
                  b = 0;

              a: {
                if (o[9448] & 1) {
                  break a;
                }

                if (!Pd(9448)) {
                  break a;
                }

                a = 9444, b = ng(), q[a >> 2] = b;
                Od(9448);
              }

              return q[2361];
            }

            function bb(a) {
              var b = 0;
              a = a ? a : 1;

              a: {
                while (1) {
                  b = Id(a);

                  if (b) {
                    break a;
                  }

                  b = q[2650];

                  if (b) {
                    n[b]();
                    continue;
                  }

                  break;
                }

                T();
                F();
              }

              return b;
            }

            function Fe(a, b) {
              a: {
                if ((tb(r[a + 4 | 0], 2) ^ b) != 1) {
                  break a;
                }

                Vb(a + 4 | 0, 2, b);

                if (!b) {
                  break a;
                }

                b = q[a + 20 >> 2];

                if (!b) {
                  break a;
                }

                n[b](a);
              }
            }

            function Ej(a) {
              a = ma - 16 | 0;
              ma = a;
              q[a + 12 >> 2] = 4;
              N(5140, 2579, 5156, 4564, 168, Mb(a + 12 | 0) | 0, 5156, 5164, 169, Mb(a + 12 | 0) | 0);
              ma = a + 16 | 0;
            }

            function Dc(a, b) {
              var c = 0;
              c = q[b + 564 >> 2];
              q[a >> 2] = q[b + 560 >> 2];
              q[a + 4 >> 2] = c;
              c = q[b + 572 >> 2];
              q[a + 8 >> 2] = q[b + 568 >> 2];
              q[a + 12 >> 2] = c;
            }

            function $d(a) {
              var b = 0;
              b = ma - 16 | 0;
              ma = b;
              Vb(a + 4 | 0, 7, 1);
              a = a + 24 | 0;
              ac(b + 8 | 0, a);
              vf(b + 8 | 0, 2);
              Uc(b + 8 | 0, a);
              hd(b + 8 | 0, 4);
              ma = b + 16 | 0;
            }

            function kh(a, b) {
              var c = 0,
                  d = 0;
              d = a + 4 | 0;
              b = q[b >> 2];
              c = 0;

              a: {
                if (!b) {
                  break a;
                }

                ub(a, !Ka(a + 544 | 0), 1024);
                c = 1;
              }

              jh(d, c);
              q[a + 8 >> 2] = b;
            }

            function He(a, b) {
              var c = 0,
                  d = 0;
              d = ma - 16 | 0;
              ma = d;
              c = se(d, a, 1);
              $c(Na(a), q[c + 4 >> 2], b);
              q[c + 4 >> 2] = q[c + 4 >> 2] + 4;
              re(c);
              ma = d + 16 | 0;
            }

            function df(a, b) {
              a = a | 0;
              b = b | 0;
              var c = 0,
                  d = 0;
              c = q[a >> 2];
              a = q[a + 4 >> 2];
              b = (a >> 1) + b | 0;
              d = b;

              if (a & 1) {
                c = q[q[b >> 2] + c >> 2];
              }

              n[c](d);
            }

            function bk(a, b) {
              var c = 0,
                  d = 0;
              d = ma - 16 | 0;
              ma = d;
              $k(a);
              c = Ka(b);

              if (c) {
                Eg(a, c);
                ue(a, q[b >> 2], q[b + 4 >> 2], c);
              }

              ma = d + 16 | 0;
            }

            function wc(a) {
              var b = 0,
                  c = 0,
                  d = 0;
              b = ma - 16 | 0;
              ma = b;
              c = b, d = q[vb(b + 8 | 0, 2140081935) >> 2], q[c + 4 >> 2] = d;
              vc(a, b + 4 | 0);
              ma = b + 16 | 0;
            }

            function Cc(a) {
              var b = 0,
                  c = 0,
                  d = 0;
              b = ma - 16 | 0;
              ma = b;
              c = b, d = q[vb(b + 8 | 0, 2141891242) >> 2], q[c + 4 >> 2] = d;
              vc(a, b + 4 | 0);
              ma = b + 16 | 0;
            }

            function ii(a) {
              var b = 0,
                  c = 0,
                  d = 0;
              b = ma - 16 | 0;
              ma = b;
              c = q[vb(b + 8 | 0, q[a + 4 >> 2]) >> 2], d = 1, o[c | 0] = d;
              o[q[a + 8 >> 2]] = 1;
              ma = b + 16 | 0;
            }

            function gh(a, b) {
              var c = 0;
              c = ma - 16 | 0;
              ma = c;
              q[c + 8 >> 2] = q[a >> 2];
              q[c + 8 >> 2] = q[c + 8 >> 2] + (b << 2);
              ma = c + 16 | 0;
              return q[c + 8 >> 2];
            }

            function xf(a, b) {
              a = a | 0;
              b = b | 0;
              var c = 0;
              c = ma - 16 | 0;
              ma = c;
              lf(c + 8 | 0, b);
              a = n[a](c + 8 | 0) | 0;
              Sc(c + 8 | 0);
              ma = c + 16 | 0;
              return a | 0;
            }

            function ji(a) {
              var b = 0;

              a: {
                a = q[a + 8 >> 2];
                b = r[a | 0];

                if ((b | 0) != 1) {
                  if (b & 2) {
                    break a;
                  }

                  o[a | 0] = 2;
                  a = 1;
                } else {
                  a = 0;
                }

                return a;
              }

              F();
            }

            function ko(a, b) {
              if (q[a + 8 >> 2] != (b | 0)) {
                while (1) {
                  q[a + 8 >> 2] = q[a + 8 >> 2] + -4;

                  if (q[a + 8 >> 2] != (b | 0)) {
                    continue;
                  }

                  break;
                }
              }
            }

            function mh(a, b, c, d, e, f, g) {
              if (tb(r[b + 4 | 0], 4)) {
                n[q[b + 8 >> 2]](a, b, c, d, e, f, g);
                return;
              }

              n[q[b + 8 >> 2]](a, b, c, d, e, f);
            }

            function Pi() {
              var a = 0;
              a = ma - 16 | 0;
              ma = a;
              q[a + 12 >> 2] = 5586;
              K(8516, q[a + 12 >> 2], 4, -2147483648, 2147483647);
              ma = a + 16 | 0;
            }

            function Ni() {
              var a = 0;
              a = ma - 16 | 0;
              ma = a;
              q[a + 12 >> 2] = 5603;
              K(8540, q[a + 12 >> 2], 4, -2147483648, 2147483647);
              ma = a + 16 | 0;
            }

            function Vb(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0;
              d = a;
              a = r[a | 0];
              e = d, f = (g = a | 1 << b, h = Ro(b) & a, i = c, i ? g : h), o[e | 0] = f;
            }

            function Oj() {
              var a = 0;
              a = ma - 16 | 0;
              ma = a;
              q[a + 12 >> 2] = 153;
              I(4416, 4200, 2, 4516, 4524, 154, Mb(a + 12 | 0) | 0, 0);
              ma = a + 16 | 0;
            }

            function Ij() {
              var a = 0;
              a = ma - 16 | 0;
              ma = a;
              q[a + 12 >> 2] = 158;
              I(4984, 4200, 2, 5084, 4524, 159, Mb(a + 12 | 0) | 0, 0);
              ma = a + 16 | 0;
            }

            function ym(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0;
              d = q[a >> 2];
              e = $a(_a(5), b);
              f = a, g = $a(_a(5), b) & c << b | (e ^ -1) & d, q[f >> 2] = g;
            }

            function wo(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0;
              d = q[a >> 2];
              e = $a(_a(7), b);
              f = a, g = $a(_a(7), b) & c << b | (e ^ -1) & d, q[f >> 2] = g;
            }

            function tm(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0;
              d = q[a >> 2];
              e = $a(_a(1), b);
              f = a, g = $a(_a(1), b) & c << b | (e ^ -1) & d, q[f >> 2] = g;
            }

            function so(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0;
              d = q[a >> 2];
              e = $a(_a(3), b);
              f = a, g = $a(_a(3), b) & c << b | (e ^ -1) & d, q[f >> 2] = g;
            }

            function qm(a, b, c) {
              var d = 0,
                  e = 0,
                  f = 0,
                  g = 0;
              d = q[a >> 2];
              e = $a(_a(2), b);
              f = a, g = $a(_a(2), b) & c << b | (e ^ -1) & d, q[f >> 2] = g;
            }

            function lh(a, b, c, d) {
              if (tb(r[a + 4 | 0], 5)) {
                return x(n[q[a + 12 >> 2]](a, b, c, d));
              }

              return x(n[q[a + 12 >> 2]](a, b, c));
            }

            function dc(a, b) {
              a: {
                if ((b | 0) != 2) {
                  break a;
                }

                b = a + -2 | 0;

                if (b >>> 0 > 1) {
                  break a;
                }

                a = 3;

                if (b - 1) {
                  break a;
                }

                a = 2;
              }

              return a;
            }

            function bc(a, b, c, d) {
              var e = 0;
              e = ma - 16 | 0;
              ma = e;
              q[e + 12 >> 2] = d;
              Ff(a ? q[a + 556 >> 2] : 0, a, b, c, q[e + 12 >> 2]);
              ma = e + 16 | 0;
            }

            function Rb(a, b) {
              var c = 0;
              c = ma - 16 | 0;
              ma = c;
              q[c + 12 >> 2] = q[a >> 2];
              q[a >> 2] = q[b >> 2];
              q[b >> 2] = q[c + 12 >> 2];
              ma = c + 16 | 0;
            }

            function ki(a) {
              var b = 0,
                  c = 0;
              b = ma - 16 | 0;
              ma = b;

              if (!r[q[vb(b + 8 | 0, q[a + 4 >> 2]) >> 2]]) {
                c = ji(a);
              }

              ma = b + 16 | 0;
              return c;
            }

            function Ua(a, b, c) {
              if (!c) {
                return q[a + 4 >> 2] == q[b + 4 >> 2];
              }

              if ((a | 0) == (b | 0)) {
                return 1;
              }

              return !bi(Td(a), Td(b));
            }

            function pg(a) {
              var b = 0,
                  c = 0;
              b = ma - 16 | 0;
              ma = b;
              c = Kg(bb(576), a);
              ie(a, 1, 1296);
              q[b + 8 >> 2] = a;
              ma = b + 16 | 0;
              return c;
            }

            function we(a, b, c) {
              var d = 0;
              d = ma - 16 | 0;
              ma = d;
              c = kb(ye(a, b, c), u[Ma(d + 8 | 0, $b(a, b)) >> 2]);
              ma = d + 16 | 0;
              return c;
            }

            function jh(a, b) {
              var c = 0,
                  d = 0,
                  e = 0,
                  f = 0;
              c = r[a | 0];
              d = $a(_a(1), 3);
              e = a, f = $a(_a(1), 3) & b << 3 | (d ^ -1) & c, o[e | 0] = f;
            }

            function Og(a, b, c) {
              var d = 0;
              d = ma - 16 | 0;
              ma = d;
              c = kb(xe(a, b, c), u[Ma(d + 8 | 0, pc(a, b)) >> 2]);
              ma = d + 16 | 0;
              return c;
            }

            function Hg(a) {
              var b = 0,
                  c = 0;
              c = a + 8 | 0;
              b = a;

              while (1) {
                b = Sd(b) + 4 | 0;

                if ((c | 0) != (b | 0)) {
                  continue;
                }

                break;
              }

              return a;
            }

            function ih(a, b) {
              var c = 0;
              c = ma - 16 | 0;
              ma = c;
              Vb(a + 4 | 0, 4, 0);
              q[c + 4 >> 2] = b;
              q[c + 8 >> 2] = b;
              kh(a, c + 4 | 0);
              ma = c + 16 | 0;
            }

            function Wf(a, b, c, d) {
              var e = 0;
              e = 0;

              a: {
                if ((a | 0) != 2 | c) {
                  break a;
                }

                e = 1;

                if (b >= d) {
                  break a;
                }

                e = Ta(b, d);
              }

              return e;
            }

            function Vi(a) {
              a = a | 0;
              var b = 0;
              b = ma - 16 | 0;
              ma = b;
              q[b + 12 >> 2] = a;
              a = ti(Td(q[b + 12 >> 2]));
              ma = b + 16 | 0;
              return a | 0;
            }

            function Bo(a, b, c, d, e, f) {
              if (r[a + 9 | 0]) {
                n[q[a + 4 >> 2]](b, c, d, 0, e, f) | 0;
                return;
              }

              n[q[a + 4 >> 2]](b, c, d, e, f) | 0;
            }

            function wh(a, b, c, d, e, f, g) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              d = x(d);
              e = e | 0;
              f = x(f);
              g = g | 0;
              return n[a](b, c, d, e, f, g) | 0;
            }

            function Io(a, b) {
              var c = 0,
                  d = 0,
                  e = 0,
                  f = 0;
              c = r[a | 0];
              d = $a(_a(2), 0);
              e = a, f = $a(_a(2), 0) & b | (d ^ -1) & c, o[e | 0] = f;
            }

            function Ri() {
              var a = 0;
              a = ma - 16 | 0;
              ma = a;
              q[a + 12 >> 2] = 5565;
              K(8492, q[a + 12 >> 2], 2, -32768, 32767);
              ma = a + 16 | 0;
            }

            function Fm(a, b) {
              var c = 0;
              c = ma - 16 | 0;
              ma = c;
              u[c >> 2] = b;
              u[c + 8 >> 2] = a;
              ma = c + 16 | 0;
              return u[c + 8 >> 2] < u[c >> 2];
            }

            function Ee(a, b) {
              var c = 0;
              c = ma - 16 | 0;
              ma = c;
              u[c >> 2] = b;
              u[c + 8 >> 2] = a;
              ma = c + 16 | 0;
              return u[c + 8 >> 2] > u[c >> 2];
            }

            function Qh(a, b, c, d, e, f) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              d = d | 0;
              e = e | 0;
              f = f | 0;

              if (Ua(a, q[b + 8 >> 2], f)) {
                Ld(b, c, d, e);
              }
            }

            function Ei(a) {
              a = a | 0;
              var b = 0;
              b = ma - 16 | 0;
              ma = b;
              q[b + 12 >> 2] = a;
              a = q[b + 12 >> 2];
              bf();
              ma = b + 16 | 0;
              return a | 0;
            }

            function qh(a, b, c, d, e, f, g) {
              a = a | 0;
              b = b | 0;
              c = +c;
              d = d | 0;
              e = e | 0;
              f = f | 0;
              g = g | 0;
              return n[a](b, c, d, e, f, g) | 0;
            }

            function lo(a, b) {
              var c = 0;
              c = ma - 16 | 0;
              ma = c;
              q[c >> 2] = b;
              q[c + 8 >> 2] = a;
              a = Gd(c, c + 8 | 0);
              ma = c + 16 | 0;
              return a;
            }

            function Zd(a, b) {
              if (q[a + 16 >> 2]) {
                if (tb(r[a + 4 | 0], 6)) {
                  n[q[a + 16 >> 2]](a, b);
                  return;
                }

                n[q[a + 16 >> 2]](a);
              }
            }

            function Ao(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 320 | 0;
              ma = c;
              d = a;
              a = fb(c, b, 320);
              b = uo(d, a);
              ma = a + 320 | 0;
              return b ^ 1;
            }

            function vo(a, b) {
              var c = 0;
              c = 2;

              while (1) {
                q[a >> 2] = q[b >> 2];
                a = a + 4 | 0;
                c = c + -1 | 0;

                if (c) {
                  continue;
                }

                break;
              }
            }

            function Nm(a, b) {
              var c = x(0);
              c = u[Da(Ga(a) + 288 | 0, q[Da(1848, b) >> 2]) >> 2];
              return c >= x(0) & (Fa(c) ^ 1);
            }

            function mo(a, b, c) {
              var d = 0;
              q[a >> 2] = q[b >> 2];
              d = q[b >> 2];
              q[a + 8 >> 2] = b;
              q[a + 4 >> 2] = (c << 2) + d;
              return a;
            }

            function li(a) {
              var b = 0;

              if (a >>> 0 >= 11) {
                b = a + 16 & -16;
                a = b + -1 | 0;
                a = (a | 0) == 11 ? b : a;
              } else {
                a = 10;
              }

              return a;
            }

            function Yg(a, b) {
              var c = 0;
              c = ma - 16 | 0;
              ma = c;
              Ra(c + 8 | 0, a);
              Ra(c, b);
              a = fi(c + 8 | 0, c);
              ma = c + 16 | 0;
              return a;
            }

            function Ui() {
              var a = 0;
              a = ma - 16 | 0;
              ma = a;
              q[a + 12 >> 2] = 5534;
              K(8456, q[a + 12 >> 2], 1, -128, 127);
              ma = a + 16 | 0;
            }

            function Ti() {
              var a = 0;
              a = ma - 16 | 0;
              ma = a;
              q[a + 12 >> 2] = 5539;
              K(8480, q[a + 12 >> 2], 1, -128, 127);
              ma = a + 16 | 0;
            }

            function Pj(a) {
              a = a | 0;
              var b = 0;

              if (a) {
                b = a;
                q[a >> 2] = 4248;

                if (r[a + 4 | 0]) {
                  Vd(b, 4252);
                }

                Sc(b + 8 | 0);
                ab(a);
              }
            }

            function Jj(a) {
              a = a | 0;
              var b = 0;

              if (a) {
                b = a;
                q[a >> 2] = 4876;

                if (r[a + 4 | 0]) {
                  Vd(b, 4252);
                }

                Sc(b + 8 | 0);
                ab(a);
              }
            }

            function $k(a) {
              var b = 0;
              b = ma - 16 | 0;
              ma = b;
              q[a >> 2] = 0;
              q[a + 4 >> 2] = 0;
              q[b + 12 >> 2] = 0;
              qe(a + 8 | 0);
              ma = b + 16 | 0;
            }

            function ue(a, b, c, d) {
              var e = 0;
              e = ma - 16 | 0;
              ma = e;
              d = se(e, a, d);
              Cg(Na(a), b, c, d + 4 | 0);
              re(d);
              ma = e + 16 | 0;
            }

            function Td(a) {
              var b = 0;
              b = ma - 16 | 0;
              q[b + 8 >> 2] = a;
              q[b + 12 >> 2] = q[q[b + 8 >> 2] + 4 >> 2];
              return q[b + 12 >> 2];
            }

            function Qi() {
              var a = 0;
              a = ma - 16 | 0;
              ma = a;
              q[a + 12 >> 2] = 5571;
              K(8504, q[a + 12 >> 2], 2, 0, 65535);
              ma = a + 16 | 0;
            }

            function nh(a, b, c, d, e) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              d = d | 0;
              e = e | 0;
              a = n[a](b, c, d, e) | 0;
              aa(na | 0);
              return a | 0;
            }

            function ei(a) {
              var b = 0;
              a = q[a >> 2] + -12 | 0;
              b = q[a + 8 >> 2] + -1 | 0;
              q[a + 8 >> 2] = b;

              if ((b | 0) <= -1) {
                ab(a);
              }
            }

            function ub(a, b, c) {
              var d = 0;
              d = ma - 16 | 0;
              ma = d;

              if (!b) {
                q[d >> 2] = c;
                bc(a, 5, 1864, d);
                Rg(c);
              }

              ma = d + 16 | 0;
            }

            function Si() {
              var a = 0;
              a = ma - 16 | 0;
              ma = a;
              q[a + 12 >> 2] = 5551;
              K(8468, q[a + 12 >> 2], 1, 0, 255);
              ma = a + 16 | 0;
            }

            function Oi() {
              var a = 0;
              a = ma - 16 | 0;
              ma = a;
              q[a + 12 >> 2] = 5590;
              K(8528, q[a + 12 >> 2], 4, 0, -1);
              ma = a + 16 | 0;
            }

            function Mi() {
              var a = 0;
              a = ma - 16 | 0;
              ma = a;
              q[a + 12 >> 2] = 5608;
              K(8552, q[a + 12 >> 2], 4, 0, -1);
              ma = a + 16 | 0;
            }

            function Ih(a, b, c, d, e, f, g) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              d = x(d);
              e = e | 0;
              f = x(f);
              g = g | 0;
              n[a](b, c, d, e, f, g);
            }

            function Xa(a, b) {
              a: {
                if (Fa(a)) {
                  break a;
                }

                if (Fa(b)) {
                  break a;
                }

                return Oh(a, b);
              }

              return Fa(a) ? b : a;
            }

            function Wd(a, b) {
              a: {
                if (Fa(a)) {
                  break a;
                }

                if (Fa(b)) {
                  break a;
                }

                return Ph(a, b);
              }

              return Fa(a) ? b : a;
            }

            function ph(a, b, c, d, e, f, g) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              d = d | 0;
              e = e | 0;
              f = f | 0;
              g = g | 0;
              n[a](b, c, d, e, f, g);
            }

            function xd(a) {
              var b = 0;
              b = a + 36 | 0;

              while (1) {
                a = Sd(a) + 4 | 0;

                if ((b | 0) != (a | 0)) {
                  continue;
                }

                break;
              }
            }

            function fo(a, b, c) {
              ub(a, !q[b + 540 >> 2], 1331);
              ub(a, Xc(a) ^ 1, 1384);
              hh(a, b, c);
              Xb(b, a);
              Sa(a);
            }

            function Kh(a, b, c, d, e, f) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              d = d | 0;
              e = e | 0;
              f = f | 0;
              return n[a](b, c, d, e, f) | 0;
            }

            function Pl(a, b) {
              a = a | 0;
              b = x(b);
              a = q[a >> 2];
              ie(a, b >= x(0), 1804);
              u[a + 16 >> 2] = b == x(0) ? x(0) : b;
            }

            function ec(a, b) {
              if (Ka(a + 544 | 0) >>> 0 <= b >>> 0) {
                T();
                F();
              }

              return q[q[a + 544 >> 2] + (b << 2) >> 2];
            }

            function _j(a) {
              a = a | 0;
              var b = 0;

              if (a) {
                b = q[a >> 2];

                if (b) {
                  ab(b);
                }

                q[2360] = q[2360] + -1;
                ab(a);
              }
            }

            function Li() {
              var a = 0;
              a = ma - 16 | 0;
              ma = a;
              q[a + 12 >> 2] = 5622;
              V(8564, q[a + 12 >> 2], 4);
              ma = a + 16 | 0;
            }

            function La(a) {
              var b = 0,
                  c = 0;
              b = bb(8);
              c = q[a + 4 >> 2];
              q[b >> 2] = q[a >> 2];
              q[b + 4 >> 2] = c;
              return b;
            }

            function Ki() {
              var a = 0;
              a = ma - 16 | 0;
              ma = a;
              q[a + 12 >> 2] = 5628;
              V(8576, q[a + 12 >> 2], 8);
              ma = a + 16 | 0;
            }

            function Ji() {
              var a = 0;
              a = ma - 16 | 0;
              ma = a;
              q[a + 12 >> 2] = 5739;
              J(6708, 0, q[a + 12 >> 2]);
              ma = a + 16 | 0;
            }

            function Ii() {
              var a = 0;
              a = ma - 16 | 0;
              ma = a;
              q[a + 12 >> 2] = 5983;
              J(6988, 4, q[a + 12 >> 2]);
              ma = a + 16 | 0;
            }

            function Hi() {
              var a = 0;
              a = ma - 16 | 0;
              ma = a;
              q[a + 12 >> 2] = 6013;
              J(7028, 5, q[a + 12 >> 2]);
              ma = a + 16 | 0;
            }

            function Gi() {
              var a = 0;
              a = ma - 16 | 0;
              ma = a;
              q[a + 12 >> 2] = 6251;
              J(7068, 6, q[a + 12 >> 2]);
              ma = a + 16 | 0;
            }

            function Fi() {
              var a = 0;
              a = ma - 16 | 0;
              ma = a;
              q[a + 12 >> 2] = 6282;
              J(7108, 7, q[a + 12 >> 2]);
              ma = a + 16 | 0;
            }

            function ie(a, b, c) {
              var d = 0;
              d = ma - 16 | 0;
              ma = d;

              if (!b) {
                q[d >> 2] = c;
                Sl(a, d);
                Rg(c);
              }

              ma = d + 16 | 0;
            }

            function Ql(a, b, c) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              var d = 0,
                  e = 0;
              d = Jf(q[a >> 2] + 20 | 0, b), e = c, o[d | 0] = e;
            }

            function af(a) {
              var b = 0;
              b = ma - 16 | 0;
              ma = b;
              q[b + 12 >> 2] = a;
              J(6748, 0, q[b + 12 >> 2]);
              ma = b + 16 | 0;
            }

            function _e(a) {
              var b = 0;
              b = ma - 16 | 0;
              ma = b;
              q[b + 12 >> 2] = a;
              J(6828, 2, q[b + 12 >> 2]);
              ma = b + 16 | 0;
            }

            function Ze(a) {
              var b = 0;
              b = ma - 16 | 0;
              ma = b;
              q[b + 12 >> 2] = a;
              J(6868, 3, q[b + 12 >> 2]);
              ma = b + 16 | 0;
            }

            function Ye(a) {
              var b = 0;
              b = ma - 16 | 0;
              ma = b;
              q[b + 12 >> 2] = a;
              J(6908, 4, q[b + 12 >> 2]);
              ma = b + 16 | 0;
            }

            function Xe(a) {
              var b = 0;
              b = ma - 16 | 0;
              ma = b;
              q[b + 12 >> 2] = a;
              J(6948, 5, q[b + 12 >> 2]);
              ma = b + 16 | 0;
            }

            function $e(a) {
              var b = 0;
              b = ma - 16 | 0;
              ma = b;
              q[b + 12 >> 2] = a;
              J(6788, 1, q[b + 12 >> 2]);
              ma = b + 16 | 0;
            }

            function se(a, b, c) {
              q[a >> 2] = b;
              b = q[b + 4 >> 2];
              q[a + 4 >> 2] = b;
              q[a + 8 >> 2] = b + (c << 2);
              return a;
            }

            function ti(a) {
              var b = 0,
                  c = 0;
              b = Ke(a) + 1 | 0;
              c = Id(b);

              if (!c) {
                return 0;
              }

              return fb(c, a, b);
            }

            function Sl(a, b) {
              var c = 0;
              c = ma - 16 | 0;
              ma = c;
              q[c + 12 >> 2] = b;
              Ff(a, 0, 5, 1864, b);
              ma = c + 16 | 0;
            }

            function Nc(a) {
              var b = 0;
              ko(a, q[a + 4 >> 2]);

              if (q[a >> 2]) {
                b = q[a >> 2];
                q[fc(a) >> 2];
                ab(b);
              }
            }

            function Bf(a) {
              var b = 0;
              b = ma - 16 | 0;
              ma = b;
              q[b + 12 >> 2] = 0;
              q[a >> 2] = q[b + 12 >> 2];
              ma = b + 16 | 0;
            }

            function Ro(a) {
              var b = 0;
              b = a & 31;
              a = 0 - a & 31;
              return (-1 >>> b & -2) << b | (-1 << a & -2) >>> a;
            }

            function $h(a, b, c, d) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              d = d | 0;

              if (Ua(a, q[b + 8 >> 2], 0)) {
                Md(b, c, d);
              }
            }

            function wg(a, b, c, d) {
              a = c - b | 0;
              c = q[d >> 2] - a | 0;
              q[d >> 2] = c;

              if ((a | 0) >= 1) {
                fb(c, b, a);
              }
            }

            function to(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 16 | 0;
              ma = c;
              d = Ag(b, a);
              ma = c + 16 | 0;
              return d ? b : a;
            }

            function po(a, b) {
              var c = 0,
                  d = 0;
              c = ma - 16 | 0;
              ma = c;
              d = Ag(a, b);
              ma = c + 16 | 0;
              return d ? b : a;
            }

            function oh(a, b, c, d, e, f) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              d = d | 0;
              e = e | 0;
              f = f | 0;
              n[a](b, c, d, e, f);
            }

            function gd(a) {
              var b = 0;
              b = ma - 16 | 0;
              ma = b;
              a = q[vb(b + 8 | 0, a) >> 2];
              ma = b + 16 | 0;
              return a;
            }

            function Cg(a, b, c, d) {
              a = c - b | 0;

              if ((a | 0) >= 1) {
                fb(q[d >> 2], b, a);
                q[d >> 2] = q[d >> 2] + a;
              }
            }

            function vk(a, b) {
              a = a | 0;
              b = b | 0;
              a = nc(q[a >> 2], b);

              if (!a) {
                return 0;
              }

              return q[a >> 2];
            }

            function ve(a) {
              var b = 0;
              pe(a);

              if (q[a >> 2]) {
                Ug(a);
                b = q[a >> 2];
                Ib(a);
                ab(b);
              }
            }

            function sh(a, b, c, d, e, f) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              d = +d;
              e = +e;
              f = f | 0;
              n[a](b, c, d, e, f);
            }

            function no(a, b, c) {
              var d = 0;
              b = b - a | 0;
              d = b >> 2;

              if (b) {
                Le(c, a, b);
              }

              return (d << 2) + c | 0;
            }

            function ij(a, b) {
              q[a >> 2] = 0;
              q[a >> 2] = 4588;
              kf(a + 4 | 0);
              q[a >> 2] = 4248;
              jf(a + 8 | 0, b);
            }

            function dj(a, b) {
              q[a >> 2] = 0;
              q[a >> 2] = 5120;
              kf(a + 4 | 0);
              q[a >> 2] = 4876;
              jf(a + 8 | 0, b);
            }

            function Pe(a, b) {
              q[a + 12 >> 2] = 0;
              q[a + 4 >> 2] = b;
              q[a >> 2] = b;
              q[a + 8 >> 2] = b + 1;
              return a;
            }

            function Db(a, b, c) {
              b = hc(b + 560 | 0, c);
              c = q[b + 4 >> 2];
              q[a >> 2] = q[b >> 2];
              q[a + 4 >> 2] = c;
            }

            function Zj() {
              var a = 0;
              a = ma - 16 | 0;
              ma = a;
              S(3848, 1, 3920, 3912, 30, 29);
              ma = a + 16 | 0;
            }

            function Uf(a, b, c) {
              var d = 0,
                  e = 0;
              d = a, e = q[Ha(q[b >> 2] + 172 | 0, c) >> 2], q[d >> 2] = e;
            }

            function Gc(a, b, c) {
              var d = 0,
                  e = 0;
              d = a, e = q[Ha(q[b >> 2] + 180 | 0, c) >> 2], q[d >> 2] = e;
            }

            function Cj() {
              var a = 0;
              a = ma - 16 | 0;
              ma = a;
              S(5176, 1, 5232, 3912, 59, 58);
              ma = a + 16 | 0;
            }

            function wk(a) {
              a = a | 0;
              a = q[q[a >> 2] + 540 >> 2];

              if (!a) {
                return 0;
              }

              return q[a >> 2];
            }

            function Pb(a, b) {
              a: {
                if (!Fa(b)) {
                  if (!Gf(b)) {
                    break a;
                  }
                }

                xb(a);
                return;
              }

              Fg(a, b);
            }

            function Fb(a, b) {
              a: {
                if (!Fa(b)) {
                  if (!Gf(b)) {
                    break a;
                  }
                }

                xb(a);
                return;
              }

              Gg(a, b);
            }

            function $l(a, b) {
              var c = 0;
              c = ma - 16 | 0;
              ma = c;
              vo(Hg(a), xo(c + 8 | 0, b));
              ma = c + 16 | 0;
            }

            function wd(a) {
              var b = 0;
              b = _(8) | 0;
              Re(b, a);
              q[b >> 2] = 7964;
              Z(b | 0, 7996, 1);
              F();
            }

            function Pd(a) {
              var b = 0;
              b = ma - 16 | 0;
              ma = b;
              a = ki(Pe(b, a));
              ma = b + 16 | 0;
              return a;
            }

            function Kd(a, b, c) {
              if (!(q[a + 28 >> 2] == 1 | q[a + 4 >> 2] != (b | 0))) {
                q[a + 28 >> 2] = c;
              }
            }

            function Rl() {
              var a = 0,
                  b = 0,
                  c = 0;
              a = bb(4);
              b = a, c = ng(), q[b >> 2] = c;
              return a | 0;
            }

            function Nj(a) {
              a = a | 0;
              var b = 0;
              b = bb(12);
              ij(b, a);
              q[b >> 2] = 4576;
              return b | 0;
            }

            function Hj(a) {
              a = a | 0;
              var b = 0;
              b = bb(12);
              dj(b, a);
              q[b >> 2] = 5108;
              return b | 0;
            }

            function nc(a, b) {
              if (Ka(Gb(a)) >>> 0 > b >>> 0) {
                a = ec(a, b);
              } else {
                a = 0;
              }

              return a;
            }

            function Lj(a, b, c) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              Xd(a, Y(ef(b) | 0, 4416, q[c >> 2]) | 0);
            }

            function Gj(a, b, c) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              Xd(a, Y(ef(b) | 0, 4984, q[c >> 2]) | 0);
            }

            function mk(a, b, c, d) {
              a = a | 0;
              b = +b;
              c = +c;
              d = d | 0;
              Lm(q[a >> 2], x(b), x(c), d);
            }

            function Kf(a, b) {
              if (q[a + 4 >> 2] != q[Na(a) >> 2]) {
                He(a, b);
                return;
              }

              Dm(a, b);
            }

            function Eh(a, b, c, d, e) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              d = d | 0;
              e = e | 0;
              n[a](b, c, d, e);
            }

            function uh(a, b, c, d, e) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              d = d | 0;
              e = +e;
              n[a](b, c, d, e);
            }

            function eo(a, b) {
              if (!jo(Ea(a), Ea(b))) {
                fb(a + 24 | 0, Ea(b), 192);
                Sa(a);
              }
            }

            function Ch(a, b, c, d) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              d = d | 0;
              return n[a](b, c, d) | 0;
            }

            function Cf(a) {
              a = a | 0;

              if (a) {
                mg(q[a >> 2]);
                Af(a + 8 | 0);
                Af(a + 4 | 0);
                ab(a);
              }
            }

            function xh(a, b, c, d, e) {
              a = a | 0;
              b = b | 0;
              c = +c;
              d = +d;
              e = e | 0;
              n[a](b, c, d, e);
            }

            function lc(a, b) {
              var c = 0;
              c = q[a >> 2];
              q[a >> 2] = b;

              if (c) {
                if (c) {
                  ab(c);
                }
              }
            }

            function Xk(a, b, c) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              Ra(a, Ha(Cb(Ea(q[b >> 2])), c));
            }

            function Pk(a, b, c) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              Ra(a, Ha(lb(Ea(q[b >> 2])), c));
            }

            function Ed(a, b) {
              var c = 0;

              if (Ee(a, b)) {
                c = 1;
              } else {
                c = rc(a, b);
              }

              return c;
            }

            function Bk(a, b, c) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              Ra(a, Ha(gc(Ea(q[b >> 2])), c));
            }

            function Bg(a) {
              if (1073741823 < a >>> 0) {
                wd(1204);
                F();
              }

              return bb(a << 2);
            }

            function th(a, b, c, d) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              d = d | 0;
              return +n[a](b, c, d);
            }

            function rb(a, b, c) {
              var d = 0,
                  e = x(0);
              d = Da(a + 504 | 0, c), e = b, u[d >> 2] = e;
            }

            function Qa(a, b, c) {
              var d = 0,
                  e = x(0);
              d = Da(a + 216 | 0, c), e = b, u[d >> 2] = e;
            }

            function Lc(a, b, c) {
              var d = 0,
                  e = x(0);
              d = Da(a + 232 | 0, c), e = b, u[d >> 2] = e;
            }

            function Hc(a, b) {
              return (a | 0) <= 2 ? q[(a << 2) + (b ? 2008 : 1956) >> 2] : 1705;
            }

            function Cd(a, b, c) {
              var d = 0,
                  e = x(0);
              d = Da(a + 240 | 0, c), e = b, u[d >> 2] = e;
            }

            function Bd(a, b, c) {
              var d = 0,
                  e = x(0);
              d = Da(a + 256 | 0, c), e = b, u[d >> 2] = e;
            }

            function Ad(a, b, c) {
              var d = 0,
                  e = x(0);
              d = Da(a + 272 | 0, c), e = b, u[d >> 2] = e;
            }

            function sf() {
              var a = 0;
              a = bb(8);
              q[a >> 2] = 0;
              q[a + 4 >> 2] = 0;
              return a | 0;
            }

            function ng() {
              var a = 0;
              a = Do(bb(28));
              q[2360] = q[2360] + 1;
              return a;
            }

            function vh(a, b, c) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              return x(x(n[a](b, c)));
            }

            function Xf(a, b, c) {
              if ((a | 0) == 1) {
                a = Ta(b, c);
              } else {
                a = 0;
              }

              return a;
            }

            function Od(a) {
              var b = 0;
              b = ma - 16 | 0;
              ma = b;
              ii(Pe(b, a));
              ma = b + 16 | 0;
            }

            function zk(a, b, c) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              fo(q[a >> 2], q[b >> 2], c);
            }

            function ui(a, b, c, d) {
              na = 0;
              return 0;
            }

            function qk(a) {
              a = a | 0;
              a = q[q[a >> 2] + 8 >> 2];
              n[q[q[a >> 2] >> 2]](a);
            }

            function Rg(a) {
              var b = 0;
              b = _(8) | 0;
              Re(b, a);
              Z(b | 0, 7944, 1);
              F();
            }

            function Gf(a) {
              return ((j(a), e(0)) & 2147483647) == 2139095040;
            }

            function Dh(a, b, c, d) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              d = x(d);
              n[a](b, c, d);
            }

            function Ll(a) {
              a = a | 0;
              lc(a + 4 | 0, 0);
              lc(a + 8 | 0, 0);
              zo(q[a >> 2]);
            }

            function Jk(a, b) {
              a = a | 0;
              b = b | 0;
              Ra(a, Ha(ad(Ea(q[b >> 2])), 0));
            }

            function Ik(a, b) {
              a = a | 0;
              b = b | 0;
              Ra(a, Ha(ad(Ea(q[b >> 2])), 1));
            }

            function Hk(a, b) {
              a = a | 0;
              b = b | 0;
              Ra(a, Ha(Jb(Ea(q[b >> 2])), 0));
            }

            function Hh(a, b, c, d) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              d = d | 0;
              n[a](b, c, d);
            }

            function Gk(a, b) {
              a = a | 0;
              b = b | 0;
              Ra(a, Ha(Jb(Ea(q[b >> 2])), 1));
            }

            function Fk(a, b) {
              a = a | 0;
              b = b | 0;
              Ra(a, Ha(Kb(Ea(q[b >> 2])), 0));
            }

            function Ek(a, b) {
              a = a | 0;
              b = b | 0;
              Ra(a, Ha(Kb(Ea(q[b >> 2])), 1));
            }

            function uk(a, b) {
              a = a | 0;
              b = b | 0;
              lc(a + 4 | 0, b);
              tg(q[a >> 2], 25);
            }

            function rk(a, b) {
              a = a | 0;
              b = b | 0;
              lc(a + 8 | 0, b);
              sg(q[a >> 2], 26);
            }

            function qf(a, b, c) {
              a = a | 0;
              b = b | 0;
              c = x(c);
              u[q[a >> 2] + b >> 2] = c;
            }

            function Oe(a, b, c) {
              a = a | 0;
              b = b | 0;
              return Ua(a, b, 0) | 0;
            }

            function Mb(a) {
              var b = 0;
              b = bb(4);
              q[b >> 2] = q[a >> 2];
              return b;
            }

            function Fh(a, b, c) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              return n[a](b, c) | 0;
            }

            function Ah(a, b, c, d) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              d = +d;
              n[a](b, c, d);
            }

            function zl(a, b, c) {
              a = a | 0;
              b = b | 0;
              c = +c;
              Cn(q[a >> 2], b, x(c));
            }

            function rf(a, b) {
              a = a | 0;
              b = b | 0;
              return x(u[q[a >> 2] + b >> 2]);
            }

            function nj(a, b, c) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              q[q[a >> 2] + b >> 2] = c;
            }

            function go(a, b) {
              if ((he(a) ^ b) == 1) {
                Vb(a + 4 | 0, 1, b);
                Sa(a);
              }
            }

            function bl(a, b, c) {
              a = a | 0;
              b = b | 0;
              c = +c;
              xn(q[a >> 2], b, x(c));
            }

            function al(a, b, c) {
              a = a | 0;
              b = b | 0;
              c = +c;
              An(q[a >> 2], b, x(c));
            }

            function _k(a, b, c) {
              a = a | 0;
              b = b | 0;
              c = +c;
              yn(q[a >> 2], b, x(c));
            }

            function Re(a, b) {
              q[a >> 2] = 7872;
              q[a >> 2] = 7916;
              ni(a + 4 | 0, b);
            }

            function Qg(a) {
              Vb(a + 4 | 0, 2, 1);
              a = a + 544 | 0;
              Eo(ib(a), pb(a));
            }

            function Nd(a) {
              a = a | 0;
              q[a >> 2] = 7916;
              ei(a + 4 | 0);
              return a | 0;
            }

            function Il(a, b, c) {
              a = a | 0;
              b = b | 0;
              c = +c;
              Hn(q[a >> 2], b, x(c));
            }

            function Hl(a, b, c) {
              a = a | 0;
              b = b | 0;
              c = +c;
              Fn(q[a >> 2], b, x(c));
            }

            function Ge(a, b) {
              if (ud(a)) {
                a = dc(2, b);
              } else {
                a = 0;
              }

              return a;
            }

            function Al(a, b, c) {
              a = a | 0;
              b = b | 0;
              c = +c;
              En(q[a >> 2], b, x(c));
            }

            function ok(a) {
              a = a | 0;
              a = q[a >> 2];
              ub(a, Xc(a), 1453);
              Sa(a);
            }

            function Sj(a, b, c) {
              a = a | 0;
              b = b | 0;
              c = +c;
              v[q[a >> 2] + b >> 3] = c;
            }

            function Bh(a, b, c) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              return +n[a](b, c);
            }

            function Ff(a, b, c, d, e) {
              if (!a) {
                a = og();
              }

              Bo(a, a, b, c, d, e);
            }

            function zb(a, b) {
              a = a | 0;
              b = b | 0;
              q[a + 4 >> 2] = 16;
              q[a >> 2] = b;
            }

            function oj(a, b) {
              a = a | 0;
              b = b | 0;
              return q[q[a >> 2] + b >> 2];
            }

            function mc(a, b) {
              a = a | 0;
              b = b | 0;
              q[a + 4 >> 2] = 21;
              q[a >> 2] = b;
            }

            function jg(a, b) {
              a = a | 0;
              b = b | 0;
              q[a + 4 >> 2] = 13;
              q[a >> 2] = b;
            }

            function ae(a, b) {
              a = a | 0;
              b = b | 0;
              q[a + 4 >> 2] = 10;
              q[a >> 2] = b;
            }

            function Yb(a, b) {
              a = a | 0;
              b = b | 0;
              q[a + 4 >> 2] = 19;
              q[a >> 2] = b;
            }

            function Tj(a, b) {
              a = a | 0;
              b = b | 0;
              return +v[q[a >> 2] + b >> 3];
            }

            function Ol(a, b) {
              a = a | 0;
              b = b | 0;
              return Hf(q[a >> 2], b) | 0;
            }

            function Jc(a, b) {
              a = a | 0;
              b = b | 0;
              q[a + 4 >> 2] = 17;
              q[a >> 2] = b;
            }

            function od(a, b) {
              a = a | 0;
              b = b | 0;
              q[a + 4 >> 2] = 4;
              q[a >> 2] = b;
            }

            function nb(a, b, c) {
              b = q[b >> 2];
              q[a + 4 >> 2] = c;
              q[a >> 2] = b;
            }

            function hf(a, b) {
              u[q[a >> 2] >> 2] = b;
              q[a >> 2] = q[a >> 2] + 8;
            }

            function gf(a, b) {
              q[q[a >> 2] >> 2] = b;
              q[a >> 2] = q[a >> 2] + 8;
            }

            function ac(a, b) {
              a = a | 0;
              b = b | 0;
              q[a + 4 >> 2] = 2;
              q[a >> 2] = b;
            }

            function Uc(a, b) {
              a = a | 0;
              b = b | 0;
              q[a + 4 >> 2] = 7;
              q[a >> 2] = b;
            }

            function uc(a) {
              return Zg(q[q[a >> 2] >> 2], q[a + 4 >> 2]);
            }

            function jd(a) {
              return ug(q[q[a >> 2] >> 2], q[a + 4 >> 2]);
            }

            function jb(a) {
              return Wc(q[q[a >> 2] >> 2], q[a + 4 >> 2]);
            }

            function ek(a, b) {
              a = a | 0;
              b = b | 0;
              return +Zm(q[a >> 2], b);
            }

            function eb(a) {
              return yd(q[q[a >> 2] >> 2], q[a + 4 >> 2]);
            }

            function dk(a, b) {
              a = a | 0;
              b = b | 0;
              return +Ym(q[a >> 2], b);
            }

            function ck(a, b) {
              a = a | 0;
              b = b | 0;
              return +Xm(q[a >> 2], b);
            }

            function Vc(a) {
              return pd(q[q[a >> 2] >> 2], q[a + 4 >> 2]);
            }

            function Qd(a) {
              if (!a) {
                return 0;
              }

              q[2373] = a;
              return -1;
            }

            function Ja(a, b, c) {
              return kb(sb(a, b, c), Sb(a, b, c));
            }

            function Ck(a, b) {
              a = a | 0;
              b = b | 0;
              return +un(q[a >> 2], b);
            }

            function yk(a, b) {
              a = a | 0;
              b = b | 0;
              kg(q[a >> 2], q[b >> 2]);
            }

            function Kl(a, b) {
              a = a | 0;
              b = b | 0;
              eo(q[a >> 2], q[b >> 2]);
            }

            function Se(a, b) {
              if (!a) {
                return 0;
              }

              return ri(a, b);
            }

            function Gh(a, b, c) {
              a = a | 0;
              b = b | 0;
              c = x(c);
              n[a](b, c);
            }

            function sk(a) {
              a = a | 0;
              lc(a + 4 | 0, 0);
              tg(q[a >> 2], 0);
            }

            function pk(a) {
              a = a | 0;
              lc(a + 8 | 0, 0);
              sg(q[a >> 2], 0);
            }

            function Za(a, b, c) {
              if (!(r[a | 0] & 32)) {
                Mh(b, c, a);
              }
            }

            function Jh(a, b, c) {
              a = a | 0;
              b = b | 0;
              c = c | 0;
              n[a](b, c);
            }

            function zh(a, b, c) {
              a = a | 0;
              b = b | 0;
              c = +c;
              n[a](b, c);
            }

            function uf(a, b) {
              a = a | 0;
              b = b | 0;
              return n[a](b) | 0;
            }

            function fd(a) {
              a = a | 0;
              return q[q[a >> 2] + -4 >> 2];
            }

            function Yk(a) {
              a = a | 0;
              return Zc(Ea(q[a >> 2])) | 0;
            }

            function Wk(a) {
              a = a | 0;
              return ne(Ea(q[a >> 2])) | 0;
            }

            function Vk(a) {
              a = a | 0;
              return sd(Ea(q[a >> 2])) | 0;
            }

            function Uk(a) {
              a = a | 0;
              return _c(Ea(q[a >> 2])) | 0;
            }

            function Tk(a) {
              a = a | 0;
              return td(Ea(q[a >> 2])) | 0;
            }

            function Sk(a) {
              a = a | 0;
              return me(Ea(q[a >> 2])) | 0;
            }

            function Rk(a) {
              a = a | 0;
              return oe(Ea(q[a >> 2])) | 0;
            }

            function Ok(a) {
              a = a | 0;
              return le(Ea(q[a >> 2])) | 0;
            }

            function Nk(a) {
              a = a | 0;
              return rd(Ea(q[a >> 2])) | 0;
            }

            function vl(a, b) {
              a = a | 0;
              b = +b;
              Rn(q[a >> 2], x(b));
            }

            function ul(a, b) {
              a = a | 0;
              b = +b;
              Kn(q[a >> 2], x(b));
            }

            function tl(a, b) {
              a = a | 0;
              b = +b;
              In(q[a >> 2], x(b));
            }

            function sl(a, b) {
              a = a | 0;
              b = +b;
              Pn(q[a >> 2], x(b));
            }

            function rl(a, b) {
              a = a | 0;
              b = +b;
              Nn(q[a >> 2], x(b));
            }

            function ql(a, b) {
              a = a | 0;
              b = +b;
              pn(q[a >> 2], x(b));
            }

            function pl(a, b) {
              a = a | 0;
              b = +b;
              nn(q[a >> 2], x(b));
            }

            function nl(a, b) {
              a = a | 0;
              b = +b;
              ln(q[a >> 2], x(b));
            }

            function ml(a, b) {
              a = a | 0;
              b = +b;
              kn(q[a >> 2], x(b));
            }

            function kl(a, b) {
              a = a | 0;
              b = +b;
              hn(q[a >> 2], x(b));
            }

            function jl(a, b) {
              a = a | 0;
              b = +b;
              fn(q[a >> 2], x(b));
            }

            function il(a, b) {
              a = a | 0;
              b = +b;
              en(q[a >> 2], x(b));
            }

            function hl(a, b) {
              a = a | 0;
              b = +b;
              dn(q[a >> 2], x(b));
            }

            function gl(a, b) {
              a = a | 0;
              b = +b;
              cn(q[a >> 2], x(b));
            }

            function fl(a, b) {
              a = a | 0;
              b = +b;
              an(q[a >> 2], x(b));
            }

            function el(a, b) {
              a = a | 0;
              b = +b;
              $m(q[a >> 2], x(b));
            }

            function dl(a, b) {
              a = a | 0;
              b = +b;

              _m(q[a >> 2], x(b));
            }

            function de(a) {
              return a >>> 0 > 60 ? 1868 : 1928 - a | 0;
            }

            function cl(a, b) {
              a = a | 0;
              b = +b;
              rn(q[a >> 2], x(b));
            }

            function _f(a) {
              return u[Da(Ga(a) + 16 | 0, 1) >> 2];
            }

            function Ib(a) {
              return q[Na(a) >> 2] - q[a >> 2] >> 2;
            }

            function Ci(a) {
              a = a | 0;
              return da(q[a + 60 >> 2]) | 0;
            }

            function $f(a) {
              return u[Da(Ga(a) + 16 | 0, 0) >> 2];
            }

            function yh(a, b) {
              a = a | 0;
              b = b | 0;
              return +n[a](b);
            }

            function ef(a) {
              if (ff(a)) {
                a = q[a >> 2];
              }

              return a;
            }

            function Lo() {
              ak();
              Vj();
              Rj();
              n[195](9480) | 0;
            }

            function yl(a, b) {
              a = a | 0;
              b = b | 0;
              Bn(q[a >> 2], b);
            }

            function xl(a, b) {
              a = a | 0;
              b = b | 0;
              Tn(q[a >> 2], b);
            }

            function wl(a, b) {
              a = a | 0;
              b = b | 0;
              Sn(q[a >> 2], b);
            }

            function mf(a, b) {
              a = a | 0;
              b = b | 0;
              n[q[a >> 2]](b);
            }

            function jf(a, b) {
              q[a >> 2] = q[b >> 2];
              q[b >> 2] = 0;
            }

            function Zk(a, b) {
              a = a | 0;
              b = b | 0;
              go(q[a >> 2], b);
            }

            function Oa(a, b) {
              return q[a >> 2] == q[b >> 2] ^ 1;
            }

            function Ml(a) {
              a = a | 0;
              return Df(bb(12), a) | 0;
            }

            function Mk(a, b) {
              a = a | 0;
              b = b | 0;
              Ln(a, q[b >> 2]);
            }

            function Ka(a) {
              return q[a + 4 >> 2] - q[a >> 2] >> 2;
            }

            function Jl(a, b) {
              a = a | 0;
              b = b | 0;
              Vn(q[a >> 2], b);
            }

            function Gl(a, b) {
              a = a | 0;
              b = b | 0;
              Yn(q[a >> 2], b);
            }

            function Gd(a, b) {
              return q[a >> 2] - q[b >> 2] >> 2;
            }

            function Fl(a, b) {
              a = a | 0;
              b = b | 0;
              Xn(q[a >> 2], b);
            }

            function El(a, b) {
              a = a | 0;
              b = b | 0;
              Wn(q[a >> 2], b);
            }

            function Dl(a, b) {
              a = a | 0;
              b = b | 0;
              ao(q[a >> 2], b);
            }

            function Cl(a, b) {
              a = a | 0;
              b = b | 0;
              Un(q[a >> 2], b);
            }

            function Bl(a, b) {
              a = a | 0;
              b = b | 0;

              _n(q[a >> 2], b);
            }

            function yd(a, b) {
              return ($a(_a(1), b) & a) >> b;
            }

            function xk(a) {
              a = a | 0;
              return Zb(q[a >> 2]) | 0;
            }

            function ug(a, b) {
              return ($a(_a(5), b) & a) >> b;
            }

            function pd(a, b) {
              return ($a(_a(7), b) & a) >> b;
            }

            function nk(a) {
              a = a | 0;
              return rg(q[a >> 2]) | 0;
            }

            function Zg(a, b) {
              return ($a(_a(3), b) & a) >> b;
            }

            function Wc(a, b) {
              return ($a(_a(2), b) & a) >> b;
            }

            function Je(a) {
              return q[a >> 2] == 2141891242;
            }

            function Ie(a, b) {
              q[a >> 2] = q[b >> 2];
              return a;
            }

            function Hf(a, b) {
              return r[Jf(a + 20 | 0, b) | 0];
            }

            function Ak(a) {
              a = a | 0;
              return he(q[a >> 2]) | 0;
            }

            function vf(a, b) {
              so(q[a >> 2], q[a + 4 >> 2], b);
            }

            function re(a) {
              q[q[a >> 2] + 4 >> 2] = q[a + 4 >> 2];
            }

            function hd(a, b) {
              wo(q[a >> 2], q[a + 4 >> 2], b);
            }

            function Lg(a, b) {
              return q[a >> 2] + (b << 2) | 0;
            }

            function lk(a) {
              a = a | 0;
              return +dg(q[a >> 2]);
            }

            function kk(a) {
              a = a | 0;
              return +bg(q[a >> 2]);
            }

            function jk(a) {
              a = a | 0;
              return +cg(q[a >> 2]);
            }

            function ik(a) {
              a = a | 0;
              return +ag(q[a >> 2]);
            }

            function hk(a) {
              a = a | 0;
              return +$f(q[a >> 2]);
            }

            function gk(a) {
              a = a | 0;
              return +_f(q[a >> 2]);
            }

            function dg(a) {
              return u[Da(Ga(a), 0) >> 2];
            }

            function cg(a) {
              return u[Da(Ga(a), 1) >> 2];
            }

            function bg(a) {
              return u[Da(Ga(a), 2) >> 2];
            }

            function ag(a) {
              return u[Da(Ga(a), 3) >> 2];
            }

            function Lk(a) {
              a = a | 0;
              return +co(q[a >> 2]);
            }

            function Kk(a) {
              a = a | 0;
              return +bo(q[a >> 2]);
            }

            function Dk(a) {
              a = a | 0;
              return +sn(q[a >> 2]);
            }

            function Ag(a, b) {
              return t[a >> 2] < t[b >> 2];
            }

            function Xg(a, b) {
              q[a + 4 >> 2] = 0;
              q[a >> 2] = b;
            }

            function Uj() {
              return gb(bb(48), 0, 48) | 0;
            }

            function oo(a) {
              a = a | 0;
              return q[a + 4 >> 2];
            }

            function Yc(a) {
              return tb(r[a + 72 | 0], 4);
            }

            function Ng(a) {
              return tb(r[a + 72 | 0], 2);
            }

            function Lh(a) {
              a = a | 0;
              return pa(a | 0) | 0;
            }

            function Hb(a) {
              return Wc(r[a + 72 | 0], 0);
            }

            function tf(a, b) {
              a = a | 0;
              b = b | 0;
              n[a](b);
            }

            function sd(a) {
              return pd(q[a >> 2], 10);
            }

            function rg(a) {
              return tb(r[a + 4 | 0], 2);
            }

            function rd(a) {
              return yd(q[a >> 2], 21);
            }

            function me(a) {
              return Wc(q[a >> 2], 17);
            }

            function le(a) {
              return Wc(q[a >> 2], 19);
            }

            function he(a) {
              return tb(r[a + 4 | 0], 1);
            }

            function ah(a, b) {
              Ka(a);
              zg(a, b);
              Tg(a);
            }

            function _d(a) {
              a = a | 0;
              return n[a]() | 0;
            }

            function _c(a) {
              return pd(q[a >> 2], 13);
            }

            function Zc(a) {
              return yd(q[a >> 2], 16);
            }

            function Wg(a) {
              a = a + 544 | 0;
              Vg(a);
              Go(a);
            }

            function $a(a, b) {
              return (-1 << a ^ -1) << b;
            }

            function zd(a, b) {
              q[a >> 2] = q[b + 16 >> 2];
            }

            function vg(a) {
              return Wc(q[a >> 2], 0);
            }

            function vb(a, b) {
              q[a >> 2] = b;
              return a;
            }

            function td(a) {
              return Zg(q[a >> 2], 2);
            }

            function pb(a) {
              return gd(q[a + 4 >> 2]);
            }

            function oe(a) {
              return ug(q[a >> 2], 4);
            }

            function ne(a) {
              return pd(q[a >> 2], 7);
            }

            function mb(a, b) {
              return w(b, 24) + a | 0;
            }

            function _a(a) {
              return a ? 32 - z(a) | 0 : 0;
            }

            function Te(a, b, c) {
              return Ai(a, b, c);
            }

            function Rc(a) {
              return a + -48 >>> 0 < 10;
            }

            function Qo(a, b, c) {
              return Oo(a, b, c);
            }

            function Po(a, b, c) {
              return No(a, b, c);
            }

            function Nl() {
              return Df(bb(12), 0) | 0;
            }

            function Ma(a, b) {
              u[a >> 2] = b;
              return a;
            }

            function Jg(a) {
              ve(a + 544 | 0);
              return a;
            }

            function Dd(a, b, c) {
              return no(a, b, c);
            }

            function Xc(a) {
              return q[a + 8 >> 2] != 0;
            }

            function Sd(a) {
              Ma(a, x(G));
              return a;
            }

            function $c(a, b, c) {
              q[b >> 2] = q[c >> 2];
            }

            function id(a, b) {
              return rc(a, b) ^ 1;
            }

            function ib(a) {
              return gd(q[a >> 2]);
            }

            function hc(a, b) {
              return (b << 3) + a | 0;
            }

            function ff(a) {
              return o[a + 11 | 0] < 0;
            }

            function Wb(a) {
              u[a >> 2] = G;
              return a;
            }

            function Tc(a) {
              a = a | 0;

              if (a) {
                ab(a);
              }
            }

            function Ia(a) {
              return Fa(u[a >> 2]);
            }

            function Da(a, b) {
              return (b << 2) + a | 0;
            }

            function vc(a, b) {
              q[a >> 2] = q[b >> 2];
            }

            function pe(a) {
              Ib(a);
              Ka(a);
              Ib(a);
            }

            function ol(a) {
              a = a | 0;
              mn(q[a >> 2]);
            }

            function ob(a) {
              q[a >> 2] = q[a >> 2] + 4;
            }

            function ll(a) {
              a = a | 0;
              jn(q[a >> 2]);
            }

            function gi(a) {
              return 7848;
            }

            function ci(a) {
              a = a | 0;
              Nd(a);
              ab(a);
            }

            function Vg(a) {
              Ka(a);
              Ug(a);
              Tg(a);
            }

            function Vd(a, b) {
              kj(q[a + 8 >> 2], b);
            }

            function Dj(a) {
              return 5176;
            }

            function De(a, b) {
              Vb(a + 288 | 0, 4, b);
            }

            function $j(a) {
              return 3848;
            }

            function xg(a, b) {
              return po(a, b);
            }

            function tb(a, b) {
              return a >>> b & 1;
            }

            function nf(a) {
              a = a | 0;
              o[a + 4 | 0] = 1;
            }

            function db(a) {
              a = a | 0;
              return a | 0;
            }

            function cj(a) {
              a = a | 0;
              Vd(a, 2531);
            }

            function Zb(a) {
              return Ka(Gb(a));
            }

            function Mf() {
              q[2363] = q[2363] + 1;
            }

            function Ha(a, b) {
              return Da(a, b);
            }

            function di(a) {
              a = a | 0;
              ab(Nd(a));
            }

            function Xb(a, b) {
              q[a + 540 >> 2] = b;
            }

            function Wa(a) {
              return (a & -2) == 2;
            }

            function Mc(a, b) {
              u[a + 296 >> 2] = b;
            }

            function $g(a, b) {
              q[a + 292 >> 2] = b;
            }

            function vi(a) {
              return 0;
            }

            function ud(a) {
              return a >>> 0 < 2;
            }

            function sg(a, b) {
              q[a + 20 >> 2] = b;
            }

            function ld(a) {
              $k(a);
              return a;
            }

            function ad(a) {
              return a + 164 | 0;
            }

            function _b(a) {
              return a + 128 | 0;
            }

            function Kb(a) {
              return a + 180 | 0;
            }

            function Jf(a, b) {
              return a + b | 0;
            }

            function Jb(a) {
              return a + 172 | 0;
            }

            function Gb(a) {
              return a + 544 | 0;
            }

            function Ga(a) {
              return a + 216 | 0;
            }

            function te(a, b) {
              Ib(a);
              Ib(a);
            }

            function lb(a) {
              return a + 20 | 0;
            }

            function je(a) {
              Vb(a + 4 | 0, 0, 1);
            }

            function gc(a) {
              return a + 92 | 0;
            }

            function fc(a) {
              return a + 12 | 0;
            }

            function Ug(a) {
              zg(a, q[a >> 2]);
            }

            function Ea(a) {
              return a + 24 | 0;
            }

            function Cb(a) {
              return a + 56 | 0;
            }

            function rh(a) {
              a = a | 0;
              n[a]();
            }

            function Na(a) {
              return a + 8 | 0;
            }

            function Mo(a, b) {
              i(a | 0, b | 0);
            }

            function oc(a) {
              a = a | 0;
              ab(a);
            }

            function Tg(a) {
              Ib(a);
              Ka(a);
            }

            function Sc(a) {
              la(q[a >> 2]);
            }

            function Qe() {
              wd(7757);
              F();
            }

            function Fa(a) {
              return a != a;
            }

            function Sf(a) {
              ve(a + 20 | 0);
            }

            function tg(a, b) {
              ih(a, b);
            }

            function qe(a) {
              q[a >> 2] = 0;
            }

            function lf(a, b) {
              Xd(a, b);
            }

            function Zf(a, b) {
              Qk(a, b);
            }

            function Xd(a, b) {
              vb(a, b);
            }

            function kf(a) {
              o[a | 0] = 0;
            }

            function Af(a) {
              lc(a, 0);
            }

            function xb(a) {
              Sd(a);
            }

            function Sg(a) {
            }

            function Ef(a) {
              Hg(a);
            }

            function hi() {
              F();
            } // EMSCRIPTEN_END_FUNCS


            n[1] = Nd;
            n[2] = io;
            n[3] = ac;
            n[4] = od;
            n[5] = Uc;
            n[6] = ae;
            n[7] = jg;
            n[8] = zb;
            n[9] = Jc;
            n[10] = Yb;
            n[11] = mc;
            n[12] = db;
            n[13] = db;
            n[14] = db;
            n[15] = db;
            n[16] = db;
            n[17] = db;
            n[18] = db;
            n[19] = db;
            n[20] = db;
            n[21] = db;
            n[22] = db;
            n[23] = db;
            n[24] = If;
            n[25] = tk;
            n[26] = qk;
            n[27] = $j;
            n[28] = _j;
            n[29] = Rl;
            n[30] = _d;
            n[31] = Ql;
            n[32] = Pl;
            n[33] = Ol;
            n[34] = pf;
            n[35] = mj;
            n[36] = of;
            n[37] = Uj;
            n[38] = Tc;
            n[39] = Tj;
            n[40] = Sj;
            n[41] = fd;
            n[42] = Tc;
            n[43] = fd;
            n[44] = Pj;
            n[45] = xf;
            n[46] = Nj;
            n[47] = Mj;
            n[48] = Lj;
            n[49] = fd;
            n[50] = Tc;
            n[51] = fd;
            n[52] = Jj;
            n[53] = xf;
            n[54] = Hj;
            n[55] = Gj;
            n[56] = Dj;
            n[57] = Cf;
            n[58] = Nl;
            n[59] = _d;
            n[60] = uf;
            n[61] = Ml;
            n[62] = tf;
            n[63] = Cf;
            n[64] = Ll;
            n[65] = Kl;
            n[66] = Jl;
            n[67] = Il;
            n[68] = Hl;
            n[69] = Gl;
            n[70] = Fl;
            n[71] = El;
            n[72] = Dl;
            n[73] = Cl;
            n[74] = Bl;
            n[75] = Al;
            n[76] = zl;
            n[77] = yl;
            n[78] = xl;
            n[79] = wl;
            n[80] = vl;
            n[81] = ul;
            n[82] = tl;
            n[83] = sl;
            n[84] = rl;
            n[85] = ql;
            n[86] = pl;
            n[87] = ol;
            n[88] = nl;
            n[89] = ml;
            n[90] = ll;
            n[91] = kl;
            n[92] = jl;
            n[93] = il;
            n[94] = hl;
            n[95] = gl;
            n[96] = fl;
            n[97] = el;
            n[98] = dl;
            n[99] = cl;
            n[100] = bl;
            n[101] = al;
            n[102] = _k;
            n[103] = Yk;
            n[104] = Xk;
            n[105] = Wk;
            n[106] = Vk;
            n[107] = Uk;
            n[108] = Tk;
            n[109] = Sk;
            n[110] = Rk;
            n[111] = Pk;
            n[112] = Mk;
            n[113] = Lk;
            n[114] = Kk;
            n[115] = Jk;
            n[116] = Ik;
            n[117] = Hk;
            n[118] = Gk;
            n[119] = Fk;
            n[120] = Ek;
            n[121] = Dk;
            n[122] = Ck;
            n[123] = Ok;
            n[124] = Nk;
            n[125] = Bk;
            n[126] = zk;
            n[127] = yk;
            n[128] = xk;
            n[129] = wk;
            n[130] = vk;
            n[131] = Ak;
            n[132] = Zk;
            n[133] = uk;
            n[134] = sk;
            n[135] = rk;
            n[136] = pk;
            n[137] = ok;
            n[138] = nk;
            n[139] = mk;
            n[140] = lk;
            n[141] = kk;
            n[142] = jk;
            n[143] = ik;
            n[144] = hk;
            n[145] = gk;
            n[146] = fk;
            n[147] = ek;
            n[148] = dk;
            n[149] = ck;
            n[150] = lj;
            n[151] = db;
            n[152] = db;
            n[153] = nf;
            n[154] = mf;
            n[155] = df;
            n[156] = db;
            n[157] = db;
            n[158] = nf;
            n[159] = mf;
            n[160] = sf;
            n[161] = Tc;
            n[162] = rf;
            n[163] = qf;
            n[164] = sf;
            n[165] = Tc;
            n[166] = rf;
            n[167] = qf;
            n[168] = oj;
            n[169] = nj;
            n[170] = df;
            n[171] = yc;
            n[172] = yc;
            n[173] = bj;
            n[174] = aj;
            n[175] = cf;
            n[176] = $i;
            n[177] = _i;
            n[178] = Zi;
            n[179] = Yi;
            n[180] = pf;
            n[181] = yc;
            n[182] = cf;
            n[183] = Ud;
            n[184] = of;
            n[185] = Ud;
            n[186] = yc;
            n[187] = yc;
            n[188] = yc;
            n[189] = Ud;
            n[190] = Xi;
            n[191] = Wi;
            n[192] = hi;
            n[193] = hj;
            n[194] = cj;
            n[195] = Ei;
            n[196] = Ci;
            n[197] = Bi;
            n[198] = Di;
            n[199] = xi;
            n[200] = wi;
            n[201] = vi;
            n[202] = ui;
            n[203] = db;
            n[204] = oc;
            n[205] = gi;
            n[206] = di;
            n[207] = oo;
            n[208] = ci;
            n[209] = db;
            n[210] = oc;
            n[211] = Sg;
            n[212] = Sg;
            n[213] = Oe;
            n[214] = oc;
            n[215] = Oe;
            n[216] = oc;
            n[217] = ai;
            n[218] = Qh;
            n[219] = Th;
            n[220] = $h;
            n[221] = oc;
            n[222] = Rh;
            n[223] = Uh;
            n[224] = _h;
            n[225] = oc;
            n[226] = Sh;
            n[227] = Vh;
            n[228] = Zh;
            n[229] = oc;
            n[230] = Xh;

            function oa() {
              return buffer.byteLength / 65536 | 0;
            }

            function pa(pagesToAdd) {
              pagesToAdd = pagesToAdd | 0;
              var qa = oa() | 0;
              var ra = qa + pagesToAdd | 0;

              if (qa < ra && ra < 65536) {
                var sa = new ArrayBuffer(w(ra, 65536));
                var ta = new global.Int8Array(sa);
                ta.set(o);
                o = ta;
                o = new global.Int8Array(sa);
                p = new global.Int16Array(sa);
                q = new global.Int32Array(sa);
                r = new global.Uint8Array(sa);
                s = new global.Uint16Array(sa);
                t = new global.Uint32Array(sa);
                u = new global.Float32Array(sa);
                v = new global.Float64Array(sa);
                buffer = sa;
                m.buffer = sa;
              }

              return qa;
            }

            return {
              "__wasm_call_ctors": Lo,
              "__getTypeName": Vi,
              "__embind_register_native_and_builtin_types": bf,
              "malloc": Id,
              "free": ab,
              "__growWasmMemory": Lh,
              "dynCall_ii": uf,
              "dynCall_iiiiii": Kh,
              "dynCall_vii": Jh,
              "dynCall_viififi": Ih,
              "dynCall_vi": tf,
              "dynCall_i": _d,
              "dynCall_viii": Hh,
              "dynCall_vif": Gh,
              "dynCall_iii": Fh,
              "dynCall_viiii": Eh,
              "dynCall_viif": Dh,
              "dynCall_iiii": Ch,
              "dynCall_dii": Bh,
              "dynCall_viid": Ah,
              "dynCall_vid": zh,
              "dynCall_di": yh,
              "dynCall_viddi": xh,
              "dynCall_iiififi": wh,
              "dynCall_fii": vh,
              "dynCall_viiid": uh,
              "dynCall_diii": th,
              "dynCall_viiddi": sh,
              "dynCall_v": rh,
              "dynCall_jiji": nh,
              "dynCall_iidiiii": qh,
              "dynCall_viiiiii": ph,
              "dynCall_viiiii": oh
            };
          }

          for (var ua = new Uint8Array(123), va = 25; va >= 0; --va) {
            ua[48 + va] = 52 + va;
            ua[65 + va] = va;
            ua[97 + va] = 26 + va;
          }

          ua[43] = 62;
          ua[47] = 63;

          function wa(uint8Array, offset, b64) {
            var xa,
                ya,
                va = 0,
                za = offset,
                Aa = b64.length,
                Ba = offset + (Aa * 3 >> 2);
            if (b64[Aa - 2] == "=") --Ba;
            if (b64[Aa - 1] == "=") --Ba;

            for (; va < Aa; va += 4, za += 3) {
              xa = ua[b64.charCodeAt(va + 1)];
              ya = ua[b64.charCodeAt(va + 2)];
              uint8Array[za] = ua[b64.charCodeAt(va)] << 2 | xa >> 4;
              if (za + 1 < Ba) uint8Array[za + 1] = xa << 4 | ya >> 2;
              if (za + 2 < Ba) uint8Array[za + 2] = ya << 6 | ua[b64.charCodeAt(va + 3)];
            }
          }

          var Ca = new Uint8Array(wasmMemory.buffer);
          wa(Ca, 1024, "Q2Fubm90IHNldCBtZWFzdXJlIGZ1bmN0aW9uOiBOb2RlcyB3aXRoIG1lYXN1cmUgZnVuY3Rpb25zIGNhbm5vdCBoYXZlIGNoaWxkcmVuLgBDYW5ub3QgcmVzZXQgYSBub2RlIHdoaWNoIHN0aWxsIGhhcyBjaGlsZHJlbiBhdHRhY2hlZABDYW5ub3QgcmVzZXQgYSBub2RlIHN0aWxsIGF0dGFjaGVkIHRvIGEgb3duZXIAYWxsb2NhdG9yPFQ+OjphbGxvY2F0ZShzaXplX3QgbikgJ24nIGV4Y2VlZHMgbWF4aW11bSBzdXBwb3J0ZWQgc2l6ZQAAAAAAAQAAAAAAwH8AAAAAAADAfwMAAABDb3VsZCBub3QgYWxsb2NhdGUgbWVtb3J5IGZvciBub2RlAENoaWxkIGFscmVhZHkgaGFzIGEgb3duZXIsIGl0IG11c3QgYmUgcmVtb3ZlZCBmaXJzdC4AQ2Fubm90IGFkZCBjaGlsZDogTm9kZXMgd2l0aCBtZWFzdXJlIGZ1bmN0aW9ucyBjYW5ub3QgaGF2ZSBjaGlsZHJlbi4AT25seSBsZWFmIG5vZGVzIHdpdGggY3VzdG9tIG1lYXN1cmUgZnVuY3Rpb25zc2hvdWxkIG1hbnVhbGx5IG1hcmsgdGhlbXNlbHZlcyBhcyBkaXJ0eQBDYW5ub3QgZ2V0IGxheW91dCBwcm9wZXJ0aWVzIG9mIG11bHRpLWVkZ2Ugc2hvcnRoYW5kcwAAAAABAAAAAwAAAAAAAAACAAAAAwAAAAEAAAACAAAAAAAAACVzJWQue1tza2lwcGVkXSAAd206ICVzLCBobTogJXMsIGF3OiAlZiBhaDogJWYgPT4gZDogKCVmLCAlZikgJXMKACVzJWQueyVzACoAAHdtOiAlcywgaG06ICVzLCBhdzogJWYgYWg6ICVmICVzCgAlcyVkLn0lcwB3bTogJXMsIGhtOiAlcywgZDogKCVmLCAlZikgJXMKAE91dCBvZiBjYWNoZSBlbnRyaWVzIQoAU2NhbGUgZmFjdG9yIHNob3VsZCBub3QgYmUgbGVzcyB0aGFuIHplcm8AAAABAAAAAQ==");
          wa(Ca, 1864, "JXMKACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIABVTkRFRklORUQARVhBQ1RMWQBBVF9NT1NUAACJBwAAkwcAAJsHAABMQVlfVU5ERUZJTkVEAExBWV9FWEFDVExZAExBWV9BVF9NT1NUAAAAsAcAAL4HAADKBwAAYXZhaWxhYmxlV2lkdGggaXMgaW5kZWZpbml0ZSBzbyB3aWR0aE1lYXN1cmVNb2RlIG11c3QgYmUgWUdNZWFzdXJlTW9kZVVuZGVmaW5lZABhdmFpbGFibGVIZWlnaHQgaXMgaW5kZWZpbml0ZSBzbyBoZWlnaHRNZWFzdXJlTW9kZSBtdXN0IGJlIFlHTWVhc3VyZU1vZGVVbmRlZmluZWQAAAABAAAAAwAAAAAAAAACAAAARXhwZWN0ZWQgbm9kZSB0byBoYXZlIGN1c3RvbSBtZWFzdXJlIGZ1bmN0aW9uAEV4cGVjdCBjdXN0b20gYmFzZWxpbmUgZnVuY3Rpb24gdG8gbm90IHJldHVybiBOYU4AQ291bGQgbm90IGFsbG9jYXRlIG1lbW9yeSBmb3IgY29uZmlnAENvbmZpZwBjcmVhdGUAc2V0RXhwZXJpbWVudGFsRmVhdHVyZUVuYWJsZWQAc2V0UG9pbnRTY2FsZUZhY3RvcgBpc0V4cGVyaW1lbnRhbEZlYXR1cmVFbmFibGVkAExheW91dABsZWZ0AHJpZ2h0AHRvcABib3R0b20Ad2lkdGgAaGVpZ2h0AE1lYXN1cmVDYWxsYmFjawBtZWFzdXJlAE1lYXN1cmVDYWxsYmFja1dyYXBwZXIARGlydGllZENhbGxiYWNrAGRpcnRpZWQARGlydGllZENhbGxiYWNrV3JhcHBlcgBTaXplAFZhbHVlAHZhbHVlAHVuaXQATm9kZQBjcmVhdGVEZWZhdWx0AGNyZWF0ZVdpdGhDb25maWcAZGVzdHJveQByZXNldABjb3B5U3R5bGUAc2V0UG9zaXRpb25UeXBlAHNldFBvc2l0aW9uAHNldFBvc2l0aW9uUGVyY2VudABzZXRBbGlnbkNvbnRlbnQAc2V0QWxpZ25JdGVtcwBzZXRBbGlnblNlbGYAc2V0RmxleERpcmVjdGlvbgBzZXRGbGV4V3JhcABzZXRKdXN0aWZ5Q29udGVudABzZXRNYXJnaW4Ac2V0TWFyZ2luUGVyY2VudABzZXRNYXJnaW5BdXRvAHNldE92ZXJmbG93AHNldERpc3BsYXkAc2V0RmxleABzZXRGbGV4QmFzaXMAc2V0RmxleEJhc2lzUGVyY2VudABzZXRGbGV4R3JvdwBzZXRGbGV4U2hyaW5rAHNldFdpZHRoAHNldFdpZHRoUGVyY2VudABzZXRXaWR0aEF1dG8Ac2V0SGVpZ2h0AHNldEhlaWdodFBlcmNlbnQAc2V0SGVpZ2h0QXV0bwBzZXRNaW5XaWR0aABzZXRNaW5XaWR0aFBlcmNlbnQAc2V0TWluSGVpZ2h0AHNldE1pbkhlaWdodFBlcmNlbnQAc2V0TWF4V2lkdGgAc2V0TWF4V2lkdGhQZXJjZW50AHNldE1heEhlaWdodABzZXRNYXhIZWlnaHRQZXJjZW50AHNldEFzcGVjdFJhdGlvAHNldEJvcmRlcgBzZXRQYWRkaW5nAHNldFBhZGRpbmdQZXJjZW50AGdldFBvc2l0aW9uVHlwZQBnZXRQb3NpdGlvbgBnZXRBbGlnbkNvbnRlbnQAZ2V0QWxpZ25JdGVtcwBnZXRBbGlnblNlbGYAZ2V0RmxleERpcmVjdGlvbgBnZXRGbGV4V3JhcABnZXRKdXN0aWZ5Q29udGVudABnZXRNYXJnaW4AZ2V0RmxleEJhc2lzAGdldEZsZXhHcm93AGdldEZsZXhTaHJpbmsAZ2V0V2lkdGgAZ2V0SGVpZ2h0AGdldE1pbldpZHRoAGdldE1pbkhlaWdodABnZXRNYXhXaWR0aABnZXRNYXhIZWlnaHQAZ2V0QXNwZWN0UmF0aW8AZ2V0Qm9yZGVyAGdldE92ZXJmbG93AGdldERpc3BsYXkAZ2V0UGFkZGluZwBpbnNlcnRDaGlsZAByZW1vdmVDaGlsZABnZXRDaGlsZENvdW50AGdldFBhcmVudABnZXRDaGlsZABpc1JlZmVyZW5jZUJhc2VsaW5lAHNldElzUmVmZXJlbmNlQmFzZWxpbmUAc2V0TWVhc3VyZUZ1bmMAdW5zZXRNZWFzdXJlRnVuYwBzZXREaXJ0aWVkRnVuYwB1bnNldERpcnRpZWRGdW5jAG1hcmtEaXJ0eQBpc0RpcnR5AGNhbGN1bGF0ZUxheW91dABnZXRDb21wdXRlZExlZnQAZ2V0Q29tcHV0ZWRSaWdodABnZXRDb21wdXRlZFRvcABnZXRDb21wdXRlZEJvdHRvbQBnZXRDb21wdXRlZFdpZHRoAGdldENvbXB1dGVkSGVpZ2h0AGdldENvbXB1dGVkTGF5b3V0AGdldENvbXB1dGVkTWFyZ2luAGdldENvbXB1dGVkQm9yZGVyAGdldENvbXB1dGVkUGFkZGluZwA2Q29uZmlnANwhAAAADwAAUDZDb25maWcAAAAAvCIAABAPAAAAAAAACA8AAFBLNkNvbmZpZwAAALwiAAAsDwAAAQAAAAgPAABpaQB2AHZpABwP");
          wa(Ca, 3936, "5CAAABwPAABEIQAA/CAAAHZpaWlpAAAA5CAAABwPAAB0IQAAdmlpZgAAAAD8IAAAOA8AAEQhAABpaWlpADZMYXlvdXQAAAAA3CEAAJ0PAABpAGRpaQB2aWlkADE1TWVhc3VyZUNhbGxiYWNrAAAAANwhAAC7DwAAUDE1TWVhc3VyZUNhbGxiYWNrAAC8IgAA2A8AAAAAAADQDwAAUEsxNU1lYXN1cmVDYWxsYmFjawC8IgAA/A8AAAEAAADQDwAAQBAAAOwPAAB0IQAAWBAAAHQhAABYEAAANllHU2l6ZQDcIQAAOBAAADEzWUdNZWFzdXJlTW9kZQCQIQAASBAAAGlpaWZpZmkAbm90aWZ5T25EZXN0cnVjdGlvbgBpbXBsZW1lbnQAZXh0ZW5k");
          wa(Ca, 4245, "EQAAwAAAAF9fZGVzdHJ1Y3QATjEwZW1zY3JpcHRlbjd3cmFwcGVySTE1TWVhc3VyZUNhbGxiYWNrRUUATjEwZW1zY3JpcHRlbjhpbnRlcm5hbDExV3JhcHBlckJhc2VFAAAA3CEAANEQAABgIgAApxAAAAAAAAACAAAA0A8AAAIAAAD4EAAAAgQAAOQgAAAyMk1lYXN1cmVDYWxsYmFja1dyYXBwZXIAAAAABCIAACQRAAAAEQAAUDIyTWVhc3VyZUNhbGxiYWNrV3JhcHBlcgAAALwiAABMEQAAAAAAAEARAABQSzIyTWVhc3VyZUNhbGxiYWNrV3JhcHBlcgAAvCIAAHgRAAABAAAAQBEAAOQgAABAEQAAdmlpAGgRAADMEQAATjEwZW1zY3JpcHRlbjN2YWxFAADcIQAAuBEAAGlpaQAAAAAAQBEAAMEAAAAAAAAA0A8AAMAAAABAEAAAdCEAAFgQAAB0IQAAWBAAAMwRAACAEgAAzBEAAE5TdDNfXzIxMmJhc2ljX3N0cmluZ0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVFAE5TdDNfXzIyMV9fYmFzaWNfc3RyaW5nX2NvbW1vbklMYjFFRUUAAAAA3CEAAE8SAABgIgAAEBIAAAAAAAABAAAAeBIAAAAAAAAxNURpcnRpZWRDYWxsYmFjawAAANwhAACYEgAAUDE1RGlydGllZENhbGxiYWNrAAC8IgAAtBIAAAAAAACsEgAAUEsxNURpcnRpZWRDYWxsYmFjawC8IgAA2BIAAAEAAACsEgAA5CAAAMgSAAAAAAAAPBMAAMAAAABOMTBlbXNjcmlwdGVuN3dyYXBwZXJJMTVEaXJ0aWVkQ2FsbGJhY2tFRQAAAGAiAAAQEwAAAAAAAAIAAACsEgAAAgAAAPgQAAACBAAAMjJEaXJ0aWVkQ2FsbGJhY2tXcmFwcGVyAAAAAAQiAABcEwAAPBMAAFAyMkRpcnRpZWRDYWxsYmFja1dyYXBwZXIAAAC8IgAAhBMAAAAAAAB4EwAAUEsyMkRpcnRpZWRDYWxsYmFja1dyYXBwZXIAALwiAACwEwAAAQAAAHgTAADkIAAAeBMAAKATAADMEQAAAAAAAHgTAADCAAAAAAAAAKwSAADAAAAAZmlpADdZR1ZhbHVlAAAAANwhAAAIFAAANllHVW5pdACQIQAAHBQAAHZpaWkANE5vZGUAANwhAAAxFAAAUDROb2RlAAC8IgAAQBQAAAAAAAA4FAAAUEs0Tm9kZQC8IgAAWBQAAAEAAAA4FAAASBQAAEgUAAAcDwAA5CAAAEgUAADkIAAASBQAADgUAADkIAAASBQAAEQhAAAAAAAA5CAAAEgUAABEIQAAgCEAAHZpaWlkAAAA5CAAAEgUAACAIQAARCEAAGAUAAAUFAAAYBQAAEQhAAAUFAAAYBQAAIAhAABgFAAAgCEAAGAUAABEIQAAZGlpaQAAAAAAAAAA5CAAAEgUAABIFAAAUCEAAOQgAABIFAAASBQAAFAhAABgFAAASBQAAEgUAABIFAAASBQAAFAhAAD8IAAASBQAAOQgAABIFAAA/CAAAOQgAABIFAAA7A8AAOQgAABIFAAAyBIAAPwgAABgFAAAAAAAAOQgAABIFAAAgCEAAIAhAABEIQAAdmlpZGRpAACoDwAAYBQAAHZvaWQAYm9vbABjaGFyAHNpZ25lZCBjaGFyAHVuc2lnbmVkIGNoYXIAc2hvcnQAdW5zaWduZWQgc2hvcnQAaW50AHVuc2lnbmVkIGludABsb25nAHVuc2lnbmVkIGxvbmcAZmxvYXQAZG91YmxlAHN0ZDo6c3RyaW5nAHN0ZDo6YmFzaWNfc3RyaW5nPHVuc2lnbmVkIGNoYXI+AHN0ZDo6d3N0cmluZwBzdGQ6OnUxNnN0cmluZwBzdGQ6OnUzMnN0cmluZwBlbXNjcmlwdGVuOjp2YWwAZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8Y2hhcj4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8c2lnbmVkIGNoYXI+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIGNoYXI+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHNob3J0PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBzaG9ydD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBpbnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGxvbmc+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIGxvbmc+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludDhfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dWludDhfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50MTZfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dWludDE2X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludDMyX3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQzMl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxmbG9hdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8ZG91YmxlPgBOU3QzX18yMTJiYXNpY19zdHJpbmdJaE5TXzExY2hhcl90cmFpdHNJaEVFTlNfOWFsbG9jYXRvckloRUVFRQAAAABgIgAAqhgAAAAAAAABAAAAeBIAAAAAAABOU3QzX18yMTJiYXNpY19zdHJpbmdJd05TXzExY2hhcl90cmFpdHNJd0VFTlNfOWFsbG9jYXRvckl3RUVFRQAAYCIAAAQZAAAAAAAAAQAAAHgSAAAAAAAATlN0M19fMjEyYmFzaWNfc3RyaW5nSURzTlNfMTFjaGFyX3RyYWl0c0lEc0VFTlNfOWFsbG9jYXRvcklEc0VFRUUAAABgIgAAXBkAAAAAAAABAAAAeBIAAAAAAABOU3QzX18yMTJiYXNpY19zdHJpbmdJRGlOU18xMWNoYXJfdHJhaXRzSURpRUVOU185YWxsb2NhdG9ySURpRUVFRQAAAGAiAAC4GQAAAAAAAAEAAAB4EgAAAAAAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWNFRQAA3CEAABQaAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lhRUUAANwhAAA8GgAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJaEVFAADcIQAAZBoAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SXNFRQAA3CEAAIwaAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0l0RUUAANwhAAC0GgAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJaUVFAADcIQAA3BoAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWpFRQAA3CEAAAQbAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lsRUUAANwhAAAsGwAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJbUVFAADcIQAAVBsAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWZFRQAA3CEAAHwbAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lkRUUAANwhAACkGwAA0CIAAC0rICAgMFgweAAobnVsbCk=");
          wa(Ca, 7152, "EQAKABEREQAAAAAFAAAAAAAACQAAAAALAAAAAAAAAAARAA8KERERAwoHAAETCQsLAAAJBgsAAAsABhEAAAARERE=");
          wa(Ca, 7233, "CwAAAAAAAAAAEQAKChEREQAKAAACAAkLAAAACQALAAAL");
          wa(Ca, 7291, "DA==");
          wa(Ca, 7303, "DAAAAAAMAAAAAAkMAAAAAAAMAAAM");
          wa(Ca, 7349, "Dg==");
          wa(Ca, 7361, "DQAAAAQNAAAAAAkOAAAAAAAOAAAO");
          wa(Ca, 7407, "EA==");
          wa(Ca, 7419, "DwAAAAAPAAAAAAkQAAAAAAAQAAAQAAASAAAAEhIS");
          wa(Ca, 7474, "EgAAABISEgAAAAAAAAk=");
          wa(Ca, 7523, "Cw==");
          wa(Ca, 7535, "CgAAAAAKAAAAAAkLAAAAAAALAAAL");
          wa(Ca, 7581, "DA==");
          wa(Ca, 7593, "DAAAAAAMAAAAAAkMAAAAAAAMAAAMAAAwMTIzNDU2Nzg5QUJDREVGLTBYKzBYIDBYLTB4KzB4IDB4AGluZgBJTkYAbmFuAE5BTgAuAAAAAGAjAABiYXNpY19zdHJpbmcAYWxsb2NhdG9yPFQ+OjphbGxvY2F0ZShzaXplX3QgbikgJ24nIGV4Y2VlZHMgbWF4aW11bSBzdXBwb3J0ZWQgc2l6ZQB2ZWN0b3IAX19jeGFfZ3VhcmRfYWNxdWlyZSBkZXRlY3RlZCByZWN1cnNpdmUgaW5pdGlhbGl6YXRpb24AUHVyZSB2aXJ0dWFsIGZ1bmN0aW9uIGNhbGxlZCEAc3RkOjpleGNlcHRpb24AAAAAAADcHgAAywAAAMwAAADNAAAAU3Q5ZXhjZXB0aW9uAAAAANwhAADMHgAAAAAAAAgfAAABAAAAzgAAAM8AAABTdDExbG9naWNfZXJyb3IABCIAAPgeAADcHgAAAAAAADwfAAABAAAA0AAAAM8AAABTdDEybGVuZ3RoX2Vycm9yAAAAAAQiAAAoHwAACB8AAFN0OXR5cGVfaW5mbwAAAADcIQAASB8AAE4xMF9fY3h4YWJpdjExNl9fc2hpbV90eXBlX2luZm9FAAAAAAQiAABgHwAAWB8AAE4xMF9fY3h4YWJpdjExN19fY2xhc3NfdHlwZV9pbmZvRQAAAAQiAACQHwAAhB8AAE4xMF9fY3h4YWJpdjExN19fcGJhc2VfdHlwZV9pbmZvRQAAAAQiAADAHwAAhB8AAE4xMF9fY3h4YWJpdjExOV9fcG9pbnRlcl90eXBlX2luZm9FAAQiAADwHwAA5B8AAE4xMF9fY3h4YWJpdjEyMF9fZnVuY3Rpb25fdHlwZV9pbmZvRQAAAAAEIgAAICAAAIQfAABOMTBfX2N4eGFiaXYxMjlfX3BvaW50ZXJfdG9fbWVtYmVyX3R5cGVfaW5mb0UAAAAEIgAAVCAAAOQfAAAAAAAA1CAAANEAAADSAAAA0wAAANQAAADVAAAATjEwX19jeHhhYml2MTIzX19mdW5kYW1lbnRhbF90eXBlX2luZm9FAAQiAACsIAAAhB8AAHYAAACYIAAA4CAAAERuAACYIAAA7CAAAGIAAACYIAAA+CAAAGMAAACYIAAABCEAAGgAAACYIAAAECEAAGEAAACYIAAAHCEAAHMAAACYIAAAKCEAAHQAAACYIAAANCEAAGkAAACYIAAAQCEAAGoAAACYIAAATCEAAGwAAACYIAAAWCEAAG0AAACYIAAAZCEAAGYAAACYIAAAcCEAAGQAAACYIAAAfCEAAAAAAADIIQAA0QAAANYAAADTAAAA1AAAANcAAABOMTBfX2N4eGFiaXYxMTZfX2VudW1fdHlwZV9pbmZvRQAAAAAEIgAApCEAAIQfAAAAAAAAtB8AANEAAADYAAAA0wAAANQAAADZAAAA2gAAANsAAADcAAAAAAAAAEwiAADRAAAA3QAAANMAAADUAAAA2QAAAN4AAADfAAAA4AAAAE4xMF9fY3h4YWJpdjEyMF9fc2lfY2xhc3NfdHlwZV9pbmZvRQAAAAAEIgAAJCIAALQfAAAAAAAAqCIAANEAAADhAAAA0wAAANQAAADZAAAA4gAAAOMAAADkAAAATjEwX19jeHhhYml2MTIxX192bWlfY2xhc3NfdHlwZV9pbmZvRQAAAAQiAACAIgAAtB8AAAAAAAAUIAAA0QAAAOUAAADTAAAA1AAAAOY=");
          wa(Ca, 8912, "BQ==");
          wa(Ca, 8924, "xA==");
          wa(Ca, 8948, "xQAAAMYAAAARJQ==");
          wa(Ca, 8972, "Ag==");
          wa(Ca, 8987, "//////8=");
          wa(Ca, 9056, "BQ==");
          wa(Ca, 9068, "yQ==");
          wa(Ca, 9092, "xQAAAMoAAAAoJQAAAAQ=");
          wa(Ca, 9116, "AQ==");
          wa(Ca, 9131, "Cv////8=");
          wa(Ca, 9376, "UCk=");
          return l({
            "Int8Array": Int8Array,
            "Int16Array": Int16Array,
            "Int32Array": Int32Array,
            "Uint8Array": Uint8Array,
            "Uint16Array": Uint16Array,
            "Uint32Array": Uint32Array,
            "Float32Array": Float32Array,
            "Float64Array": Float64Array,
            "NaN": NaN,
            "Infinity": Infinity,
            "Math": Math
          }, asmLibraryArg, wasmMemory.buffer);
        } // EMSCRIPTEN_END_ASM
        (asmLibraryArg, wasmMemory, wasmTable);

        return {
          "exports": exports
        };
      },
      instantiate: function instantiate(binary, info) {
        return {
          then: function then(ok) {
            ok({
              "instance": new WebAssembly.Instance(new WebAssembly.Module(binary))
            });
          }
        };
      },
      RuntimeError: Error
    };
    wasmBinary = [];

    if (_typeof(WebAssembly) !== "object") {
      err("no native wasm support detected");
    }

    var wasmMemory;
    var wasmTable = new WebAssembly.Table({
      "initial": 231,
      "maximum": 231 + 0,
      "element": "anyfunc"
    });
    var ABORT = false;

    function assert(condition, text) {
      if (!condition) {
        abort("Assertion failed: " + text);
      }
    }

    var UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;

    function UTF8ArrayToString(heap, idx, maxBytesToRead) {
      var endIdx = idx + maxBytesToRead;
      var endPtr = idx;

      while (heap[endPtr] && !(endPtr >= endIdx)) {
        ++endPtr;
      }

      if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
        return UTF8Decoder.decode(heap.subarray(idx, endPtr));
      } else {
        var str = "";

        while (idx < endPtr) {
          var u0 = heap[idx++];

          if (!(u0 & 128)) {
            str += String.fromCharCode(u0);
            continue;
          }

          var u1 = heap[idx++] & 63;

          if ((u0 & 224) == 192) {
            str += String.fromCharCode((u0 & 31) << 6 | u1);
            continue;
          }

          var u2 = heap[idx++] & 63;

          if ((u0 & 240) == 224) {
            u0 = (u0 & 15) << 12 | u1 << 6 | u2;
          } else {
            u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heap[idx++] & 63;
          }

          if (u0 < 65536) {
            str += String.fromCharCode(u0);
          } else {
            var ch = u0 - 65536;
            str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
          }
        }
      }

      return str;
    }

    function UTF8ToString(ptr, maxBytesToRead) {
      return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
    }

    function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
      if (!(maxBytesToWrite > 0)) return 0;
      var startIdx = outIdx;
      var endIdx = outIdx + maxBytesToWrite - 1;

      for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);

        if (u >= 55296 && u <= 57343) {
          var u1 = str.charCodeAt(++i);
          u = 65536 + ((u & 1023) << 10) | u1 & 1023;
        }

        if (u <= 127) {
          if (outIdx >= endIdx) break;
          heap[outIdx++] = u;
        } else if (u <= 2047) {
          if (outIdx + 1 >= endIdx) break;
          heap[outIdx++] = 192 | u >> 6;
          heap[outIdx++] = 128 | u & 63;
        } else if (u <= 65535) {
          if (outIdx + 2 >= endIdx) break;
          heap[outIdx++] = 224 | u >> 12;
          heap[outIdx++] = 128 | u >> 6 & 63;
          heap[outIdx++] = 128 | u & 63;
        } else {
          if (outIdx + 3 >= endIdx) break;
          heap[outIdx++] = 240 | u >> 18;
          heap[outIdx++] = 128 | u >> 12 & 63;
          heap[outIdx++] = 128 | u >> 6 & 63;
          heap[outIdx++] = 128 | u & 63;
        }
      }

      heap[outIdx] = 0;
      return outIdx - startIdx;
    }

    function stringToUTF8(str, outPtr, maxBytesToWrite) {
      return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
    }

    function lengthBytesUTF8(str) {
      var len = 0;

      for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343) u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;
        if (u <= 127) ++len;else if (u <= 2047) len += 2;else if (u <= 65535) len += 3;else len += 4;
      }

      return len;
    }

    var UTF16Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-16le") : undefined;

    function UTF16ToString(ptr, maxBytesToRead) {
      var endPtr = ptr;
      var idx = endPtr >> 1;
      var maxIdx = idx + maxBytesToRead / 2;

      while (!(idx >= maxIdx) && HEAPU16[idx]) {
        ++idx;
      }

      endPtr = idx << 1;

      if (endPtr - ptr > 32 && UTF16Decoder) {
        return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
      } else {
        var i = 0;
        var str = "";

        while (1) {
          var codeUnit = HEAP16[ptr + i * 2 >> 1];
          if (codeUnit == 0 || i == maxBytesToRead / 2) return str;
          ++i;
          str += String.fromCharCode(codeUnit);
        }
      }
    }

    function stringToUTF16(str, outPtr, maxBytesToWrite) {
      if (maxBytesToWrite === undefined) {
        maxBytesToWrite = 2147483647;
      }

      if (maxBytesToWrite < 2) return 0;
      maxBytesToWrite -= 2;
      var startPtr = outPtr;
      var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;

      for (var i = 0; i < numCharsToWrite; ++i) {
        var codeUnit = str.charCodeAt(i);
        HEAP16[outPtr >> 1] = codeUnit;
        outPtr += 2;
      }

      HEAP16[outPtr >> 1] = 0;
      return outPtr - startPtr;
    }

    function lengthBytesUTF16(str) {
      return str.length * 2;
    }

    function UTF32ToString(ptr, maxBytesToRead) {
      var i = 0;
      var str = "";

      while (!(i >= maxBytesToRead / 4)) {
        var utf32 = HEAP32[ptr + i * 4 >> 2];
        if (utf32 == 0) break;
        ++i;

        if (utf32 >= 65536) {
          var ch = utf32 - 65536;
          str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
        } else {
          str += String.fromCharCode(utf32);
        }
      }

      return str;
    }

    function stringToUTF32(str, outPtr, maxBytesToWrite) {
      if (maxBytesToWrite === undefined) {
        maxBytesToWrite = 2147483647;
      }

      if (maxBytesToWrite < 4) return 0;
      var startPtr = outPtr;
      var endPtr = startPtr + maxBytesToWrite - 4;

      for (var i = 0; i < str.length; ++i) {
        var codeUnit = str.charCodeAt(i);

        if (codeUnit >= 55296 && codeUnit <= 57343) {
          var trailSurrogate = str.charCodeAt(++i);
          codeUnit = 65536 + ((codeUnit & 1023) << 10) | trailSurrogate & 1023;
        }

        HEAP32[outPtr >> 2] = codeUnit;
        outPtr += 4;
        if (outPtr + 4 > endPtr) break;
      }

      HEAP32[outPtr >> 2] = 0;
      return outPtr - startPtr;
    }

    function lengthBytesUTF32(str) {
      var len = 0;

      for (var i = 0; i < str.length; ++i) {
        var codeUnit = str.charCodeAt(i);
        if (codeUnit >= 55296 && codeUnit <= 57343) ++i;
        len += 4;
      }

      return len;
    }

    var WASM_PAGE_SIZE = 65536;

    function alignUp(x, multiple) {
      if (x % multiple > 0) {
        x += multiple - x % multiple;
      }

      return x;
    }

    var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;

    function updateGlobalBufferAndViews(buf) {
      buffer = buf;
      Module["HEAP8"] = HEAP8 = new Int8Array(buf);
      Module["HEAP16"] = HEAP16 = new Int16Array(buf);
      Module["HEAP32"] = HEAP32 = new Int32Array(buf);
      Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
      Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
      Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
      Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
      Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
    }

    var DYNAMIC_BASE = 5254160,
        DYNAMICTOP_PTR = 11120;
    var INITIAL_INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 16777216;

    if (Module["wasmMemory"]) {
      wasmMemory = Module["wasmMemory"];
    } else {
      wasmMemory = new WebAssembly.Memory({
        "initial": INITIAL_INITIAL_MEMORY / WASM_PAGE_SIZE,
        "maximum": 2147483648 / WASM_PAGE_SIZE
      });
    }

    if (wasmMemory) {
      buffer = wasmMemory.buffer;
    }

    INITIAL_INITIAL_MEMORY = buffer.byteLength;
    updateGlobalBufferAndViews(buffer);
    HEAP32[DYNAMICTOP_PTR >> 2] = DYNAMIC_BASE;

    function callRuntimeCallbacks(callbacks) {
      while (callbacks.length > 0) {
        var callback = callbacks.shift();

        if (typeof callback == "function") {
          callback(Module);
          continue;
        }

        var func = callback.func;

        if (typeof func === "number") {
          if (callback.arg === undefined) {
            Module["dynCall_v"](func);
          } else {
            Module["dynCall_vi"](func, callback.arg);
          }
        } else {
          func(callback.arg === undefined ? null : callback.arg);
        }
      }
    }

    var __ATPRERUN__ = [];
    var __ATINIT__ = [];
    var __ATMAIN__ = [];
    var __ATPOSTRUN__ = [];

    function preRun() {
      if (Module["preRun"]) {
        if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];

        while (Module["preRun"].length) {
          addOnPreRun(Module["preRun"].shift());
        }
      }

      callRuntimeCallbacks(__ATPRERUN__);
    }

    function initRuntime() {
      callRuntimeCallbacks(__ATINIT__);
    }

    function preMain() {
      callRuntimeCallbacks(__ATMAIN__);
    }

    function postRun() {
      if (Module["postRun"]) {
        if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];

        while (Module["postRun"].length) {
          addOnPostRun(Module["postRun"].shift());
        }
      }

      callRuntimeCallbacks(__ATPOSTRUN__);
    }

    function addOnPreRun(cb) {
      __ATPRERUN__.unshift(cb);
    }

    function addOnPostRun(cb) {
      __ATPOSTRUN__.unshift(cb);
    }

    var runDependencies = 0;
    var dependenciesFulfilled = null;

    function addRunDependency(id) {
      runDependencies++;

      if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies);
      }
    }

    function removeRunDependency(id) {
      runDependencies--;

      if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies);
      }

      if (runDependencies == 0) {

        if (dependenciesFulfilled) {
          var callback = dependenciesFulfilled;
          dependenciesFulfilled = null;
          callback();
        }
      }
    }

    Module["preloadedImages"] = {};
    Module["preloadedAudios"] = {};

    function abort(what) {
      if (Module["onAbort"]) {
        Module["onAbort"](what);
      }

      what += "";
      out(what);
      err(what);
      ABORT = true;
      what = "abort(" + what + "). Build with -s ASSERTIONS=1 for more info.";
      throw new WebAssembly.RuntimeError(what);
    }

    function hasPrefix(str, prefix) {
      return String.prototype.startsWith ? str.startsWith(prefix) : str.indexOf(prefix) === 0;
    }

    var dataURIPrefix = "data:application/octet-stream;base64,";

    function isDataURI(filename) {
      return hasPrefix(filename, dataURIPrefix);
    }

    var fileURIPrefix = "file://";

    function isFileURI(filename) {
      return hasPrefix(filename, fileURIPrefix);
    }

    var wasmBinaryFile = "yoga.asm.wasm";

    if (!isDataURI(wasmBinaryFile)) {
      wasmBinaryFile = locateFile(wasmBinaryFile);
    }

    function getBinary() {
      try {
        if (wasmBinary) {
          return new Uint8Array(wasmBinary);
        }

        var binary = tryParseAsDataURI(wasmBinaryFile);

        if (binary) {
          return binary;
        }

        if (readBinary) {
          return readBinary(wasmBinaryFile);
        } else {
          throw "both async and sync fetching of the wasm failed";
        }
      } catch (err) {
        abort(err);
      }
    }

    function getBinaryPromise() {
      if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === "function" && !isFileURI(wasmBinaryFile)) {
        return fetch(wasmBinaryFile, {
          credentials: "same-origin"
        }).then(function (response) {
          if (!response["ok"]) {
            throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
          }

          return response["arrayBuffer"]();
        })["catch"](function () {
          return getBinary();
        });
      }

      return new Promise(function (resolve, reject) {
        resolve(getBinary());
      });
    }

    function createWasm() {
      var info = {
        "env": asmLibraryArg,
        "wasi_snapshot_preview1": asmLibraryArg
      };

      function receiveInstance(instance, module) {
        var exports = instance.exports;
        Module["asm"] = exports;
        removeRunDependency();
      }

      addRunDependency();

      function receiveInstantiatedSource(output) {
        receiveInstance(output["instance"]);
      }

      function instantiateArrayBuffer(receiver) {
        return getBinaryPromise().then(function (binary) {
          return WebAssembly.instantiate(binary, info);
        }).then(receiver, function (reason) {
          err("failed to asynchronously prepare wasm: " + reason);
          abort(reason);
        });
      }

      function instantiateAsync() {
        if (!wasmBinary && typeof WebAssembly.instantiateStreaming === "function" && !isDataURI(wasmBinaryFile) && !isFileURI(wasmBinaryFile) && typeof fetch === "function") {
          fetch(wasmBinaryFile, {
            credentials: "same-origin"
          }).then(function (response) {
            var result = WebAssembly.instantiateStreaming(response, info);
            return result.then(receiveInstantiatedSource, function (reason) {
              err("wasm streaming compile failed: " + reason);
              err("falling back to ArrayBuffer instantiation");
              instantiateArrayBuffer(receiveInstantiatedSource);
            });
          });
        } else {
          return instantiateArrayBuffer(receiveInstantiatedSource);
        }
      }

      if (Module["instantiateWasm"]) {
        try {
          var exports = Module["instantiateWasm"](info, receiveInstance);
          return exports;
        } catch (e) {
          err("Module.instantiateWasm callback failed with error: " + e);
          return false;
        }
      }

      instantiateAsync();
      return {};
    }

    __ATINIT__.push({
      func: function func() {
        ___wasm_call_ctors();
      }
    });

    function __ZN8facebook4yoga24LayoutPassReasonToStringENS0_16LayoutPassReasonE() {
      err("missing function: _ZN8facebook4yoga24LayoutPassReasonToStringENS0_16LayoutPassReasonE");
      abort(-1);
    }

    function ___cxa_allocate_exception(size) {
      return _malloc(size);
    }

    function ___cxa_throw(ptr, type, destructor) {

      throw ptr;
    }

    var char_0 = 48;
    var char_9 = 57;

    function makeLegalFunctionName(name) {
      if (undefined === name) {
        return "_unknown";
      }

      name = name.replace(/[^a-zA-Z0-9_]/g, "$");
      var f = name.charCodeAt(0);

      if (f >= char_0 && f <= char_9) {
        return "_" + name;
      } else {
        return name;
      }
    }

    function createNamedFunction(name, body) {
      name = makeLegalFunctionName(name);
      return new Function("body", "return function " + name + "() {\n" + '    "use strict";' + "    return body.apply(this, arguments);\n" + "};\n")(body);
    }

    var emval_free_list = [];
    var emval_handle_array = [{}, {
      value: undefined
    }, {
      value: null
    }, {
      value: true
    }, {
      value: false
    }];

    function count_emval_handles() {
      var count = 0;

      for (var i = 5; i < emval_handle_array.length; ++i) {
        if (emval_handle_array[i] !== undefined) {
          ++count;
        }
      }

      return count;
    }

    function get_first_emval() {
      for (var i = 5; i < emval_handle_array.length; ++i) {
        if (emval_handle_array[i] !== undefined) {
          return emval_handle_array[i];
        }
      }

      return null;
    }

    function init_emval() {
      Module["count_emval_handles"] = count_emval_handles;
      Module["get_first_emval"] = get_first_emval;
    }

    function __emval_register(value) {
      switch (value) {
        case undefined:
          {
            return 1;
          }

        case null:
          {
            return 2;
          }

        case true:
          {
            return 3;
          }

        case false:
          {
            return 4;
          }

        default:
          {
            var handle = emval_free_list.length ? emval_free_list.pop() : emval_handle_array.length;
            emval_handle_array[handle] = {
              refcount: 1,
              value: value
            };
            return handle;
          }
      }
    }

    function extendError(baseErrorType, errorName) {
      var errorClass = createNamedFunction(errorName, function (message) {
        this.name = errorName;
        this.message = message;
        var stack = new Error(message).stack;

        if (stack !== undefined) {
          this.stack = this.toString() + "\n" + stack.replace(/^Error(:[^\n]*)?\n/, "");
        }
      });
      errorClass.prototype = Object.create(baseErrorType.prototype);
      errorClass.prototype.constructor = errorClass;

      errorClass.prototype.toString = function () {
        if (this.message === undefined) {
          return this.name;
        } else {
          return this.name + ": " + this.message;
        }
      };

      return errorClass;
    }

    var PureVirtualError = undefined;

    function embind_init_charCodes() {
      var codes = new Array(256);

      for (var i = 0; i < 256; ++i) {
        codes[i] = String.fromCharCode(i);
      }

      embind_charCodes = codes;
    }

    var embind_charCodes = undefined;

    function readLatin1String(ptr) {
      var ret = "";
      var c = ptr;

      while (HEAPU8[c]) {
        ret += embind_charCodes[HEAPU8[c++]];
      }

      return ret;
    }

    function getInheritedInstanceCount() {
      return Object.keys(registeredInstances).length;
    }

    function getLiveInheritedInstances() {
      var rv = [];

      for (var k in registeredInstances) {
        if (registeredInstances.hasOwnProperty(k)) {
          rv.push(registeredInstances[k]);
        }
      }

      return rv;
    }

    var deletionQueue = [];

    function flushPendingDeletes() {
      while (deletionQueue.length) {
        var obj = deletionQueue.pop();
        obj.$$.deleteScheduled = false;
        obj["delete"]();
      }
    }

    var delayFunction = undefined;

    function setDelayFunction(fn) {
      delayFunction = fn;

      if (deletionQueue.length && delayFunction) {
        delayFunction(flushPendingDeletes);
      }
    }

    function init_embind() {
      Module["getInheritedInstanceCount"] = getInheritedInstanceCount;
      Module["getLiveInheritedInstances"] = getLiveInheritedInstances;
      Module["flushPendingDeletes"] = flushPendingDeletes;
      Module["setDelayFunction"] = setDelayFunction;
    }

    var registeredInstances = {};
    var BindingError = undefined;

    function throwBindingError(message) {
      throw new BindingError(message);
    }

    function getBasestPointer(class_, ptr) {
      if (ptr === undefined) {
        throwBindingError("ptr should not be undefined");
      }

      while (class_.baseClass) {
        ptr = class_.upcast(ptr);
        class_ = class_.baseClass;
      }

      return ptr;
    }

    function registerInheritedInstance(class_, ptr, instance) {
      ptr = getBasestPointer(class_, ptr);

      if (registeredInstances.hasOwnProperty(ptr)) {
        throwBindingError("Tried to register registered instance: " + ptr);
      } else {
        registeredInstances[ptr] = instance;
      }
    }

    function requireHandle(handle) {
      if (!handle) {
        throwBindingError("Cannot use deleted val. handle = " + handle);
      }

      return emval_handle_array[handle].value;
    }

    var registeredTypes = {};

    function getTypeName(type) {
      var ptr = ___getTypeName(type);

      var rv = readLatin1String(ptr);

      _free(ptr);

      return rv;
    }

    function requireRegisteredType(rawType, humanName) {
      var impl = registeredTypes[rawType];

      if (undefined === impl) {
        throwBindingError(humanName + " has unknown type " + getTypeName(rawType));
      }

      return impl;
    }

    function unregisterInheritedInstance(class_, ptr) {
      ptr = getBasestPointer(class_, ptr);

      if (registeredInstances.hasOwnProperty(ptr)) {
        delete registeredInstances[ptr];
      } else {
        throwBindingError("Tried to unregister unregistered instance: " + ptr);
      }
    }

    function detachFinalizer(handle) {}

    var finalizationGroup = false;

    function runDestructor($$) {
      if ($$.smartPtr) {
        $$.smartPtrType.rawDestructor($$.smartPtr);
      } else {
        $$.ptrType.registeredClass.rawDestructor($$.ptr);
      }
    }

    function releaseClassHandle($$) {
      $$.count.value -= 1;
      var toDelete = 0 === $$.count.value;

      if (toDelete) {
        runDestructor($$);
      }
    }

    function attachFinalizer(handle) {
      if ("undefined" === typeof FinalizationGroup) {
        attachFinalizer = function attachFinalizer(handle) {
          return handle;
        };

        return handle;
      }

      finalizationGroup = new FinalizationGroup(function (iter) {
        for (var result = iter.next(); !result.done; result = iter.next()) {
          var $$ = result.value;

          if (!$$.ptr) {
            console.warn("object already deleted: " + $$.ptr);
          } else {
            releaseClassHandle($$);
          }
        }
      });

      attachFinalizer = function attachFinalizer(handle) {
        finalizationGroup.register(handle, handle.$$, handle.$$);
        return handle;
      };

      detachFinalizer = function detachFinalizer(handle) {
        finalizationGroup.unregister(handle.$$);
      };

      return attachFinalizer(handle);
    }

    function __embind_create_inheriting_constructor(constructorName, wrapperType, properties) {
      constructorName = readLatin1String(constructorName);
      wrapperType = requireRegisteredType(wrapperType, "wrapper");
      properties = requireHandle(properties);
      var arraySlice = [].slice;
      var registeredClass = wrapperType.registeredClass;
      var wrapperPrototype = registeredClass.instancePrototype;
      var baseClass = registeredClass.baseClass;
      var baseClassPrototype = baseClass.instancePrototype;
      var baseConstructor = registeredClass.baseClass.constructor;
      var ctor = createNamedFunction(constructorName, function () {
        registeredClass.baseClass.pureVirtualFunctions.forEach(function (name) {
          if (this[name] === baseClassPrototype[name]) {
            throw new PureVirtualError("Pure virtual function " + name + " must be implemented in JavaScript");
          }
        }.bind(this));
        Object.defineProperty(this, "__parent", {
          value: wrapperPrototype
        });
        this["__construct"].apply(this, arraySlice.call(arguments));
      });

      wrapperPrototype["__construct"] = function __construct() {
        if (this === wrapperPrototype) {
          throwBindingError("Pass correct 'this' to __construct");
        }

        var inner = baseConstructor["implement"].apply(undefined, [this].concat(arraySlice.call(arguments)));
        detachFinalizer(inner);
        var $$ = inner.$$;
        inner["notifyOnDestruction"]();
        $$.preservePointerOnDelete = true;
        Object.defineProperties(this, {
          $$: {
            value: $$
          }
        });
        attachFinalizer(this);
        registerInheritedInstance(registeredClass, $$.ptr, this);
      };

      wrapperPrototype["__destruct"] = function __destruct() {
        if (this === wrapperPrototype) {
          throwBindingError("Pass correct 'this' to __destruct");
        }

        detachFinalizer(this);
        unregisterInheritedInstance(registeredClass, this.$$.ptr);
      };

      ctor.prototype = Object.create(wrapperPrototype);

      for (var p in properties) {
        ctor.prototype[p] = properties[p];
      }

      return __emval_register(ctor);
    }

    var structRegistrations = {};

    function runDestructors(destructors) {
      while (destructors.length) {
        var ptr = destructors.pop();
        var del = destructors.pop();
        del(ptr);
      }
    }

    function simpleReadValueFromPointer(pointer) {
      return this["fromWireType"](HEAPU32[pointer >> 2]);
    }

    var awaitingDependencies = {};
    var typeDependencies = {};
    var InternalError = undefined;

    function throwInternalError(message) {
      throw new InternalError(message);
    }

    function whenDependentTypesAreResolved(myTypes, dependentTypes, getTypeConverters) {
      myTypes.forEach(function (type) {
        typeDependencies[type] = dependentTypes;
      });

      function onComplete(typeConverters) {
        var myTypeConverters = getTypeConverters(typeConverters);

        if (myTypeConverters.length !== myTypes.length) {
          throwInternalError("Mismatched type converter count");
        }

        for (var i = 0; i < myTypes.length; ++i) {
          registerType(myTypes[i], myTypeConverters[i]);
        }
      }

      var typeConverters = new Array(dependentTypes.length);
      var unregisteredTypes = [];
      var registered = 0;
      dependentTypes.forEach(function (dt, i) {
        if (registeredTypes.hasOwnProperty(dt)) {
          typeConverters[i] = registeredTypes[dt];
        } else {
          unregisteredTypes.push(dt);

          if (!awaitingDependencies.hasOwnProperty(dt)) {
            awaitingDependencies[dt] = [];
          }

          awaitingDependencies[dt].push(function () {
            typeConverters[i] = registeredTypes[dt];
            ++registered;

            if (registered === unregisteredTypes.length) {
              onComplete(typeConverters);
            }
          });
        }
      });

      if (0 === unregisteredTypes.length) {
        onComplete(typeConverters);
      }
    }

    function __embind_finalize_value_object(structType) {
      var reg = structRegistrations[structType];
      delete structRegistrations[structType];
      var rawConstructor = reg.rawConstructor;
      var rawDestructor = reg.rawDestructor;
      var fieldRecords = reg.fields;
      var fieldTypes = fieldRecords.map(function (field) {
        return field.getterReturnType;
      }).concat(fieldRecords.map(function (field) {
        return field.setterArgumentType;
      }));
      whenDependentTypesAreResolved([structType], fieldTypes, function (fieldTypes) {
        var fields = {};
        fieldRecords.forEach(function (field, i) {
          var fieldName = field.fieldName;
          var getterReturnType = fieldTypes[i];
          var getter = field.getter;
          var getterContext = field.getterContext;
          var setterArgumentType = fieldTypes[i + fieldRecords.length];
          var setter = field.setter;
          var setterContext = field.setterContext;
          fields[fieldName] = {
            read: function read(ptr) {
              return getterReturnType["fromWireType"](getter(getterContext, ptr));
            },
            write: function write(ptr, o) {
              var destructors = [];
              setter(setterContext, ptr, setterArgumentType["toWireType"](destructors, o));
              runDestructors(destructors);
            }
          };
        });
        return [{
          name: reg.name,
          "fromWireType": function fromWireType(ptr) {
            var rv = {};

            for (var i in fields) {
              rv[i] = fields[i].read(ptr);
            }

            rawDestructor(ptr);
            return rv;
          },
          "toWireType": function toWireType(destructors, o) {
            for (var fieldName in fields) {
              if (!(fieldName in o)) {
                throw new TypeError("Missing field");
              }
            }

            var ptr = rawConstructor();

            for (fieldName in fields) {
              fields[fieldName].write(ptr, o[fieldName]);
            }

            if (destructors !== null) {
              destructors.push(rawDestructor, ptr);
            }

            return ptr;
          },
          "argPackAdvance": 8,
          "readValueFromPointer": simpleReadValueFromPointer,
          destructorFunction: rawDestructor
        }];
      });
    }

    function getShiftFromSize(size) {
      switch (size) {
        case 1:
          return 0;

        case 2:
          return 1;

        case 4:
          return 2;

        case 8:
          return 3;

        default:
          throw new TypeError("Unknown type size: " + size);
      }
    }

    function registerType(rawType, registeredInstance, options) {
      options = options || {};

      if (!("argPackAdvance" in registeredInstance)) {
        throw new TypeError("registerType registeredInstance requires argPackAdvance");
      }

      var name = registeredInstance.name;

      if (!rawType) {
        throwBindingError('type "' + name + '" must have a positive integer typeid pointer');
      }

      if (registeredTypes.hasOwnProperty(rawType)) {
        if (options.ignoreDuplicateRegistrations) {
          return;
        } else {
          throwBindingError("Cannot register type '" + name + "' twice");
        }
      }

      registeredTypes[rawType] = registeredInstance;
      delete typeDependencies[rawType];

      if (awaitingDependencies.hasOwnProperty(rawType)) {
        var callbacks = awaitingDependencies[rawType];
        delete awaitingDependencies[rawType];
        callbacks.forEach(function (cb) {
          cb();
        });
      }
    }

    function __embind_register_bool(rawType, name, size, trueValue, falseValue) {
      var shift = getShiftFromSize(size);
      name = readLatin1String(name);
      registerType(rawType, {
        name: name,
        "fromWireType": function fromWireType(wt) {
          return !!wt;
        },
        "toWireType": function toWireType(destructors, o) {
          return o ? trueValue : falseValue;
        },
        "argPackAdvance": 8,
        "readValueFromPointer": function readValueFromPointer(pointer) {
          var heap;

          if (size === 1) {
            heap = HEAP8;
          } else if (size === 2) {
            heap = HEAP16;
          } else if (size === 4) {
            heap = HEAP32;
          } else {
            throw new TypeError("Unknown boolean type size: " + name);
          }

          return this["fromWireType"](heap[pointer >> shift]);
        },
        destructorFunction: null
      });
    }

    function ClassHandle_isAliasOf(other) {
      if (!(this instanceof ClassHandle)) {
        return false;
      }

      if (!(other instanceof ClassHandle)) {
        return false;
      }

      var leftClass = this.$$.ptrType.registeredClass;
      var left = this.$$.ptr;
      var rightClass = other.$$.ptrType.registeredClass;
      var right = other.$$.ptr;

      while (leftClass.baseClass) {
        left = leftClass.upcast(left);
        leftClass = leftClass.baseClass;
      }

      while (rightClass.baseClass) {
        right = rightClass.upcast(right);
        rightClass = rightClass.baseClass;
      }

      return leftClass === rightClass && left === right;
    }

    function shallowCopyInternalPointer(o) {
      return {
        count: o.count,
        deleteScheduled: o.deleteScheduled,
        preservePointerOnDelete: o.preservePointerOnDelete,
        ptr: o.ptr,
        ptrType: o.ptrType,
        smartPtr: o.smartPtr,
        smartPtrType: o.smartPtrType
      };
    }

    function throwInstanceAlreadyDeleted(obj) {
      function getInstanceTypeName(handle) {
        return handle.$$.ptrType.registeredClass.name;
      }

      throwBindingError(getInstanceTypeName(obj) + " instance already deleted");
    }

    function ClassHandle_clone() {
      if (!this.$$.ptr) {
        throwInstanceAlreadyDeleted(this);
      }

      if (this.$$.preservePointerOnDelete) {
        this.$$.count.value += 1;
        return this;
      } else {
        var clone = attachFinalizer(Object.create(Object.getPrototypeOf(this), {
          $$: {
            value: shallowCopyInternalPointer(this.$$)
          }
        }));
        clone.$$.count.value += 1;
        clone.$$.deleteScheduled = false;
        return clone;
      }
    }

    function ClassHandle_delete() {
      if (!this.$$.ptr) {
        throwInstanceAlreadyDeleted(this);
      }

      if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
        throwBindingError("Object already scheduled for deletion");
      }

      detachFinalizer(this);
      releaseClassHandle(this.$$);

      if (!this.$$.preservePointerOnDelete) {
        this.$$.smartPtr = undefined;
        this.$$.ptr = undefined;
      }
    }

    function ClassHandle_isDeleted() {
      return !this.$$.ptr;
    }

    function ClassHandle_deleteLater() {
      if (!this.$$.ptr) {
        throwInstanceAlreadyDeleted(this);
      }

      if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
        throwBindingError("Object already scheduled for deletion");
      }

      deletionQueue.push(this);

      if (deletionQueue.length === 1 && delayFunction) {
        delayFunction(flushPendingDeletes);
      }

      this.$$.deleteScheduled = true;
      return this;
    }

    function init_ClassHandle() {
      ClassHandle.prototype["isAliasOf"] = ClassHandle_isAliasOf;
      ClassHandle.prototype["clone"] = ClassHandle_clone;
      ClassHandle.prototype["delete"] = ClassHandle_delete;
      ClassHandle.prototype["isDeleted"] = ClassHandle_isDeleted;
      ClassHandle.prototype["deleteLater"] = ClassHandle_deleteLater;
    }

    function ClassHandle() {}

    var registeredPointers = {};

    function ensureOverloadTable(proto, methodName, humanName) {
      if (undefined === proto[methodName].overloadTable) {
        var prevFunc = proto[methodName];

        proto[methodName] = function () {
          if (!proto[methodName].overloadTable.hasOwnProperty(arguments.length)) {
            throwBindingError("Function '" + humanName + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + proto[methodName].overloadTable + ")!");
          }

          return proto[methodName].overloadTable[arguments.length].apply(this, arguments);
        };

        proto[methodName].overloadTable = [];
        proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
      }
    }

    function exposePublicSymbol(name, value, numArguments) {
      if (Module.hasOwnProperty(name)) {
        if (undefined === numArguments || undefined !== Module[name].overloadTable && undefined !== Module[name].overloadTable[numArguments]) {
          throwBindingError("Cannot register public name '" + name + "' twice");
        }

        ensureOverloadTable(Module, name, name);

        if (Module.hasOwnProperty(numArguments)) {
          throwBindingError("Cannot register multiple overloads of a function with the same number of arguments (" + numArguments + ")!");
        }

        Module[name].overloadTable[numArguments] = value;
      } else {
        Module[name] = value;

        if (undefined !== numArguments) {
          Module[name].numArguments = numArguments;
        }
      }
    }

    function RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast) {
      this.name = name;
      this.constructor = constructor;
      this.instancePrototype = instancePrototype;
      this.rawDestructor = rawDestructor;
      this.baseClass = baseClass;
      this.getActualType = getActualType;
      this.upcast = upcast;
      this.downcast = downcast;
      this.pureVirtualFunctions = [];
    }

    function upcastPointer(ptr, ptrClass, desiredClass) {
      while (ptrClass !== desiredClass) {
        if (!ptrClass.upcast) {
          throwBindingError("Expected null or instance of " + desiredClass.name + ", got an instance of " + ptrClass.name);
        }

        ptr = ptrClass.upcast(ptr);
        ptrClass = ptrClass.baseClass;
      }

      return ptr;
    }

    function constNoSmartPtrRawPointerToWireType(destructors, handle) {
      if (handle === null) {
        if (this.isReference) {
          throwBindingError("null is not a valid " + this.name);
        }

        return 0;
      }

      if (!handle.$$) {
        throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
      }

      if (!handle.$$.ptr) {
        throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
      }

      var handleClass = handle.$$.ptrType.registeredClass;
      var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
      return ptr;
    }

    function genericPointerToWireType(destructors, handle) {
      var ptr;

      if (handle === null) {
        if (this.isReference) {
          throwBindingError("null is not a valid " + this.name);
        }

        if (this.isSmartPointer) {
          ptr = this.rawConstructor();

          if (destructors !== null) {
            destructors.push(this.rawDestructor, ptr);
          }

          return ptr;
        } else {
          return 0;
        }
      }

      if (!handle.$$) {
        throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
      }

      if (!handle.$$.ptr) {
        throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
      }

      if (!this.isConst && handle.$$.ptrType.isConst) {
        throwBindingError("Cannot convert argument of type " + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + " to parameter type " + this.name);
      }

      var handleClass = handle.$$.ptrType.registeredClass;
      ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);

      if (this.isSmartPointer) {
        if (undefined === handle.$$.smartPtr) {
          throwBindingError("Passing raw pointer to smart pointer is illegal");
        }

        switch (this.sharingPolicy) {
          case 0:
            if (handle.$$.smartPtrType === this) {
              ptr = handle.$$.smartPtr;
            } else {
              throwBindingError("Cannot convert argument of type " + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + " to parameter type " + this.name);
            }

            break;

          case 1:
            ptr = handle.$$.smartPtr;
            break;

          case 2:
            if (handle.$$.smartPtrType === this) {
              ptr = handle.$$.smartPtr;
            } else {
              var clonedHandle = handle["clone"]();
              ptr = this.rawShare(ptr, __emval_register(function () {
                clonedHandle["delete"]();
              }));

              if (destructors !== null) {
                destructors.push(this.rawDestructor, ptr);
              }
            }

            break;

          default:
            throwBindingError("Unsupporting sharing policy");
        }
      }

      return ptr;
    }

    function nonConstNoSmartPtrRawPointerToWireType(destructors, handle) {
      if (handle === null) {
        if (this.isReference) {
          throwBindingError("null is not a valid " + this.name);
        }

        return 0;
      }

      if (!handle.$$) {
        throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
      }

      if (!handle.$$.ptr) {
        throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
      }

      if (handle.$$.ptrType.isConst) {
        throwBindingError("Cannot convert argument of type " + handle.$$.ptrType.name + " to parameter type " + this.name);
      }

      var handleClass = handle.$$.ptrType.registeredClass;
      var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
      return ptr;
    }

    function RegisteredPointer_getPointee(ptr) {
      if (this.rawGetPointee) {
        ptr = this.rawGetPointee(ptr);
      }

      return ptr;
    }

    function RegisteredPointer_destructor(ptr) {
      if (this.rawDestructor) {
        this.rawDestructor(ptr);
      }
    }

    function RegisteredPointer_deleteObject(handle) {
      if (handle !== null) {
        handle["delete"]();
      }
    }

    function downcastPointer(ptr, ptrClass, desiredClass) {
      if (ptrClass === desiredClass) {
        return ptr;
      }

      if (undefined === desiredClass.baseClass) {
        return null;
      }

      var rv = downcastPointer(ptr, ptrClass, desiredClass.baseClass);

      if (rv === null) {
        return null;
      }

      return desiredClass.downcast(rv);
    }

    function getInheritedInstance(class_, ptr) {
      ptr = getBasestPointer(class_, ptr);
      return registeredInstances[ptr];
    }

    function makeClassHandle(prototype, record) {
      if (!record.ptrType || !record.ptr) {
        throwInternalError("makeClassHandle requires ptr and ptrType");
      }

      var hasSmartPtrType = !!record.smartPtrType;
      var hasSmartPtr = !!record.smartPtr;

      if (hasSmartPtrType !== hasSmartPtr) {
        throwInternalError("Both smartPtrType and smartPtr must be specified");
      }

      record.count = {
        value: 1
      };
      return attachFinalizer(Object.create(prototype, {
        $$: {
          value: record
        }
      }));
    }

    function RegisteredPointer_fromWireType(ptr) {
      var rawPointer = this.getPointee(ptr);

      if (!rawPointer) {
        this.destructor(ptr);
        return null;
      }

      var registeredInstance = getInheritedInstance(this.registeredClass, rawPointer);

      if (undefined !== registeredInstance) {
        if (0 === registeredInstance.$$.count.value) {
          registeredInstance.$$.ptr = rawPointer;
          registeredInstance.$$.smartPtr = ptr;
          return registeredInstance["clone"]();
        } else {
          var rv = registeredInstance["clone"]();
          this.destructor(ptr);
          return rv;
        }
      }

      function makeDefaultHandle() {
        if (this.isSmartPointer) {
          return makeClassHandle(this.registeredClass.instancePrototype, {
            ptrType: this.pointeeType,
            ptr: rawPointer,
            smartPtrType: this,
            smartPtr: ptr
          });
        } else {
          return makeClassHandle(this.registeredClass.instancePrototype, {
            ptrType: this,
            ptr: ptr
          });
        }
      }

      var actualType = this.registeredClass.getActualType(rawPointer);
      var registeredPointerRecord = registeredPointers[actualType];

      if (!registeredPointerRecord) {
        return makeDefaultHandle.call(this);
      }

      var toType;

      if (this.isConst) {
        toType = registeredPointerRecord.constPointerType;
      } else {
        toType = registeredPointerRecord.pointerType;
      }

      var dp = downcastPointer(rawPointer, this.registeredClass, toType.registeredClass);

      if (dp === null) {
        return makeDefaultHandle.call(this);
      }

      if (this.isSmartPointer) {
        return makeClassHandle(toType.registeredClass.instancePrototype, {
          ptrType: toType,
          ptr: dp,
          smartPtrType: this,
          smartPtr: ptr
        });
      } else {
        return makeClassHandle(toType.registeredClass.instancePrototype, {
          ptrType: toType,
          ptr: dp
        });
      }
    }

    function init_RegisteredPointer() {
      RegisteredPointer.prototype.getPointee = RegisteredPointer_getPointee;
      RegisteredPointer.prototype.destructor = RegisteredPointer_destructor;
      RegisteredPointer.prototype["argPackAdvance"] = 8;
      RegisteredPointer.prototype["readValueFromPointer"] = simpleReadValueFromPointer;
      RegisteredPointer.prototype["deleteObject"] = RegisteredPointer_deleteObject;
      RegisteredPointer.prototype["fromWireType"] = RegisteredPointer_fromWireType;
    }

    function RegisteredPointer(name, registeredClass, isReference, isConst, isSmartPointer, pointeeType, sharingPolicy, rawGetPointee, rawConstructor, rawShare, rawDestructor) {
      this.name = name;
      this.registeredClass = registeredClass;
      this.isReference = isReference;
      this.isConst = isConst;
      this.isSmartPointer = isSmartPointer;
      this.pointeeType = pointeeType;
      this.sharingPolicy = sharingPolicy;
      this.rawGetPointee = rawGetPointee;
      this.rawConstructor = rawConstructor;
      this.rawShare = rawShare;
      this.rawDestructor = rawDestructor;

      if (!isSmartPointer && registeredClass.baseClass === undefined) {
        if (isConst) {
          this["toWireType"] = constNoSmartPtrRawPointerToWireType;
          this.destructorFunction = null;
        } else {
          this["toWireType"] = nonConstNoSmartPtrRawPointerToWireType;
          this.destructorFunction = null;
        }
      } else {
        this["toWireType"] = genericPointerToWireType;
      }
    }

    function replacePublicSymbol(name, value, numArguments) {
      if (!Module.hasOwnProperty(name)) {
        throwInternalError("Replacing nonexistant public symbol");
      }

      if (undefined !== Module[name].overloadTable && undefined !== numArguments) {
        Module[name].overloadTable[numArguments] = value;
      } else {
        Module[name] = value;
        Module[name].argCount = numArguments;
      }
    }

    function embind__requireFunction(signature, rawFunction) {
      signature = readLatin1String(signature);

      function makeDynCaller(dynCall) {
        var args = [];

        for (var i = 1; i < signature.length; ++i) {
          args.push("a" + i);
        }

        var name = "dynCall_" + signature + "_" + rawFunction;
        var body = "return function " + name + "(" + args.join(", ") + ") {\n";
        body += "    return dynCall(rawFunction" + (args.length ? ", " : "") + args.join(", ") + ");\n";
        body += "};\n";
        return new Function("dynCall", "rawFunction", body)(dynCall, rawFunction);
      }

      var dc = Module["dynCall_" + signature];
      var fp = makeDynCaller(dc);

      if (typeof fp !== "function") {
        throwBindingError("unknown function pointer with signature " + signature + ": " + rawFunction);
      }

      return fp;
    }

    var UnboundTypeError = undefined;

    function throwUnboundTypeError(message, types) {
      var unboundTypes = [];
      var seen = {};

      function visit(type) {
        if (seen[type]) {
          return;
        }

        if (registeredTypes[type]) {
          return;
        }

        if (typeDependencies[type]) {
          typeDependencies[type].forEach(visit);
          return;
        }

        unboundTypes.push(type);
        seen[type] = true;
      }

      types.forEach(visit);
      throw new UnboundTypeError(message + ": " + unboundTypes.map(getTypeName).join([", "]));
    }

    function __embind_register_class(rawType, rawPointerType, rawConstPointerType, baseClassRawType, getActualTypeSignature, getActualType, upcastSignature, upcast, downcastSignature, downcast, name, destructorSignature, rawDestructor) {
      name = readLatin1String(name);
      getActualType = embind__requireFunction(getActualTypeSignature, getActualType);

      if (upcast) {
        upcast = embind__requireFunction(upcastSignature, upcast);
      }

      if (downcast) {
        downcast = embind__requireFunction(downcastSignature, downcast);
      }

      rawDestructor = embind__requireFunction(destructorSignature, rawDestructor);
      var legalFunctionName = makeLegalFunctionName(name);
      exposePublicSymbol(legalFunctionName, function () {
        throwUnboundTypeError("Cannot construct " + name + " due to unbound types", [baseClassRawType]);
      });
      whenDependentTypesAreResolved([rawType, rawPointerType, rawConstPointerType], baseClassRawType ? [baseClassRawType] : [], function (base) {
        base = base[0];
        var baseClass;
        var basePrototype;

        if (baseClassRawType) {
          baseClass = base.registeredClass;
          basePrototype = baseClass.instancePrototype;
        } else {
          basePrototype = ClassHandle.prototype;
        }

        var constructor = createNamedFunction(legalFunctionName, function () {
          if (Object.getPrototypeOf(this) !== instancePrototype) {
            throw new BindingError("Use 'new' to construct " + name);
          }

          if (undefined === registeredClass.constructor_body) {
            throw new BindingError(name + " has no accessible constructor");
          }

          var body = registeredClass.constructor_body[arguments.length];

          if (undefined === body) {
            throw new BindingError("Tried to invoke ctor of " + name + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(registeredClass.constructor_body).toString() + ") parameters instead!");
          }

          return body.apply(this, arguments);
        });
        var instancePrototype = Object.create(basePrototype, {
          constructor: {
            value: constructor
          }
        });
        constructor.prototype = instancePrototype;
        var registeredClass = new RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast);
        var referenceConverter = new RegisteredPointer(name, registeredClass, true, false, false);
        var pointerConverter = new RegisteredPointer(name + "*", registeredClass, false, false, false);
        var constPointerConverter = new RegisteredPointer(name + " const*", registeredClass, false, true, false);
        registeredPointers[rawType] = {
          pointerType: pointerConverter,
          constPointerType: constPointerConverter
        };
        replacePublicSymbol(legalFunctionName, constructor);
        return [referenceConverter, pointerConverter, constPointerConverter];
      });
    }

    function new_(constructor, argumentList) {
      if (!(constructor instanceof Function)) {
        throw new TypeError("new_ called with constructor type " + _typeof(constructor) + " which is not a function");
      }

      var dummy = createNamedFunction(constructor.name || "unknownFunctionName", function () {});
      dummy.prototype = constructor.prototype;
      var obj = new dummy();
      var r = constructor.apply(obj, argumentList);
      return r instanceof Object ? r : obj;
    }

    function craftInvokerFunction(humanName, argTypes, classType, cppInvokerFunc, cppTargetFunc) {
      var argCount = argTypes.length;

      if (argCount < 2) {
        throwBindingError("argTypes array size mismatch! Must at least get return value and 'this' types!");
      }

      var isClassMethodFunc = argTypes[1] !== null && classType !== null;
      var needsDestructorStack = false;

      for (var i = 1; i < argTypes.length; ++i) {
        if (argTypes[i] !== null && argTypes[i].destructorFunction === undefined) {
          needsDestructorStack = true;
          break;
        }
      }

      var returns = argTypes[0].name !== "void";
      var argsList = "";
      var argsListWired = "";

      for (var i = 0; i < argCount - 2; ++i) {
        argsList += (i !== 0 ? ", " : "") + "arg" + i;
        argsListWired += (i !== 0 ? ", " : "") + "arg" + i + "Wired";
      }

      var invokerFnBody = "return function " + makeLegalFunctionName(humanName) + "(" + argsList + ") {\n" + "if (arguments.length !== " + (argCount - 2) + ") {\n" + "throwBindingError('function " + humanName + " called with ' + arguments.length + ' arguments, expected " + (argCount - 2) + " args!');\n" + "}\n";

      if (needsDestructorStack) {
        invokerFnBody += "var destructors = [];\n";
      }

      var dtorStack = needsDestructorStack ? "destructors" : "null";
      var args1 = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"];
      var args2 = [throwBindingError, cppInvokerFunc, cppTargetFunc, runDestructors, argTypes[0], argTypes[1]];

      if (isClassMethodFunc) {
        invokerFnBody += "var thisWired = classParam.toWireType(" + dtorStack + ", this);\n";
      }

      for (var i = 0; i < argCount - 2; ++i) {
        invokerFnBody += "var arg" + i + "Wired = argType" + i + ".toWireType(" + dtorStack + ", arg" + i + "); // " + argTypes[i + 2].name + "\n";
        args1.push("argType" + i);
        args2.push(argTypes[i + 2]);
      }

      if (isClassMethodFunc) {
        argsListWired = "thisWired" + (argsListWired.length > 0 ? ", " : "") + argsListWired;
      }

      invokerFnBody += (returns ? "var rv = " : "") + "invoker(fn" + (argsListWired.length > 0 ? ", " : "") + argsListWired + ");\n";

      if (needsDestructorStack) {
        invokerFnBody += "runDestructors(destructors);\n";
      } else {
        for (var i = isClassMethodFunc ? 1 : 2; i < argTypes.length; ++i) {
          var paramName = i === 1 ? "thisWired" : "arg" + (i - 2) + "Wired";

          if (argTypes[i].destructorFunction !== null) {
            invokerFnBody += paramName + "_dtor(" + paramName + "); // " + argTypes[i].name + "\n";
            args1.push(paramName + "_dtor");
            args2.push(argTypes[i].destructorFunction);
          }
        }
      }

      if (returns) {
        invokerFnBody += "var ret = retType.fromWireType(rv);\n" + "return ret;\n";
      }

      invokerFnBody += "}\n";
      args1.push(invokerFnBody);
      var invokerFunction = new_(Function, args1).apply(null, args2);
      return invokerFunction;
    }

    function heap32VectorToArray(count, firstElement) {
      var array = [];

      for (var i = 0; i < count; i++) {
        array.push(HEAP32[(firstElement >> 2) + i]);
      }

      return array;
    }

    function __embind_register_class_class_function(rawClassType, methodName, argCount, rawArgTypesAddr, invokerSignature, rawInvoker, fn) {
      var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      methodName = readLatin1String(methodName);
      rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
      whenDependentTypesAreResolved([], [rawClassType], function (classType) {
        classType = classType[0];
        var humanName = classType.name + "." + methodName;

        function unboundTypesHandler() {
          throwUnboundTypeError("Cannot call " + humanName + " due to unbound types", rawArgTypes);
        }

        var proto = classType.registeredClass.constructor;

        if (undefined === proto[methodName]) {
          unboundTypesHandler.argCount = argCount - 1;
          proto[methodName] = unboundTypesHandler;
        } else {
          ensureOverloadTable(proto, methodName, humanName);
          proto[methodName].overloadTable[argCount - 1] = unboundTypesHandler;
        }

        whenDependentTypesAreResolved([], rawArgTypes, function (argTypes) {
          var invokerArgsArray = [argTypes[0], null].concat(argTypes.slice(1));
          var func = craftInvokerFunction(humanName, invokerArgsArray, null, rawInvoker, fn);

          if (undefined === proto[methodName].overloadTable) {
            func.argCount = argCount - 1;
            proto[methodName] = func;
          } else {
            proto[methodName].overloadTable[argCount - 1] = func;
          }

          return [];
        });
        return [];
      });
    }

    function __embind_register_class_constructor(rawClassType, argCount, rawArgTypesAddr, invokerSignature, invoker, rawConstructor) {
      assert(argCount > 0);
      var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      invoker = embind__requireFunction(invokerSignature, invoker);
      var args = [rawConstructor];
      var destructors = [];
      whenDependentTypesAreResolved([], [rawClassType], function (classType) {
        classType = classType[0];
        var humanName = "constructor " + classType.name;

        if (undefined === classType.registeredClass.constructor_body) {
          classType.registeredClass.constructor_body = [];
        }

        if (undefined !== classType.registeredClass.constructor_body[argCount - 1]) {
          throw new BindingError("Cannot register multiple constructors with identical number of parameters (" + (argCount - 1) + ") for class '" + classType.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        }

        classType.registeredClass.constructor_body[argCount - 1] = function unboundTypeHandler() {
          throwUnboundTypeError("Cannot construct " + classType.name + " due to unbound types", rawArgTypes);
        };

        whenDependentTypesAreResolved([], rawArgTypes, function (argTypes) {
          classType.registeredClass.constructor_body[argCount - 1] = function constructor_body() {
            if (arguments.length !== argCount - 1) {
              throwBindingError(humanName + " called with " + arguments.length + " arguments, expected " + (argCount - 1));
            }

            destructors.length = 0;
            args.length = argCount;

            for (var i = 1; i < argCount; ++i) {
              args[i] = argTypes[i]["toWireType"](destructors, arguments[i - 1]);
            }

            var ptr = invoker.apply(null, args);
            runDestructors(destructors);
            return argTypes[0]["fromWireType"](ptr);
          };

          return [];
        });
        return [];
      });
    }

    function __embind_register_class_function(rawClassType, methodName, argCount, rawArgTypesAddr, invokerSignature, rawInvoker, context, isPureVirtual) {
      var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      methodName = readLatin1String(methodName);
      rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
      whenDependentTypesAreResolved([], [rawClassType], function (classType) {
        classType = classType[0];
        var humanName = classType.name + "." + methodName;

        if (isPureVirtual) {
          classType.registeredClass.pureVirtualFunctions.push(methodName);
        }

        function unboundTypesHandler() {
          throwUnboundTypeError("Cannot call " + humanName + " due to unbound types", rawArgTypes);
        }

        var proto = classType.registeredClass.instancePrototype;
        var method = proto[methodName];

        if (undefined === method || undefined === method.overloadTable && method.className !== classType.name && method.argCount === argCount - 2) {
          unboundTypesHandler.argCount = argCount - 2;
          unboundTypesHandler.className = classType.name;
          proto[methodName] = unboundTypesHandler;
        } else {
          ensureOverloadTable(proto, methodName, humanName);
          proto[methodName].overloadTable[argCount - 2] = unboundTypesHandler;
        }

        whenDependentTypesAreResolved([], rawArgTypes, function (argTypes) {
          var memberFunction = craftInvokerFunction(humanName, argTypes, classType, rawInvoker, context);

          if (undefined === proto[methodName].overloadTable) {
            memberFunction.argCount = argCount - 2;
            proto[methodName] = memberFunction;
          } else {
            proto[methodName].overloadTable[argCount - 2] = memberFunction;
          }

          return [];
        });
        return [];
      });
    }

    function __emval_decref(handle) {
      if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
        emval_handle_array[handle] = undefined;
        emval_free_list.push(handle);
      }
    }

    function __embind_register_emval(rawType, name) {
      name = readLatin1String(name);
      registerType(rawType, {
        name: name,
        "fromWireType": function fromWireType(handle) {
          var rv = emval_handle_array[handle].value;

          __emval_decref(handle);

          return rv;
        },
        "toWireType": function toWireType(destructors, value) {
          return __emval_register(value);
        },
        "argPackAdvance": 8,
        "readValueFromPointer": simpleReadValueFromPointer,
        destructorFunction: null
      });
    }

    function _embind_repr(v) {
      if (v === null) {
        return "null";
      }

      var t = _typeof(v);

      if (t === "object" || t === "array" || t === "function") {
        return v.toString();
      } else {
        return "" + v;
      }
    }

    function floatReadValueFromPointer(name, shift) {
      switch (shift) {
        case 2:
          return function (pointer) {
            return this["fromWireType"](HEAPF32[pointer >> 2]);
          };

        case 3:
          return function (pointer) {
            return this["fromWireType"](HEAPF64[pointer >> 3]);
          };

        default:
          throw new TypeError("Unknown float type: " + name);
      }
    }

    function __embind_register_float(rawType, name, size) {
      var shift = getShiftFromSize(size);
      name = readLatin1String(name);
      registerType(rawType, {
        name: name,
        "fromWireType": function fromWireType(value) {
          return value;
        },
        "toWireType": function toWireType(destructors, value) {
          if (typeof value !== "number" && typeof value !== "boolean") {
            throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
          }

          return value;
        },
        "argPackAdvance": 8,
        "readValueFromPointer": floatReadValueFromPointer(name, shift),
        destructorFunction: null
      });
    }

    function integerReadValueFromPointer(name, shift, signed) {
      switch (shift) {
        case 0:
          return signed ? function readS8FromPointer(pointer) {
            return HEAP8[pointer];
          } : function readU8FromPointer(pointer) {
            return HEAPU8[pointer];
          };

        case 1:
          return signed ? function readS16FromPointer(pointer) {
            return HEAP16[pointer >> 1];
          } : function readU16FromPointer(pointer) {
            return HEAPU16[pointer >> 1];
          };

        case 2:
          return signed ? function readS32FromPointer(pointer) {
            return HEAP32[pointer >> 2];
          } : function readU32FromPointer(pointer) {
            return HEAPU32[pointer >> 2];
          };

        default:
          throw new TypeError("Unknown integer type: " + name);
      }
    }

    function __embind_register_integer(primitiveType, name, size, minRange, maxRange) {
      name = readLatin1String(name);

      if (maxRange === -1) {
        maxRange = 4294967295;
      }

      var shift = getShiftFromSize(size);

      var fromWireType = function fromWireType(value) {
        return value;
      };

      if (minRange === 0) {
        var bitshift = 32 - 8 * size;

        fromWireType = function fromWireType(value) {
          return value << bitshift >>> bitshift;
        };
      }

      var isUnsignedType = name.indexOf("unsigned") != -1;
      registerType(primitiveType, {
        name: name,
        "fromWireType": fromWireType,
        "toWireType": function toWireType(destructors, value) {
          if (typeof value !== "number" && typeof value !== "boolean") {
            throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
          }

          if (value < minRange || value > maxRange) {
            throw new TypeError('Passing a number "' + _embind_repr(value) + '" from JS side to C/C++ side to an argument of type "' + name + '", which is outside the valid range [' + minRange + ", " + maxRange + "]!");
          }

          return isUnsignedType ? value >>> 0 : value | 0;
        },
        "argPackAdvance": 8,
        "readValueFromPointer": integerReadValueFromPointer(name, shift, minRange !== 0),
        destructorFunction: null
      });
    }

    function __embind_register_memory_view(rawType, dataTypeIndex, name) {
      var typeMapping = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];
      var TA = typeMapping[dataTypeIndex];

      function decodeMemoryView(handle) {
        handle = handle >> 2;
        var heap = HEAPU32;
        var size = heap[handle];
        var data = heap[handle + 1];
        return new TA(buffer, data, size);
      }

      name = readLatin1String(name);
      registerType(rawType, {
        name: name,
        "fromWireType": decodeMemoryView,
        "argPackAdvance": 8,
        "readValueFromPointer": decodeMemoryView
      }, {
        ignoreDuplicateRegistrations: true
      });
    }

    function __embind_register_std_string(rawType, name) {
      name = readLatin1String(name);
      var stdStringIsUTF8 = name === "std::string";
      registerType(rawType, {
        name: name,
        "fromWireType": function fromWireType(value) {
          var length = HEAPU32[value >> 2];
          var str;

          if (stdStringIsUTF8) {
            var decodeStartPtr = value + 4;

            for (var i = 0; i <= length; ++i) {
              var currentBytePtr = value + 4 + i;

              if (HEAPU8[currentBytePtr] == 0 || i == length) {
                var maxRead = currentBytePtr - decodeStartPtr;
                var stringSegment = UTF8ToString(decodeStartPtr, maxRead);

                if (str === undefined) {
                  str = stringSegment;
                } else {
                  str += String.fromCharCode(0);
                  str += stringSegment;
                }

                decodeStartPtr = currentBytePtr + 1;
              }
            }
          } else {
            var a = new Array(length);

            for (var i = 0; i < length; ++i) {
              a[i] = String.fromCharCode(HEAPU8[value + 4 + i]);
            }

            str = a.join("");
          }

          _free(value);

          return str;
        },
        "toWireType": function toWireType(destructors, value) {
          if (value instanceof ArrayBuffer) {
            value = new Uint8Array(value);
          }

          var getLength;
          var valueIsOfTypeString = typeof value === "string";

          if (!(valueIsOfTypeString || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int8Array)) {
            throwBindingError("Cannot pass non-string to std::string");
          }

          if (stdStringIsUTF8 && valueIsOfTypeString) {
            getLength = function getLength() {
              return lengthBytesUTF8(value);
            };
          } else {
            getLength = function getLength() {
              return value.length;
            };
          }

          var length = getLength();

          var ptr = _malloc(4 + length + 1);

          HEAPU32[ptr >> 2] = length;

          if (stdStringIsUTF8 && valueIsOfTypeString) {
            stringToUTF8(value, ptr + 4, length + 1);
          } else {
            if (valueIsOfTypeString) {
              for (var i = 0; i < length; ++i) {
                var charCode = value.charCodeAt(i);

                if (charCode > 255) {
                  _free(ptr);

                  throwBindingError("String has UTF-16 code units that do not fit in 8 bits");
                }

                HEAPU8[ptr + 4 + i] = charCode;
              }
            } else {
              for (var i = 0; i < length; ++i) {
                HEAPU8[ptr + 4 + i] = value[i];
              }
            }
          }

          if (destructors !== null) {
            destructors.push(_free, ptr);
          }

          return ptr;
        },
        "argPackAdvance": 8,
        "readValueFromPointer": simpleReadValueFromPointer,
        destructorFunction: function destructorFunction(ptr) {
          _free(ptr);
        }
      });
    }

    function __embind_register_std_wstring(rawType, charSize, name) {
      name = readLatin1String(name);
      var decodeString, encodeString, getHeap, lengthBytesUTF, shift;

      if (charSize === 2) {
        decodeString = UTF16ToString;
        encodeString = stringToUTF16;
        lengthBytesUTF = lengthBytesUTF16;

        getHeap = function getHeap() {
          return HEAPU16;
        };

        shift = 1;
      } else if (charSize === 4) {
        decodeString = UTF32ToString;
        encodeString = stringToUTF32;
        lengthBytesUTF = lengthBytesUTF32;

        getHeap = function getHeap() {
          return HEAPU32;
        };

        shift = 2;
      }

      registerType(rawType, {
        name: name,
        "fromWireType": function fromWireType(value) {
          var length = HEAPU32[value >> 2];
          var HEAP = getHeap();
          var str;
          var decodeStartPtr = value + 4;

          for (var i = 0; i <= length; ++i) {
            var currentBytePtr = value + 4 + i * charSize;

            if (HEAP[currentBytePtr >> shift] == 0 || i == length) {
              var maxReadBytes = currentBytePtr - decodeStartPtr;
              var stringSegment = decodeString(decodeStartPtr, maxReadBytes);

              if (str === undefined) {
                str = stringSegment;
              } else {
                str += String.fromCharCode(0);
                str += stringSegment;
              }

              decodeStartPtr = currentBytePtr + charSize;
            }
          }

          _free(value);

          return str;
        },
        "toWireType": function toWireType(destructors, value) {
          if (!(typeof value === "string")) {
            throwBindingError("Cannot pass non-string to C++ string type " + name);
          }

          var length = lengthBytesUTF(value);

          var ptr = _malloc(4 + length + charSize);

          HEAPU32[ptr >> 2] = length >> shift;
          encodeString(value, ptr + 4, length + charSize);

          if (destructors !== null) {
            destructors.push(_free, ptr);
          }

          return ptr;
        },
        "argPackAdvance": 8,
        "readValueFromPointer": simpleReadValueFromPointer,
        destructorFunction: function destructorFunction(ptr) {
          _free(ptr);
        }
      });
    }

    function __embind_register_value_object(rawType, name, constructorSignature, rawConstructor, destructorSignature, rawDestructor) {
      structRegistrations[rawType] = {
        name: readLatin1String(name),
        rawConstructor: embind__requireFunction(constructorSignature, rawConstructor),
        rawDestructor: embind__requireFunction(destructorSignature, rawDestructor),
        fields: []
      };
    }

    function __embind_register_value_object_field(structType, fieldName, getterReturnType, getterSignature, getter, getterContext, setterArgumentType, setterSignature, setter, setterContext) {
      structRegistrations[structType].fields.push({
        fieldName: readLatin1String(fieldName),
        getterReturnType: getterReturnType,
        getter: embind__requireFunction(getterSignature, getter),
        getterContext: getterContext,
        setterArgumentType: setterArgumentType,
        setter: embind__requireFunction(setterSignature, setter),
        setterContext: setterContext
      });
    }

    function __embind_register_void(rawType, name) {
      name = readLatin1String(name);
      registerType(rawType, {
        isVoid: true,
        name: name,
        "argPackAdvance": 0,
        "fromWireType": function fromWireType() {
          return undefined;
        },
        "toWireType": function toWireType(destructors, o) {
          return undefined;
        }
      });
    }

    function __emval_allocateDestructors(destructorsRef) {
      var destructors = [];
      HEAP32[destructorsRef >> 2] = __emval_register(destructors);
      return destructors;
    }

    var emval_symbols = {};

    function getStringOrSymbol(address) {
      var symbol = emval_symbols[address];

      if (symbol === undefined) {
        return readLatin1String(address);
      } else {
        return symbol;
      }
    }

    var emval_methodCallers = [];

    function __emval_call_method(caller, handle, methodName, destructorsRef, args) {
      caller = emval_methodCallers[caller];
      handle = requireHandle(handle);
      methodName = getStringOrSymbol(methodName);
      return caller(handle, methodName, __emval_allocateDestructors(destructorsRef), args);
    }

    function __emval_call_void_method(caller, handle, methodName, args) {
      caller = emval_methodCallers[caller];
      handle = requireHandle(handle);
      methodName = getStringOrSymbol(methodName);
      caller(handle, methodName, null, args);
    }

    function __emval_addMethodCaller(caller) {
      var id = emval_methodCallers.length;
      emval_methodCallers.push(caller);
      return id;
    }

    function __emval_lookupTypes(argCount, argTypes) {
      var a = new Array(argCount);

      for (var i = 0; i < argCount; ++i) {
        a[i] = requireRegisteredType(HEAP32[(argTypes >> 2) + i], "parameter " + i);
      }

      return a;
    }

    function __emval_get_method_caller(argCount, argTypes) {
      var types = __emval_lookupTypes(argCount, argTypes);

      var retType = types[0];
      var signatureName = retType.name + "_$" + types.slice(1).map(function (t) {
        return t.name;
      }).join("_") + "$";
      var params = ["retType"];
      var args = [retType];
      var argsList = "";

      for (var i = 0; i < argCount - 1; ++i) {
        argsList += (i !== 0 ? ", " : "") + "arg" + i;
        params.push("argType" + i);
        args.push(types[1 + i]);
      }

      var functionName = makeLegalFunctionName("methodCaller_" + signatureName);
      var functionBody = "return function " + functionName + "(handle, name, destructors, args) {\n";
      var offset = 0;

      for (var i = 0; i < argCount - 1; ++i) {
        functionBody += "    var arg" + i + " = argType" + i + ".readValueFromPointer(args" + (offset ? "+" + offset : "") + ");\n";
        offset += types[i + 1]["argPackAdvance"];
      }

      functionBody += "    var rv = handle[name](" + argsList + ");\n";

      for (var i = 0; i < argCount - 1; ++i) {
        if (types[i + 1]["deleteObject"]) {
          functionBody += "    argType" + i + ".deleteObject(arg" + i + ");\n";
        }
      }

      if (!retType.isVoid) {
        functionBody += "    return retType.toWireType(destructors, rv);\n";
      }

      functionBody += "};\n";
      params.push(functionBody);
      var invokerFunction = new_(Function, params).apply(null, args);
      return __emval_addMethodCaller(invokerFunction);
    }

    function __emval_incref(handle) {
      if (handle > 4) {
        emval_handle_array[handle].refcount += 1;
      }
    }

    function __emval_run_destructors(handle) {
      var destructors = emval_handle_array[handle].value;
      runDestructors(destructors);

      __emval_decref(handle);
    }

    function _abort() {
      abort();
    }

    function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }

    function _emscripten_get_heap_size() {
      return HEAPU8.length;
    }

    function emscripten_realloc_buffer(size) {
      try {
        wasmMemory.grow(size - buffer.byteLength + 65535 >>> 16);
        updateGlobalBufferAndViews(wasmMemory.buffer);
        return 1;
      } catch (e) {}
    }

    function _emscripten_resize_heap(requestedSize) {
      requestedSize = requestedSize >>> 0;

      var oldSize = _emscripten_get_heap_size();

      var PAGE_MULTIPLE = 65536;
      var maxHeapSize = 2147483648;

      if (requestedSize > maxHeapSize) {
        return false;
      }

      var minHeapSize = 16777216;

      for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(minHeapSize, requestedSize, overGrownHeapSize), PAGE_MULTIPLE));
        var replacement = emscripten_realloc_buffer(newSize);

        if (replacement) {
          return true;
        }
      }

      return false;
    }
    var SYSCALLS = {
      mappings: {},
      buffers: [null, [], []],
      printChar: function printChar(stream, curr) {
        var buffer = SYSCALLS.buffers[stream];

        if (curr === 0 || curr === 10) {
          (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
          buffer.length = 0;
        } else {
          buffer.push(curr);
        }
      },
      varargs: undefined,
      get: function get() {
        SYSCALLS.varargs += 4;
        var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];
        return ret;
      },
      getStr: function getStr(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },
      get64: function get64(low, high) {
        return low;
      }
    };

    function _fd_close(fd) {
      return 0;
    }

    function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {}

    function _fd_write(fd, iov, iovcnt, pnum) {
      var num = 0;

      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAP32[iov + i * 8 >> 2];
        var len = HEAP32[iov + (i * 8 + 4) >> 2];

        for (var j = 0; j < len; j++) {
          SYSCALLS.printChar(fd, HEAPU8[ptr + j]);
        }

        num += len;
      }

      HEAP32[pnum >> 2] = num;
      return 0;
    }

    init_emval();
    PureVirtualError = Module["PureVirtualError"] = extendError(Error, "PureVirtualError");
    embind_init_charCodes();
    init_embind();
    BindingError = Module["BindingError"] = extendError(Error, "BindingError");
    InternalError = Module["InternalError"] = extendError(Error, "InternalError");
    init_ClassHandle();
    init_RegisteredPointer();
    UnboundTypeError = Module["UnboundTypeError"] = extendError(Error, "UnboundTypeError");

    function intArrayToString(array) {
      var ret = [];

      for (var i = 0; i < array.length; i++) {
        var chr = array[i];

        if (chr > 255) {

          chr &= 255;
        }

        ret.push(String.fromCharCode(chr));
      }

      return ret.join("");
    }

    var decodeBase64 = typeof atob === "function" ? atob : function (input) {
      var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      var output = "";
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0;
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

      do {
        enc1 = keyStr.indexOf(input.charAt(i++));
        enc2 = keyStr.indexOf(input.charAt(i++));
        enc3 = keyStr.indexOf(input.charAt(i++));
        enc4 = keyStr.indexOf(input.charAt(i++));
        chr1 = enc1 << 2 | enc2 >> 4;
        chr2 = (enc2 & 15) << 4 | enc3 >> 2;
        chr3 = (enc3 & 3) << 6 | enc4;
        output = output + String.fromCharCode(chr1);

        if (enc3 !== 64) {
          output = output + String.fromCharCode(chr2);
        }

        if (enc4 !== 64) {
          output = output + String.fromCharCode(chr3);
        }
      } while (i < input.length);

      return output;
    };

    function intArrayFromBase64(s) {
      if (typeof ENVIRONMENT_IS_NODE === "boolean" && ENVIRONMENT_IS_NODE) {
        var buf;

        try {
          buf = Buffer.from(s, "base64");
        } catch (_) {
          buf = new Buffer(s, "base64");
        }

        return new Uint8Array(buf["buffer"], buf["byteOffset"], buf["byteLength"]);
      }

      try {
        var decoded = decodeBase64(s);
        var bytes = new Uint8Array(decoded.length);

        for (var i = 0; i < decoded.length; ++i) {
          bytes[i] = decoded.charCodeAt(i);
        }

        return bytes;
      } catch (_) {
        throw new Error("Converting base64 string to bytes failed.");
      }
    }

    function tryParseAsDataURI(filename) {
      if (!isDataURI(filename)) {
        return;
      }

      return intArrayFromBase64(filename.slice(dataURIPrefix.length));
    }

    var asmLibraryArg = {
      "_ZN8facebook4yoga24LayoutPassReasonToStringENS0_16LayoutPassReasonE": __ZN8facebook4yoga24LayoutPassReasonToStringENS0_16LayoutPassReasonE,
      "__cxa_allocate_exception": ___cxa_allocate_exception,
      "__cxa_throw": ___cxa_throw,
      "_embind_create_inheriting_constructor": __embind_create_inheriting_constructor,
      "_embind_finalize_value_object": __embind_finalize_value_object,
      "_embind_register_bool": __embind_register_bool,
      "_embind_register_class": __embind_register_class,
      "_embind_register_class_class_function": __embind_register_class_class_function,
      "_embind_register_class_constructor": __embind_register_class_constructor,
      "_embind_register_class_function": __embind_register_class_function,
      "_embind_register_emval": __embind_register_emval,
      "_embind_register_float": __embind_register_float,
      "_embind_register_integer": __embind_register_integer,
      "_embind_register_memory_view": __embind_register_memory_view,
      "_embind_register_std_string": __embind_register_std_string,
      "_embind_register_std_wstring": __embind_register_std_wstring,
      "_embind_register_value_object": __embind_register_value_object,
      "_embind_register_value_object_field": __embind_register_value_object_field,
      "_embind_register_void": __embind_register_void,
      "_emval_call_method": __emval_call_method,
      "_emval_call_void_method": __emval_call_void_method,
      "_emval_decref": __emval_decref,
      "_emval_get_method_caller": __emval_get_method_caller,
      "_emval_incref": __emval_incref,
      "_emval_run_destructors": __emval_run_destructors,
      "abort": _abort,
      "emscripten_memcpy_big": _emscripten_memcpy_big,
      "emscripten_resize_heap": _emscripten_resize_heap,
      "fd_close": _fd_close,
      "fd_seek": _fd_seek,
      "fd_write": _fd_write,
      "memory": wasmMemory,
      "setTempRet0": setTempRet0,
      "table": wasmTable
    };
    var asm = createWasm();
    Module["asm"] = asm;

    var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function () {
      return (___wasm_call_ctors = Module["___wasm_call_ctors"] = Module["asm"]["__wasm_call_ctors"]).apply(null, arguments);
    };

    var ___getTypeName = Module["___getTypeName"] = function () {
      return (___getTypeName = Module["___getTypeName"] = Module["asm"]["__getTypeName"]).apply(null, arguments);
    };

    var ___embind_register_native_and_builtin_types = Module["___embind_register_native_and_builtin_types"] = function () {
      return (___embind_register_native_and_builtin_types = Module["___embind_register_native_and_builtin_types"] = Module["asm"]["__embind_register_native_and_builtin_types"]).apply(null, arguments);
    };

    var _malloc = Module["_malloc"] = function () {
      return (_malloc = Module["_malloc"] = Module["asm"]["malloc"]).apply(null, arguments);
    };

    var _free = Module["_free"] = function () {
      return (_free = Module["_free"] = Module["asm"]["free"]).apply(null, arguments);
    };

    var __growWasmMemory = Module["__growWasmMemory"] = function () {
      return (__growWasmMemory = Module["__growWasmMemory"] = Module["asm"]["__growWasmMemory"]).apply(null, arguments);
    };

    var dynCall_ii = Module["dynCall_ii"] = function () {
      return (dynCall_ii = Module["dynCall_ii"] = Module["asm"]["dynCall_ii"]).apply(null, arguments);
    };

    var dynCall_iiiiii = Module["dynCall_iiiiii"] = function () {
      return (dynCall_iiiiii = Module["dynCall_iiiiii"] = Module["asm"]["dynCall_iiiiii"]).apply(null, arguments);
    };

    var dynCall_vii = Module["dynCall_vii"] = function () {
      return (dynCall_vii = Module["dynCall_vii"] = Module["asm"]["dynCall_vii"]).apply(null, arguments);
    };

    var dynCall_viififi = Module["dynCall_viififi"] = function () {
      return (dynCall_viififi = Module["dynCall_viififi"] = Module["asm"]["dynCall_viififi"]).apply(null, arguments);
    };

    var dynCall_vi = Module["dynCall_vi"] = function () {
      return (dynCall_vi = Module["dynCall_vi"] = Module["asm"]["dynCall_vi"]).apply(null, arguments);
    };

    var dynCall_i = Module["dynCall_i"] = function () {
      return (dynCall_i = Module["dynCall_i"] = Module["asm"]["dynCall_i"]).apply(null, arguments);
    };

    var dynCall_viii = Module["dynCall_viii"] = function () {
      return (dynCall_viii = Module["dynCall_viii"] = Module["asm"]["dynCall_viii"]).apply(null, arguments);
    };

    var dynCall_vif = Module["dynCall_vif"] = function () {
      return (dynCall_vif = Module["dynCall_vif"] = Module["asm"]["dynCall_vif"]).apply(null, arguments);
    };

    var dynCall_iii = Module["dynCall_iii"] = function () {
      return (dynCall_iii = Module["dynCall_iii"] = Module["asm"]["dynCall_iii"]).apply(null, arguments);
    };

    var dynCall_viiii = Module["dynCall_viiii"] = function () {
      return (dynCall_viiii = Module["dynCall_viiii"] = Module["asm"]["dynCall_viiii"]).apply(null, arguments);
    };

    var dynCall_viif = Module["dynCall_viif"] = function () {
      return (dynCall_viif = Module["dynCall_viif"] = Module["asm"]["dynCall_viif"]).apply(null, arguments);
    };

    var dynCall_iiii = Module["dynCall_iiii"] = function () {
      return (dynCall_iiii = Module["dynCall_iiii"] = Module["asm"]["dynCall_iiii"]).apply(null, arguments);
    };

    var dynCall_dii = Module["dynCall_dii"] = function () {
      return (dynCall_dii = Module["dynCall_dii"] = Module["asm"]["dynCall_dii"]).apply(null, arguments);
    };

    var dynCall_viid = Module["dynCall_viid"] = function () {
      return (dynCall_viid = Module["dynCall_viid"] = Module["asm"]["dynCall_viid"]).apply(null, arguments);
    };

    var dynCall_vid = Module["dynCall_vid"] = function () {
      return (dynCall_vid = Module["dynCall_vid"] = Module["asm"]["dynCall_vid"]).apply(null, arguments);
    };

    var dynCall_di = Module["dynCall_di"] = function () {
      return (dynCall_di = Module["dynCall_di"] = Module["asm"]["dynCall_di"]).apply(null, arguments);
    };

    var dynCall_viddi = Module["dynCall_viddi"] = function () {
      return (dynCall_viddi = Module["dynCall_viddi"] = Module["asm"]["dynCall_viddi"]).apply(null, arguments);
    };

    var dynCall_iiififi = Module["dynCall_iiififi"] = function () {
      return (dynCall_iiififi = Module["dynCall_iiififi"] = Module["asm"]["dynCall_iiififi"]).apply(null, arguments);
    };

    var dynCall_fii = Module["dynCall_fii"] = function () {
      return (dynCall_fii = Module["dynCall_fii"] = Module["asm"]["dynCall_fii"]).apply(null, arguments);
    };

    var dynCall_viiid = Module["dynCall_viiid"] = function () {
      return (dynCall_viiid = Module["dynCall_viiid"] = Module["asm"]["dynCall_viiid"]).apply(null, arguments);
    };

    var dynCall_diii = Module["dynCall_diii"] = function () {
      return (dynCall_diii = Module["dynCall_diii"] = Module["asm"]["dynCall_diii"]).apply(null, arguments);
    };

    var dynCall_viiddi = Module["dynCall_viiddi"] = function () {
      return (dynCall_viiddi = Module["dynCall_viiddi"] = Module["asm"]["dynCall_viiddi"]).apply(null, arguments);
    };

    var dynCall_v = Module["dynCall_v"] = function () {
      return (dynCall_v = Module["dynCall_v"] = Module["asm"]["dynCall_v"]).apply(null, arguments);
    };

    var dynCall_jiji = Module["dynCall_jiji"] = function () {
      return (dynCall_jiji = Module["dynCall_jiji"] = Module["asm"]["dynCall_jiji"]).apply(null, arguments);
    };

    var dynCall_iidiiii = Module["dynCall_iidiiii"] = function () {
      return (dynCall_iidiiii = Module["dynCall_iidiiii"] = Module["asm"]["dynCall_iidiiii"]).apply(null, arguments);
    };

    var dynCall_viiiiii = Module["dynCall_viiiiii"] = function () {
      return (dynCall_viiiiii = Module["dynCall_viiiiii"] = Module["asm"]["dynCall_viiiiii"]).apply(null, arguments);
    };

    var dynCall_viiiii = Module["dynCall_viiiii"] = function () {
      return (dynCall_viiiii = Module["dynCall_viiiii"] = Module["asm"]["dynCall_viiiii"]).apply(null, arguments);
    };

    Module["asm"] = asm;
    var calledRun;

    function ExitStatus(status) {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + status + ")";
      this.status = status;
    }

    dependenciesFulfilled = function runCaller() {
      if (!calledRun) run();
      if (!calledRun) dependenciesFulfilled = runCaller;
    };

    function run(args) {

      if (runDependencies > 0) {
        return;
      }

      preRun();
      if (runDependencies > 0) return;

      function doRun() {
        if (calledRun) return;
        calledRun = true;
        Module["calledRun"] = true;
        if (ABORT) return;
        initRuntime();
        preMain();
        readyPromiseResolve(Module);
        if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
        postRun();
      }

      if (Module["setStatus"]) {
        Module["setStatus"]("Running...");
        setTimeout(function () {
          setTimeout(function () {
            Module["setStatus"]("");
          }, 1);
          doRun();
        }, 1);
      } else {
        doRun();
      }
    }

    Module["run"] = run;

    if (Module["preInit"]) {
      if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];

      while (Module["preInit"].length > 0) {
        Module["preInit"].pop()();
      }
    }

    noExitRuntime = true;
    run();
    return Module.ready;
  };
}();

function bind(name, proto) {
  return proto;
}

var asm = Module().then(function (mod) {
  return entryCommon(bind, mod);
});

module.exports = asm;
