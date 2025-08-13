CC=emcc

YOGA_SRCS=yoga/yoga/*.cpp yoga/yoga/**/*.cpp yoga/javascript/src/*.cpp

CC_OPTS=--bind \
	-Iyoga \
	-flto \
	-fno-exceptions \
	-fno-rtti \
	-g0 \
	-Os \
	-std=c++20 \
	-DEMSCRIPTEN_HAS_UNBOUND_TYPE_NAMES=0

EMCC_OPTS=--closure 1 \
	--no-entry \
	-s ALLOW_MEMORY_GROWTH=1 \
	-s ASSERTIONS=0 \
	-s DYNAMIC_EXECUTION=0 \
	-s EXPORT_NAME='loadYoga' \
	-s FETCH_SUPPORT_INDEXEDDB=0 \
	-s FILESYSTEM=0 \
	-s MALLOC='emmalloc' \
	-s MODULARIZE=1 \
	-s EXPORT_ES6=1 \
	-s WASM=1 \
	-s TEXTDECODER=0 \
	-s SINGLE_FILE=0 \
	-s ENVIRONMENT='web'

all: clean dir wasm

wasm: dir
	$(CC) $(CC_OPTS) $(EMCC_OPTS) -o src/yoga_generated/yoga.mjs $(YOGA_SRCS)

clean:
	rm -rf src/yoga_generated 

dir:
	mkdir -p src/yoga_generated

.PHONY: all wasm clean dir
