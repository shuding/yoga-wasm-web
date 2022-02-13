CC=emcc

all: clean dir wasm

wasm:
	$(CC) yoga/yoga/*.cpp bindings/*.cc \
		--bind -Os --memory-init-file 0 --llvm-lto 1 \
		--pre-js './pre.js' \
		-Iyoga \
		-g0 \
		-O2 \
		-flto \
		-s WASM=1 \
		-s WASM_ASYNC_COMPILATION=1 \
		-s EXTRA_EXPORTED_RUNTIME_METHODS=['cwrap','setValue'] \
		-s DISABLE_EXCEPTION_CATCHING=1 \
		-s AGGRESSIVE_VARIABLE_ELIMINATION=1 \
		-s NO_EXIT_RUNTIME=1 \
		-s ASSERTIONS=0 \
		-s ALLOW_MEMORY_GROWTH=1 \
		-s MODULARIZE=1 \
		-s DYNAMIC_EXECUTION=0 \
		-s TEXTDECODER=0 \
		-s ENVIRONMENT='web' \
		-s ERROR_ON_UNDEFINED_SYMBOLS=0 \
		-s EXPORT_NAME="yoga" \
		-s "DEFAULT_LIBRARY_FUNCS_TO_INCLUDE=['memcpy','memset','malloc','free','strlen']" \
		-o dist/yoga.mjs

clean:
	rm -rf dist 

dir:
	mkdir -p dist
