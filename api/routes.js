// import modules.
var express = require('express');

// var recipeRouter = express.Router();
// var userRouter = express.Router();
// var brewRouter = express.Router();
// var serviceRouter = express.Router();
// var equipmentRouter = express.Router();

var blogRouter = express.Router();

// import routes.
require('./controllers/BlogController');
// require('./api/recipe')(recipeRouter);
// require('./api/users')(userRouter, passport);
// require('./api/brew_events')(brewRouter);
// require('./api/service')(serviceRouter);
// require('./api/equipment')(equipmentRouter);


// export router.
module.exports = function(router) {
  router.use('/blog', blogRouter);
  // router.use('/recipe', recipeRouter);
  // router.use('/users', userRouter);
  // router.use('/brew', brewRouter);
  // router.use('/service', serviceRouter);
  // router.use('/equipment', equipmentRouter);

};
