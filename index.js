const express = require('express');
const app = express();
const loginRoutes = require('./routes/loginRoutes');
const {getMsqlConn} = require('./db/mysql');

