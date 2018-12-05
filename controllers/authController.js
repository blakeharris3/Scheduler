// const express = require('express');
// const router = express.Router();
// const User = require('../models/user');

// router.post('/', async (req, res) => {
//   console.log(req.body, ' this is session')


//   try {

//     await User.create(req.body);
//     req.session.username = req.body.username;


//     res.json({
//       status: 200,
//       data: 'login successful'
//     });



//   } catch(err){
//     console.log(err);
//     res.send(err);
//   }
// });



// module.exports = router;
