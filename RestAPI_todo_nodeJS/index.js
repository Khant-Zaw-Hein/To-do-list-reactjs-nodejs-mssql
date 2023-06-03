
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// var router = express.Router();
// app.use('/api', router);

// import routes
const loginRoutes = require("./routes/Login");
const todoRoutes = require("./routes/Todo");
app.use("/login", loginRoutes);
app.use("/todo", todoRoutes);

//later try with this two instead of bordyParser


var port = process.env.PORT || 4200;
app.listen(port);
console.log('todolist api project is running on port: ' + port);