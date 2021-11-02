const mongoose = require('mongoose');


const plansSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        features: {
            type: Array,
            required: true
        }

    });


mongoose.model('Plan', plansSchema);