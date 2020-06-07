# VueNativeTodo
Really simple Vue Native TODO app with NativeBase components (and how to debug vue native apps)

## How to install
* clone the repository
* **npm install -g expo-cli**
* **npm install**
* **expo start**
* Download the Expo App for [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) or [iOS](https://apps.apple.com/us/app/expo-client/id982107779) and scan the QR code.

## Why methods are in a separated mixin?
Debugging vue files in Chrome are not working very well. You cannot add breakpoints to the script part of it. But if you put it to a separated js file, it works like a charm.

## How to debug vue native apps (expo apps)?
* Shake the device to see the dev menu.
* Choose **Debug Remote JS**
* Open [http://localhost:19001/debugger-ui/](http://localhost:19001/debugger-ui/)
* You will find your code in the worker in the Chrome Dev Console


