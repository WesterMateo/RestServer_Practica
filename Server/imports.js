require("../config/config")
const express = require('express')
const hbs = require('hbs')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const color = require('colors')
const bcrypt = require('bcrypt')
const _ = require('underscore')
const uniqueValidator = require('mongoose-unique-validator')
module.exports = {
    hbs,
    express,
    bodyParser,
    mongoose,
    color,
    bcrypt,
    uniqueValidator,
    _
}