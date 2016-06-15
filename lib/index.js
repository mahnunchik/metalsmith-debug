
var debug            = require('debug');
var multimatch       = require('multimatch');
var util             = require('util');


var debugSource      = debug('metalsmith:source');
var debugDestination = debug('metalsmith:destination');
var debugMetadata    = debug('metalsmith:metadata');
var debugFiles       = debug('metalsmith:files');
var debugLog         = debug('metalsmith:log');


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

module.exports = function plugin(options) {
  options = (options === undefined) ? {} : options;
  options.metadata = (options.metadata === undefined) ?
                     true : options.metadata;
  options.source = (options.source === undefined) ?
                   true : options.source;
  options.destination = (options.destination === undefined) ?
                        true : options.destination;
  options.files = (options.files === undefined) ? true : options.files;
  options.match = (options.match === undefined) ? '' : options.match;
  options.log = (options.log === undefined) ? false : options.log;


  return function(files, metalsmith, done) {

    if (options.log) {
      debugLog('"%s"', options.log);
    }

    if (options.source) {
      debugSource('"%s"', metalsmith.source());
    }

    if (options.destination) {
      debugDestination('"%s"', metalsmith.destination());
    }

    if (options.metadata) {
      debugMetadata(inspect(metalsmith.metadata()));
    }


    var files2log = {};

    if (options.match.length) {
      Object.keys(files).forEach(function(file){
        if (multimatch(file, options.match).length) {
          files2log[file] = files[file];
        }
      });
    } else {
      files2log = files;
    }

    if (options.files) {
      debugFiles(inspect(files2log));
    }

    done();
  };
};
