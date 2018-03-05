Converting img into JQVmaps

1. 0hr22m Read JQVmaps (https://www.10bestdesign.com/jqvmap/) docs and creat SVG file with https://vectr.com/ 

2. 0hr30 Create converter.js script using(https://github.com/stadline/jqvmap-svgconverter), it's converts SVG -> json. Found that vertr.com create SVG with path (https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths) wraped by `defs` (https://developer.mozilla.org/en-US/docs/Web/SVG/Element/defs) that leads to empty `path:` property in output json. Have to fix it in editor.

3. 0hr50 Create jqvmap example, from json create `jquery.vmap.gotham.js`. Found that `map.js` that stores json from `convertor.js `leads to `name` error on page. Rearange it using `jquery.vmap.world.js`. Now it fix great and create jsfiddle.
