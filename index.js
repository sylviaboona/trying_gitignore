//importing express package/module
const path = require("path");
const _express = require("express");
const bodyParser = require("body-parser");
const indexRoutes = require("./routes/indexRoutes")
require('dotenv').config();
const mongoose = require('mongoose');
//Read about factories -

//initialize express/instantiate
//create an express application by calling the express function
const app = _express();

//DATABASE CONNECTION
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

// using get() method which takes two parameters, endpoint ("/") and a call back with parameters (req, res)
//specify what to do when user hits "/" home page
// app.get('/', (req, res) => {
//     res.send('HomePage! Hello World.')
// })

//Configuration settings
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views')) 

//Middleware settings
app.use(_express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

//Simple request time logger for a specific route
app.use((req, res, next) => {
  console.log('A new request received at ' + Date.now());
  next();
});

app.use('/', indexRoutes)

// app.get('/welcome', (req, res) => {
//   res.render('home');
// }); 
// app.post('/welcome', (req, res) => {
//   // console.log(req.body);
//   res.render('form');
// });

app.get('/myform', (req, res) => {
  res.render('form1');
}); 

app.post('/myform', (req, res) => {
    console.log(req.body);
    res.render('thankYou');
});
// //specify what to do when user hits "/about" route/endpoint/path
// app.get('/about', (req, res) => {
//     res.send('About Us Page! Nice.')
// })


//Serving the server with an html page using sendFile() method
// app.get("/index", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });
app.get("/new", (req, res) => {
  res.sendFile(__dirname + "/new.html");
});

//Put is used to update data (Update operation)
app.put('/index', (req, res) => {
    res.send('Got a PUT request at /index')
})

//delete is used to delete data (delete operation)
app.delete('/index', (req, res) => {
  res.send('Got a DELETE request at /index')
})

//Show path params
app.get('/index/:name', (req, res) => {
  res.send('Hello' + req.params.name);
});

//Query parameters
app.get('/index', (req, res) => {
  res.send('This is class ' + req.query.class + ' cohort ' + req.query.cohort);
});


//POST
app.post("/index", (req, res) => {
  console.log(req.body);
  res.send("Successfully submitted");
});
//creating a server - it expects requests on port number 3000

//Customizing an error page for all non exixting routes
// app.get('*', (req, res) => {
//   res.send('error page');
// });

//Creating a server on port 3000
app.listen(3000);
//() => console.log('listening on port 3000');
