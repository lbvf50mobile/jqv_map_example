// https://www.npmjs.com/package/jqvmap-svgconverter
var fs = require('fs')
var svg = fs.readFileSync("map.svg",'utf8')
var jqvmapSvgconverter = require("jqvmap-svgconverter")
var options = jqvmapSvgconverter.convertString(svg);
console.log(options)
fs.writeFileSync("map.js",JSON.stringify(options));
// console.log(svg)