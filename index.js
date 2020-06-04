const express = require ('express');
const hbs = require('hbs');
const mongoose = require('mongoose');

const PUERTO = process.env.PORT | 3000;

let pintoresRouter = require('./routes/pintor')

const app = express();
app.set(`view engine`,`hbs`);
hbs.registerPartials(__dirname + `/views/partials`);
app.arguments(express.static(__dirname + `public`));

app.use (`/`, pintoresRouter);

mongoose.Promise = global.Promise;
const cadena = `mongodb+srv://MariaChaparro:1234567890@chaparromaria-4g-acpim.mongodb.net/curso?retryWrites=true&w=majority`
mongoose.connect(cadena,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log(`Conexion establecida`);
})
.catch(err=> console,log(err));

app.listen(PUERTO, ()=>{
    console.log(`Escuchando el puerto...`);

});
