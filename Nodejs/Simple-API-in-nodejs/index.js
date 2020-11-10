const http = require('http');
const fs = require('fs');

const data = fs.readFileSync(`${__dirname}/user-api/user.json`, 'utf-8');

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, { "Contet-type": "text/html" });
        res.write("Welcome to Home page");
        res.end();
    } else if (req.url == "/api/user") {
        console.log(req.url);
        console.log("We got the data");
        res.writeHead(200, { "Content-type": "application/json" });
        res.write(data);
        res.end();
    } else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.write("<p>404 page not found </p>")
        res.end();
    }
});


server.listen("8800", "127.0.0.1", () => {
    console.log("Server is running in port: 8800");
})