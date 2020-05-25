const express = require("express");

const app = express();

const port = 8080

app.get("/", (req, res) => {
              return res.send("Home Page");
});

const admin = (req, res) => {
              return res.send("This is Admin Dashboard");
};

const isAdmin = (req, res, next) => {
              console.log("isAdmin is running") 
              next();
};

const isLoggedIn = (req, res, next) => {
              console.log("isLoggedIn is running") 
              next();
};


app.get("/admin", isLoggedIn, isAdmin, admin);



app.get("/login", (req, res) => {
              return res.send("You are visiting a login Route");
});

app.get("/signup", (req, res) => {
              return res.send("You are visiting signedup route");
});

app.get("/logout", (req, res) => {
              return res.send("You can logout your self");
});

app.listen(port, () => {
              console.log("Server is up and running...");
});
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))