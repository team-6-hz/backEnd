const express = require('express')
const { setupLogging } = require("./logging");
const { ROUTES } = require("./routes");
const { setupProxies } = require("./proxy");
const { setupRateLimit } = require("./ratelimit"); 
const cors = require('cors');

 const axios = require('axios');
const app = express();
const port = 3001;
app.use(cors());

setupLogging(app);
setupRateLimit(app, ROUTES);
setupProxies(app, ROUTES);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})