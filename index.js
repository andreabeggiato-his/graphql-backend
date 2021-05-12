const glob = require('glob');
const httpInitializer = require('./initializers/http');

const initializerFiles = glob.sync('./initializers/*.js');

const promises = initializerFiles.map((initializerFile) => {
  const file = require(initializerFile);
  return file.initPromise;
});

Promise.all([httpInitializer.initPromise, ...promises])
  .then((results) => {
    const [httpServer] = results;
    httpServer.listen(4000, () => {
      console.log('Server started');
    })
  })
  .catch((e) => {
    console.log(e)
  });