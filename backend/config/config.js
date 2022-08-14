const express = require('express');
const morgan = require('morgan');
const path = require('path');

const config = (app) => {
  app.use(express.static(path.join(__dirname, '../../frontend/build')));
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};

module.exports = config;
