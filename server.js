var express = require("express");
var cookie = require("cookie-parser");
var body = require("body-parser");
var multer = require("multer");
var fs = require("fs");
var header=fs.readFileSync("header.html");
var footer=fs.readFileSync("footer.html");

var app = express();

app.use(express.static("public"));

app.listen(8081, function () {
    console.log("");
});
app.get("/", function (req, res) {
    fs.readFile("index.html", function (err, data) {
        res.send(header.toString()+data.toString()+footer.toString());

    });

});
app.get("/index", function (req, res) {
    fs.readFile("index.html", function (err, data) {
        res.send(header.toString()+data.toString()+footer.toString());

    });

});

app.get("/about", function (req, res) {
    fs.readFile("about.html", function (err, data) {
        res.send(header.toString()+data.toString()+footer.toString());

    });
});

app.get("/courses", function (req, res) {
    fs.readFile("courses.html", function (err, data) {
        res.send(header.toString()+data.toString()+footer.toString());

    });
});


app.get("/trainers", function (req, res) {
    fs.readFile("trainers.html", function (err, data) {
        res.send(header.toString()+data.toString()+footer.toString());

    });
});


app.get("/events", function (req, res) {
    fs.readFile("events.html", function (err, data) {
        res.send(header.toString()+data.toString()+footer.toString());

    });
});


app.get("/pricing", function (req, res) {
    fs.readFile("pricing.html", function (err, data) {
        res.send(header.toString()+data.toString()+footer.toString());

    });
});

app.get("/course-details", function (req, res) {
    fs.readFile("course-details.html", function (err, data) {
        res.send(header.toString()+data.toString()+footer.toString());

    });
});


app.get("/contact", function (req, res) {
    fs.readFile("contact.html", function (err, data) {
        res.send(header.toString()+data.toString()+footer.toString());

    });
});









