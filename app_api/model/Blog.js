const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        'default': 'Blog'
    },
    image: String,
    excerpt: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publishedDate: {
        type: String,
        'default': '1/1/1970 00:00:00'
    }
});
mongoose.model('BitCoins', blogSchema, 'blogs');