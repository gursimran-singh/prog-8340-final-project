const mongoose = require('mongoose');
const coinsModel = mongoose.model('Coin');

var sendJSONResponse = function (res, status, content) {
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


const getSingleCoin = function (req, res) {
  if (req.params && req.params.coinid) {
    coinsModel
      .findById(req.params.coinid)
      .exec(function (err, data) {
        if (!coinsModel) {
          sendJSONResponse(res, 404, {
            "message": "coinid not found"
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

const createCoin = function (req, res) {
  coinsModel.create({
    name: req.body.name,
    price: req.body.price,
    marketCap: parseInt(req.body.marketCap),
    volume: parseInt(req.body.volume),
    quantity: parseInt(req.body.quantity),
    image: req.body.image,
    abbre: req.body.abbre,
    isFeatured: req.body.isFeatured,
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



const updateCoin = function (req, res) {
  if (!req.params.coinid) {
    sendJSONResponse(res, 404, { message: "Not found, coinid is required" });
  } else {
    coinsModel.findById(req.params.coinid).exec((err, coinData) => {
      if (!coinData) {
        sendJSONResponse(res, 404, { message: "coinid not found" });
      } else if (err) {
        sendJSONResponse(res, 400, err);
      } else {
        coinData.name = req.body.name,
          coinData.price = req.body.price,
          coinData.marketCap = parseInt(req.body.marketCap),
          coinData.volume = parseInt(req.body.volume),
          coinData.quantity = parseInt(req.body.quantity),
          coinData.image = req.body.image,
          coinData.abbre = req.body.abbre,
          coinData.isFeatured = req.body.isFeatured,
          coinData.save((err, coinData) => {
            if (err) {
              sendJSONResponse(res, 400, err);
            } else {
              sendJSONResponse(res, 200, coinData);
            }
          });
      }
    });
  }
};

const deleteCoin = function (req, res) {
  const coinid = req.params.coinid;

  if (coinid) {
    coinsModel
      .findByIdAndRemove(coinid)
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
      .json({ "message": "No coinid" });
  }
};

module.exports = {
  getAllCoins,
  createCoin,
  updateCoin,
  deleteCoin,
  getSingleCoin,
  getFeaturedCoins
};