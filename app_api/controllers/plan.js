const mongoose = require('mongoose');
const plansModel = mongoose.model('Plan');


var sendJSONResponse = function (res, status, content) {
  res.status(status);
  res.json(content);
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
        sendJSONResponse(res, 200, data);
      });
  } else {
    sendJSONResponse(res, 404, {
      "message": "No input parameter in request"
    });
  }
};

const createPlan = function(req, res) {
  plansModel.create(req.body, (err, data) => {
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


const updatePlan = function(req, res) {
  if (!req.params.planid) {
      sendJSONResponse(res, 404, { message: "Not found, Planid is required" });
  } else {
      plansModel.findById(req.params.planid).exec((err, PlanData) => {
          if (!PlanData) {
              sendJSONResponse(res, 404, { message: "Planid not found" });
          } else if (err) {
              sendJSONResponse(res, 400, err);
          } else {
                PlanData.name = req.body.name,
                  PlanData.price = req.body.price,
                  PlanData.features = req.body.features,
                  PlanData.save((err, PlanData) => {
                      if (err) {
                          sendJSONResponse(res, 400, err);
                      } else {
                          sendJSONResponse(res, 200, PlanData);
                      }
                  });
          }
      });
  }
};

const deletePlan = function(req, res) {
  const Planid = req.params.planid;

  if (Planid) {
      plansModel
          .findByIdAndRemove(Planid)
          .exec((err, data) => {
              if (err) {
                  res
                      .status(404)
                      .json(err);
                  return;
              }
              res
                  .status(204)
                  .json(null);
          });
  } else {
      res
          .status(404)
          .json({ "message": "No Planid" });
  }
};


module.exports = {
  getAllPlans,
  getSinglePlan,
  createPlan,
  updatePlan,
  deletePlan
};