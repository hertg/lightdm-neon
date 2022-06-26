# Contributing

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