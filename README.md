# JS/TS Phaser 3 Course Notes

### Notes

-   WebGL is the default renderer if you use `Phaser.AUTO` as your type configuration. It's a Web Graphics library used in browsers a lot and most JavaScript/TypeScript games will use it for rendering 2d/3d graphics.
-   `phsyics: { default: 'arcade' }` is a good default plugin and manages simple physics simulation.
-   `preload` function phase is self-explanatory. Load assets like images, music, animations, and etc.
    -   context of `this` is a `Scene` object. It contains functions and properties for us to use setting up our games.
-   `create` function initializes memory stuff and interactions and basic setups.
-   default coordinate system is a "0,0" of the top left just like html elements.
    -   you can use the `.setOrigin()` function on images to alter the behavior.  The top left coords are `0,0` with the bottom right being `1,1` so use fractions to traverse your canvas.
-   `update(time, delta)` is called after every frame.  It generally runs at 60fps so that's 60 calls a second.
    -   `delta` is the time from the last frame

&nbsp;

### Versioning Notes

`npm install --save phaser@3.24.1` the version the course will use.

If you see a similar error mentioning the "assets" fix is very simple:

After the project is initialized, go to `webpack.common.js`

And change CopyPlugin like this:

```js
new CopyPlugin({
	patterns: [
		{
			from: path.resolve(__dirname, 'assets'),
			to: path.resolve(__dirname, 'build/assets')
		}
	]
});
```
