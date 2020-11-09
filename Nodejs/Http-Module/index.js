const http = require('http');
const port = 5555;
const server = http.createServer((req, res) => {

    console.log(req.url);
    if (req.url == "/") {
        res.writeHead(409, { "Content-type": "text/html" });
        res.write("Welcome to my website");
        res.end();
    } else if (req.url == "/mayur") {
        res.writeHead(500, { "Content-type": "text/html" });
        res.write("MAYUR IS HERE ");
        res.end();
    } else {
        res.writeHead(404);
        res.write("<p> Page Not Found ! <br> 404</p>");
        res.end();
    }

});



server.listen(port, "127.0.0.1", () => {
    console.log("Server is running in port :" + port);
})