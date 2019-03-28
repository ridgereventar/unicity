// node.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Setup: 
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const db = "mongodb+srv://ridgerev:unicity1521@unicity-cluster-r8j9k.mongodb.net/test?retryWrites=true";
mongoose
    .connect(db, {useNewUrlParser: true})
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
app.post('*/api/users', (req, res) => {
    const newUser = new User({
       fname: req.body.fname, 
       lname: req.body.lname,
       username: req.body.username, 
       email: req.body.email,
       password: req.body.password, 
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

// ANNOUNCEMENTS: 

const Announcement = require('./models/Announcement');

// @route GET api/announcements (get ALL announcements from db)
app.get('*/api/announcements', (req, res) => {
    Announcement.find().then(announcemnets => res.json(announcemnets));
});

// @route POST api/announcements (create an Announcement)
app.post('*/api/announcements', (req, res) => {
    const newAnn = new Announcement({
       title: req.body.title, 
       content: req.body.content,
       author: req.body.author, 
       role: req.body.role
    }); 
    newAnn.save().then(ann => res.json(ann));
});



// Port and Listen: 
const port = process.env.PORT || 5000; 
app.listen(port, () => console.log(`Server listening on port ${port}... `));