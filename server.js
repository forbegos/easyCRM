// Bring in my modules
const path = require("path");
const express = require("express");
const sesstion = require("express-session");
const expressHandlebars = require("express-handlebars");
const routes = require("/controllers");
const helpers = require("./utils/helpers");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Setup handlebars engine with helpers

const hbs = expressHandlebars.create({ helpers });

const sess = {
  secret: "Super secret decoder ring",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({ db: sequelize }),
};

app.use(session(sess));

// Indicate templates to be used by express

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(_dirame, "public")));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening in port ${PORT}`));
});
