const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            'default':'Blog'
        },
        image:String,
        excerpt:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        publishedDate:{
            type:Date,
            'default':Date.now
        }
    }
);
mongoose.model('blogModel',blogSchema);