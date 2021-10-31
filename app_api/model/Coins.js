const mongoose = require('mongoose');

const coinsSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        marketCap:{
            type:Number,
            required:true
        },
        volume:{
            type:Number,
            required:true
        },
        quantity:
        {
            type:Number,
            required:true
        },
        image:{
            type:String
        },
        abbre:
        {
            type:String
        }

    }
);
mongoose.model('BitCoins1',coinsSchema, 'Coins');