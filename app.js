const express= require('express');
const morgan = require('morgan');
const path= require('path');
const mysql= require('mysql2');
const cors = require('cors');
const myConnection= require('express-myconnection');
const app= express();

const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "localhost:3000", 
                    credentials: true
                }
            ]
        }
}
};

app.use(cors(
    config.application.cors.server
));



// rutas backend
const medicosRoutes = require('./rutas/medicos');



app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'localhost',
    user:'cristian_dev',
    password:'Cristian01227',
    port:3306,
    database:'examen'
}, 'single'));
app.use(express.urlencoded({extended: false}));

var bodyParser = require('body-parser');
 // create application/json parser
app.use(bodyParser.json());


//inicializando el server
app.listen(app.get('port'), () =>{
    console.log("PUERTO 3000");
});	
