//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the angularapp directory
app.use(express.static(__dirname + '/src'));

app.get('/', (req,res) => {

res.render(__dirname + '/index.html')
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
