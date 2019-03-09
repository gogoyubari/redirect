var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({
	target: 'http://192.168.1.5:7000',
});

proxy.listen(8080);

proxy.on('error', function(err, req, res) {
  res.writeHead(500, {
    'Content-Type': 'text/plain',
  });
  res.end('Something went wrong. And we are reporting a custom error message.');
});