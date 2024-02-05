const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require("./routes/routes");
app.use(bodyParser.urlencoded());
app.set("view engine","ejs")
app.use(router);

app.listen(3000);