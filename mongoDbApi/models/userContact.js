const mongoose = require('mongoose');

const userContact = new mongoose.Schema({
    email :{type:String, required: true },
    emailBody :{ type:String, required: true}
})

const contact = mongoose.model('contact', userContact, 'userContactInfo');

module.exports = contact;