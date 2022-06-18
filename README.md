## Installation

```sh
make dev
```

```sh
make install-dev
```

## Tailwind CSS
Please note that this project uses [windicss](https://github.com/windicss/windicss), which is (at the time of writing) based on Tailwind CSS v2. So make sure to use the [`v2` docs](https://v2.tailwindcss.com/docs) of Tailwind CSS.

## Debugging
To debug the project locally and test it with the actual lightdm-greeter do the following steps.

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
   nody-greeter --debug
   ```

## Add a user avatar
Put the image file in `/var/lib/AccountsService/icons/{username}` and make sure it's owned by root with `644` permissions,
see [comment here](https://github.com/JezerM/web-greeter/issues/39#issuecomment-1094339419).

## TODO
- [ ] Lockscreen (dbus: `org.freedesktop.DisplayManager.Seat.Lock`)

## Resources
- [Building a LightDM Webkit Greeter Theme](https://www.chathandriehuys.com/blog/posts/2021/01/building-a-lightdm-webkit-greeter-theme/) (chathandriehuys.com)
- [lightdm-webkit-theme](https://github.com/cdriehuys/lightdm-webkit-theme) (github.com)
- [lightdm-webkit2-greeter](https://github.com/antergos/web-greeter) (github.com)
- [lightdm-webkit2-theme-reactive](https://github.com/gitneeraj/lightdm-webkit2-theme-reactive) (github.com)
- [nody-greeter](https://github.com/JezerM/nody-greeter)

## Attribution
- Avatars from [boringavatars.com](https://boringavatars.com/)
- Background Image &ndash; `computer.jpg`\
  <small>[Photo by Alan W on Unsplash](https://unsplash.com/photos/P2Ehy4BtV9Q)</small>
- Background Image &ndash; `paper.jpg`\
  <small>[Photo by Pawel Czerwinski on Unsplash](https://unsplash.com/photos/7rI7GSBsKko)</small>
- Background Image &ndash; `supermarket.jpg`\
  <small>[Photo by Filippo Agazzi on Unsplash](https://unsplash.com/photos/aEeNy96quts)</small>
- Background Image &ndash; `canyon.jpg`\
  <small>[Photo by Kevin Lanceplaine on Unsplash](https://unsplash.com/photos/sO-JmQj95ec)</small>
- Background Image &ndash; `plants.jpg`\
  <small>[Photo by Scott Webb on Unsplash](https://unsplash.com/photos/oRWRlTgBrPo)</small>
- Background Image &ndash; `purple.jpg`\
  <small>[Photo by Milad Fakurian on Unsplash](https://unsplash.com/photos/u8Jn2rzYIps)</small>

  