// Express.js is a Node.js framework.It's the most popular framework as
// of now(the most starred on NPM).ExpressJS is a web application framework
// that provides you with a simple API to build websites, web apps and back ends.

const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to home page");
});

app.get("/mayur", (req, res) => {
    res.send("Hello Here is Mayur");
});



app.listen("5555", () => {
    console.log("App is running in port 5555");
})