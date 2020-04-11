const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
var app = express();
const port = 3000;


const userRoutes = require('./Routes/v1/userRoutes')
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use('/v1/user', userRoutes)

app.listen(port, () => {
    debug(`listening at port ${chalk.green(port)}`);
});
