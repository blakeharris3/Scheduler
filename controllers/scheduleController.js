const express = require('express');
const router = express.Router();
const Schedule = require('../models/schedule');

// Get Route
router.get('/', async (req, res) => {
    try  {
        const allSchedules = await Schedule.find();
        
        res.json({
            status: 200,
            data: allSchedules
        });
    } catch (err){
        res.send(err)
    }
});

// Create Route
router.post('/', async (req, res) => {

    try {
        const createdSchedule = await Schedule.create(req.body);
        res.json({
            status: 200,
            data: createdSchedule
        });
        
    } catch(err){
        res.send(err);
    }
});

// Update Route
router.put('/:id', async (req, res) => {

    try {
      const updatedSchedule = await Schedule.findByIdAndUpdate(req.params.id, req.body, {new: true});
      res.json({
        status: 200,
        data: updatedSchedule
      });
    } catch(err){
      res.send(err)
    }
  });
  
  
  // Delete route
  router.delete('/:id', async (req, res) => {

    try {
       const deletedSchedule = await Schedule.findByIdAndRemove(req.params.id);
        res.json({
          status: 200,
          data: deletedSchedule
        });
    } catch(err){
      res.send(err);
    }
  });
  



module.exports = router;