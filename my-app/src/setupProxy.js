const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/testAPI', createProxyMiddleware({ target: 'http://localhost:9000' }));
};
