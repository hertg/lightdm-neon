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

## Attribution
- Example Avatars from [boringavatars.com](https://boringavatars.com/)