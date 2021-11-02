const mongoose = require('mongoose');

<<<<<<< HEAD
const coinsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    marketCap: {
        type: Number,
        required: true
    },
    volume: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    abbre: {
        type: String
    },
    isFeatured: {
        type: Boolean,
        required: true
    },
=======
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
        },
        isFeatured:
        {
            type:Boolean,
            required:true
        },
>>>>>>> 99deb4f9e1c07372bc40cb5ef50bdda459ad2b98

});
mongoose.model('Coin', coinsSchema, 'Coins');