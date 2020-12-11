const express = require('express');
const app = express();
app.get("/", (req, res) => {
    res.send("<h1>Server is running<h1>" + req.url);
});

app.get("/about", (req, res) => {
    res.status(200).send("About Page");
});

app.get("/detail", (req, res) => {
    res.json([{
        name: "Mayur",
        address: "BIhar",
        age: "24",
        mobile: "780186121"
    }, {
        name: "sonu sharma",
        address: "Begusarai",
        age: "00",
        mobile: "780186121"
    }])
});


app.listen("5555", () => {
    console.log("Running on port 5555");
})