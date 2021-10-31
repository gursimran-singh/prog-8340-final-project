const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            'default':'Blog'
        },
        image:String,
        excerpt:{
            type:String,
            required:true
        },
        desc:{
            type:String,
            required:true
        },
        author: {
            type: String, 
            required: true
        },
        publishedDate:{
            type:Date,
            'default':Date.now
        }
    }
);
mongoose.model('BitCoins',blogSchema, 'blogs');