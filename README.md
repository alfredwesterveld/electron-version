# Electron-version

# Discontinued 

After research I have discovered this package is not needed thanks to [xvfb-maybe](https://www.npmjs.com/package/xvfb-maybe) package.

firs have electron installed globally because electron-prebuilt is not a dependency of this/my project. 
Next I would just put a run script inside `package.json` which looks like below (see `package.json` inside this repo):

`"start": "xvfb-maybe electron -v"`

When I run `npm start`, also inside VM(vagrant):

```bash
Alfreds-MacBook-Pro:electron-version alfredwesterveld$ npm start

> electron-version@1.0.0 start /Users/alfredwesterveld/electron/electron-version
> xvfb-maybe electron -v

v1.2.2
```