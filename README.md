# metalsmith-debug

A Metalsmith plugin to debug Metalsmith and plugins.

## Installation

```
$ npm install metalsmith-debug --save
```

## CLI Usage

Install via npm and then add the `metalsmith-debug` key to your `metalsmith.json`:

```json
{
  "plugins": {
    "metalsmith-debug": {}
  }
}
```
Then you can:

```
$ debug=metalsmith:* metalsmith
```
To see all debug messages.

Or you can use namespaces to see only necessary messages:

```
$ debug=metalsmith:files metalsmith
```

Available namespaces:

* metalsmith:source
* metalsmith:destination
* metalsmith:metadata
* metalsmith:files

## Javascript Usage

Pass `metalsmith-debug` plugin to Metalsmith with the `use` method:

```js
var debug = require('metalsmith-debug');

metalsmith.use(debug());
```

## License

[MIT](https://github.com/mahnunchik/metalsmith-debug/blob/master/LICENSE)
