CC=emcc

all: clean dir wasm asm

wasm:
	$(CC) yoga/yoga/*.cpp bindings/*.cc \
		--bind -Os --memory-init-file 0 --llvm-lto 1 \
		-Iyoga \
		-s WASM=1 \
		-s WASM_ASYNC_COMPILATION=1 \
		-s DISABLE_EXCEPTION_CATCHING=1 \
		-s AGGRESSIVE_VARIABLE_ELIMINATION=1 \
		-s NO_EXIT_RUNTIME=1 \
		-s ASSERTIONS=0 \
		-s ALLOW_MEMORY_GROWTH=1 \
		-s MODULARIZE=1 \
		-s ERROR_ON_UNDEFINED_SYMBOLS=0 \
		-s "DEFAULT_LIBRARY_FUNCS_TO_INCLUDE=['memcpy','memset','malloc','free','strlen']" \
		-o build/yoga.mjs

asm:
	$(CC) yoga/yoga/*.cpp bindings/*.cc \
		--bind -Os --memory-init-file 0 --llvm-lto 1 \
		-Iyoga \
		-s WASM=0 \
		-s ENVIRONMENT='shell,web' \
		-s WASM_ASYNC_COMPILATION=1 \
		-s DISABLE_EXCEPTION_CATCHING=1 \
		-s AGGRESSIVE_VARIABLE_ELIMINATION=1 \
		-s NO_EXIT_RUNTIME=1 \
		-s ASSERTIONS=0 \
		-s ALLOW_MEMORY_GROWTH=1 \
		-s MODULARIZE=1 \
		-s ERROR_ON_UNDEFINED_SYMBOLS=0 \
		-s "DEFAULT_LIBRARY_FUNCS_TO_INCLUDE=['memcpy','memset','malloc','free','strlen']" \
		-o build/yoga.asm.mjs

clean:
	rm -rf build 

dir:
	mkdir -p build
