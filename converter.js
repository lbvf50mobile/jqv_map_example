// https://www.npmjs.com/package/jqvmap-svgconverter
var fs = require('fs')
var svg = fs.readFileSync("map.svg",'utf8')
var jqvmapSvgconverter = require("jqvmap-svgconverter")
var options = jqvmapSvgconverter.convertString(svg);
fs.writeFileSync("map.js",options);
// console.log(svg)