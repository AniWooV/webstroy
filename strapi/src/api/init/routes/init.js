"use strict";

/**
 * init router
 */

// module.exports = createCoreRouter('api::init.init');

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/init",
      handler: "init.init",
      config: {
        policies: [],
      },

      /*config: {
          middlewares: [
            // point to a registered middleware
            'middleware-name', 
  
            // point to a registered middleware with some custom configuration
            { name: 'middleware-name', config: {} }, 
  
            // pass a middleware implementation directly
            (ctx, next) => {
              return next();
            },
          ],
        },*/
    },
  ],
};
