#!/bin/sh

version=$1
checksum=$2

#### lightdm-theme-neon ####

mkdir -p ./.pkgbuild/lightdm-theme-neon
cp ./.pkg/aur/lightdm-theme-neon/* ./.pkgbuild/lightdm-theme-neon

cat << EOF > ./.pkgbuild/lightdm-theme-neon/PKGBUILD
# Maintainer: hertg <aur@her.tg>
# This file is generated automatically
_version=$version
_versionWithoutPrefix=${version#v}
_pkgname=lightdm-theme-neon
_pkgver=$(echo $version | sed 's/\([^-]*-g\)/r\1/;s/-/./g')
_source=\${_pkgname}-\${_version}::https://github.com/hertg/lightdm-neon/archive/refs/tags/$version.tar.gz
EOF

cat ./.pkgbuild/lightdm-theme-neon/PKGBUILD.template >> ./.pkgbuild/lightdm-theme-neon/PKGBUILD
rm ./.pkgbuild/lightdm-theme-neon/PKGBUILD.template


#### lightdm-theme-neon-bin ####

mkdir -p ./.pkgbuild/lightdm-theme-neon-bin
cp ./.pkg/aur/lightdm-theme-neon-bin/* ./.pkgbuild/lightdm-theme-neon-bin

cat << EOF > ./.pkgbuild/lightdm-theme-neon-bin/PKGBUILD
# Maintainer: hertg <aur@her.tg>
# This file is generated automatically
_version=$version
_pkgname=lightdm-theme-neon-bin
_pkgver=$(echo $version | sed 's/\([^-]*-g\)/r\1/;s/-/./g')
_sha256sum=$checksum
_source=\${_pkgname}-\${_pkgver}::https://github.com/hertg/lightdm-neon/releases/download/$version/build.tar.gz
EOF

cat ./.pkgbuild/lightdm-theme-neon-bin/PKGBUILD.template >> ./.pkgbuild/lightdm-theme-neon-bin/PKGBUILD
rm ./.pkgbuild/lightdm-theme-neon-bin/PKGBUILD.template
