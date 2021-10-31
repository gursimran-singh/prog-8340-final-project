const mongoose = require('mongoose');
const coinsModel = mongoose.model('coinsModel');
const plansModel = mongoose.model('plansModel');



var sendJSONResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};


 
const getAllCoins = function (req, res) {
  coinsModel.find().exec(function (err, data) {
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

const getAllPlans = function (req, res) {
  plansModel.find().exec(function (err, data) {
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

const getSinglePlan = function (req, res) {
  if (req.params && req.params.planid) {
    plansModel
      .findById(req.params.planid)
      .exec(function (err, data) {
        if (!plansModel) {
          sendJSONResponse(res, 404, {
            "message": "planid not found"
          });
          return;
        } else if (err) {
          sendJSONResponse(res, 404, err);
          return;
        }
        sendJSONResponse(res, 200, food);
      });
  } else {
    sendJSONResponse(res, 404, {
      "message": "No input parameter in request"
    });
  }
};


module.exports = {
  getAllCoins,
  getAllPlans,
  getSinglePlan
};