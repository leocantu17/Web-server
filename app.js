require('dotenv').config();
const express = require('express')
const  hbs = require('hbs');

const app = express()
const port =process.env.PORT;

//Handlebars
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contendio estatico
app.use(express.static('public') );


app.get('/', function (req, res) {
  res.render('home',{
    nombre:'Leonardo armando',
    titulo:'Curso de node'
  });
});

app.get('/home', function (req, res) {
  res.render('home',{
    nombre:'Leonardo armando',
    titulo:'Curso de node'
  });
});

app.get('/hola-mundo', function (req, res) {
    res.send('Hola mundo desde su respectiva ruta');
  });

  
  app.get('/generics', function (req, res) {
    res.render('generics');
  });

  
  app.get('/elements', function (req, res) {
    res.render('elements');
  });
  
  /*app.get('*', function (req, res) {
    res.sendFile(__dirname+ '/public/404.html');
  });*/

  app.listen(port, () =>{
      console.log(`Example app listening at http://localhost:${port}`)
  })
  

