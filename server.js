//Importing express and body-parser packages/modules
const path = require('path');
const _express = require("express");
const bodyParser = require("body-parser");

//Initialize express
//Create an express application by calling the express function
const app = _express();

//Setting our view engine to pug
app.set('view engine', 'pug')

//views is the folder where we shall be having our pug files & set path to views
app.set('views', path.join(__dirname, 'views')); 


/*The urlencoded method within body-parser tells body-parser 
to extract data from the <form> element and add 
them to the body property in the request object.*/
app.use(bodyParser.urlencoded({ extended: true }));

/*Serving static files such as images, CSS files, and JavaScript files, 
using the express.static()*/
app.use(_express.static(path.join(__dirname, 'public')));


app.get('/welcome', (req, res) => {
  res.render('home');
}); 

// app.post('/welcome', (req, res) => {
//   // console.log(req.body);
//   res.render('home');
// });

// app.get('/myform', (req, res) => {
//   res.render('form');
// }); 

// app.post('/myform', (req, res) => {
//     console.log(req.body);
//     res.render('thankYou');
// });
//Serving the server with an html page using sendFile() method
app.get("/registrationFO", (req, res) => {
  res.sendFile(__dirname + "/registrationFO.html");
});

app.get("/agricOfficer", (req, res) => {
  res.sendFile(__dirname + "/agricOfficer.html");
});

//
app.post("/registrationFO", (req, res) => {
  console.log(req.body);
  res.send("Successfully Submitted Registration Form");
});

app.listen(3000);
//() => console.log('listening on port 3000');
