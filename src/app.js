const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.port || 80;

// Public Static Path
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

app.set("views", templatePath);
app.set("view engine", "hbs");
hbs.registerPartials(partialPath);

app.use(express.static(staticPath));

// Routing
app.get("", (req, res) =>{
    res.render("index");
});

app.get("/about", (req, res) =>{
    res.render("about");
});

app.get("/weather", (req, res) =>{
    res.render("weather");
});

app.get("*", (req, res) =>{
    res.render("404error", {
        errMsg : "Oops !!! Page Not Found "
    })
})

app.listen(port, () =>{
    console.log(`listening on the port at ${port}`);
});