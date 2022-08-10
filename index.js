const server = require('./server');
const { port, dyno_url } = require('./config');
const wakeDyno = require("woke-dyno");

server.listen(port, () => {
  wakeDyno({
    url: dyno_url,  // url string
    interval: 60000 * 29, // interval in milliseconds (1 minute in this example)
    startNap: [0, 0, 0, 0], // the time to start nap in UTC, as [h, m, s, ms] (05:00 UTC in this example)
    endNap: [0, 0, 0, 0] // time to wake up again, in UTC (09:59:59.999 in this example)
  }).start();
  // eslint-disable-next-line no-console
  console.log(`Listening at port ${port}`);
});