const mongoose = require('mongoose');

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

});
mongoose.model('Coin', coinsSchema, 'Coins');