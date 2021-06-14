const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema ({
    // _id: { type: String, required: true},
    title: { type: String, required: true},
    description: { type: String, required: true},
    image: { type: String, required: true},
    publishDate: { type: String, required: true},
    category: { type: String, required: true}
})

const News = mongoose.model('News', NewsSchema, 'weatherInfo');

module.exports = News;