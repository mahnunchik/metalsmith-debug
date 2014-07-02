NODE_BIN ?= node_modules/.bin
JSHINT ?= $(NODE_BIN)/jshint

LIB := lib


.SUFFIXES:
.PHONY: all lint

all: lint

node_modules: package.json
	@npm install

lint: node_modules
	@$(JSHINT) $(LIB)
