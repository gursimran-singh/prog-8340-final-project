const mongoose = require('mongoose');
const transactionsModel = mongoose.model('Transaction');


const getAllTransactions = function (req, res) {
    transactionsModel.find().exec(function (err, data) {
        if (err) {
            res
                .status(404)
                .json(err);
            return;
        }

        res
            .status(200)
            .json(data);
    });
};


const CreateTransaction = function (req, res) {
    transactionsModel.create({
        name: req.body.name,
        email: req.body.email,
        plan: req.body.plan,
        startDate: Date.parse(req.body.startDate),
        endDate: Date.parse(req.body.endDate),
        price: (req.body.price)
    }, (err, data) => {
        if (err) {
            res
                .status(404)
                .json(err);
        } else {
            res
                .status(200)
                .json(data);
        }
    });
};



module.exports = {
    getAllTransactions,
    CreateTransaction
};