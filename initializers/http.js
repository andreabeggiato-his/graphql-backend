const http = require('http');
const expressInitializer = require('./express');

const init = async () => {
  const app = await expressInitializer.initPromise;
  const httpServer = http.createServer(app);

  return httpServer;
}

module.exports = {
  initPromise: init()
};