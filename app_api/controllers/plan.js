const mongoose = require('mongoose');
<<<<<<< HEAD
const plansModel = mongoose.model('Plan');
=======
const plansModel = mongoose.model('BitCoins2');
>>>>>>> 99deb4f9e1c07372bc40cb5ef50bdda459ad2b98


var sendJSONResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
<<<<<<< HEAD
};


const getAllPlans = function(req, res) {
    plansModel.find().exec(function(err, data) {
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

const getSinglePlan = function(req, res) {
    if (req.params && req.params.planid) {
        plansModel
            .findById(req.params.planid)
            .exec(function(err, data) {
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
    getAllPlans,
    getSinglePlan
};
=======
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
    getAllPlans,
    getSinglePlan
  };
>>>>>>> 99deb4f9e1c07372bc40cb5ef50bdda459ad2b98
