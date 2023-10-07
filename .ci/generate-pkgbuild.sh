#!/bin/sh

version=$1
checksum=$2

# remove the "v" prefix
pkgver=$(echo ${version#v} | sed 's/\([^-]*-g\)/r\1/;s/-/./g')

#### lightdm-theme-neon ####

mkdir -p ./.pkgbuild/lightdm-theme-neon

cat << EOF > ./.pkgbuild/lightdm-theme-neon/PKGBUILD
# Maintainer: hertg <aur@her.tg>
# This file is generated automatically via CI
pkgname=lightdm-theme-neon
pkgver=$pkgver
pkgdesc='Modern and customizable theme for web-greeter with a nostalgic neon look'
pkgrel=1
arch=('any')
license=('GPL')
url='https://github.com/hertg/lightdm-neon'
makedepends=('npm' 'git')
optdepends=()
provides=()
conflicts=()
source=("\${pkgname}-${pkgver}.tar.gz::https://github.com/hertg/lightdm-neon/archive/refs/tags/$version.tar.gz")
sha256sums=('SKIP')

build() {
  cd lightdm-neon-\${pkgver}
  npm install
  npm run build
}

package() {
  # note: the directory is called "lightdm-neon-{version}", because the github 
  # archive extracts to a directory called "{repository}-{version}", not what
  # is specified in the source() of the PKGBUILD

  cd \${srcdir}/lightdm-neon-\${pkgver}
  install -dm755 "\${pkgdir}/usr/share/web-greeter/themes/neon"
  cp -r public/. "\${pkgdir}/usr/share/web-greeter/themes/neon"
}
EOF

#### lightdm-theme-neon-bin ####

mkdir -p ./.pkgbuild/lightdm-theme-neon-bin

cat << EOF > ./.pkgbuild/lightdm-theme-neon-bin/PKGBUILD
# Maintainer: hertg <aur@her.tg>
# This file is generated automatically via CI
pkgname=lightdm-theme-neon-bin
pkgver=$pkgver
pkgdesc='Modern and customizable theme for web-greeter with a nostalgic neon look, binary version'
pkgrel=1
arch=('any')
license=('GPL')
url='https://github.com/hertg/lightdm-neon'
makedepends=()
optdepends=()
provides=()
conflicts=()
source=("lightdm-theme-neon-bin-${pkgver}.tar.gz::https://github.com/hertg/lightdm-neon/releases/download/$version/build.tar.gz")
sha256sums=(${checksum})

package() {
  cd \${srcdir}
  install -dm755 "\${pkgdir}/usr/share/web-greeter/themes/neon"
  cp -r public/. "\${pkgdir}/usr/share/web-greeter/themes/neon"
}
EOF

