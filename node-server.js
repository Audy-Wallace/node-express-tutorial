const http = require("http");
const server = http.createServer();
const port = 3001;

const onRequest = (req, res) => {
    res.writeHead(200, {
    'Content-Type': 'text/html' 
    });
    res.write('hello, world!');
    res.end();
};

server.on('request', onRequest);

server.listen(port, () => {
    console.log(`App listening on port ${3000}`);
});