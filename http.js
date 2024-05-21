const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello, world!!');
  } else if (req.url === '/about') {
    res.end('Welcome to the about page');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(`<h1>Oops!!</h1>
            <p>We can't find the page you are looking for</p>
            <a href="/">Back home</a>`);
  }
});

server.listen(5050)
