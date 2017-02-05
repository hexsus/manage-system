const express = require('express');
const app = express();
const path = require('path');
const http = require('http');

let bodyParser = require('body-parser');
let {mongoose} = require('./server/db/mongoose');
const port = process.env.PORT || '3000';
const api = require('./server/routes/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Server start at port ${port}`));
