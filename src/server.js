var express = require ("express");
var app = express();
var router = express.Router();
 nodemailer = require ('nodemailer');

/*Route / (index)*/
var app = express();
    app.set('view engine', 'ejs');
    app.use(express.static('public'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    var port = 8080;
    app.get('/', function (req, res) {
      res.render('index');
    });

