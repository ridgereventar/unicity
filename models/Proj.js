const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjSchema = new Schema({
    projectname: {type: String, required: true}, 
    creator: {type: String, required: true},
    description: {type: String, required: true}, 
    lookingfor: {type: String, required: false},
    members: {type: String, required: false}

});

module.exports = Proj = mongoose.model('proj', ProjSchema);