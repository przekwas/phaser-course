# JS/TS Phaser 3 Course Notes

### Notes

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
