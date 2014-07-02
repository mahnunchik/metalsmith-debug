
var util = require('util');
var debug = require('debug');

var debugSource = debug('metalsmith:source');
var debugDestination = debug('metalsmith:destination');
var debugMetadata = debug('metalsmith:metadata');
var debugFiles = debug('metalsmith:files');


/**
 * For consistency with `debug` module
 */

var useColors = debug.useColors();

function inspect(obj) {
  return '\n' + util.inspect(obj, {colors: useColors});
}


/**
 * A Metalsmith plugin to debug Metalsmith and plugins.
 *
 * @return {Function}
 */

module.exports = function plugin() {

  return function(files, metalsmith, done) {

    debugSource('"%s"', metalsmith.source());
    debugDestination('"%s"', metalsmith.destination());

    debugMetadata('', inspect(metalsmith.metadata()));
    debugFiles('', inspect(files));

    done();
  };
};
