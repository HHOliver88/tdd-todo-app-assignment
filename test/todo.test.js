process.env.NODE_ENV = 'test';

const chai                          = require('chai');
const expect                        = chai.expect;
const Connection                    = require('../config/database');
const { Builder, By, Key, until }   = require('selenium-webdriver');

