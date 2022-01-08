const cron = require('node-cron');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, '/data/btc');

// Schedule tasks to be run on the server.
const cronJob = () => {
  cron.schedule('* * * * *', function () {
    axios
      .get(process.env.URL_API)
      .then(function (response) {
        // writeFile function with filename, content and callback function

        fs.writeFile(`${dirPath}/btc.json`, `${response.data}`, function (err) {
          if (err) throw err;
          console.log('File is created successfully.');
        });

        // post vers une db
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  });
};

export { cronJob };
