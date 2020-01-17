var express = require('express')
var path = require('path')
//var liveServer = require("live-server")
var {serveBaseQ3, serveIndexJson} = require('./content.js')
var {serveCompressed, compressFile} = require('./compress.js')
var express = require('express')
var app = express()

express.static.mime.types['wasm'] = 'application/wasm'

/*
var params = {
    port: 8080, // Set the server port. Defaults to 8080.
    host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
    root: "./", // Set root directory that's being served. Defaults to cwd.
    open: false, // When false, it won't load your browser by default.
    ignore: 'scss,my/templates', // comma-separated string for paths to ignore
    file: "./misc/quakejs/bin/index.html", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
    wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
//    mount: [['/components', './node_modules']], // Mount a directory to a route.
    watch: false,
    logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
    middleware: [
			express.static(path.join(__dirname, './index.html'), { extensions: ['html'] }),
			express.static(path.join(__dirname, '../../../build/release-js-js'), { extensions: ['wasm'] }),
      serveIndexJson,
      serveBaseQ3,
      serveCompressed
		] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
}

liveServer.start(params)
*/
app.use('/', express.static(path.join(__dirname), { extensions: ['html'] }))
app.use('/', express.static(path.join(__dirname, '../../../build/release-js-js'), { extensions: ['wasm'] }))
app.use(serveIndexJson)
app.use(serveBaseQ3)
app.use(serveCompressed)

app.listen(8080)
