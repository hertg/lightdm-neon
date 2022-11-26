<div align="center">
  <h1><strong>LightDM Neon Theme</strong></h1>
  <p>
    <strong>A modern and customizable theme for <a href="https://github.com/JezerM/nody-greeter">nody-greeter</a> / <a href="https://github.com/JezerM/web-greeter">web-greeter</a> in a nostalgic neon look</strong>
  </p>
  <p>
    <a href="https://github.com/hertg/lightdm-neon/releases">
        <img alt="Latest Github Release" src="https://img.shields.io/github/v/tag/hertg/lightdm-neon?logo=github" />
    </a>
    <a href="https://hertg.github.io/lightdm-neon/">
        <img alt="Svelte version" src="https://img.shields.io/github/package-json/dependency-version/hertg/lightdm-neon/dev/svelte?logo=svelte">
    </a>
    <a href="#">
        <img alt="License Information" src="https://img.shields.io/github/license/hertg/lightdm-neon?logo=gnu">
    </a>
  </p>
</div>

![Splashscreen](./docs/splash.jpg)
![User Selection](./docs/users.jpg)
![Password Prompt](./docs/password.jpg)

## Make it your own
You can customize the theme to your own preferences.
- enter your own text for the neon sign or simply display a clock
- change the accent color (used for neon sign, user avatar placeholders, ...)
- choose from different fonts for the neon sign
- choose from different background images or use your own
- enable / disable the splashscreen
- and more...

## Demo
Click here for a fully functional [live demo](https://hertg.github.io/lightdm-neon/) of the theme.

## Installation
> :bulb: You still need to [enable the theme](#enable-the-theme) after installation.
### Manual
```sh
git clone https://github.com/hertg/lightdm-neon.git
cd lightdm-neon
make build
sudo make install
```
```sh
sudo make uninstall
```

### AUR
```sh
paru -S lightdm-theme-neon-git
```
> :bulb: [paru](https://github.com/Morganamilo/paru) is an AUR helper written in Rust

## Enable the theme
Make sure to set the `theme` in your greeter configuration.
```yaml
# /etc/lightdm/web-greeter.yml
greeter:
    theme: neon
```

## Compatibility
This theme is developed for [web-greeter](https://github.com/JezerM/web-greeter) / [nody-greeter](https://github.com/JezerM/nody-greeter). The no longer maintained [Antergos/web-greeter](https://github.com/Antergos/web-greeter) is not supported.

## Build
### Dependencies
- nodejs (`v16+`)
- npm

### Build
```sh
make build
```

### Run in dev mode
```sh
make dev
```

## Contributing
See [CONTRIBUTING.md](https://github.com/hertg/lightdm-neon/blob/main/CONTRIBUTING.md)

## Credits
See [CREDITS.md](https://github.com/hertg/lightdm-neon/blob/main/CREDITS.md)

## Links
- [Building a LightDM Webkit Greeter Theme](https://www.chathandriehuys.com/blog/posts/2021/01/building-a-lightdm-webkit-greeter-theme/) (chathandriehuys.com)
- [lightdm-webkit-theme](https://github.com/cdriehuys/lightdm-webkit-theme) (github.com)
- [lightdm-webkit2-greeter](https://github.com/antergos/web-greeter) (github.com)
- [lightdm-webkit2-theme-reactive](https://github.com/gitneeraj/lightdm-webkit2-theme-reactive) (github.com)
- [nody-greeter](https://github.com/JezerM/nody-greeter)