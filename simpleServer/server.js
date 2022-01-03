const http = require('http');
const url = require('url')
const path = require('path')
const fs = require('fs')



// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const mimeTypes = {
    "html":"text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpg",
    "png": "image/png",
    "js": "image/javascript",
    "css": "text/css",  
};

http.createServer(function (req, res){
    // const baseURL = req.protocol + '://' + req.headers.host + '/';
    const baseURL = 'http' + '://' + req.headers.host + '/';

    var reqUrl = new URL(req.url, baseURL) 
    console.log(reqUrl)
    var stats;

    try {
        stats = fs.lstatSync(reqUrl)
        console.log(stats, 'this is the stats')
    }catch (e){
        res.writeHead(404, {'content-type': 'text/plain'});
        res.write('404 Not Found\n');
        res.end();
        return;
    }

    if (stats.isFile()) {
        var mimeType = mimeTypes[pathname(reqUrl).split("/").reverse()[0]];
        res.writeHead(200, {'content-type': MimeType})

        var filesStream = fs.createReadStream(reqUrl);
        filesStream.pipe(res);      
    }else  if (stats.isDirectory()){
        res.writeHead(302, {
            'location':'index.html'
        })
        res.end()
    }else{
        res.writeHead(500, {'content-type':'text/plain'});
        res.write('500 Internal Error\n')
        res.end()
    }
}).listen(1337)
