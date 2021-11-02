const express = require('express');
const router = express.Router();

const ctrlCoin = require('../controllers/coin');
const ctrlTransaction = require('../controllers/transaction');
const ctrlBlog = require('../controllers/blog');
const ctrlPlan = require('../controllers/plan');


//locations

router
  .route('/coins')
  .get(ctrlCoin.getAllCoins)
  .post(ctrlCoin.createCoin);

router
  .route('/coins/coinid')
  .put(ctrlCoin.updateCoin)
  .delete(ctrlCoin.deleteCoin);

  router
  .route('/featuredCoins')
  .get(ctrlCoin.getFeaturedCoins);

router
  .route('/plans')
  .get(ctrlPlan.getAllPlans);

router
  .route('/plans/planid')
  .get(ctrlPlan.getSinglePlan);

router
  .route('/transactions')
  .get(ctrlTransaction.getAllTransactions)
  .post(ctrlTransaction.CreateTransaction);

router
  .route('/blogs')
  .get(ctrlBlog.getAllBlogs)
  .post(ctrlBlog.createBlog);

router
  .route('/blogs/:blogid')
  .get(ctrlBlog.getSingleBlog)
  .put(ctrlBlog.updateBlog)
  .delete(ctrlBlog.deleteBlog);


module.exports = router;