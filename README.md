Converting img into JQVmaps

1. 0hr22m Read JQVmaps (https://www.10bestdesign.com/jqvmap/) docs and creat SVG file with https://vectr.com/ 

2. 0hr30 Create converter.js script using(https://github.com/stadline/jqvmap-svgconverter), it's converts SVG -> json. Found that vertr.com create SVG with path (https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths) wraped by `defs` (https://developer.mozilla.org/en-US/docs/Web/SVG/Element/defs) that leads to empty `path:` property in output json. Have to fix it in editor.

3. 0hr50 Create jqvmap example, from json create `jquery.vmap.gotham.js`. Found that `map.js` that stores json from `convertor.js `leads to `Uncaught TypeError: Cannot read property 'name' of undefined` error on page. Rearange it using `jquery.vmap.world.js`. Now it fixed greatelly and jsfiddle created.


Long and unedited story: 

Now I added converting `README.md` ==> `readme.html`
And fixed something in repeating content from README.md. Let's test
One more test

add https://github.com/livereload/livereload-js
solve using https://browsersync.io/docs/command-line
browser-sync start --proxy "http://127.0.0.1:8080 --files "readme.html"

And it's works!
Do it? Let's try

Why it dose not works?
One more try And it's still dump. Hey

So it dose not works. and it's too late I going to continue later.

I think this is because of bad working of `http-server` it return old verstion of page.

And now I try to do this `browser-sync start --server --files "*.html"`
Still problem?

After I add link to readme from index.html it start to work. do it?
Not it dose not. Only index.html works.


