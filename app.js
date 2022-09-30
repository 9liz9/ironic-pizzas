const express = require("express");
const hbs = require("hbs");

const app = express();

// Make available the content of the directory public
app.use(express.static('public'));

app.set("views", __dirname + "/views"); //tells our Express app where to look for our views
app.set("view engine", "hbs"); //sets HBS as the template engine

hbs.registerPartials(__dirname + "/views/partials"); // config partials

// app.get("/", (request, response, next) => {
//     console.log("this is the homepage")
// }); request, response and next are objects


app.get("/", (request, response, next) => {
    console.log("this is the homepage");

    // response.send(`<h1>Hello World</h1> `);  Response with a string
    response.render("index");
});


app.get("/contact", (request, response, next) => {
    console.log("this is the contact page");
    response.render("contact-page");
});

// app.get("/pizzas/margherita", (request, response, next) => {
//     response.sendFile(__dirname + '/views/pizza-marguerita.html');
// });
// request, response, next

app.get("/pizzas/margherita", (request, response, next) => {
    // response.sendFile(__dirname + '/views/pizza-margherita.html');
    const data = {
        title: "Pizza Margherita",
        price: 8,
        imgFile: "margherita.jpeg",
        ingredients: ["tomato", "basilicum", "mozzarella"]
    }
    response.render("pizza-page", data);
});

// res.render(path, data) -------  path = name of the file 

app.get("/pizzas/carbonara", (request, response, next) => {
    const data = {
        title: "Pizza Carbonara",
        price: 9,
        imgFile: "carbonara.jpeg",
        // ingredients: ["guanciale", "cream", "egg", "mozzarella"]
    }

    response.render("pizza-page", data);
});

app.get("/pizzas/funghi", (request, response, next) => {
    const data = {
        title: "Pizza Funghi",
        // price: 10,
        imgFile: "funghi.jpeg",
        ingredients: ["funghi", "tomato", "mozzarella"]
    }
    response.render("pizza-page", data);
});

// app.get(path, callback);
// path = whenever we receive a get request on this path, execute the callback

app.listen(3000, () => console.log("My first app listening on port 3000!"));
