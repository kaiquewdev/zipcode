(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (__dirname){
var fs = require('fs');
var trie = null;

/**
 * Parses zip_codes.csv and creates a trie for fast lookups
 */
function loadData() {
  var data = fs.readFileSync(__dirname + '/zip_codes.csv', 'utf8');
  var lines = data.split('\r\n');
  var trie = {};

  lines.forEach(function(line) {
    var parts = line.split(',');
    var zip = parts[0], city = parts[1], state = parts[2];
    var node = trie;
  
    for (var i = 0; i < zip.length; i++) {
      var num = zip[i];
      var pos = node[num];
      if (pos == null)
        node = node[num] = (i === zip.length - 1) ? [city, state] : {};
      else
        node = node[num];
    }
  });
  
  return trie;
}

/**
 * Lookup a zipcode
 * Returns data in [city, state] format
 */
exports.lookup = function(zip) {
  if (zip.length < 5)
    return null;
    
  if (!trie)
    trie = loadData();
    
  var node = trie;
  for (var i = 0; i < zip.length; i++) {
    var node = node[zip[i]];
    if (node == null)
      return null;
  }
  
  return Array.isArray(node) ? node : null;
};

}).call(this,"/")
},{"fs":2}],2:[function(require,module,exports){

},{}]},{},[1]);

},{"fs":1}]},{},[2]);
