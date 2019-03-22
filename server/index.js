const express = require('express');
const app = express();
const path = require('path');

// USE: 
app.use(express.json());

// for now practice with an array. but can use objects later.
const courses = [
    {id: 1, name: 'csci3001'},
    {id: 2, name: 'csci3002'},
    {id: 3, name: 'csci3003'},
];

 // PORT
app.set('port', process.env.PORT || 4000);

// GET: callback function = route handler
// app.get('/', function(req, res) { 
//     res.send("Hello world!!!");
// });

//Serve up build folder static files when you visit '/'
app.use(express.static(path.join(__dirname, '../build')));

app.get('/api/courses', (req, res) => {
    res.send(courses); 
});

// PARAMETERS: 
app.get('/api/courses/:id', (req, res) => {
    // display what id value was placed IN the url.
    const course = courses.find(c => c.id === parseInt(req.params.id));
    // validate
    if(!course) return res.status(404).send('Given ID was not found.');
    res.send(course);
});
app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params); // displays what id value was placed IN the url.
});

// will use package joi for validation
const Joi = require('joi');
function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}

// POST: Posting to the web server:
app.post('api/courses', (req, res) => {
    // validate
    const result = validateCourse(req.body);
    if(result.error) return res.status(400).send(result.error.details[0].message);
    
    // create the course and push and send.
    const course = {
        id: courses.length + 1, // in databases, the id will be automatically assigned
        name: req.body.name     // needs to be read from the request body
    };
    courses.push(course); //append to course array.
    res.send(course);
});

// UPDATING
app.put('/api/courses/:id', (req, res) => {
    // look up the course
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('Given ID was not found.');
    
    // validate
    const result = validateCourse(req.body);
    if(result.error) return res.status(400).send(result.error.details[0].message);
    
    // update the course
    course.name = req.body.name;
    res.send(course);
});

//DELETE
app.put('/api/courses/:id', (req, res) => {
    // look up the course
    const course = courses.find(c => c.id === parseInt(req.params.id));
    // validate
    if(!course) return res.status(404).send('Given ID was not found.');
    // Delete
    const index = courses.indexOf(course);    
    courses.splice(index, 1);   // database will have its own way of deleting.

    // return response to client
    res.send(course);
});

// SESSION TRACKING - keep data about user as they move between pages
// var session = require('express-session');
app.post('/processLogin', (req, res) => {
    // veriy login / validate
    // ... 
    // store username in the session: 
    req.session.username = username; 
    req.session.save();
});

// Listen on Port:
app.listen(app.get('port'), function() {
    console.log(`listening on ${app.get('port')}...`);
});


// Why this is better than the HTTP module seen before: 
// no need for the 'if' blocks. We define new routes using app.get()
