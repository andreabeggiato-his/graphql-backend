const express = require('express');

const init = async () => {
  const app = express();

  return app;
}

module.exports = {
  initPromise: init()
};