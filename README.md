# metalsmith-debug

A Metalsmith plugin to debug Metalsmith and plugins. It is a thin wrapper around [debug](https://github.com/visionmedia/debug) making use of its namespaces and logging functionality.

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

## Available namespaces

Available namespaces defined by `metalsmith-debug` are:

* metalsmith:source
* metalsmith:destination
* metalsmith:metadata
* metalsmith:files
* metalsmith:log

To see debug messages, you must set a `DEBUG` environment variable to the desired namespaces.

For all debug messages you can define:

```
$ DEBUG=metalsmith:* metalsmith
```

Or you can use namespaces to see only necessary messages:

```
$ DEBUG=metalsmith:files metalsmith
```

If you want to debug a specific plugin you must name it:

```
$ DEBUG=metalsmith-collections metalsmith
```

You can specify multiple namespaces to debug by separating them with commas:

```
$ DEBUG=metalsmith:source,metalsmith-collections metalsmith
```

## Javascript Usage

Pass `metalsmith-debug` plugin to Metalsmith with the `use` method:

```js
var debug = require('metalsmith-debug');

metalsmith.use(debug());
```

## Options

In case you want to use `.use(debug())` several times in your Metalsmith chain you have some options to switch off some of the `metalsmith:*` namespaces. Additionally, you can add some arbitrary log text. Furthermore you can apply file matching if you only want to monitor certain files. The `match` option is based on the globbing patterns implemented by [multimatch](https://github.com/sindresorhus/multimatch).

```js
var debug = require('metalsmith-debug');

metalsmith.use(debug({
  log: "first debug",      // any comment you like
  metadata: false,         // default: true
  source: false,           // default: true
  destination: false,      // default: true
  files: true,             // default: true
  match: "**/*.md"         // default: all files
}));
```



## License

[MIT](https://github.com/mahnunchik/metalsmith-debug/blob/master/LICENSE)
