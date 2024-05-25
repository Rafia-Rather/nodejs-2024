// HTTP Module

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our Node home page");
    return;
  }
  if (req.url === "/about") {
    res.end("Here is our brief history.");
    return;
  }

  res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for.</p>
    <a href="/">Back home</a>
  `);
  // setup return
  // if / else if / else
});

server.listen(5000);
