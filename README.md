# Electron-version

# Discontinued 

After research I have discovered this package is not needed thanks to xvfb-maybe package.

I would just put a run script inside my `package.json` as done right now in `package.json`

When I run npm start I will get the following output:

```bash
> electron-version@1.0.0 start /Users/alfredwesterveld/electron/electron-version
> xvfb-maybe electron -v

v1.2.2
```

Also when I run this inside VM (vagrant)