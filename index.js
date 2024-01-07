// index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");
const bcrypt = require('bcrypt')

require('dotenv').config()


/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";


/**
 *  App Configuration
 */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

/**
 * Routes Definitions
 */

//index es el nombre del archivo .pug pero sin la extención
//la syntax es res.render("archivo en el root",{info que se va a pasar a la pag desde el server})

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home"
  })
});

app.get("/portraits", (req, res) => {
  res.render("portraits", {
    title: "Portraits",
    userProfile: {
      nickname: "Auth0"
    }
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me"
  })
})

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact"
  })
})

app.get("/adminlogin", (req, res) => {
  res.render("./admin/login", {
    title: "Login"
  })
})


app.get("/register", (req, res) => {

  const connection = require('./test_db_connection')
  connection.query('SELECT * FROM users', function (error, results, fields) {
    if (error) {
      console.error('Error executing MySQL query: ' + error.stack);
      return res.status(500).send('Error executing MySQL query');
    }
    res.send(results);
  });

})


/**
 * Server Activation
 */
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});