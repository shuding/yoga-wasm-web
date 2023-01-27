CC=emcc

all: clean dir wasm asm

wasm:
	$(CC) yoga/yoga/*.cpp yoga/yoga/**/*.cpp yoga/javascript/src_native/*.cc \
		--bind \
		-Iyoga \
		-g0 \
		-O3 \
		-flto \
		-std=c++14 \
		-fno-exceptions \
		-fno-rtti \
		-DEMSCRIPTEN_HAS_UNBOUND_TYPE_NAMES=0 \
		--closure 1 \
		-s WASM=1 \
		-s WASM_ASYNC_COMPILATION=1 \
		-s USE_CLOSURE_COMPILER=1 \
		-s USE_ES6_IMPORT_META=0 \
		-s ASSERTIONS=0 \
		-s ALLOW_MEMORY_GROWTH=1 \
		-s MODULARIZE=1 \
		-s DYNAMIC_EXECUTION=0 \
		-s TEXTDECODER=0 \
		-s ENVIRONMENT='web' \
		-s FETCH_SUPPORT_INDEXEDDB=0 \
		-s FILESYSTEM=0 \
		-s MALLOC="emmalloc" \
		-s INCOMING_MODULE_JS_API=['instantiateWasm']\
		-s EXPORT_NAME="yoga" \
		-o tmp/yoga.mjs

asm:
	$(CC) yoga/yoga/*.cpp yoga/yoga/**/*.cpp yoga/javascript/src_native/*.cc \
		--bind \
		-Iyoga \
		-g0 \
		-Os \
		-flto \
		-std=c++14 \
		-fno-exceptions \
		-fno-rtti \
		-DEMSCRIPTEN_HAS_UNBOUND_TYPE_NAMES=0 \
		--closure 1 \
		--memory-init-file 0 \
		-s WASM=0 \
		-s WASM_ASYNC_COMPILATION=0 \
		-s USE_CLOSURE_COMPILER=1 \
		-s USE_ES6_IMPORT_META=0 \
		-s ASSERTIONS=0 \
		-s ALLOW_MEMORY_GROWTH=1 \
		-s MODULARIZE=1 \
		-s DYNAMIC_EXECUTION=0 \
		-s TEXTDECODER=0 \
		-s ENVIRONMENT='web' \
		-s FETCH_SUPPORT_INDEXEDDB=0 \
		-s FILESYSTEM=0 \
		-s MALLOC="emmalloc" \
		-s EXPORT_NAME="yoga" \
		-o tmp/yoga-asm.mjs

clean:
	rm -rf tmp 

dir:
	mkdir -p tmp
