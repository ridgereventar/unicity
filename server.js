// node.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Setup: 
const app = express();
app.use(bodyParser.json());
const db = "mongodb+srv://ridgerev:unicity1521@unicity-cluster-r8j9k.mongodb.net/test?retryWrites=true";
mongoose
    .connect(db)
    .then(() => console.log('UnicityDB Connected...'))
    .catch(err => console.log(err));

// ROUTES: ---------------------------------------------------------------

// USER: 

const User = require('./models/User');

// @route GET api/users (get ALL users from db)
app.get('*/api/users', (req, res) => {
    User.find().then(users => res.json(users));
});

// @route POST api/users (create an Item)
app.post('/api/users', (req, res) => {
    const newUser = new User({
       fname: req.body.fname, 
       lname: req.body.lname,
       username: req.body.username, 
       email: req.body.email,
       password: req.body.password, 
       role: req.body.role, 
       phone: req.body.phone
    }); 
    newUser.save().then(user => res.json(user));
});

// @route DELETE api/users (Delete a user)
app.delete('/api/users/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => user.remove()
        .then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
})


// Port and Listen: 
const port = process.env.PORT || 5000; 
app.listen(port, () => console.log(`Server listening on port ${port}... `));