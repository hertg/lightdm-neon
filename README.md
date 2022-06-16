## Installation

```sh
make dev
```

```sh
make install-dev
```

## Debugging
To debug the project locally and test it with the actual lightdm-webkit2-greeter do the following steps.

1. Add the following setting to the `xsession` you are using (eg. `/usr/share/xsessions/leftwm.desktop`)
   ```
   X-LightDM-Allow-Greeter=true
   ```
1. Log out and log back in with the `xsession` you applied the config to
   ```sh
   sudo systemctl restart display-manager
   ```
1. Run the greeter from your desktop
   ```sh
   lightdm-webkit2-greeter
   # or
   nody-greeter --debug
   ```

## Add a user avatar
~~Add your avatar to your home directory and name it `.face`.~~\
-> This doesn't work (anymore). Setting a custom image via the webkit-greeter `user_image` configuration does work however. But it will display the same image for all users.

## Dependencies
- Rollup
- https://github.com/ItalyPaleAle/svelte-spa-router

## TODO
- [ ] Lockscreen (dbus: `org.freedesktop.DisplayManager.Seat.Lock`)

## Resources
- [Building a LightDM Webkit Greeter Theme](https://www.chathandriehuys.com/blog/posts/2021/01/building-a-lightdm-webkit-greeter-theme/) (chathandriehuys.com)
- [lightdm-webkit-theme](https://github.com/cdriehuys/lightdm-webkit-theme) (github.com)
- [lightdm-webkit2-greeter](https://github.com/antergos/web-greeter) (github.com)
- [lightdm-webkit2-theme-reactive](https://github.com/gitneeraj/lightdm-webkit2-theme-reactive) (github.com)
- [nody-greeter](https://github.com/JezerM/nody-greeter)

## Attribution
- Example Avatars from [boringavatars.com](https://boringavatars.com/)


## tmp
working
```
2022-06-17 00:17:49 [ ERROR ] acpi.js 31: ACPI: acpi_listen does not exists

(nody-greeter:5929): Gtk-WARNING **: 00:17:49.114: Theme parsing error: gtk-dark.css:5822:26: '-shadow' is not a valid color name

(nody-greeter:5929): Gtk-WARNING **: 00:17:49.114: Theme parsing error: gtk-dark.css:5825:14: not a number

(nody-greeter:5929): Gtk-WARNING **: 00:17:49.114: Theme parsing error: gtk-dark.css:5826:13: not a number

(nody-greeter:5929): Gtk-WARNING **: 00:17:49.114: Theme parsing error: gtk-dark.css:5827:11: Expected a length
2022-06-17 00:17:49 [ DEBUG ] browser.js 121: Initializing Browser Window
2022-06-17 00:17:49 [ DEBUG ] browser.js 137: Browser Window created
2022-06-17 00:17:49 [ DEBUG ] screensaver.js 39: Screensaver set
2022-06-17 00:17:49 [ DEBUG ] browser.js 118: Theme loaded
2022-06-17 00:17:49 [ DEBUG ] globals.js 15: Javascript logger is ready
2022-06-17 00:17:49 [ DEBUG ] globals.js 12: Window is ready
2022-06-17 00:17:49 [ ERROR ] bridge.js 50: Error: Unable to determine socket to daemon
2022-06-17 00:17:49 [ DEBUG ] bridge.js 65: LightDM API connected
2022-06-17 00:17:51 [ DEBUG ] browser.js 155: Nody Greeter started
```

not working
```
2022-06-17 00:19:11 [ ERROR ] acpi.js 31: ACPI: acpi_listen does not exists

(nody-greeter:6352): Gtk-WARNING **: 00:19:11.480: Theme parsing error: gtk-dark.css:5822:26: '-shadow' is not a valid color name

(nody-greeter:6352): Gtk-WARNING **: 00:19:11.480: Theme parsing error: gtk-dark.css:5825:14: not a number

(nody-greeter:6352): Gtk-WARNING **: 00:19:11.480: Theme parsing error: gtk-dark.css:5826:13: not a number

(nody-greeter:6352): Gtk-WARNING **: 00:19:11.480: Theme parsing error: gtk-dark.css:5827:11: Expected a length
2022-06-17 00:19:11 [ DEBUG ] browser.js 121: Initializing Browser Window
2022-06-17 00:19:11 [ DEBUG ] browser.js 137: Browser Window created
2022-06-17 00:19:11 [ DEBUG ] screensaver.js 39: Screensaver set
2022-06-17 00:19:11 [ DEBUG ] browser.js 118: Theme loaded
2022-06-17 00:19:11 [ DEBUG ] globals.js 15: Javascript logger is ready
2022-06-17 00:19:11 [ DEBUG ] globals.js 12: Window is ready
2022-06-17 00:19:11 [ ERROR ] bridge.js 50: Error: Unable to determine socket to daemon
2022-06-17 00:19:11 [ DEBUG ] bridge.js 65: LightDM API connected
2022-06-17 00:19:11 [ DEBUG ] browser.js 155: Nody Greeter started
```