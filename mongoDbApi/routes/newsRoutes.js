const router = require('express').Router()
const News = require('../models/News');

router.get('/getNews', (req, res) => {
    News.find((err, result) => {
        if(err) throw err;
        else res.send(result);
    })
})

router.get('/getSports', (req, res) => {
    News.find({'category' : 'sports'}, (err, result) => {
        if(err) res.send('Error deleting document!!');
        else res.send(result);
    })
})

router.post('/addNews', (req, res) => {
  const { title, description, image, publishDate, category} = req.body
  console.log("req.body",req.body)
  News.create(req.body, (err, result) => {
    if(err) {
        res.send('Error inserting document!!')
        console.log("err", err)
    }
    else{
        res.send(
            { message : 'Document inserted successfully!!'});
            console.log("res server", res)
    }
})
})

// Deletes news by title. You must always use the same title
router.delete('/delete/:title', (req, res) => {
    let title = req.params.title;
    console.log(title);
    News.findOneAndDelete({"title" : title}, (err, result) => {
        if(err) res.send('Error deleting document!!');
        else res.send({ message : 'Document deleted successfully!!'});
        
    })
})

// Searches for news by title. You must always use the same title
router.put('/updateNews',(req,res)=>{
    News.findOneAndUpdate({"title":req.body.title},{
            $set:{
                title: req.body.title,
                description: req.body.description,
                image: req.body.image,
                publishDate: req.body.publishDate,
                category: req.body.category
            }
        },{
            upsert:true
        },(err,result) => {
            if(err) return res.send(err);
            res.send(result)
        })
})

module.exports = router;