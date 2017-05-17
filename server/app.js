'use strict';

/* get modules */
const express  = require('express');
const app      = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const rootPath = path.normalize(`${__dirname}/..`);

/* configure middleware */
app.set('appPath', path.join(rootPath, 'client'));
app.use(express.static('./client'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

/* setup routes */
app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${app.get('appPath')}/index.html`));
});

module.exports = app;

