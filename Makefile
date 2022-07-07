
THEME_NAME := neon
THEME_DIRECTORY := /usr/share/web-greeter/themes

# Absolute path to project directory, required for symbolic links
# or when 'make' is run from another directory.
# - credit: https://stackoverflow.com/a/23324703/2726733
ROOT_DIR := $(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))

all: build

npm-install:
	npm install

dev: npm-install
	npm run dev

build: npm-install
	npm run build

install:
	install -dm755 $(THEME_DIRECTORY)/$(THEME_NAME)
	cp -r $(ROOT_DIR)/public/. $(THEME_DIRECTORY)/$(THEME_NAME)
	@echo "Please update your /etc/lightdm/web-greeter.yml manually"

uninstall:
	rm -r $(THEME_DIRECTORY)/$(THEME_NAME)
	@echo "Please update your /etc/lightdm/web-greeter.yml manually"
