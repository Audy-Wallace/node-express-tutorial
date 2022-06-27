const http = require("http");
const port = 3001;
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write("<p>hello, world!</p>")
    res.end();
});
server.listen(port, () => {
    console.log(`App listening on port ${3001}`);
});