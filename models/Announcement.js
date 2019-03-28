const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnnouncementSchema = new Schema({
    title: {type: String, required: true}, 
    content: {type: String, required: true},
    author: {type: String, required: true}, 
    role: {type: String, required: true}
});

module.exports = Announcement = mongoose.model('announcement', AnnouncementSchema);