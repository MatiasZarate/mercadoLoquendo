const routes = require("./routes/routes");

const express = require('express');
const app = express();
const path = require("path");

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use("/", routes);

app.listen(3007, () => {
    console.log("Disculpa, como yego a loquendo city?")
})