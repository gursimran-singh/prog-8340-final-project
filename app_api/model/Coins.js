const mongoose = require('mongoose');

const coinsSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        price:{
            type:String,
            required:true
        },
        marketCap:{
            type:String,
            required:true
        },
        volume:{
            type:String,
            required:true
        },
        quantity:
        {
            type:String,
            required:true
        },
        image:{
            type:String
        },
        abbre:
        {
            type:String
        },
        isFeatured:
        {
            type:Boolean,
            required:true
        },

});
mongoose.model('Coin', coinsSchema, 'Coins');