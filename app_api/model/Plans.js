const mongoose = require('mongoose');
const plansSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required:true
        },
        price: {
            type: Number,
            required:true
        },
        features:[String]

    }
);
mongoose.model('plansModel',plansSchema);