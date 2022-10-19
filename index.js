// index.js

/**
 * Required External Modules
 */

 const express = require("express");
 const path = require("path");
 

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
    res.render("index", { title: "Home" })
  });

  app.get("/user", (req, res) => {
    res.render("user", { title: "Profile", userProfile: { nickname: "Auth0" } });
  });

/**
 * Server Activation
 */

 app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });

