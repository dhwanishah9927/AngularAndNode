const router = require('express').Router()
const contact = require('../models/userContact');

router.post('/addUserQuery', (req, res) => {
    const {email, emailBody} = req.body;
    contact.create(req.body, (err, result) =>{
        if(err){
            res.send('unable to insert the user email.')
            console.log("error in insert", err);
        } else {
            res.send({ message: 'user contact/email was inserted properly.'})
            console.log("data was inserted properly.");
        }
    })
})

module.exports = router;