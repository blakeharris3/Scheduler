const express = require('express');
const router = express.Router();
const News = require('../models/news');

// Get Route
router.get('/', async (req, res) => {
    try  {
        const allNews = await News.find();
        res.json({
            status: 200,
            data: allNews
        });
    } catch (err){
        res.send(err)
    }
});

// Create Route
router.post('/', async (req, res) => {

    try {
        const newNews = await News.create(req.body);
        res.json({
            status: 200,
            data: newNews
        });
        
    } catch(err){
        res.send(err);
    }
});

// Update Route
router.put('/:id', async (req, res) => {

    try {
      const updateNews = await News.findByIdAndUpdate(req.params.id, req.body, {new: true});
      res.json({
        status: 200,
        data: updateNews
      });
    } catch(err){
      res.send(err)
    }
  });
  
  
  // Delete route
  router.delete('/:id', async (req, res) => {

    try {
       const deletedNews = await News.findByIdAndRemove(req.params.id);
        res.json({
          status: 200,
          data: deletedNews
        });
    } catch(err){
      res.send(err);
    }
  });
  



module.exports = router;