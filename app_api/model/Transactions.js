const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        plan: {
            type: String,
            required: true
        },
        startDate: {
            type: Date,
            'default': Date.now
        },
        endDate: {
            type: Date,
            required: true
        },
        price: {
            type: String,
            required: true
        }

    });
mongoose.model('Transaction', transactionSchema);