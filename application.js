var http = require('http')
    , PORT = process.env.PORT || 27372

var server = http.createServer(function(req, res) {
    if (req.url === '/') {
        res.writeHead(200, {'content-type': 'text/html'});
        res.end(
            '<p><h2>Hello welcome to Beginner session</h2></p>'
        );
    } else {
        res.writeHead(404, {'content-type': 'text/plain'});
        res.end('404');
    }
});

server.listen(PORT, function() {
    console.info('listening on http://127.0.0.1:'+PORT+'/');
});
