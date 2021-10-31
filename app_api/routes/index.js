const express = require('express');
const router = express.Router();

const ctrlCoin = require('../controllers/coin');
const ctrlTransaction = require('../controllers/transaction');
const ctrlBlog = require('../controllers/blog');


//locations

router
  .route('/coins')
  .get(ctrlCoin.getAllCoins);

router
  .route('/plans')
  .get(ctrlCoin.getAllPlans);

router
  .route('/plans/planid')
  .get(ctrlCoin.getSinglePlan);

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