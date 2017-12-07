const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

// Routers
const usersRouter = require('./server/routes/users');
const eventsRouter = require('./server/routes/events');
// API file for interacting with MongoDB
const api = require('./server/routes/api');

// Parsers
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: false
}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API location
app.use('/', api);
app.use('/api/users', usersRouter);
app.use('/api/events', eventsRouter);

// Send all other requests to Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Set Port
const port = process.env.PORT || '8000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log('Running on localhost: ' + port));
