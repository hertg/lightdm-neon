
THEME_NAME := svelte
THEME_DIRECTORY := /usr/share/web-greeter/themes

# Absolute path to project directory, required for symbolic links
# or when 'make' is run from another directory.
# - credit: https://stackoverflow.com/a/23324703/2726733
ROOT_DIR := $(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))

all: build

dev:
	npm run dev

build:
	npm run build

install: build
	sudo cp -r $(ROOT_DIR)/public $(THEME_DIRECTORY)/$(THEME_NAME)
	@echo "Please update your /etc/lightdm/lightdm-webkit2-greeter.conf or /etc/lightdm/web-greeter.yml manually"

install-dev: build
	sudo ln -sf $(ROOT_DIR)/public $(THEME_DIRECTORY)/$(THEME_NAME)
	@echo "Please update your /etc/lightdm/lightdm-webkit2-greeter.conf or /etc/lightdm/web-greeter.yml manually"

uninstall:
	sudo rm -r $(THEME_DIRECTORY)/$(THEME_NAME)
	@echo "Please update your /etc/lightdm/lightdm-webkit2-greeter.conf or /etc/lightdm/web-greeter.yml manually"